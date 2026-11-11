import { spawn } from 'child_process';
import fs from 'fs';

async function capture() {
	const chrome = spawn('/usr/bin/google-chrome', [
		'--headless=new',
		'--no-sandbox',
		'--disable-gpu',
		'--disable-dev-shm-usage',
		'--remote-debugging-port=9888',
		'--window-size=1440,900',
		'about:blank'
	]);

	await new Promise(r => setTimeout(r, 1500));
	const targets = await (await fetch('http://127.0.0.1:9888/json/list')).json();
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
	await new Promise(r => setTimeout(r, 2000));

	const viewports = [
		{ w: 1920, h: 1080, name: '1920' },
		{ w: 1440, h: 900, name: '1440' },
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
		await new Promise(r => setTimeout(r, 500));

		// capture sections for 1440
		if (vp.name === '1440') {
			const sections = [
				{ id: 'dampak-nyata', name: 'sec1_dampak' },
				{ id: 'program-pendidikan', name: 'sec2_program' },
				{ id: 'tentang-sdj', name: 'sec3_tentang' },
				{ id: 'solusi-terintegrasi', name: 'sec4_layanan' },
				{ id: 'tahap-pendampingan', name: 'sec5_tahap' },
				{ id: 'akses-beasiswa', name: 'sec6_kategori' },
				{ id: 'persiapan-beasiswa', name: 'sec7_prep' },
				{ id: 'artikel-wawasan', name: 'sec8_artikel' },
				{ id: 'faq-pendidikan', name: 'sec9_faq' },
				{ id: 'mitra-kolaborasi', name: 'sec10_mitra' }
			];

			for (const sec of sections) {
				const box = await send('Runtime.evaluate', {
					expression: `(() => {
						const el = document.getElementById('${sec.id}');
						if (!el) return null;
						el.scrollIntoView({ block: 'center' });
						const r = el.getBoundingClientRect();
						return { x: Math.max(0, r.x), y: Math.max(0, r.y), width: r.width, height: r.height };
					})()`,
					returnByValue: true
				});

				await new Promise(r => setTimeout(r, 300));
				const c = box.result.value;
				if (c && c.height > 0) {
					const ss = await send('Page.captureScreenshot', {
						clip: { x: Math.round(c.x), y: Math.round(c.y), width: Math.round(c.width), height: Math.round(c.height), scale: 1 }
					});
					fs.writeFileSync(`screenshots/edu_redesign_${sec.name}_1440.png`, Buffer.from(ss.data, 'base64'));
					console.log(`Saved screenshots/edu_redesign_${sec.name}_1440.png`);
				}
			}
		}

		// Full page screenshot
		const layout = await send('Page.getLayoutMetrics');
		const contentHeight = Math.ceil(layout.contentSize.height);
		const fullSs = await send('Page.captureScreenshot', {
			clip: { x: 0, y: 0, width: vp.w, height: contentHeight, scale: 1 }
		});
		fs.writeFileSync(`screenshots/edu_redesign_full_${vp.name}.png`, Buffer.from(fullSs.data, 'base64'));
		console.log(`Saved screenshots/edu_redesign_full_${vp.name}.png (${vp.w}x${contentHeight})`);
	}

	ws.close();
	chrome.kill();
	console.log('Capture completed successfully!');
}

capture();
