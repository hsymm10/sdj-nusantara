<script lang="ts">
</script>

<section class="hero-section">
	<!-- Full-width Background Image: seamless left foliage + right students -->
	<div class="hero-bg-wrapper">
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
	</div>

	<!-- Navy Gradient Overlay: solid #082442 on 0-22%, ~0.85 on 40%, 0 on ~62% -->
	<div class="hero-gradient-overlay"></div>

	<!-- 3-Layer Organic Curved Decorative Waves at bottom-left (lebar 330px, tinggi 170px) -->
	<div class="hero-wave-container">
		<svg
			class="bottom-left-wave-svg"
			viewBox="0 0 330 170"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
		>
			<defs>
				<linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#16B6C1" />
					<stop offset="100%" stop-color="#079EAD" />
				</linearGradient>
			</defs>

			<!-- Layer 1: Gelombang teal gelap #0A5E75 (opacity 0.9) -->
			<path
				d="M0 15 C80 35 175 92 215 170 L0 170 Z"
				fill="#0A5E75"
				fill-opacity="0.9"
			/>

			<!-- Layer 2: Pita turquoise gradient (#16B6C1 -> #079EAD) -->
			<path
				d="M0 65 C70 82 150 126 185 170 L215 170 C180 110 95 50 0 30 Z"
				fill="url(#tealGrad)"
				fill-opacity="0.95"
			/>

			<!-- Layer 3: Lapisan putih #FFFFFF di sudut kiri-bawah -->
			<path
				d="M0 120 C60 130 140 152 215 170 L0 170 Z"
				fill="#FFFFFF"
			/>
		</svg>
	</div>

	<!-- Hero Text Content (x kiri 235) -->
	<div class="hero-container">
		<div class="hero-content">
			<h1 class="hero-title">
				<span class="title-line line-1">Kembangkan Potensi.</span>
				<span class="title-line line-2">Raih Peluang.</span>
				<span class="title-line line-3 gold-highlight">Bangun Masa Depan.</span>
			</h1>

			<p class="hero-description">
				SDJNusantara adalah konsultan pendidikan dan pengembangan talenta
				yang membantu individu serta institusi merencanakan pendidikan,
				mempersiapkan beasiswa, meningkatkan keterampilan, dan membangun
				jejaring kolaborasi.
			</p>

			<div class="hero-buttons">
				<a href="/kontak" class="btn-primary-gold">
					<span>Konsultasikan Kebutuhan Anda</span>
					<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
				<a href="/layanan" class="btn-secondary-outline">
					<span>Jelajahi Program Kami</span>
				</a>
			</div>
		</div>
	</div>

	<!-- Mobile-only student photo band below text (rasio ~4:3, ketiga wajah utuh, tanpa teks menimpa wajah) -->
	<div class="hero-mobile-photo-band">
		<picture>
			<source srcset="/images/hero-students-composite@2x.jpg 2x, /images/hero-students-composite.jpg 1x" />
			<img
				src="/images/hero-students-composite.jpg"
				alt="SDJNusantara Mahasiswa"
				class="mobile-band-img"
				loading="eager"
			/>
		</picture>
		<div class="mobile-band-top-gradient"></div>
		<!-- Scaled down bottom-left teal wave for mobile -->
		<div class="mobile-band-wave">
			<svg viewBox="0 0 160 80" fill="none" preserveAspectRatio="none">
				<path d="M0 8 C40 18 85 45 105 80 L0 80 Z" fill="#0A5E75" fill-opacity="0.9"/>
				<path d="M0 32 C35 40 75 62 90 80 L105 80 C90 52 48 24 0 15 Z" fill="#16B6C1"/>
				<path d="M0 60 C30 65 70 75 105 80 L0 80 Z" fill="#FFFFFF"/>
			</svg>
		</div>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		height: 297px;
		background-color: #082442;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.hero-bg-wrapper {
		position: absolute;
		inset: 0;
		z-index: 1;
		overflow: hidden;
	}

	.hero-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: right center;
		display: block;
	}

	/* Overlay gradient navy: solid #082442 pada 0-22%, ~0.85 pada 40%, 0 pada ~62% */
	.hero-gradient-overlay {
		position: absolute;
		inset: 0;
		z-index: 2;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 22%,
			rgba(8, 36, 66, 0.85) 40%,
			rgba(8, 36, 66, 0.1) 58%,
			transparent 62%
		);
		pointer-events: none;
	}

	/* Bottom-left decorative wave (width: 330px, height: 170px) */
	.hero-wave-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 330px;
		height: 170px;
		z-index: 3;
		pointer-events: none;
	}

	.bottom-left-wave-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.hero-container {
		position: relative;
		z-index: 4;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.hero-content {
		max-width: 430px;
		margin-top: 14px; /* Pusat baris headline y≈107, 145, 184 */
	}

	.hero-title {
		display: flex;
		flex-direction: column;
		font-size: 2.35rem; /* ~44px */
		font-weight: 800;
		color: #FFFFFF;
		line-height: 38.5px;
		letter-spacing: -0.015em;
		margin-bottom: 0.55rem;
	}

	.title-line {
		white-space: nowrap;
	}

	.line-1 {
		width: 410px;
	}

	.line-3 {
		width: 402px;
	}

	.gold-highlight {
		color: #F5B331;
	}

	.hero-description {
		font-size: 12.5px;
		line-height: 16.5px;
		color: rgba(255, 255, 255, 0.95);
		margin-bottom: 0.85rem;
		max-width: 440px;
		font-weight: 400;
		letter-spacing: 0;
		text-wrap: pretty;
	}

	.hero-buttons {
		display: flex;
		align-items: center;
		gap: 0.65rem;
	}

	/* Tombol "Konsultasikan Kebutuhan Anda →" ±186×29px (x 235–421) */
	.btn-primary-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		width: 186px;
		height: 29px;
		background: #F5B331;
		color: #071D36;
		font-weight: 700;
		font-size: 10.5px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 8px rgba(245, 179, 49, 0.25);
		transition: all 0.2s ease;
		white-space: nowrap;
		letter-spacing: 0;
	}

	.btn-primary-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	/* Tombol "Jelajahi Program Kami" ±130×29px (x 430–560) */
	.btn-secondary-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 130px;
		height: 29px;
		background: rgba(255, 255, 255, 0.04);
		border: 1.5px solid rgba(255, 255, 255, 0.65);
		color: #FFFFFF;
		font-weight: 700;
		font-size: 10.5px;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s ease;
		white-space: nowrap;
		letter-spacing: 0;
	}

	.btn-secondary-outline:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: #FFFFFF;
	}

	.hero-mobile-photo-band {
		display: none;
	}

	@media (max-width: 1099px) {
		.hero-section {
			height: auto;
			min-height: 320px;
			padding: 2.5rem 0 3.5rem;
		}
		.hero-container {
			padding: 0 2rem;
		}
		.hero-content {
			max-width: 480px;
			margin-top: 0;
		}
		.hero-title {
			font-size: 2.1rem;
			line-height: 1.18;
		}
	}

	@media (max-width: 767px) {
		.hero-section {
			height: auto;
			min-height: unset;
			padding: 2rem 0 0;
			flex-direction: column;
			align-items: stretch;
		}
		.hero-bg-wrapper,
		.hero-gradient-overlay,
		.hero-wave-container {
			display: none;
		}
		.hero-container {
			height: auto;
			padding: 0 1.25rem 2rem;
		}
		.hero-content {
			max-width: 100%;
			margin-top: 0;
		}
		.hero-title {
			font-size: clamp(1.85rem, 7vw, 2.15rem);
			line-height: 1.2;
			margin-bottom: 0.85rem;
		}
		.title-line {
			white-space: normal;
		}
		.line-1,
		.line-3 {
			width: auto;
		}
		.hero-description {
			font-size: 14.5px;
			line-height: 1.5;
			max-width: 100%;
			margin-bottom: 1.25rem;
		}
		.hero-buttons {
			flex-direction: column;
			width: 100%;
			gap: 0.75rem;
		}
		.btn-primary-gold,
		.btn-secondary-outline {
			width: 100%;
			height: 44px;
			font-size: 14px;
		}
		.hero-mobile-photo-band {
			display: block;
			position: relative;
			width: 100%;
			height: 220px;
			overflow: hidden;
		}
		.mobile-band-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 70% center;
			display: block;
		}
		.mobile-band-top-gradient {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 50px;
			background: linear-gradient(to bottom, #082442 0%, transparent 100%);
		}
		.mobile-band-wave {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 160px;
			height: 80px;
			pointer-events: none;
		}
		.mobile-band-wave svg {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
</style>
