<script lang="ts">
	import { chatStore, type ChatMessage } from '#lib/stores/chat.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
	import { buildWhatsAppUrl } from '#lib/utils/whatsapp';
	import { getWebsiteTopicById } from '#lib/data/chatWebsiteIndex';
	import { allKnowledge } from '#lib/data/knowledge/index.js';
	import { knowledgeEnMap } from '#lib/i18n/knowledgeEn';

	interface Props {
		message: ChatMessage;
	}

	let { message }: Props = $props();

	// Tokenizer aman untuk merender teks, tautan internal, dan WhatsApp dinamis
	interface SafeToken {
		type: 'text' | 'link';
		content: string;
		href?: string;
	}

	function parseSafeTokens(rawText: string, questionContext: string | null): SafeToken[] {
		const allowlistRegex =
			/(https:\/\/wa\.me\/[0-9]+(?:\?[^\s]*)?|(?:WhatsApp\s+)?\+62\s*858-8072-4733|mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9._%+-]+@sdjnusantara\.com|\/(?:layanan\/pendidikan\/program\/[a-zA-Z0-9_-]+|layanan\/pendidikan\/beasiswa\/[a-zA-Z0-9_-]+|layanan\/pendidikan|layanan\/beasiswa|program|beasiswa|kemitraan|kontak|konsultasi|layanan|tentang-kami|artikel|faq|kebijakan-privasi|syarat-ketentuan)(?:#[a-zA-Z0-9_-]+)?)/g;

		const tokens: SafeToken[] = [];
		let lastIndex = 0;
		let match: RegExpExecArray | null;

		while ((match = allowlistRegex.exec(rawText)) !== null) {
			const index = match.index;
			const matchedStr = match[0];

			if (index > lastIndex) {
				tokens.push({
					type: 'text',
					content: rawText.substring(lastIndex, index)
				});
			}

			let href = matchedStr;
			let displayText = matchedStr;

			if (matchedStr.startsWith('https://wa.me/') || matchedStr.includes('+62')) {
				href = buildWhatsAppUrl(questionContext, i18n.lang);
				displayText = matchedStr.startsWith('http') ? i18n.dict.chat.whatsappLabel : matchedStr;
			} else if (matchedStr.includes('@') && !matchedStr.startsWith('mailto:')) {
				href = `mailto:${matchedStr}`;
			} else if (matchedStr.startsWith('/')) {
				displayText = i18n.dict.chat.routeLabels[matchedStr] ?? matchedStr.replace(/^\//, '');
			}

			tokens.push({
				type: 'link',
				content: displayText,
				href
			});

			lastIndex = index + matchedStr.length;
		}

		if (lastIndex < rawText.length) {
			tokens.push({
				type: 'text',
				content: rawText.substring(lastIndex)
			});
		}

		return tokens;
	}

	// Format waktu per-locale secara reaktif (Intl.DateTimeFormat)
	function formatLocalizedTime(ms: number | undefined, lang: 'id' | 'en'): string {
		const validMs = typeof ms === 'number' && !isNaN(ms) ? ms : Date.now();
		try {
			return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'id-ID', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			}).format(new Date(validMs));
		} catch {
			const d = new Date(validMs);
			const hh = String(d.getHours()).padStart(2, '0');
			const mm = String(d.getMinutes()).padStart(2, '0');
			return `${hh}:${mm}`;
		}
	}

	// Resolusi pesan bot secara dinamis berdasarkan bahasa aktif (i18n.lang)
	function resolveBotMessage(msg: ChatMessage, lang: 'id' | 'en'): { headline: string; body: string } {
		const isEn = lang === 'en';

		// 1. Sapaan
		if (msg.kind === 'greeting' || msg.id === 'msg_welcome') {
			const fullWelcome = i18n.dict.chat.welcomeMessage;
			const newlineIdx = fullWelcome.indexOf('\n');
			if (newlineIdx !== -1) {
				return {
					headline: fullWelcome.substring(0, newlineIdx).trim(),
					body: fullWelcome.substring(newlineIdx + 1).trim()
				};
			}
			return { headline: '', body: fullWelcome };
		}

		// 2. Ringkasan (Summary) untuk pengguna "malas baca"
		if (msg.kind === 'summary') {
			const topicId = msg.key || msg.params?.topicId || '';
			const topic = getWebsiteTopicById(topicId);
			if (topic) {
				const headline = isEn ? `Summary: ${topic.title.en}` : `Ringkasan: ${topic.title.id}`;
				const bullets = topic.bullets[lang].map((b) => (b.startsWith('•') ? b : `• ${b}`)).join('\n');
				const linkLine = isEn ? `Read full details at ${topic.url}` : `Pelajari selengkapnya di halaman ${topic.url}`;
				return {
					headline,
					body: `${bullets}\n\n${linkLine}`
				};
			}
		}

		// 3. Lokasi & Penjelasan Isi Halaman (Page Overview)
		if (msg.kind === 'page_overview') {
			const topicId = msg.key || msg.params?.topicId || '';
			const topic = getWebsiteTopicById(topicId);
			if (topic) {
				const headline = isEn ? `Overview of ${topic.title.en}` : `Gambaran Halaman: ${topic.title.id}`;
				const overview = topic.overview[lang];
				let subList = '';
				if (topic.subpages.length > 0) {
					subList = topic.subpages
						.map((s) => `• ${s.title[lang]}: ${s.desc[lang]} (${s.url})`)
						.join('\n');
				}
				const linkLine = isEn ? `Visit page: ${topic.url}` : `Kunjungi halaman: ${topic.url}`;
				return {
					headline,
					body: `${overview}${subList ? `\n\n${subList}` : ''}\n\n${linkLine}`
				};
			}
		}

		// 4. Jawaban Basis Pengetahuan / Indeks Website (Answer)
		if (msg.kind === 'answer') {
			// A. Dari Indeks Website
			if (msg.key?.startsWith('topic:')) {
				const topicId = msg.key.replace('topic:', '');
				const topic = getWebsiteTopicById(topicId);
				if (topic) {
					const headline = isEn ? topic.title.en : topic.title.id;
					const overview = topic.overview[lang];
					const points = topic.bullets[lang].slice(0, 3).map((b) => (b.startsWith('•') ? b : `• ${b}`)).join('\n');
					const linkLine = isEn ? `Learn more at ${topic.url}` : `Pelajari selengkapnya di ${topic.url}`;
					return {
						headline,
						body: `${overview}\n\n${points}\n\n${linkLine}`
					};
				}
			}

			// B. Dari Basis Pengetahuan (allKnowledge)
			const kbEntry = allKnowledge.find((k) => k.id === msg.key);
			if (kbEntry) {
				const enEntry = isEn ? knowledgeEnMap[kbEntry.id] : undefined;
				const headline = isEn ? (enEntry ? enEntry.ringkas : kbEntry.ringkas) : kbEntry.ringkas;
				const detailList = isEn ? (enEntry ? enEntry.detail : kbEntry.detail) : kbEntry.detail;
				let bullets = '';
				if (detailList && detailList.length > 0) {
					bullets = detailList
						.slice(0, 4)
						.map((item) => (item.startsWith('•') || item.match(/^\d+\./) ? item : `• ${item}`))
						.join('\n');
				}
				let linkLine = '';
				if (kbEntry.langkahBerikut && kbEntry.langkahBerikut.length > 0) {
					const next = kbEntry.langkahBerikut[0];
					linkLine = isEn
						? `Learn more or consult with us at ${next.href}`
						: `Pelajari lebih lanjut atau jadwalkan sesi melalui ${next.href}`;
				}
				return {
					headline,
					body: bullets ? (linkLine ? `${bullets}\n\n${linkLine}` : bullets) : linkLine
				};
			}
		}

		// 5. Apakah maksud Anda (Did You Mean / Partial Match)
		if (msg.kind === 'did_you_mean') {
			const headline = isEn
				? 'Did you mean one of the following topics?'
				: 'Apakah maksud Anda salah satu topik berikut?';
			const body = isEn
				? 'Please select one of the topics below or clarify your question:'
				: 'Silakan pilih salah satu topik di bawah ini atau perjelas pertanyaan Anda:';
			return { headline, body };
		}

		// 6. Kebijakan Khusus (Policy)
		if (msg.kind === 'policy') {
			if (msg.key === 'guarantee') {
				return {
					headline: isEn ? 'Scholarship Guarantee Policy' : 'Kebijakan Jaminan Beasiswa',
					body: isEn
						? 'SDJNusantara does not guarantee scholarship acceptance or admission. Final selection decisions rest solely with the awarding organization or university.\n\nOur Scholarship Academy focuses on structured preparation, profile mapping, essay and CV refinement, and interview simulations.\n\nLearn more at /layanan/beasiswa.'
						: 'SDJNusantara tidak memberikan jaminan kelulusan atau perolehan beasiswa. Keputusan akhir sepenuhnya merupakan wewenang pihak universitas atau lembaga penyelenggara beasiswa terkait.\n\nLayanan Scholarship Academy SDJNusantara berfokus pada pendampingan terarah, pemetaan profil, penguatan dokumen aplikasi (CV dan esai/motivation letter), serta simulasi wawancara agar persiapan Anda lebih matang.\n\nPelajari selengkapnya di halaman /layanan/beasiswa.'
				};
			}
			if (msg.key === 'payment_account') {
				return {
					headline: isEn ? 'Official Payment & Account Policy' : 'Kebijakan Pembayaran & Rekening Resmi',
					body: isEn
						? 'All official SDJNusantara program transactions and payments are issued only via official corporate invoices and institutional bank accounts, never personal accounts.\n\nFor official administration verification, reach our representative via WhatsApp +62 858-8072-4733 or email info@sdjnusantara.com.\n\nSee full details at /syarat-ketentuan.'
						: 'Seluruh transaksi dan pembayaran resmi program SDJNusantara hanya diterbitkan melalui invoice resmi dan rekening institusi atas nama perusahaan, bukan rekening pribadi individu mana pun.\n\nUntuk konfirmasi administrasi resmi, silakan hubungi saluran representatif kami di WhatsApp +62 858-8072-4733 atau email info@sdjnusantara.com.\n\nLihat selengkapnya di halaman /syarat-ketentuan.'
				};
			}
			if (msg.key === 'legal_unavailable') {
				return {
					headline: isEn ? 'Service Availability' : 'Informasi Ketersediaan Layanan',
					body: isEn
						? 'Currently, SDJNusantara focuses our active services on Education Programs and Scholarships. You can explore our active programs at /layanan or consult with our team via /kontak.'
						: 'Saat ini fokus utama layanan aktif SDJNusantara adalah Program Pendidikan dan Beasiswa. Anda dapat menjelajahi program aktif kami di /layanan atau berdiskusi dengan tim kami melalui halaman /kontak.'
				};
			}
		}

		// 7. Fallback sopan jika topik tidak ada di data website
		if (msg.kind === 'fallback') {
			const headline = isEn ? 'Information Lookup' : 'Pencarian Informasi';
			const body = isEn
				? 'Thank you for your question. We could not find specific information for that topic in our website system right now.\n\nYou can ask about our education programs, scholarship preparation, talent mapping, or consult directly with our education consultant via /kontak or WhatsApp +62 858-8072-4733.'
				: 'Terima kasih atas pertanyaan Anda. Kami belum menemukan informasi spesifik untuk topik tersebut di sistem website saat ini.\n\nAnda dapat menanyakan hal lain seputar program pendidikan, persiapan beasiswa, pemetaan talenta, atau langsung berdiskusi dengan konsultan pendidikan kami melalui halaman /kontak atau WhatsApp +62 858-8072-4733.';
			return { headline, body };
		}

		// 8. Teks fallback standar (legacy)
		const raw = msg.text || '';
		const newlineIdx = raw.indexOf('\n');
		if (newlineIdx !== -1) {
			return {
				headline: raw.substring(0, newlineIdx).trim(),
				body: raw.substring(newlineIdx + 1).trim()
			};
		}
		return { headline: '', body: raw };
	}

	// Pesan terurai yang reaktif terhadap perubahan i18n.lang
	let parsedMessage = $derived.by(() => {
		const questionContext =
			message.role === 'bot' ? chatStore.getQuestionBeforeMessage(message.id) : null;

		if (message.role === 'user') {
			// Pesan pengguna selalu dalam teks asli, tidak pernah diterjemahkan/diubah
			return {
				headline: '',
				bodyTokens: parseSafeTokens(message.text || '', null)
			};
		}

		// Pesan bot di-resolve secara dinamis sesuai bahasa aktif
		const { headline, body } = resolveBotMessage(message, i18n.lang);
		return {
			headline,
			bodyTokens: parseSafeTokens(body, questionContext)
		};
	});

	// Saran topik interaktif yang terikat pada bubble bot
	let interactiveChips = $derived.by(() => {
		if (message.role !== 'bot') return [];

		const rawChips = message.params?.candidateTopics || message.params?.suggestions || [];
		if (!Array.isArray(rawChips) || rawChips.length === 0) return [];

		const isEn = i18n.lang === 'en';
		return rawChips.slice(0, 4).map((item) => {
			const topic = getWebsiteTopicById(item);
			if (topic) {
				return {
					id: topic.id,
					label: isEn ? topic.title.en : topic.title.id,
					query: isEn ? `Explain ${topic.title.en}` : `Jelaskan ${topic.title.id}`
				};
			}
			return {
				id: item,
				label: item,
				query: item
			};
		});
	});

	// Timestamp terformat secara dinamis sesuai locale
	let displayTime = $derived.by(() => {
		return formatLocalizedTime(message.timestampMs, i18n.lang);
	});
