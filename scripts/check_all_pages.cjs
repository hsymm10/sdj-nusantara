const http = require('http');

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

async function checkPage(path) {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173' + path, { method: 'PUT' });
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

  await new Promise((resolve) => ws.onopen = resolve);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      const cb = callbacks.get(data.id);
      callbacks.delete(data.id);
      if (data.error) cb.reject(data.error);
      else cb.resolve(data.result);
    }
  };

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1536,
    height: 1024,
    deviceScaleFactor: 1,
    mobile: false
  });

  await new Promise(r => setTimeout(r, 1200));

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const navbar = document.querySelector('nav') || document.querySelector('header');
      const footer = document.querySelector('footer');
      return {
        hasNavbar: !!navbar,
        hasFooter: !!footer,
        navbarHeight: navbar ? navbar.clientHeight : 0,
        footerHeight: footer ? footer.clientHeight : 0,
        overflow: document.documentElement.scrollWidth > window.innerWidth
      };
    })()`,
    returnByValue: true
  });

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  ws.close();
  return evalRes.result.value;
}

async function main() {
  for (const page of pages) {
    const res = await checkPage(page);
    console.log(`Page ${page}: Navbar=${res.hasNavbar} (${res.navbarHeight}px), Footer=${res.hasFooter} (${res.footerHeight}px), overflow=${res.overflow}`);
  }
}

main().catch(console.error);
