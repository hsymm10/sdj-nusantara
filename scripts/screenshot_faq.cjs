const fs = require('fs');

async function createCdpSession(width, height, mobile = false) {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new', { method: 'PUT' });
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
  await send('Emulation.setDeviceMetricsOverride', {
    width: width,
    height: height,
    deviceScaleFactor: 1,
    mobile: mobile
  });

  return {
    send,
    evaluate: async (expr) => send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }),
    capture: async (outPath) => {
      const ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.mkdirSync('screenshots', { recursive: true });
      fs.writeFileSync(outPath, Buffer.from(ss.data, 'base64'));
      console.log(`Saved screenshot: ${outPath}`);
    },
    close: async () => {
      try { await send('Page.close'); } catch(e){}
      ws.close();
    }
  };
}

async function main() {
  console.log('--- CAPTURING FAQ SCREENSHOTS ---');

  // 1. DESKTOP 1536px: Default View
  const desktop = await createCdpSession(1536, 1000, false);
  await desktop.send('Page.navigate', { url: 'http://127.0.0.1:5173/faq' });
  await new Promise(r => setTimeout(r, 1400));

  await desktop.evaluate(`document.querySelector('#faq')?.scrollIntoView({ block: 'start' });`);
  await new Promise(r => setTimeout(r, 600));
  await desktop.capture('screenshots/faq-desktop-default-1536.png');

  // 2. DESKTOP 1536px: Category Beasiswa Active
  await desktop.evaluate(`
    const catBtns = Array.from(document.querySelectorAll('.category-btn'));
    const beasiswaBtn = catBtns.find(b => b.textContent.includes('Beasiswa'));
    if (beasiswaBtn) beasiswaBtn.click();
  `);
  await new Promise(r => setTimeout(r, 600));
  await desktop.capture('screenshots/faq-category-beasiswa-1536.png');

  // 3. DESKTOP 1536px: Search "LPDP"
  await desktop.evaluate(`
    const inp = document.querySelector('.search-input');
    if (inp) {
      inp.value = 'LPDP';
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    }
  `);
  await new Promise(r => setTimeout(r, 600));
  await desktop.capture('screenshots/faq-search-lpdp-1536.png');

  // 4. DESKTOP 1536px: Empty State
  await desktop.evaluate(`
    const inp = document.querySelector('.search-input');
    if (inp) {
      inp.value = 'TIDAK_ADA_PERTANYAAN_XYZ999';
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    }
  `);
  await new Promise(r => setTimeout(r, 600));
  await desktop.capture('screenshots/faq-empty-state-1536.png');

  await desktop.close();

  // 5. MOBILE 390px
  const mobile = await createCdpSession(390, 844, true);
  await mobile.send('Page.navigate', { url: 'http://127.0.0.1:5173/faq' });
  await new Promise(r => setTimeout(r, 1400));
  await mobile.evaluate(`document.querySelector('#faq')?.scrollIntoView({ block: 'start' });`);
  await new Promise(r => setTimeout(r, 600));
  await mobile.capture('screenshots/faq-mobile-390.png');

  await mobile.close();

  // 6. Contact Page FAQ check
  const contactSession = await createCdpSession(1536, 1000, false);
  await contactSession.send('Page.navigate', { url: 'http://127.0.0.1:5173/kontak#faq' });
  await new Promise(r => setTimeout(r, 1400));
  await contactSession.evaluate(`document.querySelector('#faq')?.scrollIntoView({ block: 'start' });`);
  await new Promise(r => setTimeout(r, 600));
  await contactSession.capture('screenshots/faq-kontak-section-1536.png');
  await contactSession.close();

  console.log('--- ALL FAQ SCREENSHOTS COMPLETED ---');
}

main().catch(console.error);

