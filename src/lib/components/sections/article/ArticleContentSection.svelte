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
				!searchQuery.trim() ||
				a.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
				a.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
				a.kategori.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);

	// Category counts
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

	// Newsletter
	let newsletterEmail = $state('');
	let newsletterSuccess = $state(false);
	let newsletterError = $state('');

	function handleNewsletterSubmit(e: Event) {
		e.preventDefault();
		newsletterError = '';
		if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
			newsletterError = 'Masukkan email yang valid.';
			return;
		}
		newsletterSuccess = true;
	}
</script>

<section class="article-content-section">
	<div class="content-container">
		<!-- Left Main Column (Featured + Latest Grid + Pagination) -->
		<div class="main-left-col">
			<!-- 1. Featured Carousel Card -->
			<div
				class="featured-card-wrap"
				onmouseenter={() => isPaused = true}
				onmouseleave={() => isPaused = false}
				role="region"
				aria-label="Featured Carousel"
			>
				{#if featuredSlides[currentSlide]}
					{@const slide = featuredSlides[currentSlide]}
					<div class="featured-card">
						<div class="slide-img-box">
							<img src={slide.gambar} alt={slide.judul} class="slide-img" />
						</div>

						<div class="slide-content">
							<div class="slide-meta">
								<span class="category-chip">{slide.kategori}</span>
								<span class="meta-sep">|</span>
								<span class="date-text">{slide.tanggal}</span>
							</div>

							<h2 class="slide-title">
								<a href="/artikel/{slide.slug}">{slide.judul}</a>
							</h2>

							<p class="slide-summary">{slide.ringkasan}</p>

							<div class="slide-bottom-row">
								<a href="/artikel/{slide.slug}" class="btn-read-more">
									<span>Baca Selengkapnya</span>
									<span class="btn-arrow">→</span>
								</a>

								<div class="carousel-controls">
									<div class="dots-wrap">
										{#each featuredSlides as _, idx}
											<button
												type="button"
												class="dot {currentSlide === idx ? 'active' : ''}"
												onclick={() => goToSlide(idx)}
												aria-label="Slide {idx + 1}"
											></button>
										{/each}
									</div>

									<div class="arrow-buttons">
										<button type="button" class="arrow-btn" onclick={prevSlide} aria-label="Sebelumnya">
											<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
												<polyline points="15 18 9 12 15 6"></polyline>
											</svg>
										</button>
										<button type="button" class="arrow-btn" onclick={nextSlide} aria-label="Berikutnya">
											<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
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
			<div class="latest-header">
				<div class="section-dash-line">
					<span class="dash"></span>
					<span class="section-tag">Artikel Terbaru</span>
				</div>
				<h2 class="section-heading">Insight Terbaru untuk Mendukung Perjalanan Pendidikan Anda</h2>
				<p class="section-desc">Dapatkan informasi, tips, dan perspektif terbaru dari para ahli kami.</p>
			</div>

			<!-- 3. Cards Grid (3 kolom x 2 baris) -->
			<div class="cards-grid">
				{#if filteredArticles.length === 0}
					<div class="empty-state">
						<p>Tidak ada artikel yang cocok dengan filter atau pencarian Anda.</p>
						<button type="button" class="btn-reset-filter" onclick={() => { onSelectCategory('Semua Artikel'); searchQuery = ''; }}>
							Reset Filter
						</button>
					</div>
				{:else}
					{#each filteredArticles.slice(0, 6) as item}
						<div class="article-card">
							<a href="/artikel/{item.slug}" class="card-thumb-wrap">
								<img src={item.gambar} alt={item.judul} class="card-thumb-img" loading="lazy" />
								<span class="thumb-pill-cat">{item.kategori}</span>
								<span class="thumb-pill-date">{item.tanggal}</span>
							</a>

							<div class="card-body">
								<h3 class="card-title">
									<a href="/artikel/{item.slug}">{item.judul}</a>
								</h3>
								<p class="card-summary">{item.ringkasan}</p>
								<a href="/artikel/{item.slug}" class="card-read-link">
									<span>Baca Artikel</span>
									<span class="link-arrow">→</span>
								</a>
							</div>
						</div>
					{/each}
				{/if}
			</div>

			<!-- 4. Pagination Bar -->
			<div class="pagination-bar">
				<button type="button" class="page-nav-btn" disabled={currentPage === 1} onclick={() => currentPage--} aria-label="Sebelumnya">
					←
				</button>
				<button type="button" class="page-num-btn {currentPage === 1 ? 'active' : ''}" onclick={() => currentPage = 1}>
					1
				</button>
				<button type="button" class="page-num-btn {currentPage === 2 ? 'active' : ''}" onclick={() => currentPage = 2}>
					2
				</button>
				<button type="button" class="page-num-btn {currentPage === 3 ? 'active' : ''}" onclick={() => currentPage = 3}>
					3
				</button>
				<button type="button" class="page-num-btn {currentPage === 4 ? 'active' : ''}" onclick={() => currentPage = 4}>
					4
				</button>
				<button type="button" class="page-num-btn {currentPage === 5 ? 'active' : ''}" onclick={() => currentPage = 5}>
					5
				</button>
				<span class="page-ellipsis">…</span>
				<button type="button" class="page-num-btn {currentPage === 12 ? 'active' : ''}" onclick={() => currentPage = 12}>
					12
				</button>
				<button type="button" class="page-nav-btn" onclick={() => currentPage++} aria-label="Berikutnya">
					→
				</button>
			</div>
		</div>

		<!-- Right Sidebar Column (Search + Populer + Newsletter + Kategori) -->
		<div class="sidebar-right-col">
			<!-- 1. Search Input -->
			<div class="search-box">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Cari artikel, topik, atau kata kunci..."
					class="search-input"
				/>
				<button type="button" class="search-btn" aria-label="Cari">
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="11" cy="11" r="8"></circle>
						<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
					</svg>
				</button>
			</div>

			<!-- 2. Artikel Terpopuler Card -->
			<div class="popular-card">
				<h3 class="popular-title">Artikel Terpopuler</h3>

				<div class="popular-list">
					{#each popularArticles as pop}
						<a href="/artikel/{pop.slug}" class="pop-item">
							<div class="pop-thumb-box">
								<img src={pop.gambar} alt={pop.judul} class="pop-thumb-img" />
								<span class="pop-badge">{pop.populerRank}</span>
							</div>

							<div class="pop-info">
								<h4 class="pop-item-title">{pop.judul}</h4>
								<span class="pop-date">{pop.tanggal}</span>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<!-- 3. Newsletter Navy Card -->
			<div class="newsletter-card" id="newsletter">
				<div class="newsletter-bg-wrap">
					<img src="/images/article-newsletter-bg.jpg" alt="" class="newsletter-bg-img" loading="lazy" />
					<div class="newsletter-overlay"></div>
				</div>

				<div class="newsletter-content">
					<h3 class="newsletter-title">Dapatkan Artikel Terbaru Langsung di Email Anda</h3>
					<p class="newsletter-desc">
						Berlangganan newsletter kami untuk mendapatkan informasi dan wawasan terkini seputar pendidikan.
					</p>

					{#if newsletterSuccess}
						<div class="newsletter-success">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							<span>Terima kasih telah berlangganan!</span>
						</div>
					{:else}
						<form onsubmit={handleNewsletterSubmit} class="newsletter-form">
							{#if newsletterError}
								<span class="newsletter-err">{newsletterError}</span>
							{/if}
							<input
								type="email"
								bind:value={newsletterEmail}
								placeholder="Masukkan alamat email..."
								class="newsletter-input"
								required
							/>
							<button type="submit" class="btn-subscribe">
								<span>Langganan Sekarang</span>
								<span class="btn-arrow">→</span>
							</button>
						</form>
					{/if}
				</div>
			</div>

			<!-- 4. Kategori Artikel White Card -->
			<div class="categories-widget-card">
				<h3 class="widget-title">Kategori Artikel</h3>

				<div class="widget-cat-list">
					{#each categoriesList as cat}
						{@const isSelected = selectedCategory === cat.name}
						<button
							type="button"
							class="widget-cat-item {isSelected ? 'selected' : ''}"
							onclick={() => onSelectCategory(cat.name)}
						>
							<div class="cat-left">
								<span class="widget-cat-icon">
									{#if cat.icon === 'education'}
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21V14h6v7"></path>
										</svg>
									{:else if cat.icon === 'scholarship'}
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
											<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
										</svg>
									{:else if cat.icon === 'talent'}
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<circle cx="12" cy="12" r="3"></circle>
											<circle cx="19" cy="5" r="2"></circle>
											<circle cx="5" cy="5" r="2"></circle>
										</svg>
									{:else if cat.icon === 'digital'}
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
											<line x1="8" y1="21" x2="16" y2="21"></line>
										</svg>
									{:else if cat.icon === 'partner'}
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
										</svg>
									{:else if cat.icon === 'career'}
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
											<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
										</svg>
									{/if}
								</span>
								<span class="widget-cat-name">{cat.name}</span>
							</div>

							<span class="widget-cat-badge">{getCategoryCount(cat.name)}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.article-content-section {
		width: 100%;
		background: #FFFFFF;
		padding: 3.25rem 0 5.5rem;
		box-sizing: border-box;
	}

	.content-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 705px 1fr;
		gap: 26px;
		align-items: start;
	}

	/* Featured Card */
	.featured-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 16px;
		padding: 16px;
		box-shadow: 0 6px 24px rgba(8, 36, 66, 0.06);
		display: grid;
		grid-template-columns: 310px 1fr;
		gap: 22px;
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 42px;
	}

	.slide-img-box {
		width: 100%;
		height: 255px;
		border-radius: 12px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.slide-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.slide-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-right: 6px;
	}

	.slide-meta {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.category-chip {
		font-size: 10px;
		font-weight: 700;
		color: #079EAD;
		background: rgba(22, 182, 193, 0.12);
		padding: 2px 8px;
		border-radius: 4px;
	}

	.meta-sep {
		font-size: 10px;
		color: #CBD5E1;
	}

	.date-text {
		font-size: 10px;
		color: #64748B;
	}

	.slide-title {
		font-size: 17px;
		font-weight: 800;
		line-height: 1.35;
		color: #082442;
		margin: 0 0 10px;
		letter-spacing: -0.01em;
	}

	.slide-title a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s;
	}

	.slide-title a:hover {
		color: #079EAD;
	}

	.slide-summary {
		font-size: 10.5px;
		line-height: 1.55;
		color: #556B82;
		margin: 0 0 18px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.slide-bottom-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.btn-read-more {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		background: #F5B331;
		color: #082442;
		font-size: 10.5px;
		font-weight: 700;
		padding: 7px 16px;
		border-radius: 6px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.25);
		transition: all 0.2s;
	}

	.btn-read-more:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 11px;
	}

	.carousel-controls {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.dots-wrap {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #CBD5E1;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: all 0.2s;
	}

	.dot.active {
		background: #16B6C1;
		width: 14px;
		border-radius: 3px;
	}

	.arrow-buttons {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.arrow-btn {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #F1F5F9;
		border: 1px solid #E2E8F0;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
	}

	.arrow-btn:hover {
		background: #16B6C1;
		border-color: #16B6C1;
		color: #FFFFFF;
	}

	/* Section Header: Artikel Terbaru */
	.latest-header {
		margin-bottom: 20px;
	}

	.section-dash-line {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 4px;
	}

	.dash {
		width: 16px;
		height: 2.5px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.section-tag {
		font-size: 11px;
		font-weight: 700;
		color: #16B6C1;
	}

	.section-heading {
		font-size: 18px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 10.5px;
		color: #556B82;
		margin: 0;
	}

	/* 3x2 Grid */
	.cards-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-bottom: 36px;
	}

	.article-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.05);
		display: flex;
		flex-direction: column;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.article-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 22px rgba(8, 36, 66, 0.09);
	}

	.card-thumb-wrap {
		position: relative;
		width: 100%;
		height: 165px;
		overflow: hidden;
		display: block;
	}

	.card-thumb-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.thumb-pill-cat {
		position: absolute;
		top: 8px;
		left: 8px;
		background: #FFFFFF;
		color: #082442;
		font-size: 8.5px;
		font-weight: 700;
		padding: 2px 7px;
		border-radius: 999px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	.thumb-pill-date {
		position: absolute;
		top: 8px;
		right: 8px;
		background: rgba(255, 255, 255, 0.9);
		color: #475569;
		font-size: 8px;
		font-weight: 600;
		padding: 2px 6px;
		border-radius: 999px;
	}

	.card-body {
		padding: 14px 16px 16px;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.card-title {
		font-size: 11.5px;
		font-weight: 700;
		line-height: 1.35;
		color: #082442;
		margin: 0 0 6px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		height: 32px;
	}

	.card-title a {
		color: inherit;
		text-decoration: none;
	}

	.card-title a:hover {
		color: #079EAD;
	}

	.card-summary {
		font-size: 9.5px;
		line-height: 1.45;
		color: #64748B;
		margin: 0 0 10px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		flex: 1;
	}

	.card-read-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 10px;
		font-weight: 700;
		color: #079EAD;
		text-decoration: none;
		margin-top: auto;
	}

	.card-read-link:hover {
		color: #05707B;
	}

	.link-arrow {
		font-size: 10px;
	}

	/* Pagination Bar */
	.pagination-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		margin-top: 40px;
	}

	.page-num-btn, .page-nav-btn {
		width: 28px;
		height: 28px;
		border-radius: 6px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		color: #082442;
		font-size: 11px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
	}

	.page-num-btn:hover, .page-nav-btn:hover:not(:disabled) {
		border-color: #16B6C1;
		color: #16B6C1;
	}

	.page-num-btn.active {
		background: #079EAD;
		border-color: #079EAD;
		color: #FFFFFF;
	}

	.page-nav-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.page-ellipsis {
		font-size: 11px;
		color: #94A3B8;
		padding: 0 4px;
	}

	/* Sidebar Styles */
	.sidebar-right-col {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.search-box {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.search-input {
		width: 100%;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 999px;
		padding: 8px 40px 8px 14px;
		font-size: 11px;
		color: #082442;
		font-family: inherit;
		box-sizing: border-box;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.04);
		transition: all 0.2s;
	}

	.search-input:focus {
		outline: none;
		border-color: #16B6C1;
		box-shadow: 0 0 0 3px rgba(22, 182, 193, 0.12);
	}

	.search-btn {
		position: absolute;
		right: 3px;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: #082442;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s;
	}

	.search-btn:hover {
		background: #079EAD;
	}

	/* Popular Card */
	.popular-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 14px;
		padding: 16px 18px;
		box-shadow: 0 4px 18px rgba(8, 36, 66, 0.05);
		box-sizing: border-box;
	}

	.popular-title {
		font-size: 13.5px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.01em;
	}

	.popular-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.pop-item {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		transition: transform 0.2s;
	}

	.pop-item:hover {
		transform: translateX(2px);
	}

	.pop-thumb-box {
		position: relative;
		width: 58px;
		height: 40px;
		border-radius: 6px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.pop-thumb-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.pop-badge {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: #079EAD;
		color: #FFFFFF;
		font-size: 8.5px;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pop-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.pop-item-title {
		font-size: 10.5px;
		font-weight: 700;
		line-height: 1.35;
		color: #082442;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.pop-item:hover .pop-item-title {
		color: #079EAD;
	}

	.pop-date {
		font-size: 9px;
		color: #64748B;
	}

	/* Newsletter Card */
	.newsletter-card {
		position: relative;
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.12);
		background: #082442;
	}

	.newsletter-bg-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
	}

	.newsletter-bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.35;
	}

	.newsletter-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(8, 36, 66, 0.95) 0%, rgba(11, 41, 72, 0.9) 100%);
	}

	.newsletter-content {
		position: relative;
		z-index: 2;
		padding: 20px 18px;
		box-sizing: border-box;
	}

	.newsletter-title {
		font-size: 13.5px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 6px;
		line-height: 1.35;
		letter-spacing: -0.01em;
	}

	.newsletter-desc {
		font-size: 10px;
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 14px;
	}

	.newsletter-form {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.newsletter-input {
		width: 100%;
		background: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 7px;
		padding: 7px 11px;
		font-size: 10.5px;
		color: #082442;
		box-sizing: border-box;
	}

	.newsletter-input:focus {
		outline: none;
		border-color: #16B6C1;
	}

	.btn-subscribe {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		background: #079EAD;
		color: #FFFFFF;
		border: none;
		border-radius: 7px;
		padding: 8px 14px;
		font-size: 10.5px;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 3px 10px rgba(7, 158, 173, 0.3);
		transition: all 0.2s;
	}

	.btn-subscribe:hover {
		background: #16B6C1;
	}

	.newsletter-success {
		display: flex;
		align-items: center;
		gap: 6px;
		background: rgba(22, 182, 193, 0.15);
		border: 1px solid #16B6C1;
		color: #FFFFFF;
		padding: 8px 12px;
		border-radius: 6px;
		font-size: 10.5px;
		font-weight: 600;
	}

	.newsletter-err {
		font-size: 9.5px;
		color: #F87171;
	}

	/* Categories Widget Card */
	.categories-widget-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 14px;
		padding: 16px 18px;
		box-shadow: 0 4px 18px rgba(8, 36, 66, 0.05);
	}

	.widget-title {
		font-size: 13.5px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.01em;
	}

	.widget-cat-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.widget-cat-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 6px 4px;
		background: transparent;
		border: none;
		cursor: pointer;
		color: #082442;
		font-family: inherit;
		border-radius: 6px;
		transition: all 0.2s;
	}

	.widget-cat-item:hover, .widget-cat-item.selected {
		color: #079EAD;
	}

	.cat-left {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.widget-cat-icon {
		color: #16B6C1;
		display: flex;
		align-items: center;
	}

	.widget-cat-name {
		font-size: 10.5px;
		font-weight: 600;
	}

	.widget-cat-badge {
		font-size: 9px;
		font-weight: 700;
		color: #082442;
		background: #F1F5F9;
		padding: 2px 7px;
		border-radius: 999px;
	}

	.empty-state {
		grid-column: 1 / -1;
		padding: 2rem;
		text-align: center;
		background: #F8FAFC;
		border-radius: 12px;
		color: #64748B;
		font-size: 11px;
	}

	.btn-reset-filter {
		margin-top: 8px;
		background: #079EAD;
		color: #FFFFFF;
		border: none;
		border-radius: 6px;
		padding: 5px 12px;
		font-size: 10.5px;
		font-weight: 600;
		cursor: pointer;
	}

	@media (max-width: 1024px) {
		.content-container {
			grid-template-columns: 1fr;
		}

		.featured-card {
			grid-template-columns: 1fr;
		}

		.slide-img-box {
			height: 200px;
		}

		.cards-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 640px) {
		.cards-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
