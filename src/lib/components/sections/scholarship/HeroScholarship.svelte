<script lang="ts">
	// HeroScholarship.svelte - Faithful to design/beasiswa.png
</script>

<section class="hero-scholarship">
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

	<!-- Wave decoration bottom-left -->
	<svg class="hero-wave" viewBox="0 0 320 160" fill="none" preserveAspectRatio="none">
		<path d="M0 40 C70 40 140 100 240 160 H0 Z" fill="#0A5E75" fill-opacity="0.9" />
		<path d="M0 90 C80 90 150 130 220 160 H0 Z" fill="url(#teal-grad-sch)" />
		<path d="M0 135 C60 135 120 150 170 160 H0 Z" fill="#FFFFFF" />
		<defs>
			<linearGradient id="teal-grad-sch" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
		</defs>
	</svg>

	<!-- Wave decoration bottom-right -->
	<svg class="hero-wave-right" viewBox="0 0 160 160" fill="none" preserveAspectRatio="none">
		<path d="M160 40 C110 70 70 115 30 160 H160 Z" fill="#F4B334" fill-opacity="0.8" />
		<path d="M160 85 C125 110 95 135 65 160 H160 Z" fill="#16B6C1" />
		<path d="M160 130 C140 142 120 152 95 160 H160 Z" fill="#FFFFFF" />
	</svg>

	<div class="hero-container">
		<div class="hero-inner-row">
			<!-- Left Text Column -->
			<div class="hero-text-col">
				<!-- Pill Tag -->
				<div class="pill-tag">
					<span class="pill-dot"></span>
					<span class="pill-label">Beasiswa</span>
				</div>

				<!-- Headline -->
				<h1 class="hero-title">
					Akses Informasi Beasiswa<br />
					untuk Masa Depan<br />
					<span class="gold-text">yang Lebih Luas.</span>
				</h1>

				<!-- Description -->
				<p class="hero-desc">
					SDJNusantara menghadirkan informasi beasiswa dari dalam dan luar negeri yang terpercaya, lengkap, dan terstruktur untuk membantu Anda meraih peluang pendidikan terbaik.
				</p>

				<!-- Buttons -->
				<div class="hero-btn-row">
					<a href="#cari-beasiswa" class="btn-gold">
						<span>Konsultasi Beasiswa</span>
						<span class="btn-arrow">→</span>
					</a>
					<a href="#panduan-persiapan" class="btn-outline">
						<span>Panduan Persiapan</span>
					</a>
				</div>
			</div>

			<!-- Floating Quote Card on Right -->
			<div class="hero-quote-col">
				<div class="quote-card">
					<div class="quote-icon">
						<svg width="22" height="16" viewBox="0 0 24 18" fill="none">
							<path
								d="M0 18V11.25C0 5.4 3.6 1.8 10.8 0L12 2.7C7.2 3.6 4.8 6.3 4.8 10.8H10.8V18H0ZM13.2 18V11.25C13.2 5.4 16.8 1.8 24 0L25.2 2.7C20.4 3.6 18 6.3 18 10.8H24V18H13.2Z"
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
		height: 350px;
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
		object-position: right 25%;
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
			#082442 38%,
			rgba(8, 36, 66, 0.88) 55%,
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

	.hero-wave-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 180px;
		height: 150px;
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

	.hero-inner-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.hero-text-col {
		max-width: 520px;
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

	.btn-outline {
		display: inline-flex;
		align-items: center;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.35);
		color: #FFFFFF;
		padding: 7px 16px;
		font-size: 11px;
		font-weight: 600;
		border-radius: 7px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.btn-outline:hover {
		border-color: #00A6B2;
		color: #00A6B2;
	}

	.btn-arrow {
		font-size: 12px;
	}

	/* Floating Quote Card */
	.hero-quote-col {
		flex-shrink: 0;
	}

	.quote-card {
		width: 190px;
		background: #FFFFFF;
		border-radius: 14px;
		padding: 1.15rem 1rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
	}

	.quote-icon {
		margin-bottom: 0.5rem;
	}

	.quote-text {
		font-size: 10px;
		line-height: 15px;
		color: #1E293B;
		font-weight: 500;
		margin: 0 0 0.65rem 0;
	}

	.quote-author {
		font-size: 9.5px;
		font-weight: 700;
		color: #082442;
	}

	@media (max-width: 900px) {
		.hero-scholarship {
			height: auto;
			padding: 4rem 1rem 3rem;
		}
		.hero-inner-row {
			flex-direction: column;
			align-items: flex-start;
		}
		.quote-card {
			width: 100%;
		}
	}
</style>
