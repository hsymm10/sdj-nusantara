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

async function captureFaqSection(url, width, outputPath) {
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
  await new Promise(r => setTimeout(r, 3500));

  // Remove chatbot and toast widgets immediately before taking screenshot
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat, [class*='ChatLauncher'], [class*='Chatbot'], button[aria-label*='chat'], [class*='chat-']").forEach(el => el.remove());
      })()
    `
  });

  // Get bounding rect for #faq-pendidikan
  const rectRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sec = document.getElementById('faq-pendidikan');
        if (!sec) return null;
        const r = sec.getBoundingClientRect();
        const top = window.scrollY + r.top;
        const bottom = window.scrollY + r.bottom;
        return {
          top: Math.max(0, top - 20),
          bottom: bottom + 20,
          height: (bottom - top) + 40,
          width: document.documentElement.clientWidth
        };
      })()
    `,
    returnByValue: true
  });

  const rect = rectRes.result.value;
  console.log('Detected FAQ rect at ' + width + 'px:', rect);

  if (rect) {
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${Math.floor(rect.top)})`
    });
    await new Promise(r => setTimeout(r, 500));

    const screenshot = await send('Page.captureScreenshot', {
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

    fs.mkdirSync('screenshots', { recursive: true });
    fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
    console.log(`Saved screenshot to ${outputPath} (${width}px, height ${rect.height}px)`);
  }

  await send('Page.close');
  ws.close();
}

async function main() {
  await captureFaqSection('http://127.0.0.1:5173/layanan/pendidikan', 1440, 'screenshots/faq_section_1440.png');
  await captureFaqSection('http://127.0.0.1:5173/layanan/pendidikan', 1024, 'screenshots/faq_section_1024.png');
  await captureFaqSection('http://127.0.0.1:5173/layanan/pendidikan', 390, 'screenshots/faq_section_390.png');
}

main().catch(console.error);
