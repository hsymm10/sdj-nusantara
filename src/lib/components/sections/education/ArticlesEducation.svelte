<!-- Section 10: Artikel & Wawasan (Mockup Resmi SDJNusantara & Modal Detail Interaktif) -->
<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	interface ArticleData {
		id: string;
		title: string;
		category: string;
		categoryIcon: 'grad' | 'building' | 'briefcase' | 'chart';
		date: string;
		readTime: string;
		img: string;
		href: string;
		description: string;
		highlights: string[];
	}

	const articles = $derived<ArticleData[]>(
		i18n.lang === 'en'
			? [
					{
						id: 'beasiswa-luar-negeri',
						title: '5 Tips for Winning Overseas Scholarships',
						category: 'Scholarship',
						categoryIcon: 'grad',
						date: '20 Jan 2025',
						readTime: '5 min read',
						img: '/images/article-card-1.jpg',
						href: '/artikel/5-tips-sukses-mendapatkan-beasiswa-luar-negeri',
						description:
							'Securing an overseas scholarship is a dream for many students, yet the selection process is highly competitive. Here are 5 essential tips to strengthen your international scholarship application.',
						highlights: [
							'Define your academic goals and choose the right scholarship scheme.',
							'Prepare your academic documents thoroughly and early.',
							'Write a compelling, authentic personal statement or essay.',
							'Build meaningful organizational or social impact experience.',
							'Prepare for interviews with structured practice and confidence.'
						]
					},
					{
						id: 'tren-pendidikan-2025',
						title: 'Global Education Trends in 2025',
						category: 'Education',
						categoryIcon: 'building',
						date: '18 Jan 2025',
						readTime: '6 min read',
						img: '/images/article-card-2.jpg',
						href: '/artikel/tren-pendidikan-global-di-tahun-2025',
						description:
							'The global education sector continues to evolve rapidly alongside advancements in artificial intelligence and interdisciplinary learning. Explore the key trends shaping the future of educational institutions worldwide.',
						highlights: [
							'Integration of AI and adaptive technologies into curricula.',
							'Cross-disciplinary research and global academic collaboration.',
							'Stronger emphasis on digital literacy and technology ethics.',
							'Competency-based assessment built on real-world portfolios.',
							'International exchange programs and institutional partnerships.'
						]
					},
					{
						id: 'daya-saing-kerja',
						title: 'How to Boost Your Competitiveness in the Job Market',
						category: 'Career',
						categoryIcon: 'briefcase',
						date: '15 Jan 2025',
						readTime: '4 min read',
						img: '/images/article-card-3.jpg',
						href: '/artikel/cara-meningkatkan-daya-saing-di-dunia-kerja',
						description:
							'Modern labor markets demand high adaptability and a proven portfolio of competencies. Learn strategic steps to position yourself competitively across industries.',
						highlights: [
							'Map core skills aligned with current industry demand.',
							'Build a measurable track record of projects and outcomes.',
							'Grow your professional network consistently.',
							'Master persuasive communication and structured problem-solving.',
							'Adopt a continuous learning mindset (growth mindset).'
						]
					},
					{
						id: 'soft-skill-digital',
						title: 'The Importance of Soft Skills in the Digital Era',
						category: 'Soft Skills',
						categoryIcon: 'chart',
						date: '10 Jan 2025',
						readTime: '5 min read',
						img: '/images/article-card-4.jpg',
						href: '/artikel/pentingnya-soft-skill-di-era-digital',
						description:
							'While automation and AI handle many technical tasks, human soft skills such as empathy, leadership, and emotional intelligence remain the key differentiator of high-performing talent.',
						highlights: [
							'Cross-cultural team collaboration and remote work readiness.',
							'Critical thinking and deep analytical judgment.',
							'Mental resilience and rapid adaptation to change.',
							'Inclusive leadership and effective communication.',
							'Creativity in solving complex, ambiguous challenges.'
						]
					}
				]
			: [
		{
			id: 'beasiswa-luar-negeri',
			title: '5 Tips Sukses Mendapatkan Beasiswa Luar Negeri',
			category: 'Beasiswa',
			categoryIcon: 'grad',
			date: '20 Jan 2025',
			readTime: '5 menit baca',
			img: '/images/article-card-1.jpg',
			href: '/artikel/5-tips-sukses-mendapatkan-beasiswa-luar-negeri',
			description:
				'Mendapatkan beasiswa luar negeri adalah impian banyak pelajar. Namun, prosesnya sering kali penuh persaingan. Berikut 5 tips penting yang bisa meningkatkan peluang Anda untuk lolos beasiswa internasional.',
			highlights: [
				'Tentukan tujuan dan jenis beasiswa yang sesuai.',
				'Siapkan dokumen akademik dengan matang.',
				'Tulis esai yang kuat dan personal.',
				'Tingkatkan pengalaman organisasi atau sosial.',
				'Persiapkan wawancara dengan percaya diri.'
			]
		},
		{
			id: 'tren-pendidikan-2025',
			title: 'Tren Pendidikan Global di Tahun 2025',
			category: 'Pendidikan',
			categoryIcon: 'building',
			date: '18 Jan 2025',
			readTime: '6 menit baca',
			img: '/images/article-card-2.jpg',
			href: '/artikel/tren-pendidikan-global-di-tahun-2025',
			description:
				'Sektor pendidikan dunia terus bertransformasi seiring pesatnya perkembangan kecerdasan buatan dan metode pembelajaran interdisipliner. Simak tren utama yang membentuk masa depan institusi pendidikan global.',
			highlights: [
				'Integrasi AI dan teknologi adaptif dalam kurikulum.',
				'Pendekatan riset lintas disiplin dan kolaborasi global.',
				'Peningkatan fokus pada literasi digital dan etika teknologi.',
				'Metode asesmen kompetensi berbasis portofolio nyata.',
				'Program pertukaran dan kemitraan akademik internasional.'
			]
		},
		{
			id: 'daya-saing-kerja',
			title: 'Cara Meningkatkan Daya Saing di Dunia Kerja',
			category: 'Karier',
			categoryIcon: 'briefcase',
			date: '15 Jan 2025',
			readTime: '4 menit baca',
			img: '/images/article-card-3.jpg',
			href: '/artikel/cara-meningkatkan-daya-saing-di-dunia-kerja',
			description:
				'Pasar tenaga kerja modern menuntut para profesional untuk memiliki fleksibilitas tinggi serta portofolio kompetensi yang teruji. Pelajari langkah strategis dalam memposisikan diri unggul di industri.',
			highlights: [
				'Petakan keahlian inti yang relevan dengan tren industri.',
				'Bangun rekam jejak proyek dan karya yang terukur.',
				'Kembangkan jejaring profesional secara konsisten.',
				'Kuasai komunikasi persuasif dan problem-solving.',
				'Terapkan pola pikir pembelajaran berkelanjutan (growth mindset).'
			]
		},
		{
			id: 'soft-skill-digital',
			title: 'Pentingnya Soft Skill di Era Digital',
			category: 'Soft Skill',
			categoryIcon: 'chart',
			date: '10 Jan 2025',
			readTime: '5 menit baca',
			img: '/images/article-card-4.jpg',
			href: '/artikel/pentingnya-soft-skill-di-era-digital',
			description:
				'Meskipun otomatisasi dan kecerdasan buatan mengambil alih banyak tugas teknis, soft skill seperti empati, kepemimpinan, dan kecerdasan emosional tetap menjadi pembeda utama talenta berkinerja tinggi.',
			highlights: [
				'Kolaborasi tim lintas budaya dan kerja jarak jauh.',
				'Kemampuan berpikir kritis dan analisis mendalam.',
				'Ketahanan mental dan adaptasi cepat terhadap perubahan.',
				'Kepemimpinan inklusif dan komunikasi efektif.',
				'Kreativitas dalam menyelesaikan masalah kompleks.'
			]
		}
	]
	);

	let selectedArticle = $state<ArticleData | null>(null);
	let isModalOpen = $state<boolean>(false);
	let copyFeedback = $state<boolean>(false);

	function openModal(article: ArticleData) {
		selectedArticle = article;
		isModalOpen = true;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	}

	function closeModal() {
		isModalOpen = false;
		selectedArticle = null;
		copyFeedback = false;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	}

	async function copyLink() {
		if (!selectedArticle || typeof window === 'undefined') return;
		const fullUrl = `${window.location.origin}${selectedArticle.href}`;
		try {
			await navigator.clipboard.writeText(fullUrl);
			copyFeedback = true;
			setTimeout(() => {
				copyFeedback = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy URL:', err);
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<section class="articles-edu-section" id="artikel-wawasan">
	<!-- Atmospheric background: Top-Right Yellow Waves & Bottom Full-Width Cyan Waves (Mockup GAMBAR 2) -->
	<div class="articles-bg-decor" aria-hidden="true">
		<!-- Top-right sweeping yellow/amber wave -->
		<svg class="decor-wave-top-right" viewBox="0 0 760 220" fill="none" preserveAspectRatio="none">
			<defs>
				<linearGradient id="yellowWaveLight" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#FFF3D6" stop-opacity="0.3"/>
					<stop offset="50%" stop-color="#FFE59E" stop-opacity="0.6"/>
					<stop offset="100%" stop-color="#FFCA3A" stop-opacity="0.9"/>
				</linearGradient>
				<linearGradient id="yellowWaveMain" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#FFE082" stop-opacity="0.4"/>
					<stop offset="40%" stop-color="#FFC107" stop-opacity="0.85"/>
					<stop offset="100%" stop-color="#FFA000" stop-opacity="0.95"/>
				</linearGradient>
			</defs>
			<!-- Lower pale layer -->
			<path d="M 0 0 C 220 50, 480 90, 760 220 L 760 0 Z" fill="url(#yellowWaveLight)" />
			<!-- Upper vibrant ribbon -->
			<path d="M 160 0 C 360 40, 580 75, 760 160 L 760 0 Z" fill="url(#yellowWaveMain)" />
		</svg>

		<!-- Bottom full-width multi-layered cyan/turquoise wave spanning 100% width -->
		<svg class="decor-wave-bottom-full" viewBox="0 0 1440 140" fill="none" preserveAspectRatio="none">
			<defs>
				<linearGradient id="cyanWaveBack" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#00A6B8" stop-opacity="0.75" />
					<stop offset="50%" stop-color="#00BBD0" stop-opacity="0.85" />
					<stop offset="100%" stop-color="#00D4EA" stop-opacity="0.95" />
				</linearGradient>
				<linearGradient id="cyanWaveFront" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#00C9DE" />
					<stop offset="50%" stop-color="#00E5FF" />
					<stop offset="100%" stop-color="#08B9D2" />
				</linearGradient>
			</defs>
			<!-- Back wave layer -->
			<path d="M 0 140 L 0 55 C 380 95, 920 102, 1440 38 L 1440 140 Z" fill="url(#cyanWaveBack)" />
			<!-- Front wave layer -->
			<path d="M 0 140 L 0 78 C 420 112, 960 115, 1440 58 L 1440 140 Z" fill="url(#cyanWaveFront)" />
		</svg>
	</div>

	<div class="articles-edu-container">
		<!-- A. HERO SECTION (BAGIAN ATAS - 2 KOLOM SESUAI MOCKUP GAMBAR 2) -->
		<div class="articles-hero-layout">
			<!-- Kolom Kiri (40-45%): Label, Judul, Deskripsi, Tombol CTA -->
			<div class="hero-left-col">
				<div class="hero-label-wrap">
					<span class="label-dash" aria-hidden="true"></span>
					<span class="label-text">{i18n.pick('Artikel & Wawasan', 'Articles & Insights')}</span>
				</div>

				<h2 class="hero-title">
					{i18n.pick('Temukan Insight dan ', 'Discover the Latest ')}<span class="highlight-cyan">{i18n.pick('Inspirasi Terbaru', 'Insights & Inspiration')}</span>
				</h2>

				<p class="hero-desc">
					{i18n.pick(
						'Berbagai artikel, panduan, dan informasi terkini seputar pendidikan, beasiswa, dan pengembangan karier.',
						'Explore curated articles, guides, and the latest updates on education, scholarships, and career development.'
					)}
				</p>

				<div class="hero-cta-area">
					<a href="/artikel" class="hero-btn-cta">
						<span>{i18n.pick('Lihat Semua Artikel', 'View All Articles')}</span>
						<svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<line x1="5" y1="12" x2="19" y2="12"/>
							<polyline points="12 5 19 12 12 19"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Kolom Kanan (55-60%): Landscape Photo Frame with Cyan Book Badge & Yellow Sun Rays -->
			<div class="hero-right-col">
				<div class="hero-photo-wrap">
					<!-- Badge Buku Cyan di sudut kiri atas dengan 3 Garis Sinar Kuning -->
					<div class="hero-badge-wrap" aria-hidden="true">
						<div class="badge-sun-rays">
							<span class="ray ray-left"></span>
							<span class="ray ray-mid"></span>
							<span class="ray ray-right"></span>
						</div>
						<div class="hero-book-badge">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
								<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
							</svg>
						</div>
					</div>

					<!-- Landscape Photo Frame -->
					<div class="hero-photo-frame">
						<img
							src="/images/program-study-desk-laptop.jpg"
							alt="Suasana Belajar dan Laptop - Artikel dan Wawasan SDJNusantara"
							class="hero-photo-img"
							loading="eager"
						/>

						<!-- Lengkungan dekorasi cyan & kuning di sudut kanan bawah gambar -->
						<svg class="hero-corner-ribbon" viewBox="0 0 160 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
							<!-- Pita Kuning Luar -->
							<path d="M0 100 C50 96 110 75 160 20 V100 H0 Z" fill="#FFB900"/>
							<!-- Pita Cyan Dalam -->
							<path d="M35 100 C80 96 125 78 160 45 V100 H35 Z" fill="#00C2D8"/>
						</svg>
					</div>
				</div>
			</div>
		</div>

		<!-- B. ARTICLE CARD SECTION (BAGIAN BAWAH - 5 CARDS) -->
		<div class="articles-grid">
			{#each articles as item}
				<div class="article-card">
					<div class="article-thumb-wrap">
						<img src={item.img} alt={item.title} class="article-img" loading="eager" />
						
						<!-- Category Badge on Top-Left -->
						<div class="card-cat-badge">
							{#if item.categoryIcon === 'grad'}
								<svg class="cat-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
									<path d="M12 3L2 8L12 13L22 8L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M6 10.5V16C6 17.5 8.68629 19 12 19C15.3137 19 18 17.5 18 16V10.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M22 8V14" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							{:else if item.categoryIcon === 'building'}
								<svg class="cat-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
									<line x1="3" y1="21" x2="21" y2="21"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
									<polyline points="5 6 12 3 19 6"/>
									<line x1="4" y1="10" x2="4" y2="21"/>
									<line x1="20" y1="10" x2="20" y2="21"/>
									<line x1="8" y1="14" x2="8" y2="17"/>
									<line x1="12" y1="14" x2="12" y2="17"/>
									<line x1="16" y1="14" x2="16" y2="17"/>
								</svg>
							{:else if item.categoryIcon === 'briefcase'}
								<svg class="cat-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
									<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
									<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
								</svg>
							{:else if item.categoryIcon === 'chart'}
								<svg class="cat-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
									<line x1="18" y1="20" x2="18" y2="10"/>
									<line x1="12" y1="20" x2="12" y2="4"/>
									<line x1="6" y1="20" x2="6" y2="14"/>
								</svg>
							{/if}
							<span>{item.category}</span>
						</div>

						<!-- Bottom-right corner geometric yellow ribbon -->
						<svg class="card-thumb-swoosh" viewBox="0 0 70 35" fill="none" preserveAspectRatio="none" aria-hidden="true">
							<path d="M0 35 C25 32 48 20 70 0 L70 35 Z" fill="#FFBA2A"/>
						</svg>
					</div>

					<div class="article-body">
						<h3 class="article-card-title">{item.title}</h3>
						
						<div class="article-meta">
							<span class="article-date">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
									<line x1="16" y1="2" x2="16" y2="6"/>
									<line x1="8" y1="2" x2="8" y2="6"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
								</svg>
								{item.date}
							</span>

							<!-- Trigger Modal Button -->
							<button
								type="button"
								class="article-arrow-btn"
								aria-label={`Buka detail artikel: ${item.title}`}
								onclick={() => openModal(item)}
							>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<line x1="5" y1="12" x2="19" y2="12"/>
									<polyline points="12 5 19 12 12 19"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			{/each}

			<!-- Card 5: View More Articles (Mockup SDJNusantara) -->
			<a href="/artikel" class="article-more-card">
				<div class="more-icon-wrap" aria-hidden="true">
					<div class="more-sun-rays">
						<span class="ray ray-1"></span>
						<span class="ray ray-2"></span>
						<span class="ray ray-3"></span>
					</div>
					<div class="more-icon-box">
						<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FFB323" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
						</svg>
					</div>
				</div>
				<div class="more-label">{@html i18n.pick('Lihat Lebih<br />Banyak Artikel', 'View More<br />Articles')}</div>
				<div class="more-circle-btn" aria-hidden="true">
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="5" y1="12" x2="19" y2="12"/>
						<polyline points="12 5 19 12 12 19"/>
					</svg>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- MODAL DETAIL ARTIKEL (Single Source of Truth Mockup GAMBAR 2) -->
{#if isModalOpen && selectedArticle}
	<!-- Backdrop Overlay with blur & fade-in -->
	<div
		class="modal-backdrop"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-article-title"
		tabindex="-1"
		onclick={(e) => {
			if (e.target === e.currentTarget) closeModal();
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape') closeModal();
		}}
	>
		<!-- Modal Content Container -->
		<div class="modal-container" role="document">
			<!-- Close Button (X) -->
			<button
				type="button"
				class="modal-close-btn"
				aria-label={i18n.pick('Tutup modal artikel', 'Close article modal')}
				onclick={closeModal}
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B2948" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"/>
					<line x1="6" y1="6" x2="18" y2="18"/>
				</svg>
			</button>

			<!-- 2 Columns Grid: Image Left + Info Right -->
			<div class="modal-body-grid">
				<!-- Left Column: Article Photo with Bottom-Left Ribbon -->
				<div class="modal-col-photo">
					<div class="modal-photo-frame">
						<img
							src={selectedArticle.img}
							alt={selectedArticle.title}
							class="modal-photo-img"
						/>
						<!-- Decorative Curve Ribbon at Bottom-Left -->
						<svg class="modal-corner-ribbon-left" viewBox="0 0 120 70" fill="none" preserveAspectRatio="none" aria-hidden="true">
							<path d="M0 70 L0 18 C30 38 68 55 120 70 Z" fill="#FFE699" opacity="0.6"/>
							<path d="M0 70 L0 26 C28 42 62 58 108 70 Z" fill="#FFBA2A"/>
							<path d="M0 18 C30 38 68 55 120 70" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
						</svg>
					</div>
				</div>

				<!-- Right Column: Details & Key Highlights -->
				<div class="modal-col-info">
					<!-- Category Badge -->
					<div class="modal-cat-badge">
						{#if selectedArticle.categoryIcon === 'grad'}
							<svg class="modal-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
								<path d="M12 3L2 8L12 13L22 8L12 3Z" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M6 10.5V16C6 17.5 8.68629 19 12 19C15.3137 19 18 17.5 18 16V10.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M22 8V14" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						{:else if selectedArticle.categoryIcon === 'building'}
							<svg class="modal-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
								<line x1="3" y1="21" x2="21" y2="21"/>
								<line x1="3" y1="10" x2="21" y2="10"/>
								<polyline points="5 6 12 3 19 6"/>
								<line x1="4" y1="10" x2="4" y2="21"/>
								<line x1="20" y1="10" x2="20" y2="21"/>
								<line x1="8" y1="14" x2="8" y2="17"/>
								<line x1="12" y1="14" x2="12" y2="17"/>
								<line x1="16" y1="14" x2="16" y2="17"/>
							</svg>
						{:else if selectedArticle.categoryIcon === 'briefcase'}
							<svg class="modal-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
								<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
							</svg>
						{:else if selectedArticle.categoryIcon === 'chart'}
							<svg class="modal-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
								<line x1="18" y1="20" x2="18" y2="10"/>
								<line x1="12" y1="20" x2="12" y2="4"/>
								<line x1="6" y1="20" x2="6" y2="14"/>
							</svg>
						{/if}
						<span>{selectedArticle.category}</span>
					</div>

					<!-- Article Heading -->
					<h2 class="modal-title" id="modal-article-title">{selectedArticle.title}</h2>

					<!-- Meta: Date & Read Time -->
					<div class="modal-meta-row">
						<span class="modal-meta-item">
							<svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
								<line x1="16" y1="2" x2="16" y2="6"/>
								<line x1="8" y1="2" x2="8" y2="6"/>
								<line x1="3" y1="10" x2="21" y2="10"/>
							</svg>
							{selectedArticle.date}
						</span>
						<span class="meta-divider" aria-hidden="true"></span>
						<span class="modal-meta-item">
							<svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="12" cy="12" r="10"/>
								<polyline points="12 6 12 12 16 14"/>
							</svg>
							{selectedArticle.readTime}
						</span>
					</div>

					<!-- Description -->
					<p class="modal-desc">{selectedArticle.description}</p>

					<!-- Highlight Poin Penting Box -->
					<div class="modal-highlights-card">
						<div class="highlights-accent-bar" aria-hidden="true"></div>
						<ul class="highlights-list">
							{#each selectedArticle.highlights as point}
								<li class="highlight-item">
									<span class="check-circle" aria-hidden="true">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"/>
										</svg>
									</span>
									<span class="highlight-text">{point}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- Separator Horizontal Line -->
			<hr class="modal-divider" />

			<!-- Modal Footer -->
			<div class="modal-footer">
				<!-- Left: Share Channels -->
				<div class="modal-share-wrap">
					<span class="share-label">{i18n.pick('Bagikan Artikel', 'Share Article')}</span>
					<div class="share-btns-group">
						<!-- Copy Link Button -->
						<button
							type="button"
							class="share-btn share-link"
							title={copyFeedback ? i18n.pick('Tersalin!', 'Copied!') : i18n.pick('Salin tautan artikel', 'Copy article link')}
							onclick={copyLink}
						>
							{#if copyFeedback}
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B3C1" stroke-width="2.5">
									<polyline points="20 6 9 17 4 12"/>
								</svg>
							{:else}
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2948" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
									<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
								</svg>
							{/if}
						</button>

						<!-- WhatsApp Share -->
						<a
							href={`https://api.whatsapp.com/send?text=${encodeURIComponent(selectedArticle.title + ' - SDJNusantara')}`}
							target="_blank"
							rel="noopener noreferrer"
							class="share-btn share-wa"
							title="Bagikan via WhatsApp"
						>
							<svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366">
								<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
							</svg>
						</a>

						<!-- LinkedIn Share -->
						<a
							href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://sdjnusantara.com' + selectedArticle.href)}`}
							target="_blank"
							rel="noopener noreferrer"
							class="share-btn share-li"
							title="Bagikan via LinkedIn"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
							</svg>
						</a>

						<!-- Instagram Button -->
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							class="share-btn share-ig"
							title="Ikuti SDJNusantara di Instagram"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="#E4405F">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
							</svg>
						</a>
					</div>
				</div>

				<!-- Right: Read Full Article CTA Button -->
				<a
					href={selectedArticle.href}
					class="modal-cta-btn"
					target="_blank"
					rel="noopener noreferrer"
				>
					{i18n.pick('Baca Artikel Lengkap', 'Read Full Article')}
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
						<polyline points="15 3 21 3 21 9"/>
						<line x1="10" y1="14" x2="21" y2="3"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
{/if}

<style>
	.articles-edu-section {
		position: relative;
		background: #FFFFFF;
		padding: 76px 0 110px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Atmospheric background: Top-Right Yellow Wave & Bottom Full-Width Cyan Waves */
	.articles-bg-decor {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}

	.decor-wave-top-right {
		position: absolute;
		top: 0;
		right: 0;
		width: clamp(380px, 48vw, 760px);
		height: clamp(140px, 16vw, 240px);
		z-index: 1;
		pointer-events: none;
	}

	.decor-wave-bottom-full {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: clamp(80px, 10vw, 150px);
		z-index: 1;
		pointer-events: none;
	}

	/* Unified 78% Container for SDJNusantara Education Page */
	.articles-edu-container {
		position: relative;
		z-index: 2;
		width: 78%;
		max-width: 1240px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* A. HERO SECTION (2 KOLOM - SESUAI MOCKUP GAMBAR 2) */
	.articles-hero-layout {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 52px;
		margin-bottom: 56px;
	}

	.hero-left-col {
		flex: 0 0 44%;
		max-width: 500px;
	}

	.hero-right-col {
		flex: 0 0 52%;
		position: relative;
	}

	/* Label */
	.hero-label-wrap {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 14px;
	}

	.label-dash {
		display: inline-block;
		width: 20px;
		height: 3px;
		background: #00B8C7;
		border-radius: 2px;
	}

	.label-text {
		font-size: 14px;
		font-weight: 700;
		color: #00B8C7;
		letter-spacing: 0.01em;
	}

	/* Main Title */
	.hero-title {
		font-size: clamp(30px, 3.2vw, 44px);
		line-height: 1.22;
		font-weight: 900;
		color: #0B2B50;
		margin: 0 0 16px;
		letter-spacing: -0.02em;
	}

	.highlight-cyan {
		color: #08B9D2;
	}

	/* Subtitle */
	.hero-desc {
		font-size: clamp(14px, 1.15vw, 15.5px);
		line-height: 1.65;
		color: #71839D;
		margin: 0 0 28px;
		max-width: 480px;
	}

	/* CTA Button */
	.hero-btn-cta {
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

	.hero-btn-cta:hover {
		background: #FFA500;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 165, 0, 0.45);
	}

	.cta-arrow {
		transition: transform 0.25s ease;
	}

	.hero-btn-cta:hover .cta-arrow {
		transform: translateX(3px);
	}

	/* Right Column Photo Frame */
	.hero-photo-wrap {
		position: relative;
		width: 100%;
	}

	.hero-photo-frame {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9.2;
		border-radius: 22px;
		overflow: hidden;
		background: #F1F5F9;
		border: 3px solid #FFFFFF;
		box-shadow: 0 16px 36px rgba(11, 43, 80, 0.08);
	}

	.hero-photo-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Corner Ribbon in bottom-right of image */
	.hero-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 160px;
		height: 100px;
		pointer-events: none;
		z-index: 2;
	}

	/* Badge on Top-Left with Sun Rays */
	.hero-badge-wrap {
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

	.hero-book-badge {
		width: 52px;
		height: 52px;
		background: #00B8C7;
		border: 3.5px solid #FFFFFF;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 6px 18px rgba(0, 184, 199, 0.35);
	}

	/* 5 Cards Row */
	.articles-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 18px;
	}

	.article-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 18px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 18px rgba(11, 41, 72, 0.05);
		box-sizing: border-box;
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s;
	}

	.article-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 28px rgba(11, 41, 72, 0.10);
		border-color: #FFDE8A;
	}

	.article-thumb-wrap {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: #F1F5F9;
	}

	.article-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.article-card:hover .article-img {
		transform: scale(1.05);
	}

	/* Category Badge on Card Thumbnail */
	.card-cat-badge {
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 2;
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 4px 10px;
		background: #FFFFFF;
		border-radius: 100px;
		box-shadow: 0 2px 8px rgba(11, 41, 72, 0.12);
		font-size: 11px;
		font-weight: 700;
		color: #0B2948;
	}

	.cat-badge-icon {
		width: 13px;
		height: 13px;
		color: #FFB323;
	}

	/* Corner Swoosh on Card Thumbnail */
	.card-thumb-swoosh {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 55px;
		height: 28px;
		pointer-events: none;
		z-index: 2;
	}

	.article-body {
		padding: 14px 14px 16px;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: space-between;
	}

	.article-card-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.45;
		margin: 0 0 12px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		height: 40px;
	}

	.article-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 10px;
		border-top: 1px solid #F1F5F9;
	}

	.article-date {
		font-size: 11.5px;
		color: #64748B;
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-weight: 500;
	}

	.article-arrow-btn {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #FFB928;
		color: #0B2948;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 8px rgba(255, 185, 40, 0.35);
		transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
	}

	.article-arrow-btn:hover {
		transform: scale(1.1);
		background: #FFAF1A;
		box-shadow: 0 4px 12px rgba(255, 185, 40, 0.5);
	}

	/* Card 5: View More */
	.article-more-card {
		background: #FFFDF5;
		border: 1.5px dashed #FFE082;
		border-radius: 18px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 24px 14px;
		text-decoration: none;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		box-sizing: border-box;
		box-shadow: 0 4px 18px rgba(255, 179, 35, 0.04);
	}

	.article-more-card:hover {
		background: #FFFFFF;
		border-color: #FFB323;
		transform: translateY(-4px);
		box-shadow: 0 12px 28px rgba(255, 179, 35, 0.15);
	}

	.more-icon-wrap {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 12px;
	}

	.more-sun-rays {
		display: flex;
		gap: 6px;
		margin-bottom: 3px;
	}

	.more-sun-rays .ray {
		display: inline-block;
		width: 2.5px;
		height: 7px;
		background: #FFB928;
		border-radius: 2px;
	}

	.more-sun-rays .ray-1 {
		transform: rotate(-30deg);
	}

	.more-sun-rays .ray-3 {
		transform: rotate(30deg);
	}

	.more-icon-box {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.more-label {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		margin-bottom: 16px;
	}

	.more-circle-btn {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: #FFB928;
		color: #0B2948;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 8px rgba(255, 185, 40, 0.35);
		transition: transform 0.2s, background-color 0.2s;
	}

	.article-more-card:hover .more-circle-btn {
		transform: scale(1.1);
		background: #FFAF1A;
	}

	/* ========================================================
	   MODAL STYLES (Single Source of Truth Mockup GAMBAR 2)
	======================================================== */
	.modal-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(11, 27, 43, 0.58);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		box-sizing: border-box;
		animation: modalFadeIn 0.25s ease-out forwards;
	}

	@keyframes modalFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.modal-container {
		position: relative;
		width: 100%;
		max-width: 980px;
		max-height: 90vh;
		background: #FFFFFF;
		border-radius: 28px;
		box-shadow: 0 24px 64px rgba(11, 41, 72, 0.24), 0 4px 16px rgba(11, 41, 72, 0.08);
		padding: 32px 34px 28px;
		box-sizing: border-box;
		overflow-y: auto;
		animation: modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	@keyframes modalScaleUp {
		from {
			transform: scale(0.96);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	/* Close Button (X) */
	.modal-close-btn {
		position: absolute;
		top: 22px;
		right: 22px;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #F1F5F9;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.2s, transform 0.2s;
		z-index: 10;
	}

	.modal-close-btn:hover {
		background: #E2E8F0;
		transform: scale(1.08);
	}

	/* 2 Columns Body */
	.modal-body-grid {
		display: flex;
		align-items: stretch;
		gap: 32px;
	}

	/* Left Column: Photo Frame */
	.modal-col-photo {
		flex: 0 0 38%;
		max-width: 38%;
		display: flex;
	}

	.modal-photo-frame {
		position: relative;
		width: 100%;
		min-height: 440px;
		border-radius: 20px;
		overflow: hidden;
		background: #F1F5F9;
		box-shadow: 0 8px 24px rgba(11, 41, 72, 0.08);
	}

	.modal-photo-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.modal-corner-ribbon-left {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 120px;
		height: 70px;
		pointer-events: none;
		z-index: 2;
	}

	/* Right Column: Information */
	.modal-col-info {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.modal-cat-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 5px 14px;
		background: #FFF7E6;
		border: 1px solid #FFE4A8;
		border-radius: 100px;
		font-size: 12.5px;
		font-weight: 700;
		color: #0B2948;
		align-self: flex-start;
		margin-bottom: 12px;
	}

	.modal-badge-icon {
		width: 14px;
		height: 14px;
		color: #FFB323;
	}

	.modal-title {
		font-size: clamp(23px, 2.2vw, 29px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.25;
		letter-spacing: -0.015em;
		margin: 0 0 10px;
	}

	.modal-meta-row {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 14px;
	}

	.modal-meta-item {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
		color: #64748B;
		font-weight: 500;
	}

	.meta-icon {
		width: 14px;
		height: 14px;
		color: #64748B;
	}

	.meta-divider {
		display: inline-block;
		width: 1px;
		height: 14px;
		background: #CBD5E1;
	}

	.modal-desc {
		font-size: 13.5px;
		line-height: 1.6;
		color: #5A6A80;
		margin: 0 0 16px;
	}

	/* Highlights Box */
	.modal-highlights-card {
		position: relative;
		background: #FFF9E6;
		border-radius: 18px;
		padding: 16px 20px 16px 22px;
		overflow: hidden;
	}

	.highlights-accent-bar {
		position: absolute;
		left: 0;
		top: 20px;
		bottom: 20px;
		width: 4px;
		background: #FFB323;
		border-radius: 0 4px 4px 0;
	}

	.highlights-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.highlight-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.check-circle {
		width: 19px;
		height: 19px;
		border-radius: 50%;
		background: #FFB323;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.highlight-text {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
	}

	/* Divider */
	.modal-divider {
		border: none;
		border-top: 1px solid #E2E8F0;
		margin: 22px 0 18px;
	}

	/* Modal Footer */
	.modal-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}

	.modal-share-wrap {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.share-label {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
	}

	.share-btns-group {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.share-btn {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		text-decoration: none;
		transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
	}

	.share-btn:hover {
		transform: translateY(-2px);
		border-color: #CBD5E1;
		box-shadow: 0 4px 10px rgba(11, 41, 72, 0.08);
	}

	.modal-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 24px;
		background: #FFB51B;
		color: #0B2948;
		font-size: 14px;
		font-weight: 700;
		border-radius: 14px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 181, 27, 0.35);
		transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
	}

	.modal-cta-btn:hover {
		background: #FFAA00;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 181, 27, 0.45);
	}

	/* Responsive Grid Breakpoints */
	@media (max-width: 1080px) {
		.articles-edu-container {
			width: 86%;
		}

		.articles-hero-layout {
			gap: 36px;
			margin-bottom: 44px;
		}

		.hero-left-col {
			flex: 0 0 46%;
		}

		.hero-right-col {
			flex: 0 0 50%;
		}

		.articles-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 16px;
		}

		.modal-container {
			max-width: 840px;
			padding: 26px;
		}

		.modal-col-photo {
			flex: 0 0 40%;
			max-width: 40%;
		}
	}

	@media (max-width: 768px) {
		.articles-edu-section {
			padding: 56px 0 84px;
		}

		.articles-edu-container {
			width: 90%;
		}

		.articles-hero-layout {
			flex-direction: column;
			gap: 36px;
			margin-bottom: 36px;
			text-align: left;
		}

		.hero-left-col {
			flex: 0 0 100%;
			max-width: 100%;
		}

		.hero-right-col {
			flex: 0 0 100%;
			width: 100%;
		}

		.hero-badge-wrap {
			top: -12px;
			left: -10px;
		}

		.hero-book-badge {
			width: 44px;
			height: 44px;
		}

		.articles-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		/* Modal becomes 1 column on mobile */
		.modal-backdrop {
			padding: 16px;
		}

		.modal-container {
			padding: 22px 18px 20px;
			border-radius: 20px;
		}

		.modal-close-btn {
			top: 14px;
			right: 14px;
			width: 32px;
			height: 32px;
		}

		.modal-body-grid {
			flex-direction: column;
			gap: 20px;
		}

		.modal-col-photo {
			flex: 0 0 auto;
			max-width: 100%;
			width: 100%;
		}

		.modal-photo-frame {
			min-height: 220px;
			height: 220px;
		}

		.modal-title {
			font-size: 21px;
		}

		.modal-footer {
			flex-direction: column;
			align-items: stretch;
			gap: 16px;
		}

		.modal-share-wrap {
			justify-content: space-between;
		}

		.modal-cta-btn {
			width: 100%;
			justify-content: center;
			box-sizing: border-box;
		}
	}

	@media (max-width: 500px) {
		.articles-edu-container {
			width: 92%;
		}

		.articles-grid {
			grid-template-columns: 1fr;
			gap: 14px;
		}
	}
</style>
