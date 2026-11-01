<script lang="ts">
	import { articlesData, type Article } from '#lib/data/articles';

	interface Props {
		selectedCategory: string;
		onSelectCategory: (cat: string) => void;
	}

	let { selectedCategory = 'Semua Artikel', onSelectCategory }: Props = $props();

	let searchQuery = $state('');
	let currentPage = $state(1);

	// Featured Carousel
	const featuredSlides = articlesData.filter(a => a.isFeatured);
	let currentSlide = $state(0);
	let isPaused = $state(false);

	function nextSlide() {
		currentSlide = (currentSlide + 1) % featuredSlides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + featuredSlides.length) % featuredSlides.length;
	}

	function goToSlide(idx: number) {
		currentSlide = idx;
	}

	$effect(() => {
		const timer = setInterval(() => {
			if (!isPaused) {
				nextSlide();
			}
		}, 6000);
		return () => clearInterval(timer);
	});

	// Popular articles
	const popularArticles = articlesData
		.filter(a => a.populerRank !== undefined)
		.sort((a, b) => (a.populerRank || 0) - (b.populerRank || 0));

	// Filtered articles for 3x2 grid
	const filteredArticles = $derived(
		articlesData.filter((a) => {
			const matchesCategory =
				selectedCategory === 'Semua Artikel' || a.kategori === selectedCategory;
			const matchesSearch =
				searchQuery.trim() === '' ||
				a.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
				a.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
				a.kategori.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);

	const categoriesList = [
		{ name: 'Pendidikan', icon: 'education' },
		{ name: 'Beasiswa', icon: 'scholarship' },
		{ name: 'Pengembangan Talenta', icon: 'talent' },
		{ name: 'Keterampilan Digital', icon: 'digital' },
		{ name: 'Kemitraan', icon: 'partner' },
		{ name: 'Karier & Profesional', icon: 'career' }
	];

	function getCategoryCount(catName: string): number {
		return articlesData.filter(a => a.kategori === catName).length;
	}

	// Newsletter state
	let newsletterEmail = $state('');
	let newsletterSuccess = $state(false);
	let newsletterError = $state('');

	function handleNewsletterSubmit(e: Event) {
		e.preventDefault();
		newsletterError = '';
		if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
			newsletterError = 'Silakan masukkan alamat email yang valid.';
			return;
		}
		// TODO: sambungkan ke layanan email backend
		newsletterSuccess = true;
	}
</script>

<div class="article-content-wrapper" id="artikel-terbaru">
	<div class="sch-article-container">
		<div class="article-layout-grid">
			<!-- LEFT COLUMN (Featured Carousel + Artikel Terbaru + Pagination, Width: ±1030px) -->
			<div class="main-left-col">
				<!-- 1. Featured Carousel (Tanpa bingkai kartu putih) -->
				<div
					class="featured-carousel-wrap"
					onmouseenter={() => isPaused = true}
					onmouseleave={() => isPaused = false}
					role="region"
					aria-label="Artikel Pilihan Utama"
				>
					{#if featuredSlides[currentSlide]}
						{@const slide = featuredSlides[currentSlide]}
						<div class="featured-slide-layout">
							<!-- Photo Left (x ±57→610, Height ±350px, Radius ±16px) -->
							<a href="/artikel/{slide.slug}" class="slide-photo-box">
								<img src={slide.gambar} alt={slide.judul} class="slide-img" />
							</a>

							<!-- Text Column Right (x ±635→1065) -->
							<div class="slide-info-box">
								<div class="slide-meta-row">
									<span class="chip-category">{slide.kategori}</span>
									<span class="meta-vdivider" aria-hidden="true">|</span>
									<span class="meta-date">{slide.tanggal}</span>
								</div>

								<h2 class="slide-headline">
									<a href="/artikel/{slide.slug}">{slide.judul}</a>
								</h2>

								<p class="slide-summary-text">{slide.ringkasan}</p>

								<div class="slide-action-row">
									<a href="/artikel/{slide.slug}" class="btn-gold-featured">
										<span>Baca Selengkapnya</span>
										<span class="btn-arrow">→</span>
									</a>

									<!-- Carousel Controls (4 Dots + Prev/Next Buttons) -->
									<div class="carousel-nav-controls">
										<div class="nav-dots" role="tablist">
											{#each featuredSlides as _, idx}
												<button
													type="button"
													class="nav-dot {currentSlide === idx ? 'active' : ''}"
													onclick={() => goToSlide(idx)}
													aria-label="Pilih Slide {idx + 1}"
												></button>
											{/each}
										</div>

										<div class="nav-arrows">
											<button type="button" class="arrow-round-btn" onclick={prevSlide} aria-label="Slide sebelumnya">
												<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
													<polyline points="15 18 9 12 15 6"></polyline>
												</svg>
											</button>
											<button type="button" class="arrow-round-btn" onclick={nextSlide} aria-label="Slide berikutnya">
												<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
													<polyline points="9 18 15 12 9 6"></polyline>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>

				<!-- 2. Section Header: Artikel Terbaru -->
				<div class="latest-section-header">
					<div class="section-label-dash">
						<span class="dash">—</span>
						<span class="label-text">Artikel Terbaru</span>
					</div>
					<h2 class="latest-heading">Insight Terbaru untuk Mendukung Perjalanan Pendidikan Anda</h2>
					<p class="latest-desc">Dapatkan informasi, tips, dan perspektif terbaru dari para ahli kami.</p>
				</div>

				<!-- 3. Grid 3 Kolom x 2 Baris (6 Kartu Bersih) -->
				<div class="cards-3x2-grid">
					{#if filteredArticles.length === 0}
						<div class="empty-state-box">
							<p>Tidak ada artikel yang cocok dengan filter atau kata kunci pencarian Anda.</p>
							<button type="button" class="btn-reset" onclick={() => { onSelectCategory('Semua Artikel'); searchQuery = ''; }}>
								Tampilkan Semua Artikel
							</button>
						</div>
					{:else}
						{#each filteredArticles.slice(0, 6) as item}
							<article class="clean-article-card">
								<a href="/artikel/{item.slug}" class="card-thumb-link">
									<img src={item.gambar} alt={item.judul} class="card-photo" loading="lazy" />
									<!-- Category Pill (Top-Left) -->
									<span class="pill-category-badge">{item.kategori}</span>
									<!-- Date Pill (Top-Right) -->
									<span class="pill-date-badge">{item.tanggal}</span>
								</a>

								<div class="card-text-body">
									<h3 class="card-article-title">
										<a href="/artikel/{item.slug}">{item.judul}</a>
									</h3>
									<p class="card-summary-desc">{item.ringkasan}</p>
									<a href="/artikel/{item.slug}" class="btn-read-article">
										<span>Baca Artikel</span>
										<span class="read-arrow">→</span>
									</a>
								</div>
							</article>
						{/each}
					{/if}
				</div>

				<!-- 4. Pagination Bar (Centered) -->
				<div class="pagination-center-wrap">
					<button type="button" class="page-square-btn nav-btn" disabled={currentPage === 1} onclick={() => currentPage--} aria-label="Halaman sebelumnya">
						←
					</button>
					<button type="button" class="page-square-btn {currentPage === 1 ? 'active' : ''}" onclick={() => currentPage = 1}>
						1
					</button>
					<button type="button" class="page-square-btn {currentPage === 2 ? 'active' : ''}" onclick={() => currentPage = 2}>
						2
					</button>
					<button type="button" class="page-square-btn {currentPage === 3 ? 'active' : ''}" onclick={() => currentPage = 3}>
						3
					</button>
					<button type="button" class="page-square-btn {currentPage === 4 ? 'active' : ''}" onclick={() => currentPage = 4}>
						4
					</button>
					<button type="button" class="page-square-btn {currentPage === 5 ? 'active' : ''}" onclick={() => currentPage = 5}>
						5
					</button>
					<span class="page-dots">…</span>
					<button type="button" class="page-square-btn {currentPage === 12 ? 'active' : ''}" onclick={() => currentPage = 12}>
						12
					</button>
					<button type="button" class="page-square-btn nav-btn" onclick={() => currentPage++} aria-label="Halaman berikutnya">
						→
					</button>
				</div>
			</div>

			<!-- RIGHT SIDEBAR COLUMN (Width: ±367px) -->
			<aside class="sidebar-right-col">
				<!-- 1. Input Pencarian Pill Putih -->
				<div class="search-widget-pill">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Cari artikel, topik, atau kata kunci..."
						class="search-text-input"
					/>
					<button type="button" class="btn-search-round" aria-label="Cari">
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</button>
				</div>

				<!-- 2. Kartu Putih Artikel Terpopuler -->
				<div class="sidebar-card popular-card">
					<h3 class="sidebar-card-title">Artikel Terpopuler</h3>
					<div class="popular-list">
						{#each popularArticles as pop}
							<a href="/artikel/{pop.slug}" class="popular-item">
								<div class="popular-thumb-wrap">
									<img src={pop.gambar} alt={pop.judul} class="pop-img" loading="lazy" />
									<span class="pop-rank-badge">{pop.populerRank}</span>
								</div>
								<div class="popular-info">
									<h4 class="pop-title">{pop.judul}</h4>
									<span class="pop-date">{pop.tanggal}</span>
								</div>
							</a>
						{/each}
					</div>
				</div>

				<!-- 3. Kartu Newsletter Navy -->
				<div class="sidebar-card newsletter-card" id="newsletter">
					<div class="nl-bg-overlay">
						<img src="/images/article-newsletter-bg.jpg" alt="" class="nl-bg-img" loading="lazy" />
						<div class="nl-dark-mask"></div>
					</div>

					<div class="nl-content-wrap">
						<h3 class="nl-title">
							Dapatkan Artikel<br />
							Terbaru Langsung<br />
							di Email Anda
						</h3>
						<p class="nl-desc">
							Berlangganan newsletter kami untuk mendapatkan informasi dan wawasan terkini seputar pendidikan.
						</p>

						{#if newsletterSuccess}
							<div class="nl-success-box">
								Terima kasih! Anda telah terdaftar untuk menerima update berkala.
							</div>
						{:else}
							<form class="nl-form" onsubmit={handleNewsletterSubmit}>
								<input
									type="email"
									bind:value={newsletterEmail}
									placeholder="Masukkan alamat email..."
									class="nl-input-pill"
									required
								/>
								{#if newsletterError}
									<p class="nl-error-text">{newsletterError}</p>
								{/if}
								<button type="submit" class="btn-nl-submit">
									<span>Langganan Sekarang</span>
									<span class="btn-arrow">→</span>
								</button>
							</form>
						{/if}
					</div>
				</div>

				<!-- 4. Kartu Putih Kategori Artikel -->
				<div class="sidebar-card categories-card">
					<h3 class="sidebar-card-title">Kategori Artikel</h3>
					<div class="categories-list">
						{#each categoriesList as cat}
							{@const count = getCategoryCount(cat.name)}
							{@const isCatActive = selectedCategory === cat.name}
							<button
								type="button"
								class="cat-row-btn {isCatActive ? 'active' : ''}"
								onclick={() => onSelectCategory(cat.name)}
							>
								<div class="cat-row-left">
									<div class="cat-mini-icon">
										{#if cat.icon === 'education'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
												<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21V14h6v7"></path>
											</svg>
										{:else if cat.icon === 'scholarship'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
												<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
												<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
											</svg>
										{:else if cat.icon === 'talent'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
												<circle cx="12" cy="12" r="3"></circle>
												<circle cx="19" cy="5" r="2"></circle>
												<circle cx="5" cy="5" r="2"></circle>
												<circle cx="19" cy="19" r="2"></circle>
												<circle cx="5" cy="19" r="2"></circle>
												<line x1="12" y1="9" x2="12" y2="15"></line>
												<line x1="9" y1="12" x2="15" y2="12"></line>
											</svg>
										{:else if cat.icon === 'digital'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
												<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
												<line x1="8" y1="21" x2="16" y2="21"></line>
												<line x1="12" y1="17" x2="12" y2="21"></line>
											</svg>
										{:else if cat.icon === 'partner'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
												<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
												<circle cx="9" cy="7" r="4"></circle>
												<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
												<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
											</svg>
										{:else if cat.icon === 'career'}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
												<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
												<line x1="9" y1="6" x2="9" y2="6.01"></line>
												<line x1="15" y1="6" x2="15" y2="6.01"></line>
												<line x1="9" y1="10" x2="9" y2="10.01"></line>
												<line x1="15" y1="10" x2="15" y2="10.01"></line>
												<path d="M9 18h6"></path>
											</svg>
										{/if}
									</div>
									<span class="cat-row-name">{cat.name}</span>
								</div>
								<span class="cat-row-count">{count}</span>
							</button>
						{/each}
					</div>
				</div>
			</aside>
		</div>
	</div>
</div>

<style>
	.article-content-wrapper {
		width: 100%;
		background: #FFFFFF;
		padding-top: 24px;
		padding-bottom: 13px;
		box-sizing: border-box;
	}

	.sch-article-container {
		width: 100%;
		max-width: 1425px; /* x ±57→1482 on 1536 */
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-article-container {
			max-width: 1500px;
		}
	}

	.article-layout-grid {
		display: grid;
		grid-template-columns: 1030px 367px;
		gap: 28px;
		align-items: start;
		width: 100%;
		box-sizing: border-box;
	}

	/* MAIN LEFT COLUMN */
	.main-left-col {
		width: 100%;
		min-width: 0;
	}

	/* 1. Featured Carousel (Tanpa bingkai kartu putih) */
	.featured-carousel-wrap {
		width: 100%;
		margin-bottom: 42px;
	}

	.featured-slide-layout {
		display: grid;
		grid-template-columns: 553px 1fr;
		gap: 32px;
		align-items: center;
		width: 100%;
	}

	.slide-photo-box {
		width: 553px;
		height: 350px;
		border-radius: 16px;
		overflow: hidden;
		flex-shrink: 0;
		display: block;
		box-shadow: 0 6px 20px rgba(11, 39, 71, 0.08);
	}

	.slide-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.slide-photo-box:hover .slide-img {
		transform: scale(1.02);
	}

	.slide-info-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.slide-meta-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.chip-category {
		font-size: 11.5px;
		font-weight: 700;
		color: #00A6B2;
		background: rgba(22, 182, 193, 0.12);
		padding: 3px 10px;
		border-radius: 6px;
	}

	.meta-vdivider {
		font-size: 11px;
		color: #CBD5E1;
	}

	.meta-date {
		font-size: 13px;
		color: #64748B;
		font-weight: 500;
	}

	.slide-headline {
		font-size: 26px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px 0;
	}

	.slide-headline a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.slide-headline a:hover {
		color: #00A6B2;
	}

	.slide-summary-text {
		font-size: 14.5px;
		line-height: 1.55;
		color: #183553;
		margin: 0 0 22px 0;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-wrap: pretty;
	}

	.slide-action-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.btn-gold-featured {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 42px;
		padding: 0 22px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.28);
		transition: all 0.2s ease;
	}

	.btn-gold-featured:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 14px;
		transition: transform 0.2s ease;
	}

	.btn-gold-featured:hover .btn-arrow {
		transform: translateX(3px);
	}

	.carousel-nav-controls {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.nav-dots {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.nav-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #CBD5E1;
		border: none;
		cursor: pointer;
		padding: 0;
		transition: all 0.2s ease;
	}

	.nav-dot.active {
		background: #00A6B2;
		width: 18px;
		border-radius: 999px;
	}

	.nav-arrows {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.arrow-round-btn {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1.5px solid #CBD5E1;
		background: #FFFFFF;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.arrow-round-btn:hover {
		border-color: #00A6B2;
		color: #00A6B2;
		background: rgba(0, 166, 178, 0.08);
	}

	/* 2. Latest Section Header */
	.latest-section-header {
		margin-bottom: 22px;
	}

	.section-label-dash {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.4rem;
	}

	.dash {
		font-weight: 800;
	}

	.latest-heading {
		font-size: clamp(22px, 1.8vw, 28px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.45rem 0;
		white-space: nowrap;
	}

	.latest-desc {
		font-size: 14.5px;
		line-height: 1.5;
		color: #475569;
		margin: 0;
	}

	/* 3. Cards Grid (3x2) */
	.cards-3x2-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		width: 100%;
		margin-bottom: 36px;
	}

	.clean-article-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 4px 16px rgba(11, 39, 71, 0.05);
		display: flex;
		flex-direction: column;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.clean-article-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(11, 39, 71, 0.1);
	}

	.card-thumb-link {
		position: relative;
		width: 100%;
		height: 180px;
		overflow: hidden;
		display: block;
	}

	.card-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.card-thumb-link:hover .card-photo {
		transform: scale(1.03);
	}

	/* Badges on photo: No collision, clean placement */
	.pill-category-badge {
		position: absolute;
		top: 10px;
		left: 10px;
		background: #FFFFFF;
		color: #082442;
		font-size: 11.5px;
		font-weight: 700;
		padding: 3px 10px;
		border-radius: 999px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
		white-space: nowrap;
	}

	.pill-date-badge {
		position: absolute;
		top: 10px;
		right: 10px;
		background: rgba(255, 255, 255, 0.95);
		color: #475569;
		font-size: 11px;
		font-weight: 600;
		padding: 3px 8px;
		border-radius: 999px;
		white-space: nowrap;
	}

	.card-text-body {
		padding: 16px 18px 18px;
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;
	}

	.card-article-title {
		font-size: 16.5px;
		font-weight: 800;
		color: #082442;
		line-height: 1.35;
		margin: 0 0 8px 0;
		min-height: 44px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-article-title a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.card-article-title a:hover {
		color: #00A6B2;
	}

	.card-summary-desc {
		font-size: 13.5px;
		line-height: 1.5;
		color: #183553;
		margin: 0 0 16px 0;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-wrap: pretty;
	}

	.btn-read-article {
		margin-top: auto;
		color: #00A6B2;
		font-size: 13.5px;
		font-weight: 700;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		transition: all 0.2s ease;
		width: fit-content;
	}

	.read-arrow {
		transition: transform 0.2s ease;
	}

	.btn-read-article:hover {
		color: #079EAD;
	}

	.btn-read-article:hover .read-arrow {
		transform: translateX(3px);
	}

	/* 4. Pagination */
	.pagination-center-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 60px;
		width: 100%;
	}

	.page-square-btn {
		width: 44px;
		height: 44px;
		border-radius: 10px;
		border: 1px solid #E2E8F0;
		background: #FFFFFF;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.page-square-btn:hover:not(:disabled) {
		border-color: #00A6B2;
		color: #00A6B2;
	}

	.page-square-btn.active {
		background: #00A6B2;
		border-color: #00A6B2;
		color: #FFFFFF;
	}

	.page-square-btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.page-dots {
		font-size: 14px;
		color: #94A3B8;
		padding: 0 4px;
	}

	/* SIDEBAR RIGHT COLUMN */
	.sidebar-right-col {
		width: 367px;
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	/* 1. Search Widget Pill */
	.search-widget-pill {
		position: relative;
		width: 100%;
		height: 45px;
	}

	.search-text-input {
		width: 100%;
		height: 45px;
		border-radius: 999px;
		border: 1px solid #CBD5E1;
		background: #FFFFFF;
		padding: 0 52px 0 20px;
		font-size: 13.5px;
		color: #082442;
		box-sizing: border-box;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.search-text-input:focus {
		border-color: #00A6B2;
		box-shadow: 0 0 0 3px rgba(0, 166, 178, 0.15);
	}

	.btn-search-round {
		position: absolute;
		right: 3px;
		top: 3px;
		width: 39px;
		height: 39px;
		border-radius: 50%;
		background: #082442;
		color: #FFFFFF;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.btn-search-round:hover {
		background: #00A6B2;
	}

	/* Sidebar Shared Card Styles */
	.sidebar-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 18px;
		padding: 22px;
		box-shadow: 0 4px 16px rgba(11, 39, 71, 0.05);
		box-sizing: border-box;
	}

	.sidebar-card-title {
		font-size: 17.5px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 16px 0;
	}

	/* Popular List */
	.popular-list {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.popular-item {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		padding-bottom: 14px;
		border-bottom: 1px solid #F1F5F9;
		transition: transform 0.2s ease;
	}

	.popular-item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.popular-thumb-wrap {
		position: relative;
		width: 105px;
		height: 70px;
		border-radius: 8px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.pop-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.pop-rank-badge {
		position: absolute;
		top: 5px;
		left: 5px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 11px;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}

	.popular-info {
		flex: 1;
		min-width: 0;
	}

	.pop-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0 0 4px 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.popular-item:hover .pop-title {
		color: #00A6B2;
	}

	.pop-date {
		font-size: 12px;
		color: #64748B;
	}

	/* Newsletter Card */
	.newsletter-card {
		position: relative;
		background: #082442;
		color: #FFFFFF;
		border: none;
		overflow: hidden;
	}

	.nl-bg-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}

	.nl-bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.nl-dark-mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(8, 36, 66, 0.88);
	}

	.nl-content-wrap {
		position: relative;
		z-index: 2;
	}

	.nl-title {
		font-size: 23px;
		line-height: 1.25;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 10px 0;
	}

	.nl-desc {
		font-size: 13.5px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.85);
		margin: 0 0 16px 0;
		text-wrap: pretty;
	}

	.nl-form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.nl-input-pill {
		width: 100%;
		height: 44px;
		border-radius: 999px;
		border: none;
		padding: 0 18px;
		font-size: 13.5px;
		color: #082442;
		box-sizing: border-box;
		outline: none;
	}

	.btn-nl-submit {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 100%;
		height: 44px;
		border-radius: 8px;
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 13.5px;
		font-weight: 700;
		border: none;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.btn-nl-submit:hover {
		background: #079EAD;
	}

	.nl-success-box {
		background: rgba(0, 166, 178, 0.2);
		border: 1px solid #00A6B2;
		color: #FFFFFF;
		padding: 12px;
		border-radius: 8px;
		font-size: 13px;
		line-height: 1.4;
	}

	.nl-error-text {
		color: #F87171;
		font-size: 12px;
		margin: 0;
	}

	/* Categories Card */
	.categories-list {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.cat-row-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 10px;
		border-radius: 8px;
		border: none;
		background: transparent;
		cursor: pointer;
		transition: all 0.2s ease;
		width: 100%;
	}

	.cat-row-btn:hover {
		background: #F8FAFC;
	}

	.cat-row-btn.active {
		background: rgba(0, 166, 178, 0.1);
	}

	.cat-row-left {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.cat-mini-icon {
		display: flex;
		align-items: center;
		color: #00A6B2;
	}

	.cat-row-name {
		font-size: 14px;
		font-weight: 600;
		color: #082442;
	}

	.cat-row-btn.active .cat-row-name {
		color: #00A6B2;
		font-weight: 700;
	}

	.cat-row-count {
		font-size: 12px;
		font-weight: 700;
		color: #475569;
		background: #F1F5F9;
		padding: 2px 8px;
		border-radius: 999px;
	}

	.empty-state-box {
		grid-column: 1 / -1;
		padding: 3rem 1rem;
		text-align: center;
		background: #F8FAFC;
		border-radius: 14px;
		border: 1px dashed #CBD5E1;
	}

	.btn-reset {
		margin-top: 10px;
		padding: 8px 16px;
		background: #082442;
		color: #FFF;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 600;
	}

	@media (max-width: 1100px) {
		.sch-article-container {
			padding: 0 1.5rem;
		}
		.article-layout-grid {
			grid-template-columns: 1fr;
		}
		.featured-slide-layout {
			grid-template-columns: 1fr;
		}
		.slide-photo-box {
			width: 100%;
			height: 260px;
		}
		.sidebar-right-col {
			width: 100%;
		}
		.cards-3x2-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.cards-3x2-grid {
			grid-template-columns: 1fr;
		}
		.latest-heading {
			white-space: normal;
		}
		.slide-action-row {
			flex-direction: column;
			align-items: stretch;
			gap: 16px;
		}
		.btn-gold-featured {
			width: 100%;
			justify-content: center;
		}
		.carousel-nav-controls {
			justify-content: space-between;
			width: 100%;
		}
		.page-square-btn {
			width: 38px;
			height: 38px;
			font-size: 13px;
		}
	}
</style>
