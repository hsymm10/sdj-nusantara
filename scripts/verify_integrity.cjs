const { spawn } = require('child_process');

async function testPages() {
  const pages = [
    '/',
    '/tentang-kami',
    '/layanan',
    '/program',
    '/beasiswa',
    '/kemitraan',
    '/artikel',
    '/kontak',
    '/konsultasi'
  ];

  console.log('Testing HTTP 200 on all 9 routes...');
  for (const page of pages) {
    const res = await fetch(`http://127.0.0.1:5173${page}`);
    if (res.status === 200) {
      console.log(`[PASS] ${page} -> 200 OK`);
    } else {
      console.error(`[FAIL] ${page} -> ${res.status}`);
    }
  }
}

async function testLinksAndMobileDrawer() {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/kemitraan', { method: 'PUT' });
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
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const cb = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) cb.reject(msg.error);
      else cb.resolve(msg.result);
    }
  };

  await new Promise(r => { ws.onopen = r; });
  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');

  // Test links on desktop
  const linksTest = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const ajukanBtns = Array.from(document.querySelectorAll('a')).filter(a => a.textContent.includes('Ajukan Kerja Sama'));
        const jenisMitraBtn = Array.from(document.querySelectorAll('a')).filter(a => a.textContent.includes('Lihat Jenis Kemitraan'));
        const pendekatanBtn = Array.from(document.querySelectorAll('a')).filter(a => a.textContent.includes('Tentang Pendekatan Kami'));
        const hubungiBtn = Array.from(document.querySelectorAll('a')).filter(a => a.textContent.includes('Hubungi Kami'));
        const bttBtn = document.querySelector('.floating-btt-program') || document.querySelector('.back-to-top-btn');

        return {
          ajukanHrefs: ajukanBtns.map(a => a.getAttribute('href')),
          jenisMitraHref: jenisMitraBtn.map(a => a.getAttribute('href')),
          pendekatanHref: pendekatanBtn.map(a => a.getAttribute('href')),
          hubungiHref: hubungiBtn.map(a => a.getAttribute('href')),
          hasBackToTop: !!bttBtn
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Links test on /kemitraan:', linksTest.result.value);

  // Test mobile viewport 390 drawer
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 600));

  const mobileNavTest = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const toggleBtn = document.querySelector('button.hamburger');
        const hasToggle = !!toggleBtn;
        let drawerBefore = false;
        let drawerAfter = false;
        let menuItemsCount = 0;
        let activeItemText = '';

        if (toggleBtn) {
          drawerBefore = toggleBtn.getAttribute('aria-expanded') === 'true';
          toggleBtn.click();
          const drawer = document.querySelector('.mobile-menu');
          drawerAfter = toggleBtn.getAttribute('aria-expanded') === 'true' || (drawer && getComputedStyle(drawer).display !== 'none');
          if (drawer) {
            const links = Array.from(drawer.querySelectorAll('.mobile-link'));
            menuItemsCount = links.length;
            const active = links.find(l => l.classList.contains('active') || l.href.includes('/kemitraan'));
            if (active) activeItemText = active.textContent.trim();
          }
        }

        return {
          hasToggle,
          drawerOpened: drawerAfter,
          menuItemsCount,
          activeItemText
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Mobile Drawer test:', mobileNavTest.result.value);

  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`, { method: 'PUT' });
  ws.close();
}

async function main() {
  await testPages();
  await testLinksAndMobileDrawer();
}

main().catch(console.error);
