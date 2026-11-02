<script lang="ts">
	import { chatStore } from '#lib/stores/chat.svelte';

	let buttonEl: HTMLButtonElement | undefined = $state();
	let prevUnread = $state(0);
	let showSparks = $state(false);

	export function focus() {
		buttonEl?.focus();
	}

	function handleClick() {
		chatStore.toggle();
	}

	// Deteksi penambahan unread count untuk memicu percikan (sparks) sekali saja
	$effect(() => {
		const current = chatStore.unreadCount;
		if (current > prevUnread && !chatStore.isOpen) {
			showSparks = true;
			const timer = setTimeout(() => {
				showSparks = false;
			}, 600);
			prevUnread = current;
			return () => clearTimeout(timer);
		}
		prevUnread = current;
	});

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
		<!-- Unread Counter Badge dengan Percikan -->
		{#if chatStore.unreadCount > 0 && !chatStore.isOpen}
			<div class="badge-wrapper" aria-hidden="true">
				{#if showSparks}
					<div class="sparks-container">
						<!-- 3 Garis Percikan Teal/Turquoise memancar (atas, diagonal, kanan) -->
						<span class="spark spark-up"></span>
						<span class="spark spark-diag"></span>
						<span class="spark spark-right"></span>
					</div>
				{/if}
				<span class="unread-badge">
					{displayBadge}
				</span>
			</div>
		{/if}

		<!-- Icon: Switch between Robot and Close (X) dengan transisi putar halus -->
		<div class="launcher-icon-wrap" class:is-open={chatStore.isOpen}>
			{#if chatStore.isOpen}
				<!-- Close Icon (X) -->
				<svg class="launcher-icon close-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			{:else}
				<!-- Friendly Robot Icon Sesuai Mockup (±32px, outline 2px, dua mata, senyum, antena) -->
				<svg class="launcher-icon robot-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
					<!-- Head: Persegi membulat -->
					<rect x="3.5" y="6" width="17" height="13" rx="4.5" stroke="#FFFFFF" stroke-width="2" fill="none" />
					<!-- Two Eyes -->
					<circle cx="8.5" cy="11.5" r="1.5" fill="#FFFFFF" />
					<circle cx="15.5" cy="11.5" r="1.5" fill="#FFFFFF" />
					<!-- Friendly Smile -->
					<path d="M9.5 15c.8.8 1.7 1.1 2.5 1.1s1.7-.3 2.5-1.1" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
					<!-- Small Antenna -->
					<path d="M12 2.5v3.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
					<circle cx="12" cy="2.5" r="1.25" fill="#FFFFFF" />
					<!-- Small Ears / Side Bolts -->
					<rect x="1.5" y="10.5" width="2" height="4" rx="1" fill="#FFFFFF" />
					<rect x="20.5" y="10.5" width="2" height="4" rx="1" fill="#FFFFFF" />
				</svg>
			{/if}
		</div>
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
		border: 2px solid #FFFFFF;
		cursor: pointer;
		box-shadow: 0 10px 24px rgba(7, 158, 173, 0.35), 0 2px 6px rgba(8, 36, 66, 0.08);
		transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, box-shadow 0.2s ease;
		outline: none;
		box-sizing: border-box;
		padding: 0;
	}

	.chat-launcher-btn:hover {
		transform: translateY(-2px);
		background: #068B98;
		box-shadow: 0 12px 28px rgba(7, 158, 173, 0.45), 0 4px 8px rgba(8, 36, 66, 0.12);
	}

	.chat-launcher-btn:focus-visible {
		outline: 3px solid #16B6C1;
		outline-offset: 3px;
	}

	.chat-launcher-btn.active {
		background: #082442;
		box-shadow: 0 10px 24px rgba(8, 36, 66, 0.35);
	}

	.chat-launcher-btn.active:hover {
		background: #0B2948;
	}

	/* Icon Wrapper with smooth rotation */
	.launcher-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.launcher-icon-wrap.is-open {
		transform: rotate(90deg);
	}

	/* Unread Badge Container */
	.badge-wrapper {
		position: absolute;
		top: -4px;
		right: -4px;
		z-index: 10;
		pointer-events: none;
	}

	.unread-badge {
		min-width: 24px;
		height: 24px;
		padding: 0 6px;
		border-radius: 9999px;
		background: #E5484D;
		color: #FFFFFF;
		font-size: 13px;
		font-weight: 700;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #FFFFFF;
		box-shadow: 0 2px 8px rgba(229, 72, 77, 0.45);
		box-sizing: border-box;
		animation: badgeOvershoot 0.22s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}

	@keyframes badgeOvershoot {
		0% {
			transform: scale(0.6);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	/* Sparks Container (3 garis pendek teal/turquoise memancar) */
	.sparks-container {
		position: absolute;
		top: -8px;
		right: -8px;
		width: 36px;
		height: 36px;
		pointer-events: none;
		animation: sparkBurst 0.5s ease-out forwards;
	}

	.spark {
		position: absolute;
		background: #16B6C1;
		border-radius: 2px;
	}

	/* Spark 1: Ke atas */
	.spark-up {
		width: 2px;
		height: 9px;
		top: 0;
		right: 18px;
	}

	/* Spark 2: Diagonal kanan-atas */
	.spark-diag {
		width: 2px;
		height: 9px;
		top: 4px;
		right: 8px;
		transform: rotate(45deg);
	}

	/* Spark 3: Ke kanan */
	.spark-right {
		width: 9px;
		height: 2px;
		top: 18px;
		right: 0;
	}

	@keyframes sparkBurst {
		0% {
			transform: scale(0.5);
			opacity: 0;
		}
		40% {
			transform: scale(1.05);
			opacity: 1;
		}
		100% {
			transform: scale(1.2);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.unread-badge {
			animation: none;
		}
		.sparks-container {
			display: none;
		}
		.launcher-icon-wrap {
			transition: none;
		}
	}

	/* Mobile (<= 640px) */
	@media (max-width: 640px) {
		.chat-launcher-container {
			bottom: calc(16px + env(safe-area-inset-bottom, 0px));
			right: 16px;
		}

		.chat-launcher-btn {
			width: 56px;
			height: 56px;
		}

		.open-mobile-hidden {
			display: none !important;
		}
	}
</style>
