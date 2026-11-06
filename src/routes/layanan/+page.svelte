<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { chatStore } from '#lib/stores/chat.svelte';
	import { pendidikanKnowledge } from '#lib/data/knowledge/pendidikan';
	import { beasiswaKnowledge } from '#lib/data/knowledge/beasiswa';

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
			answer: 'Anda dapat menghubungi kami melalui formulir kontak atau WhatsApp resmi SDJNusantara. Tim kami akan menjadwalkan diskusi awal untuk memahami kebutuhan dan profil institusi Anda.'
		},
		{
			question: 'Apakah layanan SDJNusantara hanya untuk sekolah?',
			answer: 'Tidak. Kami melayani siswa, mahasiswa, profesional mandiri, sekolah, perguruan tinggi, yayasan pendidikan, serta korporasi dan institusi mitra.'
		},
		{
			question: 'Apakah tersedia konsultasi online?',
			answer: 'Ya, seluruh sesi konsultasi, pendampingan, dan bimbingan dapat dilaksanakan secara daring maupun tatap muka langsung sesuai kesepakatan bersama.'
		},
		{
			question: 'Berapa lama proses layanan berlangsung?',
			answer: 'Durasi layanan bervariasi bergantung pada jenis program, mulai dari sesi bimbingan tematik 1 hari hingga pendampingan terstruktur selama beberapa bulan.'
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
	     1. HERO SECTION (Tinggi ±360px skala 1536, ±240px skala 1024)
	     ========================================== -->
	<header class="hub-hero">
		<!-- Photo full-bleed di kanan mulai ±x 42% dengan fade navy halus dari kiri -->
		<div class="hero-bg-wrapper" aria-hidden="true">
			<picture>
				<source srcset="/images/partner-hero-5.jpg" type="image/jpeg" />
				<img
					src="/images/partner-hero-5.jpg"
					alt="Tim SDJNusantara"
					class="hero-img"
					loading="eager"
					decoding="async"
				/>
			</picture>
			<!-- Fade navy halus dari kiri -->
			<div class="hero-gradient-overlay"></div>
		</div>

		<!-- Wave decoration bottom-left (Teal gelap, pita turquoise, lengkung putih) -->
		<svg class="hero-wave" viewBox="0 0 380 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
			<path d="M0 30 C100 30 180 90 300 160 H0 Z" fill="#0A5E75" fill-opacity="0.92" />
			<path d="M0 75 C100 75 180 120 270 160 H0 Z" fill="url(#teal-grad-hub)" />
			<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
			<defs>
				<linearGradient id="teal-grad-hub" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#16B6C1" />
					<stop offset="100%" stop-color="#079EAD" />
				</linearGradient>
			</defs>
		</svg>

		<!-- Accent decoration bottom-right (Emas tipis & turquoise) -->
		<svg class="hero-wave-right" viewBox="0 0 260 160" fill="none" preserveAspectRatio="none" aria-hidden="true">
			<path d="M260 20 C200 65 120 115 40 160 H260 Z" fill="#079EAD" fill-opacity="0.85" />
			<path d="M260 70 C210 105 150 135 90 160 H260 Z" fill="#16B6C1" />
			<path d="M260 120 C220 138 180 150 140 160 H260 Z" fill="#F5B331" />
		</svg>

		<div class="hub-container hero-container">
			<div class="hero-content">
				<!-- Pill Portofolio Layanan -->
				<div class="hero-pill">
					<span class="pill-dot"></span>
					<span class="pill-text">Portofolio Layanan</span>
				</div>

				<!-- H1 3 baris ±46px weight 800: "Solusi Pendidikan / dan Pengembangan Talenta / untuk Masa Depan." -->
				<h1 class="hero-title">
					<span class="title-line">Solusi Pendidikan</span>
					<span class="title-line">dan Pengembangan <span class="highlight-gold">Talenta</span></span>
					<span class="title-line highlight-gold">untuk Masa Depan.</span>
				</h1>

				<!-- Deskripsi putih ±14px 3 baris max-width ±540px -->
				<p class="hero-desc">
					SDJNusantara menyediakan berbagai layanan pendidikan, program pengembangan talenta, beasiswa, dan layanan hukum untuk mendukung potensi terbaik Anda.
				</p>

				<!-- Tombol aksi ramping: emas "Jelajahi Layanan →" ±150x40px, outline putih ±195x40px -->
				<div class="hero-actions">
					<button type="button" class="btn-hero-gold" onclick={scrollToCards}>
						<span>Jelajahi Layanan</span>
						<span class="btn-arrow" aria-hidden="true">→</span>
					</button>

					<a href="/kontak" class="btn-hero-outline">
						<span>Konsultasi dengan Kami</span>
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- ==========================================
	     2. TAB BAR (Tinggi ±110px pada 1536, overlap hero ≤20px, radius ±24px)
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
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
	     3. INTRO SECTION (Teks kiri & 4 ubin putih kanan)
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
					Layanan Pendidikan dan<br />Pengembangan Talenta
				</h2>
				<p class="intro-desc">
					Pendampingan terintegrasi untuk membantu individu dan institusi dalam merencanakan pendidikan, mengembangkan kompetensi, serta mempersiapkan masa depan yang lebih baik.
				</p>
			</div>

			<!-- Kanan: 4 ubin putih (±160×115px, radius ±14px) ikon outline turquoise ±44px -->
			<div class="intro-tiles-col">
				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
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
						<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="6"></circle>
							<circle cx="12" cy="12" r="2"></circle>
						</svg>
					</div>
					<span class="tile-label">Program Terstruktur</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
						</svg>
					</div>
					<span class="tile-label">Informasi Beasiswa</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
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
	     4. SECTION DAFTAR KARTU LAYANAN & PANEL (Tinggi ±330px per kartu)
	     ========================================== -->
	<section id="daftar-layanan" class="hub-cards-section" aria-label="Daftar Layanan">
		<div class="hub-container">
			<div class="cards-grid {activeTab !== 'semua' ? 'single-filtered' : ''}">
				<!-- KARTU 1: Program Pendidikan -->
				{#if activeTab === 'semua' || activeTab === 'program'}
					<article class="service-card card-program">
						<div class="card-body">
							<div>
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
									{pendidikanKnowledge[0].ringkas}
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
							</div>

							<div class="card-action">
								<a href="/layanan/pendidikan" class="btn-card-gold">
									<span>Jelajahi Semua Program</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
							</div>
						</div>

						<div class="card-media" aria-hidden="true">
							<div class="card-media-accent"></div>
							<picture>
								<source srcset="/images/layanan-hub-program.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-program.jpg"
									alt="Program Pendidikan SDJNusantara"
									class="card-img-curved"
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
							<div>
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
									{beasiswaKnowledge[0].ringkas}
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
							</div>

							<div class="card-action card-action-with-note">
								<a href="/layanan/pendidikan#beasiswa" class="btn-card-gold">
									<span>Temukan Semua Beasiswa</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
								<p class="card-disclaimer">
									SDJNusantara tidak menjanjikan kelulusan atau perolehan beasiswa.
								</p>
							</div>
						</div>

						<div class="card-media" aria-hidden="true">
							<div class="card-media-accent"></div>
							<picture>
								<source srcset="/images/layanan-hub-beasiswa.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-beasiswa.jpg"
									alt="Program Beasiswa SDJNusantara"
									class="card-img-curved"
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
							<div>
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
							</div>

							<div class="card-action">
								<a href="/layanan/hukum" class="btn-card-gold">
									<span>Pelajari Layanan Hukum</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
							</div>
						</div>

						<div class="card-media" aria-hidden="true">
							<div class="card-media-accent"></div>
							<picture>
								<source srcset="/images/layanan-hub-hukum.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-hukum.jpg"
									alt="Patung Dewi Keadilan Layanan Hukum"
									class="card-img-curved"
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
						<!-- Swoosh SVG dekorasi kanan -->
						<div class="why-swoosh-wrap" aria-hidden="true">
							<svg class="why-swoosh-svg" viewBox="0 0 160 330" fill="none" preserveAspectRatio="none">
								<path
									d="M30,0 C90,80 150,140 160,330 L160,0 Z"
									fill="#16B6C1"
									opacity="0.16"
								/>
								<path
									d="M70,0 C120,70 150,150 160,260 L160,0 Z"
									fill="#079EAD"
									opacity="0.12"
								/>
							</svg>
						</div>

						<div class="why-header">
							<h3 id="why-us-heading" class="why-title">Mengapa Memilih SDJNusantara?</h3>
							<p class="why-desc">
								Kami mendampingi dengan pendekatan yang terarah, transparan, dan berorientasi pada kebutuhan Anda.
							</p>
						</div>

						<div class="why-tiles-row">
							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								</div>
								<h4 class="why-tile-title">Tim Profesional</h4>
								<p class="why-tile-desc">Didampingi konsultan dan mentor sesuai bidangnya.</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
									</svg>
								</div>
								<h4 class="why-tile-title">Pendampingan Terarah</h4>
								<p class="why-tile-desc">Proses yang sistematis dan sesuai kebutuhan.</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10"></circle>
										<circle cx="12" cy="12" r="6"></circle>
										<circle cx="12" cy="12" r="2"></circle>
									</svg>
								</div>
								<h4 class="why-tile-title">Solusi Terintegrasi</h4>
								<p class="why-tile-desc">Layanan saling terhubung untuk kebutuhan pendidikan Anda.</p>
							</div>
						</div>
					</aside>
				{/if}
			</div>
		</div>
	</section>

	<!-- ==========================================
	     5. BAND BAWAH DUA KOLOM (Tinggi ±330px pada 1536)
	     ========================================== -->
	<section class="hub-bottom-section" aria-label="Bantuan dan Pertanyaan">
		<div class="bottom-split-container">
			<!-- Kiri (lebar ±55%): Kartu navy menempel tepi kiri layar dengan sudut kanan membulat ±24px -->
			<div class="cta-banner-card">
				<!-- Background foto palu hakim di sisi kiri dengan overlay navy ke kanan -->
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
					<!-- H2 2 baris "Masih Bingung Menentukan / Layanan yang Tepat?" (baris 2 emas) -->
					<h2 class="cta-title">
						Masih Bingung Menentukan<br />
						<span class="highlight-gold">Layanan yang Tepat?</span>
					</h2>
					<p class="cta-desc">
						Tim SDJNusantara siap membantu Anda menemukan program, beasiswa, maupun layanan yang sesuai dengan kebutuhan.
					</p>

					<div class="cta-buttons">
						<a href="/kontak" class="btn-cta-gold">
							<span>Hubungi Kami</span>
							<span class="btn-arrow" aria-hidden="true">→</span>
						</a>

						<button type="button" class="btn-cta-chat" onclick={() => chatStore.open()}>
							<span class="chat-icon" aria-hidden="true">
								<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							</span>
							<span>Chat dengan Asisten SDJNusantara</span>
						</button>
					</div>
				</div>
			</div>

			<!-- Kanan (lebar ±45%): "Pertanyaan Umum" + akordeon 4 baris -->
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
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
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

<Footer compact={true} variant="layanan" />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.services-hub-page {
		padding-top: 48px;
		background: #FFFFFF;
		overflow-x: hidden;
	}

	/* Container khusus halaman ini: ±93% layar (x 87->1448 pada 1536), max-width ±1500px rata tengah di ≥1920 */
	.hub-container {
		width: 93%;
		max-width: 1420px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hub-container {
			max-width: 1500px;
		}
	}

	/* ==========================================
	     1. HERO STYLING (Tinggi ±360px skala 1536, ±240px skala 1024)
	     ========================================== */
	.hub-hero {
		position: relative;
		background-color: #082442;
		height: 445px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 48px;
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
		overflow: hidden;
	}

	/* Foto full-bleed di kanan */
	.hero-img {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 82% 24%;
		display: block;
	}

	/* Fade navy halus dari kiri */
	.hero-gradient-overlay {
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
		pointer-events: none;
	}

	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 380px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-wave-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 260px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-container {
		position: relative;
		z-index: 4;
		padding-left: clamp(20px, 6.2vw, 95px); /* Teks mulai di x ≈ 160px pada 1536 */
		padding-bottom: 24px;
	}

	.hero-content {
		max-width: 580px;
		display: flex;
		flex-direction: column;
	}

	.hero-pill {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		background: rgba(7, 158, 173, 0.18);
		border: 1px solid rgba(22, 182, 193, 0.4);
		padding: 4px 12px;
		border-radius: 9999px;
		width: fit-content;
		margin-bottom: 12px;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #16B6C1;
		box-shadow: 0 0 6px #16B6C1;
	}

	.pill-text {
		color: #E6F7F9;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.03em;
	}

	.hero-title {
		font-size: clamp(28px, 2.8vw, 44px);
		line-height: 1.18;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 12px 0;
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
		font-size: 14px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.9);
		max-width: 540px;
		margin: 0 0 20px 0;
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.btn-hero-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		width: 152px;
		height: 40px;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 9px;
		border: none;
		cursor: pointer;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		box-sizing: border-box;
	}

	.btn-hero-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 5px 16px rgba(245, 179, 49, 0.36);
	}

	.btn-arrow {
		font-size: 14px;
		line-height: 1;
		transition: transform 0.2s ease;
	}

	.btn-hero-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	.btn-hero-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		color: #FFFFFF;
		border: 1.5px solid rgba(255, 255, 255, 0.85);
		width: 195px;
		height: 40px;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 9px;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		box-sizing: border-box;
	}

	.btn-hero-outline:hover {
		background: rgba(255, 255, 255, 0.14);
		border-color: #FFFFFF;
		transform: translateY(-2px);
	}

	/* ==========================================
	     2. TAB BAR OVERLAP (Tinggi ±110px, overlap ≤20px, radius ±24px)
	     ========================================== */
	.tab-overlap-section {
		position: relative;
		z-index: 10;
		margin-top: -20px; /* Overlap hero ≤20px */
		margin-bottom: 28px;
	}

	.tab-overlap-card {
		background: #FFFFFF;
		border-radius: 24px;
		box-shadow: 0 12px 36px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.9);
		display: flex;
		align-items: center;
		height: 105px;
		max-width: 1370px;
		margin: 0 auto;
		padding: 12px 16px;
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
		gap: 12px;
		height: 100%;
		border-radius: 16px;
		border: none;
		background: transparent;
		color: #475569;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
	}

	.tab-btn:hover {
		background: #F8FAFC;
		color: #082442;
	}

	.tab-btn.active {
		background: linear-gradient(135deg, #079EAD 0%, #16B6C1 100%);
		color: #FFFFFF;
		box-shadow: 0 4px 18px rgba(7, 158, 173, 0.28);
	}

	.tab-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.tab-vdivider {
		width: 1px;
		height: 48px;
		background: #E2E8F0;
		margin: 0 6px;
		flex-shrink: 0;
	}

	/* ==========================================
	     3. INTRO SECTION
	     ========================================== */
	.hub-intro-section {
		padding: 24px 0 32px;
		background: #FFFFFF;
	}

	.intro-grid {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 36px;
		align-items: center;
	}

	.intro-text-col {
		display: flex;
		flex-direction: column;
	}

	.section-badge-label {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.label-dash {
		width: 20px;
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
		font-size: clamp(26px, 2.5vw, 36px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 14px 0;
	}

	.intro-desc {
		font-size: 15px;
		line-height: 1.65;
		color: #183553;
		margin: 0;
		max-width: 520px;
	}

	.intro-tiles-col {
		display: flex;
		gap: 14px;
		align-items: center;
	}

	.feature-tile {
		width: 160px;
		height: 115px;
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 14px;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.05);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 10px 12px;
		box-sizing: border-box;
		flex-shrink: 0;
		transition: transform 0.2s ease, border-color 0.2s ease;
	}

	.feature-tile:hover {
		transform: translateY(-3px);
		border-color: #16B6C1;
	}

	.tile-icon-box {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 6px;
	}

	.tile-label {
		font-size: 14px;
		line-height: 1.3;
		font-weight: 700;
		color: #082442;
		display: block;
	}

	/* ==========================================
	     4. SECTION DAFTAR KARTU LAYANAN & PANEL (Tinggi ±330px per kartu)
	     ========================================== */
	.hub-cards-section {
		padding: 10px 0 44px;
		background: #FFFFFF;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
	}

	.cards-grid.single-filtered {
		grid-template-columns: 1fr;
		max-width: 820px;
		margin: 0 auto;
	}

	.service-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 22px;
		box-shadow: 0 8px 30px rgba(8, 36, 66, 0.06);
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		position: relative;
		height: 330px;
		box-sizing: border-box;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}

	.service-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 36px rgba(8, 36, 66, 0.09);
	}

	.card-body {
		width: 62%;
		padding: 24px 22px 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		z-index: 2;
	}

	.card-pill-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
	}

	.card-pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: rgba(7, 158, 173, 0.12);
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		padding: 3.5px 10px;
		border-radius: 9999px;
		margin-bottom: 8px;
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
		color: #64748B;
		background: #F1F5F9;
		border: 1px solid #E2E8F0;
		padding: 2px 8px;
		border-radius: 9999px;
	}

	.card-title {
		font-size: 20px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px 0;
		line-height: 1.25;
	}

	.card-desc {
		font-size: 14.5px;
		line-height: 1.5;
		color: #183553;
		margin: 0 0 14px 0;
	}

	.card-checklist {
		list-style: none;
		padding: 0;
		margin: 0 0 14px 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.card-checklist li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13.5px;
		font-weight: 600;
		color: #082442;
		line-height: 1.35;
	}

	.check-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 15px;
		height: 15px;
		flex-shrink: 0;
	}

	.card-action {
		margin-top: auto;
	}

	.card-action-with-note {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.btn-card-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		padding: 9px 18px;
		font-size: 13px;
		font-weight: 700;
		border-radius: 9px;
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
		font-size: 11.5px;
		color: #94A3B8;
		margin: 0;
		line-height: 1.35;
		font-style: italic;
	}

	/* FOTO BERBENTUK: Tepi kiri miring / melengkung memenuhi tinggi kartu */
	.card-media {
		position: relative;
		width: 38%;
		height: 100%;
		overflow: hidden;
		flex-shrink: 0;
	}

	.card-media-accent {
		position: absolute;
		top: -15px;
		right: -15px;
		width: 90px;
		height: 90px;
		border-radius: 50%;
		background: #16B6C1;
		opacity: 0.24;
		pointer-events: none;
		z-index: 1;
	}

	.card-img-curved {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		display: block;
		position: relative;
		z-index: 2;
		border-top-left-radius: 80px;
		border-bottom-left-radius: 35px;
	}

	/* Mengapa Memilih SDJNusantara Panel */
	.why-us-card {
		background: #EAF7F9;
		border: 1px solid #D2EFF2;
		border-radius: 22px;
		position: relative;
		overflow: hidden;
		padding: 24px 26px 20px;
		height: 330px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 8px 28px rgba(8, 36, 66, 0.04);
	}

	.why-swoosh-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 150px;
		pointer-events: none;
		z-index: 1;
	}

	.why-swoosh-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.why-header {
		position: relative;
		z-index: 2;
	}

	.why-title {
		font-size: 24px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px 0;
		line-height: 1.25;
	}

	.why-desc {
		font-size: 14.5px;
		line-height: 1.5;
		color: #183553;
		margin: 0 0 18px 0;
	}

	.why-tiles-row {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}

	.why-tile {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 14px;
		padding: 14px 12px;
		height: 155px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 12px rgba(8, 36, 66, 0.03);
		transition: transform 0.2s ease, border-color 0.2s ease;
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
		font-size: 14px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 4px 0;
		line-height: 1.3;
	}

	.why-tile-desc {
		font-size: 12.5px;
		line-height: 1.45;
		color: #64748B;
		margin: 0;
	}

	/* ==========================================
	     5. BAND BAWAH DUA KOLOM (Tinggi ±330px pada 1536)
	     ========================================== */
	.hub-bottom-section {
		padding: 16px 0 48px;
		background: #FFFFFF;
	}

	.bottom-split-container {
		width: 100%;
		display: grid;
		grid-template-columns: 55% 45%;
		align-items: stretch;
		min-height: 330px;
	}

	.cta-banner-card {
		position: relative;
		background: #0B2948;
		border-top-right-radius: 24px;
		border-bottom-right-radius: 24px;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		overflow: hidden;
		padding: 38px 48px 38px clamp(30px, 12vw, 190px); /* Teks mulai di x ≈ 340px pada 1536 */
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0 10px 32px rgba(8, 36, 66, 0.12);
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
		width: 50%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
		opacity: 0.25;
		display: block;
	}

	.cta-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(90deg, rgba(11, 41, 72, 0.85) 0%, rgba(11, 41, 72, 0.94) 45%, #0B2948 100%);
	}

	.cta-content {
		position: relative;
		z-index: 2;
		max-width: 520px;
	}

	.cta-title {
		font-size: clamp(24px, 2.3vw, 34px);
		font-weight: 800;
		color: #FFFFFF;
		line-height: 1.25;
		margin: 0 0 12px 0;
	}

	.cta-desc {
		font-size: 15px;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.88);
		margin: 0 0 24px 0;
	}

	.cta-buttons {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.btn-cta-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		padding: 11px 22px;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-cta-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 5px 16px rgba(245, 179, 49, 0.36);
	}

	.btn-cta-chat {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(255, 255, 255, 0.12);
		border: 1.5px solid rgba(255, 255, 255, 0.45);
		color: #FFFFFF;
		padding: 10px 20px;
		font-size: 13.5px;
		font-weight: 600;
		border-radius: 9px;
		cursor: pointer;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-cta-chat:hover {
		background: rgba(255, 255, 255, 0.22);
		border-color: #FFFFFF;
		transform: translateY(-2px);
	}

	.chat-icon {
		display: flex;
		align-items: center;
	}

	/* Kanan: FAQ */
	.faq-card {
		padding: 24px clamp(20px, 4vw, 60px) 24px clamp(20px, 3vw, 48px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
	}

	.faq-title {
		font-size: 24px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px 0;
	}

	.faq-subtitle {
		font-size: 14px;
		color: #64748B;
		margin: 0 0 16px 0;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 9px;
	}

	.faq-item {
		background: #F4F8FB;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 10px;
		overflow: hidden;
		transition: all 0.2s ease;
	}

	.faq-item.is-open {
		border-color: #16B6C1;
		box-shadow: 0 4px 14px rgba(22, 182, 193, 0.08);
	}

	.faq-question-btn {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 18px;
		background: none;
		border: none;
		text-align: left;
		cursor: pointer;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		gap: 12px;
		box-sizing: border-box;
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
		border-top: 1px solid #E2E8F0;
		margin-top: 0;
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
		.hub-hero {
			height: auto;
			padding: 4.5rem 0 3rem;
		}

		.intro-grid {
			grid-template-columns: 1fr;
			gap: 24px;
		}

		.intro-tiles-col {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}

		.feature-tile {
			width: 100%;
		}

		.bottom-split-container {
			grid-template-columns: 1fr;
		}

		.cta-banner-card {
			border-radius: 0;
			padding: 36px 24px;
		}

		.faq-card {
			padding: 32px 24px;
		}
	}

	@media (max-width: 768px) {
		.hub-hero {
			height: auto;
			padding: 40px 0 30px;
		}

		.hero-img {
			display: none;
		}

		.hero-gradient-overlay {
			background: #082442;
		}

		.hero-container {
			padding-left: 0;
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

		.btn-hero-gold,
		.btn-hero-outline {
			width: 100%;
		}

		.tab-overlap-card {
			height: auto;
			padding: 10px;
			gap: 8px;
		}

		.tab-btn {
			padding: 10px 14px;
			font-size: 13.5px;
		}

		.intro-tiles-col {
			grid-template-columns: repeat(2, 1fr);
		}

		.cards-grid {
			grid-template-columns: 1fr;
		}

		.service-card {
			height: auto;
			flex-direction: column-reverse;
		}

		.card-body {
			width: 100%;
			padding: 20px 18px;
		}

		.card-media {
			width: 100%;
			height: 180px;
		}

		.card-img-curved {
			border-radius: 0;
		}

		.why-us-card {
			height: auto;
			padding: 20px 18px;
		}

		.why-tiles-row {
			grid-template-columns: 1fr;
		}

		.why-tile {
			height: auto;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-cta-gold,
		.btn-cta-chat {
			width: 100%;
			justify-content: center;
		}
	}
</style>
