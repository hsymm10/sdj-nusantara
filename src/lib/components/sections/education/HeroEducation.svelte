<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="hero-education" id="hero-pendidikan">
	<!-- Background image full-bleed right with smooth navy fade -->
	<div class="hero-bg-wrap">
		<img
			src="/images/education-hero.jpg"
			alt={i18n.pick('Layanan Pendidikan SDJNusantara', 'SDJNusantara Education Services')}
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (Master Reference: HeroAbout) -->
	<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 30 C100 30 180 90 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.92" />
		<path d="M0 75 C100 75 180 120 270 160 H0 Z" fill="url(#teal-grad-edu)" />
		<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-edu" x1="0" y1="0" x2="1" y2="1">
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

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">{i18n.pick('Fokus Pendidikan', 'Education Focus')}</span>
			</div>

			<!-- Headline -->
			<h1 class="hero-title">
				{i18n.pick('Layanan Kami untuk', 'Our Services for')}<br />
				{i18n.pick('Pendidikan yang Lebih Baik', 'Better Education')}<br />
				<span class="gold-text">{i18n.pick('dan Talenta yang Lebih Unggul.', 'and Stronger Talent.')}</span>
			</h1>

			<!-- Description -->
			<p class="hero-desc">
				{i18n.pick(
					'SDJNusantara menyediakan layanan pendidikan, pengembangan talenta, beasiswa, dan pendampingan profesional untuk mendukung potensi terbaik Anda.',
					'SDJNusantara provides education services, talent development, scholarships, and professional mentoring to unlock your highest potential.'
				)}
			</p>

			<!-- Segmented Choice Buttons (Sesuai Referensi Gambar 2) -->
			<div class="hero-choice-group" aria-label={i18n.pick('Pilihan Kategori Layanan', 'Service Category Selection')}>
				<a href="/layanan" class="hero-choice-btn btn-choice-active">
					<span>{i18n.pick('Layanan Individu', 'Individual Services')}</span>
				</a>
				<a href="/layanan" class="hero-choice-btn btn-choice-inactive">
					<span>{i18n.pick('Solusi Institusi', 'Institutional Solutions')}</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-education {
		position: relative;
		width: 100%;
		height: var(--hero-height-desktop, 445px);
		background: #082442;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: var(--navbar-height, 48px);
		box-sizing: border-box;
	}

	.hero-bg-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: var(--z-hero-bg, 1);
	}

	.hero-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 82% 24%;
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
			#082442 34%,
			rgba(8, 36, 66, 0.92) 43%,
			rgba(8, 36, 66, 0.6) 52%,
			rgba(8, 36, 66, 0.12) 62%,
			transparent 72%
		);
	}

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

	.hero-container {
		position: relative;
		z-index: var(--z-hero-content, 3);
		width: 100%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		padding: 0 var(--hero-padding-x, 54px);
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hero-container {
			max-width: var(--hero-container-max-xl, 1500px);
		}
	}

	.hero-text-col {
		max-width: 590px;
	}

	/* Pill Tag */
	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 4px 14px;
		background: rgba(0, 166, 178, 0.18);
		border: 1px solid rgba(0, 166, 178, 0.5);
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

	.pill-label {
		font-size: 12px;
		font-weight: 600;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	/* Headline */
	.hero-title {
		font-size: clamp(30px, 2.6vw, 39px);
		line-height: 1.18;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 0.85rem 0;
	}

	.gold-text {
		color: #F5B331;
	}

	/* Description */
	.hero-desc {
		font-size: 14px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1.5rem 0;
		max-width: 575px;
	}

	/* Segmented Choice Buttons (Sesuai Referensi Gambar 2) */
	.hero-choice-group {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 0.5rem;
	}

	.hero-choice-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 42px;
		padding: 0 24px;
		font-size: 14px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		white-space: nowrap;
		box-sizing: border-box;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		cursor: pointer;
	}

	.hero-choice-btn.btn-choice-active {
		background: #f5b331;
		color: #082442;
		border: 1.5px solid #f5b331;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.32);
	}

	.hero-choice-btn.btn-choice-active:hover {
		background: #e6a528;
		border-color: #e6a528;
		transform: translateY(-1px);
		box-shadow: 0 6px 18px rgba(245, 179, 49, 0.42);
	}

	.hero-choice-btn.btn-choice-inactive {
		background: #FFFFFF;
		color: #082442;
		border: 1.5px solid #FFFFFF;
		box-shadow: 0 3px 12px rgba(8, 36, 66, 0.16);
	}

	.hero-choice-btn.btn-choice-inactive:hover {
		background: #F8FAFC;
		border-color: #E2E8F0;
		transform: translateY(-1px);
		box-shadow: 0 5px 16px rgba(8, 36, 66, 0.22);
	}

	@media (max-width: 900px) {
		.hero-education {
			height: auto;
			padding: 4.5rem 0 3rem;
		}
		.hero-container {
			padding: 0 1.5rem;
		}
		.hero-overlay {
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
		.hero-title {
			font-size: clamp(23px, 6.5vw, 30px);
			line-height: 1.25;
		}
		.hero-choice-group {
			flex-direction: row;
			gap: 10px;
			width: 100%;
		}
		.hero-choice-btn {
			flex: 1 1 50%;
			height: 42px;
			padding: 0 10px;
			font-size: 13px;
		}
	}
</style>
