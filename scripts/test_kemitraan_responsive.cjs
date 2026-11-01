const fs = require('fs');
const { spawn } = require('child_process');

async function ensureChrome() {
  let reachable = false;
  try {
    const res = await fetch('http://127.0.0.1:9222/json/version');
    if (res.ok) reachable = true;
  } catch (e) {}

  if (!reachable) {
    spawn('google-chrome', [
      '--headless',
      '--disable-gpu',
      '--disable-background-networking',
      '--remote-debugging-port=9222',
      '--no-sandbox'
    ], { stdio: 'ignore' });
    for (let i = 0; i < 25; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const res = await fetch('http://127.0.0.1:9222/json/version');
        if (res.ok) { reachable = true; break; }
      } catch (e) {}
    }
  }
}

async function runTest() {
  await ensureChrome();

  const viewports = [
    { name: '1920', width: 1920, height: 1080 },
    { name: '1536', width: 1536, height: 2306, screenshot: 'screenshots/kemitraan-v3-final.png' },
    { name: '1440', width: 1440, height: 900 },
    { name: '1280', width: 1280, height: 800 },
    { name: '768', width: 768, height: 1024 },
    { name: '390', width: 390, height: 844 },
    { name: '360', width: 360, height: 780 }
  ];

  const results = [];

  for (const vp of viewports) {
    const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/kemitraan', { method: 'PUT' });
    const target = await newTargetRes.json();
    const wsUrl = target.webSocketDebuggerUrl;

    const ws = new WebSocket(wsUrl);
    let id = 1;
    const callbacks = new Map();

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        callbacks.set(msgId, { resolve, reject });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        const cb = callbacks.get(msg.id);
        callbacks.delete(msg.id);
        if (msg.error) cb.reject(msg.error);
        else cb.resolve(msg.result);
      }
    };

    await new Promise(r => { ws.onopen = r; });

    await send('Page.enable');
    await send('DOM.enable');
    await send('Runtime.enable');

    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width <= 768
    });

    await new Promise(r => setTimeout(r, 1200));

    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const body = document.body;
          const html = document.documentElement;
          const totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
          const scrollWidth = Math.max(body.scrollWidth, html.scrollWidth);
          const innerWidth = window.innerWidth;
          
          const getB = (sel) => {
            const el = document.querySelector(sel);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return {
              top: Math.round(rect.top + window.scrollY),
              height: Math.round(rect.height),
              width: Math.round(rect.width)
            };
          };

          return {
            totalHeight,
            scrollWidth,
            innerWidth,
            hasOverflow: scrollWidth > innerWidth,
            navbar: getB('.navbar') || getB('header'),
            hero: getB('.hero-partner'),
            approach: getB('#pendekatan-kami'),
            types: getB('#jenis-mitra'),
            collabForms: getB('#bentuk-kerja-sama'),
            focusFields: getB('#bidang-kolaborasi'),
            workflow: getB('#alur-kerja-sama'),
            cta: getB('.cta-banner'),
            footer: getB('.footer') || getB('footer')
          };
        })()
      `,
      returnByValue: true
    });

    const data = evalRes.result.value;
    results.push({ viewport: vp.name, ...data });

    if (vp.screenshot) {
      const screenshot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true,
        clip: {
          x: 0,
          y: 0,
          width: vp.width,
          height: data.totalHeight,
          scale: 1
        }
      });
      const buffer = Buffer.from(screenshot.data, 'base64');
      fs.writeFileSync(vp.screenshot, buffer);
      console.log(`Saved screenshot to ${vp.screenshot}`);
    }

    await fetch(`http://127.0.0.1:9222/json/close/${target.id}`, { method: 'PUT' });
    ws.close();
  }

  console.log(JSON.stringify(results, null, 2));
}

runTest().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
