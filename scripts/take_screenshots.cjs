const fs = require('fs');
const { spawn } = require('child_process');

async function capture(url, width, height, outputPath) {
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
  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: width < 768
  });

  await new Promise(r => setTimeout(r, 1500));

  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });

  fs.mkdirSync('screenshots', { recursive: true });
  fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
  console.log(`Saved screenshot: ${outputPath} (${width}x${height})`);

  await send('Page.close');
  ws.close();
}

async function main() {
  await capture('http://127.0.0.1:5174/layanan/pendidikan', 1536, 1000, 'screenshots/konten-v1-pendidikan-1536.png');
  await capture('http://127.0.0.1:5174/layanan/pendidikan', 390, 844, 'screenshots/konten-v1-pendidikan-390.png');
  await capture('http://127.0.0.1:5174/layanan', 1536, 1000, 'screenshots/konten-v1-hub-1536.png');
  await capture('http://127.0.0.1:5174/layanan', 390, 844, 'screenshots/konten-v1-hub-390.png');
}

main().catch(console.error);
