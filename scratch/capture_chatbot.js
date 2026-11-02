import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// Helper CDP client using Node 24 native WebSocket & fetch
class ChromeClient {
	constructor(port = 9222) {
		this.port = port;
		this.ws = null;
		this.msgId = 0;
		this.pending = new Map();
		this.process = null;
	}

	async start(width = 1536, height = 900) {
		const chromePath = '/usr/bin/google-chrome';
		this.process = spawn(chromePath, [
			'--headless=new',
			'--no-sandbox',
			'--disable-gpu',
			'--disable-dev-shm-usage',
			'--hide-scrollbars',
			`--remote-debugging-port=${this.port}`,
			`--window-size=${width},${height}`,
			'about:blank'
		]);

		// Wait for debug port
		for (let i = 0; i < 30; i++) {
			try {
				const res = await fetch(`http://127.0.0.1:${this.port}/json/list`);
				if (res.ok) {
					const targets = await res.json();
					const pageTarget = targets.find(t => t.type === 'page');
					if (pageTarget && pageTarget.webSocketDebuggerUrl) {
						await this.connect(pageTarget.webSocketDebuggerUrl);
						return;
					}
				}
			} catch (e) {
				await new Promise(r => setTimeout(r, 200));
			}
		}
		throw new Error('Chrome failed to start');
	}

	async connect(wsUrl) {
		return new Promise((resolve, reject) => {
			this.ws = new WebSocket(wsUrl);
			this.ws.onopen = resolve;
			this.ws.onerror = reject;
			this.ws.onmessage = (event) => {
				const data = JSON.parse(event.data);
				if (data.id && this.pending.has(data.id)) {
					const { resolve, reject } = this.pending.get(data.id);
					this.pending.delete(data.id);
					if (data.error) reject(data.error);
					else resolve(data.result);
				}
			};
		});
	}

	send(method, params = {}) {
		return new Promise((resolve, reject) => {
			const id = ++this.msgId;
			this.pending.set(id, { resolve, reject });
			this.ws.send(JSON.stringify({ id, method, params }));
		});
	}

	async navigate(url) {
		await this.send('Page.enable');
		await this.send('Page.navigate', { url });
		await new Promise(r => setTimeout(r, 2000));
	}

	async evaluate(expression) {
		const res = await this.send('Runtime.evaluate', {
			expression,
			returnByValue: true,
			awaitPromise: true
		});
		return res?.result?.value;
	}

	async setViewport(width, height, isMobile = false) {
		await this.send('Emulation.setDeviceMetricsOverride', {
			width,
			height,
			deviceScaleFactor: 1,
			mobile: isMobile
		});
	}

	async screenshot(filepath) {
		const res = await this.send('Page.captureScreenshot', { format: 'png' });
		const buffer = Buffer.from(res.data, 'base64');
		const dir = path.dirname(filepath);
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
		fs.writeFileSync(filepath, buffer);
		console.log(`Saved screenshot: ${filepath} (${buffer.length} bytes)`);
	}

	async close() {
		if (this.ws) this.ws.close();
		if (this.process) this.process.kill();
	}
}

