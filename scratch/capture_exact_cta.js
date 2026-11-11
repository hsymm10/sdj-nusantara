import { spawn } from 'child_process';
import fs from 'fs';

async function captureClip() {
	const chrome = spawn('/usr/bin/google-chrome', [
		'--headless=new',
		'--no-sandbox',
		'--disable-gpu',
		'--disable-dev-shm-usage',
		'--remote-debugging-port=9788',
		'--window-size=1440,900',
		'about:blank'
	]);

	await new Promise(r => setTimeout(r, 1500));
	const targets = await (await fetch('http://127.0.0.1:9788/json/list')).json();
	const ws = new WebSocket(targets[0].webSocketDebuggerUrl);
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

	for (const page of ['layanan', 'pendidikan', 'hukum']) {
		const targetUrl = 'http://127.0.0.1:5175/layanan' + (page === 'layanan' ? '' : '/' + page);
		console.log('Navigating to', targetUrl);
		await send('Page.navigate', { url: targetUrl });
		
		// wait for selector to exist
		let found = false;
		for (let i = 0; i < 20; i++) {
			await new Promise(r => setTimeout(r, 300));
			const chk = await send('Runtime.evaluate', {
				expression: '!!document.querySelector(".cta-banner.variant-layanan")',
				returnByValue: true
			});
			if (chk?.result?.value) {
				found = true;
				break;
			}
		}

		if (!found) {
			console.log(page, 'not found!');
			continue;
		}

		await new Promise(r => setTimeout(r, 600));

		const evalRes = await send('Runtime.evaluate', {
			expression: `(() => {
				const el = document.querySelector('.cta-banner.variant-layanan');
				if (!el) return null;
				el.scrollIntoView({ block: 'center' });
				const r = el.getBoundingClientRect();
				return { x: r.x, y: r.y, width: r.width, height: r.height };
			})()`,
			returnByValue: true
		});

		console.log(page, 'eval result:', evalRes);
		const c = evalRes.result.value;
		if (c) {
			const ss = await send('Page.captureScreenshot', {
				clip: { x: Math.max(0, c.x), y: Math.max(0, c.y), width: c.width, height: c.height, scale: 1 }
			});
			fs.writeFileSync('screenshots/exact_cta_' + page + '.png', Buffer.from(ss.data, 'base64'));
			console.log('Saved screenshots/exact_cta_' + page + '.png (' + ss.data.length + ' chars)');
		}
	}

	ws.close();
	chrome.kill();
}
captureClip();
