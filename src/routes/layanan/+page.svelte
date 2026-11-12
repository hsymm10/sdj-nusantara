<script lang="ts">
	import { slide } from 'svelte/transition';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
	import { chatStore } from '#lib/stores/chat.svelte';
	import { pendidikanKnowledge } from '#lib/data/knowledge/pendidikan';
	import { beasiswaKnowledge } from '#lib/data/knowledge/beasiswa';
	import { serviceConfig } from '#lib/config/services';
	import { i18n } from '#lib/stores/i18n.svelte';

	let activeTab = $state<'semua' | 'program' | 'beasiswa' | 'hukum'>('semua');
	let openFaq = $state<number | null>(0);
	let tabCardEl = $state<HTMLElement | null>(null);

	function setTab(tab: 'semua' | 'program' | 'beasiswa' | 'hukum') {
		if (tab === 'hukum' && !serviceConfig.legal) return;
		activeTab = tab;
	}

	$effect(() => {
		const currentTab = activeTab;
		if (!tabCardEl || typeof window === 'undefined') return;
		if (window.innerWidth > 768) return;
		const activeEl = tabCardEl.querySelector<HTMLElement>(`[data-tab="${currentTab}"]`);
		if (!activeEl) return;
		const targetLeft =
			activeEl.offsetLeft - (tabCardEl.clientWidth - activeEl.offsetWidth) / 2;
		tabCardEl.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
	});

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

	const faqs = $derived([
		{
			question: i18n.pick('Bagaimana cara mengajukan kerja sama?', 'How do we propose a partnership?'),
			answer: i18n.pick(
				'Anda dapat menghubungi kami melalui formulir kontak atau WhatsApp resmi SDJNusantara. Tim kami akan menjadwalkan diskusi awal untuk memahami kebutuhan dan profil institusi Anda.',
				'You can reach us via our contact form or official SDJNusantara WhatsApp. Our team will schedule an initial discovery session to understand your institution’s needs and profile.'
			)
		},
		{
			question: i18n.pick('Apakah layanan SDJNusantara hanya untuk sekolah?', 'Are SDJNusantara services only for schools?'),
			answer: i18n.pick(
				'Tidak. Kami melayani siswa, mahasiswa, profesional mandiri, sekolah, perguruan tinggi, yayasan pendidikan, serta korporasi dan institusi mitra.',
				'No. We serve high school students, university students, professionals, schools, universities, education foundations, corporations, and partner institutions.'
			)
		},
		{
			question: i18n.pick('Apakah tersedia konsultasi online?', 'Are online consultations available?'),
			answer: i18n.pick(
				'Ya, seluruh sesi konsultasi, pendampingan, dan bimbingan dapat dilaksanakan secara daring maupun tatap muka langsung sesuai kesepakatan bersama.',
				'Yes, all consultation, mentoring, and coaching sessions can be conducted online or in person by mutual agreement.'
			)
		},
		{
			question: i18n.pick('Berapa lama proses layanan berlangsung?', 'How long does the service process take?'),
			answer: i18n.pick(
				'Durasi layanan bervariasi bergantung pada jenis program, mulai dari sesi bimbingan tematik 1 hari hingga pendampingan terstruktur selama beberapa bulan.',
				'Service duration varies by program type, ranging from 1-day thematic workshops to structured mentoring over several months.'
			)
		}
	]);
</script>

