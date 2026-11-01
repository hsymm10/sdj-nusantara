const fs = require('fs');
const { spawn } = require('child_process');

async function main() {
  const width = parseInt(process.argv[2] || '1536', 10);
  const height = parseInt(process.argv[3] || '2304', 10);
  const screenshotPath = process.argv[4] || 'screenshots/program-v2-awal.png';
  const url = process.argv[5] || 'http://127.0.0.1:5173/program';

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

  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?' + encodeURIComponent(url), { method: 'PUT' });
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

  const metrics = await send('Runtime.evaluate', {
    expression: `(() => {
      const getB = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          top: Math.round(r.top + window.scrollY),
          height: Math.round(r.height),
          width: Math.round(r.width)
        };
      };

      return {
        totalHeight: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        overflow: document.documentElement.scrollWidth > window.innerWidth,
        navbar: getB('nav') || getB('header'),
        hero: getB('.hero-program') || getB('section:nth-of-type(1)') || getB('.hero'),
        category: getB('.category-overlap-wrap') || getB('.category-card'),
        featured: getB('.featured-program-section') || getB('.featured-navy-card'),
        list: getB('.program-list-section') || getB('#daftar-program'),
        custom: getB('.program-custom-section') || getB('.custom-program'),
        cta: getB('.cta-banner'),
        footer: getB('footer')
      };
    })()`,
    returnByValue: true
  });

  console.log(JSON.stringify(metrics.result.value, null, 2));

  if (screenshotPath) {
    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true
    });
    fs.writeFileSync(screenshotPath, Buffer.from(ss.data, 'base64'));
    console.log('Saved screenshot to ' + screenshotPath);
  }

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  ws.close();
}

main().catch(console.error);
