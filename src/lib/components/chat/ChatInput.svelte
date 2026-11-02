<script lang="ts">
	import { chatConfig } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';

	let inputText = $state('');
	let inputEl: HTMLInputElement | undefined = $state();

	export function focus() {
		inputEl?.focus();
	}

	async function handleSend() {
		const text = inputText.trim();
		if (!text || chatStore.isTyping) return;

		inputText = '';
		await chatStore.sendUserMessage(text);

		// Kembalikan fokus ke input setelah balasan diterima
		setTimeout(() => {
			inputEl?.focus();
		}, 50);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	}
</script>

<div class="chat-input-area">
	<!-- Input Form Row -->
	<form class="input-form-row" onsubmit={(e) => { e.preventDefault(); handleSend(); }}>
		<div class="input-pill-wrapper">
			<input
				bind:this={inputEl}
				type="text"
				class="chat-text-input"
				placeholder={chatConfig.inputPlaceholder}
				bind:value={inputText}
				onkeydown={handleKeydown}
				disabled={chatStore.isTyping}
				maxlength={chatConfig.maxMessageLength}
				aria-label="Ketik pertanyaan untuk asisten"
			/>
		</div>

		<!-- Send Button: Bulat Teal ±44px -->
		<button
			type="submit"
			class="send-btn"
			disabled={!inputText.trim() || chatStore.isTyping}
			aria-label="Kirim pesan"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="22" y1="2" x2="11" y2="13"></line>
				<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
			</svg>
		</button>
	</form>

	<!-- Sensitive Information Warning (±11px gray-blue) -->
	<div class="sensitive-warning">
		{chatConfig.sensitiveWarning}
	</div>
</div>

<style>
	.chat-input-area {
		padding: 12px 14px 10px;
		background: #FFFFFF;
		border-top: 1px solid #DCE6EE;
		border-radius: 0 0 20px 20px;
	}

	.input-form-row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.input-pill-wrapper {
		flex: 1;
		background: #F4F8FB;
		border: 1px solid #DCE6EE;
		border-radius: 9999px;
		padding: 2px 16px;
		display: flex;
		align-items: center;
		transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
	}

	.input-pill-wrapper:focus-within {
		border-color: #079EAD;
		background: #FFFFFF;
		box-shadow: 0 0 0 2px rgba(7, 158, 173, 0.15);
	}

	.chat-text-input {
		width: 100%;
		border: none;
		outline: none;
		background: transparent;
		color: #082442;
		font-family: inherit;
		/* Font ≥ 16px untuk mencegah auto-zoom di iOS Safari */
		font-size: 16px;
		line-height: 1.4;
		padding: 8px 0;
	}

	.chat-text-input::placeholder {
		color: #8C9BAE;
		font-size: 14.5px;
	}

	.chat-text-input:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.send-btn {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: #079EAD;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
		flex-shrink: 0;
		box-shadow: 0 2px 8px rgba(7, 158, 173, 0.35);
		transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.send-btn:hover:not(:disabled) {
		background: #008C9A;
		transform: scale(1.05);
	}

	.send-btn:active:not(:disabled) {
		transform: scale(0.95);
	}

	.send-btn:focus-visible {
		outline: 2px solid #079EAD;
		outline-offset: 2px;
	}

	.send-btn:disabled {
		background: #DCE6EE;
		color: #94A3B8;
		cursor: not-allowed;
		box-shadow: none;
		transform: none;
	}

	.sensitive-warning {
		font-size: 11px;
		color: #64748B;
		text-align: center;
		margin-top: 6px;
		line-height: 1.35;
	}
</style>
