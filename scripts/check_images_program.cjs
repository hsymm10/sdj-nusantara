const { spawn } = require('child_process');

async function checkImages() {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/program', { method: 'PUT' });
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
    mobile: false
  });

  await new Promise(r => setTimeout(r, 2000));

  const result = await send('Runtime.evaluate', {
    expression: `(() => {
      const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        clientWidth: img.clientWidth,
        clientHeight: img.clientHeight,
        ratio: (img.naturalWidth / (img.clientWidth || 1)).toFixed(2),
        pass: img.naturalWidth >= (img.clientWidth || 1) * 1.45
      }));
      return imgs;
    })()`,
    returnByValue: true
  });

  console.log(JSON.stringify(result.result ? result.result.value : result, null, 2));

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  ws.close();
}

checkImages().catch(console.error);
