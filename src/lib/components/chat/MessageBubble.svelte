<script lang="ts">
	import type { ChatMessage } from '#lib/stores/chat.svelte';

	interface Props {
		message: ChatMessage;
	}

	let { message }: Props = $props();

	// Tokenizer aman untuk merender teks dan tautan allowlist tanpa {@html}
	interface SafeToken {
		type: 'text' | 'link';
		content: string;
		href?: string;
	}

	function parseSafeTokens(rawText: string): SafeToken[] {
		// Regex mencari tautan yang diperbolehkan: https://wa.me/..., email, atau path internal (/...)
		const allowlistRegex = /(https:\/\/wa\.me\/[0-9]+|mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9._%+-]+@sdjnusantara\.com|\/(?:program|beasiswa|kemitraan|kontak|konsultasi|layanan|tentang-kami))/g;

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
			if (matchedStr.includes('@') && !matchedStr.startsWith('mailto:')) {
				href = `mailto:${matchedStr}`;
			}

			tokens.push({
				type: 'link',
				content: matchedStr,
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

	let tokens = $derived(parseSafeTokens(message.text));
</script>

<div class="message-row {message.role}">
	<!-- Bot Avatar Icon on Left -->
	{#if message.role === 'bot'}
		<div class="bot-bubble-avatar" aria-hidden="true">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
				<circle cx="12" cy="12" r="11" fill="#E6F7F8" />
				<rect x="6" y="8" width="12" height="9" rx="3" fill="#079EAD" />
				<circle cx="9" cy="11.5" r="1.2" fill="#FFFFFF" />
				<circle cx="15" cy="11.5" r="1.2" fill="#FFFFFF" />
				<path d="M10 14h4" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
				<path d="M12 5.5v2.5" stroke="#079EAD" stroke-width="1.4" stroke-linecap="round" />
			</svg>
		</div>
	{/if}

	<div class="bubble-and-time">
		<!-- Message Bubble -->
		<div class="bubble {message.role}">
			<div class="bubble-text">
				{#each tokens as token}
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

		<!-- Timestamp -->
		<span class="message-timestamp">
			{message.time}
		</span>
	</div>
</div>

<style>
	.message-row {
		display: flex;
		align-items: flex-end;
		gap: 8px;
		margin-bottom: 12px;
		width: 100%;
	}

	.message-row.user {
		justify-content: flex-end;
	}

	.message-row.bot {
		justify-content: flex-start;
	}

	.bot-bubble-avatar {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-bottom: 16px; /* align with bubble top */
	}

	.bubble-and-time {
		display: flex;
		flex-direction: column;
		max-width: 82%;
	}

	.message-row.user .bubble-and-time {
		align-items: flex-end;
	}

	.message-row.bot .bubble-and-time {
		align-items: flex-start;
	}

	.bubble {
		padding: 10px 14px;
		border-radius: 16px;
		font-size: 14.5px;
		line-height: 1.5;
		word-break: break-word;
		white-space: pre-line;
	}

	.bubble.bot {
		background: #F1F5F9;
		color: #082442;
		border-bottom-left-radius: 4px;
		box-shadow: 0 1px 3px rgba(11, 39, 71, 0.04);
	}

	.bubble.user {
		background: #079EAD;
		color: #FFFFFF;
		border-bottom-right-radius: 4px;
		box-shadow: 0 1px 4px rgba(7, 158, 173, 0.25);
	}

	.bubble-text {
		display: inline;
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

	.message-timestamp {
		font-size: 11px;
		color: #8C9BAE;
		margin-top: 3px;
		padding: 0 4px;
	}
</style>
