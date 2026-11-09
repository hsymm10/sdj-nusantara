<!-- Section 10: Artikel & Wawasan — 5 Cards Horizontal (Mockup Resmi SDJNusantara) -->
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

<section class="articles-edu-section" id="artikel-wawasan">
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
						<img src={item.img} alt={item.title} class="article-img" loading="lazy" />
					</div>
					<div class="article-body">
						<h3 class="article-card-title">{item.title}</h3>
						<div class="article-meta">
							<span class="article-date">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<circle cx="12" cy="12" r="10"/>
									<polyline points="12 6 12 12 16 14"/>
								</svg>
								{item.date}
							</span>
							<span class="article-arrow" aria-hidden="true">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="9 18 15 12 9 6"/>
								</svg>
							</span>
						</div>
					</div>
				</a>
			{/each}

			<!-- Card 5: View More Articles (Mockup SDJNusantara) -->
			<a href="/artikel-wawasan" class="article-more-card">
				<div class="more-icon-box">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
					</svg>
				</div>
				<div class="more-label">Lihat Lebih<br />Banyak Artikel</div>
				<div class="more-circle-btn" aria-hidden="true">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.articles-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.articles-header {
		text-align: center;
		margin-bottom: 38px;
	}

	.articles-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2.5px;
		background: #08AEBB;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #08AEBB;
		letter-spacing: 0.04em;
	}

	.articles-title {
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
		line-height: 1.25;
	}

	.articles-sub {
		font-size: 14px;
		color: #64748B;
		margin: 0 auto;
		max-width: 600px;
		line-height: 1.6;
	}

	/* 5 Cards Row */
	.articles-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 20px;
	}

	.article-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s;
		box-shadow: 0 4px 16px rgba(11, 41, 72, 0.04);
		box-sizing: border-box;
	}

	.article-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 26px rgba(11, 41, 72, 0.09);
		border-color: #CBD5E1;
	}

	.article-thumb-wrap {
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

	.article-body {
		padding: 14px 16px 16px;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: space-between;
	}

	.article-card-title {
		font-size: 13px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.45;
		margin: 0 0 12px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		height: 38px;
		transition: color 0.2s;
	}

	.article-card:hover .article-card-title {
		color: #08AEBB;
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
	}

	.article-arrow {
		color: #94A3B8;
		display: flex;
		align-items: center;
		transition: transform 0.2s, color 0.2s;
	}

	.article-card:hover .article-arrow {
		color: #08AEBB;
		transform: translateX(3px);
	}

	/* Card 5: View More */
	.article-more-card {
		background: #F8FAFC;
		border: 1.5px dashed #CBD5E1;
		border-radius: 14px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 24px 16px;
		text-decoration: none;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		box-sizing: border-box;
	}

	.article-more-card:hover {
		background: #FFFFFF;
		border-color: #08AEBB;
		transform: translateY(-4px);
		box-shadow: 0 12px 26px rgba(8, 174, 187, 0.12);
	}

	.more-icon-box {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: #EBF8FA;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 14px;
		transition: transform 0.2s;
	}

	.article-more-card:hover .more-icon-box {
		transform: scale(1.08);
	}

	.more-label {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		margin-bottom: 16px;
	}

	.more-circle-btn {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 1.5px solid #08AEBB;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.article-more-card:hover .more-circle-btn {
		background: #08AEBB;
	}

	.article-more-card:hover .more-circle-btn svg {
		stroke: #FFFFFF;
	}

	@media (max-width: 1024px) {
		.articles-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 16px;
		}
	}

	@media (max-width: 768px) {
		.articles-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.articles-edu-section {
			padding: 52px 0;
		}

		.articles-edu-container {
			padding: 0 20px;
		}

		.articles-grid {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}
</style>