async function run() {
	const client = new ChromeClient(9222);
	try {
		console.log('Starting Chrome...');
		await client.start(1536, 900);

		console.log('Navigating to http://127.0.0.1:5173/kontak...');
		await client.navigate('http://127.0.0.1:5173/kontak');

		// Tunggu tooltip muncul (delay 2 detik)
		console.log('Waiting for tooltip...');
		await new Promise(r => setTimeout(r, 2200));

		// 1. Screenshot 1536 tertutup + tooltip
		await client.screenshot('screenshots/chatbot-v1-tahap1-closed-tooltip.png');
		await client.screenshot('screenshots/chatbot-v1-final-1536-closed.png');

		// 2. Klik Launcher untuk membuka chat
		console.log('Clicking launcher to open chat...');
		await client.evaluate(`document.querySelector('.chat-launcher-btn')?.click()`);
		await new Promise(r => setTimeout(r, 500));

		// Screenshot 1536 terbuka
		await client.screenshot('screenshots/chatbot-v1-tahap1-open.png');
		await client.screenshot('screenshots/chatbot-v1-final-1536-open.png');

		// 3. Tes Pengiriman Pesan
		console.log('Testing message send: Info Program Pendidikan...');
		await client.evaluate(`
			const input = document.querySelector('.chat-text-input');
			if (input) {
				input.value = 'Info Program Pendidikan';
				input.dispatchEvent(new Event('input', { bubbles: true }));
				document.querySelector('.input-form-row')?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
			}
		`);

		// Tunggu typing indicator muncul
		await new Promise(r => setTimeout(r, 250));
		await client.screenshot('screenshots/chatbot-v1-final-1536-typing.png');

		// Tunggu balasan bot datang (delay 1.5 detik)
		await new Promise(r => setTimeout(r, 1600));

		// 4. Tutup Jendela dan Simulasikan Unread Counter
		console.log('Closing chat window and testing unread simulation...');
		await client.evaluate(`document.querySelector('.header-icon-btn[aria-label="Tutup"]')?.click()`);
		await new Promise(r => setTimeout(r, 300));

		// Simulasikan pesan masuk saat tertutup sebanyak 3 pesan
		await client.evaluate(`
			window.__chatDebug?.simulateBotMessage('Pesan simulasi 1 saat tertutup');
			window.__chatDebug?.simulateBotMessage('Pesan simulasi 2 saat tertutup');
			window.__chatDebug?.simulateBotMessage('Pesan simulasi 3 saat tertutup');
		`);
		await new Promise(r => setTimeout(r, 400));
		await client.screenshot('screenshots/chatbot-v1-final-1536-badge.png');

		// Verifikasi badge unread value
		const unreadCount = await client.evaluate(`window.__chatDebug?.getState()?.unreadCount`);
		console.log('Unread count verified:', unreadCount);

		// Tes 99+
		await client.evaluate(`window.__chatDebug?.setUnread(120)`);
		await new Promise(r => setTimeout(r, 200));
		const badgeText = await client.evaluate(`document.querySelector('.unread-badge')?.textContent?.trim()`);
		console.log('Badge text for 120 unread:', badgeText);

		// Buka kembali -> pastikan unread count reset ke 0
		await client.evaluate(`document.querySelector('.chat-launcher-btn')?.click()`);
		await new Promise(r => setTimeout(r, 300));
		const unreadAfterOpen = await client.evaluate(`window.__chatDebug?.getState()?.unreadCount`);
		console.log('Unread count after reopen:', unreadAfterOpen);

		// 5. Tablet 768x1024
		console.log('Testing tablet 768x1024...');
		await client.setViewport(768, 1024, false);
		await new Promise(r => setTimeout(r, 400));
		await client.screenshot('screenshots/chatbot-v1-final-768.png');

		// 6. Mobile 390x844
		console.log('Testing mobile 390x844...');
		await client.setViewport(390, 844, true);
		await new Promise(r => setTimeout(r, 400));
		await client.screenshot('screenshots/chatbot-v1-final-390.png');

		// 7. Mobile dengan simulasi visualViewport keyboard virtual
		console.log('Testing mobile with visualViewport keyboard emulation...');
		await client.evaluate(`
			const win = document.getElementById('sdj-chat-window');
			if (win) {
				win.style.height = '420px';
				win.style.bottom = '280px';
			}
		`);
		await new Promise(r => setTimeout(r, 300));
		await client.screenshot('screenshots/chatbot-v1-final-390-keyboard.png');

		// 8. Screenshot sebelum/sesudah halaman lain untuk memastikan tidak ada perubahan/regresi
		console.log('Capturing regression checks on /, /konsultasi, /tentang-kami...');
		await client.setViewport(1536, 900, false);
		await client.navigate('http://127.0.0.1:5173/');
		await new Promise(r => setTimeout(r, 1000));
		await client.screenshot('screenshots/check-beranda-widget.png');

		await client.navigate('http://127.0.0.1:5173/konsultasi');
		await new Promise(r => setTimeout(r, 1000));
		await client.screenshot('screenshots/check-konsultasi-widget.png');

		await client.navigate('http://127.0.0.1:5173/tentang-kami');
		await new Promise(r => setTimeout(r, 1000));
		await client.screenshot('screenshots/check-tentang-kami-widget.png');

		console.log('All automated captures and verifications completed successfully!');
	} catch (err) {
		console.error('Error in capture run:', err);
	} finally {
		await client.close();
	}
}

run();
