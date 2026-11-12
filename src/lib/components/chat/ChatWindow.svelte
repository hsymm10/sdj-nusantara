<script lang="ts">
	import { chatStore } from '#lib/stores/chat.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
	import ChatHeader from './ChatHeader.svelte';
	import MessageList from './MessageList.svelte';
	import ChatInput from './ChatInput.svelte';

	interface Props {
		onCloseFocus?: () => void;
	}

	let { onCloseFocus }: Props = $props();

	let windowEl: HTMLDivElement | undefined = $state();
	let messageListRef: any = $state();
	let chatInputRef: any = $state();

	// Focus management & scroll lock
	$effect(() => {
		if (chatStore.isOpen) {
			// Auto focus input
			setTimeout(() => {
				chatInputRef?.focus();
				messageListRef?.initialScroll();
			}, 60);

			// Kunci scroll body saat mobile terbuka
			const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;
			if (isMobile) {
				const prevOverflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
				return () => {
					document.body.style.overflow = prevOverflow;
				};
			}
		}
	});

	// VisualViewport keyboard handling untuk mobile (iOS / Android)
	let viewportHeightStyle = $state('');
	$effect(() => {
		if (typeof window === 'undefined' || !window.visualViewport) return;

		const handleResize = () => {
			if (!chatStore.isOpen || window.innerWidth > 640) {
				viewportHeightStyle = '';
				return;
			}
			const vv = window.visualViewport;
			if (vv) {
				const height = Math.min(vv.height - 24, window.innerHeight - 24);
				viewportHeightStyle = `height: ${height}px; bottom: ${window.innerHeight - vv.height - vv.offsetTop + 12}px;`;
			}
		};

		window.visualViewport.addEventListener('resize', handleResize);
		window.visualViewport.addEventListener('scroll', handleResize);

		return () => {
			window.visualViewport?.removeEventListener('resize', handleResize);
			window.visualViewport?.removeEventListener('scroll', handleResize);
		};
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && chatStore.isOpen) {
			e.preventDefault();
			chatStore.close();
			onCloseFocus?.();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if chatStore.isOpen}
	<div
		bind:this={windowEl}
		id="sdj-chat-window"
		class="chat-window-card"
		style={viewportHeightStyle}
		role="dialog"
		aria-modal="false"
		aria-label={i18n.dict.chat.title}
	>
		<!-- 1. Header Navy Bergelombang (112px) -->
		<ChatHeader />

		<!-- 2. Message List Area -->
		<MessageList bind:this={messageListRef} />

		<!-- 3. Input & Catatan Bawah (Banner Emas Lama Telah Dihapus) -->
		<ChatInput bind:this={chatInputRef} />
	</div>
{/if}

<style>
	.chat-window-card {
		position: fixed;
		bottom: 96px;
		right: 24px;
		width: 392px;
		height: min(580px, calc(100dvh - 130px));
		background: #FFFFFF;
		border-radius: 22px;
		box-shadow: 0 20px 50px rgba(8, 36, 66, 0.22), 0 4px 12px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(220, 230, 238, 0.7);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		z-index: 995;
		transform-origin: bottom right;
		animation: chatWindowOpen 0.24s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
		box-sizing: border-box;
	}

	@keyframes chatWindowOpen {
		0% {
			opacity: 0;
			transform: translateY(14px) scale(0.97);
		}
		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.chat-window-card {
			animation: chatWindowFadeOnly 0.2s ease forwards;
		}

		@keyframes chatWindowFadeOnly {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}

	/* Mobile Responsive (<= 640px) */
	@media (max-width: 640px) {
		.chat-window-card {
			left: 12px;
			right: 12px;
			bottom: calc(12px + env(safe-area-inset-bottom, 0px));
			width: calc(100vw - 24px);
			max-width: none;
			height: min(80dvh, calc(100dvh - 24px));
			border-radius: 20px;
			transform-origin: center bottom;
		}
	}
</style>
