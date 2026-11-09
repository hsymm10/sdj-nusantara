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
    { name: 'artikel_revised_1440', width: 1440 },
    { name: 'artikel_revised_1024', width: 1024 },
    { name: 'artikel_revised_390', width: 390 }
  ];

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: vp.width < 768
    });

    await send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, 2500));

    // Remove chatbots and widgets
    await send('Runtime.evaluate', {
      expression: `
        document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat, [class*='ChatLauncher'], [class*='Chatbot'], button[aria-label*='chat'], [class*='chat-']").forEach(el => el.remove());
      `
    });

    // Scroll to section to trigger any image loading and decoding
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sec = document.getElementById('artikel-wawasan');
          if (sec) sec.scrollIntoView({ behavior: 'instant' });
        })()
      `
    });
    await new Promise(r => setTimeout(r, 1200));

    // Make sure we are at top (0,0) before capturing clip in document coordinates
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, 0);`
    });
    await new Promise(r => setTimeout(r, 400));

    // Get section rect in page coordinates
    const rectRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sec = document.getElementById('artikel-wawasan');
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
      console.log(`Saved screenshot: ${vp.name}.png (height: ${Math.ceil(rect.height)})`);
    }
  }

  // Audit DOM elements
  const auditRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sec = document.getElementById('artikel-wawasan');
        if (!sec) return { found: false };
        const hero = sec.querySelector('.articles-hero-layout');
        const heroTitle = hero?.querySelector('.hero-title')?.textContent?.trim();
        const heroLabel = hero?.querySelector('.label-text')?.textContent?.trim();
        const heroCta = hero?.querySelector('.hero-btn-cta')?.textContent?.trim();
        const heroBadge = !!hero?.querySelector('.hero-book-badge');
        const heroSunRays = hero?.querySelectorAll('.badge-sun-rays .ray')?.length;
        const cornerRibbon = !!hero?.querySelector('.hero-corner-ribbon');
        const topWave = !!sec.querySelector('.decor-wave-top-right');
        const bottomWave = !!sec.querySelector('.decor-wave-bottom-full');
        const cards = sec.querySelectorAll('.articles-grid .article-card');
        const moreCard = !!sec.querySelector('.article-more-card');

        return {
          found: true,
          heroTitle,
          heroLabel,
          heroCta,
          heroBadge,
          heroSunRays,
          cornerRibbon,
          topWave,
          bottomWave,
          cardsCount: cards.length,
          hasMoreCard: moreCard
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
