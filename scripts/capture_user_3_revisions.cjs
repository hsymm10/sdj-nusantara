const fs = require('fs');
const { spawn } = require('child_process');

async function main() {
  const chromeProcess = spawn('/usr/bin/google-chrome-stable', [
    '--headless=new',
    '--remote-debugging-port=9242',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--window-size=1366,768'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  async function capture(url, width, height, outputPath, beforeScreenshot) {
    const targetRes = await fetch('http://127.0.0.1:9242/json/new?' + encodeURIComponent(url), { method: 'PUT' });
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

    await fetch('http://127.0.0.1:9242/json/close/' + target.id);
    ws.close();
  }

  const outDir = '/home/hszamm/.gemini/antigravity/brain/cb0bc971-0a92-4869-a2d3-f69e26d78b4e/final_responsive_report';

  // 1. Nilai-Nilai Luhur on iPad (768px) and Desktop (1366px)
  await capture('http://127.0.0.1:5175/tentang-kami', 768, 1024, `${outDir}/rev1_nilai_section_ipad.png`, async (send) => {
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('nilai') || document.querySelector('.nilai-section');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
  });

  await capture('http://127.0.0.1:5175/tentang-kami', 1366, 768, `${outDir}/rev1_nilai_section_desktop.png`, async (send) => {
    await send('Runtime.evaluate', {
      expression: `
        const el = document.getElementById('nilai') || document.querySelector('.nilai-section');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
  });

  // 2. Button Selengkapnya Tentang Kami on iPad (768px) and Mobile (375px) on /layanan/pendidikan
  await capture('http://127.0.0.1:5175/layanan/pendidikan', 768, 1024, `${outDir}/rev2_button_kuning_ipad.png`, async (send) => {
    await send('Runtime.evaluate', {
      expression: `
        const el = document.querySelector('.about-cta-btn') || document.querySelector('.about-left-col');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
  });

  await capture('http://127.0.0.1:5175/layanan/pendidikan', 375, 812, `${outDir}/rev2_button_kuning_mobile.png`, async (send) => {
    await send('Runtime.evaluate', {
      expression: `
        const el = document.querySelector('.about-cta-btn') || document.querySelector('.about-left-col');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
  });

  // 3. Kartu Alamat Kantor on iPad (768px) and Mobile (375px) on /kontak
  await capture('http://127.0.0.1:5175/kontak', 768, 1024, `${outDir}/rev3_address_card_ipad.png`, async (send) => {
    await send('Runtime.evaluate', {
      expression: `
        const el = document.querySelector('.address-card') || document.querySelector('.location-3panel-section');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
  });

  await capture('http://127.0.0.1:5175/kontak', 375, 812, `${outDir}/rev3_address_card_mobile.png`, async (send) => {
    await send('Runtime.evaluate', {
      expression: `
        const el = document.querySelector('.address-card') || document.querySelector('.location-3panel-section');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 800));
  });

  chromeProcess.kill();
  console.log('Finished capturing all revision screenshots!');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
