<script lang="ts">
	import { chatStore, type ChatMessage } from '#lib/stores/chat.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
	import { buildWhatsAppUrl } from '#lib/utils/whatsapp';

	interface Props {
		message: ChatMessage;
	}

	let { message }: Props = $props();

	// Tokenizer aman untuk merender teks, tautan internal (tanpa prefix '/'), dan WhatsApp dinamis
	interface SafeToken {
		type: 'text' | 'link';
		content: string;
		href?: string;
	}

	function parseSafeTokens(rawText: string, questionContext: string | null): SafeToken[] {
		const allowlistRegex = /(https:\/\/wa\.me\/[0-9]+(?:\?[^\s]*)?|(?:WhatsApp\s+)?\+62\s*858-8072-4733|mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9._%+-]+@sdjnusantara\.com|\/(?:layanan\/pendidikan|layanan\/beasiswa|program|beasiswa|kemitraan|kontak|konsultasi|layanan|tentang-kami|artikel|faq)(?:#[a-zA-Z0-9_-]+)?)/g;

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
				// Revisi 3A: Hapus '/' di teks tampilan tautan internal agar ramah pengguna
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

	// Pisahkan baris pertama sebagai headline tebal untuk bubble bot jika ada multi-baris
	let parsedMessage = $derived.by(() => {
		const effectiveText =
			message.id === 'msg_welcome' ? i18n.dict.chat.welcomeMessage : message.text;
		const questionContext =
			message.role === 'bot' ? chatStore.getQuestionBeforeMessage(message.id) : null;

		if (message.role === 'bot') {
			const newlineIdx = effectiveText.indexOf('\n');
			if (newlineIdx !== -1) {
				const headline = effectiveText.substring(0, newlineIdx).trim();
				const body = effectiveText.substring(newlineIdx + 1).trim();
				return {
					headline,
					bodyTokens: parseSafeTokens(body, questionContext)
				};
			}
		}
		return {
			headline: '',
			bodyTokens: parseSafeTokens(effectiveText, questionContext)
		};
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
		</div>

		<!-- Jam di Dalam Bubble Bagian Bawah Rata Kanan (±11px) Sesuai Mockup -->
		<div class="bubble-time-row">
			<span class="bubble-time">{message.time}</span>
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
