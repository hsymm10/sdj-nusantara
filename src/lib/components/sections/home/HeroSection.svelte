<script lang="ts">
	// HeroSection.svelte (Beranda) - Standardized to Master Hero Banner specification
</script>

<section id="hero-beranda" class="hero-section">
	<!-- Background Image & Gradient Overlays -->
	<div class="hero-bg-wrap">
		<picture>
			<source srcset="/images/hero-students-composite@2x.jpg 2x, /images/hero-students-composite.jpg 1x" />
			<img
				src="/images/hero-students-composite.jpg"
				alt="SDJNusantara Tiga Mahasiswa di Kampus"
				class="hero-img"
				loading="eager"
				fetchpriority="high"
			/>
		</picture>
		<div class="hero-overlay"></div>
	</div>

	<!-- Single unified bottom wave (SVG tunggal di dasar hero, width 100%, tinggi ±70px pada 1536) -->
	<svg class="hero-bottom-wave" viewBox="0 0 1536 72" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<defs>
			<linearGradient id="teal-ribbon-left" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
			<linearGradient id="teal-ribbon-right" x1="0" y1="1" x2="1" y2="0">
				<stop offset="0%" stop-color="#079EAD" />
				<stop offset="100%" stop-color="#16B6C1" />
			</linearGradient>
		</defs>

		<!-- 1. Left Dark Teal Curve (#0A5E75) -->
		<path d="M0,0 C90,2 170,22 250,72 L0,72 Z" fill="#0A5E75" />

		<!-- 2. Left Turquoise Ribbon (#16B6C1 -> #079EAD) -->
		<path d="M0,16 C95,18 190,36 290,72 L0,72 Z" fill="url(#teal-ribbon-left)" />

		<!-- 3. Right Turquoise Wave -->
		<path d="M1260,72 C1350,56 1445,26 1536,12 L1536,72 Z" fill="url(#teal-ribbon-right)" />

		<!-- 4. Right Gold Ribbon (#F5B331) -->
		<path d="M1380,72 C1445,62 1495,46 1536,34 L1536,72 Z" fill="#F5B331" />

		<!-- 5. Continuous White Layer (#FFFFFF) - seamless with section below -->
		<path d="M0,34 C70,20 150,18 230,38 C330,62 490,68 768,68 C1046,68 1210,58 1330,42 C1415,32 1475,38 1536,46 L1536,72 L0,72 Z" fill="#FFFFFF" />
	</svg>

	<!-- Master Container (max-width 1380px, 1500px on >=1920px, padding 0 54px) -->
	<div class="sch-hero-container">
		<div class="hero-content">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Mitra Strategis Pendidikan</span>
			</div>

			<!-- Headline: 3 baris weight 800, baris 3 emas #F5B331 -->
			<h1 class="hero-title">
				Kembangkan Potensi.<br />
				Raih Peluang.<br />
				<span class="gold-text">Bangun Masa Depan.</span>
			</h1>

			<!-- Description: max-width 575px -->
			<p class="hero-desc">
				SDJNusantara adalah konsultan pendidikan dan pengembangan talenta yang membantu individu serta institusi merencanakan pendidikan, mempersiapkan beasiswa, meningkatkan keterampilan, dan membangun jejaring kolaborasi.
			</p>

			<!-- Mobile Photo Band (Only visible on mobile <= 640px) -->
			<div class="hero-mobile-photo-band" aria-hidden="true">
				<img src="/images/hero-students-composite.jpg" alt="Mahasiswa Beranda" class="mobile-band-img" />
			</div>

			<!-- Buttons Row -->
			<div class="hero-btn-row">
				<a href="/kontak" class="btn-gold">
					<span>Konsultasikan Kebutuhan Anda</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="/layanan" class="btn-outline">
					<span>Jelajahi Program Kami</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		width: 100%;
		height: 445px;
		background: #082442;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 48px; /* Offset for fixed navbar */
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

	/* Fade navy halus: solid 0-34%, smooth transition to 70% */
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

	/* Gelombang SVG tunggal dasar hero */
	.hero-bottom-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 72px;
		z-index: 2;
		pointer-events: none;
		display: block;
	}

	/* Container Khusus: max-width 1380px, 1500px on >=1920px */
	.sch-hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-hero-container {
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

	/* H1 Headline */
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
		gap: 16px;
		margin-top: 1.25rem;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 40px;
		padding: 0 24px;
		background: #F9B52B;
		color: #082442;
		font-size: 13px;
		font-weight: 700;
		border-radius: 999px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(249, 181, 43, 0.28);
		transition: all 0.2s ease;
		box-sizing: border-box;
		white-space: nowrap;
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
		height: 40px;
		padding: 0 22px;
		background: rgba(255, 255, 255, 0.08);
		border: 1.5px solid rgba(255, 255, 255, 0.7);
		color: #FFFFFF;
		font-size: 13px;
		font-weight: 600;
		border-radius: 999px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-sizing: border-box;
		white-space: nowrap;
	}

	.btn-outline:hover {
		background: rgba(255, 255, 255, 0.18);
		border-color: #FFFFFF;
		color: #FFFFFF;
		transform: translateY(-1px);
	}

	.hero-mobile-photo-band {
		display: none;
	}

	/* Responsive Tablet & Mobile */
	@media (max-width: 1024px) {
		.hero-section {
			height: auto;
			min-height: 420px;
			padding: 56px 0 40px;
		}

		.sch-hero-container {
			padding: 0 28px;
		}

		.hero-title {
			font-size: 28px;
		}

		.hero-overlay {
			background: linear-gradient(
				90deg,
				#082442 0%,
				rgba(8, 36, 66, 0.95) 50%,
				rgba(8, 36, 66, 0.75) 100%
			);
		}
	}

	@media (max-width: 640px) {
		.hero-section {
			height: auto;
			min-height: 0;
			padding: 48px 0 32px;
		}

		.sch-hero-container {
			padding: 0 20px;
		}

		.hero-title {
			font-size: 24px;
			line-height: 1.25;
		}

		.hero-desc {
			font-size: 13px;
			margin-bottom: 1.25rem;
		}

		.hero-mobile-photo-band {
			display: block;
			width: 100%;
			height: 180px;
			border-radius: 12px;
			overflow: hidden;
			margin: 0 0 1.25rem 0;
			border: 1px solid rgba(22, 182, 193, 0.3);
		}

		.mobile-band-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.hero-bottom-wave {
			height: 36px;
		}

		.hero-btn-row {
			flex-direction: column;
			gap: 10px;
			width: 100%;
		}

		.btn-gold,
		.btn-outline {
			width: 100%;
			min-width: 0;
		}
	}
</style>