<svelte:head>
	<title>{i18n.pick('Portofolio Layanan — SDJNusantara Strategic Your Partner', 'Service Portfolio — SDJNusantara Your Strategic Partner')}</title>
	<meta
		name="description"
		content={i18n.pick(
			serviceConfig.legal
				? 'SDJNusantara menyediakan berbagai layanan pendidikan, program beasiswa, dan layanan hukum untuk mendukung potensi individu dan institusi.'
				: 'SDJNusantara menyediakan berbagai layanan pendidikan, pengembangan talenta, dan program beasiswa untuk mendukung potensi individu dan institusi.',
			serviceConfig.legal
				? 'SDJNusantara provides education services, scholarship programs, and legal services to support individual and institutional potential.'
				: 'SDJNusantara provides education services, talent development, and scholarship programs to support individual and institutional potential.'
		)}
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
					<span class="pill-text">{i18n.pick('Portofolio Layanan', 'Service Portfolio')}</span>
				</div>

				<!-- H1 3 baris ±46px weight 800 -->
				<h1 class="hero-title">
					<span class="title-line">{i18n.pick('Solusi Pendidikan', 'Education Solutions')}</span>
					<span class="title-line">{i18n.pick('dan Pengembangan', 'and')} <span class="highlight-gold">{i18n.pick('Talenta', 'Talent Development')}</span></span>
					<span class="title-line highlight-gold">{i18n.pick('untuk Masa Depan.', 'for the Future.')}</span>
				</h1>

				<!-- Deskripsi putih ±14px 3 baris max-width ±540px -->
				<p class="hero-desc">
					{i18n.pick(
						serviceConfig.legal
							? 'SDJNusantara menyediakan berbagai layanan pendidikan, program pengembangan talenta, beasiswa, dan layanan hukum untuk mendukung potensi terbaik Anda.'
							: 'SDJNusantara menyediakan berbagai layanan pendidikan, program pengembangan talenta, dan beasiswa untuk mendukung potensi terbaik Anda.',
						serviceConfig.legal
							? 'SDJNusantara provides education services, talent development programs, scholarships, and legal services to unlock your full potential.'
							: 'SDJNusantara provides education services, talent development programs, and scholarships to unlock your full potential.'
					)}
				</p>

				<!-- Tombol aksi ramping -->
				<div class="hero-actions">
					<button type="button" class="btn-hero-gold" onclick={scrollToCards}>
						<span>{i18n.pick('Jelajahi Layanan', 'Explore Services')}</span>
						<span class="btn-arrow" aria-hidden="true">→</span>
					</button>

					<a href="/kontak" class="btn-hero-outline">
						<span>{i18n.pick('Konsultasi dengan Kami', 'Consult With Us')}</span>
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- ==========================================
	     2. TAB BAR (Tinggi 84px, overlap hero 16px, radius 20px)
	     ========================================== -->
	<section class="tab-overlap-section" aria-label="Filter Layanan">
		<div class="hub-container">
			<div
				bind:this={tabCardEl}
				class="tab-overlap-card"
				role="tablist"
				aria-label="Kategori Portofolio Layanan"
			>
				<!-- Tab 1: Semua Layanan -->
				<button
					type="button"
					role="tab"
					data-tab="semua"
					class="tab-btn {activeTab === 'semua' ? 'active' : ''}"
					aria-selected={activeTab === 'semua'}
					onclick={() => setTab('semua')}
				>
					<span class="tab-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="3" y="3" width="7" height="7"></rect>
							<rect x="14" y="3" width="7" height="7"></rect>
							<rect x="14" y="14" width="7" height="7"></rect>
							<rect x="3" y="14" width="7" height="7"></rect>
						</svg>
					</span>
					<span class="tab-label">{i18n.pick('Semua Layanan', 'All Services')}</span>
				</button>

				<div class="tab-vdivider" aria-hidden="true"></div>

				<!-- Tab 2: Program Pendidikan -->
				<button
					type="button"
					role="tab"
					data-tab="program"
					class="tab-btn {activeTab === 'program' ? 'active' : ''}"
					aria-selected={activeTab === 'program'}
					onclick={() => setTab('program')}
				>
					<span class="tab-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
						</svg>
					</span>
					<span class="tab-label">{i18n.pick('Program Pendidikan', 'Education Programs')}</span>
				</button>

				<div class="tab-vdivider" aria-hidden="true"></div>

				<!-- Tab 3: Beasiswa -->
				<button
					type="button"
					role="tab"
					data-tab="beasiswa"
					class="tab-btn {activeTab === 'beasiswa' ? 'active' : ''}"
					aria-selected={activeTab === 'beasiswa'}
					onclick={() => setTab('beasiswa')}
				>
					<span class="tab-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 12 20 22 4 22 4 12"></polyline>
							<rect x="2" y="7" width="20" height="5"></rect>
							<line x1="12" y1="22" x2="12" y2="7"></line>
							<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
							<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
						</svg>
					</span>
					<span class="tab-label">{i18n.pick('Beasiswa', 'Scholarships')}</span>
				</button>

				{#if serviceConfig.legal}
					<div class="tab-vdivider" aria-hidden="true"></div>

					<!-- Tab 4: Layanan Hukum -->
					<button
						type="button"
						role="tab"
						data-tab="hukum"
						class="tab-btn {activeTab === 'hukum' ? 'active' : ''}"
						aria-selected={activeTab === 'hukum'}
						onclick={() => setTab('hukum')}
					>
						<span class="tab-icon" aria-hidden="true">
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
				{/if}
			</div>
		</div>
	</section>

	<div class="hub-showcase-band">
		<!-- Ornamen sudut dekoratif lembut sesuai identitas visual SDJNusantara -->
		<svg class="showcase-arc-tl" viewBox="0 0 260 140" fill="none" aria-hidden="true">
			<path d="M0 0 H210 C155 55, 85 95, 0 115 Z" fill="#BCEAF0" fill-opacity="0.38" />
			<path d="M0 0 H145 C105 42, 55 72, 0 88 Z" fill="#00A6B2" fill-opacity="0.16" />
		</svg>
		<svg class="showcase-arc-br" viewBox="0 0 320 170" fill="none" aria-hidden="true">
			<path d="M40 170 C125 112, 220 75, 320 45 L320 170 Z" fill="#7FD8E0" fill-opacity="0.3" />
			<path d="M95 170 C175 118, 245 88, 320 68 L320 170 Z" fill="#FFB629" fill-opacity="0.82" />
			<path d="M145 170 C210 128, 265 102, 320 92 L320 170 Z" fill="#00A6B2" fill-opacity="0.92" />
		</svg>

	<!-- ==========================================
	     3. INTRO SECTION (Teks kiri & 4 ubin putih kanan)
	     ========================================== -->
	<section class="hub-intro-section" aria-labelledby="intro-heading">
		<div class="hub-container intro-grid">
			<!-- Kiri: Header teks -->
			<div class="intro-text-col">
				<div class="section-badge-label">
					<span class="label-dash" aria-hidden="true"></span>
					<span class="label-text">{i18n.pick('Layanan SDJNusantara', 'SDJNusantara Services')}</span>
				</div>
				<h2 id="intro-heading" class="intro-title">
					{i18n.pick('Layanan Pendidikan dan', 'Education and Talent')}<br />{i18n.pick('Pengembangan Talenta', 'Development Services')}
				</h2>
				<p class="intro-desc">
					{i18n.pick(
						'Pendampingan terintegrasi untuk membantu individu dan institusi dalam merencanakan pendidikan, mengembangkan kompetensi, serta mempersiapkan masa depan yang lebih baik.',
						'Integrated mentoring to help individuals and institutions plan education, build competencies, and prepare for a brighter future.'
					)}
				</p>
			</div>

			<!-- Kanan: 4 ubin putih dengan icon container soft teal -->
			<div class="intro-tiles-col">
				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					</div>
					<span class="tile-label">{i18n.pick('Pendampingan Menyeluruh', 'End-to-End Mentoring')}</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="6"></circle>
							<circle cx="12" cy="12" r="2"></circle>
						</svg>
					</div>
					<span class="tile-label">{i18n.pick('Program Terstruktur', 'Structured Programs')}</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
						</svg>
					</div>
					<span class="tile-label">{i18n.pick('Informasi Beasiswa', 'Scholarship Insights')}</span>
				</div>

				<div class="feature-tile">
					<div class="tile-icon-box" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="18" y1="20" x2="18" y2="10"></line>
							<line x1="12" y1="20" x2="12" y2="4"></line>
							<line x1="6" y1="20" x2="6" y2="14"></line>
						</svg>
					</div>
					<span class="tile-label">{i18n.pick('Pengembangan Talenta', 'Talent Development')}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================
	     4. SECTION DAFTAR KARTU LAYANAN & PANEL (Tinggi ±330px per kartu)
	     ========================================== -->
	<section id="daftar-layanan" class="hub-cards-section" aria-label="Daftar Layanan">
		{#snippet mediaCorners()}
			<svg class="card-media-corner-tl" viewBox="0 0 110 110" fill="none">
				<path d="M0 0 H110 C64 22, 24 64, 0 110 Z" fill="#009AA6" />
				<path d="M0 0 H76 C45 18, 18 45, 0 76 Z" fill="#25C3CF" />
			</svg>
			<svg class="card-media-corner-br" viewBox="0 0 190 120" fill="none">
				<path d="M0 120 C75 112, 145 68, 190 0 V120 H0 Z" fill="#F5B331" />
				<path d="M52 120 C110 112, 160 76, 190 22 V120 H52 Z" fill="#009AA6" />
				<path d="M100 120 C142 114, 174 88, 190 52 V120 H100 Z" fill="#25C3CF" />
			</svg>
		{/snippet}
		<div class="hub-container">
			<div class="cards-grid {activeTab !== 'semua' ? 'single-filtered' : !serviceConfig.legal ? 'two-services' : ''}">
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
									<span>{i18n.pick('Program Pendidikan', 'Education Programs')}</span>
								</div>

								<h3 class="card-title">{i18n.pick('Program Pendidikan', 'Education Programs')}</h3>
								<p class="card-desc">
									{i18n.pick(
										pendidikanKnowledge[0].ringkas,
										'Structured talent management, academic mentoring, skills training, and institutional collaboration designed for measurable growth.'
									)}
								</p>

								<ul class="card-checklist" aria-label={i18n.pick('Fitur Program Pendidikan', 'Education Program Features')}>
									<li>
										<span class="check-icon" aria-hidden="true">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										</span>
										<span>{i18n.pick('Konsultasi & Manajemen Talenta', 'Talent Consultation & Management')}</span>
									</li>
									<li>
										<span class="check-icon" aria-hidden="true">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										</span>
										<span>{i18n.pick('Scholarship Academy & Kurasi Beasiswa', 'Scholarship Academy & Curated Guides')}</span>
									</li>
									<li>
										<span class="check-icon" aria-hidden="true">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										</span>
										<span>{i18n.pick('Pelatihan Khusus & Kemitraan Kampus', 'Custom Training & Campus Partnerships')}</span>
									</li>
								</ul>
							</div>

							<div class="card-action">
								<a href="/layanan/pendidikan" class="btn-card-gold">
									<span>{i18n.pick('Jelajahi Semua Program', 'Explore All Programs')}</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
							</div>
						</div>

						<div class="card-media" aria-hidden="true">
							<picture class="card-picture">
								<source srcset="/images/layanan-hub-program.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-program.jpg"
									alt="Program Pendidikan SDJNusantara"
									class="card-img-curved"
									loading="lazy"
									decoding="async"
								/>
							</picture>
							{@render mediaCorners()}
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
									<span>{i18n.pick('Beasiswa', 'Scholarships')}</span>
								</div>

								<h3 class="card-title">{i18n.pick('Program Beasiswa', 'Scholarship Programs')}</h3>
								<p class="card-desc">
									{i18n.pick(
										beasiswaKnowledge[0].ringkas,
										'Structured preparation and strategic mentoring for domestic and international scholarship applicants, from profile mapping to interview readiness.'
									)}
								</p>

								<ul class="card-checklist" aria-label={i18n.pick('Fitur Program Beasiswa', 'Scholarship Program Features')}>
									<li>
										<span class="check-icon" aria-hidden="true">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										</span>
										<span>{i18n.pick('Informasi Beasiswa Dalam & Luar Negeri', 'Domestic & International Scholarship Info')}</span>
									</li>
									<li>
										<span class="check-icon" aria-hidden="true">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										</span>
										<span>{i18n.pick('Pendampingan Persiapan & Seleksi', 'Application & Selection Mentoring')}</span>
									</li>
									<li>
										<span class="check-icon" aria-hidden="true">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										</span>
										<span>{i18n.pick('Kurasi Beasiswa Sesuai Profil', 'Profile-Matched Scholarship Curation')}</span>
									</li>
								</ul>
							</div>

							<div class="card-action card-action-with-note">
								<a href="/layanan/pendidikan#beasiswa" class="btn-card-gold">
									<span>{i18n.pick('Temukan Semua Beasiswa', 'Explore All Scholarships')}</span>
									<span class="btn-arrow" aria-hidden="true">→</span>
								</a>
								<p class="card-disclaimer">
									{i18n.pick(
										'SDJNusantara tidak menjanjikan kelulusan atau perolehan beasiswa.',
										'SDJNusantara does not guarantee admission or scholarship awards.'
									)}
								</p>
							</div>
						</div>

						<div class="card-media" aria-hidden="true">
							<picture class="card-picture">
								<source srcset="/images/layanan-hub-beasiswa.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-beasiswa.jpg"
									alt="Program Beasiswa SDJNusantara"
									class="card-img-curved"
									loading="lazy"
									decoding="async"
								/>
							</picture>
							{@render mediaCorners()}
						</div>
					</article>
				{/if}

				<!-- KARTU 3: Layanan Hukum -->
				<!-- WAJIB DIVERIFIKASI pemilik: ruang lingkup layanan hukum dan izin/legalitas praktik (content-master tidak memuat layanan hukum) -->
				{#if serviceConfig.legal && (activeTab === 'semua' || activeTab === 'hukum')}
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
							<picture class="card-picture">
								<source srcset="/images/layanan-hub-hukum.webp" type="image/webp" />
								<img
									src="/images/layanan-hub-hukum.jpg"
									alt="Patung Dewi Keadilan Layanan Hukum"
									class="card-img-curved"
									loading="lazy"
									decoding="async"
								/>
							</picture>
							{@render mediaCorners()}
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
							<h3 id="why-us-heading" class="why-title">{i18n.pick('Mengapa Memilih SDJNusantara?', 'Why Choose SDJNusantara?')}</h3>
							<p class="why-desc">
								{i18n.pick(
									'Kami mendampingi dengan pendekatan yang terarah, transparan, dan berorientasi pada kebutuhan Anda.',
									'We guide you with a targeted, transparent, and needs-oriented approach.'
								)}
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
								<h4 class="why-tile-title">{i18n.pick('Tim Profesional', 'Professional Team')}</h4>
								<p class="why-tile-desc">{i18n.pick('Didampingi konsultan dan mentor sesuai bidangnya.', 'Guided by domain-specialist consultants and mentors.')}</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
									</svg>
								</div>
								<h4 class="why-tile-title">{i18n.pick('Pendampingan Terarah', 'Targeted Mentoring')}</h4>
								<p class="why-tile-desc">{i18n.pick('Proses yang sistematis dan sesuai kebutuhan.', 'A systematic process tailored to your goals.')}</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10"></circle>
										<circle cx="12" cy="12" r="6"></circle>
										<circle cx="12" cy="12" r="2"></circle>
									</svg>
								</div>
								<h4 class="why-tile-title">{i18n.pick('Solusi Terintegrasi', 'Integrated Solutions')}</h4>
								<p class="why-tile-desc">{i18n.pick('Layanan saling terhubung untuk kebutuhan pendidikan Anda.', 'Connected services for your complete educational journey.')}</p>
							</div>
						</div>
					</aside>
				{/if}
			</div>
		</div>
	</section>
	</div>

	<!-- ==========================================
	     5. PERTANYAAN UMUM (FAQ)
	     ========================================== -->
	<section class="hub-faq-section" aria-label="Pertanyaan Umum">
		<!-- Dekorasi Sudut Latar Lembut -->
		<svg class="faq-bg-arc-tr" viewBox="0 0 260 220" fill="none" aria-hidden="true">
			<path d="M80 0 C110 110, 175 180, 260 205 L260 0 Z" fill="#DDF3F6" fill-opacity="0.7" />
			<path d="M145 0 C170 80, 210 130, 260 150 L260 0 Z" fill="#BCEAF0" fill-opacity="0.55" />
		</svg>
		<svg class="faq-bg-arc-bl" viewBox="0 0 240 160" fill="none" aria-hidden="true">
			<path d="M0 40 C85 50, 150 95, 195 160 L0 160 Z" fill="#E3F6F9" fill-opacity="0.75" />
		</svg>
		<svg class="faq-bg-arc-br" viewBox="0 0 320 170" fill="none" aria-hidden="true">
			<path d="M40 170 C120 115, 220 75, 320 45 L320 170 Z" fill="#7FD8E0" fill-opacity="0.35" />
			<path d="M90 170 C170 120, 245 88, 320 68 L320 170 Z" fill="#FFB629" fill-opacity="0.88" />
			<path d="M135 170 C205 128, 265 102, 320 92 L320 170 Z" fill="#00A6B2" />
		</svg>

		<div class="hub-container">
			<div class="faq-card" aria-labelledby="faq-heading">
				<div class="faq-header-top">
					<div class="faq-header-copy">
						<div class="faq-eyebrow">
							<span class="faq-eyebrow-line" aria-hidden="true"></span>
							<span>FAQ</span>
						</div>
						<h3 id="faq-heading" class="faq-title">
							{i18n.pick('Pertanyaan', 'Frequently Asked')} <span class="faq-title-gold">{i18n.pick('Umum', 'Questions')}</span>
						</h3>
						<p class="faq-subtitle">
							{i18n.pick(
								'Temukan jawaban dari pertanyaan yang paling sering ditanyakan.',
								'Find answers to the most commonly asked questions.'
							)}
						</p>
					</div>

					<!-- Ilustrasi Balon Percakapan 3D -->
					<div class="faq-header-illus" aria-hidden="true">
						<svg viewBox="0 0 150 105" fill="none" class="faq-bubbles-svg">
							<defs>
								<linearGradient id="faq-teal-bubble" x1="12" y1="12" x2="96" y2="88" gradientUnits="userSpaceOnUse">
									<stop offset="0%" stop-color="#3BD0DB" />
									<stop offset="100%" stop-color="#009AA6" />
								</linearGradient>
								<linearGradient id="faq-white-bubble" x1="68" y1="44" x2="128" y2="96" gradientUnits="userSpaceOnUse">
									<stop offset="0%" stop-color="#FFFFFF" />
									<stop offset="100%" stop-color="#E7F1F6" />
								</linearGradient>
								<filter id="faq-bubble-shadow" x="0" y="0" width="150" height="105" filterUnits="userSpaceOnUse">
									<feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#082442" flood-opacity="0.12" />
								</filter>
							</defs>

							<!-- Spark Kuning di Kanan Atas -->
							<g stroke="#FFB629" stroke-width="3.6" stroke-linecap="round">
								<line x1="107" y1="18" x2="112" y2="8" />
								<line x1="117" y1="24" x2="128" y2="19" />
								<line x1="119" y1="34" x2="130" y2="35" />
							</g>

							<!-- Balon Teal dengan Tanda Tanya -->
							<g filter="url(#faq-bubble-shadow)">
								<path
									d="M55 14C32.356 14 14 29.01 14 47.52C14 57.33 19.15 66.15 27.38 72.3L22.5 84.5L38.3 78.65C43.52 80.22 49.15 81.04 55 81.04C77.644 81.04 96 66.03 96 47.52C96 29.01 77.644 14 55 14Z"
									fill="url(#faq-teal-bubble)"
								/>
								<path
									d="M47.8 39.2C47.8 34.8 51.3 31.6 56.1 31.6C60.7 31.6 64.1 34.3 64.1 38.4C64.1 41.3 62.4 43.2 59.5 44.9C57.1 46.3 56.2 47.6 56.2 50.1V51.4"
									stroke="#FFFFFF"
									stroke-width="4.4"
									stroke-linecap="round"
								/>
								<circle cx="56.2" cy="59.2" r="2.7" fill="#FFFFFF" />
							</g>

							<!-- Balon Putih dengan 3 Titik -->
							<g filter="url(#faq-bubble-shadow)">
								<path
									d="M99 42C81.879 42 68 53.193 68 67C68 80.807 81.879 92 99 92C103.5 92 107.78 91.22 111.64 89.83L123.5 94.5L119.72 84.95C126.02 80.36 130 74.02 130 67C130 53.193 116.121 42 99 42Z"
									fill="url(#faq-white-bubble)"
									stroke="#DCEAF2"
									stroke-width="1"
								/>
								<circle cx="88" cy="67" r="3.4" fill="#00A6B2" />
								<circle cx="99" cy="67" r="3.4" fill="#46C2CC" />
								<circle cx="110" cy="67" r="3.4" fill="#82D8DF" />
							</g>
						</svg>
					</div>
				</div>

				<div class="faq-list">
					{#each faqs as item, index}
						{@const isOpen = openFaq === index}
						{@const orderNum = String(index + 1).padStart(2, '0')}
						<div class="faq-item {isOpen ? 'is-open' : ''}">
							<button
								type="button"
								class="faq-question-btn"
								aria-expanded={isOpen}
								aria-controls="layanan-faq-ans-{index}"
								onclick={() => toggleFaq(index)}
							>
								<span class="faq-q-left">
									<span class="faq-num-badge">{orderNum}</span>
									<span class="question-text">{item.question}</span>
								</span>
								<span class="faq-chevron" aria-hidden="true">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</span>
							</button>

							{#if isOpen}
								<div
									id="layanan-faq-ans-{index}"
									class="faq-answer-panel"
									transition:slide={{ duration: 220 }}
								>
									<p class="faq-answer-text">{item.answer}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- ==========================================
	     6. CTA BANNER FULL BACKGROUND IMAGE
	     ========================================== -->
	<CtaBanner
		title={i18n.pick('Siap Mengembangkan <span class="highlight-gold">Potensi Institusi Anda?</span>', 'Ready to Unlock <span class="highlight-gold">Your Institution’s Potential?</span>')}
		description={i18n.pick('Temukan solusi pendidikan, pengembangan talenta, dan pendampingan institusi bersama SDJNusantara.', 'Discover education solutions, talent development, and institutional mentoring with SDJNusantara.')}
		bgImage="/images/cta-layanan-collaboration-bg.jpg"
		primaryText={i18n.pick('Jadwalkan Konsultasi', 'Schedule a Consultation')}
		primaryHref="/kontak"
		secondaryText={i18n.pick('Ajukan Kerja Sama', 'Propose Partnership')}
		secondaryHref="/kemitraan"
		variant="layanan"
	/>
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

	/* Container terstandar konsisten dengan Hero & Floating Overlap Bar */
	.hub-container {
		width: 93%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hub-container {
			max-width: var(--hero-container-max-xl, 1500px);
		}
	}

	/* ==========================================
	     1. HERO STYLING (Tinggi ±360px skala 1536, ±240px skala 1024)
	     ========================================== */
	.hub-hero {
		position: relative;
		background-color: #082442;
		height: var(--hero-height-desktop, 445px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: var(--navbar-height, 48px);
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

	.hub-hero .hub-container.hero-container {
		position: relative;
		z-index: var(--z-hero-content, 3);
		width: 100%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		padding: 0 var(--hero-padding-x, 54px);
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hub-hero .hub-container.hero-container {
			max-width: var(--hero-container-max-xl, 1500px);
		}
	}

	@media (max-width: 900px) {
		.hub-hero .hub-container.hero-container {
			padding: 0 1.5rem;
		}
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
		border: 1px solid rgba(226, 232, 240, 0.4);
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
		font-size: clamp(30px, 2.6vw, 39px);
		line-height: 1.18;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 10px 0;
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
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.9);
		max-width: 550px;
		margin: 0 0 16px 0;
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
		width: auto;
		min-width: 174px;
		height: 42px;
		padding: 0 22px;
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
		width: auto;
		min-width: 204px;
		height: 42px;
		padding: 0 22px;
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
	     2. TAB BAR OVERLAP
	     ========================================== */
	.tab-overlap-section {
		position: relative;
		z-index: var(--z-overlap-bar, 10);
		margin-top: var(--overlap-margin-top, -16px);
		margin-bottom: 28px;
	}

	.tab-overlap-card {
		background: #FFFFFF;
		border-radius: 20px;
		box-shadow: 0 10px 32px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.9);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--overlap-card-height, 84px);
		width: 100%;
		margin: 0 auto;
		padding: 12px 18px;
		box-sizing: border-box;
		overflow-x: auto;
		scrollbar-width: none;
	}

	.tab-overlap-card::-webkit-scrollbar {
		display: none;
	}

	.tab-btn {
		flex: 1;
		min-width: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		height: 60px;
		padding: 0 20px;
		margin: 0 6px;
		border-radius: 14px;
		border: none;
		background: transparent;
		color: #082442;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		box-sizing: border-box;
	}

	.tab-btn:hover:not(.active) {
		background: rgba(7, 158, 173, 0.08);
		color: #079EAD;
		transform: translateY(-1px);
	}

	.tab-btn.active {
		background: linear-gradient(135deg, #079EAD 0%, #16B6C1 100%);
		color: #FFFFFF;
		font-weight: 700;
		box-shadow: 0 4px 16px rgba(7, 158, 173, 0.26);
		transform: translateY(-1px);
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

	.tab-vdivider {
		width: 1px;
		height: 38px;
		background: #E2E8F0;
		margin: 0 16px;
		flex-shrink: 0;
	}

	/* ==========================================
	     3. SHOWCASE BAND & INTRO SECTION
	     ========================================== */
	.hub-showcase-band {
		position: relative;
		overflow: hidden;
		background: linear-gradient(180deg, #FFFFFF 0%, #FAFDFF 100%);
	}

	.showcase-arc-tl {
		position: absolute;
		top: 0;
		left: 0;
		width: 240px;
		height: 130px;
		pointer-events: none;
		z-index: 1;
	}

	.showcase-arc-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 300px;
		height: 160px;
		pointer-events: none;
		z-index: 1;
	}

	.hub-intro-section {
		position: relative;
		z-index: 2;
		padding: 36px 0 34px;
	}

	.intro-grid {
		display: grid;
		grid-template-columns: minmax(340px, 1fr) auto;
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
		margin-bottom: 12px;
	}

	.label-dash {
		width: 20px;
		height: 2.5px;
		background: #079EAD;
		border-radius: 2px;
	}

	.label-text {
		font-size: 13.5px;
		font-weight: 700;
		color: #079EAD;
		letter-spacing: 0.02em;
	}

	.intro-title {
		position: relative;
		padding-left: 18px;
		font-size: clamp(28px, 2.5vw, 38px);
		line-height: 1.22;
		font-weight: 800;
		color: #082442;
		margin: 0 0 14px 0;
		letter-spacing: -0.02em;
	}

	.intro-title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 5px;
		bottom: 5px;
		width: 4.5px;
		border-radius: 4px;
		background: #F5B331;
	}

	.intro-desc {
		font-size: 15.5px;
		line-height: 1.65;
		color: #475569;
		margin: 0;
		max-width: 540px;
		padding-left: 18px;
	}

	.intro-tiles-col {
		display: flex;
		gap: 14px;
		align-items: stretch;
	}

	.feature-tile {
		width: clamp(138px, 11vw, 158px);
		min-height: 134px;
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 16px;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.055);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 18px 12px;
		box-sizing: border-box;
		flex-shrink: 0;
		transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
	}

	.feature-tile:hover {
		transform: translateY(-3px);
		border-color: #16B6C1;
		box-shadow: 0 12px 28px rgba(7, 158, 173, 0.1);
	}

	.tile-icon-box {
		width: 52px;
		height: 52px;
		border-radius: 12px;
		background: #EAF9FA;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
	}

	.tile-label {
		font-size: 13.5px;
		line-height: 1.32;
		font-weight: 700;
		color: #082442;
		display: block;
	}

	/* ==========================================
	     4. SECTION DAFTAR KARTU LAYANAN & PANEL
	     ========================================== */
	.hub-cards-section {
		position: relative;
		z-index: 2;
		padding: 6px 0 64px;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
		align-items: stretch;
	}

	.cards-grid.single-filtered {
		grid-template-columns: 1fr;
		max-width: 100%;
		margin: 0 auto;
	}

	.service-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 24px;
		box-shadow: 0 10px 34px rgba(8, 36, 66, 0.06);
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		overflow: hidden;
		position: relative;
		min-height: 364px;
		height: auto;
		box-sizing: border-box;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}

	.service-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 14px 40px rgba(8, 36, 66, 0.09);
	}

	.cards-grid.single-filtered .service-card {
		min-height: 416px;
		padding: 18px 18px 18px 42px;
		gap: 36px;
		box-shadow: 0 12px 38px rgba(8, 36, 66, 0.068);
	}

	.card-body {
		width: 56%;
		padding: 26px 24px 24px 28px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		z-index: 2;
	}

	.cards-grid.single-filtered .card-body {
		width: 47%;
		padding: 18px 0;
		justify-content: center;
	}

	.card-pill-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.card-pill {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		background: #E4F7F9;
		color: #079EAD;
		font-size: 12.5px;
		font-weight: 700;
		padding: 5px 12px;
		border-radius: 9999px;
		margin-bottom: 10px;
		width: fit-content;
	}

	.cards-grid.single-filtered .card-pill {
		font-size: 13.5px;
		padding: 6px 14px;
		margin-bottom: 14px;
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
		padding: 3px 10px;
		border-radius: 9999px;
	}

	.card-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		line-height: 1.25;
		letter-spacing: -0.015em;
	}

	.cards-grid.single-filtered .card-title {
		font-size: clamp(26px, 2.2vw, 33px);
		margin-bottom: 12px;
	}

	.card-desc {
		font-size: 14.5px;
		line-height: 1.55;
		color: #475569;
		margin: 0 0 14px 0;
	}

	.cards-grid.single-filtered .card-desc {
		font-size: 15.5px;
		line-height: 1.62;
		margin-bottom: 20px;
		max-width: 490px;
	}

	.card-checklist {
		list-style: none;
		padding: 0;
		margin: 0 0 18px 0;
		display: flex;
		flex-direction: column;
		gap: 7px;
	}

	.cards-grid.single-filtered .card-checklist {
		gap: 10px;
		margin-bottom: 26px;
	}

	.card-checklist li {
		display: flex;
		align-items: center;
		gap: 9px;
		font-size: 14px;
		font-weight: 700;
		color: #082442;
		line-height: 1.38;
	}

	.cards-grid.single-filtered .card-checklist li {
		font-size: 15px;
		gap: 10px;
	}

	.check-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	.card-action {
		margin-top: auto;
	}

	.cards-grid.single-filtered .card-action {
		margin-top: 0;
	}

	.card-action-with-note {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}

	.btn-card-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		padding: 10px 20px;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.24);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.cards-grid.single-filtered .btn-card-gold {
		padding: 13px 26px;
		font-size: 14.5px;
	}

	.btn-card-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(245, 179, 49, 0.34);
	}

	.btn-card-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	.card-disclaimer {
		font-size: 12px;
		color: #64748B;
		margin: 0;
		line-height: 1.4;
		font-style: italic;
	}

	/* FOTO BERBENTUK: Bingkai sudut organik + aksen lengkung teal & kuning */
	.card-media {
		position: relative;
		width: 44%;
		margin: 14px 14px 14px 0;
		border-radius: 18px;
		border-top-left-radius: 50px;
		overflow: hidden;
		flex-shrink: 0;
		background: #EBF5F7;
	}

	.cards-grid.single-filtered .card-media {
		width: 53%;
		margin: 0;
		min-height: 378px;
		border-radius: 20px;
		border-top-left-radius: 56px;
	}

	.card-picture {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
	}

	.card-img-curved {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		display: block;
	}

	.card-media-corner-tl {
		position: absolute;
		top: 0;
		left: 0;
		width: 72px;
		height: 72px;
		pointer-events: none;
		z-index: 2;
	}

	.cards-grid.single-filtered .card-media-corner-tl {
		width: 96px;
		height: 96px;
	}

	.card-media-corner-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 132px;
		height: 84px;
		pointer-events: none;
		z-index: 2;
	}

	.cards-grid.single-filtered .card-media-corner-br {
		width: 180px;
		height: 112px;
	}

	/* Mengapa Memilih SDJNusantara Panel */
	.why-us-card {
		background: #EAF7F9;
		border: 1px solid #D2EFF2;
		border-radius: 24px;
		position: relative;
		overflow: hidden;
		padding: 28px 28px 24px;
		min-height: 364px;
		height: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.045);
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
		margin: 0 0 8px 0;
		line-height: 1.25;
	}

	.why-desc {
		font-size: 14.5px;
		line-height: 1.55;
		color: #334155;
		margin: 0 0 20px 0;
	}

	.why-tiles-row {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 14px;
	}

	.why-tile {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 14px;
		padding: 16px 14px;
		min-height: 155px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 12px rgba(8, 36, 66, 0.035);
		transition: transform 0.2s ease, border-color 0.2s ease;
	}

	.why-tile:hover {
		transform: translateY(-2px);
		border-color: #16B6C1;
	}

	.why-icon {
		margin-bottom: 10px;
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
		line-height: 1.48;
		color: #64748B;
		margin: 0;
	}

	/* Tata letak penuh seimbang saat hanya 2 layanan aktif (tanpa slot kosong bekas Layanan Hukum) */
	.cards-grid.two-services .why-us-card {
		grid-column: 1 / -1;
		flex-direction: row;
		align-items: center;
		gap: 36px;
		min-height: 210px;
		padding: 30px 36px;
	}

	.cards-grid.two-services .why-header {
		flex: 0 0 34%;
	}

	.cards-grid.two-services .why-desc {
		margin-bottom: 0;
	}

	.cards-grid.two-services .why-tiles-row {
		flex: 1;
		gap: 16px;
	}

	.cards-grid.two-services .why-tile {
		min-height: 142px;
	}

	/* ==========================================
	     5. PERTANYAAN UMUM (FAQ)
	     ========================================== */
	.hub-faq-section {
		position: relative;
		overflow: hidden;
		padding: 52px 0 64px;
		background: #F6FAFC;
	}

	.faq-bg-arc-tr {
		position: absolute;
		top: 0;
		right: 0;
		width: 240px;
		height: 200px;
		pointer-events: none;
		z-index: 1;
	}

	.faq-bg-arc-bl {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 220px;
		height: 150px;
		pointer-events: none;
		z-index: 1;
	}

	.faq-bg-arc-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 300px;
		height: 160px;
		pointer-events: none;
		z-index: 1;
	}

	.hub-faq-section .faq-card {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	.faq-card {
		background: #FFFFFF;
		border: 1px solid #E1ECF4;
		border-radius: 20px;
		padding: 36px 40px;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		box-shadow: 0 12px 34px rgba(8, 36, 66, 0.055), 0 2px 8px rgba(8, 36, 66, 0.03);
	}

	.faq-header-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 20px;
		margin-bottom: 24px;
	}

	.faq-header-copy {
		flex: 1;
		min-width: 0;
	}

	.faq-eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		color: #00A6B2;
		text-transform: uppercase;
		margin-bottom: 6px;
	}

	.faq-eyebrow-line {
		width: 18px;
		height: 2px;
		background: #00A6B2;
		border-radius: 2px;
		display: inline-block;
	}

	.faq-title {
		font-size: 28px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		line-height: 1.2;
		letter-spacing: -0.015em;
	}

	.faq-title-gold {
		color: #FFB629;
	}

	.faq-subtitle {
		font-size: 14px;
		color: #5A7184;
		margin: 0;
		line-height: 1.5;
	}

	.faq-header-illus {
		flex-shrink: 0;
		width: 144px;
		margin-top: -6px;
	}

	.faq-bubbles-svg {
		width: 100%;
		height: auto;
		display: block;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		min-width: 0;
	}

	.faq-item {
		width: 100%;
		min-width: 0;
		background: #FFFFFF;
		border: 1px solid #DCE7F0;
		border-radius: 12px;
		box-sizing: border-box;
		transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.faq-item:hover {
		border-color: #BDD8E4;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.035);
	}

	.faq-item.is-open {
		background: #EFF9FA;
		border-color: #93DDE3;
		box-shadow: 0 4px 14px rgba(0, 166, 178, 0.08);
	}

	.faq-question-btn {
		width: 100%;
		min-height: 52px;
		min-width: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 18px;
		background: transparent;
		border: none;
		text-align: left;
		cursor: pointer;
		color: #082442;
		font-size: 14.5px;
		font-weight: 700;
		gap: 14px;
		box-sizing: border-box;
	}

	.faq-q-left {
		display: flex;
		align-items: center;
		gap: 14px;
		flex: 1;
		min-width: 0;
	}

	.faq-num-badge {
		min-width: 34px;
		height: 28px;
		border-radius: 8px;
		background: #DDF4F5;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: background-color 0.18s ease, color 0.18s ease;
	}

	.faq-item.is-open .faq-num-badge {
		background: #00A6B2;
		color: #FFFFFF;
	}

	.question-text {
		line-height: 1.4;
		white-space: normal;
		overflow-wrap: anywhere;
		word-break: break-word;
		min-width: 0;
		flex: 1;
	}

	.faq-chevron {
		transition: transform 0.22s ease, color 0.2s ease;
		display: flex;
		align-items: center;
		color: #475569;
		flex-shrink: 0;
	}

	.faq-item.is-open .faq-chevron {
		transform: rotate(180deg);
		color: #00A6B2;
	}

	.faq-answer-panel {
		width: 100%;
		padding: 0 22px 18px 66px;
		box-sizing: border-box;
	}

	.faq-answer-text {
		width: 100%;
		font-size: 14px;
		line-height: 1.6;
		color: #475569;
		margin: 0;
		white-space: normal;
		overflow-wrap: anywhere;
		word-break: break-word;
		box-sizing: border-box;
	}

	/* ==========================================
	     RESPONSIVE
	     ========================================== */
	@media (max-width: 1200px) {
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

		.cards-grid.single-filtered .service-card {
			padding: 16px 16px 16px 32px;
			gap: 28px;
		}
	}

	@media (max-width: 1024px) {
		.tab-overlap-card {
			height: 74px;
			padding: 10px 14px;
		}

		.tab-btn {
			height: 54px;
			padding: 0 14px;
			margin: 0 4px;
			font-size: 14px;
			gap: 9px;
		}

		.tab-vdivider {
			height: 32px;
			margin: 0 10px;
		}

		.cards-grid {
			grid-template-columns: 1fr;
		}

		.cards-grid.single-filtered .service-card {
			min-height: 360px;
		}

		.cards-grid.single-filtered .card-media {
			min-height: 328px;
		}

		.faq-card {
			border-radius: 20px;
			padding: 30px 28px;
		}

		.faq-header-illus {
			width: 124px;
		}
	}

	@media (max-width: 900px) {
		.hub-hero {
			height: auto;
			padding: 3.5rem 0 3.25rem;
		}

		.hero-gradient-overlay {
			background: linear-gradient(
				90deg,
				#082442 0%,
				rgba(8, 36, 66, 0.94) 60%,
				rgba(8, 36, 66, 0.78) 100%
			);
		}

		.hero-wave,
		.hero-wave-right {
			display: none;
		}

		.cards-grid.single-filtered .service-card {
			flex-direction: column-reverse;
			padding: 0;
			gap: 0;
			min-height: 0;
		}

		.cards-grid.single-filtered .card-body {
			width: 100%;
			padding: 24px 22px;
		}

		.cards-grid.single-filtered .card-media {
			width: 100%;
			min-height: 240px;
			height: 240px;
			margin: 0;
			border-radius: 0;
		}

		.cards-grid.two-services .why-us-card {
			flex-direction: column;
			align-items: stretch;
			gap: 18px;
		}

		.cards-grid.two-services .why-header {
			flex: none;
		}
	}

	@media (max-width: 768px) {
		.hub-hero {
			height: auto;
			padding: 36px 0 44px;
		}

		.hero-img {
			display: none;
		}

		.hero-gradient-overlay {
			background: #082442;
		}

		.hub-hero .hub-container.hero-container {
			padding: 0 1.5rem;
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

		.tab-overlap-section {
			margin-bottom: 18px;
		}

		.tab-overlap-card {
			height: auto;
			padding: 8px 12px;
			gap: 10px;
			justify-content: flex-start;
			border-radius: 16px;
			-webkit-overflow-scrolling: touch;
		}

		.tab-btn {
			flex: 0 0 auto;
			height: 48px;
			padding: 0 18px;
			margin: 0;
			font-size: 13.5px;
			border-radius: 12px;
			gap: 8px;
		}

		.tab-vdivider {
			display: none;
		}

		.hub-intro-section {
			padding: 20px 0 24px;
		}

		.intro-title {
			font-size: 26px;
			padding-left: 14px;
		}

		.intro-desc {
			font-size: 14.5px;
			padding-left: 14px;
		}

		.intro-tiles-col {
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
		}

		.feature-tile {
			min-height: 118px;
			padding: 14px 10px;
		}

		.tile-icon-box {
			width: 46px;
			height: 46px;
		}

		.hub-cards-section {
			padding: 4px 0 44px;
		}

		.service-card,
		.cards-grid.single-filtered .service-card {
			height: auto;
			min-height: 0;
			flex-direction: column-reverse;
			padding: 0;
			gap: 0;
			border-radius: 20px;
		}

		.card-body,
		.cards-grid.single-filtered .card-body {
			width: 100%;
			padding: 22px 18px;
		}

		.cards-grid.single-filtered .card-title {
			font-size: 24px;
		}

		.cards-grid.single-filtered .card-desc {
			font-size: 14.5px;
		}

		.cards-grid.single-filtered .card-checklist li {
			font-size: 14px;
		}

		.card-media,
		.cards-grid.single-filtered .card-media {
			width: 100%;
			height: 200px;
			min-height: 200px;
			margin: 0;
			border-radius: 0;
		}

		.card-media-corner-tl,
		.cards-grid.single-filtered .card-media-corner-tl {
			width: 64px;
			height: 64px;
		}

		.card-media-corner-br,
		.cards-grid.single-filtered .card-media-corner-br {
			width: 118px;
			height: 74px;
		}

		.btn-card-gold,
		.cards-grid.single-filtered .btn-card-gold {
			width: 100%;
			justify-content: center;
			padding: 12px 20px;
			font-size: 14px;
		}

		.why-us-card,
		.cards-grid.two-services .why-us-card {
			height: auto;
			min-height: 0;
			flex-direction: column;
			align-items: stretch;
			gap: 18px;
			padding: 22px 18px;
			border-radius: 20px;
		}

		.cards-grid.two-services .why-header {
			flex: none;
		}

		.why-tiles-row {
			grid-template-columns: 1fr;
		}

		.why-tile {
			height: auto;
			min-height: 0;
		}

		.showcase-arc-tl {
			display: none;
		}

		.showcase-arc-br {
			opacity: 0.45;
			transform: scale(0.65);
		}

		.hub-faq-section {
			padding: 36px 0 48px;
		}

		.faq-card {
			padding: 22px 16px;
			border-radius: 16px;
		}

		.faq-header-top {
			gap: 12px;
			margin-bottom: 18px;
		}

		.faq-title {
			font-size: 22px;
		}

		.faq-subtitle {
			font-size: 13px;
		}

		.faq-header-illus {
			width: 88px;
			margin-top: 0;
		}

		.faq-question-btn {
			padding: 12px 14px;
			font-size: 13.5px;
			gap: 10px;
		}

		.faq-q-left {
			gap: 10px;
		}

		.faq-num-badge {
			min-width: 30px;
			height: 25px;
			font-size: 12px;
		}

		.faq-answer-panel {
			padding: 0 14px 14px 54px;
		}

		.faq-answer-text {
			font-size: 13px;
		}

		.faq-bg-arc-tr,
		.faq-bg-arc-bl,
		.faq-bg-arc-br {
			opacity: 0.6;
			transform: scale(0.7);
		}
	}
</style>
