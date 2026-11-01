<script lang="ts">
	// HeroProgram.svelte - Replikasi presisi sesuai design/program.png (1536x2304)
</script>

<section class="hero-program">
	<!-- Full-bleed background photo on right -->
	<div class="hero-bg-wrap">
		<img
			src="/images/program-hero-3.jpg"
			alt="Program SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (mockup zoom x 0-260, y 180-320) -->
	<svg class="hero-wave-left" viewBox="0 0 320 180" fill="none" preserveAspectRatio="none">
		<path d="M0 50 C70 50 140 110 260 180 H0 Z" fill="#0A5E75" fill-opacity="0.9" />
		<path d="M0 95 C80 95 160 140 235 180 H0 Z" fill="url(#teal-grad-prog-left)" />
		<path d="M0 145 C60 145 125 165 180 180 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-prog-left" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Wave decoration bottom-right (mockup x 900-1024, y 250-320) -->
	<svg class="hero-wave-right" viewBox="0 0 200 180" fill="none" preserveAspectRatio="none">
		<path d="M200 40 C150 85 100 135 40 180 H200 Z" fill="#079EAD" fill-opacity="0.85" />
		<path d="M200 95 C160 125 120 155 80 180 H200 Z" fill="#16B6C1" />
		<path d="M200 145 C175 160 145 170 115 180 H200 Z" fill="#FFFFFF" />
	</svg>

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag (pusat y≈111, ±54px di bawah batas atas hero) -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Program Kami</span>
			</div>

			<!-- Headline (H1 3 baris, baris 3 emas #F5B331) -->
			<h1 class="hero-title">
				Program Unggulan<br />
				untuk Mengembangkan<br />
				<span class="gold-text">Potensi Tanpa Batas.</span>
			</h1>

			<!-- Description (4 baris wajib) -->
			<p class="hero-desc">
				SDJNusantara menghadirkan berbagai program pendidikan<br />
				dan pengembangan talenta yang dirancang secara terstruktur,<br />
				relevan dengan kebutuhan zaman, dan didukung oleh para<br />
				ahli di bidangnya.
			</p>

			<!-- Buttons (berjarak ≥30px dari batas bawah hero) -->
			<div class="hero-btn-row">
				<a href="/konsultasi" class="btn-gold">
					<span>Konsultasi Program</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="#daftar-program" class="btn-outline">
					<span>Lihat Semua Program</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-program {
		position: relative;
		width: 100%;
		height: 408px;
		background: #082442;
		overflow: hidden;
		display: flex;
		align-items: flex-start;
		padding-top: 52px;
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
		position: absolute;
		right: 0;
		top: 0;
		width: 66%;
		height: 100%;
		object-fit: cover;
		object-position: right 24%;
		display: block;
	}

	/* Fade navy halus dari kiri (solid 0-32%, ±0.8 di 42%, 0 di 58%) */
	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 32%,
			rgba(8, 36, 66, 0.92) 40%,
			rgba(8, 36, 66, 0.78) 46%,
			rgba(8, 36, 66, 0.25) 58%,
			rgba(8, 36, 66, 0) 70%
		);
	}

	.hero-wave-left {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 320px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-wave-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 200px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 4rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hero-container {
			max-width: 1500px;
			padding: 0 4.5rem;
		}
	}

	.hero-text-col {
		max-width: 530px;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 3px 12px;
		background: rgba(0, 166, 178, 0.2);
		border: 1px solid rgba(0, 166, 178, 0.4);
		border-radius: 20px;
		margin-bottom: 0.85rem;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #00A6B2;
	}

	.pill-label {
		font-size: 11.5px;
		font-weight: 700;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	.hero-title {
		font-size: clamp(32px, 2.7vw, 42px);
		line-height: 1.08;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 1rem 0;
		letter-spacing: -0.015em;
	}

	.gold-text {
		color: #F5B331;
	}

	.hero-desc {
		font-size: 14px;
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1.65rem 0;
		max-width: 510px;
	}

	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 1.5rem;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background: #F5B331;
		color: #071D36;
		width: 196px;
		height: 45px;
		font-size: 14px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.3);
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 15px;
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.65);
		width: 180px;
		height: 45px;
		font-size: 14px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.btn-outline:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: #FFFFFF;
	}

	@media (max-width: 1099px) {
		.hero-program {
			height: auto;
			min-height: 408px;
			padding-bottom: 3.5rem;
		}

		.hero-container {
			padding: 0 2rem;
		}

		.hero-img {
			width: 100%;
			opacity: 0.35;
		}

		.hero-overlay {
			background: rgba(8, 36, 66, 0.85);
		}
	}

	@media (max-width: 767px) {
		.hero-program {
			padding-top: 36px;
			padding-bottom: 2.5rem;
		}

		.hero-container {
			padding: 0 1.25rem;
		}

		.hero-title {
			font-size: 28px;
		}

		.hero-desc {
			font-size: 13px;
		}

		.hero-btn-row {
			flex-direction: column;
			width: 100%;
			gap: 10px;
		}

		.btn-gold,
		.btn-outline {
			width: 100%;
		}
	}
</style>
