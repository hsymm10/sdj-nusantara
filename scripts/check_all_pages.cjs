const fs = require('fs');
const { spawn } = require('child_process');

const pages = [
  { path: '/', name: 'beranda' },
  { path: '/layanan', name: 'layanan' },
  { path: '/program', name: 'program' },
  { path: '/beasiswa', name: 'beasiswa' },
  { path: '/kemitraan', name: 'kemitraan' },
  { path: '/artikel', name: 'artikel' },
  { path: '/kontak', name: 'kontak' },
  { path: '/konsultasi', name: 'konsultasi' }
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

  for (const p of pages) {
    const url = 'http://127.0.0.1:5173' + p.path;
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
      width: 1536,
      height: 1024,
      deviceScaleFactor: 1,
      mobile: false,
    });

    await send('Page.navigate', { url });
    await new Promise((r) => setTimeout(r, 1500));

    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const sw = document.documentElement.scrollWidth;
        const iw = window.innerWidth;
        const nav = document.querySelector('nav');
        const foot = document.querySelector('footer, .footer');
        return {
          scrollWidth: sw,
          innerWidth: iw,
          overflow: sw > iw,
          hasNavbar: !!nav,
          hasFooter: !!foot
        };
      })()`,
      returnByValue: true
    });

    const metrics = evalRes.result.value;
    const shotPath = `screenshots/check_other_${p.name}.png`;
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });
    fs.writeFileSync(shotPath, Buffer.from(shot.data, 'base64'));

    results.push({
      page: p.path,
      hasNavbar: metrics.hasNavbar,
      hasFooter: metrics.hasFooter,
      overflow: metrics.overflow,
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
