const fs = require('fs');

async function testResponsive() {
  const viewports = [
    { name: '1920', width: 1920, height: 1080 },
    { name: '1536', width: 1536, height: 1024 },
    { name: '1440', width: 1440, height: 900 },
    { name: '1280', width: 1280, height: 800 },
    { name: '768', width: 768, height: 1024, mobile: true },
    { name: '390', width: 390, height: 844, mobile: true },
    { name: '360', width: 360, height: 800, mobile: true }
  ];

  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/beasiswa', { method: 'PUT' });
  const target = await newTargetRes.json();
  const wsUrl = target.webSocketDebuggerUrl;

  const ws = new WebSocket(wsUrl);
  let id = 1;
  const callbacks = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const cb = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) cb.reject(msg.error);
      else cb.resolve(msg.result);
    }
  };

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const msgId = id++;
    callbacks.set(msgId, { resolve, reject });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');

  const results = [];

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: Boolean(vp.mobile)
    });
    await new Promise(r => setTimeout(r, 600));

    const metrics = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const body = document.body;
          const html = document.documentElement;
          const scrollWidth = Math.max(body.scrollWidth, html.scrollWidth);
          const innerWidth = window.innerWidth;
          const hasOverflow = scrollWidth > innerWidth;

          // Check cards columns layout
          const cardsGrid = document.querySelector(".sch-cards-grid");
          let cardsCols = null;
          if (cardsGrid) {
            const gridStyle = window.getComputedStyle(cardsGrid);
            cardsCols = gridStyle.gridTemplateColumns.split(" ").length;
          }

          // Check feature cards
          const featGrid = document.querySelector(".sch-feat-card");
          let featCols = null;
          if (featGrid) {
            const featStyle = window.getComputedStyle(featGrid);
            featCols = featStyle.gridTemplateColumns.split(" ").length;
          }

          // Check categories grid
          const catGrid = document.querySelector(".cat-cards-grid");
          let catCols = null;
          if (catGrid) {
            const catStyle = window.getComputedStyle(catGrid);
            catCols = catStyle.gridTemplateColumns.split(" ").length;
          }

          return {
            scrollWidth,
            innerWidth,
            hasOverflow,
            cardsCols,
            featCols,
            catCols
          };
        })()
      `,
      returnByValue: true
    });

    results.push({ viewport: vp.name, ...metrics.result.value });
  }

  console.log(JSON.stringify(results, null, 2));

  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`, { method: 'PUT' });
  ws.close();
}

testResponsive().catch(err => {
  console.error('Responsive test error:', err);
  process.exit(1);
});
