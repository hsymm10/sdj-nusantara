const fs = require('fs');
const { spawn } = require('child_process');

async function main() {
  const width = parseInt(process.argv[2] || '1536', 10);
  const height = parseInt(process.argv[3] || '3655', 10);
  const screenshotPath = process.argv[4] || null;
  const url = process.argv[5] || 'http://127.0.0.1:5173/layanan';

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
    for (let i = 0; i < 20; i++) {
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
  await send('DOM.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });

  // Navigate & wait
  await send('Page.navigate', { url });
  await new Promise((r) => setTimeout(r, 2500));

  // Evaluate metrics
  const evalResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const h = document.documentElement.scrollHeight;
      const w = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      
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
        totalHeight: h,
        scrollWidth: w,
        innerWidth: innerW,
        overflow: w > innerW,
        hero: getBox('.hero-services, .hero, [class*="hero"]'),
        overlap: getBox('.services-stats-overlap, [class*="stats-overlap"], [class*="overlap"]'),
        intro: getBox('.services-intro, [class*="services-intro"]'),
        blok01: getBox('#layanan-1, .zigzag-item:nth-child(1), [data-service="1"]'),
        blok02: getBox('#layanan-2, .zigzag-item:nth-child(2), [data-service="2"]'),
        blok03: getBox('#layanan-3, .zigzag-item:nth-child(3), [data-service="3"]'),
        blok04: getBox('#layanan-4, .zigzag-item:nth-child(4), [data-service="4"]'),
        blok05: getBox('#layanan-5, .zigzag-item:nth-child(5), [data-service="5"]'),
        cta: getBox('.cta-banner, [class*="cta-banner"]'),
        footer: getBox('.footer, footer')
      };
    })()`,
    returnByValue: true
  });

  const metrics = evalResult.result.value;
  console.log(JSON.stringify(metrics, null, 2));

  if (screenshotPath) {
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true
    });
    fs.writeFileSync(screenshotPath, Buffer.from(shot.data, 'base64'));
    console.log('Saved screenshot to', screenshotPath);
  }

  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`);
  ws.close();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
