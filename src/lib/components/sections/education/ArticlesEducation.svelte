<!-- Section 10: Artikel & Wawasan — 5 Cards Horizontal (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	const articles = [
		{
			title: '5 Tips Sukses Mendapatkan Beasiswa Luar Negeri',
			category: 'Beasiswa',
			date: '20 Jan 2025',
			img: '/images/article-card-1.jpg',
			href: '/artikel-wawasan/5-tips-sukses-mendapatkan-beasiswa-luar-negeri'
		},
		{
			title: 'Tren Pendidikan Global di Tahun 2025',
			category: 'Pendidikan',
			date: '18 Jan 2025',
			img: '/images/article-card-2.jpg',
			href: '/artikel-wawasan/tren-pendidikan-global-di-tahun-2025'
		},
		{
			title: 'Cara Meningkatkan Daya Saing di Dunia Kerja',
			category: 'Karier',
			date: '15 Jan 2025',
			img: '/images/article-card-3.jpg',
			href: '/artikel-wawasan/cara-meningkatkan-daya-saing-di-dunia-kerja'
		},
		{
			title: 'Pentingnya Soft Skill di Era Digital',
			category: 'Pengembangan Diri',
			date: '10 Jan 2025',
			img: '/images/article-card-4.jpg',
			href: '/artikel-wawasan/pentingnya-soft-skill-di-era-digital'
		}
	];
</script>

<section class="articles-edu-section">
	<div class="articles-edu-container">
		<!-- Section Header -->
		<div class="articles-header">
			<div class="articles-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Artikel & Wawasan</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="articles-title">Temukan Insight dan Inspirasi Terbaru</h2>
			<p class="articles-sub">
				Berbagai artikel, panduan, dan informasi terkini seputar pendidikan, beasiswa, dan pengembangan karier.
			</p>
		</div>

		<!-- 5 Cards Grid -->
		<div class="articles-grid">
			{#each articles as item}
				<a href={item.href} class="article-card">
					<div class="article-thumb-wrap">
						<img src={item.img} alt={item.title} class="article-img" />
					</div>
					<div class="article-body">
						<h3 class="article-card-title">{item.title}</h3>
						<div class="article-meta">
							<span class="article-date">
								<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"/>
									<polyline points="12 6 12 12 16 14"/>
								</svg>
								{item.date}
							</span>
							<span class="article-arrow">
								<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="9 18 15 12 9 6"/>
								</svg>
							</span>
						</div>
					</div>
				</a>
			{/each}

			<!-- Card 5: View More Articles (GAMBAR 2 layout) -->
			<a href="/artikel-wawasan" class="article-more-card">
				<div class="more-icon-box">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
					</svg>
				</div>
				<div class="more-label">Lihat Lebih<br />Banyak Artikel</div>
				<div class="more-circle-btn">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="5" y1="12" x2="19" y2="12"/>
						<polyline points="12 5 19 12 12 19"/>
					</svg>
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	.articles-edu-section {
		background: #ffffff;
		padding: 38px 0 46px;
	}

	.articles-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.articles-header {
		text-align: center;
		margin-bottom: 28px;
	}

	.articles-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #079ead;
	}

	.articles-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px;
		letter-spacing: -0.2px;
	}

	.articles-sub {
		font-size: 12px;
		color: #64748b;
		margin: 0;
	}

	/* 5 Cards Row */
	.articles-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 14px;
	}

	.article-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		transition: transform 0.2s, box-shadow 0.2s;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
	}

	.article-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
	}

	.article-thumb-wrap {
		width: 100%;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: #f1f5f9;
	}

	.article-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s;
	}

	.article-card:hover .article-img {
		transform: scale(1.04);
	}

	.article-body {
		padding: 10px 10px 12px;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: space-between;
	}

	.article-card-title {
		font-size: 10.5px;
		font-weight: 700;
		line-height: 1.35;
		color: #082442;
		margin: 0 0 8px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.article-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 9.5px;
		color: #94a3b8;
	}

	.article-date {
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}

	.article-arrow {
		color: #079ead;
	}

	/* Card 5: View More */
	.article-more-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		padding: 20px 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		text-decoration: none;
		transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
	}

	.article-more-card:hover {
		transform: translateY(-2px);
		border-color: #079ead;
		box-shadow: 0 6px 14px rgba(7, 158, 173, 0.12);
	}

	.more-icon-box {
		margin-bottom: 12px;
	}

	.more-label {
		font-size: 11px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin-bottom: 14px;
	}

	.more-circle-btn {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 1px solid #079ead;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s, color 0.2s;
	}

	.article-more-card:hover .more-circle-btn {
		background: #079ead;
	}

	.article-more-card:hover .more-circle-btn svg {
		stroke: #ffffff;
	}

	@media (max-width: 992px) {
		.articles-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 600px) {
		.articles-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
