<script lang="ts">
</script>

<section class="hero-education" id="hero-pendidikan">
	<!-- Background image full-bleed right with smooth navy fade -->
	<div class="hero-bg-wrap">
		<img
			src="/images/partner-hero-5.jpg"
			alt="Layanan Pendidikan SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Single unified bottom wave (continuous white curve + teal/gold ribbons) -->
	<svg class="hero-bottom-wave" viewBox="0 0 1536 72" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<defs>
			<linearGradient id="teal-ribbon-left-edu" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="#16B6C1" />
				<stop offset="100%" stop-color="#079EAD" />
			</linearGradient>
			<linearGradient id="teal-ribbon-right-edu" x1="0" y1="1" x2="1" y2="0">
				<stop offset="0%" stop-color="#079EAD" />
				<stop offset="100%" stop-color="#16B6C1" />
			</linearGradient>
		</defs>

		<!-- 1. Left Dark Teal Curve (#0A5E75) -->
		<path d="M0,0 C90,2 170,22 250,72 L0,72 Z" fill="#0A5E75" />

		<!-- 2. Left Turquoise Ribbon (#16B6C1 -> #079EAD) -->
		<path d="M0,16 C95,18 190,36 290,72 L0,72 Z" fill="url(#teal-ribbon-left-edu)" />

		<!-- 3. Right Turquoise Wave -->
		<path d="M1260,72 C1350,56 1445,26 1536,12 L1536,72 Z" fill="url(#teal-ribbon-right-edu)" />

		<!-- 4. Right Gold Ribbon (#F5B331) -->
		<path d="M1380,72 C1445,62 1495,46 1536,34 L1536,72 Z" fill="#F5B331" />

		<!-- 5. Continuous White Layer (#FFFFFF) - seamless with section below -->
		<path d="M0,34 C70,20 150,18 230,38 C330,62 490,68 768,68 C1046,68 1210,58 1330,42 C1415,32 1475,38 1536,46 L1536,72 L0,72 Z" fill="#FFFFFF" />
	</svg>

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Fokus Pendidikan</span>
			</div>

			<!-- Headline -->
			<h1 class="hero-title">
				Layanan Kami untuk<br />
				Pendidikan yang Lebih Baik<br />
				<span class="gold-text">dan Talenta yang Lebih Unggul.</span>
			</h1>

			<!-- Description -->
			<p class="hero-desc">
				SDJNusantara menyediakan layanan pendidikan, pengembangan talenta, beasiswa, dan pendampingan profesional untuk mendukung potensi terbaik Anda.
			</p>

			<!-- Buttons Row -->
			<div class="hero-btn-row">
				<a href="/kontak" class="btn-gold">
					<span>Konsultasikan Kebutuhan Anda</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="#solusi-terintegrasi" class="btn-outline">
					<span>Jelajahi Layanan Kami</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-education {
		position: relative;
		width: 100%;
		height: 445px;
		background: #082442;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 48px;
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

	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.hero-text-col {
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

	/* Headline */
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
		width: 250px;
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
		.hero-education {
			height: auto;
			padding: 4.5rem 0 3rem;
		}
		.hero-container {
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
		.hero-bottom-wave {
			height: 56px;
		}
	}

	@media (max-width: 640px) {
		.hero-bg-wrap {
			display: none;
		}
		.hero-title {
			font-size: 28px;
			line-height: 1.25;
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
