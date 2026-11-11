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

async function runTest() {
  await ensureChrome();

  const url = 'http://127.0.0.1:5173/layanan/pendidikan';
  const outDir = '/home/hszamm/.gemini/antigravity/brain/cb0bc971-0a92-4869-a2d3-f69e26d78b4e';

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

  const viewports = [
    { name: 'program_edu_revised_1440', width: 1440 },
    { name: 'program_edu_revised_1024', width: 1024 },
    { name: 'program_edu_revised_390', width: 390 }
  ];

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: vp.width < 768
    });

    await send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, 2000));

    // Remove chatbots
    await send('Runtime.evaluate', {
      expression: `
        document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat, [class*='ChatLauncher'], [class*='Chatbot'], button[aria-label*='chat'], [class*='chat-']").forEach(el => el.remove());
      `
    });

    // Scroll to section to ensure render
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sec = document.getElementById('program-pendidikan');
          if (sec) sec.scrollIntoView({ behavior: 'instant' });
        })()
      `
    });
    await new Promise(r => setTimeout(r, 600));

    // Scroll back to top
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, 0);`
    });
    await new Promise(r => setTimeout(r, 300));

    // Get section rect
    const rectRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sec = document.getElementById('program-pendidikan');
          if (!sec) return null;
          const r = sec.getBoundingClientRect();
          return {
            top: r.top + window.scrollY,
            height: r.height,
            width: document.documentElement.clientWidth
          };
        })()
      `,
      returnByValue: true
    });

    const rect = rectRes.result.value;
    if (rect) {
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

      fs.writeFileSync(`${outDir}/${vp.name}.png`, Buffer.from(screenshotRes.data, 'base64'));
      console.log(`Saved screenshot: ${vp.name}.png`);
    }
  }

  // Audit DOM
  const auditRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sec = document.getElementById('program-pendidikan');
        if (!sec) return { found: false };
        const label = sec.querySelector('.badge-text')?.textContent?.trim();
        const title = sec.querySelector('.program-title')?.textContent?.trim();
        const desc = sec.querySelector('.program-desc')?.textContent?.trim();
        const btn = sec.querySelector('.program-btn')?.textContent?.trim();
        const topWave = !!sec.querySelector('.decor-wave-top-gold');
        const botWave = !!sec.querySelector('.decor-wave-bottom-cyan');
        const badge = !!sec.querySelector('.floating-badge-box');
        const rays = sec.querySelectorAll('.badge-sun-rays .ray')?.length;
        const cornerRibbon = !!sec.querySelector('.deco-corner-ribbon');

        return {
          found: true,
          label,
          title,
          desc,
          btn,
          topWave,
          botWave,
          badge,
          rays,
          cornerRibbon
        };
      })()
    `,
    returnByValue: true
  });

  console.log('DOM Audit Results:', auditRes.result.value);

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  console.log('All tests completed successfully!');
  process.exit(0);
}

runTest().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});

