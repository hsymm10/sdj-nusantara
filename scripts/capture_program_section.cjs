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

async function captureProgramSection(url, width, outputPath) {
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
    height: 1200,
    deviceScaleFactor: 1,
    mobile: width < 768
  });

  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 3000));

  // Remove chatbot and toast widgets immediately before taking screenshot
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat, [class*='ChatLauncher'], [class*='Chatbot'], button[aria-label*='chat'], [class*='chat-']").forEach(el => el.remove());
      })()
    `
  });

  // Get bounding rect for #program-pendidikan
  const rectRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sec = document.getElementById('program-pendidikan');
        if (!sec) return null;
        const r = sec.getBoundingClientRect();
        const top = window.scrollY + r.top;
        const bottom = window.scrollY + r.bottom;
        return {
          top: Math.max(0, top),
          bottom: bottom,
          height: (bottom - top),
          width: document.documentElement.clientWidth
        };
      })()
    `,
    returnByValue: true
  });

  const rect = rectRes.result.value;
  console.log('Detected Program rect at ' + width + 'px:', rect);

  if (!rect) {
    console.error(`Section #program-pendidikan not found for width ${width}`);
    ws.close();
    return;
  }

  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, ${Math.floor(rect.top)})`
  });
  await new Promise(r => setTimeout(r, 600));

  const screenshotRes = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: 0,
      y: Math.floor(rect.top),
      width: rect.width,
      height: Math.ceil(rect.height),
      scale: 1
    },
    captureBeyondViewport: true
  });

  const buffer = Buffer.from(screenshotRes.data, 'base64');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Saved screenshot (${width}px): ${outputPath}`);

  ws.close();
  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`);
}

async function run() {
  const url = 'http://localhost:5173/layanan/pendidikan';
  const outDir = '/home/hszamm/.gemini/antigravity/brain/cb0bc971-0a92-4869-a2d3-f69e26d78b4e';

  await captureProgramSection(url, 1440, `${outDir}/program_edu_1440.png`);
  await captureProgramSection(url, 1024, `${outDir}/program_edu_1024.png`);
  await captureProgramSection(url, 390, `${outDir}/program_edu_390.png`);
  console.log('All screenshots captured successfully.');
}

run().catch(console.error);
