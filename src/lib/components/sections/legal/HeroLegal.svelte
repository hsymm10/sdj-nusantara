<!-- Section A: Hero Section Layanan Hukum (Sesuai Mockup & Kepatuhan) -->
<script lang="ts">
	// Props or static data
</script>

<section class="legal-hero">
	<!-- Background Image & Gradient Overlay -->
	<div class="hero-bg-wrap">
		<img
			src="/images/layanan-hukum-hero.jpg"
			alt="Palu Hakim dan Timbangan Keadilan Layanan Hukum SDJNusantara"
			class="hero-bg-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-gradient-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (Master Reference: HeroAbout) -->
	<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 30 C100 30 180 90 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.92" />
		<path d="M0 75 C100 75 180 120 270 160 H0 Z" fill="url(#teal-grad-legal)" />
		<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-legal" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Accent decoration bottom-right (Master Reference: HeroAbout) -->
	<svg class="hero-swoosh-right" viewBox="0 0 260 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M260 20 C200 65 120 115 40 160 H260 Z" fill="#079EAD" fill-opacity="0.85" />
		<path d="M260 70 C210 105 150 135 90 160 H260 Z" fill="#16B6C1" />
		<path d="M260 120 C220 138 180 150 140 160 H260 Z" fill="#F5B331" />
	</svg>

	<!-- Content Container -->
	<div class="legal-hero-container">
		<div class="hero-left-content">
			<!-- Pill Badge: Breadcrumb netral -->
			<div class="pill-badge">
				<span class="pill-dot"></span>
				<span class="pill-text">Layanan › Layanan Hukum</span>
			</div>

			<!-- Headline -->
			<h1 class="hero-headline">
				Layanan Hukum &<br />
				<span class="gold-highlight">Konsultasi Regulasi.</span>
			</h1>

			<!-- Subtitle / Description Netral (Kepatuhan: tanpa kata klaim) -->
			<p class="hero-description">
				Pendampingan hukum yang terarah dan sesuai regulasi di bidang pendidikan bagi institusi, organisasi, maupun korporasi.
			</p>

			<!-- Action Buttons: Tombol 2 adalah "Hubungi Kami" ke /kontak -->
			<div class="hero-buttons">
				<a href="/konsultasi" class="btn-primary-gold">
					<span>Ajukan Konsultasi</span>
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
				<a href="/kontak" class="btn-outline-white">
					<span>Hubungi Kami</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.legal-hero {
		position: relative;
		width: 100%;
		height: var(--hero-height-desktop, 445px);
		background: #082442;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: var(--navbar-height, 48px);
		padding-bottom: 0;
		box-sizing: border-box;
	}

	.hero-bg-wrap {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: var(--z-hero-bg, 1);
	}

	.hero-bg-img {
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 82% 40%;
		display: block;
	}

	/* Gradient overlay: Master Reference gradient stops */
	.hero-gradient-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 34%,
			rgba(8, 36, 66, 0.92) 43%,
			rgba(8, 36, 66, 0.6) 52%,
			rgba(8, 36, 66, 0.12) 62%,
			transparent 72%
		);
	}

	.legal-hero-container {
		position: relative;
		z-index: var(--z-hero-content, 3);
		width: 100%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		padding: 0 var(--hero-padding-x, 54px);
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.legal-hero-container {
			max-width: var(--hero-container-max-xl, 1500px);
		}
	}

	.hero-left-content {
		max-width: 590px;
	}

	/* Pill Badge */
	.pill-badge {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		background: rgba(0, 166, 178, 0.18);
		border: 1px solid rgba(0, 166, 178, 0.5);
		padding: 4px 14px;
		border-radius: 999px;
		margin-top: 6px;
		margin-bottom: 0.75rem;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		background: #00A6B2;
		border-radius: 50%;
	}

	.pill-text {
		font-size: 12px;
		font-weight: 600;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	/* Headline */
	.hero-headline {
		font-size: var(--hero-title-size, clamp(30px, 2.6vw, 39px));
		line-height: 1.18;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 0.85rem 0;
	}

	.gold-highlight {
		color: #f5b331;
	}

	/* Description */
	.hero-description {
		font-size: 14px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1.5rem 0;
		max-width: 575px;
		text-wrap: pretty;
	}

	/* Buttons Row */
	.hero-buttons {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.btn-primary-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background: #f5b331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		height: 42px;
		padding: 0 22px;
		border-radius: 8px;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.28);
		box-sizing: border-box;
	}

	.btn-primary-gold:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	.btn-outline-white {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
		border: 1.5px solid rgba(255, 255, 255, 0.65);
		font-size: 13.5px;
		font-weight: 600;
		height: 42px;
		padding: 0 22px;
		border-radius: 8px;
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s;
		box-sizing: border-box;
	}

	.btn-outline-white:hover {
		background: rgba(0, 166, 178, 0.12);
		border-color: #00A6B2;
	}

	/* Wave & swoosh decoration matching Master Reference */
	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 380px;
		height: 160px;
		z-index: var(--z-hero-wave, 2);
		pointer-events: none;
	}

	.hero-swoosh-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 260px;
		height: 160px;
		z-index: var(--z-hero-wave, 2);
		pointer-events: none;
	}

	@media (max-width: 900px) {
		.legal-hero {
			height: auto;
			padding: 4.5rem 0 3rem;
		}

		.legal-hero-container {
			padding: 0 1.5rem;
		}

		.hero-gradient-overlay {
			background: linear-gradient(
				90deg,
				#082442 0%,
				rgba(8, 36, 66, 0.92) 60%,
				rgba(8, 36, 66, 0.75) 100%
			);
		}

		.hero-wave,
		.hero-swoosh-right {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.hero-bg-wrap {
			display: none;
		}

		.hero-headline {
			font-size: 30px;
			line-height: 1.25;
		}

		.hero-buttons {
			flex-direction: column;
			align-items: stretch;
			gap: 10px;
		}

		.btn-primary-gold,
		.btn-outline-white {
			width: 100%;
			height: 44px;
			justify-content: center;
		}
	}
</style>
