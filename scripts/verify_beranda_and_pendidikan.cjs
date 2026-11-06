const fs = require('fs');
const { spawn } = require('child_process');

async function ensureServer() {
  let reachable = false;
  try {
    const res = await fetch('http://127.0.0.1:4173/');
    if (res.ok) reachable = true;
  } catch (e) {}

  if (!reachable) {
    const serverProc = spawn('npx', ['vite', 'preview', '--port', '4173', '--host', '127.0.0.1'], {
      cwd: '/var/www/html/SDJ_NUSANTARA',
      stdio: 'ignore',
      detached: true
    });
    serverProc.unref();

    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const res = await fetch('http://127.0.0.1:4173/');
        if (res.ok) { reachable = true; break; }
      } catch (e) {}
    }
  }
}

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

    for (let i = 0; i < 25; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const res = await fetch('http://127.0.0.1:9222/json/version');
        if (res.ok) { reachable = true; break; }
      } catch (e) {}
    }
  }
}

async function captureUrl(url, width, outputPath) {
  await ensureServer();
  await ensureChrome();

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

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      const { resolve, reject } = callbacks.get(data.id);
      callbacks.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  await new Promise((resolve) => ws.onopen = resolve);

  await send('Page.enable');
  await send('Runtime.enable');

  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: width < 768
  });

  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 2500));

  const heightResult = await send('Runtime.evaluate', {
    expression: 'Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)'
  });
  const contentHeight = Math.ceil(heightResult.result.value || 4000);

  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: contentHeight,
    deviceScaleFactor: 1,
    mobile: width < 768
  });

  await new Promise(r => setTimeout(r, 800));

  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });

  fs.mkdirSync('screenshots', { recursive: true });
  fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
  console.log(`Saved screenshot: ${outputPath} (${width}x${contentHeight})`);

  const sectionsInfo = await send('Runtime.evaluate', {
    expression: `
      JSON.stringify(
        Array.from(document.querySelectorAll('section, main > *')).map((el, i) => ({
          index: i,
          className: el.className,
          top: Math.round(el.getBoundingClientRect().top + window.scrollY)
        }))
      )
    `
  });
  console.log(`${url} sections:`, sectionsInfo.result.value);

  await send('Page.close');
  ws.close();
}

async function main() {
  console.log('Capturing Beranda (restored)...');
  await captureUrl('http://127.0.0.1:4173/', 1440, 'screenshots/beranda_restored_1440.png');

  console.log('Capturing /layanan/pendidikan (redesigned 13 sections)...');
  await captureUrl('http://127.0.0.1:4173/layanan/pendidikan', 1440, 'screenshots/layanan_pendidikan_1440.png');
}

main().catch(console.error);
