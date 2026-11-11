import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
	const chrome = spawn('/usr/bin/google-chrome', [
		'--headless=new',
		'--no-sandbox',
		'--disable-gpu',
		'--disable-dev-shm-usage',
		'--remote-debugging-port=9893',
		'--window-size=1440,900',
		'about:blank'
	]);

	await new Promise(r => setTimeout(r, 1500));
	const targets = await (await fetch('http://127.0.0.1:9893/json/list')).json();
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
		{ w: 1440, h: 650, name: '1440' },
		{ w: 1920, h: 650, name: '1920' },
		{ w: 768, h: 900, name: '768' },
		{ w: 390, h: 900, name: '390' }
	];

	for (const vp of viewports) {
		await send('Emulation.setDeviceMetricsOverride', {
			width: vp.w,
			height: vp.h,
			deviceScaleFactor: 1,
			mobile: vp.w <= 768
		});
		await new Promise(r => setTimeout(r, 500));

		await send('Runtime.evaluate', {
			expression: `(() => {
				const el = document.getElementById('tentang-sdj');
				if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
			})()`
		});
		await new Promise(r => setTimeout(r, 600));

		const ss = await send('Page.captureScreenshot', { format: 'jpeg', quality: 95 });
		fs.writeFileSync(`screenshots/about_view_${vp.name}.jpg`, Buffer.from(ss.data, 'base64'));
		console.log(`Saved screenshots/about_view_${vp.name}.jpg (${vp.w}x${vp.h})`);
	}

	ws.close();
	chrome.kill();
	console.log('Capture completed!');
}

run();

