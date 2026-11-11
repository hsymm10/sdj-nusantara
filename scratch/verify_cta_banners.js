import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class ChromeClient {
	constructor(port = 9666) {
		this.port = port;
		this.ws = null;
		this.msgId = 0;
		this.pending = new Map();
		this.process = null;
	}

	async start(width = 1440, height = 900) {
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
		await new Promise(r => setTimeout(r, 1500));
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

	async screenshot(filepath, clip = null) {
		const params = { format: 'png' };
		if (clip) params.clip = clip;
		const res = await this.send('Page.captureScreenshot', params);
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
	const client = new ChromeClient(9666);
	try {
		console.log('Starting Chrome...');
		await client.start(1440, 900);

		const routes = [
			{ url: 'http://127.0.0.1:5175/layanan', name: 'layanan' },
			{ url: 'http://127.0.0.1:5175/layanan/pendidikan', name: 'pendidikan' },
			{ url: 'http://127.0.0.1:5175/layanan/hukum', name: 'hukum' }
		];

		const viewports = [
			{ w: 1440, h: 900, name: '1440' },
			{ w: 768, h: 1024, name: '768' },
			{ w: 390, h: 844, name: '390' }
		];

		for (const route of routes) {
			console.log(`\nTesting ${route.name} (${route.url})...`);
			await client.navigate(route.url);

			for (const vp of viewports) {
				await client.setViewport(vp.w, vp.h, 1, vp.w <= 768);
				const rect = await client.evaluate(`(() => {
					const el = document.querySelector('.cta-banner.variant-layanan');
					if (!el) return null;
					const top = el.getBoundingClientRect().top + window.scrollY;
					window.scrollTo(0, Math.max(0, top - (window.innerHeight - el.offsetHeight) / 2));
					return { top, scrollY: window.scrollY };
				})()`);

				if (!rect) {
					console.error(`  [${vp.name}] .cta-banner.variant-layanan not found on ${route.name}`);
					continue;
				}

				await new Promise(r => setTimeout(r, 600));

				const box = await client.evaluate(`(() => {
					const el = document.querySelector('.cta-banner.variant-layanan');
					const r = el.getBoundingClientRect();
					return { x: Math.max(0, r.x), y: Math.max(0, r.y), width: r.width, height: r.height };
				})()`);

				console.log(`  [${vp.name}] Box:`, box);
				await client.screenshot(`screenshots/cta_${route.name}_${vp.name}.png`);
				if (box && box.height > 0) {
					await client.screenshot(`screenshots/clip_${route.name}_${vp.name}.png`, {
						x: Math.round(box.x),
						y: Math.round(box.y),
						width: Math.round(box.width),
						height: Math.round(box.height),
						scale: 1
					});
				}
			}
		}

		console.log('\nAll done!');
	} catch (err) {
		console.error('Error:', err);
	} finally {
		await client.close();
	}
}

run();

