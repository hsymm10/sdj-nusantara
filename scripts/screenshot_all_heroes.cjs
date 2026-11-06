const fs = require('fs');

async function createCdpSession(width, height) {
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
    mobile: false
  });

  return {
    send,
    captureHero: async (selector, outPath) => {
      const rectRes = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const el = document.querySelector('${selector}');
            if (!el) return null;
            const r = el.getBoundingClientRect();
            return {
              x: Math.round(r.left + window.scrollX),
              y: Math.round(r.top + window.scrollY),
              width: Math.round(r.width),
              height: Math.round(r.height),
              scale: 1
            };
          })()
        `,
        returnByValue: true
      });

      const clip = rectRes.result.value;
      if (!clip) {
        console.error('Element not found:', selector);
        return null;
      }

      const ss = await send('Page.captureScreenshot', {
        format: 'png',
        clip,
        captureBeyondViewport: true
      });
      fs.mkdirSync('screenshots', { recursive: true });
      fs.writeFileSync(outPath, Buffer.from(ss.data, 'base64'));
      console.log(`Saved screenshot: ${outPath} (${clip.width}x${clip.height})`);
      return clip;
    },
    close: async () => {
      try { await send('Page.close'); } catch(e){}
      ws.close();
    }
  };
}

async function run() {
  const cdp = await createCdpSession(1536, 960);
  const heroes = [
    { url: 'http://localhost:5173/', sel: '#hero-beranda', name: 'hero_beranda.png' },
    { url: 'http://localhost:5173/tentang-kami', sel: '.hero-about', name: 'hero_tentang_kami.png' },
    { url: 'http://localhost:5173/layanan', sel: '.hub-hero', name: 'hero_layanan_hub.png' },
    { url: 'http://localhost:5173/layanan/pendidikan', sel: '.hero-services', name: 'hero_layanan_pendidikan.png' },
    { url: 'http://localhost:5173/layanan/hukum', sel: '.legal-hero', name: 'hero_layanan_hukum.png' },
    { url: 'http://localhost:5173/kemitraan', sel: '.hero-partner', name: 'hero_kemitraan.png' },
    { url: 'http://localhost:5173/artikel', sel: '.hero-article', name: 'hero_artikel.png' },
    { url: 'http://localhost:5173/kontak', sel: '.hero-contact', name: 'hero_kontak.png' }
  ];

  const results = [];
  for (const h of heroes) {
    console.log(`Navigating to ${h.url}...`);
    await cdp.send('Page.navigate', { url: h.url });
    await new Promise(r => setTimeout(r, 1200));
    const clip = await cdp.captureHero(h.sel, `screenshots/${h.name}`);
    results.push({ name: h.name, clip });
  }

  console.log('\n--- HERO DIMENSIONS AUDIT ---');
  for (const r of results) {
    if (r.clip) {
      console.log(`${r.name}: ${r.clip.width}px x ${r.clip.height}px (Expected height: 445px)`);
    } else {
      console.log(`${r.name}: FAILED TO CAPTURE`);
    }
  }

  await cdp.close();
}

run().catch(console.error);
