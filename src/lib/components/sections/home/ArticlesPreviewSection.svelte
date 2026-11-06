<script lang="ts">
	import { articlesData } from '#lib/data/articles.js';

	// Get 4 latest articles for preview
	const previewArticles = articlesData.slice(0, 4);

	function formatDate(dateStr: string) {
		return dateStr;
	}

	function getCategoryColor(kategori: string) {
		const map: Record<string, string> = {
			'Pendidikan': '#079EAD',
			'Beasiswa': '#F5B331',
			'Pengembangan Talenta': '#082442',
			'Keterampilan Digital': '#6366F1',
			'Kemitraan': '#10B981',
			'Karier & Profesional': '#EF4444'
		};
		return map[kategori] || '#079EAD';
	}
</script>

<!-- Section 10: Artikel & Wawasan — 4 article cards + "Lihat Lebih Banyak" card -->
<section class="articles-section">
	<div class="articles-container">
		<!-- Header -->
		<div class="articles-header">
			<div>
				<div class="section-badge">
					<span class="badge-dash"></span>
					<span class="badge-text">Artikel & Wawasan</span>
				</div>
				<h2 class="articles-title">Temukan Insight dan Inspirasi Terbaru</h2>
			</div>
			<a href="/artikel" class="articles-view-all">
				<span>Lihat Semua Artikel</span>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>

		<!-- Cards row: 4 articles + 1 "lihat lebih banyak" -->
		<div class="articles-grid">
			{#each previewArticles as article}
				<a href="/artikel/{article.slug}" class="article-card">
					<div class="article-img-wrap">
						<img
							src={article.gambar}
							alt={article.judul}
							class="article-img"
							loading="lazy"
						/>
						<div class="article-category-badge" style="background: {getCategoryColor(article.kategori)}">
							{article.kategori}
						</div>
					</div>
					<div class="article-body">
						<div class="article-meta">
							<span class="article-date">{formatDate(article.tanggal)}</span>
						</div>
						<h3 class="article-title">{article.judul}</h3>
						<p class="article-ringkasan">{article.ringkasan}</p>
					</div>
					<div class="article-footer">
						<span class="article-read-more">Baca Selengkapnya</span>
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
						</svg>
					</div>
				</a>
			{/each}

			<!-- "Lihat Lebih Banyak" card -->
			<a href="/artikel" class="article-card article-more-card">
				<div class="more-card-inner">
					<div class="more-card-icon">
						<svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
						</svg>
					</div>
					<h4 class="more-card-title">Lihat Lebih<br/>Banyak Artikel</h4>
					<p class="more-card-desc">Temukan ratusan artikel, panduan, dan wawasan lainnya.</p>
					<div class="more-card-cta">
						<span>Jelajahi Artikel</span>
						<div class="more-cta-arrow">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
							</svg>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	.articles-section {
		background: #F4F8FB;
		padding: 72px 0 80px;
		width: 100%;
	}

	.articles-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Header row */
	.articles-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 40px;
		gap: 1rem;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 10px;
	}

	.badge-dash {
		width: 20px;
		height: 2.5px;
		background: #079EAD;
		border-radius: 2px;
	}

	.badge-text {
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.articles-title {
		font-size: clamp(1.4rem, 2.2vw, 1.9rem);
		font-weight: 800;
		color: #082442;
		margin: 0;
		line-height: 1.25;
		letter-spacing: -0.02em;
	}

	.articles-view-all {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: #079EAD;
		font-size: 13.5px;
		font-weight: 700;
		text-decoration: none;
		white-space: nowrap;
		padding: 8px 16px;
		border: 1.5px solid #079EAD;
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.articles-view-all:hover {
		background: #079EAD;
		color: #fff;
	}

	/* Grid: 4 article cards + 1 more card = 5 col */
	.articles-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 20px;
		align-items: start;
	}

	/* Article card */
	.article-card {
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 16px;
		border: 1.5px solid #E8EFF6;
		text-decoration: none;
		overflow: hidden;
		transition: all 0.25s ease;
		box-shadow: 0 2px 10px rgba(8, 36, 66, 0.05);
	}

	.article-card:hover {
		border-color: #079EAD;
		box-shadow: 0 8px 28px rgba(7, 158, 173, 0.15);
		transform: translateY(-4px);
	}

	/* Image */
	.article-img-wrap {
		position: relative;
		height: 160px;
		overflow: hidden;
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

	.article-category-badge {
		position: absolute;
		top: 12px;
		left: 12px;
		color: #fff;
		font-size: 10.5px;
		font-weight: 700;
		padding: 3px 10px;
		border-radius: 20px;
		letter-spacing: 0.03em;
	}

	/* Body */
	.article-body {
		padding: 16px 16px 8px;
		flex: 1;
	}

	.article-meta {
		margin-bottom: 8px;
	}

	.article-date {
		font-size: 11.5px;
		color: #8FA3BA;
		font-weight: 500;
	}

	.article-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.4;
		margin: 0 0 8px;
	}

	.article-ringkasan {
		font-size: 12px;
		color: #52647A;
		line-height: 1.55;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Footer */
	.article-footer {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 16px 14px;
	}

	.article-read-more {
		font-size: 12px;
		font-weight: 700;
		color: #079EAD;
	}

	/* "Lihat lebih banyak" card */
	.article-more-card {
		background: linear-gradient(135deg, #082442 0%, #0d3360 100%);
		border-color: #082442;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.article-more-card:hover {
		border-color: #082442;
		box-shadow: 0 8px 28px rgba(8, 36, 66, 0.3);
	}

	.more-card-inner {
		padding: 36px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 12px;
		height: 100%;
		justify-content: center;
	}

	.more-card-icon {
		width: 64px;
		height: 64px;
		border-radius: 18px;
		background: rgba(255,255,255,0.1);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.more-card-title {
		font-size: 16px;
		font-weight: 800;
		color: #fff;
		line-height: 1.3;
		margin: 0;
	}

	.more-card-desc {
		font-size: 12.5px;
		color: rgba(255,255,255,0.65);
		margin: 0;
		line-height: 1.5;
	}

	.more-card-cta {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #F5B331;
		font-size: 13px;
		font-weight: 700;
		margin-top: 4px;
	}

	.more-cta-arrow {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: rgba(245, 179, 49, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Responsive */
	@media (max-width: 1200px) {
		.articles-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 900px) {
		.articles-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.articles-section {
			padding: 48px 0 56px;
		}
		.articles-header {
			flex-direction: column;
			align-items: flex-start;
		}
		.articles-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
