import { spawn } from 'child_process';
import fs from 'fs';

async function fullpage() {
	const chrome = spawn('/usr/bin/google-chrome', [
		'--headless=new',
		'--no-sandbox',
		'--disable-gpu',
		'--disable-dev-shm-usage',
		'--remote-debugging-port=9911',
		'--window-size=1440,900',
		'about:blank'
	]);

	for (let i = 0; i < 30; i++) {
		try {
			const res = await fetch('http://127.0.0.1:9911/json/list');
			if (res.ok) {
				const targets = await res.json();
				if (targets[0]?.webSocketDebuggerUrl) {
					var ws = new WebSocket(targets[0].webSocketDebuggerUrl);
					break;
				}
			}
		} catch (e) {}
		await new Promise(r => setTimeout(r, 200));
	}

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
	await send('Page.navigate', { url: 'http://127.0.0.1:5175/layanan/pendidikan' });
	
	for (let i = 0; i < 20; i++) {
		await new Promise(r => setTimeout(r, 300));
		const chk = await send('Runtime.evaluate', {
			expression: 'document.querySelectorAll("section").length',
			returnByValue: true
		});
		if ((chk?.result?.value || 0) > 3) {
			console.log('Page loaded with', chk.result.value, 'sections');
			break;
		}
	}

	await new Promise(r => setTimeout(r, 1000));

	const totalHeight = await send('Runtime.evaluate', {
		expression: 'Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)',
		returnByValue: true
	});
	const h = totalHeight.result.value || 6000;
	console.log('Total document height:', h);

	await send('Emulation.setDeviceMetricsOverride', {
		width: 1440,
		height: h,
		deviceScaleFactor: 1,
		mobile: false
	});

	await new Promise(r => setTimeout(r, 500));

	const ss = await send('Page.captureScreenshot', { format: 'png' });
	fs.writeFileSync('screenshots/pendidikan_redesign_full_1440.png', Buffer.from(ss.data, 'base64'));
	console.log('Saved screenshots/pendidikan_redesign_full_1440.png (' + ss.data.length + ' chars)');

	ws.close();
	chrome.kill();
}

fullpage();
