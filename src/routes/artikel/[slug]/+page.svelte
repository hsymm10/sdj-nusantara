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

<Navbar compact={true} wide={true} />

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
		padding-top: var(--navbar-height, 48px);
		min-height: 80vh;
		overflow-x: hidden;
	}

	.reader-container {
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
		padding: 36px 24px 64px;
		box-sizing: border-box;
	}

	.btn-back {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		font-weight: 600;
		color: #079EAD;
		text-decoration: none;
		margin-bottom: 20px;
		transition: color 0.2s ease, transform 0.2s ease;
	}

	.btn-back:hover {
		color: #082442;
	}

	.article-header {
		margin-bottom: 22px;
	}

	.article-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.badge-cat {
		display: inline-flex;
		align-items: center;
		background: #E6F7F8;
		color: #079EAD;
		font-size: 11.5px;
		font-weight: 700;
		padding: 4px 12px;
		border-radius: 999px;
		letter-spacing: 0.01em;
	}

	.meta-sep {
		color: #94A3B8;
		font-size: 12px;
	}

	.meta-date {
		font-size: 12px;
		font-weight: 500;
		color: #64748B;
	}

	.article-title {
		font-size: clamp(22px, 2.2vw, 25px);
		font-weight: 800;
		line-height: 1.32;
		color: #082442;
		margin: 0 0 12px 0;
		letter-spacing: -0.015em;
	}

	.author-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 6px 18px;
		font-size: 12.5px;
		line-height: 1.5;
		color: #64748B;
		padding-bottom: 16px;
		border-bottom: 1px solid #E2EAF2;
	}

	.author-bar strong {
		color: #183553;
		font-weight: 600;
	}

	.author-bar em {
		font-style: normal;
		color: #52647A;
	}

	.article-hero-cover {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 12px;
		overflow: hidden;
		margin-bottom: 28px;
		background: #EAF2F8;
		border: 1px solid rgba(226, 234, 242, 0.85);
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.07);
	}

	.cover-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.article-body {
		font-size: 14.5px;
		line-height: 1.78;
		color: #1E3A5F;
		overflow-wrap: break-word;
	}

	.article-body :global(h2) {
		font-size: 19px;
		font-weight: 700;
		line-height: 1.35;
		color: #082442;
		margin: 28px 0 10px 0;
	}

	.article-body :global(h3) {
		font-size: 16px;
		font-weight: 700;
		line-height: 1.4;
		color: #082442;
		margin: 24px 0 10px 0;
	}

	.article-body :global(p) {
		margin: 0 0 18px 0;
	}

	.article-body :global(ul),
	.article-body :global(ol) {
		margin: 0 0 18px 0;
		padding-left: 1.4rem;
	}

	.article-body :global(ul) {
		list-style: disc;
	}

	.article-body :global(ol) {
		list-style: decimal;
	}

	.article-body :global(li) {
		margin-bottom: 8px;
		line-height: 1.72;
	}

	.article-footer-note {
		margin-top: 32px;
		padding: 18px 20px;
		background: #F5F8FB;
		border-radius: 10px;
		border: 1px solid #E2EAF2;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.article-footer-note p {
		margin: 0;
		font-size: 12.5px;
		line-height: 1.65;
		color: #52647A;
	}

	.article-footer-note p strong {
		color: #082442;
	}

	.btn-consult {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		color: #079EAD;
		font-size: 13px;
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.btn-consult:hover {
		color: #008C9A;
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		.reader-container {
			padding: 28px 24px 56px;
		}
	}

	@media (max-width: 640px) {
		.reader-container {
			padding: 20px 18px 44px;
		}

		.btn-back {
			margin-bottom: 16px;
		}

		.article-title {
			font-size: 21px;
		}

		.author-bar {
			font-size: 12px;
			gap: 4px 14px;
			padding-bottom: 14px;
		}

		.article-hero-cover {
			border-radius: 10px;
			margin-bottom: 22px;
		}

		.article-body {
			font-size: 14px;
			line-height: 1.75;
		}

		.article-body :global(h2) {
			font-size: 17.5px;
		}

		.article-body :global(h3) {
			font-size: 15.5px;
		}

		.article-footer-note {
			margin-top: 26px;
			padding: 16px;
		}
	}
</style>
