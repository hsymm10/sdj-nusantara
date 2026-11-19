<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
	import logoNalara from '#lib/assets/logo_nalara.png';
</script>

<header class="chat-header">
	<!-- Top Row: Brand Info (Tanpa tombol - dan X, ditutup via tombol silang di bawah) -->
	<div class="header-main-row">
		<!-- Left: White Circle Avatar + Title & Subtitle -->
		<div class="header-brand">
			<div class="bot-avatar-circle" aria-hidden="true">
				<img src={logoNalara} alt="NALARA" class="nalara-avatar-img" />
			</div>

			<div class="brand-text">
				<h2 class="assistant-name">{i18n.dict.chat.title}</h2>
				<p class="assistant-subtitle">
					<span>{i18n.dict.chat.subtitleRole}</span>
					<span class="bullet">•</span>
					<span>{i18n.dict.chat.subtitleStatus}</span>
				</p>
			</div>
		</div>
	</div>

	<!-- Wave Decoration Berlapis Sesuai Mockup: Turquoise, Teal, & Pita Emas di Sisi Kanan -->
	<div class="header-wave-wrap" aria-hidden="true">
		<svg viewBox="0 0 392 36" fill="none" preserveAspectRatio="none" class="header-wave-svg" xmlns="http://www.w3.org/2000/svg">
			<!-- Lapisan 1: Turquoise #16B6C1 (opacity 0.55) -->
			<path d="M0 16 C 90 2, 190 26, 310 14 C 345 10, 375 14, 392 20 L 392 36 L 0 36 Z" fill="#16B6C1" opacity="0.55" />
			<!-- Lapisan 2: Teal #079EAD -->
			<path d="M0 24 C 80 12, 180 30, 290 18 C 330 14, 365 20, 392 26 L 392 36 L 0 36 Z" fill="#079EAD" />
			<!-- Lapisan 3: Pita Emas #F5B331 yang naik melengkung di sisi kanan -->
			<path d="M230 30 C 280 20, 340 14, 392 8 L 392 14 C 340 20, 280 26, 230 36 Z" fill="#F5B331" />
			<!-- Lapisan 4: Dasar Putih Area Percakapan -->
			<path d="M0 32 C 100 22, 220 34, 320 28 C 350 26, 375 28, 392 31 L 392 36 L 0 36 Z" fill="#FFFFFF" />
		</svg>
	</div>
</header>

<style>
	.chat-header {
		position: relative;
		width: 100%;
		height: 112px;
		background: #082442;
		color: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 16px 16px 0;
		overflow: hidden;
		flex-shrink: 0;
	}

	.header-main-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 2;
	}

	.header-brand {
		display: flex;
		align-items: center;
		gap: 12px;
		min-width: 0;
	}

	/* Avatar Kiri: Lingkaran Putih ±52px, Logo NALARA */
	.bot-avatar-circle {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.22);
		border: 2px solid rgba(255, 255, 255, 0.95);
		overflow: hidden;
	}

	.nalara-avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}

	.assistant-name {
		font-size: 18.5px;
		font-weight: 700;
		color: #FFFFFF;
		margin: 0;
		line-height: 1.2;
		letter-spacing: -0.015em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.assistant-subtitle {
		font-size: 13.5px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.88);
		margin: 0;
		line-height: 1.25;
		white-space: nowrap;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.bullet {
		opacity: 0.7;
		font-size: 11px;
	}



	/* Wave Decoration Berlapis di Tepi Bawah */
	.header-wave-wrap {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 36px;
		pointer-events: none;
		z-index: 1;
	}

	.header-wave-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Mobile (<= 640px) */
	@media (max-width: 640px) {
		.chat-header {
			height: 98px;
			padding: 12px 14px 0;
		}

		.bot-avatar-circle {
			width: 46px;
			height: 46px;
		}

		.assistant-name {
			font-size: 16.5px;
		}

		.assistant-subtitle {
			font-size: 12px;
		}

		.header-wave-wrap {
			height: 28px;
		}
	}
</style>