</script>

<div class="message-row {message.role}">
	<!-- Bot Avatar Icon on Left Top (Lingkaran Teal ±36px, Ikon Robot Putih) -->
	{#if message.role === 'bot'}
		<div class="bot-bubble-avatar" aria-hidden="true">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
				<!-- Head: Persegi membulat putih -->
				<rect x="3.5" y="6" width="17" height="13" rx="4" stroke="#FFFFFF" stroke-width="1.8" fill="none" />
				<!-- Eyes -->
				<circle cx="8.5" cy="11.5" r="1.3" fill="#FFFFFF" />
				<circle cx="15.5" cy="11.5" r="1.3" fill="#FFFFFF" />
				<!-- Smile -->
				<path d="M9.5 15c.8.7 1.7 1 2.5 1s1.7-.3 2.5-1" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" />
				<!-- Antenna -->
				<path d="M12 2.5v3.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
				<circle cx="12" cy="2.5" r="1.1" fill="#FFFFFF" />
				<!-- Ears -->
				<rect x="1.5" y="10.5" width="2" height="4" rx="1" fill="#FFFFFF" />
				<rect x="20.5" y="10.5" width="2" height="4" rx="1" fill="#FFFFFF" />
			</svg>
		</div>
	{/if}

	<!-- Message Bubble Container -->
	<div class="bubble {message.role}">
		<div class="bubble-content">
			{#if parsedMessage.headline}
				<div class="bot-headline">{parsedMessage.headline}</div>
			{/if}

			<div class="bubble-body">
				{#each parsedMessage.bodyTokens as token}
					{#if token.type === 'link'}
						<a
							href={token.href}
							class="message-inline-link"
							target={token.href?.startsWith('http') ? '_blank' : '_self'}
							rel="noopener noreferrer"
						>
							{token.content}
						</a>
					{:else}
						<span>{token.content}</span>
					{/if}
				{/each}
			</div>

			<!-- Chip Rekomendasi / Saran Topik Interaktif -->
			{#if interactiveChips.length > 0}
				<div class="bubble-chips-container" role="group" aria-label="Saran Topik Lanjutan">
					{#each interactiveChips as chip}
						<button
							type="button"
							class="bubble-chip-btn"
							onclick={() => chatStore.sendUserMessage(chip.query)}
						>
							{chip.label}
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Jam di Dalam Bubble Bagian Bawah Rata Kanan (±11px) Sesuai Mockup -->
		<div class="bubble-time-row">
			<span class="bubble-time">{displayTime}</span>
		</div>
	</div>
</div>

<style>
	.message-row {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		margin-bottom: 12px;
		width: 100%;
		animation: messageFadeUp 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	.message-row.user {
		justify-content: flex-end;
	}

	.message-row.bot {
		justify-content: flex-start;
	}

	/* Avatar Kecil Robot Lingkaran Teal ±36px di Kiri Atas */
	.bot-bubble-avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 3px 8px rgba(7, 158, 173, 0.28);
		margin-top: 2px;
	}

	/* Bubble Style */
	.bubble {
		position: relative;
		padding: 13px 16px 8px;
		border-radius: 18px;
		max-width: 82%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	/* Bubble Bot: Latar #EEF2F6 (abu-biru lembut), radius 18px (kiri-atas 6px) */
	.bubble.bot {
		background: #EEF2F6;
		color: #082442;
		border-top-left-radius: 6px;
		box-shadow: 0 1px 4px rgba(8, 36, 66, 0.04);
	}

	/* Bubble User: Latar Teal #079EAD, teks putih, radius 18px (kanan-bawah 6px) */
	.bubble.user {
		background: #079EAD;
		color: #FFFFFF;
		border-bottom-right-radius: 6px;
		box-shadow: 0 3px 12px rgba(7, 158, 173, 0.25);
		max-width: 80%;
	}

	.bubble-content {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	/* Baris Pertama (Judul) BOLD Navy ±15.5px */
	.bot-headline {
		font-size: 15.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		letter-spacing: -0.01em;
	}

	.bubble-body {
		font-size: 14.5px;
		line-height: 1.5;
		word-break: break-word;
		white-space: pre-line;
	}

	.bubble.bot .bubble-body {
		color: #183553;
	}

	.bubble.user .bubble-body {
		color: #FFFFFF;
	}

	.message-inline-link {
		color: #079EAD;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: opacity 0.15s ease;
	}

	.bubble.user .message-inline-link {
		color: #FFFFFF;
		text-decoration: underline;
	}

	.message-inline-link:hover {
		opacity: 0.85;
	}

	/* Chip Rekomendasi di dalam bubble */
	.bubble-chips-container {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 8px;
		padding-top: 6px;
		border-top: 1px dashed rgba(8, 36, 66, 0.12);
	}

	.bubble-chip-btn {
		display: inline-flex;
		align-items: center;
		padding: 4px 10px;
		background: #FFFFFF;
		border: 1px solid #C4DCE6;
		border-radius: 9999px;
		font-size: 12px;
		font-weight: 600;
		color: #079EAD;
		cursor: pointer;
		transition: all 0.15s ease;
		line-height: 1.3;
	}

	.bubble-chip-btn:hover {
		background: #E8F5F8;
		border-color: #079EAD;
		transform: translateY(-1px);
	}

	/* Jam ±11px di Dalam Bubble Rata Kanan */
	.bubble-time-row {
		display: flex;
		justify-content: flex-end;
		margin-top: 4px;
	}

	.bubble.bot .bubble-time {
		font-size: 11px;
		color: #8A97A6;
		font-variant-numeric: tabular-nums;
	}

	.bubble.user .bubble-time {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.72);
		font-variant-numeric: tabular-nums;
	}

	@keyframes messageFadeUp {
		0% {
			opacity: 0;
			transform: translateY(8px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.message-row {
			animation: none;
		}
	}
</style>
