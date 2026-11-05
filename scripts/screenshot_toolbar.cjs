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
  console.log('--- STARTING SCREENSHOT CAPTURE ---');

  // --- DESKTOP SUITE (1536 x 960) ---
  const desktop = await createCdpSession(1536, 960, false);
  await desktop.send('Page.navigate', { url: 'http://127.0.0.1:5173/layanan/pendidikan#cari-beasiswa' });
  await new Promise(r => setTimeout(r, 1200));

  // Scroll to section
  await desktop.evaluate(`document.querySelector('#cari-beasiswa')?.scrollIntoView({ block: 'start' });`);
  await new Promise(r => setTimeout(r, 600));

  // 1. Default State
  await desktop.capture('screenshots/filter-toolbar-default-1536.png');

  // 2. Search Open & Active
  await desktop.evaluate(`
    document.querySelector('#cari-beasiswa')?.scrollIntoView({ block: 'start' });
    document.querySelector('#cari-beasiswa .search-trigger-btn')?.click();
  `);
  await new Promise(r => setTimeout(r, 300));
  await desktop.evaluate(`
    const inp = document.querySelector('#cari-beasiswa .search-active-input');
    if (inp) {
      inp.value = 'LPDP';
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    }
  `);
  await new Promise(r => setTimeout(r, 500));
  await desktop.capture('screenshots/filter-toolbar-search-expanded-1536.png');

  // 3. Filter Popover Open
  await desktop.evaluate(`
    document.querySelector('#cari-beasiswa')?.scrollIntoView({ block: 'start' });
    document.querySelector('#cari-beasiswa .search-clear-btn')?.click();
    document.querySelector('#cari-beasiswa .filter-trigger-btn')?.click();
  `);
  await new Promise(r => setTimeout(r, 500));
  await desktop.capture('screenshots/filter-toolbar-popover-open-1536.png');

  // 4. Select Filter & Apply (Active Chips)
  await desktop.evaluate(`
    document.querySelector('#cari-beasiswa')?.scrollIntoView({ block: 'start' });
    const cat = document.querySelector('#filter-pop-kategori');
    if (cat) {
      cat.value = 'Pemerintah';
      cat.dispatchEvent(new Event('change', { bubbles: true }));
    }
    const jenjang = document.querySelector('#filter-pop-jenjang');
    if (jenjang) {
      jenjang.value = 'S2';
      jenjang.dispatchEvent(new Event('change', { bubbles: true }));
    }
    document.querySelector('.btn-filter-apply')?.click();
  `);
  await new Promise(r => setTimeout(r, 500));
  await desktop.capture('screenshots/filter-toolbar-chips-active-1536.png');

  // 5. Empty State
  await desktop.evaluate(`
    document.querySelector('#cari-beasiswa')?.scrollIntoView({ block: 'start' });
    document.querySelector('#cari-beasiswa .search-trigger-btn')?.click();
  `);
  await new Promise(r => setTimeout(r, 300));
  await desktop.evaluate(`
    const inp = document.querySelector('#cari-beasiswa .search-active-input');
    if (inp) {
      inp.value = 'TIDAK_ADA_BEASISWA_XYZ999';
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    }
  `);
  await new Promise(r => setTimeout(r, 600));
  await desktop.capture('screenshots/filter-toolbar-empty-1536.png');

  // 6. Program List SearchToggle
  await desktop.send('Page.navigate', { url: 'http://127.0.0.1:5173/layanan/pendidikan#daftar-program' });
  await new Promise(r => setTimeout(r, 1200));
  await desktop.evaluate(`
    document.querySelector('#daftar-program')?.scrollIntoView({ block: 'start' });
    document.querySelector('#daftar-program .search-trigger-btn')?.click();
  `);
  await new Promise(r => setTimeout(r, 600));
  await desktop.capture('screenshots/program-search-toggle-1536.png');

  await desktop.close();

  // --- MOBILE SUITE (390 x 844) ---
  const mobile = await createCdpSession(390, 844, true);
  await mobile.send('Page.navigate', { url: 'http://127.0.0.1:5173/layanan/pendidikan#cari-beasiswa' });
  await new Promise(r => setTimeout(r, 1200));
  await mobile.evaluate(`document.querySelector('#cari-beasiswa')?.scrollIntoView({ block: 'start' });`);
  await new Promise(r => setTimeout(r, 600));

  // 7. Mobile Default
  await mobile.capture('screenshots/filter-toolbar-mobile-390.png');

  // 8. Mobile Filter Bottom-Sheet Open
  await mobile.evaluate(`document.querySelector('#cari-beasiswa .filter-trigger-btn')?.click();`);
  await new Promise(r => setTimeout(r, 500));
  await mobile.capture('screenshots/filter-toolbar-mobile-popover-390.png');

  await mobile.close();
  console.log('--- ALL SCREENSHOTS COMPLETED SUCCESSFULLY ---');
}

main().catch(console.error);
