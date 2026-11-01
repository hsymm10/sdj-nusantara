const { spawn } = require('child_process');

async function testInteractive() {
  const newTargetRes = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/artikel', { method: 'PUT' });
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

  await send('Emulation.setDeviceMetricsOverride', {
    width: 1536,
    height: 2306,
    deviceScaleFactor: 1,
    mobile: false
  });

  await new Promise(r => setTimeout(r, 1000));

  // 1. Test Carousel Prev/Next
  const carouselTest = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const headlineBefore = document.querySelector('.slide-headline a')?.textContent?.trim();
        const nextBtn = document.querySelectorAll('.arrow-round-btn')[1];
        if (nextBtn) nextBtn.click();
        return { headlineBefore };
      })()
    `,
    returnByValue: true
  });

  await new Promise(r => setTimeout(r, 400));

  const carouselAfter = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const headlineAfter = document.querySelector('.slide-headline a')?.textContent?.trim();
        return { headlineAfter };
      })()
    `,
    returnByValue: true
  });

  console.log('Carousel Test:', { ...carouselTest.result.value, ...carouselAfter.result.value });

  // 2. Test Category Filter
  const filterTest = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const beasiswaBtn = Array.from(document.querySelectorAll('.cat-tile')).find(b => b.textContent.includes('Beasiswa'));
        if (beasiswaBtn) beasiswaBtn.click();
        return { clickedBeasiswa: !!beasiswaBtn };
      })()
    `,
    returnByValue: true
  });

  await new Promise(r => setTimeout(r, 400));

  const filterCardsAfter = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const cards = Array.from(document.querySelectorAll('.clean-article-card'));
        const categories = cards.map(c => c.querySelector('.pill-category-badge')?.textContent?.trim());
        return { cardCount: cards.length, categories };
      })()
    `,
    returnByValue: true
  });

  console.log('Category Filter Test (Beasiswa):', filterCardsAfter.result.value);

  // 3. Test Search Input
  const searchTest = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const input = document.querySelector('.search-text-input');
        if (input) {
          input.value = 'inklusif';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        return { hasInput: !!input };
      })()
    `,
    returnByValue: true
  });

  await new Promise(r => setTimeout(r, 400));

  const searchAfter = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const cards = Array.from(document.querySelectorAll('.clean-article-card'));
        const titles = cards.map(c => c.querySelector('.card-article-title a')?.textContent?.trim());
        return { searchResultCount: cards.length, titles };
      })()
    `,
    returnByValue: true
  });

  console.log('Search Test ("inklusif"):', searchAfter.result.value);

  await fetch(`http://127.0.0.1:9222/json/close/${target.id}`, { method: 'PUT' });
  ws.close();
}

testInteractive().catch(console.error);
