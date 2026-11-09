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

async function testArticleModal() {
  await ensureChrome();

  const url = 'http://127.0.0.1:5173/layanan/pendidikan';
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

  fs.mkdirSync('screenshots', { recursive: true });

  // 1. Desktop Test (1440px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 3000));

  // Remove any chatbot/toast overlays
  await send('Runtime.evaluate', {
    expression: `
      document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat, [class*='ChatLauncher']").forEach(el => el.remove());
    `
  });

  // Click the first article card's arrow button
  const clickRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btns = document.querySelectorAll('.article-arrow-btn');
        if (btns.length > 0) {
          btns[0].click();
          return { clicked: true, count: btns.length };
        }
        return { clicked: false, count: 0 };
      })()
    `,
    returnByValue: true
  });
  console.log('Clicked first article button:', clickRes.result.value);

  await new Promise(r => setTimeout(r, 600));

  // Verify modal is open and read title
  const modalInfoRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const modal = document.querySelector('.modal-container');
        if (!modal) return null;
        const title = modal.querySelector('.modal-title')?.textContent;
        const cat = modal.querySelector('.modal-cat-badge')?.textContent?.trim();
        const date = modal.querySelector('.modal-meta-row')?.textContent?.trim();
        const highlights = Array.from(modal.querySelectorAll('.highlight-text')).map(el => el.textContent.trim());
        const ctaHref = modal.querySelector('.modal-cta-btn')?.getAttribute('href');
        return { title, cat, date, highlightsCount: highlights.length, ctaHref, firstHighlight: highlights[0] };
      })()
    `,
    returnByValue: true
  });
  console.log('Modal 1 verified info:', modalInfoRes.result.value);

  // Capture desktop modal screenshot (viewport)
  const modalScreenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/modal_artikel_desktop_1440.png', Buffer.from(modalScreenshot.data, 'base64'));
  console.log('Saved screenshots/modal_artikel_desktop_1440.png');

  // Test ESC key closing
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await new Promise(r => setTimeout(r, 400));

  const afterEscRes = await send('Runtime.evaluate', {
    expression: `!document.querySelector('.modal-container')`,
    returnByValue: true
  });
  console.log('Modal closed via Escape key:', afterEscRes.result.value);

  // Test Card 2 (dynamic data verification)
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btns = document.querySelectorAll('.article-arrow-btn');
        if (btns[1]) btns[1].click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 500));

  const modal2Info = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const modal = document.querySelector('.modal-container');
        return modal ? {
          title: modal.querySelector('.modal-title')?.textContent,
          cat: modal.querySelector('.modal-cat-badge')?.textContent?.trim()
        } : null;
      })()
    `,
    returnByValue: true
  });
  console.log('Modal 2 dynamic verification:', modal2Info.result.value);

  // Close modal 2 via X button
  await send('Runtime.evaluate', {
    expression: `document.querySelector('.modal-close-btn')?.click()`
  });
  await new Promise(r => setTimeout(r, 400));

  // 2. Mobile Test (390px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true
  });

  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 2500));

  // Open modal on mobile
  await send('Runtime.evaluate', {
    expression: `
      document.querySelectorAll(".chatbot-widget, .chat-bubble, [class*='chatbot'], [class*='toast'], .floating-chat").forEach(el => el.remove());
      const btns = document.querySelectorAll('.article-arrow-btn');
      if (btns[0]) btns[0].click();
    `
  });
  await new Promise(r => setTimeout(r, 600));

  const mobileScreenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/modal_artikel_mobile_390.png', Buffer.from(mobileScreenshot.data, 'base64'));
  console.log('Saved screenshots/modal_artikel_mobile_390.png');

  await send('Page.close');
  ws.close();
}

testArticleModal().catch(console.error);
