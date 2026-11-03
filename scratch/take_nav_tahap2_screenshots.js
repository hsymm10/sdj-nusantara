import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class ChromeClient {
	constructor(port = 9557) {
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

		for (let i = 0; i < 30; i++) {
			try {
				const res = await fetch(`http://127.0.0.1:${this.port}/json/list`);
				if (res.ok) {
					const targets = await res.json();
					const pageTarget = targets.find((t) => t.type === 'page');
					if (pageTarget && pageTarget.webSocketDebuggerUrl) {
						await this.connect(pageTarget.webSocketDebuggerUrl);
						return;
					}
				}
			} catch (e) {
				await new Promise((r) => setTimeout(r, 200));
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
		await new Promise((r) => setTimeout(r, 1500));
	}

	async setViewport(width, height, scale = 1, isMobile = false) {
		await this.send('Emulation.setDeviceMetricsOverride', {
			width,
			height,
			deviceScaleFactor: scale,
			mobile: isMobile
		});
		await new Promise((r) => setTimeout(r, 200));
	}

	async evaluate(expression) {
		const res = await this.send('Runtime.evaluate', {
			expression,
			returnByValue: true,
			awaitPromise: true
		});
		return res?.result?.value;
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
	const client = new ChromeClient(9557);
	try {
		console.log('Starting Chrome for Tahap 2 Navbar screenshots...');
		await client.start(1536, 700);

		// 1. Desktop 1536 - Dropdown Closed
		await client.navigate('http://127.0.0.1:5173/layanan');
		await client.screenshot('screenshots/nav-v1-tahap2-1536-closed.png');

		// 2. Desktop 1536 - Dropdown Open
		await client.evaluate(`
			(() => {
				const btn = document.querySelector('.dropdown-chevron-btn');
				if (btn) btn.click();
			})()
		`);
		await new Promise((r) => setTimeout(r, 300));
		await client.screenshot('screenshots/nav-v1-tahap2-1536-open.png');

		// 3. Desktop 1536 - Hover Kartu Pendidikan
		await client.evaluate(`
			(() => {
				const card = document.querySelector('.dropdown-card.education');
				if (card) {
					card.focus();
					card.classList.add('hover-sim');
				}
			})()
		`);
		await new Promise((r) => setTimeout(r, 200));
		await client.screenshot('screenshots/nav-v1-tahap2-1536-hover-pendidikan.png');

		// 4. Desktop 1536 - Hover Kartu Hukum
		await client.evaluate(`
			(() => {
				const card = document.querySelector('.dropdown-card.legal');
				if (card) {
					card.focus();
				}
			})()
		`);
		await new Promise((r) => setTimeout(r, 200));
		await client.screenshot('screenshots/nav-v1-tahap2-1536-hover-hukum.png');

		// 5. Tablet 1024
		await client.setViewport(1024, 768, 1, false);
		await client.navigate('http://127.0.0.1:5173/layanan');
		await client.screenshot('screenshots/nav-v1-tahap2-1024.png');

		// 6. Mobile 390 - Drawer
		await client.setViewport(390, 844, 2, true);
		await client.navigate('http://127.0.0.1:5173/layanan');
		await client.evaluate(`
			(() => {
				const btn = document.querySelector('.hamburger');
				if (btn) btn.click();
			})()
		`);
		await new Promise((r) => setTimeout(r, 400));
		await client.screenshot('screenshots/nav-v1-tahap2-390-drawer.png');

		// 7. Mobile 390 - Accordion Open
		await client.evaluate(`
			(() => {
				const btn = document.querySelector('.mobile-accordion-btn');
				if (btn) btn.click();
			})()
		`);
		await new Promise((r) => setTimeout(r, 400));
		await client.screenshot('screenshots/nav-v1-tahap2-390-accordion-open.png');

		console.log('All Tahap 2 screenshots completed successfully!');
	} catch (e) {
		console.error('Error during Tahap 2 screenshots:', e);
		process.exit(1);
	} finally {
		await client.close();
	}
}

run();
