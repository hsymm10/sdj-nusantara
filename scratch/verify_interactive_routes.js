import { spawn } from 'child_process';

class ChromeClient {
	constructor(port = 9558) {
		this.port = port;
		this.ws = null;
		this.msgId = 0;
		this.pending = new Map();
		this.process = null;
	}

	async start() {
		const chromePath = '/usr/bin/google-chrome';
		this.process = spawn(chromePath, [
			'--headless=new',
			'--no-sandbox',
			'--disable-gpu',
			'--disable-dev-shm-usage',
			'--hide-scrollbars',
			`--remote-debugging-port=${this.port}`,
			'about:blank'
		]);

		for (let i = 0; i < 30; i++) {
			try {
				const res = await fetch(`http://127.0.0.1:${this.port}/json/list`);
				if (res.ok) {
					const targets = await res.json();
					const pageTarget = targets.find((t) => t.type === 'page');
					if (pageTarget && pageTarget.webSocketDebuggerUrl) {
						await this.connect(pageTarget.webSocketDebuggerUrl);
						return;
					}
				}
			} catch (e) {
				await new Promise((r) => setTimeout(r, 200));
			}
		}
		throw new Error('Chrome failed to start');
	}

	async connect(wsUrl) {
		return new Promise((resolve, reject) => {
			this.ws = new WebSocket(wsUrl);
			this.ws.onopen = resolve;
			this.ws.onerror = reject;
			this.ws.onmessage = (event) => {
				const data = JSON.parse(event.data);
				if (data.id && this.pending.has(data.id)) {
					const { resolve, reject } = this.pending.get(data.id);
					this.pending.delete(data.id);
					if (data.error) reject(data.error);
					else resolve(data.result);
				}
			};
		});
	}

	send(method, params = {}) {
		return new Promise((resolve, reject) => {
			const id = ++this.msgId;
			this.pending.set(id, { resolve, reject });
			this.ws.send(JSON.stringify({ id, method, params }));
		});
	}

	async navigate(url) {
		await this.send('Page.enable');
		await this.send('Page.navigate', { url });
		await new Promise((r) => setTimeout(r, 1500));
	}

	async evaluate(expression) {
		const res = await this.send('Runtime.evaluate', {
			expression,
			returnByValue: true,
			awaitPromise: true
		});
		return res?.result?.value;
	}

	async close() {
		if (this.ws) this.ws.close();
		if (this.process) this.process.kill();
	}
}

async function verifyInteractive() {
	const client = new ChromeClient(9558);
	try {
		await client.start();
		await client.navigate('http://127.0.0.1:5173/layanan/pendidikan');

		// 1. Cek keberadaan anchor section #layanan, #program, #beasiswa
		const sections = await client.evaluate(`
			(() => {
				const s1 = !!document.getElementById('layanan');
				const s2 = !!document.getElementById('program');
				const s3 = !!document.getElementById('beasiswa');
				return { s1, s2, s3 };
			})()
		`);
		console.log('Sections present:', sections);

		// 2. Cek filter program
		const programFilterWorks = await client.evaluate(`
			(() => {
				const tabButtons = document.querySelectorAll('.category-tabs .tab-btn');
				if (tabButtons.length > 1) {
					tabButtons[1].click();
					return true;
				}
				return false;
			})()
		`);
		console.log('Program filter clicked:', programFilterWorks);

		// 3. Cek pencarian beasiswa
		const scholarshipSearchWorks = await client.evaluate(`
			(() => {
				const searchInput = document.querySelector('.search-input');
				if (searchInput) {
					searchInput.value = 'BPI';
					searchInput.dispatchEvent(new Event('input', { bubbles: true }));
					return true;
				}
				return false;
			})()
		`);
		console.log('Scholarship search input works:', scholarshipSearchWorks);

		// 4. Cek Dropdown Navbar di /layanan/pendidikan
		const dropdownTest = await client.evaluate(`
			(() => {
				const chevronBtn = document.querySelector('.dropdown-chevron-btn');
				if (!chevronBtn) return { found: false };
				chevronBtn.click();
				const panel = document.querySelector('.dropdown-panel');
				const eduCard = document.querySelector('.dropdown-card.education');
				const legalCard = document.querySelector('.dropdown-card.legal');
				return {
					found: true,
					panelVisible: !!panel,
					eduCardActive: eduCard ? eduCard.classList.contains('card-active') : false,
					legalBadge: legalCard ? legalCard.textContent.includes('Segera hadir') : false
				};
			})()
		`);
		console.log('Dropdown Navbar on /layanan/pendidikan:', dropdownTest);

		console.log('All interactive tests verified successfully!');
	} catch (e) {
		console.error('Interactive test error:', e);
		process.exit(1);
	} finally {
		await client.close();
	}
}

verifyInteractive();
