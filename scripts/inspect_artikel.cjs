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

async function inspect(width = 1536, height = 2306, screenshotPath = 'screenshots/artikel-v3-tahap1.png') {
  await ensureChrome();
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/artikel', { method: 'PUT' });
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

  await new Promise((resolve) => { ws.onopen = resolve; });

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');

  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: false
  });

  await new Promise(r => setTimeout(r, 1500));

  const metrics = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const getB = (sel) => {
          const el = document.querySelector(sel);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            top: Math.round(rect.top + window.scrollY),
            bottom: Math.round(rect.bottom + window.scrollY),
            height: Math.round(rect.height),
            width: Math.round(rect.width),
            left: Math.round(rect.left + window.scrollX),
            right: Math.round(rect.right + window.scrollX)
          };
        };

        const body = document.body;
        const html = document.documentElement;
        const totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const scrollWidth = Math.max(body.scrollWidth, html.scrollWidth);
        const innerWidth = window.innerWidth;

        const pill = document.querySelector('.pill-tag');
        let pillCenterY = null;
        if (pill) {
          const r = pill.getBoundingClientRect();
          pillCenterY = Math.round(r.top + r.height / 2 + window.scrollY);
        }

        const heroBtn = document.querySelector('.btn-gold');
        let heroBtnBottom = null;
        if (heroBtn) {
          heroBtnBottom = Math.round(heroBtn.getBoundingClientRect().bottom + window.scrollY);
        }

        const catBar = document.querySelector('.category-bar');
        let catBarTop = null;
        if (catBar) {
          catBarTop = Math.round(catBar.getBoundingClientRect().top + window.scrollY);
        }

        return {
          totalHeight,
          scrollWidth,
          innerWidth,
          overflow: scrollWidth > innerWidth,
          pillCenterY,
          heroBtnBottom,
          catBarTop,
          btnToCardDist: catBarTop && heroBtnBottom ? catBarTop - heroBtnBottom : null,
          navbar: getB('.navbar') || getB('header'),
          hero: getB('.hero-article'),
          categoryBar: getB('.category-bar'),
          contentSection: getB('.article-content-section') || getB('.content-section'),
          cta: getB('.cta-banner'),
          footer: getB('.footer') || getB('footer')
        };
      })()
    `,
    returnByValue: true
  });

  console.log(JSON.stringify(metrics.result.value, null, 2));

  if (screenshotPath) {
    const screenshot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: {
        x: 0,
        y: 0,
        width: width,
        height: metrics.result.value.totalHeight,
        scale: 1
      }
    });

    const buffer = Buffer.from(screenshot.data, 'base64');
    fs.writeFileSync(screenshotPath, buffer);
    console.log('Saved screenshot to ' + screenshotPath);
  }

  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`, { method: 'PUT' });
  ws.close();
}

const args = process.argv.slice(2);
const w = parseInt(args[0]) || 1536;
const h = parseInt(args[1]) || 2306;
const shot = args[2] || 'screenshots/artikel-v3-tahap1.png';

inspect(w, h, shot).catch(err => {
  console.error('Inspection error:', err);
  process.exit(1);
});
