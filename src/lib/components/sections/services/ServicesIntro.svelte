<script lang="ts">
	// ServicesIntro.svelte - Replikasi presisi sesuai design/layanan.png (Tinggi ±311px pada 1536)
</script>

<section class="services-intro">
	<!-- Swoosh turquoise top-right slightly entering the overlap area -->
	<svg class="intro-swoosh-tr" viewBox="0 0 200 100" fill="none" preserveAspectRatio="none">
		<path d="M0 0 C60 40 130 75 200 100 V0 H0 Z" fill="#00A6B2" fill-opacity="0.35"/>
	</svg>

	<div class="intro-container">
		<div class="intro-grid">
			<!-- Left: Label, Heading, Description -->
			<div class="intro-left">
				<div class="section-label">— Layanan</div>

				<h2 class="intro-title">
					Solusi Terintegrasi untuk<br />
					Mengembangkan Potensi Anda
				</h2>

				<p class="intro-desc">
					Kami menghadirkan lima layanan utama yang dirancang secara terintegrasi untuk menjawab kebutuhan pendidikan, pengembangan talenta, dan kolaborasi strategis.
				</p>
			</div>

			<!-- Middle: Quote Card -->
			<div class="intro-quote-card">
				<div class="quote-icon">
					<!-- Turquoise double quote mark -->
					<svg width="28" height="28" viewBox="0 0 24 24" fill="#00A6B2">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
				</div>
				<p class="quote-text">
					Setiap layanan kami dirancang berdasarkan pengalaman, riset, dan kebutuhan nyata di lapangan.
				</p>
				<span class="quote-author">SDJNusantara</span>
			</div>

			<!-- Right: Spacer for Blob Image that touches screen edge -->
			<div class="intro-right-spacer"></div>
		</div>
	</div>

	<!-- Right Blob Image: menempel tepi kanan layar, tinggi penuh section (311px), lengkung cembung kiri -->
	<div class="intro-blob-wrapper">
		<!-- Crescent emas di kiri-bawah foto -->
		<svg class="crescent-gold" viewBox="0 0 100 100" fill="none">
			<path d="M0 60 C25 90 60 100 95 90 C50 80 30 50 20 15 Z" fill="#F5B331"/>
		</svg>

		<div class="blob-mask">
			<img
				src="/images/services-building.jpg"
				alt="Gedung Kampus SDJNusantara"
				class="blob-photo"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<style>
	.services-intro {
		position: relative;
		background: #FFFFFF;
		height: 311px;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		border-bottom: 1px solid #F1F5F9;
	}

	.intro-swoosh-tr {
		position: absolute;
		top: 0;
		right: 0;
		width: 240px;
		height: 90px;
		z-index: 1;
		pointer-events: none;
	}

	.intro-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.intro-container {
			max-width: 1500px;
		}
	}

	.intro-grid {
		display: grid;
		grid-template-columns: 1.1fr 0.95fr 1.15fr;
		gap: 2.5rem;
		align-items: center;
	}

	/* Left */
	.intro-left {
		display: flex;
		flex-direction: column;
		max-width: 480px;
	}

	.section-label {
		font-size: 13px;
		font-weight: 600;
		color: #00A6B2;
		margin-bottom: 0.35rem;
		letter-spacing: 0;
	}

	.intro-title {
		font-size: clamp(26px, 2.3vw, 34px);
		line-height: 1.18;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.75rem 0;
		letter-spacing: -0.015em;
	}

	.intro-desc {
		font-size: 13px;
		line-height: 1.55;
		color: #183553;
		margin: 0;
		text-wrap: pretty;
	}

	/* Middle Quote Card */
	.intro-quote-card {
		background: #F4F8FB;
		border-radius: 16px;
		padding: 1.5rem 1.6rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0 6px 20px rgba(11, 39, 71, 0.04);
		border: 1px solid rgba(226, 232, 240, 0.7);
		max-width: 380px;
		box-sizing: border-box;
	}

	.quote-icon {
		margin-bottom: 0.5rem;
	}

	.quote-text {
		font-size: 13px;
		line-height: 1.5;
		color: #082442;
		font-weight: 500;
		margin: 0 0 0.85rem 0;
		text-wrap: pretty;
	}

	.quote-author {
		font-size: 13px;
		font-weight: 800;
		color: #0B2747;
	}

	.intro-right-spacer {
		width: 100%;
	}

	/* Right Blob attached to screen edge */
	.intro-blob-wrapper {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: calc((100% - 1400px) / 2 + 480px);
		min-width: 440px;
		z-index: 2;
		pointer-events: none;
	}

	@media (max-width: 1440px) {
		.intro-blob-wrapper {
			width: 480px;
		}
	}

	.blob-mask {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		border-top-left-radius: 140px;
		border-bottom-left-radius: 140px;
		overflow: hidden;
		box-shadow: -8px 0 24px rgba(11, 39, 71, 0.08);
	}

	.blob-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.crescent-gold {
		position: absolute;
		bottom: 8px;
		left: -20px;
		width: 70px;
		height: 70px;
		z-index: 3;
		pointer-events: none;
	}

	@media (max-width: 1024px) {
		.services-intro {
			height: auto;
			padding: 3rem 0;
		}
		.intro-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.intro-blob-wrapper {
			display: none;
		}
	}
</style>
