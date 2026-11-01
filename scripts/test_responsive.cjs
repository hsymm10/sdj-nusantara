const fs = require('fs');
const { spawn } = require('child_process');

const viewports = [
  { name: '1920', width: 1920, height: 1080 },
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '1024', width: 1024, height: 768 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
  { name: '360', width: 360, height: 780 },
];

async function main() {
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

  const results = [];

  for (const vp of viewports) {
    const url = 'http://127.0.0.1:5173/tentang-kami';
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
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 768,
    });

    await send('Page.navigate', { url });
    await new Promise((r) => setTimeout(r, 2000));

    // Check overflow and hamburger
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sw = document.documentElement.scrollWidth;
        const iw = window.innerWidth;
        const hasOverflow = sw > iw;
        
        let hamburgerWorking = false;
        const hamburgerBtn = document.querySelector('button.hamburger, button[aria-label="Toggle navigasi"], button[aria-label="Buka menu"]');
        if (window.innerWidth < 768 && hamburgerBtn) {
          const beforeExpanded = hamburgerBtn.getAttribute('aria-expanded');
          hamburgerBtn.click();
          const afterExpanded = hamburgerBtn.getAttribute('aria-expanded');
          const drawer = document.querySelector('.mobile-menu');
          hamburgerWorking = (afterExpanded === 'true' || !!drawer);
          // close it again
          hamburgerBtn.click();
        } else if (window.innerWidth >= 768) {
          hamburgerWorking = true; // Not needed on desktop
        }

        return {
          scrollWidth: sw,
          innerWidth: iw,
          overflow: hasOverflow,
          hamburgerWorking: hamburgerWorking
        };
      })()`,
      returnByValue: true
    });

    const metrics = evalRes.result.value;
    const shotPath = `screenshots/tentang-v3-${vp.name}.png`;
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true
    });
    fs.writeFileSync(shotPath, Buffer.from(shot.data, 'base64'));

    results.push({
      viewport: `${vp.name} (${vp.width}x${vp.height})`,
      scrollWidth: metrics.scrollWidth,
      innerWidth: metrics.innerWidth,
      overflow: metrics.overflow,
      hamburgerWorking: metrics.hamburgerWorking,
      screenshot: shotPath
    });

    await fetch(`http://127.0.0.1:9222/json/close/${target.id}`);
    ws.close();
  }

  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
