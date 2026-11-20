<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="hero-scholarship">
	<!-- Background image & navy fade overlay -->
	<div class="hero-bg-wrap">
		<img
			src="/images/scholarship-hero.jpg"
			alt="Beasiswa SDJ Nusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left -->
	<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 30 C100 30 180 90 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.92" />
		<path d="M0 75 C100 75 180 120 270 160 H0 Z" fill="url(#teal-grad-sch)" />
		<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-sch" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Curved accents bottom-right -->
	<svg class="hero-wave-right" viewBox="0 0 260 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M260 20 C200 65 120 115 40 160 H260 Z" fill="#079EAD" fill-opacity="0.85" />
		<path d="M260 70 C210 105 150 135 90 160 H260 Z" fill="#16B6C1" />
		<path d="M260 120 C220 138 180 150 140 160 H260 Z" fill="#F5B331" />
	</svg>

	<!-- Main Content Container -->
	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">{i18n.pick('Beasiswa', 'Scholarships')}</span>
			</div>

			<!-- Title -->
			<h1 class="hero-title">
				{i18n.pick('Akses Informasi Beasiswa', 'Access Scholarship Information')}<br />
				{i18n.pick('untuk Masa Depan', 'for a Broader')}<br />
				<span class="gold-text">{i18n.pick('yang Lebih Luas.', 'Future Ahead.')}</span>
			</h1>

			<!-- Description -->
			<p class="hero-desc">
				{i18n.pick(
					'SDJ Nusantara menghadirkan informasi beasiswa dari dalam dan luar negeri yang terpercaya, lengkap, dan terstruktur untuk membantu Anda meraih peluang pendidikan terbaik.',
					'SDJ Nusantara provides trusted, comprehensive, and structured domestic and international scholarship information to help you reach the best educational opportunities.'
				)}
			</p>
		</div>
	</div>
</section>

<style>
	.hero-scholarship {
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

	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hero-container {
			max-width: 1500px;
		}
	}

	.hero-text-col {
		max-width: 590px;
		transform: translateY(-36px);
	}

	/* Pill Tag */
	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 4px 12px;
		background: rgba(7, 158, 173, 0.18);
		border: 1px solid rgba(226, 232, 240, 0.4);
		border-radius: 9999px;
		margin-top: 0;
		margin-bottom: 12px;
		width: fit-content;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #16B6C1;
		box-shadow: 0 0 6px #16B6C1;
	}

	.pill-label {
		color: #E6F7F9;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.03em;
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
		margin: 0;
		max-width: 575px;
		text-wrap: pretty;
	}

	@media (max-width: 900px) {
		.hero-scholarship {
			height: auto;
			padding: 3.5rem 0 3.25rem;
		}
		.hero-text-col {
			transform: none;
		}
		.hero-container {
			padding: 0 1.5rem;
		}
		.hero-overlay {
			background: linear-gradient(
				90deg,
				#082442 0%,
				rgba(8, 36, 66, 0.94) 60%,
				rgba(8, 36, 66, 0.78) 100%
			);
		}
		.hero-wave,
		.hero-wave-right {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.hero-scholarship {
			height: auto;
			padding: 36px 0 44px;
		}
		.hero-bg-wrap {
			display: none;
		}
		.hero-title {
			font-size: clamp(24px, 6.5vw, 28px);
			line-height: 1.22;
			margin-bottom: 12px;
		}
		.hero-desc {
			font-size: 14px;
			line-height: 1.5;
		}
	}

	@media (max-width: 480px) {
		.hero-container {
			padding: 0 1.25rem;
		}
	}
</style>
