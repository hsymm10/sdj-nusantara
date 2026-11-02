<script lang="ts">
	import { chatConfig } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';
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
				// Ketika keyboard virtual muncul
				const height = Math.min(vv.height - 20, 560);
				viewportHeightStyle = `height: ${height}px; bottom: ${window.innerHeight - vv.height - vv.offsetTop + 10}px;`;
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
		aria-label={chatConfig.title}
	>
		<!-- 1. Header -->
		<ChatHeader />

		<!-- 2. Message List Area -->
		<MessageList bind:this={messageListRef} />

		<!-- 3. Demo Mode Banner (Di atas Input) -->
		<div class="demo-mode-banner" role="note">
			<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<line x1="12" y1="8" x2="12" y2="12"></line>
				<line x1="12" y1="16" x2="12.01" y2="16"></line>
			</svg>
			<span>{chatConfig.demoNotice}</span>
		</div>

		<!-- 4. Chat Input -->
		<ChatInput bind:this={chatInputRef} />
	</div>
{/if}

<style>
	.chat-window-card {
		position: fixed;
		bottom: 96px;
		right: 24px;
		width: 392px;
		height: min(560px, calc(100dvh - 130px));
		background: #FFFFFF;
		border-radius: 20px;
		box-shadow: 0 16px 48px rgba(11, 39, 71, 0.2), 0 4px 12px rgba(11, 39, 71, 0.08);
		border: 1px solid rgba(220, 230, 238, 0.85);
		display: flex;
		flex-direction: column;
		z-index: 995;
		overflow: hidden;
		animation: chatWindowOpen 0.22s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
		transform-origin: bottom right;
	}

	.demo-mode-banner {
		background: #FEF8EC;
		color: #92400E;
		border-bottom: 1px solid #FDE68A;
		font-size: 11px;
		font-weight: 500;
		padding: 6px 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		flex-shrink: 0;
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

	/* Tablet: 641px - 1023px */
	@media (max-width: 1023px) and (min-width: 641px) {
		.chat-window-card {
			width: 380px;
			right: 20px;
			bottom: 96px;
		}
	}

	/* Mobile: ≤640px */
	@media (max-width: 640px) {
		.chat-window-card {
			right: 12px;
			left: 12px;
			bottom: calc(12px + env(safe-area-inset-bottom, 0px));
			width: calc(100vw - 24px);
			max-width: none;
			height: min(78dvh, calc(100dvh - 24px));
			border-radius: 18px;
			transform-origin: bottom center;
			box-shadow: 0 8px 32px rgba(11, 39, 71, 0.3);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.chat-window-card {
			animation: chatFade 0.15s ease forwards;
			transform: none;
		}

		@keyframes chatFade {
			from { opacity: 0; }
			to { opacity: 1; }
		}
	}
</style>
