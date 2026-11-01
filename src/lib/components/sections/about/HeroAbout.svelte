<script lang="ts">
	// HeroAbout.svelte - Faithful to design/tentang-kami.png
</script>

<section class="hero-about">
	<!-- Background image right -->
	<div class="hero-bg-wrap">
		<img
			src="/images/tentang-building-hero-hd.jpg"
			alt="Gedung Kampus SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- 3D Signboard mounted on facade at top right per mockup -->
	<div class="building-signboard">
		<div class="sign-inner">
			<svg class="sign-logo" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18 3L32 10.5L18 18L4 10.5L18 3Z" fill="#00A6B2"/>
				<path d="M4 14.5L18 22L32 14.5L32 17.5L18 25L4 17.5V14.5Z" fill="#0B2747"/>
				<path d="M4 21.5L18 29L32 21.5L32 24.5L18 32L4 24.5V21.5Z" fill="#F5B331"/>
			</svg>
			<div class="sign-text">
				<span class="sign-title">SDJNusantara</span>
				<span class="sign-subtitle">KONSULTAN PENDIDIKAN</span>
			</div>
		</div>
	</div>

	<!-- Wave decoration bottom-left -->
	<svg class="hero-wave" viewBox="0 0 320 160" fill="none" preserveAspectRatio="none">
		<path d="M0 40 C70 40 140 100 240 160 H0 Z" fill="#0A5E75" fill-opacity="0.9" />
		<path d="M0 90 C80 90 150 130 220 160 H0 Z" fill="url(#teal-grad-about)" />
		<path d="M0 135 C60 135 120 150 170 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-about" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Swoosh decoration bottom-right -->
	<svg class="hero-swoosh-right" viewBox="0 0 200 100" fill="none" preserveAspectRatio="none">
		<path d="M0 100 C70 50 140 20 200 0 V100 H0 Z" fill="#00A6B2" fill-opacity="0.75" />
	</svg>

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Tentang Kami</span>
			</div>

			<!-- Headline (3 lines, font ±44px at 1536, line 3 gold #F5B331) -->
			<h1 class="hero-title">
				Bersama Membangun<br />
				Pendidikan yang Lebih Baik<br />
				<span class="gold-text">untuk Masa Depan Indonesia.</span>
			</h1>

			<!-- Description (max-width 560px without manual <br>) -->
			<p class="hero-desc">
				SDJNusantara hadir sebagai konsultan pendidikan dan pengembangan talenta yang berkomitmen memberikan solusi strategis, inovatif, dan berdampak nyata bagi individu maupun institusi.
			</p>

			<!-- Button CTA -->
			<div class="hero-btn-row">
				<a href="#profil" class="btn-gold">
					<span>Mengenal Lebih Dekat</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-about {
		position: relative;
		width: 100%;
		height: 369px;
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
		object-position: right 30%;
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
			rgba(8, 36, 66, 0.82) 48%,
			rgba(8, 36, 66, 0.22) 68%,
			rgba(8, 36, 66, 0.0) 85%,
			rgba(8, 36, 66, 0.0) 100%
		);
	}

	/* Signboard mounted on facade */
	.building-signboard {
		position: absolute;
		top: 42px;
		right: calc((100% - 1312px) / 2 + 35px);
		z-index: 2;
		pointer-events: none;
		transform: perspective(900px) rotateY(-10deg) rotateX(2deg) skewY(-1deg);
	}

	@media (max-width: 1400px) {
		.building-signboard {
			right: 3rem;
		}
	}

	@media (max-width: 860px) {
		.building-signboard {
			display: none;
		}
	}

	.sign-inner {
		display: flex;
		align-items: center;
		gap: 12px;
		filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
	}

	.sign-logo {
		width: 52px;
		height: 52px;
		flex-shrink: 0;
		filter: drop-shadow(2px 3px 2px rgba(0, 0, 0, 0.35));
	}

	.sign-text {
		display: flex;
		flex-direction: column;
		line-height: 1.05;
	}

	.sign-title {
		font-size: 28px;
		font-weight: 900;
		color: #07223D;
		letter-spacing: -0.01em;
		text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 1px 2px 4px rgba(0, 0, 0, 0.25);
	}

	.sign-subtitle {
		font-size: 11px;
		font-weight: 800;
		color: #07223D;
		letter-spacing: 0.12em;
		margin-top: 2px;
		text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
	}

	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 360px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-swoosh-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 180px;
		height: 90px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hero-container {
			max-width: 1500px;
		}
		.building-signboard {
			right: calc((100% - 1500px) / 2 + 10px);
		}
	}

	.hero-text-col {
		max-width: 600px;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 4px 12px;
		background: rgba(0, 166, 178, 0.2);
		border: 1px solid rgba(0, 166, 178, 0.4);
		border-radius: 20px;
		margin-bottom: 0.85rem;
	}

	.pill-dot {
		width: 5px;
		height: 5px;
		background: #00A6B2;
		border-radius: 50%;
	}

	.pill-label {
		font-size: 11px;
		font-weight: 600;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	.hero-title {
		font-size: clamp(30px, 2.87vw, 44px);
		line-height: 1.18;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 1rem 0;
		letter-spacing: -0.01em;
	}

	.gold-text {
		color: #F5B331;
	}

	.hero-desc {
		font-size: 13px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.88);
		margin: 0 0 1.35rem 0;
		max-width: 560px;
		text-wrap: pretty;
	}

	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #071D36;
		padding: 8px 20px;
		font-size: 12px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		box-shadow: 0 2px 8px rgba(245, 179, 49, 0.28);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 13px;
	}

	@media (max-width: 768px) {
		.hero-about {
			height: auto;
			padding: 4rem 1rem 3rem;
		}
		.hero-title {
			font-size: 26px;
			line-height: 32px;
		}
		.btn-gold {
			width: 100%;
			justify-content: center;
		}
	}
</style>
