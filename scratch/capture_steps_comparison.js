import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
	const chrome = spawn('/usr/bin/google-chrome', [
		'--headless=new',
		'--no-sandbox',
		'--disable-gpu',
		'--disable-dev-shm-usage',
		'--remote-debugging-port=9890',
		'--window-size=1440,900',
		'about:blank'
	]);

	await new Promise(r => setTimeout(r, 1500));
	const targets = await (await fetch('http://127.0.0.1:9890/json/list')).json();
	const pageTarget = targets.find(t => t.type === 'page') || targets[0];
	const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
	await new Promise(r => ws.onopen = r);

	let id = 0;
	function send(method, params = {}) {
		return new Promise(resolve => {
			const curId = ++id;
			const handler = (ev) => {
				const d = JSON.parse(ev.data);
				if (d.id === curId) {
					ws.removeEventListener('message', handler);
					resolve(d.result);
				}
			};
			ws.addEventListener('message', handler);
			ws.send(JSON.stringify({ id: curId, method, params }));
		});
	}

	await send('Page.enable');
	await send('Page.navigate', { url: 'http://127.0.0.1:5173/layanan/pendidikan' });
	await new Promise(r => setTimeout(r, 2500));

	const viewports = [
		{ w: 1440, h: 900, name: '1440' },
		{ w: 1920, h: 1080, name: '1920' },
		{ w: 768, h: 1024, name: '768' },
		{ w: 390, h: 844, name: '390' }
	];

	for (const vp of viewports) {
		await send('Emulation.setDeviceMetricsOverride', {
			width: vp.w,
			height: vp.h,
			deviceScaleFactor: 1,
			mobile: vp.w <= 768
		});
		await new Promise(r => setTimeout(r, 600));

		await send('Runtime.evaluate', {
			expression: `(() => {
				const el = document.getElementById('tahap-pendampingan');
				if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
			})()`
		});
		await new Promise(r => setTimeout(r, 600));

		const box = await send('Runtime.evaluate', {
			expression: `(() => {
				const el = document.getElementById('tahap-pendampingan');
				if (!el) return null;
				const r = el.getBoundingClientRect();
				return { x: Math.max(0, r.x), y: Math.max(0, r.y), width: r.width, height: r.height };
			})()`,
			returnByValue: true
		});

		const c = box.result.value;
		if (c) {
			const ss = await send('Page.captureScreenshot', {
				clip: {
					x: Math.round(c.x),
					y: Math.round(c.y),
					width: Math.round(c.width),
					height: Math.round(c.height),
					scale: 1
				}
			});
			fs.writeFileSync(`screenshots/steps_new_${vp.name}.png`, Buffer.from(ss.data, 'base64'));
			console.log(`Saved screenshots/steps_new_${vp.name}.png (${Math.round(c.width)}x${Math.round(c.height)})`);
		}
	}

	ws.close();
	chrome.kill();
	console.log('Capture completed!');
}

run();

