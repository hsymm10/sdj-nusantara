<script lang="ts">
	// HeroScholarship.svelte - Replicated faithfully from design/beasiswa.png (1536px target)
</script>

<section class="hero-scholarship">
	<!-- Background image & navy fade overlay -->
	<div class="hero-bg-wrap">
		<img
			src="/images/scholarship-hero-woman.jpg"
			alt="Beasiswa SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (Teal / Turquoise curves hugging left edge) -->
	<svg class="hero-wave-left" viewBox="0 0 180 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path
			d="M0,40 C30,70 60,130 95,200 L0,200 Z"
			fill="#084252"
			fill-opacity="0.75"
		/>
		<path
			d="M0,75 C25,100 50,145 78,200 L0,200 Z"
			fill="#00A6B2"
		/>
	</svg>

	<!-- Curved accents bottom-right (Turquoise & Gold in bottom right corner) -->
	<svg class="hero-wave-right" viewBox="0 0 160 150" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<!-- Turquoise curved band -->
		<path
			d="M160,20 C110,60 70,105 40,150 L80,150 C105,115 130,80 160,50 Z"
			fill="#00A6B2"
		/>
		<!-- Gold curved band in corner -->
		<path
			d="M160,75 C130,100 100,125 78,150 L160,150 Z"
			fill="#F5B331"
		/>
	</svg>

	<!-- Main Content Container (x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px) -->
	<div class="hero-container">
		<div class="hero-inner-row">
			<!-- Left Column: Pill, Title, Desc, Buttons -->
			<div class="hero-text-col">
				<!-- Pill Tag (centered vertically at y≈113px on viewport 1536) -->
				<div class="pill-tag">
					<span class="pill-dot"></span>
					<span class="pill-label">Beasiswa</span>
				</div>

				<!-- Title (3 lines, line 3 gold #F5B331) -->
				<h1 class="hero-title">
					<span class="title-line">Akses Informasi Beasiswa</span>
					<span class="title-line">untuk Masa Depan</span>
					<span class="title-line gold-text">yang Lebih Luas.</span>
				</h1>

				<!-- Description (3 lines, max-width 560px) -->
				<p class="hero-desc">
					SDJNusantara menghadirkan informasi beasiswa dari dalam<br />
					dan luar negeri yang terpercaya, lengkap, dan terstruktur untuk<br />
					membantu Anda meraih peluang pendidikan terbaik.
				</p>

				<!-- Buttons (Gold "Konsultasi Beasiswa →" + Outline "Panduan Persiapan", center y≈396) -->
				<div class="hero-btn-row">
					<a href="/konsultasi" class="btn-gold">
						<span>Konsultasi Beasiswa</span>
						<span class="btn-arrow" aria-hidden="true">→</span>
					</a>
					<a href="#panduan-persiapan" class="btn-outline">
						<span>Panduan Persiapan</span>
					</a>
				</div>
			</div>

			<!-- Right Column: Floating Quote Card (x 1206→1464, y 135→405) -->
			<div class="hero-quote-col">
				<div class="quote-card">
					<div class="quote-icon" aria-hidden="true">
						<svg width="26" height="20" viewBox="0 0 26 20" fill="none">
							<path
								d="M0 20V12.2C0 5.8 4 2 11.5 0L12.8 3C7.5 4 4.8 7 4.8 12H11.5V20H0ZM14.5 20V12.2C14.5 5.8 18.5 2 26 0L27.3 3C22 4 19.3 7 19.3 12H26V20H14.5Z"
								fill="#00A6B2"
							/>
						</svg>
					</div>
					<p class="quote-text">
						Pendidikan membuka peluang, beasiswa memperluas jangkauan, dan persiapan yang tepat membawa Anda lebih dekat pada masa depan yang diimpikan.
					</p>
					<span class="quote-author">SDJNusantara</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-scholarship {
		position: relative;
		width: 100%;
		height: 415px;
		background: #082442;
		overflow: hidden;
		display: flex;
		align-items: flex-start;
		box-sizing: border-box;
		padding-top: 52px; /* Places pill center at y≈113px from viewport top with 48px fixed navbar */
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
		width: 60%;
		height: 100%;
		object-fit: cover;
		object-position: right 20%;
		display: block;
	}

	/* Navy gradient overlay: solid 0–32%, ±0.8 at 42%, 0 at ±58% */
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
			rgba(8, 36, 66, 0.82) 42%,
			rgba(8, 36, 66, 0) 58%,
			rgba(8, 36, 66, 0) 100%
		);
	}

	/* SVG Waves */
	.hero-wave-left {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 180px;
		height: 200px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-wave-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 160px;
		height: 150px;
		z-index: 2;
		pointer-events: none;
	}

	/* Container: x 78→1458 on 1536 (width 1380px), max-width 1500px on >=1920px */
	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px; /* Left edge at 78 + 54 = 132px, matches mockup x=131 */
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hero-container {
			max-width: 1500px;
		}
	}

	.hero-inner-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 2.5rem;
		width: 100%;
	}

	.hero-text-col {
		max-width: 660px;
		flex: 1;
	}

	/* Pill Tag: center at y≈113px from viewport top */
	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 4px 14px;
		background: rgba(0, 166, 178, 0.18);
		border: 1px solid rgba(0, 166, 178, 0.45);
		border-radius: 999px;
		margin-bottom: 10px;
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

	/* H1 3 lines, weight 800, line 3 gold #F5B331 */
	.hero-title {
		font-size: clamp(32px, 2.75vw, 42px);
		line-height: 1.16;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 14px 0;
		letter-spacing: -0.015em;
		display: flex;
		flex-direction: column;
	}

	.title-line {
		display: block;
		white-space: nowrap;
	}

	.gold-text {
		color: #F5B331;
	}

	/* Description 3 lines, max-width ±560px */
	.hero-desc {
		font-size: 13.5px;
		line-height: 20px;
		color: rgba(255, 255, 255, 0.88);
		margin: 0 0 20px 0;
		max-width: 560px;
	}

	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	/* Gold Button ±212×45px, center y≈396 */
	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 212px;
		height: 45px;
		background: #F5B331;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.28);
		box-sizing: border-box;
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
		box-shadow: 0 6px 18px rgba(245, 179, 49, 0.35);
	}

	.btn-arrow {
		font-size: 16px;
		font-weight: 700;
		transition: transform 0.2s ease;
	}

	.btn-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Outline Button ±182×45px */
	.btn-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 182px;
		height: 45px;
		background: rgba(255, 255, 255, 0.08);
		border: 1.5px solid rgba(255, 255, 255, 0.75);
		color: #FFFFFF;
		font-size: 14px;
		font-weight: 600;
		border-radius: 8px;
		text-decoration: none;
		box-sizing: border-box;
		transition: all 0.2s ease;
	}

	.btn-outline:hover {
		border-color: #00A6B2;
		color: #00A6B2;
		background: rgba(0, 166, 178, 0.12);
	}

	/* Floating Quote Card: x 1206→1464 (width ~256px), y 135→405 (height ~267px) */
	.hero-quote-col {
		flex-shrink: 0;
		margin-top: 36px; /* Aligns quote card at y=136 on 1536px */
	}

	.quote-card {
		width: 256px;
		height: 267px;
		background: #FFFFFF;
		border-radius: 18px;
		padding: 24px 22px 20px 22px;
		box-shadow: 0 14px 34px rgba(7, 26, 48, 0.22);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.quote-icon {
		margin-bottom: 12px;
	}

	.quote-text {
		font-size: 12px;
		line-height: 18px;
		color: #1E293B;
		font-weight: 500;
		margin: 0;
		flex: 1;
	}

	.quote-author {
		font-size: 13px;
		font-weight: 800;
		color: #082442;
		margin-top: 12px;
	}

	@media (max-width: 1024px) {
		.hero-scholarship {
			height: auto;
			min-height: 440px;
			padding: 40px 1.5rem 48px;
		}
		.hero-container {
			padding: 0 1rem;
		}
		.hero-inner-row {
			flex-direction: column;
			align-items: flex-start;
		}
		.hero-quote-col {
			margin-top: 1.5rem;
			width: 100%;
		}
		.quote-card {
			width: 100%;
			max-width: 420px;
			height: auto;
			min-height: auto;
		}
		.hero-img {
			width: 100%;
			opacity: 0.25;
		}
	}

	@media (max-width: 640px) {
		.hero-btn-row {
			flex-direction: column;
			align-items: stretch;
			width: 100%;
		}
		.btn-gold,
		.btn-outline {
			width: 100%;
		}
	}
</style>
