<!-- Section 02: Program Pendidikan untuk Meningkatkan Daya Saing (Mockup Final SDJNusantara) -->
<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="program-edu-section" id="program-pendidikan">
	<!-- Background Organic Curves (Mockup SDJNusantara) -->
	<!-- 1. Top-Left Golden Yellow Layered Wave (Dipertahankan Sesuai Mockup) -->
	<svg class="decor-wave-top-gold" viewBox="0 0 580 150" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<defs>
			<linearGradient id="goldMainGrad" x1="0%" y1="0%" x2="100%" y2="50%">
				<stop offset="0%" stop-color="#FF9E00" />
				<stop offset="45%" stop-color="#FFB51B" />
				<stop offset="100%" stop-color="#FFCE42" />
			</linearGradient>
			<linearGradient id="goldSoftGrad" x1="0%" y1="0%" x2="100%" y2="60%">
				<stop offset="0%" stop-color="#FFE79A" stop-opacity="0.85" />
				<stop offset="50%" stop-color="#FFF2D1" stop-opacity="0.65" />
				<stop offset="100%" stop-color="#FFFDF5" stop-opacity="0.05" />
			</linearGradient>
		</defs>
		<!-- Soft Outer Gold Curve -->
		<path d="M0 0 L0 148 C 160 148, 360 75, 580 0 Z" fill="url(#goldSoftGrad)" />
		<!-- Main Vibrant Gold Curve -->
		<path d="M0 0 L0 110 C 130 110, 290 50, 460 0 Z" fill="url(#goldMainGrad)" />
	</svg>

	<!-- 2. Bottom Cyan/Turquoise Organic Flowing Wave (100% Full Width Viewport, 2 Lapisan Organik Sesuai Mockup) -->
	<svg class="decor-wave-bottom-cyan" viewBox="0 0 1440 130" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<defs>
			<linearGradient id="cyanBackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color="#7DE7F5" stop-opacity="0.85" />
				<stop offset="50%" stop-color="#A5F3FC" stop-opacity="0.9" />
				<stop offset="100%" stop-color="#67E8F9" stop-opacity="0.85" />
			</linearGradient>
			<linearGradient id="cyanFrontGrad" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color="#00C4D6" />
				<stop offset="50%" stop-color="#00D2EA" />
				<stop offset="100%" stop-color="#08A6B5" />
			</linearGradient>
		</defs>
		<!-- Lapisan 1: Cyan Muda / Light Turquoise (Bagian Belakang/Atas) -->
		<path d="M 0 130 L 0 32 C 340 76, 760 84, 1440 22 L 1440 130 Z" fill="url(#cyanBackGrad)" />
		<!-- Lapisan 2: Turquoise / Cyan Lebih Pekat (Bagian Depan) -->
		<path d="M 0 130 L 0 58 C 360 96, 780 102, 1440 46 L 1440 130 Z" fill="url(#cyanFrontGrad)" />
	</svg>

	<div class="program-edu-container">
		<!-- Left: Text & CTA -->
		<div class="program-edu-left">
			<div class="program-badge">
				<span class="badge-dash" aria-hidden="true"></span>
				<span class="badge-text">{i18n.pick('Program Pendidikan', 'Education Programs')}</span>
			</div>
			<h2 class="program-title">
				{i18n.pick('Program Pendidikan untuk', 'Education Programs to')}<br />
				<span class="highlight-cyan">{i18n.pick('Meningkatkan Daya Saing', 'Boost Competitiveness')}</span>
			</h2>
			<p class="program-desc">
				{i18n.pick(
					'Program unggulan yang dirancang untuk mendukung peningkatan kompetensi, akses pendidikan, dan peluang karier.',
					'Flagship programs designed to elevate competencies, expand education access, and unlock career opportunities.'
				)}
			</p>
			<a href="/program" class="program-btn">
				<span>{i18n.pick('Lihat Program Pendidikan', 'View Education Programs')}</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Right: Photo with Floating Book Badge & Decorative Corner Ribbons -->
		<div class="program-edu-right">
			<div class="photo-wrapper">
				<!-- Top-Left Floating Book Badge with Golden Rays -->
				<div class="floating-badge-wrap" aria-hidden="true">
					<!-- 3 Sparkle rays above badge -->
					<div class="badge-sun-rays">
						<span class="ray ray-left"></span>
						<span class="ray ray-mid"></span>
						<span class="ray ray-right"></span>
					</div>
					<!-- Turquoise Badge Icon Box with Book Icon -->
					<div class="floating-badge-box">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
						</svg>
					</div>
				</div>

				<!-- Main Study Desk & Laptop Image -->
				<div class="img-frame">
					<img
						src="/images/program-study-desk-laptop.jpg"
						alt="Program Pendidikan SDJNusantara - Suasana Belajar & Laptop"
						class="program-img"
						loading="eager"
					/>
					<!-- Decorative curve ribbons on bottom-right (Layered Yellow & Cyan curves) -->
					<svg class="deco-corner-ribbon" viewBox="0 0 160 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<!-- Outer Yellow Ribbon -->
						<path d="M0 100 C50 96 110 75 160 20 V100 H0 Z" fill="#FFB900"/>
						<!-- Inner Cyan Ribbon -->
						<path d="M35 100 C80 96 125 78 160 45 V100 H35 Z" fill="#00C2D8"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.program-edu-section {
		position: relative;
		background: #FFFFFF;
		padding: 76px 0 96px;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}

	/* Background Organic Waves */
	.decor-wave-top-gold {
		position: absolute;
		top: 0;
		left: 0;
		width: clamp(340px, 38vw, 560px);
		height: clamp(96px, 10.5vw, 150px);
		pointer-events: none;
		z-index: 1;
	}

	.decor-wave-bottom-cyan {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: clamp(80px, 9.5vw, 130px);
		pointer-events: none;
		z-index: 1;
	}

	.program-edu-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1240px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 60px;
		box-sizing: border-box;
	}

	.program-edu-left {
		flex: 0 0 480px;
		max-width: 480px;
	}

	.program-badge {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 14px;
	}

	.badge-dash {
		display: inline-block;
		width: 20px;
		height: 3px;
		background: #00B8C7;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 14px;
		font-weight: 700;
		color: #00B8C7;
		letter-spacing: 0.01em;
	}

	.program-title {
		font-size: clamp(30px, 3.2vw, 42px);
		line-height: 1.22;
		font-weight: 900;
		color: #0B2B50;
		margin: 0 0 16px;
		letter-spacing: -0.02em;
	}

	.highlight-cyan {
		color: #00B8C7;
	}

	.program-desc {
		font-size: clamp(14px, 1.15vw, 15.5px);
		line-height: 1.65;
		color: #71839D;
		margin: 0 0 28px;
		max-width: 480px;
	}

	.program-btn {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: #FFB900;
		color: #081525;
		font-size: 14px;
		font-weight: 800;
		padding: 12px 24px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 185, 0, 0.35);
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.program-btn:hover {
		background: #FFA500;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 165, 0, 0.45);
	}

	/* Right Column: Photo with Floating Badge */
	.program-edu-right {
		flex: 1;
		min-width: 0;
		position: relative;
	}

	.photo-wrapper {
		position: relative;
		width: 100%;
	}

	/* Floating badge top-left */
	.floating-badge-wrap {
		position: absolute;
		top: -16px;
		left: -16px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.badge-sun-rays {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		gap: 6px;
		margin-bottom: 4px;
	}

	.badge-sun-rays .ray {
		display: inline-block;
		width: 3px;
		height: 8px;
		background: #FFB900;
		border-radius: 2px;
	}

	.badge-sun-rays .ray-left {
		transform: rotate(-30deg);
	}

	.badge-sun-rays .ray-mid {
		height: 10px;
	}

	.badge-sun-rays .ray-right {
		transform: rotate(30deg);
	}

	.floating-badge-box {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: #00B8C7;
		border: 3.5px solid #FFFFFF;
		box-shadow: 0 6px 18px rgba(0, 184, 199, 0.35);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img-frame {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9.2;
		border-radius: 22px;
		overflow: hidden;
		box-shadow: 0 16px 36px rgba(11, 41, 72, 0.08);
		border: 3px solid #FFFFFF;
		background: #F1F5F9;
	}

	.program-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}

	.photo-wrapper:hover .program-img {
		transform: scale(1.02);
	}

	.deco-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 160px;
		height: 100px;
		pointer-events: none;
		z-index: 2;
	}

	/* Responsive Tablet */
	@media (max-width: 1024px) {
		.program-edu-container {
			gap: 36px;
			padding: 0 24px;
		}

		.program-edu-left {
			flex: 0 0 380px;
			max-width: 380px;
		}

		.program-title {
			font-size: 28px;
		}
	}

	/* Responsive Mobile */
	@media (max-width: 768px) {
		.program-edu-section {
			padding: 56px 0 76px;
		}

		.decor-wave-top-gold {
			width: 260px;
			height: 75px;
		}

		.decor-wave-bottom-cyan {
			height: 65px;
		}

		.program-edu-container {
			flex-direction: column;
			text-align: center;
			gap: 36px;
			padding: 0 20px;
		}

		.program-edu-left {
			max-width: 100%;
			flex: 1 1 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.program-desc {
			max-width: 100%;
		}

		.program-edu-right {
			width: 100%;
		}

		.floating-badge-wrap {
			top: -12px;
			left: 4px;
		}

		.floating-badge-box {
			width: 44px;
			height: 44px;
		}
	}
</style>
