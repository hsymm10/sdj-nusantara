<script lang="ts">
	import { chatStore } from '#lib/stores/chat.svelte';
	import MessageBubble from './MessageBubble.svelte';
	import QuickReplies from './QuickReplies.svelte';
	import TypingIndicator from './TypingIndicator.svelte';

	let scrollContainer: HTMLDivElement | undefined = $state();
	let userIsScrolledUp = $state(false);

	function scrollToBottom(smooth = true) {
		if (!scrollContainer) return;
		scrollContainer.scrollTo({
			top: scrollContainer.scrollHeight,
			behavior: smooth ? 'smooth' : 'auto'
		});
		userIsScrolledUp = false;
		chatStore.hasNewMessageBelow = false;
	}

	function handleScroll() {
		if (!scrollContainer) return;
		const threshold = 60;
		const distanceFromBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight;
		userIsScrolledUp = distanceFromBottom > threshold;

		if (!userIsScrolledUp) {
			chatStore.hasNewMessageBelow = false;
		}
	}

	// Auto-scroll saat pesan baru masuk
	$effect(() => {
		const len = chatStore.messages.length;
		const typing = chatStore.isTyping;

		if (scrollContainer && chatStore.messages.length > 1) {
			if (userIsScrolledUp) {
				// Pengguna sedang membaca di atas -> tampilkan tombol "Pesan baru"
				chatStore.hasNewMessageBelow = true;
			} else {
				// Scroll otomatis ke bawah
				setTimeout(() => {
					scrollToBottom(true);
				}, 40);
			}
		}
	});

	export function initialScroll() {
		setTimeout(() => {
			if (chatStore.messages.length <= 1) {
				if (scrollContainer) scrollContainer.scrollTop = 0;
			} else {
				scrollToBottom(false);
			}
		}, 50);
	}
</script>

<div
	bind:this={scrollContainer}
	class="message-list-container"
	onscroll={handleScroll}
	role="log"
	aria-live="polite"
	aria-label="Riwayat percakapan"
>
	<!-- Daftar Pesan -->
	{#each chatStore.messages as message (message.id)}
		<MessageBubble {message} />
	{/each}

	<!-- Quick Replies Chips (jika masih aktif) -->
	<QuickReplies />

	<!-- Typing Indicator -->
	{#if chatStore.isTyping}
		<TypingIndicator />
	{/if}

	<!-- Floating Button "Pesan baru ↓" -->
	{#if chatStore.hasNewMessageBelow && userIsScrolledUp}
		<button
			type="button"
			class="new-messages-pill"
			onclick={() => scrollToBottom(true)}
			aria-label="Gulir ke pesan terbaru"
		>
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<polyline points="19 12 12 19 5 12"></polyline>
			</svg>
			<span>Pesan baru</span>
		</button>
	{/if}
</div>

<style>
	.message-list-container {
		position: relative;
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 16px 14px;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		scroll-behavior: smooth;
	}

	/* Scrollbar Cantik & Minimalis */
	.message-list-container::-webkit-scrollbar {
		width: 5px;
	}
	.message-list-container::-webkit-scrollbar-track {
		background: transparent;
	}
	.message-list-container::-webkit-scrollbar-thumb {
		background: #DCE6EE;
		border-radius: 4px;
	}
	.message-list-container::-webkit-scrollbar-thumb:hover {
		background: #CBD5E1;
	}

	.new-messages-pill {
		position: sticky;
		bottom: 8px;
		align-self: center;
		background: #079EAD;
		color: #FFFFFF;
		font-size: 12px;
		font-weight: 600;
		padding: 6px 12px;
		border-radius: 9999px;
		display: flex;
		align-items: center;
		gap: 6px;
		border: none;
		box-shadow: 0 4px 12px rgba(7, 158, 173, 0.4);
		cursor: pointer;
		z-index: 5;
		animation: pillFade 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		transition: background-color 0.15s ease, transform 0.15s ease;
	}

	.new-messages-pill:hover {
		background: #008C9A;
		transform: translateY(-1px);
	}

	@keyframes pillFade {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
