<script lang="ts">
	import { chatConfig } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';

	let visible = $state(false);

	$effect(() => {
		// Jika tooltip belum pernah ditutup dan chat tertutup, tampilkan setelah delay
		if (!chatStore.tooltipDismissed && !chatStore.isOpen) {
			const timer = setTimeout(() => {
				if (!chatStore.tooltipDismissed && !chatStore.isOpen) {
					visible = true;
				}
			}, chatConfig.tooltip.delayMs);

			return () => clearTimeout(timer);
		} else {
			visible = false;
		}
	});

	function handleDismiss(e: MouseEvent) {
		e.stopPropagation();
		visible = false;
		chatStore.dismissTooltip();
	}
</script>

{#if visible && !chatStore.isOpen}
	<div
		class="chat-tooltip-wrapper"
		role="region"
		aria-label="Pemberitahuan Asisten"
	>
		<!-- Card Tooltip Putih Radius 18px (Tidak membuka jendela saat card diklik) -->
		<div class="tooltip-card">
			<!-- Ikon Bintang Berkilau (Sparkle) Emas #F5B331 Sesuai Mockup -->
			<div class="sparkle-icon-wrap" aria-hidden="true">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
					<!-- Main 4-point sparkle star -->
					<path
						d="M10 2C10.5 6 12 7.5 16 8C12 8.5 10.5 10 10 14C9.5 10 8 8.5 4 8C8 7.5 9.5 6 10 2Z"
						fill="#F5B331"
					/>
					<!-- Secondary smaller sparkle star -->
					<path
						d="M17 13C17.3 15 18 15.7 20 16C18 16.3 17.3 17 17 19C16.7 17 16 16.3 14 16C16 15.7 16.7 15 17 13Z"
						fill="#F5B331"
					/>
				</svg>
			</div>

			<!-- Text Content (Judul 15px bold navy & Deskripsi 13.5px abu-biru 2 baris) -->
			<div class="tooltip-content">
				<h4 class="tooltip-title">
					Butuh informasi seputar<br />pendidikan?
				</h4>
				<p class="tooltip-desc">
					Tanyakan langsung kepada<br />Asisten SDJNusantara.
				</p>
			</div>

			<!-- Close Button (Area sentuh ≥ 32px) -->
			<button
				type="button"
				class="tooltip-close-btn"
				onclick={handleDismiss}
				aria-label="Tutup pesan"
			>
				<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#082442" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<!-- Ekor Segitiga Membulat Menunjuk ke Launcher di Kanan-Bawah -->
			<div class="tooltip-tail" aria-hidden="true"></div>
		</div>
	</div>
{/if}

<style>
	.chat-tooltip-wrapper {
		position: fixed;
		bottom: 98px;
		right: 24px;
		z-index: 989;
		animation: tooltipFadeIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		pointer-events: auto;
	}

	.tooltip-card {
		position: relative;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		background: #FFFFFF;
		padding: 14px 16px;
		border-radius: 18px;
		max-width: 272px;
		box-shadow: 0 14px 35px rgba(8, 36, 66, 0.14), 0 2px 8px rgba(8, 36, 66, 0.05);
		border: 1px solid rgba(220, 230, 238, 0.85);
		box-sizing: border-box;
	}

	.sparkle-icon-wrap {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 1px;
	}

	.tooltip-content {
		display: flex;
		flex-direction: column;
		gap: 3px;
		flex: 1;
		padding-right: 4px;
	}

	.tooltip-title {
		font-size: 15px;
		font-weight: 700;
		color: #082442;
		line-height: 1.25;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.tooltip-desc {
		font-size: 13.5px;
		line-height: 1.35;
		color: #5B6B7F;
		margin: 0;
	}

	.tooltip-close-btn {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		color: #082442;
		opacity: 0.65;
		margin-top: -6px;
		margin-right: -6px;
		transition: opacity 0.15s ease, background-color 0.15s ease;
		flex-shrink: 0;
		padding: 0;
	}

	.tooltip-close-btn:hover {
		opacity: 1;
		background: rgba(8, 36, 66, 0.06);
	}

	.tooltip-close-btn:focus-visible {
		outline: 2px solid #079EAD;
		outline-offset: 1px;
	}

	/* Ekor Segitiga Membulat (±12px) di Kanan Bawah */
	.tooltip-tail {
		position: absolute;
		bottom: -9px;
		right: 28px;
		width: 16px;
		height: 10px;
		overflow: hidden;
	}

	.tooltip-tail::after {
		content: '';
		position: absolute;
		top: -8px;
		left: 2px;
		width: 12px;
		height: 12px;
		background: #FFFFFF;
		border-right: 1px solid rgba(220, 230, 238, 0.85);
		border-bottom: 1px solid rgba(220, 230, 238, 0.85);
		transform: rotate(45deg);
		box-shadow: 2px 2px 4px rgba(8, 36, 66, 0.04);
	}

	@keyframes tooltipFadeIn {
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
		.chat-tooltip-wrapper {
			animation: none;
		}
	}

	/* Mobile (<= 640px) */
	@media (max-width: 640px) {
		.chat-tooltip-wrapper {
			bottom: calc(84px + env(safe-area-inset-bottom, 0px));
			right: 16px;
		}

		.tooltip-card {
			max-width: 250px;
			padding: 12px 14px;
		}

		.tooltip-title {
			font-size: 14px;
		}

		.tooltip-desc {
			font-size: 12.5px;
		}

		.tooltip-tail {
			right: 22px;
		}
	}
</style>
