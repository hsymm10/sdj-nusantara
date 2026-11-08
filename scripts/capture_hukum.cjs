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

async function captureUrl(url, width, outputPath) {
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
  const contentHeight = Math.ceil(heightResult.result.value || 3000);

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

  await send('Page.close');
  ws.close();
}

async function main() {
  console.log('Capturing /layanan/hukum...');
  await captureUrl('http://127.0.0.1:5173/layanan/hukum', 1536, 'screenshots/current_layanan_hukum_1536.png');
  await captureUrl('http://127.0.0.1:5173/layanan/hukum', 1440, 'screenshots/current_layanan_hukum_1440.png');
  await captureUrl('http://127.0.0.1:5173/layanan/hukum', 390, 'screenshots/current_layanan_hukum_390.png');
}

main().catch(console.error);

