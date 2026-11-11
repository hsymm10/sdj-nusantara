import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class ChromeClient {
	constructor(port = 9889) {
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
	const client = new ChromeClient(9889);
	try {
		console.log('Starting Chrome...');
		await client.start(1440, 900);
		await client.navigate('http://127.0.0.1:5175/layanan/pendidikan');

		const viewports = [
			{ w: 1440, h: 900, name: '1440' },
			{ w: 1920, h: 1080, name: '1920' },
			{ w: 768, h: 1024, name: '768' },
			{ w: 390, h: 844, name: '390' }
		];

		// Take section clips on 1440
		const sections = [
			{ id: 'dampak-nyata', name: '01_dampak' },
			{ id: 'program-pendidikan', name: '02_program' },
			{ id: 'tentang-sdj', name: '03_tentang' },
			{ id: 'solusi-terintegrasi', name: '04_layanan' },
			{ id: 'tahap-pendampingan', name: '05_tahap' },
			{ id: 'akses-beasiswa', name: '06_kategori' },
			{ id: 'persiapan-beasiswa', name: '07_prep' },
			{ id: 'artikel-wawasan', name: '08_artikel' },
			{ id: 'faq-pendidikan', name: '09_faq' },
			{ id: 'mitra-kolaborasi', name: '10_mitra' }
		];

		for (const sec of sections) {
			const box = await client.evaluate(`(() => {
				const el = document.getElementById('${sec.id}');
				if (!el) return null;
				const top = el.getBoundingClientRect().top + window.scrollY;
				window.scrollTo(0, Math.max(0, top - 40));
				const r = el.getBoundingClientRect();
				return { x: Math.max(0, r.x), y: Math.max(0, r.y), width: r.width, height: r.height };
			})()`);

			await new Promise(r => setTimeout(r, 400));
			if (box && box.height > 0) {
				await client.screenshot(`screenshots/sec_${sec.name}_1440.png`, {
					x: Math.round(box.x),
					y: Math.round(box.y),
					width: Math.round(box.width),
					height: Math.round(box.height),
					scale: 1
				});
			}
		}

		for (const vp of viewports) {
			await client.setViewport(vp.w, vp.h, 1, vp.w <= 768);
			await client.evaluate('window.scrollTo(0, 0)');
			await new Promise(r => setTimeout(r, 300));
			await client.screenshot(`screenshots/edu_vp_${vp.name}.png`);
		}

		console.log('All screenshots completed successfully!');
	} catch (e) {
		console.error('Error during capture:', e);
	} finally {
		await client.close();
	}
}

run();
