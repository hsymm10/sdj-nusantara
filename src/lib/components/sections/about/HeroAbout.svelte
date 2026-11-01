<script lang="ts">
	// HeroAbout.svelte - Faithful to design/tentang-kami.png
</script>

<section class="hero-about">
	<!-- Background image right -->
	<div class="hero-bg-wrap">
		<img
			src="/images/about-hero-building.jpg"
			alt="Gedung Kampus SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
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

			<!-- Headline -->
			<h1 class="hero-title">
				Bersama Membangun<br />
				Pendidikan yang Lebih Baik<br />
				<span class="gold-text">untuk Masa Depan Indonesia.</span>
			</h1>

			<!-- Description -->
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
		height: 345px;
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
			#082442 35%,
			rgba(8, 36, 66, 0.88) 52%,
			rgba(8, 36, 66, 0.35) 75%,
			rgba(8, 36, 66, 0.1) 100%
		);
	}

	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 300px;
		height: 140px;
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
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.hero-text-col {
		max-width: 530px;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 3px 10px;
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
		font-size: 10.5px;
		font-weight: 600;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	.hero-title {
		font-size: 32px;
		line-height: 38px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 0.85rem 0;
		letter-spacing: -0.01em;
	}

	.gold-text {
		color: #F4B334;
	}

	.hero-desc {
		font-size: 12px;
		line-height: 18px;
		color: rgba(255, 255, 255, 0.85);
		margin: 0 0 1.25rem 0;
		max-width: 480px;
	}

	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F4B334;
		color: #071D36;
		padding: 7px 18px;
		font-size: 11px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		box-shadow: 0 2px 8px rgba(244, 179, 52, 0.25);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
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
	}
</style>
