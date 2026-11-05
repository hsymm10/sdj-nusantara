<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';

	let activeTab = $state<'semua' | 'program' | 'beasiswa' | 'hukum'>('semua');

	function setTab(tab: 'semua' | 'program' | 'beasiswa' | 'hukum') {
		activeTab = tab;
	}

	function scrollToCards() {
		if (typeof document !== 'undefined') {
			const el = document.getElementById('daftar-layanan');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
</script>

<svelte:head>
	<title>Portofolio Layanan — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="SDJNusantara menyediakan berbagai layanan pendidikan, program beasiswa, dan layanan hukum untuk mendukung potensi individu dan institusi."
	/>
	<link rel="canonical" href="https://sdjnusantara.com/layanan" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="services-hub-page">
	<!-- ==========================================
	     1. HERO SECTION (Tinggi ±540px skala 1536)
	     ========================================== -->
	<header class="hub-hero">
		<!-- Photo full-bleed di kanan mulai ±x 42% -->
		<div class="hero-bg-wrapper" aria-hidden="true">
			<picture>
				<source srcset="/images/layanan-hub-hero.webp" type="image/webp" />
				<img
					src="/images/layanan-hub-hero.jpg"
					alt="Mahasiswa SDJNusantara berdiskusi"
					class="hero-img"
					loading="eager"
					decoding="async"
				/>
			</picture>
			<!-- Fade navy halus dari kiri (solid 0-32%, ±0.8 pada 42%, 0 pada ±60%) -->
			<div class="hero-gradient-overlay"></div>
		</div>

		<!-- Gelombang teal/turquoise SVG besar di kiri-bawah dan aksen emas kanan-bawah -->
		<div class="hero-wave-container" aria-hidden="true">
			<svg class="hero-wave-svg" viewBox="0 0 1536 120" fill="none" preserveAspectRatio="none">
				<!-- Gelombang teal kiri-bawah -->
				<path
					d="M0,45 C280,115 540,110 780,55 C960,15 1180,35 1536,10 L1536,120 L0,120 Z"
					fill="#079EAD"
					opacity="0.9"
				/>
				<!-- Gelombang turquoise aksen -->
				<path
					d="M0,65 C320,125 600,105 880,50 C1080,10 1320,25 1536,15 L1536,120 L0,120 Z"
					fill="#16B6C1"
					opacity="0.85"
				/>
				<!-- Aksen lengkung emas kanan-bawah -->
				<path
					d="M1020,85 C1180,45 1380,48 1536,35"
					stroke="#F5B331"
					stroke-width="3"
					stroke-linecap="round"
					fill="none"
				/>
				<!-- Lengkung putih sudut bawah menyatu dengan section berikutnya -->
				<path
					d="M0,88 C340,132 640,115 920,68 C1140,32 1360,45 1536,40 L1536,120 L0,120 Z"
					fill="#FFFFFF"
				/>
			</svg>
		</div>

		<div class="hub-container hero-container">
			<div class="hero-content">
				<!-- Pill Portofolio Layanan -->
				<div class="hero-pill">
					<span class="pill-dot"></span>
					<span class="pill-text">Portofolio Layanan</span>
				</div>

				<!-- H1 3 baris dengan 'Talenta' dan baris 3 warna emas -->
				<h1 class="hero-title">
					<span class="title-line">Solusi Pendidikan</span>
					<span class="title-line">dan Pengembangan <span class="highlight-gold">Talenta</span></span>
					<span class="title-line highlight-gold">untuk Masa Depan.</span>
				</h1>

				<!-- Deskripsi putih -->
				<p class="hero-desc">
					SDJNusantara menyediakan berbagai layanan pendidikan, program beasiswa, dan layanan hukum untuk mendukung potensi individu dan institusi.
				</p>

				<!-- Tombol aksi (dasar tombol ≥45px di atas batas bawah hero) -->
				<div class="hero-actions">
					<button type="button" class="btn-gold" onclick={scrollToCards}>
						<span>Jelajahi Layanan</span>
						<span class="btn-arrow" aria-hidden="true">→</span>
					</button>

					<a href="/kontak" class="btn-outline">
						<span>Konsultasi dengan Kami</span>
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- ==========================================
	     2. BAR TAB OVERLAP (Tinggi ±75px, overlap hero ≤20px, lebar ±1100px)
	     ========================================== -->
	<section class="tab-overlap-section" aria-label="Filter Layanan">
		<div class="hub-container">
			<div class="tab-overlap-card" role="tablist" aria-label="Kategori Portofolio Layanan">
				<!-- Tab 1: Semua Layanan -->
				<button
					type="button"
					role="tab"
					class="tab-btn {activeTab === 'semua' ? 'active' : ''}"
					aria-selected={activeTab === 'semua'}
					onclick={() => setTab('semua')}
				>
					<span class="tab-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="3" y="3" width="7" height="7"></rect>
							<rect x="14" y="3" width="7" height="7"></rect>
							<rect x="14" y="14" width="7" height="7"></rect>
							<rect x="3" y="14" width="7" height="7"></rect>
						</svg>
					</span>
					<span class="tab-label">Semua Layanan</span>
				</button>

				<div class="tab-vdivider" aria-hidden="true"></div>

				<!-- Tab 2: Program Pendidikan -->
				<button
					type="button"
					role="tab"
					class="tab-btn {activeTab === 'program' ? 'active' : ''}"
					aria-selected={activeTab === 'program'}
					onclick={() => setTab('program')}
				>
					<span class="tab-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
						</svg>
					</span>
					<span class="tab-label">Program Pendidikan</span>
				</button>

				<div class="tab-vdivider" aria-hidden="true"></div>

				<!-- Tab 3: Beasiswa -->
				<button
					type="button"
					role="tab"
					class="tab-btn {activeTab === 'beasiswa' ? 'active' : ''}"
					aria-selected={activeTab === 'beasiswa'}
					onclick={() => setTab('beasiswa')}
				>
					<span class="tab-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 12 20 22 4 22 4 12"></polyline>
							<rect x="2" y="7" width="20" height="5"></rect>
							<line x1="12" y1="22" x2="12" y2="7"></line>
							<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
							<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
						</svg>
					</span>
					<span class="tab-label">Beasiswa</span>
				</button>

				<div class="tab-vdivider" aria-hidden="true"></div>

				<!-- Tab 4: Layanan Hukum -->
				<button
					type="button"
					role="tab"
					class="tab-btn {activeTab === 'hukum' ? 'active' : ''}"
					aria-selected={activeTab === 'hukum'}
					onclick={() => setTab('hukum')}
				>
					<span class="tab-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
							<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
							<path d="M7 21h10"></path>
							<path d="M12 3v18"></path>
							<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
						</svg>
					</span>
					<span class="tab-label">Layanan Hukum</span>
				</button>
			</div>
		</div>
	</section>

	<!-- ==========================================
	     3. INTRO SECTION (Tinggi ±230px, split teks kiri & 4 ubin kanan)
	     ========================================== -->
	<section class="hub-intro-section" aria-labelledby="intro-heading">
		<div class="hub-container intro-grid">
			<!-- Kiri: Header teks -->
			<div class="intro-text-col">
				<div class="section-badge-label">
					<span class="label-dash" aria-hidden="true"></span>
					<span class="label-text">LAYANAN SDJNUSANTARA</span>
				</div>
				<h2 id="intro-heading" class="intro-title">
					Layanan Pendidikan dan Pengembangan Talenta
				</h2>
				<p class="intro-desc">
					Pendampingan terintegrasi untuk membantu individu dan institusi dalam merencanakan pendidikan, mengembangkan kompetensi, serta mempersiapkan masa depan yang lebih baik.
				</p>
			</div>

			<!-- Kanan: 4 ubin putih dengan ikon outline turquoise -->
			<div class="intro-tiles-col">
				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<!-- Kelompok orang -->
						<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					</div>
					<span class="tile-label">Pendampingan Menyeluruh</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<!-- Target / Bullseye -->
						<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="6"></circle>
							<circle cx="12" cy="12" r="2"></circle>
						</svg>
					</div>
					<span class="tile-label">Program Terstruktur</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<!-- Buku terbuka -->
						<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
						</svg>
					</div>
					<span class="tile-label">Informasi Beasiswa</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<!-- Grafik batang -->
						<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<line x1="18" y1="20" x2="18" y2="10"></line>
							<line x1="12" y1="20" x2="12" y2="4"></line>
							<line x1="6" y1="20" x2="6" y2="14"></line>
						</svg>
					</div>
					<span class="tile-label">Pengembangan Talenta</span>
				</div>
			</div>
		</div>
	</section>

	<div id="daftar-layanan"></div>
</main>

<Footer variant="layanan" />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.services-hub-page {
		padding-top: 48px;
		background: #FFFFFF;
		overflow-x: hidden;
	}

	/* Container khusus halaman ini: ±1100px konten */
	.hub-container {
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	/* ==========================================
	     1. HERO STYLING (Tinggi ±540px skala 1536)
	     ========================================== */
	.hub-hero {
		position: relative;
		background-color: #082442;
		min-height: 540px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	.hero-bg-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		pointer-events: none;
	}

	.hero-img {
		position: absolute;
		top: 0;
		right: 0;
		width: 58%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
	}

	/* Fade navy halus dari kiri (solid 0-32%, ±0.8 pada 42%, 0 pada ±60%) */
	.hero-gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 32%,
			rgba(8, 36, 66, 0.88) 42%,
			rgba(8, 36, 66, 0.45) 54%,
			rgba(8, 36, 66, 0.05) 64%,
			rgba(8, 36, 66, 0) 100%
		);
	}

	.hero-wave-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 115px;
		z-index: 3;
		pointer-events: none;
	}

	.hero-wave-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.hero-container {
		position: relative;
		z-index: 4;
		padding-top: 50px;
		padding-bottom: 95px; /* Dasar tombol ≥45px di atas batas bawah hero */
	}

	.hero-content {
		max-width: 620px;
		display: flex;
		flex-direction: column;
	}

	.hero-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(7, 158, 173, 0.18);
		border: 1px solid rgba(22, 182, 193, 0.35);
		padding: 5px 14px;
		border-radius: 9999px;
		width: fit-content;
		margin-bottom: 18px;
	}

	.pill-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #16B6C1;
		box-shadow: 0 0 8px #16B6C1;
	}

	.pill-text {
		color: #E6F7F9;
		font-size: 12.5px;
		font-weight: 700;
		letter-spacing: 0.03em;
	}

	.hero-title {
		font-size: clamp(32px, 3.2vw, 46px);
		line-height: 1.2;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 16px 0;
		display: flex;
		flex-direction: column;
	}

	.title-line {
		display: block;
	}

	.highlight-gold {
		color: #F5B331;
	}

	.hero-desc {
		font-size: 15px;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.88);
		max-width: 560px;
		margin: 0 0 28px 0;
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: 14px;
		flex-wrap: wrap;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		padding: 12px 24px;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 10px;
		border: none;
		cursor: pointer;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(245, 179, 49, 0.35);
	}

	.btn-arrow {
		font-size: 15px;
		line-height: 1;
		transition: transform 0.2s ease;
	}

	.btn-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		background: transparent;
		color: #FFFFFF;
		border: 1.5px solid rgba(255, 255, 255, 0.7);
		padding: 11px 22px;
		font-size: 13.5px;
		font-weight: 600;
		border-radius: 10px;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-outline:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: #FFFFFF;
		transform: translateY(-2px);
	}

	/* ==========================================
	     2. BAR TAB OVERLAP (Tinggi ±75px, overlap ≤20px)
	     ========================================== */
	.tab-overlap-section {
		position: relative;
		z-index: 10;
		margin-top: -18px; /* overlap hero ≤20px */
		margin-bottom: 24px;
	}

	.tab-overlap-card {
		background: #FFFFFF;
		border-radius: 20px;
		box-shadow: 0 10px 32px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.85);
		display: flex;
		align-items: center;
		padding: 10px 14px;
		box-sizing: border-box;
		overflow-x: auto;
		scrollbar-width: none;
	}

	.tab-overlap-card::-webkit-scrollbar {
		display: none;
	}

	.tab-btn {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		min-height: 56px;
		padding: 10px 18px;
		border-radius: 12px;
		border: none;
		background: transparent;
		color: #475569;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
	}

	.tab-btn:hover {
		background: #F8FAFC;
		color: #082442;
	}

	.tab-btn.active {
		background: #079EAD;
		color: #FFFFFF;
		box-shadow: 0 4px 14px rgba(7, 158, 173, 0.25);
	}

	.tab-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.tab-vdivider {
		width: 1px;
		height: 38px;
		background: #E2E8F0;
		margin: 0 4px;
		flex-shrink: 0;
	}

	/* ==========================================
	     3. INTRO SECTION (Tinggi ±230px skala 1024 / ±345px skala 1536)
	     ========================================== */
	.hub-intro-section {
		padding: 36px 0 40px;
		background: #FFFFFF;
	}

	.intro-grid {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		gap: 2.5rem;
		align-items: center;
	}

	.intro-text-col {
		display: flex;
		flex-direction: column;
	}

	.section-badge-label {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.label-dash {
		width: 22px;
		height: 2.5px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.label-text {
		font-size: 12px;
		font-weight: 700;
		color: #079EAD;
		letter-spacing: 0.06em;
	}

	.intro-title {
		font-size: clamp(26px, 2.4vw, 36px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 14px 0;
	}

	.intro-desc {
		font-size: 15px;
		line-height: 1.6;
		color: #183553;
		margin: 0;
		max-width: 540px;
	}

	.intro-tiles-col {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
	}

	.feature-tile {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 14px;
		padding: 16px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.04);
		transition: all 0.2s ease;
		min-height: 110px;
		box-sizing: border-box;
	}

	.feature-tile:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 22px rgba(8, 36, 66, 0.08);
		border-color: #16B6C1;
	}

	.tile-icon-box {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
	}

	.tile-label {
		font-size: 13px;
		line-height: 1.35;
		font-weight: 600;
		color: #082442;
		display: block;
	}

	/* ==========================================
	     RESPONSIVE
	     ========================================== */
	@media (max-width: 1024px) {
		.intro-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.hero-img {
			width: 65%;
			opacity: 0.85;
		}

		.intro-tiles-col {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 768px) {
		.hero-img {
			display: none;
		}

		.hero-gradient-overlay {
			background: #082442;
		}

		.hero-title {
			font-size: 28px;
		}

		.hero-desc {
			font-size: 14px;
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-gold,
		.btn-outline {
			justify-content: center;
		}

		.intro-tiles-col {
			grid-template-columns: repeat(2, 1fr);
		}

		.tab-btn {
			padding: 8px 12px;
			font-size: 13px;
		}
	}
</style>
