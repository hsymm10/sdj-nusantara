const fs = require('fs');

async function runTests() {
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

  console.log('Connected to CDP');

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');

  // Set 1536 viewport
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1536,
    height: 1024,
    deviceScaleFactor: 1,
    mobile: false
  });

  await new Promise(r => setTimeout(r, 1500));

  // Test 1: Check cards rendered
  let res = await send('Runtime.evaluate', {
    expression: 'document.querySelectorAll(".sch-card").length'
  });
  console.log('Test 1 - Initial cards count:', res.result.value);

  // Test 2: Search input query
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const input = document.querySelector(".search-text-input");
        input.value = "LPDP";
        input.dispatchEvent(new Event("input", { bubbles: true }));
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));
  res = await send('Runtime.evaluate', {
    expression: 'document.querySelectorAll(".sch-card").length'
  });
  console.log('Test 2 - Filter by "LPDP" count:', res.result.value);

  // Test 3: Empty state
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const input = document.querySelector(".search-text-input");
        input.value = "xyznonexistent123";
        input.dispatchEvent(new Event("input", { bubbles: true }));
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));
  res = await send('Runtime.evaluate', {
    expression: 'Boolean(document.querySelector(".no-sch-box"))'
  });
  console.log('Test 3 - Empty state rendered:', res.result.value);

  // Test 4: Reset filters
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector(".btn-reset-filters");
        if (btn) btn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));
  res = await send('Runtime.evaluate', {
    expression: 'document.querySelectorAll(".sch-card").length'
  });
  console.log('Test 4 - Restored cards count after reset:', res.result.value);

  // Test 5: 5 Select filters
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const selJenjang = document.querySelector("#filter-jenjang");
        selJenjang.value = "S2";
        selJenjang.dispatchEvent(new Event("change", { bubbles: true }));
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));
  res = await send('Runtime.evaluate', {
    expression: 'document.querySelectorAll(".sch-card").length'
  });
  console.log('Test 5 - Jenjang S2 count:', res.result.value);

  // Reset again
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector(".terbaru-link-btn");
        if (btn) btn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));

  // Test 6: Bookmark toggle
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector(".bookmark-btn");
        btn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));
  res = await send('Runtime.evaluate', {
    expression: 'document.querySelector(".bookmark-btn").classList.contains("is-active")'
  });
  console.log('Test 6 - Bookmark is-active after click:', res.result.value);

  // Test 7: Category Card click sets Category filter
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const catBtn = document.querySelectorAll(".cat-card")[3]; // Swasta
        catBtn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));
  res = await send('Runtime.evaluate', {
    expression: 'document.querySelector("#filter-cat").value'
  });
  console.log('Test 7 - Category select value after card click:', res.result.value);

  // Reset category filter
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const selCat = document.querySelector("#filter-cat");
        selCat.value = "Semua Kategori";
        selCat.dispatchEvent(new Event("change", { bubbles: true }));
      })()
    `
  });
  await new Promise(r => setTimeout(r, 200));

  // Test 8: Back-to-top button
  res = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btt = document.querySelector(".back-to-top-btn");
        return { exists: Boolean(btt), display: btt ? window.getComputedStyle(btt).display : null };
      })()
    `,
    returnByValue: true
  });
  console.log('Test 8 - Back-to-top button exists in footer:', res.result.value);

  // Clean up tab
  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`, { method: 'PUT' });
  ws.close();
}

runTests().catch(err => {
  console.error('Interactive test error:', err);
  process.exit(1);
});
