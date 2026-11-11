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

async function run() {
  await ensureChrome();

  const url = 'http://localhost:5173/layanan/pendidikan';
  const outDir = '/home/hszamm/.gemini/antigravity/brain/cb0bc971-0a92-4869-a2d3-f69e26d78b4e';

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

  // Viewport 1440px desktop
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 2500));

  // Remove floating widgets
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat, [class*='ChatLauncher'], [class*='Chatbot'], button[aria-label*='chat']").forEach(el => el.remove());
      })()
    `
  });

  // 1. Scroll to section Layanan Unggulan
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sec = document.getElementById('solusi-terintegrasi');
        if (sec) sec.scrollIntoView({ behavior: 'instant', block: 'center' });
      })()
    `
  });
  await new Promise(r => setTimeout(r, 600));

  // 2. Click Card 2 (Scholarship Academy) arrow button to open modal
  console.log('Testing opening Scholarship Academy modal...');
  const openResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const cards = document.querySelectorAll('#solusi-terintegrasi .layanan-card');
        if (cards.length < 2) return { success: false, reason: 'Cards not found' };
        const arrowBtn = cards[1].querySelector('.card-arrow');
        if (!arrowBtn) return { success: false, reason: 'Arrow button not found' };
        arrowBtn.click();
        return { success: true };
      })()
    `,
    returnByValue: true
  });
  console.log('Open modal click result:', openResult.result.value);

  // Wait for animation
  await new Promise(r => setTimeout(r, 500));

  // Check modal existence and verify constraints
  const auditResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const modal = document.querySelector('.modal-container');
        const backdrop = document.querySelector('.modal-backdrop');
        if (!modal) return { success: false, error: 'Modal not found in DOM' };

        const title = modal.querySelector('#modal-service-title')?.textContent?.trim();
        const desc = modal.querySelector('.modal-service-desc')?.textContent?.trim();
        const benefits = Array.from(modal.querySelectorAll('.modal-benefit-item')).map(el => el.textContent.trim());
        const buttons = Array.from(modal.querySelectorAll('button')).map(b => b.textContent.trim());
        const xButtons = modal.querySelectorAll('.modal-close-btn, button[aria-label*="close"], button[aria-label*="tutup"]:not(.modal-tutup-btn), svg[class*="close"]');
        const bodyOverflow = document.body.style.overflow;

        return {
          success: true,
          title,
          desc,
          benefitCount: benefits.length,
          buttons,
          hasXClose: xButtons.length > 0,
          onlyOneTutupBtn: buttons.length === 1 && buttons[0] === 'Tutup',
          bodyOverflowLocked: bodyOverflow === 'hidden'
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Modal audit result:', auditResult.result.value);

  // Capture Desktop Screenshot
  const ssDesktop = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`${outDir}/modal_layanan_desktop_1440.png`, Buffer.from(ssDesktop.data, 'base64'));
  console.log('Saved modal_layanan_desktop_1440.png');

  // 3. Test Tablet View (1024px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1024,
    height: 800,
    deviceScaleFactor: 2,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 400));
  const ssTablet = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`${outDir}/modal_layanan_tablet_1024.png`, Buffer.from(ssTablet.data, 'base64'));
  console.log('Saved modal_layanan_tablet_1024.png');

  // 4. Test Mobile View (390px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 400));
  const ssMobile = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`${outDir}/modal_layanan_mobile_390.png`, Buffer.from(ssMobile.data, 'base64'));
  console.log('Saved modal_layanan_mobile_390.png');

  // 5. Test Close Button
  console.log('Testing Close button...');
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector('.modal-tutup-btn');
        if (btn) btn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 400));

  const afterCloseResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const modal = document.querySelector('.modal-container');
        const bodyOverflow = document.body.style.overflow;
        return {
          modalGone: modal === null,
          bodyOverflowUnlocked: bodyOverflow === ''
        };
      })()
    `,
    returnByValue: true
  });
  console.log('After close result:', afterCloseResult.result.value);

  // 6. Test all 4 services open correctly with their specific titles
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  for (let i = 0; i < 4; i++) {
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const cards = document.querySelectorAll('#solusi-terintegrasi .layanan-card');
          cards[${i}].querySelector('.card-arrow').click();
        })()
      `
    });
    await new Promise(r => setTimeout(r, 300));

    const checkService = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const title = document.querySelector('#modal-service-title')?.textContent?.trim();
          const img = document.querySelector('.modal-img')?.getAttribute('src');
          // Close modal
          document.querySelector('.modal-tutup-btn')?.click();
          return { cardIndex: ${i}, title, img };
        })()
      `,
      returnByValue: true
    });
    console.log(`Service card ${i} check:`, checkService.result.value);
    await new Promise(r => setTimeout(r, 300));
  }

  ws.close();
  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`);
  console.log('All tests finished successfully!');
}

run().catch(console.error);

