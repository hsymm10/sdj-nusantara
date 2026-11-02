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

	function handleTooltipClick() {
		// Klik card tooltip juga membuka chat
		chatStore.open();
	}
</script>

{#if visible && !chatStore.isOpen}
	<div
		class="chat-tooltip-wrapper"
		role="region"
		aria-label="Pemberitahuan Asisten"
	>
		<!-- Card Tooltip -->
		<div class="tooltip-card" onclick={handleTooltipClick} onkeydown={(e) => e.key === 'Enter' && handleTooltipClick()} role="button" tabindex="0">
			<!-- Bot Icon -->
			<div class="bot-badge" aria-hidden="true">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
					<circle cx="12" cy="12" r="10" fill="#E6F7F8" />
					<rect x="7" y="9" width="10" height="8" rx="3" fill="#079EAD" />
					<circle cx="9.5" cy="12.5" r="1.25" fill="#FFFFFF" />
					<circle cx="14.5" cy="12.5" r="1.25" fill="#FFFFFF" />
					<path d="M10 15h4" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
					<path d="M12 6.5v2.5" stroke="#079EAD" stroke-width="1.5" stroke-linecap="round" />
					<circle cx="12" cy="5.5" r="1" fill="#079EAD" />
				</svg>
			</div>

			<!-- Text Content -->
			<div class="tooltip-content">
				<span class="tooltip-title">{chatConfig.tooltip.title}</span>
				<span class="tooltip-desc">{chatConfig.tooltip.description}</span>
			</div>

			<!-- Close Button (Hit area ≥ 32px) -->
			<button
				type="button"
				class="tooltip-close-btn"
				onclick={handleDismiss}
				aria-label="Tutup pesan"
			>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<!-- Triangle Pointer / Tail (menunjuk ke launcher kanan-bawah) -->
			<div class="tooltip-tail" aria-hidden="true"></div>
		</div>
	</div>
{/if}

<style>
	.chat-tooltip-wrapper {
		position: fixed;
		bottom: 96px;
		right: 24px;
		z-index: 989;
		animation: tooltipFadeIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		pointer-events: auto;
	}

	.tooltip-card {
		position: relative;
		display: flex;
		align-items: flex-start;
		gap: 10px;
		background: #FFFFFF;
		padding: 12px 14px;
		border-radius: 16px;
		max-width: 270px;
		box-shadow: 0 8px 24px rgba(11, 39, 71, 0.12), 0 2px 6px rgba(11, 39, 71, 0.04);
		border: 1px solid rgba(220, 230, 238, 0.9);
		cursor: pointer;
		user-select: none;
		transition: transform 0.18s ease, box-shadow 0.18s ease;
	}

	.tooltip-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 28px rgba(11, 39, 71, 0.16);
	}

	.bot-badge {
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tooltip-content {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding-right: 18px; /* space for close button */
	}

	.tooltip-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
	}

	.tooltip-desc {
		font-size: 12px;
		font-weight: 400;
		color: #52647A;
		line-height: 1.4;
	}

	.tooltip-close-btn {
		position: absolute;
		top: 6px;
		right: 6px;
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		color: #8C9BAE;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		transition: color 0.15s ease, background 0.15s ease;
	}

	.tooltip-close-btn:hover {
		color: #082442;
		background: #F1F5F9;
	}

	.tooltip-tail {
		position: absolute;
		bottom: -7px;
		right: 28px;
		width: 14px;
		height: 14px;
		background: #FFFFFF;
		transform: rotate(45deg);
		border-right: 1px solid rgba(220, 230, 238, 0.9);
		border-bottom: 1px solid rgba(220, 230, 238, 0.9);
	}

	@keyframes tooltipFadeIn {
		from {
			opacity: 0;
			transform: translateY(8px) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 640px) {
		.chat-tooltip-wrapper {
			right: 16px;
			bottom: 84px;
		}
		.tooltip-card {
			max-width: 250px;
			padding: 10px 12px;
		}
		.tooltip-tail {
			right: 22px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.chat-tooltip-wrapper {
			animation: none;
		}
		.tooltip-card {
			transition: none;
		}
	}
</style>
