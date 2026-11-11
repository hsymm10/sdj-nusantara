const fs = require('fs');
const { spawn } = require('child_process');

async function ensureChrome() {
  let reachable = false;
  try {
    const res = await fetch('http://127.0.0.1:9222/json/version');
    if (res.ok) reachable = true;
  } catch (e) {}

  if (!reachable) {
    const chromeProc = spawn('google-chrome', [
      '--headless=new',
      '--disable-gpu',
      '--disable-background-networking',
      '--remote-debugging-port=9222',
      '--remote-allow-origins=*',
      '--no-sandbox'
    ], { stdio: 'ignore', detached: true });
    chromeProc.unref();

    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const res = await fetch('http://127.0.0.1:9222/json/version');
        if (res.ok) { reachable = true; break; }
      } catch (e) {}
    }
  }
}

async function capture() {
  await ensureChrome();

  const url = 'http://127.0.0.1:5173/layanan/pendidikan';
  const outDir = '/home/hszamm/.gemini/antigravity/brain/cb0bc971-0a92-4869-a2d3-f69e26d78b4e';

  const viewports = [
    { width: 1440, height: 1600, name: 'tentang_layanan_1440.png' },
    { width: 1024, height: 1800, name: 'tentang_layanan_1024.png' },
    { width: 390, height: 2600, name: 'tentang_layanan_390.png' }
  ];

  for (const vp of viewports) {
    console.log(`Capturing ${vp.name}...`);
    const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?' + encodeURIComponent(url), { method: 'PUT' });
    const target = await newTargetRes.json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);

    let id = 1;
    const callbacks = new Map();

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        callbacks.set(msgId, { resolve, reject });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.id && callbacks.has(data.id)) {
          const { resolve, reject } = callbacks.get(data.id);
          callbacks.delete(data.id);
          if (data.error) reject(new Error(JSON.stringify(data.error)));
          else resolve(data.result);
        }
      };
    });

    await send('Page.enable');
    await send('DOM.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: vp.width < 600
    });

    // Wait for image decode and layout
    await send('Runtime.evaluate', {
      expression: `
        new Promise(resolve => {
          setTimeout(() => {
            const imgs = Array.from(document.querySelectorAll('#tentang-sdj img, #solusi-terintegrasi img'));
            Promise.all(imgs.map(img => {
              if (img.complete) return Promise.resolve();
              return new Promise(r => { img.onload = r; img.onerror = r; });
            })).then(resolve);
          }, 1000);
        })
      `,
      awaitPromise: true
    });

    const boxEval = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sec1 = document.getElementById('tentang-sdj');
          const sec2 = document.getElementById('solusi-terintegrasi');
          if (!sec1 || !sec2) return null;
          const r1 = sec1.getBoundingClientRect();
          const r2 = sec2.getBoundingClientRect();
          const top = Math.min(r1.top, r2.top) + window.scrollY;
          const bottom = Math.max(r1.bottom, r2.bottom) + window.scrollY;
          return {
            x: 0,
            y: top,
            width: ${vp.width},
            height: bottom - top
          };
        })()
      `,
      returnByValue: true
    });

    const clip = boxEval.result.value;
    if (clip) {
      clip.scale = 1;
      const screenshot = await send('Page.captureScreenshot', {
        format: 'png',
        clip,
        captureBeyondViewport: true
      });

      fs.writeFileSync(`${outDir}/${vp.name}`, Buffer.from(screenshot.data, 'base64'));
      console.log(`Saved ${vp.name} (${clip.width}x${Math.round(clip.height)})`);
    }

    await send('Page.close');
    ws.close();
  }

  console.log('Done capturing!');
}

capture().catch(console.error);
