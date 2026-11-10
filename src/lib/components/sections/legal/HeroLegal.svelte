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

	<!-- Continuous bottom wave decoration -->
	<div class="hero-wave-container" aria-hidden="true">
		<svg class="hero-wave-svg" viewBox="0 0 1440 85" fill="none" preserveAspectRatio="none">
			<!-- White base curve cutting left-bottom of hero -->
			<path d="M0 25C180 25 360 85 640 85H0V25Z" fill="#FFFFFF" />
			<!-- Dark Teal Wave -->
			<path d="M0 45C160 45 320 85 520 85H0V45Z" fill="#0A5E75" fill-opacity="0.9" />
			<!-- Turquoise Ribbon -->
			<path d="M0 65C120 65 240 85 400 85H0V65Z" fill="#16B6C1" />

			<!-- Bottom Right Accent Ribbon (Teal & Gold curve) -->
			<path d="M1440 20C1320 50 1180 75 1020 85H1440V20Z" fill="#16B6C1" fill-opacity="0.85" />
			<path d="M1440 50C1360 68 1260 80 1140 85H1440V50Z" fill="#F5B331" />
		</svg>
	</div>

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

	/* Gradient overlay: Deep solid navy on left fading across right */
	.hero-gradient-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 38%,
			rgba(8, 36, 66, 0.84) 55%,
			rgba(8, 36, 66, 0.4) 78%,
			rgba(8, 36, 66, 0.14) 100%
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
		max-width: 540px;
	}

	/* Pill Badge */
	.pill-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: rgba(22, 182, 193, 0.15);
		border: 1px solid rgba(22, 182, 193, 0.4);
		padding: 4px 12px;
		border-radius: 20px;
		margin-bottom: 16px;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		background: #16b6c1;
		border-radius: 50%;
	}

	.pill-text {
		font-size: 12px;
		font-weight: 700;
		color: #16b6c1;
	}

	/* Headline */
	.hero-headline {
		font-size: var(--hero-title-size, clamp(30px, 2.6vw, 39px));
		line-height: 1.18;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 14px;
	}

	.gold-highlight {
		color: #f5b331;
	}

	/* Description */
	.hero-description {
		font-size: 14.5px;
		line-height: 1.6;
		color: #cbd5e1;
		margin: 0 0 24px;
		max-width: 480px;
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
		gap: 8px;
		background: #f5b331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		padding: 10px 22px;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.35);
	}

	.btn-primary-gold:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	.btn-outline-white {
		display: inline-flex;
		align-items: center;
		background: transparent;
		color: #ffffff;
		border: 1.5px solid rgba(255, 255, 255, 0.45);
		font-size: 13.5px;
		font-weight: 600;
		padding: 9.5px 20px;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s;
	}

	.btn-outline-white:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: #ffffff;
	}

	/* Wave decoration */
	.hero-wave-container {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 80px;
		pointer-events: none;
		z-index: 2;
	}

	.hero-wave-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	@media (max-width: 900px) {
		.legal-hero {
			height: auto;
			padding: 4.5rem 0 3.5rem;
		}

		.legal-hero-container {
			padding: 0 1.5rem;
		}

		.hero-bg-img {
			width: 100%;
			opacity: 0.35;
		}

		.hero-headline {
			font-size: 28px;
		}
	}

	@media (max-width: 540px) {
		.hero-buttons {
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}

		.btn-primary-gold,
		.btn-outline-white {
			width: 100%;
			justify-content: center;
		}
	}
</style>
