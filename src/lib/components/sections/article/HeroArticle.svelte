<script lang="ts">
	// HeroArticle.svelte - Faithful implementation of design/artikel-wawasan.png
</script>

<section class="hero-article">
	<!-- Background image right starting ±x 34% -->
	<div class="hero-bg-wrap">
		<img
			src="/images/article-hero-woman.jpg"
			alt="Artikel & Wawasan SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (Teal gelap #0A5E75, pita turquoise #16B6C1→#079EAD, lengkung putih) -->
	<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 30 C100 45 220 95 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.9" />
		<path d="M0 75 C90 85 190 120 250 160 H0 Z" fill="url(#teal-grad-hero)" />
		<path d="M0 125 C70 130 140 145 190 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-hero" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Accent decoration bottom-right (Emas tipis) -->
	<svg class="hero-wave-right" viewBox="0 0 240 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M240 50 C180 85 120 105 50 120 H240 Z" fill="#F5B331" fill-opacity="0.8" />
		<path d="M240 85 C190 100 140 110 80 120 H240 Z" fill="#16B6C1" fill-opacity="0.6" />
	</svg>

	<!-- Scoped Container (x ±57→1482 on 1536px) -->
	<div class="sch-article-container">
		<div class="hero-content">
			<!-- Pill Tag: Center ±y 107 on 1536px (48px fixed navbar + 59px) -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Artikel & Wawasan</span>
			</div>

			<!-- Headline: 3 baris ±54px weight 800, baris 3 emas #F5B331 -->
			<h1 class="hero-title">
				Wawasan untuk<br />
				Pendidikan yang<br />
				<span class="gold-text">Lebih Baik di Indonesia.</span>
			</h1>

			<!-- Description: putih 3 baris, max-width ±600px tanpa br manual -->
			<p class="hero-desc">
				Temukan berbagai artikel, insight, dan informasi terkini seputar pendidikan, pengembangan talenta, beasiswa, dan inovasi pembelajaran dari tim ahli SDJNusantara.
			</p>

			<!-- Mobile Photo Band (Only visible on mobile ≤ 640px) -->
			<div class="hero-mobile-photo-band" aria-hidden="true">
				<img src="/images/article-hero-woman.jpg" alt="Artikel & Wawasan SDJNusantara" class="mobile-band-img" />
			</div>

			<!-- Buttons: Dasar tombol ±55px di atas batas bawah hero -->
			<div class="hero-btn-row">
				<a href="#artikel-terbaru" class="btn-gold">
					<span>Jelajahi Artikel</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="#newsletter" class="btn-outline">
					<span>Berlangganan Update</span>
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
		justify-content: flex-start;
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

	/* Full-bleed photo on right starting ±x 34%, face intact */
	.hero-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: right 30%;
		display: block;
	}

	/* Fade navy overlay: solid 0–30%, ±0.8 pada 40%, 0 pada ±58% */
	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 30%,
			rgba(8, 36, 66, 0.8) 40%,
			rgba(8, 36, 66, 0.1) 56%,
			rgba(8, 36, 66, 0) 65%
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
		width: 240px;
		height: 120px;
		z-index: 2;
		pointer-events: none;
	}

	.sch-article-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1425px; /* x ±57→1482 on 1536 */
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-article-container {
			max-width: 1500px;
		}
	}

	.hero-content {
		max-width: 620px;
		padding-top: 43px; /* 48px fixed navbar + 43px + 13px = y 104~107px center */
		box-sizing: border-box;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(22, 182, 193, 0.15);
		border: 1px solid rgba(22, 182, 193, 0.45);
		border-radius: 999px;
		padding: 4px 14px;
		margin-bottom: 1.15rem;
		height: 26px;
		box-sizing: border-box;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #16B6C1;
	}

	.pill-label {
		font-size: 11.5px;
		font-weight: 700;
		color: #16B6C1;
		letter-spacing: 0.04em;
	}

	.hero-title {
		font-size: clamp(32px, 2.7vw, 44px);
		line-height: 1.18;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 1rem 0;
	}

	.gold-text {
		color: #F5B331;
	}

	.hero-desc {
		font-size: 14.5px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1.85rem 0;
		max-width: 580px;
		text-wrap: pretty;
	}

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
		width: 190px;
		height: 42px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.3);
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
		width: 205px;
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
		border-color: #16B6C1;
		background: rgba(22, 182, 193, 0.12);
		color: #FFFFFF;
	}

	.hero-mobile-photo-band {
		display: none;
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
				rgba(8, 36, 66, 0.95) 60%,
				rgba(8, 36, 66, 0.8) 100%
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
		.hero-mobile-photo-band {
			display: block;
			width: 100%;
			height: 180px;
			border-radius: 12px;
			overflow: hidden;
			margin: 1.25rem 0;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
		}
		.mobile-band-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
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
