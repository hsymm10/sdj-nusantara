<script lang="ts">
	// HeroConsult.svelte - Faithful implementation of design/konsultasi.png
</script>

<section class="hero-consult">
	<!-- Background image right -->
	<div class="hero-bg-wrap">
		<img
			src="/images/hero-full-clean.jpg"
			alt="Konsultasi Pendidikan SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left -->
	<div class="hero-wave-wrap">
		<svg class="hero-wave" viewBox="0 0 320 140" fill="none" preserveAspectRatio="none">
			<path d="M0 25 C70 35 150 85 210 140 H0 Z" fill="#0A5E75" fill-opacity="0.9" />
			<path d="M0 65 C65 75 140 110 185 140 H0 Z" fill="url(#teal-grad-consult)" />
			<path d="M0 110 C50 115 110 130 150 140 H0 Z" fill="#FFFFFF" />
			<defs>
				<linearGradient id="teal-grad-consult" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#16B6C1" />
					<stop offset="100%" stop-color="#079EAD" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<!-- Bottom right gold & teal swoosh accent -->
	<div class="hero-swoosh-br">
		<svg viewBox="0 0 240 100" fill="none" preserveAspectRatio="none">
			<path d="M40 100 C100 80 180 50 240 0 L240 100 Z" fill="url(#gold-grad-br)" opacity="0.85" />
			<path d="M100 100 C150 90 200 70 240 30 L240 100 Z" fill="#16B6C1" opacity="0.6" />
			<defs>
				<linearGradient id="gold-grad-br" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#F5B331" />
					<stop offset="100%" stop-color="#E5A320" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Konsultasi</span>
			</div>

			<!-- Headline: 2 lines with row 2 gold -->
			<h1 class="hero-title">
				<span>Konsultasi Pendidikan</span><br />
				<span class="gold-text">& Pengembangan Talenta</span>
			</h1>

			<!-- Description -->
			<p class="hero-desc">
				Dapatkan konsultasi profesional untuk merencanakan pendidikan, mengembangkan potensi, memilih program yang tepat, dan mempersiapkan masa depan yang lebih baik.
			</p>

			<!-- Buttons -->
			<div class="hero-btn-row">
				<a href="#form-konsultasi" class="btn-gold">
					<span>Ajukan Konsultasi Sekarang</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="#alur-konsultasi" class="btn-outline">
					<span>Lihat Alur Konsultasi</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-consult {
		position: relative;
		width: 100%;
		height: 255px;
		background: #082442;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.hero-bg-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
	}

	.hero-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: right 15%;
		display: block;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 38%,
			rgba(8, 36, 66, 0.9) 52%,
			rgba(8, 36, 66, 0.45) 70%,
			rgba(8, 36, 66, 0.1) 85%,
			rgba(8, 36, 66, 0) 100%
		);
	}

	.hero-wave-wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 280px;
		height: 125px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-wave {
		width: 100%;
		height: 100%;
		display: block;
	}

	.hero-swoosh-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 220px;
		height: 80px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-swoosh-br svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.hero-text-col {
		max-width: 580px;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: rgba(22, 182, 193, 0.12);
		border: 1px solid rgba(22, 182, 193, 0.35);
		border-radius: 999px;
		padding: 3px 10px;
		margin-bottom: 8px;
	}

	.pill-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #16B6C1;
	}

	.pill-label {
		font-size: 10px;
		font-weight: 600;
		color: #16B6C1;
		letter-spacing: 0.04em;
	}

	.hero-title {
		font-size: 24px;
		font-weight: 800;
		line-height: 1.2;
		color: #FFFFFF;
		margin: 0 0 8px;
		letter-spacing: -0.01em;
	}

	.gold-text {
		color: #F5B331;
	}

	.hero-desc {
		font-size: 11px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.85);
		margin: 0 0 16px;
		max-width: 520px;
	}

	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F5B331;
		color: #082442;
		font-size: 11px;
		font-weight: 700;
		padding: 7px 16px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.28);
		transition: all 0.2s;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		background: transparent;
		color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.45);
		font-size: 11px;
		font-weight: 600;
		padding: 7px 16px;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.btn-outline:hover {
		border-color: #16B6C1;
		color: #16B6C1;
	}

	@media (max-width: 768px) {
		.hero-consult {
			height: auto;
			min-height: 280px;
			padding: 2.5rem 0 2rem;
		}

		.hero-title {
			font-size: 20px;
		}

		.hero-btn-row {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}

		.btn-gold, .btn-outline {
			width: 100%;
			justify-content: center;
			box-sizing: border-box;
		}
	}
</style>
