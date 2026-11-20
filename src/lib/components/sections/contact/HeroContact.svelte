<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="hero-contact">
	<!-- Background image right -->
	<div class="hero-bg-wrap">
		<img
			src="/images/contact-hero.jpg"
			alt="Kontak SDJ Nusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left -->
	<div class="hero-wave-wrap">
		<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none">
			<path d="M0 30 C100 30 180 90 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.92" />
			<path d="M0 75 C100 75 180 120 270 160 H0 Z" fill="url(#teal-grad-contact)" />
			<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
			<defs>
				<linearGradient id="teal-grad-contact" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#16B6C1" />
					<stop offset="100%" stop-color="#079EAD" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<!-- Bottom right gold + turquoise accent -->
	<div class="hero-swoosh-br">
		<svg viewBox="0 0 260 160" fill="none" preserveAspectRatio="none">
			<path d="M260 20 C200 65 120 115 40 160 H260 Z" fill="#079EAD" fill-opacity="0.85" />
			<path d="M260 70 C210 105 150 135 90 160 H260 Z" fill="#16B6C1" />
			<path d="M260 120 C220 138 180 150 140 160 H260 Z" fill="#F5B331" />
		</svg>
	</div>

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">{i18n.pick('Kontak Kami', 'Contact Us')}</span>
			</div>

			<!-- Headline: 3 baris ±39px weight 800, baris 3 emas #F5B331 -->
			<h1 class="hero-title">
				<span>{i18n.pick('Mari Berdiskusi', 'Let’s Discuss')}</span><br />
				<span>{i18n.pick('untuk Pendidikan', 'How to Build Better')}</span><br />
				<span class="gold-text">{i18n.pick('yang Lebih Baik.', 'Education Together.')}</span>
			</h1>

			<!-- Description -->
			<p class="hero-desc">
				{i18n.pick(
					'Tim SDJ Nusantara siap mendengarkan kebutuhan Anda dan memberikan solusi yang tepat untuk pengembangan talenta, pendidikan, dan program strategis.',
					'The SDJ Nusantara team is ready to listen to your needs and provide tailored solutions for talent development, education, and strategic programs.'
				)}
			</p>
		</div>
	</div>
</section>

<style>
	.hero-contact {
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

	.hero-wave-wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 380px;
		height: 160px;
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
		line-height: 1.2;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 12px 0;
		letter-spacing: -0.015em;
	}

	.gold-text {
		color: #F5B331;
	}

	/* Description */
	.hero-desc {
		font-size: 14.5px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.92);
		margin: 0;
		max-width: 575px;
		text-wrap: pretty;
	}

	@media (max-width: 900px) {
		.hero-contact {
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
		.hero-wave-wrap,
		.hero-swoosh-br {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.hero-contact {
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
