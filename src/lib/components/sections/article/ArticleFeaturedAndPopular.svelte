<script lang="ts">
	import { articlesData, type Article } from '#lib/data/articles';

	interface Props {
		searchQuery: string;
		onSearchChange: (q: string) => void;
	}

	let { searchQuery = '', onSearchChange }: Props = $props();

	// Featured slides (first 4 items with isFeatured)
	const featuredSlides = articlesData.filter(a => a.isFeatured);
	let currentSlide = $state(0);
	let isPaused = $state(false);

	// Popular items (4 items sorted by populerRank)
	const popularArticles = articlesData
		.filter(a => a.populerRank !== undefined)
		.sort((a, b) => (a.populerRank || 0) - (b.populerRank || 0));

	function nextSlide() {
		currentSlide = (currentSlide + 1) % featuredSlides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + featuredSlides.length) % featuredSlides.length;
	}

	function goToSlide(index: number) {
		currentSlide = index;
	}

	// Auto-play interval
	$effect(() => {
		const timer = setInterval(() => {
			if (!isPaused) {
				nextSlide();
			}
		}, 6000);
		return () => clearInterval(timer);
	});
</script>

<section class="featured-popular-section">
	<div class="fp-container">
		<!-- Left: Featured Carousel Card -->
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
					<!-- Slide Image Left -->
					<div class="slide-img-box">
						<img src={slide.gambar} alt={slide.judul} class="slide-img" />
					</div>

					<!-- Slide Content Right -->
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

							<!-- Dots and Prev/Next Navigation Controls -->
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
									<button
										type="button"
										class="arrow-btn"
										onclick={prevSlide}
										aria-label="Sebelumnya"
									>
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="15 18 9 12 15 6"></polyline>
										</svg>
									</button>
									<button
										type="button"
										class="arrow-btn"
										onclick={nextSlide}
										aria-label="Berikutnya"
									>
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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

		<!-- Right: Search Input + Artikel Terpopuler Sidebar -->
		<div class="sidebar-col">
			<!-- Search Bar -->
			<div class="search-box">
				<input
					type="text"
					value={searchQuery}
					oninput={(e) => onSearchChange(e.currentTarget.value)}
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

			<!-- Artikel Terpopuler Card -->
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
		</div>
	</div>
</section>

<style>
	.featured-popular-section {
		width: 100%;
		background: #FFFFFF;
		padding: 2.75rem 0 2rem;
		box-sizing: border-box;
	}

	.fp-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 690px 1fr;
		gap: 28px;
		align-items: start;
	}

	/* Featured Card Styles */
	.featured-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 16px;
		padding: 16px;
		box-shadow: 0 6px 24px rgba(8, 36, 66, 0.06);
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 20px;
		align-items: center;
		box-sizing: border-box;
	}

	.slide-img-box {
		width: 100%;
		height: 250px;
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
		margin-bottom: 6px;
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
		font-size: 16px;
		font-weight: 800;
		line-height: 1.35;
		color: #082442;
		margin: 0 0 8px;
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
		line-height: 1.5;
		color: #556B82;
		margin: 0 0 16px;
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
		padding: 6px 14px;
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

	/* Right Sidebar: Search & Popular */
	.sidebar-col {
		display: flex;
		flex-direction: column;
		gap: 14px;
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

	@media (max-width: 1024px) {
		.fp-container {
			grid-template-columns: 1fr;
		}

		.featured-card {
			grid-template-columns: 1fr;
		}

		.slide-img-box {
			height: 200px;
		}
	}
</style>
