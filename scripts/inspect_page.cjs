const fs = require('fs');
const { spawn } = require('child_process');

async function main() {
  const width = parseInt(process.argv[2] || '1536', 10);
  const height = parseInt(process.argv[3] || '2304', 10);
  const screenshotPath = process.argv[4] || null;
  const url = process.argv[5] || 'http://127.0.0.1:5173/tentang-kami';

  let chromeProc = null;
  // Check if CDP is running on 9222
  let reachable = false;
  try {
    const res = await fetch('http://127.0.0.1:9222/json/version');
    if (res.ok) reachable = true;
  } catch (e) {}

  if (!reachable) {
    chromeProc = spawn('google-chrome', [
      '--headless',
      '--disable-gpu',
      '--disable-background-networking',
      '--remote-debugging-port=9222',
      '--no-sandbox'
    ], { stdio: 'ignore' });
    // wait for chrome to start
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
      const hero = document.querySelector('.hero-about')?.getBoundingClientRect();
      const prof = document.querySelector('.profile-section')?.getBoundingClientRect();
      const vm = document.querySelector('.visi-misi-section')?.getBoundingClientRect();
      const nil = document.querySelector('.nilai-section')?.getBoundingClientRect();
      const pend = document.querySelector('.pendekatan-section')?.getBoundingClientRect();
      const str = document.querySelector('.struktur-section')?.getBoundingClientRect();
      const cta = document.querySelector('.cta-banner')?.getBoundingClientRect();
      const foot = document.querySelector('.footer')?.getBoundingClientRect();

      return {
        totalHeight: h,
        scrollWidth: w,
        innerWidth: innerW,
        overflow: w > innerW,
        hero: hero ? { top: Math.round(hero.top + window.scrollY), height: Math.round(hero.height) } : null,
        profil: prof ? { top: Math.round(prof.top + window.scrollY), height: Math.round(prof.height) } : null,
        visiMisi: vm ? { top: Math.round(vm.top + window.scrollY), height: Math.round(vm.height) } : null,
        nilai: nil ? { top: Math.round(nil.top + window.scrollY), height: Math.round(nil.height) } : null,
        pendekatan: pend ? { top: Math.round(pend.top + window.scrollY), height: Math.round(pend.height) } : null,
        struktur: str ? { top: Math.round(str.top + window.scrollY), height: Math.round(str.height) } : null,
        cta: cta ? { top: Math.round(cta.top + window.scrollY), height: Math.round(cta.height) } : null,
        footer: foot ? { top: Math.round(foot.top + window.scrollY), height: Math.round(foot.height) } : null,
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

  // Close target
  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`);
  ws.close();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
