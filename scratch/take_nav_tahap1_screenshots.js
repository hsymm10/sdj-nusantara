import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class ChromeClient {
	constructor(port = 9556) {
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
		await new Promise((r) => setTimeout(r, 2000));
	}

	async setViewport(width, height, scale = 1, isMobile = false) {
		await this.send('Emulation.setDeviceMetricsOverride', {
			width,
			height,
			deviceScaleFactor: scale,
			mobile: isMobile
		});
		await new Promise((r) => setTimeout(r, 300));
	}

	async screenshot(filepath, fullPage = false) {
		const res = await this.send('Page.captureScreenshot', {
			format: 'png',
			captureBeyondViewport: fullPage
		});
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

async function capture(client, route, namePrefix) {
	console.log(`Capturing ${route}...`);
	// 1536 Desktop
	await client.setViewport(1536, 960, 1, false);
	await client.navigate(`http://127.0.0.1:5173${route}`);
	await new Promise((r) => setTimeout(r, 500));
	await client.screenshot(`screenshots/nav-v1-tahap1-${namePrefix}-1536.png`);

	// 390 Mobile
	await client.setViewport(390, 844, 2, true);
	await new Promise((r) => setTimeout(r, 500));
	await client.screenshot(`screenshots/nav-v1-tahap1-${namePrefix}-390.png`);
}

async function run() {
	const client = new ChromeClient(9556);
	try {
		await client.start(1536, 960);
		await capture(client, '/layanan', 'layanan');
		await capture(client, '/layanan/pendidikan', 'pendidikan');
		await capture(client, '/layanan/hukum', 'hukum');
		console.log('All Tahap 1 screenshots captured successfully!');
	} catch (e) {
		console.error('Error:', e);
		process.exit(1);
	} finally {
		await client.close();
	}
}

run();
