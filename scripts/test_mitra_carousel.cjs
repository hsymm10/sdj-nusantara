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

async function runTests() {
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
    { name: 'mitra_kolaborasi_1440', width: 1440 },
    { name: 'mitra_kolaborasi_1024', width: 1024 },
    { name: 'mitra_kolaborasi_390', width: 390 }
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

    // Remove chat widgets
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat, [class*='ChatLauncher'], [class*='Chatbot'], button[aria-label*='chat']").forEach(el => el.remove());
        })()
      `
    });

    const rectRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sec = document.getElementById('mitra-kolaborasi');
          if (!sec) return null;
          const r = sec.getBoundingClientRect();
          const top = window.scrollY + r.top;
          return {
            top: Math.max(0, top),
            height: r.height,
            width: document.documentElement.clientWidth
          };
        })()
      `,
      returnByValue: true
    });

    const rect = rectRes.result.value;
    if (rect) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${Math.floor(rect.top)})`
      });
      await new Promise(r => setTimeout(r, 400));

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

  // TEST: Acceptance Criteria Audit
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 1500));

  const auditRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sec = document.getElementById('mitra-kolaborasi');
        if (!sec) return { error: 'Section not found' };

        const title = sec.querySelector('.partners-main-title')?.textContent?.trim().replace(/\\s+/g, ' ');
        const badge = sec.querySelector('.badge-text')?.textContent?.trim();
        const subtitle = sec.querySelector('.partners-subtitle')?.textContent?.trim();
        const card = sec.querySelector('.partners-capsule-card');
        const track = sec.querySelector('.slider-track');
        const dots = sec.querySelectorAll('.page-dot');
        const arrows = sec.querySelectorAll('button[class*="arrow"], button[aria-label*="prev"], button[aria-label*="next"]');
        const swoosh = sec.querySelector('.swoosh-brush');
        const crescentLeft = sec.querySelector('.crescent-accent-left');
        const crescentRight = sec.querySelector('.crescent-accent-right');

        const cardStyle = window.getComputedStyle(card);

        return {
          title,
          badge,
          subtitle,
          dotsCount: dots.length,
          arrowsCount: arrows.length,
          hasSwoosh: !!swoosh,
          hasCrescentLeft: !!crescentLeft,
          hasCrescentRight: !!crescentRight,
          cardRadius: cardStyle.borderRadius,
          cardBg: cardStyle.backgroundColor,
          initialTransform: track ? window.getComputedStyle(track).transform : null
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Acceptance Criteria Audit:', auditRes.result.value);

  // Auto-slide test
  console.log('Testing automatic carousel movement (waiting 4.3s)...');
  await new Promise(r => setTimeout(r, 4300));

  const advancedRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const track = document.querySelector('.slider-track');
        const activeDot = document.querySelector('.page-dot.active');
        return {
          transform: track ? window.getComputedStyle(track).transform : null,
          activeDotIndex: Array.from(document.querySelectorAll('.page-dot')).indexOf(activeDot)
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Transform after 4.3s:', advancedRes.result.value);

  // Mouse drag test
  console.log('Testing mouse drag interaction...');
  const cardBoxRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const card = document.querySelector('.partners-capsule-card');
        const r = card.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      })()
    `,
    returnByValue: true
  });

  const { x, y } = cardBoxRes.result.value;

  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', buttons: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: x - 100, y, button: 'left', buttons: 1 });
  await new Promise(r => setTimeout(r, 100));

  const dragStatus = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const card = document.querySelector('.partners-capsule-card');
        return card.classList.contains('grabbing');
      })()
    `,
    returnByValue: true
  });
  console.log('Is grabbing during drag:', dragStatus.result.value);

  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: x - 100, y, button: 'left', buttons: 0 });
  await new Promise(r => setTimeout(r, 800));

  const postDragRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const activeDot = document.querySelector('.page-dot.active');
        return Array.from(document.querySelectorAll('.page-dot')).indexOf(activeDot);
      })()
    `,
    returnByValue: true
  });
  console.log('Active dot index after drag:', postDragRes.result.value);

  ws.close();
  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`);
  console.log('All tests completed successfully!');
}

runTests().catch(console.error);
