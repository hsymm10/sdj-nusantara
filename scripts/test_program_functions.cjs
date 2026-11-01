const { spawn } = require('child_process');

async function testFunctions() {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/program', { method: 'PUT' });
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

  await new Promise(r => setTimeout(r, 2000));

  // Test 1: Check initial card count (5 cards)
  const initialCards = await send('Runtime.evaluate', {
    expression: `document.querySelectorAll('.prog-card').length`,
    returnByValue: true
  });
  console.log('1. Initial program cards count:', initialCards.result.value);

  // Test 2: Click "Keterampilan Digital" tab
  await send('Runtime.evaluate', {
    expression: `(() => {
      const tabs = Array.from(document.querySelectorAll('.tab-btn'));
      const digitalTab = tabs.find(t => t.textContent.includes('Keterampilan Digital'));
      if (digitalTab) digitalTab.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 500));
  const digitalCards = await send('Runtime.evaluate', {
    expression: `document.querySelectorAll('.prog-card').length`,
    returnByValue: true
  });
  console.log('2. Cards count after Keterampilan Digital tab:', digitalCards.result.value);

  // Test 3: Click "Kolaborasi Kelembagaan" tab (should show empty state)
  await send('Runtime.evaluate', {
    expression: `(() => {
      const tabs = Array.from(document.querySelectorAll('.tab-btn'));
      const kolabTab = tabs.find(t => t.textContent.includes('Kolaborasi Kelembagaan'));
      if (kolabTab) kolabTab.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 500));
  const emptyState = await send('Runtime.evaluate', {
    expression: `(() => {
      const es = document.querySelector('.empty-state-card');
      return es ? es.textContent.trim().replace(/\\s+/g, ' ') : null;
    })()`,
    returnByValue: true
  });
  console.log('3. Empty state for Kolaborasi Kelembagaan:', emptyState.result.value);

  // Test 4: Search "beasiswa"
  await send('Runtime.evaluate', {
    expression: `(() => {
      const tabs = Array.from(document.querySelectorAll('.tab-btn'));
      const allTab = tabs.find(t => t.textContent.includes('Semua Program'));
      if (allTab) allTab.click();
      const input = document.querySelector('.search-input');
      if (input) {
        input.value = 'beasiswa';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    })()`
  });
  await new Promise(r => setTimeout(r, 500));
  const searchCards = await send('Runtime.evaluate', {
    expression: `document.querySelectorAll('.prog-card').length`,
    returnByValue: true
  });
  console.log('4. Cards count after searching "beasiswa":', searchCards.result.value);

  // Test 5: Verify links and hrefs
  const links = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        konsultasiHero: document.querySelector('.hero-btn-primary')?.getAttribute('href'),
        daftarSemuaHero: document.querySelector('.hero-btn-secondary')?.getAttribute('href'),
        detailFeatured: document.querySelector('.btn-gold')?.getAttribute('href'),
        customBtn: document.querySelector('.btn-gold-custom')?.getAttribute('href'),
        ctaPrimary: document.querySelector('.cta-banner .btn-gold')?.getAttribute('href'),
        ctaSecondary: document.querySelector('.cta-banner .btn-outline')?.getAttribute('href')
      };
    })()`,
    returnByValue: true
  });
  console.log('5. Links and buttons targets:', JSON.stringify(links.result.value, null, 2));

  await fetch('http://127.0.0.1:9222/json/close/' + target.id);
  ws.close();
}

testFunctions().catch(console.error);
