<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const services = [
		{
			num: '01',
			titleLine1: 'Talent Management &',
			titleLine2: 'Development Center',
			href: '/layanan#talent-management',
			icon: 'users'
		},
		{
			num: '02',
			titleLine1: 'Scholarship',
			titleLine2: 'Academy',
			href: '/layanan#scholarship-academy',
			icon: 'grad'
		},
		{
			num: '03',
			titleLine1: 'Skills Development &',
			titleLine2: 'Certification',
			href: '/layanan#skills-development',
			icon: 'award'
		},
		{
			num: '04',
			titleLine1: 'Institutional',
			titleLine2: 'Partnership',
			href: '/layanan#institutional-partnership',
			icon: 'handshake'
		}
	];
</script>

<section class="services-section">
	<!-- Background Ornaments (Sesuai Mockup Referensi) -->
	<!-- 1. Top Right Soft Cyan Layered Curves -->
	<svg class="decor-top-right" viewBox="0 0 380 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M60 0 C160 110 270 120 380 40 V0 H60 Z" fill="#00A6B2" fill-opacity="0.12" />
		<path d="M0 0 C130 90 250 90 380 20 V0 H0 Z" fill="#00A6B2" fill-opacity="0.05" />
	</svg>

	<!-- 2. Bottom Left Soft Cyan Wave -->
	<svg class="decor-bottom-left" viewBox="0 0 320 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 200 C80 140 180 130 320 200 H0 Z" fill="#00A6B2" fill-opacity="0.07" />
		<path d="M0 160 C70 110 150 110 260 200 H0 Z" fill="#00A6B2" fill-opacity="0.03" />
	</svg>

	<!-- 3. Bottom Right Signature Brand Diagonal Ribbon Swoosh (Teal, Turquoise, Gold) -->
	<svg class="decor-bottom-right" viewBox="0 0 320 140" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 140 C110 120 215 70 320 22 V140 H0 Z" fill="#008C99" />
		<path d="M45 140 C140 125 235 80 320 34 V140 H45 Z" fill="#00A6B2" />
		<path d="M130 140 C190 130 255 95 320 54 V140 H130 Z" fill="#8CE0E7" />
		<path d="M175 140 C230 132 275 104 320 72 V140 H175 Z" fill="#FFB822" />
	</svg>

	<div class="services-container">
		<!-- Area Heading Sesuai Mockup -->
		<div class="services-header-box">
			<div class="section-label">LAYANAN KAMI</div>
			<h2 class="services-title">
				Solusi Pendidikan &amp; <span class="highlight-gold">Pengembangan Talenta</span>
			</h2>
			<p class="services-subtitle">
				{i18n.pick(
					'Layanan utama untuk mendukung perjalanan pendidikan dan pengembangan diri Anda.',
					'Core services to support your educational journey and personal growth.'
				)}
			</p>
		</div>

		<!-- Area 4 Service Cards Horizontal -->
		<div class="services-cards-grid">
			{#each services as svc}
				<a href={svc.href} class="service-card-item">
					<!-- Ikon di Sisi Kiri (Rounded Square Cyan/Teal Muda) -->
					<div class="svc-icon-box" aria-hidden="true">
						{#if svc.icon === 'users'}
							<!-- 01: Talent Management & Development Center (Users) -->
							<svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						{:else if svc.icon === 'grad'}
							<!-- 02: Scholarship Academy (Graduation Cap) -->
							<svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
								<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
							</svg>
						{:else if svc.icon === 'award'}
							<!-- 03: Skills Development & Certification (Award Ribbon Badge with Star) -->
							<svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="8.5" r="5.5"></circle>
								<polygon points="12 5.5 12.8 7.3 14.8 7.5 13.3 8.9 13.7 10.8 12 9.8 10.3 10.8 10.7 8.9 9.2 7.5 11.2 7.3 12 5.5" stroke-width="1.3"></polygon>
								<path d="M8.2 13.8L7 22l5-3 5 3-1.2-8.2"></path>
							</svg>
						{:else if svc.icon === 'handshake'}
							<!-- 04: Institutional Partnership (Handshake) -->
							<svg width="27" height="27" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="20" stroke-linecap="round" stroke-linejoin="round">
								<path d="M104,152l-24,24a24,24,0,0,1-33.94,0L28.69,158.63a24,24,0,0,1,0-33.94L64,89.37"></path>
								<path d="M152,104l24-24a24,24,0,0,1,33.94,0l17.37,17.37a24,24,0,0,1,0,33.94L192,166.63"></path>
								<path d="M64,89.37,97.37,122.75a16,16,0,0,0,22.63,0l36-36a16,16,0,0,1,22.63,0L192,100"></path>
								<path d="M104,152l33.37,33.37a16,16,0,0,0,22.63,0l32-32"></path>
								<line x1="88" y1="136" x2="104" y2="152"></line>
								<line x1="120" y1="168" x2="136" y2="184"></line>
							</svg>
						{/if}
					</div>

					<!-- Nomor Layanan & Nama Layanan -->
					<div class="svc-text-wrap">
						<span class="svc-num">{svc.num}</span>
						<h3 class="svc-title">
							<span>{svc.titleLine1}</span>
							<span>{svc.titleLine2}</span>
						</h3>
					</div>

					<!-- Tombol Panah Lingkaran di Sisi Kanan -->
					<div class="svc-arrow-circle" aria-hidden="true">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.services-section {
		background: #FFFFFF;
		width: 100%;
		position: relative;
		padding: 60px 0 70px;
		box-sizing: border-box;
		overflow: hidden;
	}

	/* Ornamen Dekoratif di Background */
	.decor-top-right {
		position: absolute;
		top: 0;
		right: 0;
		width: clamp(240px, 24vw, 380px);
		height: auto;
		pointer-events: none;
		z-index: 0;
	}

	.decor-bottom-left {
		position: absolute;
		bottom: 0;
		left: 0;
		width: clamp(200px, 20vw, 320px);
		height: auto;
		pointer-events: none;
		z-index: 0;
	}

	.decor-bottom-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: clamp(220px, 22vw, 340px);
		height: auto;
		pointer-events: none;
		z-index: 0;
	}

	.services-container {
		max-width: 1300px;
		margin: 0 auto;
		padding: 0 2rem;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
	}

	/* Area Heading */
	.services-header-box {
		margin-bottom: 2.25rem;
		text-align: left;
	}

	.section-label {
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.services-title {
		font-size: clamp(28px, 2.6vw, 36px);
		font-weight: 800;
		color: #082442;
		line-height: 1.22;
		letter-spacing: -0.015em;
		margin: 0 0 0.5rem 0;
	}

	.highlight-gold {
		color: #FFB822;
	}

	.services-subtitle {
		font-size: 15.5px;
		color: #556987;
		margin: 0;
		line-height: 1.5;
		letter-spacing: 0;
	}

	/* 4 Service Cards Grid */
	.services-cards-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
		align-items: stretch;
		width: 100%;
		box-sizing: border-box;
	}

	/* Bentuk Card Sesuai Mockup */
	.service-card-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 18px 20px;
		background: #FFFFFF;
		border: 1.5px solid #EDF2F7;
		border-radius: 18px;
		text-decoration: none;
		box-shadow: 0 4px 18px rgba(11, 41, 72, 0.04);
		box-sizing: border-box;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		position: relative;
	}

	/* Hover State (Sesuai Contoh Card Ketiga pada Mockup) */
	.service-card-item:hover {
		background: #EEFAF9;
		border-color: #00A6B2;
		box-shadow: 0 8px 24px rgba(0, 166, 178, 0.12);
		transform: translateY(-2px);
	}

	/* Ikon Box */
	.svc-icon-box {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: #E8F7F8;
		color: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease;
	}

	.service-card-item:hover .svc-icon-box {
		transform: scale(1.04);
		background: #DCF4F6;
	}

	/* Text Area */
	.svc-text-wrap {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 3px;
		flex: 1;
		min-width: 0;
	}

	.svc-num {
		font-size: 18px;
		font-weight: 800;
		color: #00A6B2;
		line-height: 1.1;
		letter-spacing: -0.01em;
	}

	.svc-title {
		margin: 0;
		display: flex;
		flex-direction: column;
		font-size: 13.5px;
		font-weight: 800;
		color: #082442;
		line-height: 1.32;
		letter-spacing: -0.01em;
		transition: color 0.25s ease;
	}

	.svc-title span {
		white-space: nowrap;
	}

	.service-card-item:hover .svc-title {
		color: #082442;
	}

	/* Tombol Panah Lingkaran */
	.svc-arrow-circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #F1F5F9;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	/* Panah saat Hover: Lingkaran Teal dengan Panah Putih */
	.service-card-item:hover .svc-arrow-circle {
		background: #00A6B2;
		color: #FFFFFF;
		transform: translateX(2px);
	}

	/* Responsive Tablet (768px - 1100px) */
	@media (max-width: 1100px) {
		.services-cards-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.25rem 1rem;
		}

		.service-card-item {
			padding: 16px 18px;
		}
	}

	/* Responsive Mobile (< 768px) */
	@media (max-width: 767px) {
		.services-section {
			padding: 40px 0 50px;
		}

		.services-container {
			padding: 0 1.25rem;
		}

		.services-header-box {
			margin-bottom: 1.5rem;
		}

		.services-title {
			font-size: 24px;
		}

		.services-subtitle {
			font-size: 14px;
		}

		.services-cards-grid {
			grid-template-columns: 1fr;
			gap: 0.85rem;
		}

		.service-card-item {
			padding: 14px 16px;
		}

		.svc-title span {
			white-space: normal;
		}
	}
</style>
