const fs = require('fs');

async function captureModal(url, width, height, hash, outputPath) {
  const fullUrl = url + hash;
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?' + encodeURIComponent(fullUrl), { method: 'PUT' });
  const target = await newTargetRes.json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
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

  // Tunggu modal muncul lewat hash
  await new Promise((r) => setTimeout(r, 1600));

  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.mkdirSync('screenshots', { recursive: true });
  fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
  console.log(`Saved screenshot: ${outputPath} (${width}x${height})`);

  await send('Page.close');
  ws.close();
}

async function main() {
  // Beasiswa Modal (BPI)
  await captureModal('http://127.0.0.1:5174/layanan/pendidikan', 1536, 900, '#beasiswa-bpi', 'screenshots/modal-detail-beasiswa-1536.png');
  await captureModal('http://127.0.0.1:5174/layanan/pendidikan', 390, 844, '#beasiswa-bpi', 'screenshots/modal-detail-beasiswa-390.png');

  // Program Modal (Scholarship Academy)
  await captureModal('http://127.0.0.1:5174/layanan/pendidikan', 1536, 900, '#program-scholarship-academy', 'screenshots/modal-detail-program-1536.png');
  await captureModal('http://127.0.0.1:5174/layanan/pendidikan', 390, 844, '#program-scholarship-academy', 'screenshots/modal-detail-program-390.png');
}

main().catch(console.error);
