const fs = require('fs');
const { spawn } = require('child_process');

async function main() {
  const chromeProcess = spawn('/usr/bin/google-chrome-stable', [
    '--headless=new',
    '--remote-debugging-port=9241',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--window-size=375,812'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  const targetRes = await fetch('http://127.0.0.1:9241/json/new?' + encodeURIComponent('http://127.0.0.1:5175/layanan/pendidikan'), { method: 'PUT' });
  const target = await targetRes.json();
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
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true
  });

  await new Promise(r => setTimeout(r, 2000));

  // Scroll down slightly so floating nav is in view
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, 180);`
  });
  await new Promise(r => setTimeout(r, 500));

  // Drag nav card to scroll right to reveal Beasiswa
  await send('Runtime.evaluate', {
    expression: `
      const navCard = document.querySelector('.service-nav-card');
      if (navCard) {
        navCard.scrollTo({ left: 140, behavior: 'smooth' });
      }
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/home/hszamm/.gemini/antigravity/brain/cb0bc971-0a92-4869-a2d3-f69e26d78b4e/final_responsive_report/revisi_mobile_nav_scrolled.png', Buffer.from(screenshot.data, 'base64'));
  console.log('Saved revisi_mobile_nav_scrolled.png');

  await fetch('http://127.0.0.1:9241/json/close/' + target.id);
  ws.close();
  chromeProcess.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

