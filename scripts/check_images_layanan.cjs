const { spawn } = require('child_process');

async function main() {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/layanan', { method: 'PUT' });
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
    height: 3655,
    deviceScaleFactor: 1,
    mobile: false
  });

  await new Promise(r => setTimeout(r, 1500));

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        clientWidth: img.clientWidth,
        naturalWidth: img.naturalWidth,
        ratio: (img.naturalWidth / (img.clientWidth || 1)).toFixed(2),
        pass: img.naturalWidth >= (img.clientWidth || 1) * 1.5
      }));
    })()`,
    returnByValue: true
  });

  console.log(JSON.stringify(evalRes.result.value, null, 2));

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  ws.close();
}

main().catch(console.error);
