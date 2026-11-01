const fs = require('fs');
const { spawn } = require('child_process');

async function ensureChrome() {
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
    for (let i = 0; i < 25; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const res = await fetch('http://127.0.0.1:9222/json/version');
        if (res.ok) { reachable = true; break; }
      } catch (e) {}
    }
  }
}

async function testViewport(width, height, outfile) {
  await ensureChrome();
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/beasiswa', { method: 'PUT' });
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
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: width < 768
  });

  await new Promise(r => setTimeout(r, 1500));

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        overflow: document.documentElement.scrollWidth > window.innerWidth
      };
    })()`,
    returnByValue: true
  });

  const ss = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });
  if (outfile) {
    fs.writeFileSync(outfile, Buffer.from(ss.data, 'base64'));
  }

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  ws.close();
  return evalRes.result ? evalRes.result.value : evalRes;
}

async function main() {
  const viewports = [
    { w: 1920, h: 1080, file: 'screenshots/beasiswa-resume-1920.png' },
    { w: 1440, h: 900,  file: 'screenshots/beasiswa-resume-1440.png' },
    { w: 1280, h: 800,  file: 'screenshots/beasiswa-resume-1280.png' },
    { w: 1024, h: 768,  file: 'screenshots/beasiswa-resume-1024.png' },
    { w: 768,  h: 1024, file: 'screenshots/beasiswa-resume-768.png' },
    { w: 390,  h: 844,  file: 'screenshots/beasiswa-resume-390.png' },
    { w: 360,  h: 800,  file: 'screenshots/beasiswa-resume-360.png' }
  ];

  for (const vp of viewports) {
    const res = await testViewport(vp.w, vp.h, vp.file);
    console.log(`Viewport ${vp.w}x${vp.h}: overflow=${res.overflow}, innerWidth=${res.innerWidth}, scrollWidth=${res.scrollWidth}`);
  }
}

main().catch(console.error);
