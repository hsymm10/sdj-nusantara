<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const individualBullets = [
		{ id: 'pemetaan', textId: 'Pemetaan talenta', textEn: 'Talent mapping' },
		{ id: 'perencanaan', textId: 'Perencanaan studi', textEn: 'Study planning' },
		{ id: 'beasiswa', textId: 'Persiapan beasiswa', textEn: 'Scholarship preparation' }
	];

	const institutionBullets = [
		{ id: 'kompetensi', textId: 'Pengembangan kompetensi', textEn: 'Competency development' },
		{ id: 'pelatihan', textId: 'Pelatihan organisasi', textEn: 'Organizational training' },
		{ id: 'perancangan', textId: 'Perancangan program', textEn: 'Program design' }
	];
</script>

<section id="layanan-kami" class="services-section" aria-label={i18n.pick('Layanan Sesuai Kebutuhan Anda', 'Services Tailored to Your Needs')}>
	<!-- Background Ornaments (Sesuai Mockup Referensi) -->
	<!-- 1. Top Right Soft Cyan Layered Curves -->
	<svg class="decor-top-right" viewBox="0 0 380 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M60 0 C160 110 270 120 380 40 V0 H60 Z" fill="#00A6B2" fill-opacity="0.1" />
		<path d="M0 0 C130 90 250 90 380 20 V0 H0 Z" fill="#00A6B2" fill-opacity="0.04" />
	</svg>

	<!-- 2. Bottom Left Soft Cyan Wave -->
	<svg class="decor-bottom-left" viewBox="0 0 320 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 200 C80 140 180 130 320 200 H0 Z" fill="#00A6B2" fill-opacity="0.06" />
		<path d="M0 160 C70 110 150 110 260 200 H0 Z" fill="#00A6B2" fill-opacity="0.03" />
	</svg>

	<!-- 3. Bottom Right Signature Brand Diagonal Ribbon Swoosh (Teal, Turquoise, Gold) -->
	<svg class="decor-bottom-right" viewBox="0 0 320 140" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 140 C110 120 215 70 320 22 V140 H0 Z" fill="#008C99" fill-opacity="0.85" />
		<path d="M45 140 C140 125 235 80 320 34 V140 H45 Z" fill="#00A6B2" fill-opacity="0.85" />
		<path d="M130 140 C190 130 255 95 320 54 V140 H130 Z" fill="#8CE0E7" fill-opacity="0.9" />
		<path d="M175 140 C230 132 275 104 320 72 V140 H175 Z" fill="#FFB822" />
	</svg>

	<div class="services-container">
		<!-- Heading Row Sesuai Referensi Gambar 4: Judul + Garis Horizontal -->
		<div class="services-heading-row">
			<h2 class="services-main-title">
				{i18n.pick('Layanan Sesuai Kebutuhan Anda', 'Services Tailored to Your Needs')}
			</h2>
			<div class="title-divider-line" aria-hidden="true"></div>
		</div>

		<!-- Dua Panel Horizontal (Untuk Individu & Untuk Institusi) Sesuai Referensi Gambar 4 -->
		<div class="dual-panels-grid">
			<!-- Panel 1: Untuk Individu -->
			<a
				id="panel-individu"
				href="/layanan#talent-management"
				class="dual-service-panel"
				aria-label={i18n.pick('Layanan Untuk Individu', 'Services For Individuals')}
			>
				<div class="panel-photo-col">
					<img
						src="/images/layanan-panel-individu.jpg"
						alt={i18n.pick('Mahasiswa Individu SDJNusantara', 'SDJNusantara Individual Student')}
						class="panel-img"
						loading="lazy"
						decoding="async"
					/>
				</div>

				<div class="panel-content-col">
					<h3 class="panel-title">{i18n.pick('Untuk Individu', 'For Individuals')}</h3>
					<ul class="panel-bullet-list">
						{#each individualBullets as bullet}
							<li class="bullet-item">
								<span class="bullet-square" aria-hidden="true"></span>
								<span class="bullet-text">{i18n.pick(bullet.textId, bullet.textEn)}</span>
							</li>
						{/each}
					</ul>
					<div class="panel-link-hint">
						<span>{i18n.pick('Pelajari Selengkapnya', 'Learn More')}</span>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</div>
			</a>

			<!-- Panel 2: Untuk Institusi -->
			<a
				id="panel-institusi"
				href="/layanan#institutional-partnership"
				class="dual-service-panel"
				aria-label={i18n.pick('Layanan Untuk Institusi', 'Services For Institutions')}
			>
				<div class="panel-photo-col">
					<img
						src="/images/layanan-panel-institusi.jpg"
						alt={i18n.pick('Gedung Institusi Pendidikan SDJNusantara', 'SDJNusantara Institutional Campus')}
						class="panel-img"
						loading="lazy"
						decoding="async"
					/>
				</div>

				<div class="panel-content-col">
					<h3 class="panel-title">{i18n.pick('Untuk Institusi', 'For Institutions')}</h3>
					<ul class="panel-bullet-list">
						{#each institutionBullets as bullet}
							<li class="bullet-item">
								<span class="bullet-square" aria-hidden="true"></span>
								<span class="bullet-text">{i18n.pick(bullet.textId, bullet.textEn)}</span>
							</li>
						{/each}
					</ul>
					<div class="panel-link-hint">
						<span>{i18n.pick('Pelajari Selengkapnya', 'Learn More')}</span>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	.services-section {
		background: #FFFFFF;
		width: 100%;
		position: relative;
		padding: 56px 0 68px;
		box-sizing: border-box;
		overflow: hidden;
	}

	/* Background Ornaments */
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

	/* Heading Row: Title + Garis Horizontal Memanjang */
	.services-heading-row {
		display: flex;
		align-items: center;
		gap: 1.75rem;
		margin-bottom: 2.25rem;
		width: 100%;
	}

	.services-main-title {
		margin: 0;
		font-size: clamp(22px, 2.1vw, 29px);
		font-weight: 800;
		color: #082442;
		letter-spacing: -0.015em;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.title-divider-line {
		flex: 1;
		height: 2px;
		background: #D9E2EC;
		border-radius: 2px;
		min-width: 40px;
	}

	/* Dual Panels Grid: 2 Kolom Berdampingan Sesuai Gambar 4 */
	.dual-panels-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		align-items: stretch;
		width: 100%;
		box-sizing: border-box;
	}

	/* Service Panel Card (Kombinasi Foto + Box Teks Krem Hangat) */
	.dual-service-panel {
		display: flex;
		flex-direction: row;
		background: #F8F4F1;
		border-radius: 14px;
		overflow: hidden;
		text-decoration: none;
		box-shadow: 0 4px 18px rgba(8, 36, 66, 0.05);
		border: 1.5px solid rgba(8, 36, 66, 0.06);
		transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
		            box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
		            border-color 0.28s ease;
		scroll-margin-top: 90px;
		position: relative;
	}

	.dual-service-panel:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 28px rgba(8, 36, 66, 0.1);
		border-color: rgba(217, 93, 15, 0.35);
	}

	/* Highlight pulse saat tombol hero diklik */
	:global(.panel-highlighted) {
		animation: pulseFocus 2s ease-out;
		border-color: #D95D0F !important;
		box-shadow: 0 0 0 3px rgba(217, 93, 15, 0.25), 0 10px 30px rgba(8, 36, 66, 0.12) !important;
	}

	@keyframes pulseFocus {
		0% {
			transform: scale(1);
		}
		35% {
			transform: scale(1.018);
		}
		100% {
			transform: scale(1);
		}
	}

	/* Kolom Foto */
	.panel-photo-col {
		flex: 0 0 44%;
		min-width: 150px;
		position: relative;
		overflow: hidden;
		background: #E5E7EB;
	}

	.panel-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.dual-service-panel:hover .panel-img {
		transform: scale(1.04);
	}

	/* Kolom Konten Teks */
	.panel-content-col {
		flex: 1;
		padding: 26px 26px 22px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
	}

	.panel-title {
		margin: 0 0 1rem 0;
		font-size: clamp(19px, 1.45vw, 22px);
		font-weight: 800;
		color: #082442;
		letter-spacing: -0.01em;
		line-height: 1.25;
	}

	/* Bullet List dengan Kotak Oranye Sesuai Gambar 4 */
	.panel-bullet-list {
		list-style: none;
		padding: 0;
		margin: 0 0 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.bullet-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.bullet-square {
		width: 8px;
		height: 8px;
		background-color: #D95D0F;
		border-radius: 1.5px;
		flex-shrink: 0;
		box-shadow: 0 1px 3px rgba(217, 93, 15, 0.3);
	}

	.bullet-text {
		font-size: 15px;
		font-weight: 600;
		color: #1E293B;
		line-height: 1.35;
		letter-spacing: -0.005em;
	}

	/* Tautan Pelajari Selengkapnya di Bawah Card */
	.panel-link-hint {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
		font-weight: 700;
		color: #D95D0F;
		transition: gap 0.2s ease, color 0.2s ease;
		margin-top: auto;
	}

	.dual-service-panel:hover .panel-link-hint {
		gap: 9px;
		color: #B54705;
	}

	/* Tablet Responsif (768px - 1024px) */
	@media (max-width: 1024px) {
		.services-section {
			padding: 48px 0 56px;
		}

		.services-container {
			padding: 0 1.5rem;
		}

		.services-heading-row {
			gap: 1.25rem;
			margin-bottom: 1.75rem;
		}

		.dual-panels-grid {
			gap: 1.25rem;
		}

		.panel-photo-col {
			flex: 0 0 40%;
		}

		.panel-content-col {
			padding: 20px 20px 18px;
		}

		.panel-title {
			font-size: 18px;
			margin-bottom: 0.85rem;
		}

		.bullet-text {
			font-size: 14px;
		}
	}

	/* Mobile Responsif (< 768px) */
	@media (max-width: 767px) {
		.services-section {
			padding: 40px 0 48px;
		}

		.services-container {
			padding: 0 1.25rem;
		}

		.services-heading-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
			margin-bottom: 1.5rem;
		}

		.services-main-title {
			white-space: normal;
			font-size: 21px;
			line-height: 1.3;
		}

		.title-divider-line {
			width: 60px;
			flex: none;
			height: 3px;
			background: #D95D0F;
		}

		.dual-panels-grid {
			grid-template-columns: 1fr;
			gap: 1.15rem;
		}

		.dual-service-panel {
			flex-direction: row;
			min-height: 155px;
		}

		.panel-photo-col {
			flex: 0 0 38%;
			min-width: 115px;
		}

		.panel-content-col {
			padding: 16px 14px 14px;
		}

		.panel-title {
			font-size: 16.5px;
			margin-bottom: 0.65rem;
		}

		.panel-bullet-list {
			gap: 0.55rem;
			margin-bottom: 0.75rem;
		}

		.bullet-square {
			width: 7px;
			height: 7px;
		}

		.bullet-text {
			font-size: 13px;
		}

		.panel-link-hint {
			font-size: 12px;
		}
	}

	/* Layar Sangat Kecil (< 420px) */
	@media (max-width: 420px) {
		.dual-service-panel {
			flex-direction: column;
		}

		.panel-photo-col {
			flex: none;
			width: 100%;
			height: 140px;
		}

		.panel-content-col {
			padding: 16px;
		}
	}
</style>
