<script lang="ts">
	import { chatStore } from '#lib/stores/chat.svelte';

	let buttonEl: HTMLButtonElement | undefined = $state();

	export function focus() {
		buttonEl?.focus();
	}

	function handleClick() {
		chatStore.toggle();
	}

	let displayBadge = $derived.by(() => {
		if (chatStore.unreadCount <= 0) return '';
		if (chatStore.unreadCount > 99) return '99+';
		return String(chatStore.unreadCount);
	});

	let ariaLabel = $derived.by(() => {
		if (chatStore.isOpen) {
			return 'Tutup asisten SDJNusantara';
		}
		if (chatStore.unreadCount > 0) {
			return `Buka asisten, ${chatStore.unreadCount} pesan belum dibaca`;
		}
		return 'Buka asisten SDJNusantara';
	});
</script>

<div class="chat-launcher-container" class:open-mobile-hidden={chatStore.isOpen}>
	<!-- Live Region Pengumuman Pesan Baru untuk Aksesibilitas Pembaca Layar -->
	<div class="sr-only" role="status" aria-live="polite">
		{#if chatStore.unreadCount > 0 && !chatStore.isOpen}
			Ada {chatStore.unreadCount} pesan baru dari Asisten SDJNusantara.
		{/if}
	</div>

	<button
		bind:this={buttonEl}
		type="button"
		class="chat-launcher-btn"
		class:active={chatStore.isOpen}
		onclick={handleClick}
		aria-label={ariaLabel}
		aria-expanded={chatStore.isOpen}
		aria-controls="sdj-chat-window"
	>
		<!-- Unread Counter Badge -->
		{#if chatStore.unreadCount > 0 && !chatStore.isOpen}
			<span class="unread-badge" aria-hidden="true">
				{displayBadge}
			</span>
		{/if}

		<!-- Icon: Switch between Robot / Chat and Close (X) -->
		{#if chatStore.isOpen}
			<!-- Desktop Close Icon (X) -->
			<svg class="launcher-icon close-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		{:else}
			<!-- Friendly Robot Icon -->
			<svg class="launcher-icon robot-icon" width="30" height="30" viewBox="0 0 24 24" fill="none">
				<!-- Head -->
				<rect x="4" y="6" width="16" height="12" rx="4" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.12" />
				<!-- Eyes -->
				<circle cx="9" cy="11.5" r="1.5" fill="currentColor" />
				<circle cx="15" cy="11.5" r="1.5" fill="currentColor" />
				<!-- Smile -->
				<path d="M10 14.5c.7.6 1.7.9 2 .9s1.3-.3 2-.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
				<!-- Antenna -->
				<path d="M12 2.5v3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				<circle cx="12" cy="2.5" r="1.25" fill="currentColor" />
				<!-- Ears -->
				<rect x="2" y="10" width="2" height="4" rx="1" fill="currentColor" />
				<rect x="20" y="10" width="2" height="4" rx="1" fill="currentColor" />
			</svg>
		{/if}
	</button>
</div>

<style>
	.chat-launcher-container {
		position: fixed;
		bottom: 24px;
		right: 24px;
		z-index: 990;
		pointer-events: auto;
	}

	.chat-launcher-btn {
		position: relative;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: #079EAD;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
		box-shadow: 0 4px 18px rgba(7, 158, 173, 0.42), 0 2px 6px rgba(11, 39, 71, 0.08);
		transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, box-shadow 0.2s ease;
		outline: none;
	}

	.chat-launcher-btn:hover {
		transform: translateY(-2.5px);
		background: #008C9A;
		box-shadow: 0 6px 22px rgba(7, 158, 173, 0.52), 0 3px 8px rgba(11, 39, 71, 0.12);
	}

	.chat-launcher-btn:focus-visible {
		outline: 3px solid #16B6C1;
		outline-offset: 3px;
	}

	.chat-launcher-btn.active {
		background: #0B2948;
		box-shadow: 0 4px 16px rgba(11, 41, 72, 0.35);
	}

	.chat-launcher-btn.active:hover {
		background: #071D36;
	}

	.launcher-icon {
		transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
	}

	/* Unread Badge */
	.unread-badge {
		position: absolute;
		top: -2px;
		right: -2px;
		min-width: 22px;
		height: 22px;
		padding: 0 5px;
		border-radius: 11px;
		background: #E5484D;
		color: #FFFFFF;
		font-size: 11px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #FFFFFF;
		box-shadow: 0 2px 6px rgba(229, 72, 77, 0.5);
		animation: badgePop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		pointer-events: none;
		line-height: 1;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	@keyframes badgePop {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@media (max-width: 640px) {
		.chat-launcher-container {
			bottom: calc(16px + env(safe-area-inset-bottom, 0px));
			right: 16px;
		}

		.chat-launcher-btn {
			width: 56px;
			height: 56px;
		}

		/* Di mobile, sembunyikan launcher saat jendela chat terbuka */
		.chat-launcher-container.open-mobile-hidden {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.chat-launcher-btn {
			transition: none;
		}
		.unread-badge {
			animation: none;
		}
	}
</style>
