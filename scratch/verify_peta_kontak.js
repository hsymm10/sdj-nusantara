import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class ChromeClient {
	constructor(port = 9333) {
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
		await new Promise(r => setTimeout(r, 2500));
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

	async screenshotElement(selector, filepath, scale = 1) {
		const rect = await this.evaluate(`
			(() => {
				const el = document.querySelector('${selector}');
				if (!el) return null;
				el.scrollIntoView({ block: 'center' });
				const r = el.getBoundingClientRect();
				return { x: r.x, y: r.y, width: r.width, height: r.height };
			})()
		`);

		if (!rect) {
			throw new Error('Element not found: ' + selector);
		}

		await new Promise(r => setTimeout(r, 500));

		// Get updated rect after scroll
		const updatedRect = await this.evaluate(`
			(() => {
				const el = document.querySelector('${selector}');
				const r = el.getBoundingClientRect();
				return { x: r.x, y: r.y, width: r.width, height: r.height };
			})()
		`);

		const clip = {
			x: Math.max(0, updatedRect.x),
			y: Math.max(0, updatedRect.y),
			width: updatedRect.width,
			height: updatedRect.height,
			scale: 1
		};

		const res = await this.send('Page.captureScreenshot', {
			format: 'png',
			clip
		});

		const buffer = Buffer.from(res.data, 'base64');
		const dir = path.dirname(filepath);
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
		fs.writeFileSync(filepath, buffer);
		console.log(`Saved screenshot: ${filepath} (${buffer.length} bytes, clip: ${JSON.stringify(clip)})`);
	}

	async checkOverflow(width, height) {
		await this.setViewport(width, height, 1, width < 768);
		return await this.evaluate(`
			(() => {
				const doc = document.documentElement;
				const body = document.body;
				const scrollW = Math.max(doc.scrollWidth, body.scrollWidth);
				const clientW = window.innerWidth;
				const diff = scrollW - clientW;
				return {
					viewport: ${width},
					scrollW,
					clientW,
					hasOverflow: diff > 1,
					diff
				};
			})()
		`);
	}

	async close() {
		if (this.ws) this.ws.close();
		if (this.process) this.process.kill();
	}
}

async function run() {
	const client = new ChromeClient(9333);
	try {
		console.log('Starting Chrome on port 9333...');
		await client.start(1536, 1000);

		console.log('Navigating to http://127.0.0.1:5173/kontak...');
		await client.navigate('http://127.0.0.1:5173/kontak');

		// 1. Screenshot 1536 Wilayah Layanan -> screenshots/kontak-peta-v2.png
		console.log('Capturing 1536 desktop section...');
		await client.setViewport(1536, 1000, 1, false);
		await client.screenshotElement('.service-area-section', 'screenshots/kontak-peta-v2.png');

		// 2. Screenshot zoom 200% -> screenshots/kontak-peta-v2-zoom.png
		console.log('Capturing 200% zoom section (scale=2)...');
		await client.setViewport(1536, 1000, 2, false);
		await client.screenshotElement('.service-area-section', 'screenshots/kontak-peta-v2-zoom.png');

		// 3. Screenshot mobile 390 -> screenshots/kontak-peta-v2-390.png
		console.log('Capturing mobile 390 section...');
		await client.setViewport(390, 844, 2, true);
		await client.screenshotElement('.service-area-section', 'screenshots/kontak-peta-v2-390.png');

		// 4. Verification checks on DOM content
		console.log('Running text and content checks...');
		const contentAudit = await client.evaluate(`
			(() => {
				const section = document.querySelector('.service-area-section');
				const text = section ? section.innerText : '';
				const hasOldCardText1 = text.includes('Layanan Dapat Diakses dari Berbagai Daerah');
				const hasOldCardText2 = text.includes('Kami siap berkolaborasi dengan institusi pendidikan di berbagai daerah');
				const hasNewTitle = text.includes('Lokasi SDJNusantara');
				const hasNewAddress = text.includes('Graha Aktiva');
				const mapsLink = section ? section.querySelector('.floating-maps-link') : null;
				const mapsHref = mapsLink ? mapsLink.getAttribute('href') : null;
				const mapsTarget = mapsLink ? mapsLink.getAttribute('target') : null;
				const jakartaMarker = section ? section.querySelector('.jakarta-marker-group') : null;
				const islandPath = section ? section.querySelector('.island-paths') : null;

				return {
					hasOldCardText1,
					hasOldCardText2,
					hasNewTitle,
					hasNewAddress,
					mapsHref,
					mapsTarget,
					hasJakartaMarker: !!jakartaMarker,
					hasIslandPath: !!islandPath,
					dLength: islandPath ? islandPath.getAttribute('d').length : 0
				};
			})()
		`);

		console.log('Content Audit:', JSON.stringify(contentAudit, null, 2));

		// 5. Overflow checks across widths
		const widths = [1920, 1536, 1440, 1280, 1024, 768, 390];
		console.log('Checking horizontal overflow...');
		const overflowResults = [];
		for (const w of widths) {
			const res = await client.checkOverflow(w, 900);
			overflowResults.push(res);
		}
		console.log('Overflow results:', JSON.stringify(overflowResults, null, 2));

	} catch (err) {
		console.error('Error during verification:', err);
		process.exit(1);
	} finally {
		await client.close();
	}
}

run();
