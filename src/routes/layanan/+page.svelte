<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { chatStore } from '#lib/stores/chat.svelte';

	let activeTab = $state<'semua' | 'program' | 'beasiswa' | 'hukum'>('semua');
	let openFaq = $state<number | null>(null);

	function setTab(tab: 'semua' | 'program' | 'beasiswa' | 'hukum') {
		activeTab = tab;
	}

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	function scrollToCards() {
		if (typeof document !== 'undefined') {
			const el = document.getElementById('daftar-layanan');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	const faqs = [
		{
			question: 'Bagaimana cara mengajukan kerja sama?',
			answer: 'Anda dapat menghubungi kami melalui formulir kontak atau WhatsApp resmi kami. Tim kami akan menjadwalkan diskusi awal untuk memahami kebutuhan institusi Anda.'
		},
		{
			question: 'Apakah layanan SDJNusantara hanya untuk sekolah?',
			answer: 'Tidak. Kami melayani siswa, mahasiswa, profesional, perguruan tinggi, sekolah, yayasan pendidikan, hingga korporasi dan lembaga pemerintah.'
		},
		{
			question: 'Apakah tersedia konsultasi online?',
			answer: 'Ya, seluruh sesi konsultasi, pendampingan, dan bimbingan dapat dilaksanakan secara daring maupun luring sesuai kesepakatan.'
		},
		{
			question: 'Berapa lama proses layanan berlangsung?',
			answer: 'Durasi layanan bervariasi bergantung pada jenis program yang dipilih, mulai dari workshop intensif 1 hari hingga program pendampingan komprehensif selama beberapa bulan.'
		}
	];
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
					<span class="tile-label">Program Berkualitas</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<!-- Buku terbuka -->
						<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
						</svg>
					</div>
					<span class="tile-label">Akses Beasiswa Luas</span>
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

	<!-- ==========================================
	     4. SECTION DAFTAR KARTU LAYANAN (Grid 2x2)
	     ========================================== -->
	<section id="daftar-layanan" class="hub-cards-section" aria-label="Daftar Layanan">
		<div class="hub-container">
			<div class="cards-grid {activeTab !== 'semua' ? 'single-filtered' : ''}">
				<!-- KARTU 1: Program Pendidikan -->
				{#if activeTab === 'semua' || activeTab === 'program'}
					<article class="service-card card-program">
						<div class="card-body">
							<div class="card-pill">
								<span class="card-pill-icon" aria-hidden="true">
									<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
										<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
									</svg>
								</span>
								<span>Program Pendidikan</span>
							</div>

							<h3 class="card-title">Program Pendidikan</h3>
							<p class="card-desc">
								Berbagai program pengembangan kompetensi, pelatihan, dan kegiatan akademik yang dirancang untuk meningkatkan kapasitas individu maupun institusi.
							</p>

							<ul class="card-checklist" aria-label="Fitur Program Pendidikan">
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Konsultasi & Manajemen Talenta</span>
								</li>
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Scholarship Academy & Kurasi Beasiswa</span>
								</li>
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Pelatihan Khusus & Kemitraan Kampus</span>
								</li>
							</ul>

							<div class="card-action">
								<a href="/layanan/pendidikan" class="btn-card-gold">
									<span>Jelajahi Semua Program</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
							</div>
						</div>

						<div class="card-media" aria-hidden="true">
							<div class="media-accent-circle"></div>
							<picture>
								<source srcset="/images/layanan-hub-program.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-program.jpg"
									alt="Program Pendidikan SDJNusantara"
									class="card-img"
									loading="lazy"
									decoding="async"
								/>
							</picture>
						</div>
					</article>
				{/if}

				<!-- KARTU 2: Program Beasiswa -->
				{#if activeTab === 'semua' || activeTab === 'beasiswa'}
					<article class="service-card card-beasiswa">
						<div class="card-body">
							<div class="card-pill">
								<span class="card-pill-icon" aria-hidden="true">
									<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="20 12 20 22 4 22 4 12"></polyline>
										<rect x="2" y="7" width="20" height="5"></rect>
										<line x1="12" y1="22" x2="12" y2="7"></line>
										<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
										<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
									</svg>
								</span>
								<span>Beasiswa</span>
							</div>

							<h3 class="card-title">Program Beasiswa</h3>
							<p class="card-desc">
								Akses informasi dan pendampingan beasiswa dalam dan luar negeri, dengan dukungan persiapan yang komprehensif dan terarah.
							</p>

							<ul class="card-checklist" aria-label="Fitur Program Beasiswa">
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Informasi Beasiswa Dalam & Luar Negeri</span>
								</li>
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Pendampingan Persiapan & Seleksi</span>
								</li>
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Kurasi Beasiswa Sesuai Profil</span>
								</li>
							</ul>

							<div class="card-action">
								<a href="/layanan/pendidikan#beasiswa" class="btn-card-gold">
									<span>Temukan Semua Beasiswa</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
							</div>

							<p class="card-disclaimer">
								SDJNusantara tidak menjanjikan kelulusan atau perolehan beasiswa.
							</p>
						</div>

						<div class="card-media" aria-hidden="true">
							<div class="media-accent-circle"></div>
							<picture>
								<source srcset="/images/layanan-hub-beasiswa.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-beasiswa.jpg"
									alt="Program Beasiswa SDJNusantara"
									class="card-img"
									loading="lazy"
									decoding="async"
								/>
							</picture>
						</div>
					</article>
				{/if}

				<!-- KARTU 3: Layanan Hukum -->
				<!-- WAJIB DIVERIFIKASI pemilik: ruang lingkup layanan hukum dan izin/legalitas praktik (content-master tidak memuat layanan hukum) -->
				{#if activeTab === 'semua' || activeTab === 'hukum'}
					<article class="service-card card-hukum">
						<div class="card-body">
							<div class="card-pill-row">
								<div class="card-pill">
									<span class="card-pill-icon" aria-hidden="true">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
											<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
											<path d="M7 21h10"></path>
											<path d="M12 3v18"></path>
											<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
										</svg>
									</span>
									<span>Layanan Hukum</span>
								</div>
								<span class="badge-soon">Segera hadir</span>
							</div>

							<h3 class="card-title">Layanan Hukum</h3>
							<p class="card-desc">
								Layanan konsultasi regulasi, telaah kepatuhan, serta pendampingan tata kelola hukum bagi institusi pendidikan dan korporasi.
							</p>

							<ul class="card-checklist" aria-label="Fitur Layanan Hukum">
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Penyusunan & Penelaahan Kontrak/MOU</span>
								</li>
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Kepatuhan Regulasi & Kebijakan Kampus</span>
								</li>
								<li>
									<span class="check-icon" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									<span>Pendampingan Hukum Terstruktur</span>
								</li>
							</ul>

							<div class="card-action">
								<a href="/layanan/hukum" class="btn-card-gold">
									<span>Pelajari Layanan Hukum</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
							</div>
						</div>

						<div class="card-media" aria-hidden="true">
							<div class="media-accent-circle"></div>
							<picture>
								<source srcset="/images/layanan-hub-hukum.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-hukum.jpg"
									alt="Layanan Hukum SDJNusantara"
									class="card-img"
									loading="lazy"
									decoding="async"
								/>
							</picture>
						</div>
					</article>
				{/if}

				<!-- KARTU 4: Mengapa Memilih SDJNusantara? -->
				{#if activeTab === 'semua'}
					<aside class="why-us-card" aria-labelledby="why-us-heading">
						<div>
							<h3 id="why-us-heading" class="why-title">Mengapa Memilih SDJNusantara?</h3>
							<p class="why-desc">
								Kami memberikan pendampingan yang strategis, terpercaya, dan berorientasi pada hasil nyata.
							</p>
						</div>

						<div class="why-tiles-row">
							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								</div>
								<h4 class="why-tile-title">Tim Profesional</h4>
								<p class="why-tile-desc">Didukung konsultan di bidang pendidikan dan hukum.</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
									</svg>
								</div>
								<h4 class="why-tile-title">Pendampingan Terarah</h4>
								<p class="why-tile-desc">Proses yang sistematis dan sesuai kebutuhan.</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10"></circle>
										<circle cx="12" cy="12" r="6"></circle>
										<circle cx="12" cy="12" r="2"></circle>
									</svg>
								</div>
								<h4 class="why-tile-title">Solusi Terintegrasi</h4>
								<p class="why-tile-desc">Fokus pada dampak nyata dan keberlanjutan pengembangan talenta.</p>
							</div>
						</div>
					</aside>
				{/if}
			</div>
		</div>
	</section>

	<!-- ==========================================
	     5. SPLIT CTA BANNER & FAQ ACCORDION
	     ========================================== -->
	<section class="hub-bottom-section" aria-label="Bantuan dan Pertanyaan">
		<div class="hub-container bottom-grid">
			<!-- CTA Card Kiri -->
			<div class="cta-banner-card">
				<!-- Background image gavel with navy overlay -->
				<div class="cta-bg-wrapper" aria-hidden="true">
					<picture>
						<source srcset="/images/layanan-hub-gavel.webp" type="image/webp" />
						<img
							src="/images/layanan-hub-gavel.jpg"
							alt=""
							class="cta-bg-img"
							loading="lazy"
							decoding="async"
						/>
					</picture>
					<div class="cta-overlay"></div>
				</div>

				<div class="cta-content">
					<h3 class="cta-title">
						Masih Bingung Menentukan <span class="highlight-gold">Layanan yang Tepat?</span>
					</h3>
					<p class="cta-desc">
						Tim SDJNusantara siap membantu Anda menemukan program, beasiswa, maupun layanan yang sesuai dengan kebutuhan.
					</p>

					<div class="cta-buttons">
						<a href="/kontak" class="btn-gold">
							<span>Hubungi Kami</span>
							<span class="btn-arrow" aria-hidden="true">→</span>
						</a>

						<button type="button" class="btn-chat" onclick={() => chatStore.open()}>
							<span class="chat-icon" aria-hidden="true">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							</span>
							<span>Chat dengan Asisten SDJNusantara</span>
						</button>
					</div>
				</div>
			</div>

			<!-- FAQ Accordion Kanan -->
			<div class="faq-card" aria-labelledby="faq-heading">
				<h3 id="faq-heading" class="faq-title">Pertanyaan Umum</h3>
				<p class="faq-subtitle">Temukan jawaban dari pertanyaan yang paling sering ditanyakan.</p>

				<div class="faq-list">
					{#each faqs as item, index}
						<div class="faq-item {openFaq === index ? 'is-open' : ''}">
							<button
								type="button"
								class="faq-question-btn"
								aria-expanded={openFaq === index}
								onclick={() => toggleFaq(index)}
							>
								<span class="question-text">{item.question}</span>
								<span class="faq-chevron" aria-hidden="true">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</span>
							</button>

							{#if openFaq === index}
								<div class="faq-answer-panel">
									<p class="faq-answer-text">{item.answer}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
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
		border: 1px solid rgba(226, 182, 193, 0.35);
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
	     3. INTRO SECTION
	     ========================================== */
	.hub-intro-section {
		padding: 36px 0 34px;
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
	     4. SECTION DAFTAR KARTU LAYANAN
	     ========================================== */
	.hub-cards-section {
		padding: 16px 0 44px;
		background: #FFFFFF;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
	}

	.cards-grid.single-filtered {
		grid-template-columns: 1fr;
		max-width: 800px;
		margin: 0 auto;
	}

	.service-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 20px;
		box-shadow: 0 8px 28px rgba(8, 36, 66, 0.05);
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		position: relative;
		min-height: 350px;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}

	.service-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 34px rgba(8, 36, 66, 0.09);
	}

	.card-body {
		flex: 1;
		padding: 28px 24px 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		z-index: 2;
	}

	.card-pill-row {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.card-pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: rgba(7, 158, 173, 0.12);
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		padding: 4px 12px;
		border-radius: 9999px;
		margin-bottom: 12px;
		width: fit-content;
	}

	.card-pill-row .card-pill {
		margin-bottom: 0;
	}

	.card-pill-icon {
		display: flex;
		align-items: center;
	}

	.badge-soon {
		font-size: 11px;
		font-weight: 600;
		color: #082442;
		background: #E2E8F0;
		padding: 3px 10px;
		border-radius: 9999px;
	}

	.card-title {
		font-size: 21px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px 0;
		line-height: 1.3;
	}

	.card-desc {
		font-size: 13.5px;
		line-height: 1.55;
		color: #475569;
		margin: 0 0 16px 0;
	}

	.card-checklist {
		list-style: none;
		padding: 0;
		margin: 0 0 20px 0;
		display: flex;
		flex-direction: column;
		gap: 9px;
	}

	.card-checklist li {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 13px;
		font-weight: 600;
		color: #082442;
		line-height: 1.4;
	}

	.check-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		margin-top: 1px;
	}

	.card-action {
		margin-top: auto;
		padding-top: 6px;
	}

	.btn-card-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		padding: 10px 20px;
		font-size: 13px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.22);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.btn-card-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 5px 14px rgba(245, 179, 49, 0.32);
	}

	.card-disclaimer {
		font-size: 11px;
		color: #94A3B8;
		margin: 10px 0 0 0;
		line-height: 1.4;
		font-style: italic;
	}

	.card-media {
		position: relative;
		width: 36%;
		min-width: 170px;
		display: flex;
		align-items: stretch;
		overflow: hidden;
		flex-shrink: 0;
	}

	.media-accent-circle {
		position: absolute;
		top: -12px;
		right: -12px;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background: #16B6C1;
		opacity: 0.18;
		pointer-events: none;
		z-index: 1;
	}

	.card-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		border-top-left-radius: 65px;
		border-bottom-left-radius: 65px;
		display: block;
		position: relative;
		z-index: 2;
	}

	/* Mengapa Memilih SDJNusantara Card */
	.why-us-card {
		background: #EAF7F9;
		border: 1px solid #D2EFF2;
		border-radius: 20px;
		padding: 28px 24px 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 350px;
		box-sizing: border-box;
		box-shadow: 0 8px 28px rgba(8, 36, 66, 0.03);
	}

	.why-title {
		font-size: 21px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		line-height: 1.3;
	}

	.why-desc {
		font-size: 13.5px;
		line-height: 1.5;
		color: #475569;
		margin: 0 0 20px 0;
	}

	.why-tiles-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
		margin-top: auto;
	}

	.why-tile {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 12px;
		padding: 14px 12px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.03);
		transition: transform 0.2s ease;
	}

	.why-tile:hover {
		transform: translateY(-2px);
		border-color: #16B6C1;
	}

	.why-icon {
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}

	.why-tile-title {
		font-size: 12.5px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 4px 0;
		line-height: 1.3;
	}

	.why-tile-desc {
		font-size: 11px;
		line-height: 1.45;
		color: #64748B;
		margin: 0;
	}

	/* ==========================================
	     5. SPLIT CTA BANNER & FAQ ACCORDION
	     ========================================== */
	.hub-bottom-section {
		padding: 16px 0 60px;
		background: #FFFFFF;
	}

	.bottom-grid {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 26px;
		align-items: stretch;
	}

	.cta-banner-card {
		position: relative;
		background: #082442;
		border-radius: 20px;
		overflow: hidden;
		padding: 38px 32px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.12);
	}

	.cta-bg-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
	}

	.cta-bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		opacity: 0.22;
		display: block;
	}

	.cta-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(8, 36, 66, 0.94) 0%, rgba(8, 36, 66, 0.82) 100%);
	}

	.cta-content {
		position: relative;
		z-index: 2;
	}

	.cta-title {
		font-size: clamp(22px, 2.2vw, 28px);
		font-weight: 800;
		color: #FFFFFF;
		line-height: 1.3;
		margin: 0 0 12px 0;
	}

	.cta-desc {
		font-size: 14px;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.85);
		margin: 0 0 24px 0;
		max-width: 480px;
	}

	.cta-buttons {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.btn-chat {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(255, 255, 255, 0.12);
		border: 1.5px solid rgba(255, 255, 255, 0.4);
		color: #FFFFFF;
		padding: 11px 18px;
		font-size: 13px;
		font-weight: 600;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-chat:hover {
		background: rgba(255, 255, 255, 0.22);
		border-color: #FFFFFF;
		transform: translateY(-2px);
	}

	.chat-icon {
		display: flex;
		align-items: center;
	}

	.faq-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.faq-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px 0;
	}

	.faq-subtitle {
		font-size: 13.5px;
		color: #64748B;
		margin: 0 0 18px 0;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.faq-item {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.2s ease;
	}

	.faq-item.is-open {
		border-color: #16B6C1;
		box-shadow: 0 4px 16px rgba(22, 182, 193, 0.08);
	}

	.faq-question-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 18px;
		background: none;
		border: none;
		text-align: left;
		cursor: pointer;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		gap: 12px;
	}

	.faq-chevron {
		transition: transform 0.2s ease;
		display: flex;
		align-items: center;
		color: #64748B;
		flex-shrink: 0;
	}

	.faq-item.is-open .faq-chevron {
		transform: rotate(180deg);
		color: #079EAD;
	}

	.faq-answer-panel {
		padding: 0 18px 14px;
		border-top: 1px solid #F1F5F9;
		margin-top: 2px;
		padding-top: 10px;
	}

	.faq-answer-text {
		font-size: 13.5px;
		line-height: 1.6;
		color: #475569;
		margin: 0;
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

		.bottom-grid {
			grid-template-columns: 1fr;
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

		.cards-grid {
			grid-template-columns: 1fr;
		}

		.service-card {
			flex-direction: column-reverse;
		}

		.card-media {
			width: 100%;
			height: 200px;
		}

		.card-img {
			border-radius: 0;
		}

		.why-tiles-row {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-gold,
		.btn-chat {
			justify-content: center;
		}
	}
</style>
