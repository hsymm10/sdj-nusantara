<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="hero-article">
	<!-- Background image right -->
	<div class="hero-bg-wrap">
		<img
			src="/images/partner-hero-5.jpg"
			alt="Artikel & Wawasan SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left -->
	<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 30 C100 30 180 90 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.92" />
		<path d="M0 75 C100 75 180 120 270 160 H0 Z" fill="url(#teal-grad-hero)" />
		<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-hero" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Accent decoration bottom-right -->
	<svg class="hero-wave-right" viewBox="0 0 260 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M260 20 C200 65 120 115 40 160 H260 Z" fill="#079EAD" fill-opacity="0.85" />
		<path d="M260 70 C210 105 150 135 90 160 H260 Z" fill="#16B6C1" />
		<path d="M260 120 C220 138 180 150 140 160 H260 Z" fill="#F5B331" />
	</svg>

	<!-- Scoped Container -->
	<div class="sch-article-container">
		<div class="hero-content">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">{i18n.dict.nav.articles}</span>
			</div>

			<!-- Headline -->
			<h1 class="hero-title">
				{i18n.pick('Wawasan untuk', 'Insights for')}<br />
				{i18n.pick('Pendidikan yang', 'Better Education')}<br />
				<span class="gold-text">{i18n.pick('Lebih Baik di Indonesia.', 'Across Indonesia.')}</span>
			</h1>

			<!-- Description -->
			<p class="hero-desc">
				{i18n.pick(
					'Temukan berbagai artikel, insight, dan informasi terkini seputar pendidikan, pengembangan talenta, beasiswa, dan inovasi pembelajaran dari tim ahli SDJNusantara.',
					'Discover curated articles, insights, and the latest updates on education, talent development, scholarships, and learning innovation from SDJNusantara’s expert team.'
				)}
			</p>

			<!-- Buttons Row -->
			<div class="hero-btn-row">
				<a href="#artikel-terbaru" class="btn-gold">
					<span>{i18n.pick('Jelajahi Artikel', 'Explore Articles')}</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="#newsletter" class="btn-outline">
					<span>{i18n.pick('Berlangganan Update', 'Subscribe to Updates')}</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-article {
		position: relative;
		width: 100%;
		height: 445px;
		background: #082442;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 48px;
		box-sizing: border-box;
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
		object-position: 82% 24%;
		display: block;
	}

	/* Fade navy halus: solid 0–34%, smooth transition to 70% */
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
		z-index: 2;
		pointer-events: none;
	}

	.hero-wave-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 260px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.sch-article-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-article-container {
			max-width: 1500px;
		}
	}

	.hero-content {
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
		text-wrap: pretty;
	}

	/* Buttons Row */
	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 210px;
		height: 42px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.28);
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 14px;
		transition: transform 0.2s ease;
	}

	.btn-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 178px;
		height: 42px;
		background: rgba(255, 255, 255, 0.08);
		border: 1.5px solid rgba(255, 255, 255, 0.65);
		color: #FFFFFF;
		font-size: 13.5px;
		font-weight: 600;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.btn-outline:hover {
		border-color: #00A6B2;
		background: rgba(0, 166, 178, 0.12);
		color: #FFFFFF;
	}

	@media (max-width: 900px) {
		.hero-article {
			height: auto;
			padding: 4.5rem 0 3rem;
		}
		.sch-article-container {
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
		.hero-wave-right {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.hero-bg-wrap {
			display: none;
		}
		.hero-title {
			font-size: 30px;
			line-height: 1.25;
		}
		.hero-btn-row {
			flex-direction: column;
			align-items: stretch;
			width: 100%;
			gap: 10px;
		}
		.btn-gold,
		.btn-outline {
			width: 100%;
			height: 44px;
		}
	}
</style>
