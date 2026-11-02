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

	function handleClear() {
		if (confirm('Hapus seluruh riwayat percakapan dan mulai dari awal?')) {
			chatStore.clearConversation();
		}
	}
</script>

<div class="chat-input-area">
	<!-- Input Form Row: Pill Input 46px + Tombol Kirim Teal 46px (Tanpa klip kertas) -->
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

		<!-- Tombol Kirim Lingkaran Teal ±46px Ikon Pesawat Kertas Putih -->
		<button
			type="submit"
			class="send-btn"
			disabled={!inputText.trim() || chatStore.isTyping}
			aria-label="Kirim pesan"
			title="Kirim pesan"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="22" y1="2" x2="11" y2="13"></line>
				<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
			</svg>
		</button>
	</form>

	<!-- Catatan Bawah Rapi: Mode demo + Tautan Hapus Percakapan -->
	<div class="input-bottom-row">
		<p class="demo-and-privacy-note">
			Mode demo: jawaban otomatis sementara. Jangan kirim data sensitif (NIK, kata sandi, nomor kartu).
		</p>
		<button type="button" class="clear-chat-link" onclick={handleClear}>
			Hapus percakapan
		</button>
	</div>
</div>

<style>
	.chat-input-area {
		padding: 10px 16px 10px;
		background: #FFFFFF;
		border-top: 1px solid #E6EDF2;
		box-shadow: 0 -2px 10px rgba(8, 36, 66, 0.02);
		border-radius: 0 0 22px 22px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		flex-shrink: 0;
	}

	.input-form-row {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
	}

	/* Field Pill Tinggi ±46px Latar #F6F9FB Border 1px #DCE6EC */
	.input-pill-wrapper {
		flex: 1;
		height: 46px;
		background: #F6F9FB;
		border: 1px solid #DCE6EC;
		border-radius: 9999px;
		padding: 0 18px;
		display: flex;
		align-items: center;
		transition: border-color 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease;
		box-sizing: border-box;
	}

	.input-pill-wrapper:focus-within {
		border-color: #079EAD;
		background: #FFFFFF;
		box-shadow: 0 0 0 2px rgba(7, 158, 173, 0.15);
	}

	.chat-text-input {
		width: 100%;
		border: none;
		background: transparent;
		outline: none;
		font-size: 16px; /* Mencegah auto-zoom mobile Safari (>= 16px) */
		color: #082442;
		font-family: inherit;
		padding: 0;
	}

	.chat-text-input::placeholder {
		color: #8C9BAE;
		font-size: 14px;
	}

	/* Tombol Kirim Bulat Teal ±46px */
	.send-btn {
		width: 46px;
		height: 46px;
		border-radius: 50%;
		background: #079EAD;
		color: #FFFFFF;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		flex-shrink: 0;
		box-shadow: 0 3px 10px rgba(7, 158, 173, 0.32);
		transition: background-color 0.16s ease, transform 0.16s ease, opacity 0.16s ease;
		outline: none;
		padding: 0;
	}

	.send-btn:hover:not(:disabled) {
		background: #058593;
		transform: scale(1.04);
	}

	.send-btn:focus-visible {
		outline: 2px solid #16B6C1;
		outline-offset: 2px;
	}

	.send-btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
		box-shadow: none;
	}

	/* Catatan Bawah & Tautan Hapus Percakapan */
	.input-bottom-row {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		padding: 0 4px;
	}

	.demo-and-privacy-note {
		font-size: 11px;
		line-height: 1.35;
		color: #7A8794;
		text-align: center;
		margin: 0;
	}

	.clear-chat-link {
		background: transparent;
		border: none;
		font-size: 11px;
		font-weight: 600;
		color: #079EAD;
		cursor: pointer;
		padding: 0;
		margin: 0;
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.clear-chat-link:hover {
		color: #056a74;
		text-decoration: underline;
	}

	.clear-chat-link:focus-visible {
		outline: 1px solid #079EAD;
		outline-offset: 2px;
	}

	@media (max-width: 640px) {
		.chat-input-area {
			padding: 8px 12px 8px;
		}

		.input-pill-wrapper {
			height: 44px;
			padding: 0 14px;
		}

		.send-btn {
			width: 44px;
			height: 44px;
		}

		.demo-and-privacy-note {
			font-size: 10px;
		}

		.clear-chat-link {
			font-size: 10.5px;
		}
	}
</style>
