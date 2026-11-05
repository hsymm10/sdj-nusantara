const fs = require('fs');
const { spawn } = require('child_process');

async function captureChat(url, width, height, outputPath) {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?' + encodeURIComponent(url), { method: 'PUT' });
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
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: width < 768
  });

  await new Promise(r => setTimeout(r, 1500));

  // Klik tombol launcher chat untuk membuka dialog
  await send('Runtime.evaluate', {
    expression: `
      const btn = document.querySelector('.chat-launcher-btn');
      if (btn) btn.click();
    `
  });

  await new Promise(r => setTimeout(r, 1000));

  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.mkdirSync('screenshots', { recursive: true });
  fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
  console.log(`Saved chat screenshot: ${outputPath}`);

  await send('Page.close');
  ws.close();
}

async function main() {
  await captureChat('http://127.0.0.1:5174/layanan/pendidikan', 1536, 900, 'screenshots/chatbot-open-1536.png');
  await captureChat('http://127.0.0.1:5174/layanan/pendidikan', 390, 844, 'screenshots/chatbot-open-390.png');
}

main().catch(console.error);
