<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<div class="typing-row" role="status" aria-label={i18n.pick('Asisten sedang mengetik', 'Assistant is typing')}>
	<!-- Bot Avatar: Lingkaran Teal 36px Sesuai MessageBubble -->
	<div class="bot-typing-avatar" aria-hidden="true">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
			<!-- Head: Persegi membulat putih -->
			<rect x="3.5" y="6" width="17" height="13" rx="4" stroke="#FFFFFF" stroke-width="1.8" fill="none" />
			<!-- Eyes -->
			<circle cx="8.5" cy="11.5" r="1.3" fill="#FFFFFF" />
			<circle cx="15.5" cy="11.5" r="1.3" fill="#FFFFFF" />
			<!-- Smile -->
			<path d="M9.5 15c.8.7 1.7 1 2.5 1s1.7-.3 2.5-1" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" />
			<!-- Antenna -->
			<path d="M12 2.5v3.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
			<circle cx="12" cy="2.5" r="1.1" fill="#FFFFFF" />
			<!-- Ears -->
			<rect x="1.5" y="10.5" width="2" height="4" rx="1" fill="#FFFFFF" />
			<rect x="20.5" y="10.5" width="2" height="4" rx="1" fill="#FFFFFF" />
		</svg>
	</div>

	<!-- Typing Bubble #EEF2F6 dengan Tiga Titik Teal -->
	<div class="typing-bubble">
		<span class="dot"></span>
		<span class="dot"></span>
		<span class="dot"></span>
	</div>
</div>

<style>
	.typing-row {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.bot-typing-avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 3px 8px rgba(7, 158, 173, 0.28);
	}

	.typing-bubble {
		display: flex;
		align-items: center;
		gap: 5px;
		background: #EEF2F6;
		padding: 12px 16px;
		border-radius: 18px;
		border-top-left-radius: 6px;
		box-shadow: 0 1px 4px rgba(8, 36, 66, 0.04);
	}

	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #079EAD;
		animation: typingBounce 1.4s infinite ease-in-out both;
	}

	.dot:nth-child(1) {
		animation-delay: -0.32s;
	}

	.dot:nth-child(2) {
		animation-delay: -0.16s;
	}

	.dot:nth-child(3) {
		animation-delay: 0;
	}

	@keyframes typingBounce {
		0%, 80%, 100% {
			transform: scale(0.6);
			opacity: 0.4;
		}
		40% {
			transform: scale(1.15);
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.dot {
			animation: none;
			opacity: 0.8;
		}
	}
</style>
