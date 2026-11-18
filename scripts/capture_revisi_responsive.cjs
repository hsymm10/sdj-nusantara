const fs = require('fs');
const { spawn } = require('child_process');

async function main() {
  const chromeProcess = spawn('/usr/bin/google-chrome-stable', [
    '--headless=new',
    '--remote-debugging-port=9240',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--window-size=375,812'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  async function capture(url, width, height, outputPath, beforeScreenshot) {
    const targetRes = await fetch('http://127.0.0.1:9240/json/new?' + encodeURIComponent(url), { method: 'PUT' });
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
      width: width,
      height: height,
      deviceScaleFactor: 2,
      mobile: width < 768
    });

    await new Promise(r => setTimeout(r, 2000));

    if (beforeScreenshot) {
      await beforeScreenshot(send);
    }

    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
    console.log(`Saved screenshot to ${outputPath}`);

    await fetch('http://127.0.0.1:9240/json/close/' + target.id);
    ws.close();
  }

  const outDir = '/home/hszamm/.gemini/antigravity/brain/cb0bc971-0a92-4869-a2d3-f69e26d78b4e/final_responsive_report';

  // 1. Mobile Floating Nav on /layanan/pendidikan
  await capture('http://127.0.0.1:5175/layanan/pendidikan', 375, 812, `${outDir}/revisi_mobile_nav_pendidikan.png`, async (send) => {
    // Scroll down slightly so floating nav is in view
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, 180);`
    });
    await new Promise(r => setTimeout(r, 600));
  });

  // 2. Mobile Chatbot Open
  await capture('http://127.0.0.1:5175/layanan/pendidikan', 375, 812, `${outDir}/revisi_mobile_chatbot_open.png`, async (send) => {
    await send('Runtime.evaluate', {
      expression: `
        const btn = document.querySelector('.chat-launcher-btn') || document.querySelector('.chat-trigger-btn');
        if (btn) btn.click();
      `
    });
    await new Promise(r => setTimeout(r, 1200));
  });

  chromeProcess.kill();
  console.log('All screenshots completed successfully!');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
