<script lang="ts">
	// HeroServices.svelte - Replikasi presisi sesuai design/layanan.png (Tinggi ±456px pada 1536)
</script>

<section class="hero-services">
	<!-- Background image full-bleed right starting x ~46% with smooth navy fade -->
	<div class="hero-bg-wrap">
		<img
			src="/images/services-hero-4.jpg"
			alt="Layanan Mahasiswa SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (lapisan teal gelap, pita turquoise, lengkung putih) -->
	<svg class="hero-wave" viewBox="0 0 420 180" fill="none" preserveAspectRatio="none">
		<path d="M0 35 C110 35 190 110 320 180 H0 Z" fill="#0A5E75" fill-opacity="0.95" />
		<path d="M0 80 C120 80 200 135 290 180 H0 Z" fill="url(#teal-grad-svc)" />
		<path d="M0 145 C80 145 150 165 210 180 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-svc" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Accent teal bottom-right -->
	<svg class="hero-accent-right" viewBox="0 0 160 80" fill="none" preserveAspectRatio="none">
		<path d="M0 80 C60 50 110 20 160 0 V80 H0 Z" fill="#00A6B2" fill-opacity="0.6" />
	</svg>

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Layanan</span>
			</div>

			<!-- Headline: 3 baris ±44-46px, weight 800, line 3 gold #F5B331 -->
			<h1 class="hero-title">
				Layanan Kami untuk<br />
				Pendidikan yang Lebih Baik<br />
				<span class="gold-text">dan Talenta yang Lebih Unggul.</span>
			</h1>

			<!-- Description: 3 baris, max-width ~640px -->
			<p class="hero-desc">
				SDJNusantara menyediakan layanan konsultasi dan pengembangan talenta yang dirancang untuk individu, institusi, dan organisasi agar mampu menghadapi tantangan pendidikan di masa depan.
			</p>

			<!-- Buttons: base ±70px above hero bottom -->
			<div class="hero-btn-row">
				<a href="/konsultasi" class="btn-gold">
					<span>Konsultasikan Kebutuhan Anda</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="#layanan-1" class="btn-outline">
					<span>Pelajari Layanan Kami</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-services {
		position: relative;
		width: 100%;
		height: 456px;
		background: #082442;
		overflow: hidden;
		display: flex;
		align-items: center;
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
		top: 0;
		right: 0;
		width: 62%;
		height: 100%;
		object-fit: cover;
		object-position: 75% 20%;
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
			#082442 28%,
			rgba(8, 36, 66, 0.82) 40%,
			rgba(8, 36, 66, 0.22) 52%,
			rgba(8, 36, 66, 0.0) 65%,
			rgba(8, 36, 66, 0.0) 100%
		);
	}

	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 440px;
		height: 185px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-accent-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 160px;
		height: 80px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hero-container {
			max-width: 1500px;
		}
	}

	.hero-text-col {
		max-width: 680px;
		margin-bottom: 25px; /* Memberi jarak dasar tombol ±70px dari bawah hero */
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 4px 12px;
		background: rgba(0, 166, 178, 0.2);
		border: 1px solid rgba(0, 166, 178, 0.45);
		border-radius: 20px;
		margin-bottom: 1.1rem;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		background: #00A6B2;
		border-radius: 50%;
	}

	.pill-label {
		font-size: 11.5px;
		font-weight: 600;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	.hero-title {
		font-size: clamp(34px, 3.2vw, 45px);
		line-height: 1.12;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 1rem 0;
		letter-spacing: -0.01em;
	}

	.gold-text {
		color: #F5B331;
	}

	.hero-desc {
		font-size: 13.5px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1.6rem 0;
		max-width: 620px;
		text-wrap: pretty;
	}

	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #071D36;
		padding: 10px 22px;
		font-size: 12.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.3);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.35);
		color: #FFFFFF;
		padding: 10px 20px;
		font-size: 12.5px;
		font-weight: 600;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.btn-outline:hover {
		border-color: #00A6B2;
		color: #00A6B2;
		background: rgba(0, 166, 178, 0.1);
	}

	.btn-arrow {
		font-size: 14px;
	}

	@media (max-width: 900px) {
		.hero-services {
			height: auto;
			padding: 4rem 1rem 3.5rem;
		}
		.hero-img {
			width: 100%;
			opacity: 0.25;
		}
		.hero-overlay {
			background: rgba(8, 36, 66, 0.85);
		}
		.hero-title {
			font-size: 28px;
			line-height: 1.2;
		}
		.hero-btn-row {
			flex-direction: column;
			align-items: stretch;
		}
		.btn-gold, .btn-outline {
			justify-content: center;
		}
	}
</style>
