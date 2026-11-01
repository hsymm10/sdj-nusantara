<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { articlesData } from '#lib/data/articles';

	const slug = $derived(page.params.slug);
	const article = $derived(
		articlesData.find((a) => a.slug === slug) || articlesData[0]
	);
</script>

<svelte:head>
	<title>{article.judul} — SDJNusantara Artikel</title>
	<meta name="description" content={article.ringkasan} />
</svelte:head>

<Navbar compact={true} />

<main class="article-reader-page">
	<div class="reader-container">
		<!-- Back Button -->
		<a href="/artikel" class="btn-back">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</svg>
			<span>Kembali ke Semua Artikel</span>
		</a>

		<!-- Article Header -->
		<header class="article-header">
			<div class="article-meta">
				<span class="badge-cat">{article.kategori}</span>
				<span class="meta-sep">•</span>
				<time class="meta-date">{article.tanggal}</time>
			</div>

			<h1 class="article-title">{article.judul}</h1>

			<div class="author-bar">
				<span class="author-name">Penulis: <strong>{article.penulis}</strong></span>
				<span class="source-name">Sumber: <em>{article.sumber}</em></span>
			</div>
		</header>

		<!-- Hero Cover Image -->
		<div class="article-hero-cover">
			<img src={article.gambar} alt={article.judul} class="cover-img" />
		</div>

		<!-- Article Body -->
		<article class="article-body">
			{@html article.isi}
		</article>

		<!-- Bottom Disclaimer -->
		<div class="article-footer-note">
			<p>
				<strong>Catatan:</strong> Informasi artikel ini diterbitkan untuk tujuan edukasi dan wawasan. Hak cipta materi berada pada SDJNusantara dan kontributor terkait.
			</p>
			<a href="/kontak" class="btn-consult">
				Konsultasikan Kebutuhan Anda dengan Tim Ahli →
			</a>
		</div>
	</div>
</main>

<Footer variant="artikel" />

<style>
	.article-reader-page {
		width: 100%;
		background: #FFFFFF;
		padding-top: 48px; /* Fixed compact navbar */
		min-height: 80vh;
	}

	.reader-container {
		width: 100%;
		max-width: 860px;
		margin: 0 auto;
		padding: 2.5rem 1.5rem 4rem;
		box-sizing: border-box;
	}

	.btn-back {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 11px;
		font-weight: 700;
		color: #079EAD;
		text-decoration: none;
		margin-bottom: 24px;
		transition: color 0.2s;
	}

	.btn-back:hover {
		color: #082442;
	}

	.article-header {
		margin-bottom: 20px;
	}

	.article-meta {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
	}

	.badge-cat {
		background: rgba(22, 182, 193, 0.12);
		color: #079EAD;
		font-size: 10.5px;
		font-weight: 700;
		padding: 3px 10px;
		border-radius: 999px;
	}

	.meta-sep {
		color: #CBD5E1;
	}

	.meta-date {
		font-size: 11px;
		color: #64748B;
	}

	.article-title {
		font-size: 26px;
		font-weight: 800;
		line-height: 1.3;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.01em;
	}

	.author-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px;
		font-size: 11px;
		color: #64748B;
		padding-bottom: 14px;
		border-bottom: 1px solid #E2E8F0;
	}

	.article-hero-cover {
		width: 100%;
		height: 380px;
		border-radius: 14px;
		overflow: hidden;
		margin-bottom: 28px;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.08);
	}

	.cover-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.article-body {
		font-size: 13.5px;
		line-height: 1.75;
		color: #183553;
	}

	.article-body :global(h2), .article-body :global(h3) {
		color: #082442;
		font-weight: 800;
		margin-top: 1.75rem;
		margin-bottom: 0.75rem;
	}

	.article-body :global(p) {
		margin-bottom: 1.25rem;
	}

	.article-footer-note {
		margin-top: 3rem;
		padding: 20px 24px;
		background: #F8FAFC;
		border-radius: 12px;
		border: 1px solid #E2E8F0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.article-footer-note p {
		margin: 0;
		font-size: 11px;
		line-height: 1.5;
		color: #64748B;
	}

	.btn-consult {
		display: inline-flex;
		align-items: center;
		color: #079EAD;
		font-size: 11.5px;
		font-weight: 700;
		text-decoration: none;
	}

	.btn-consult:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.article-hero-cover {
			height: 240px;
		}

		.article-title {
			font-size: 21px;
		}
	}
</style>
