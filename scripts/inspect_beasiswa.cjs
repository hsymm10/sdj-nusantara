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

async function inspect(width = 1536, height = 2304, screenshotPath = 'screenshots/beasiswa-v2-awal.png') {
  await ensureChrome();
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/beasiswa', { method: 'PUT' });
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

  await new Promise((resolve) => ws.onopen = resolve);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      const cb = callbacks.get(data.id);
      callbacks.delete(data.id);
      if (data.error) cb.reject(data.error);
      else cb.resolve(data.result);
    }
  };

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: false
  });

  await new Promise(r => setTimeout(r, 1500));

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const getBox = (sel) => {
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
        totalHeight: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        overflow: document.documentElement.scrollWidth > window.innerWidth,
        navbar: getBox('header') || getBox('nav'),
        hero: getBox('.hero-scholarship'),
        features: getBox('.sch-feature-overlap-wrap') || getBox('.feature-card') || getBox('.feature-overlap-wrap'),
        searchSection: getBox('.sch-search-section') || getBox('.scholarship-search-section'),
        prepGuide: getBox('.prep-guide-section') || getBox('.scholarship-prep-guide'),
        categories: getBox('.category-section') || getBox('.scholarship-category-section'),
        cta: getBox('.cta-banner-section') || getBox('.cta-banner'),
        footer: getBox('.footer')
      };
    })()`,
    returnByValue: true
  });

  const ss = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });
  fs.writeFileSync(screenshotPath, Buffer.from(ss.data, 'base64'));

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  ws.close();

  console.log(JSON.stringify(evalRes.result ? evalRes.result.value : evalRes, null, 2));
  console.log('Saved screenshot to ' + screenshotPath);
}

const w = parseInt(process.argv[2] || '1536');
const h = parseInt(process.argv[3] || '2304');
const out = process.argv[4] || 'screenshots/beasiswa-v2-awal.png';

inspect(w, h, out).catch(console.error);
