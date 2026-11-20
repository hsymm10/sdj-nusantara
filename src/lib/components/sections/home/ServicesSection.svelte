<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
	import { scrollReveal } from '#lib/motion';
	import { onMount } from 'svelte';

	let activeCategory = $state<'individu' | 'institusi'>('individu');

	function setCategory(cat: 'individu' | 'institusi') {
		activeCategory = cat;
	}

	onMount(() => {
		if (typeof window !== 'undefined' && window.location.hash) {
			const hash = window.location.hash.toLowerCase();
			if (hash === '#panel-institusi' || hash === '#institusi' || hash === '#solusi-institusi') {
				activeCategory = 'institusi';
			} else if (hash === '#panel-individu' || hash === '#individu' || hash === '#layanan-individu') {
				activeCategory = 'individu';
			}
		}
	});

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

	<div class="services-container" use:scrollReveal={{ selector: '.services-heading-row, .services-tab-wrapper, .services-content-area', stagger: 0.08 }}>
		<!-- Heading Row Sesuai Referensi Gambar 4: Judul + Garis Horizontal -->
		<div class="services-heading-row">
			<h2 class="services-main-title">
				{i18n.pick('Layanan Sesuai Kebutuhan Anda', 'Services Tailored to Your Needs')}
			</h2>
			<div class="title-divider-line" aria-hidden="true"></div>
		</div>

		<!-- Navigasi Tab Kategori di Bagian Atas Konten Section Kedua -->
		<div class="services-tab-wrapper">
			<div
				class="services-tab-pill"
				role="tablist"
				aria-label={i18n.pick('Pilihan Kategori Layanan', 'Service Category Selection')}
			>
				<button
					type="button"
					role="tab"
					class="tab-pill-btn {activeCategory === 'individu' ? 'active' : ''}"
					aria-selected={activeCategory === 'individu'}
					onclick={() => setCategory('individu')}
				>
					<span class="tab-icon" aria-hidden="true">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</span>
					<span class="tab-label">{i18n.pick('Layanan Individu', 'Individual Services')}</span>
				</button>

				<div class="tab-pill-divider" aria-hidden="true"></div>

				<button
					type="button"
					role="tab"
					class="tab-pill-btn {activeCategory === 'institusi' ? 'active' : ''}"
					aria-selected={activeCategory === 'institusi'}
					onclick={() => setCategory('institusi')}
				>
					<span class="tab-icon" aria-hidden="true">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
							<path d="M9 22v-4h6v4"></path>
							<path d="M8 6h.01"></path>
							<path d="M16 6h.01"></path>
							<path d="M8 10h.01"></path>
							<path d="M16 10h.01"></path>
							<path d="M8 14h.01"></path>
							<path d="M16 14h.01"></path>
						</svg>
					</span>
					<span class="tab-label">{i18n.pick('Solusi Institusi', 'Institutional Solutions')}</span>
				</button>
			</div>
		</div>

		<!-- Konten Panel Sesuai Tab Aktif -->
		<div class="services-content-area">
			{#if activeCategory === 'individu'}
				<a
					id="panel-individu"
					href="/layanan?tab=individu"
					class="dual-service-panel featured-service-panel"
					aria-label={i18n.pick('Layanan Untuk Individu — Lihat Selengkapnya di Halaman Layanan', 'Services For Individuals — Learn More on Services Page')}
				>
					<div class="panel-photo-col">
						<img
							src="/images/layanan-panel-individu.jpg"
							alt={i18n.pick('Mahasiswa Individu SDJ Nusantara', 'SDJ Nusantara Individual Student')}
							class="panel-img"
							loading="lazy"
							decoding="async"
						/>
					</div>

					<div class="panel-content-col">
						<div class="panel-badge-wrap">
							<span class="panel-badge">{i18n.pick('Layanan Individu', 'Individual Services')}</span>
						</div>
						<h3 class="panel-title">{i18n.pick('Untuk Individu', 'For Individuals')}</h3>
						<p class="panel-desc">
							{i18n.pick(
								'Pendampingan personal untuk membantu setiap individu mengenali potensi diri, mengembangkan minat dan bakat, serta menentukan arah pendidikan dan masa depan yang lebih terarah.',
								'Personal mentoring to help every individual identify their potential, develop interests and talents, and determine a clearer educational and future path.'
							)}
						</p>
						<ul class="panel-bullet-list">
							{#each individualBullets as bullet}
								<li class="bullet-item">
									<span class="bullet-square" aria-hidden="true"></span>
									<span class="bullet-text">{i18n.pick(bullet.textId, bullet.textEn)}</span>
								</li>
							{/each}
						</ul>
						<div class="panel-link-cta">
							<span>{i18n.pick('Lihat Selengkapnya', 'Learn More')}</span>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</div>
					</div>
				</a>
			{:else}
				<a
					id="panel-institusi"
					href="/layanan?tab=institusi"
					class="dual-service-panel featured-service-panel"
					aria-label={i18n.pick('Solusi Untuk Institusi — Lihat Selengkapnya di Halaman Layanan', 'Solutions For Institutions — Learn More on Services Page')}
				>
					<div class="panel-photo-col">
						<img
							src="/images/layanan-panel-institusi.jpg"
							alt={i18n.pick('Gedung Institusi Pendidikan SDJ Nusantara', 'SDJ Nusantara Institutional Campus')}
							class="panel-img"
							loading="lazy"
							decoding="async"
						/>
					</div>

					<div class="panel-content-col">
						<div class="panel-badge-wrap">
							<span class="panel-badge">{i18n.pick('Solusi Institusi', 'Institutional Solutions')}</span>
						</div>
						<h3 class="panel-title">{i18n.pick('Untuk Institusi', 'For Institutions')}</h3>
						<p class="panel-desc">
							{i18n.pick(
								'Solusi pendampingan bagi sekolah dan institusi untuk mengembangkan potensi peserta didik, memperkuat program pendidikan, serta menciptakan lingkungan pembelajaran yang lebih terarah dan berdampak.',
								'Mentoring solutions for schools and institutions to develop student potential, strengthen educational programs, and create a more targeted and impactful learning environment.'
							)}
						</p>
						<ul class="panel-bullet-list">
							{#each institutionBullets as bullet}
								<li class="bullet-item">
									<span class="bullet-square" aria-hidden="true"></span>
									<span class="bullet-text">{i18n.pick(bullet.textId, bullet.textEn)}</span>
								</li>
							{/each}
						</ul>
						<div class="panel-link-cta">
							<span>{i18n.pick('Lihat Selengkapnya', 'Learn More')}</span>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</div>
					</div>
				</a>
			{/if}
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

	/* Navigasi Tab Kategori */
	.services-tab-wrapper {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
		width: 100%;
	}

	.services-tab-pill {
		background: #FFFFFF;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.95);
		display: inline-flex;
		align-items: center;
		padding: 5px 6px;
		max-width: 480px;
		width: 100%;
		box-sizing: border-box;
	}

	.tab-pill-btn {
		flex: 1;
		min-width: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 42px;
		padding: 0 16px;
		margin: 0;
		border-radius: 11px;
		border: none;
		background: transparent;
		color: #082442;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		box-sizing: border-box;
	}

	.tab-pill-btn:hover:not(.active) {
		background: rgba(7, 158, 173, 0.08);
		color: #079EAD;
	}

	.tab-pill-btn.active {
		background: linear-gradient(135deg, #079EAD 0%, #16B6C1 100%);
		color: #FFFFFF;
		font-weight: 700;
		box-shadow: 0 4px 14px rgba(7, 158, 173, 0.28);
	}

	.tab-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		line-height: 1;
	}

	.tab-label {
		display: inline-flex;
		align-items: center;
		line-height: 1.2;
		letter-spacing: 0.01em;
	}

	.tab-pill-divider {
		width: 1px;
		height: 24px;
		background: #E2E8F0;
		margin: 0 4px;
		flex-shrink: 0;
	}

	/* Konten Panel Area */
	.services-content-area {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.featured-service-panel {
		max-width: 900px;
		width: 100%;
		border: 2px solid #00A6B2;
		box-shadow: 0 8px 26px rgba(0, 166, 178, 0.12);
		animation: fadeIn 0.25s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0.65;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.panel-badge-wrap {
		margin-bottom: 0.65rem;
	}

	.panel-badge {
		display: inline-block;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #079EAD;
		background: rgba(7, 158, 173, 0.1);
		padding: 3px 10px;
		border-radius: 999px;
		border: 1px solid rgba(7, 158, 173, 0.2);
	}

	.panel-link-cta {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-top: 1.25rem;
		font-size: 13.5px;
		font-weight: 700;
		color: #00A6B2;
		transition: gap 0.2s ease, color 0.2s ease;
	}

	.featured-service-panel:hover .panel-link-cta {
		gap: 9px;
		color: #079EAD;
	}



	/* Service Panel Card (Kombinasi Foto + Box Teks Putih Bersih Sesuai Beranda) */
	.dual-service-panel {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		border-radius: 16px;
		overflow: hidden;
		text-decoration: none;
		box-shadow: 0 4px 18px rgba(8, 36, 66, 0.05);
		border: 1.5px solid #EDF2F7;
		transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
		            box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
		            border-color 0.28s ease,
		            background-color 0.28s ease;
		scroll-margin-top: 90px;
		position: relative;
	}

	.dual-service-panel:hover {
		background: #FAFCFE;
		transform: translateY(-3px);
		box-shadow: 0 10px 28px rgba(0, 166, 178, 0.12);
		border-color: #00A6B2;
	}

	/* Highlight pulse saat tombol hero diklik */
	:global(.panel-highlighted) {
		animation: pulseFocus 2s ease-out;
		border-color: #f5b331 !important;
		box-shadow: 0 0 0 3px rgba(245, 179, 49, 0.25), 0 10px 30px rgba(8, 36, 66, 0.12) !important;
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
		padding: 28px 28px 24px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
	}

	.panel-title {
		margin: 0 0 0.5rem 0;
		font-size: clamp(19px, 1.45vw, 22px);
		font-weight: 800;
		color: #082442;
		letter-spacing: -0.01em;
		line-height: 1.25;
	}

	.panel-desc {
		margin: 0 0 1.15rem 0;
		font-size: 13.5px;
		line-height: 1.55;
		color: #475569;
		max-width: 500px;
		letter-spacing: -0.005em;
		text-wrap: pretty;
	}

	/* Bullet List dengan Kotak Oranye Sesuai Gambar 1 */
	.panel-bullet-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.bullet-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.bullet-square {
		width: 8px;
		height: 8px;
		background-color: #f5b331;
		border-radius: 1.5px;
		flex-shrink: 0;
		box-shadow: 0 1px 3px rgba(245, 179, 49, 0.3);
	}

	.bullet-text {
		font-size: 15px;
		font-weight: 600;
		color: #1E293B;
		line-height: 1.35;
		letter-spacing: -0.005em;
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
			margin-bottom: 1.5rem;
		}

		.services-tab-wrapper {
			margin-bottom: 1.5rem;
		}

		.featured-service-panel {
			max-width: 100%;
		}



		.panel-photo-col {
			flex: 0 0 40%;
		}

		.panel-content-col {
			padding: 20px 20px 18px;
		}

		.panel-title {
			font-size: 18px;
			margin-bottom: 0.45rem;
		}

		.panel-desc {
			font-size: 13px;
			line-height: 1.5;
			margin-bottom: 0.95rem;
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
			margin-bottom: 1.25rem;
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
			background: #f5b331;
		}

		.services-tab-wrapper {
			margin-bottom: 1.25rem;
		}

		.services-tab-pill {
			max-width: 100%;
			padding: 4px;
			border-radius: 14px;
		}

		.tab-pill-btn {
			height: 38px;
			padding: 0 8px;
			font-size: 13px;
			gap: 6px;
		}

		.tab-icon svg {
			width: 16px;
			height: 16px;
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
			margin-bottom: 0.4rem;
		}

		.panel-desc {
			font-size: 12.5px;
			line-height: 1.48;
			margin-bottom: 0.85rem;
			max-width: 100%;
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

		.panel-link-cta {
			margin-top: 0.85rem;
			font-size: 12.5px;
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
