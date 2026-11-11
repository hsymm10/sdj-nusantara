import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
	const chrome = spawn('/usr/bin/google-chrome', [
		'--headless=new',
		'--no-sandbox',
		'--disable-gpu',
		'--disable-dev-shm-usage',
		'--remote-debugging-port=9889',
		'--window-size=1440,900',
		'about:blank'
	]);

	await new Promise(r => setTimeout(r, 1500));
	const targets = await (await fetch('http://127.0.0.1:9889/json/list')).json();
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
	await send('Emulation.setDeviceMetricsOverride', {
		width: 1440,
		height: 900,
		deviceScaleFactor: 1,
		mobile: false
	});

	await send('Page.navigate', { url: 'http://127.0.0.1:5173/layanan/pendidikan' });
	await new Promise(r => setTimeout(r, 2500));

	const sections = [
		'hero-pendidikan',
		'dampak-nyata',
		'program-pendidikan',
		'tentang-sdj',
		'solusi-terintegrasi',
		'tahap-pendampingan',
		'akses-beasiswa',
		'persiapan-beasiswa',
		'artikel-wawasan',
		'faq-pendidikan',
		'mitra-kolaborasi'
	];

	for (const secId of sections) {
		const res = await send('Runtime.evaluate', {
			expression: `(() => {
				const el = document.getElementById('${secId}');
				if (!el) return null;
				el.scrollIntoView({ behavior: 'instant', block: 'start' });
				return true;
			})()`,
			returnByValue: true
		});

		await new Promise(r => setTimeout(r, 500));
		const ss = await send('Page.captureScreenshot', { format: 'jpeg', quality: 90 });
		fs.writeFileSync(`scratch/view_${secId}.jpg`, Buffer.from(ss.data, 'base64'));
		console.log(`Saved scratch/view_${secId}.jpg`);
	}

	ws.close();
	chrome.kill();
}

run();

