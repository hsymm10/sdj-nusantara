<script lang="ts">
	// HeroPartner.svelte - Precise implementation matching design/kemitraan.png (1536px Primary)
</script>

<section id="hero-kemitraan" class="hero-partner">
	<!-- Background Image & Gradient Overlays -->
	<div class="hero-bg-wrap">
		<img
			src="/images/partner-hero-5.jpg"
			alt="Ekosistem Kemitraan SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (Teal gelap, pita turquoise, lengkung putih) -->
	<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 30 C100 30 180 90 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.92" />
		<path d="M0 75 C100 75 180 120 270 160 H0 Z" fill="url(#teal-grad-part)" />
		<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-part" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Accent decoration bottom-right (Emas tipis & turquoise) -->
	<svg class="hero-wave-right" viewBox="0 0 260 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M260 20 C200 65 120 115 40 160 H260 Z" fill="#079EAD" fill-opacity="0.85" />
		<path d="M260 70 C210 105 150 135 90 160 H260 Z" fill="#16B6C1" />
		<path d="M260 120 C220 138 180 150 140 160 H260 Z" fill="#F5B331" />
	</svg>

	<!-- Scoped Container (x ±78→1458 on 1536px) -->
	<div class="sch-partner-container">
		<div class="hero-content">
			<!-- Pill Tag: Center ±y 104 on 1536px -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Kemitraan</span>
			</div>

			<!-- Headline: 3 baris ±38-42px weight 800, baris 3 emas #F5B331 -->
			<h1 class="hero-title">
				Bersama Membangun<br />
				Ekosistem Pendidikan<br />
				<span class="gold-text">yang Lebih Kuat.</span>
			</h1>

			<!-- Description: putih 4 baris, max-width ±600px tanpa br manual -->
			<p class="hero-desc">
				SDJNusantara membuka peluang kolaborasi dengan berbagai institusi, baik di sektor pendidikan, pemerintah, maupun dunia usaha, untuk menciptakan dampak nyata bagi pengembangan talenta Indonesia.
			</p>

			<!-- Mobile Photo Band (Only visible on mobile ≤ 640px) -->
			<div class="hero-mobile-photo-band" aria-hidden="true">
				<img src="/images/partner-hero-5.jpg" alt="5 Profesional Kemitraan" class="mobile-band-img" />
			</div>

			<!-- Buttons: Dasar tombol ±45px di atas batas bawah hero -->
			<div class="hero-btn-row">
				<a href="/konsultasi" class="btn-gold">
					<span>Ajukan Kerja Sama</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="#jenis-mitra" class="btn-outline">
					<span>Lihat Jenis Kemitraan</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-partner {
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

	/* Full-bleed photo on right starting ±x 40%, facing left, intact faces */
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

	/* Gelombang SVG kiri-bawah */
	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 380px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	/* Gelombang SVG kanan-bawah */
	.hero-wave-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 260px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	/* Container Khusus: x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px */
	.sch-partner-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-partner-container {
			max-width: 1500px;
		}
	}

	.hero-content {
		max-width: 590px;
	}

	/* Pill: Center ±y 104 on 1536px */
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

	/* Description without manual <br> */
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
		.hero-partner {
			height: auto;
			padding: 4.5rem 0 3rem;
		}
		.sch-partner-container {
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

	.hero-mobile-photo-band {
		display: none;
	}

	@media (max-width: 640px) {
		.hero-bg-wrap {
			display: none;
		}
		.hero-title {
			font-size: 30px;
			line-height: 1.25;
		}
		.hero-mobile-photo-band {
			display: block;
			width: 100%;
			height: 200px;
			border-radius: 12px;
			overflow: hidden;
			margin: 1.25rem 0;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
		}
		.mobile-band-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 82% 25%;
			display: block;
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
