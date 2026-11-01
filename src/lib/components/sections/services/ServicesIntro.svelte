<script lang="ts">
	// ServicesIntro.svelte - Faithful to design/layanan.png
</script>

<section class="services-intro">
	<div class="intro-container">
		<div class="intro-grid">
			<!-- Left: Heading & Desc -->
			<div class="intro-left">
				<div class="section-label">
					<span class="label-line"></span>
					<span class="label-text">Layanan</span>
				</div>

				<h2 class="intro-title">
					Solusi Terintegrasi untuk Mengembangkan Potensi Anda
				</h2>

				<p class="intro-desc">
					Kami menghadirkan lima layanan utama yang dirancang secara terintegrasi untuk menjawab kebutuhan pendidikan, pengembangan talenta, dan kolaborasi strategis.
				</p>
			</div>

			<!-- Middle: Quote Card -->
			<div class="intro-quote-card">
				<div class="quote-icon">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="#00A6B2">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
				</div>
				<p class="quote-text">
					Setiap layanan kami dirancang berdasarkan pengalaman, riset, dan kebutuhan nyata di lapangan.
				</p>
				<span class="quote-author">SDJNusantara</span>
			</div>

			<!-- Right: Building Blob with decorations -->
			<div class="intro-image-wrap">
				<!-- Crescent gold -->
				<svg class="crescent-gold" viewBox="0 0 100 100" fill="none">
					<path d="M0 50 C20 80 50 100 90 90 C50 80 30 50 25 10 Z" fill="#F4B334"/>
				</svg>

				<!-- Swoosh teal top-right -->
				<svg class="swoosh-tr" viewBox="0 0 140 80" fill="none">
					<path d="M0 0 C40 30 90 60 140 80 V0 H0 Z" fill="#00A6B2" fill-opacity="0.4"/>
				</svg>

				<div class="blob-frame">
					<img
						src="/images/services-building.jpg"
						alt="Kampus Modern"
						class="blob-img"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.services-intro {
		background: #FFFFFF;
		padding: 2.5rem 0 3.5rem;
		border-bottom: 1px solid #E2E8F0;
		overflow: hidden;
	}

	.intro-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.intro-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr 1.15fr;
		gap: 2rem;
		align-items: center;
	}

	/* Left */
	.intro-left {
		display: flex;
		flex-direction: column;
	}

	.section-label {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 0.4rem;
	}

	.label-line {
		width: 16px;
		height: 2px;
		background: #00A6B2;
	}

	.label-text {
		font-size: 11px;
		font-weight: 700;
		color: #00A6B2;
	}

	.intro-title {
		font-size: 21px;
		font-weight: 800;
		color: #082442;
		line-height: 28px;
		margin: 0 0 0.75rem 0;
		letter-spacing: -0.01em;
	}

	.intro-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #475569;
		margin: 0;
	}

	/* Middle Quote */
	.intro-quote-card {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 1.5rem 1.4rem;
		position: relative;
	}

	.quote-icon {
		margin-bottom: 0.65rem;
	}

	.quote-text {
		font-size: 11.5px;
		line-height: 18px;
		color: #1E293B;
		font-weight: 600;
		margin: 0 0 0.85rem 0;
	}

	.quote-author {
		font-size: 10.5px;
		font-weight: 700;
		color: #00A6B2;
	}

	/* Right Image */
	.intro-image-wrap {
		position: relative;
		width: 100%;
		height: 180px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.crescent-gold {
		position: absolute;
		left: 10px;
		bottom: -15px;
		width: 70px;
		height: 70px;
		z-index: 2;
		pointer-events: none;
	}

	.swoosh-tr {
		position: absolute;
		top: -10px;
		right: 0;
		width: 120px;
		height: 60px;
		z-index: 2;
		pointer-events: none;
	}

	.blob-frame {
		position: relative;
		z-index: 1;
		width: 90%;
		height: 100%;
		border-top-left-radius: 90px;
		border-bottom-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 90px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(11, 39, 71, 0.08);
	}

	.blob-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (max-width: 900px) {
		.intro-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
