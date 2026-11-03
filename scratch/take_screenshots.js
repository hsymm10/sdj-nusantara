import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class ChromeClient {
	constructor(port = 9555) {
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

	async setViewport(width, height, scale = 1, isMobile = false) {
		await this.send('Emulation.setDeviceMetricsOverride', {
			width,
			height,
			deviceScaleFactor: scale,
			mobile: isMobile
		});
		await new Promise(r => setTimeout(r, 300));
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
	const client = new ChromeClient(9555);
	try {
		console.log('Starting Chrome...');
		await client.start(1536, 1200);

		console.log('Navigating to http://127.0.0.1:5173/kontak...');
		await client.navigate('http://127.0.0.1:5173/kontak');

		// Scroll precisely to .service-area-section
		await client.evaluate(`
			(() => {
				const el = document.querySelector('.service-area-section');
				if (el) {
					el.scrollIntoView({ behavior: 'instant', block: 'start' });
				}
			})()
		`);
		await new Promise(r => setTimeout(r, 500));

		// Check bounding rect
		const rect = await client.evaluate(`
			(() => {
				const el = document.querySelector('.service-area-section');
				if (!el) return null;
				const r = el.getBoundingClientRect();
				return { y: r.y, height: r.height, top: r.top };
			})()
		`);
		console.log('Section rect after scroll to start:', rect);

		// Adjust window size to fit section height so screenshot captures exactly the section!
		// Section height is ~340px to 400px. Let's make viewport match or screenshot with window-size.
		await client.setViewport(1536, Math.round(rect.height + 20), 1, false);
		await new Promise(r => setTimeout(r, 300));
		await client.screenshot('screenshots/kontak-peta-v2.png');

		// 2. Zoom 200% (scale = 2)
		await client.setViewport(1536, Math.round(rect.height + 20), 2, false);
		await new Promise(r => setTimeout(r, 300));
		await client.screenshot('screenshots/kontak-peta-v2-zoom.png');

		// 3. Mobile 390
		await client.setViewport(390, 844, 2, true);
		await client.evaluate(`
			(() => {
				const el = document.querySelector('.service-area-section');
				if (el) {
					el.scrollIntoView({ behavior: 'instant', block: 'start' });
				}
			})()
		`);
		await new Promise(r => setTimeout(r, 500));
		const mobileRect = await client.evaluate(`
			(() => {
				const el = document.querySelector('.service-area-section');
				return el ? el.getBoundingClientRect().height : 600;
			})()
		`);
		await client.setViewport(390, Math.round(mobileRect + 20), 2, true);
		await new Promise(r => setTimeout(r, 300));
		await client.screenshot('screenshots/kontak-peta-v2-390.png');

		console.log('Screenshots completed successfully!');
	} catch (e) {
		console.error('Error taking screenshots:', e);
		process.exit(1);
	} finally {
		await client.close();
	}
}

run();
