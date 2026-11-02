<script lang="ts">
</script>

<div class="typing-row" role="status" aria-label="Asisten sedang mengetik">
	<div class="bot-typing-avatar" aria-hidden="true">
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
			<circle cx="12" cy="12" r="11" fill="#E6F7F8" />
			<rect x="6" y="8" width="12" height="9" rx="3" fill="#079EAD" />
			<circle cx="9" cy="11.5" r="1.2" fill="#FFFFFF" />
			<circle cx="15" cy="11.5" r="1.2" fill="#FFFFFF" />
			<path d="M10 14h4" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
			<path d="M12 5.5v2.5" stroke="#079EAD" stroke-width="1.4" stroke-linecap="round" />
		</svg>
	</div>

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
		gap: 8px;
		margin-bottom: 12px;
	}

	.bot-typing-avatar {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.typing-bubble {
		display: flex;
		align-items: center;
		gap: 4px;
		background: #F1F5F9;
		padding: 10px 14px;
		border-radius: 16px;
		border-bottom-left-radius: 4px;
		box-shadow: 0 1px 3px rgba(11, 39, 71, 0.04);
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
			transform: scale(1.1);
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
