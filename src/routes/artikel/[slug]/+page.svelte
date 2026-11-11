<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { articlesData, type Article } from '#lib/data/articles';

	const slug = $derived(page.params.slug);
	const article = $derived(
		articlesData.find((a) => a.slug === slug) || articlesData[0]
	);

	interface ParsedArticle {
		introHtml: string;
		sections: { heading: string; bodyHtml: string }[];
	}

	function parseArticleContent(html: string): ParsedArticle {
		const headingRegex = /<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi;
		const matches: { index: number; endIndex: number; heading: string }[] = [];
		let match: RegExpExecArray | null;

		while ((match = headingRegex.exec(html)) !== null) {
			matches.push({
				index: match.index,
				endIndex: match.index + match[0].length,
				heading: match[1].replace(/<[^>]+>/g, '').trim()
			});
		}

		if (matches.length === 0) {
			return { introHtml: html, sections: [] };
		}

		const introHtml = html.slice(0, matches[0].index).trim();
		const sections = matches.map((m, idx) => {
			const nextStart = idx + 1 < matches.length ? matches[idx + 1].index : html.length;
			return {
				heading: m.heading,
				bodyHtml: html.slice(m.endIndex, nextStart).trim()
			};
		});

		return { introHtml, sections };
	}

	function getArticleTags(item: Article): string[] {
		if (item.tags && item.tags.length > 0) return item.tags;
		const map: Record<string, string[]> = {
			Pendidikan: ['#PendidikanBerkualitas', '#InovasiSekolah', '#SDJNusantara'],
			Beasiswa: ['#BeasiswaInternasional', '#StudiLanjut', '#PersiapanKarier'],
			'Pengembangan Talenta': ['#PengembanganTalenta', '#SoftSkill', '#Kepemimpinan'],
			'Keterampilan Digital': ['#LiterasiDigital', '#KompetensiMasaDepan', '#KarierDigital'],
			Kemitraan: ['#KemitraanStrategis', '#SinergiIndustri', '#Kolaborasi'],
			'Karier & Profesional': ['#KesiapanKarier', '#ProfesionalMuda', '#DayaSaing']
		};
		return map[item.kategori] || ['#WawasanSDJ', '#Pendidikan'];
	}

	const parsed = $derived(parseArticleContent(article.isi));
	const displayTags = $derived(getArticleTags(article));
	const displayQuote = $derived(article.kutipan || article.ringkasan);

	const relatedArticles = $derived.by(() => {
		const sameCategory = articlesData.filter(
			(a) => a.slug !== article.slug && a.kategori === article.kategori
		);
		const others = articlesData.filter(
			(a) => a.slug !== article.slug && a.kategori !== article.kategori
		);
		return [...sameCategory, ...others].slice(0, 3);
	});

	let copied = $state(false);
	function copyArticleLink() {
		if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
		navigator.clipboard?.writeText(window.location.href).catch(() => {});
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}

	const shareUrl = $derived(
		typeof window !== 'undefined'
			? window.location.href
			: `https://sdjnusantara.com/artikel/${article.slug}`
	);

	function triggerNativeShare() {
		if (typeof navigator !== 'undefined' && navigator.share) {
			navigator.share({ title: article.judul, url: shareUrl }).catch(() => {});
		} else {
			copyArticleLink();
		}
	}
</script>

<svelte:head>
	<title>{article.judul} — SDJNusantara Artikel</title>
	<meta name="description" content={article.ringkasan} />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="article-reader-page">
	<!-- Decorative Subtle Background Corners -->
	<div class="page-bg-decor" aria-hidden="true">
		<svg class="bg-wave-tl" viewBox="0 0 340 120" fill="none" preserveAspectRatio="none">
			<path d="M0,0 L340,0 C240,8 145,42 0,115 Z" fill="#00AEBB" fill-opacity="0.92" />
			<path d="M0,0 L240,0 C175,18 100,48 0,92 Z" fill="#0A6C7A" fill-opacity="0.35" />
		</svg>
		<svg class="bg-wave-tr" viewBox="0 0 260 220" fill="none" preserveAspectRatio="none">
			<path d="M260,0 L70,0 C110,65 180,105 260,118 Z" fill="#E8F8FA" />
			<path d="M260,0 L140,0 C170,50 212,78 260,86 Z" fill="#BFEFF4" fill-opacity="0.7" />
		</svg>
		<svg class="bg-wave-br" viewBox="0 0 380 150" fill="none" preserveAspectRatio="none">
			<path d="M380,150 L40,150 C150,122 280,68 380,4 Z" fill="#00AEBB" fill-opacity="0.9" />
			<path d="M380,150 L150,150 C245,126 320,84 380,34 Z" fill="#FFB923" />
		</svg>
	</div>

	<div class="reader-container">
		<div class="article-grid">
			<!-- LEFT COLUMN (65–68%): Main Article Content -->
			<article class="article-main-col">
				<!-- 1. Back Button -->
				<a href="/artikel" class="btn-back">
					<span class="back-icon-circle" aria-hidden="true">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
							<line x1="19" y1="12" x2="5" y2="12"></line>
							<polyline points="12 19 5 12 12 5"></polyline>
						</svg>
					</span>
					<span>Kembali ke Semua Artikel</span>
				</a>

				<!-- Header Metadata & Title -->
				<header class="article-header">
					<!-- 2. Badge Kategori & Tanggal Publikasi -->
					<div class="article-meta">
						<span class="badge-cat">{article.kategori}</span>
						<span class="meta-vsep" aria-hidden="true">|</span>
						<span class="meta-date-wrap">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="16" y1="2" x2="16" y2="6"></line>
								<line x1="8" y1="2" x2="8" y2="6"></line>
								<line x1="3" y1="10" x2="21" y2="10"></line>
							</svg>
							<time class="meta-date">{article.tanggal}</time>
						</span>
					</div>

					<!-- 3. Judul Artikel dengan Vertical Accent Bar -->
					<div class="title-accent-wrap">
						<h1 class="article-title">{article.judul}</h1>
					</div>

					<!-- 4. Penulis & Sumber dalam satu baris -->
					<div class="author-bar">
						<span class="author-item">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
							<span>Penulis: <strong>{article.penulis}</strong></span>
						</span>
						<span class="author-vsep" aria-hidden="true">|</span>
						<span class="author-item">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
								<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
							</svg>
							<span>Sumber: <em>{article.sumber}</em></span>
						</span>
					</div>
				</header>

				<!-- 5. Gambar Utama Artikel (16:9 + Corner Ribbons) -->
				<div class="article-hero-cover">
					<img src={article.gambar} alt={article.judul} class="cover-img" />
					<svg class="cover-corner-tl" viewBox="0 0 120 75" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M0,0 L120,0 C70,6 30,28 0,75 Z" fill="#00AEBB" />
					</svg>
					<svg class="cover-corner-br" viewBox="0 0 130 65" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M130,65 L0,65 C55,54 96,30 130,0 Z" fill="#FFB923" />
					</svg>
				</div>

				<!-- 6. Paragraf Pembuka Artikel -->
				{#if parsed.introHtml}
					<div class="article-intro">
						{@html parsed.introHtml}
					</div>
				{/if}

				<!-- 7 & 8. Isi Artikel Terstruktur dengan Icon + Heading + Deskripsi -->
				{#if parsed.sections.length > 0}
					<div class="article-sections-list">
						{#each parsed.sections as sec, idx}
							<section class="feature-section-row">
								<div class="sec-icon-box" aria-hidden="true">
									{#if idx % 2 === 0}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AEBB" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="12" r="3"></circle>
											<circle cx="5" cy="6" r="2"></circle>
											<circle cx="19" cy="6" r="2"></circle>
											<circle cx="5" cy="18" r="2"></circle>
											<circle cx="19" cy="18" r="2"></circle>
											<line x1="9.8" y1="10" x2="6.6" y2="7.4"></line>
											<line x1="14.2" y1="10" x2="17.4" y2="7.4"></line>
											<line x1="9.8" y1="14" x2="6.6" y2="16.6"></line>
											<line x1="14.2" y1="14" x2="17.4" y2="16.6"></line>
										</svg>
									{:else}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AEBB" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
										</svg>
									{/if}
								</div>
								<div class="sec-content">
									<h2 class="sec-heading">{sec.heading}</h2>
									<div class="sec-body">
										{@html sec.bodyHtml}
									</div>
								</div>
							</section>
						{/each}
					</div>
				{/if}

				<!-- 9. Quotation Block -->
				<blockquote class="article-quote-box">
					<span class="quote-mark" aria-hidden="true">“</span>
					<p class="quote-text">“{displayQuote}”</p>
					<svg class="quote-corner-accent" viewBox="0 0 90 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M90,50 L20,50 C52,42 74,24 90,0 Z" fill="#00AEBB" fill-opacity="0.35" />
						<path d="M90,50 L46,50 C68,42 80,30 90,14 Z" fill="#FFB923" fill-opacity="0.85" />
					</svg>
				</blockquote>

				<!-- 10. Disclaimer / Catatan Card -->
				<div class="article-footer-note">
					<p>
						<strong>Catatan:</strong> Informasi artikel ini diterbitkan untuk tujuan edukasi dan wawasan. Hak cipta materi berada pada SDJNusantara dan kontributor terkait.
					</p>
					<a href="/kontak" class="btn-consult">
						Konsultasikan Kebutuhan Anda dengan Tim Ahli →
					</a>
				</div>

				<!-- 11 & 12. Tag Pills + Share Icons Row -->
				<div class="article-bottom-meta">
					<div class="tags-group">
						<span class="meta-label">Tag:</span>
						<div class="tags-list">
							{#each displayTags as tag}
								<span class="tag-pill">{tag}</span>
							{/each}
						</div>
					</div>

					<div class="share-group">
						<span class="meta-label">Bagikan:</span>
						<div class="share-buttons">
							<button
								type="button"
								class="share-circle-btn"
								class:copied
								onclick={copyArticleLink}
								title={copied ? 'Tautan disalin!' : 'Salin tautan artikel'}
								aria-label="Salin tautan artikel"
							>
								{#if copied}
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AEBB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								{:else}
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
									</svg>
								{/if}
							</button>

							<a
								href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
								target="_blank"
								rel="noopener noreferrer"
								class="share-circle-btn share-li"
								title="Bagikan ke LinkedIn"
								aria-label="Bagikan ke LinkedIn"
							>
								<span class="li-text">in</span>
							</a>

							<a
								href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.judul + ' — ' + shareUrl)}`}
								target="_blank"
								rel="noopener noreferrer"
								class="share-circle-btn share-wa"
								title="Bagikan ke WhatsApp"
								aria-label="Bagikan ke WhatsApp"
							>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
								</svg>
							</a>

							<button
								type="button"
								class="share-circle-btn"
								onclick={triggerNativeShare}
								title="Bagikan artikel"
								aria-label="Bagikan artikel"
							>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="18" cy="5" r="3"></circle>
									<circle cx="6" cy="12" r="3"></circle>
									<circle cx="18" cy="19" r="3"></circle>
									<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
									<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</article>

			<!-- VERTICAL DIVIDER -->
			<div class="col-vertical-divider" aria-hidden="true"></div>

			<!-- RIGHT COLUMN (32–35%): Sidebar -->
			<aside class="article-sidebar" aria-label="Sidebar Artikel">
				<!-- 1. Consultation Card -->
				<div class="consult-card">
					<div class="consult-icon-circle" aria-hidden="true">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
							<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
						</svg>
					</div>
					<h2 class="consult-title">Perlu Konsultasi Terkait Pendidikan?</h2>
					<p class="consult-desc">
						Dapatkan pendampingan dari tim ahli SDJNusantara untuk kebutuhan institusi Anda.
					</p>
					<a href="/kontak" class="consult-cta-btn">
						<span>Ajukan Konsultasi</span>
						<span aria-hidden="true">→</span>
					</a>

					<!-- Corner Wave Decoration -->
					<svg class="consult-corner-decor" viewBox="0 0 140 60" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M140,60 L20,60 C70,48 110,24 140,0 Z" fill="#00AEBB" />
						<path d="M140,60 L64,60 C98,48 122,32 140,14 Z" fill="#FFB923" />
					</svg>
				</div>

				<!-- 2. Artikel Terkait -->
				<div class="related-block">
					<div class="related-header">
						<span class="related-dash" aria-hidden="true"></span>
						<h3 class="related-title">Artikel Terkait</h3>
					</div>

					<div class="related-list">
						{#each relatedArticles as rel (rel.slug)}
							<a href={`/artikel/${rel.slug}`} class="related-card">
								<img src={rel.gambar} alt={rel.judul} class="related-thumb" loading="eager" />
								<div class="related-info">
									<h4 class="related-card-title">{rel.judul}</h4>
									<span class="related-date">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
											<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
											<line x1="16" y1="2" x2="16" y2="6"></line>
											<line x1="8" y1="2" x2="8" y2="6"></line>
											<line x1="3" y1="10" x2="21" y2="10"></line>
										</svg>
										<span>{rel.tanggal}</span>
									</span>
								</div>
							</a>
						{/each}
					</div>

					<!-- 3. Lihat Artikel Lainnya Button -->
					<a href="/artikel" class="btn-more-articles">
						<span>Lihat Artikel Lainnya</span>
						<span aria-hidden="true">→</span>
					</a>
				</div>
			</aside>
		</div>
	</div>
</main>

<Footer variant="artikel" />

<style>
	.article-reader-page {
		position: relative;
		width: 100%;
		background: #FFFFFF;
		padding-top: var(--navbar-height, 48px);
		min-height: 80vh;
		overflow: hidden;
	}

	/* Decorative Corner Waves */
	.page-bg-decor {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}

	.bg-wave-tl {
		position: absolute;
		top: var(--navbar-height, 48px);
		left: 0;
		width: clamp(180px, 20vw, 310px);
		height: clamp(64px, 7vw, 105px);
	}

	.bg-wave-tr {
		position: absolute;
		top: var(--navbar-height, 48px);
		right: 0;
		width: clamp(140px, 16vw, 240px);
		height: clamp(120px, 14vw, 200px);
	}

	.bg-wave-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: clamp(200px, 24vw, 360px);
		height: clamp(80px, 9vw, 135px);
	}

	/* Main Two-Column Container (1050–1120px Medium-Large Professional Layout) */
	.reader-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1120px;
		margin: 0 auto;
		padding: 36px 24px 72px;
		box-sizing: border-box;
	}

	.article-grid {
		display: grid;
		grid-template-columns: minmax(0, 66fr) 1px minmax(0, 34fr);
		gap: 28px;
		align-items: start;
	}

	.col-vertical-divider {
		width: 1px;
		align-self: stretch;
		background: #DFE9F0;
	}

	/* ==========================================
	   LEFT COLUMN: ARTICLE CONTENT
	   ========================================== */
	.article-main-col {
		min-width: 0;
	}

	.btn-back {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 13.5px;
		font-weight: 600;
		color: #00AEBB;
		text-decoration: none;
		margin-bottom: 18px;
		transition: color 0.2s ease;
	}

	.back-icon-circle {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 1.5px solid #00AEBB;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.btn-back:hover {
		color: #0D2B4C;
	}

	.btn-back:hover .back-icon-circle {
		background: #00AEBB;
		color: #FFFFFF;
	}

	.article-header {
		margin-bottom: 18px;
	}

	.article-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.badge-cat {
		display: inline-flex;
		align-items: center;
		background: #E8F8FA;
		color: #00AEBB;
		font-size: 12.5px;
		font-weight: 700;
		padding: 4px 13px;
		border-radius: 999px;
	}

	.meta-vsep {
		color: #DFE9F0;
		font-size: 12.5px;
	}

	.meta-date-wrap {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.meta-date {
		font-size: 12.5px;
		font-weight: 500;
		color: #64748B;
	}

	.title-accent-wrap {
		border-left: 4px solid #FFB923;
		padding-left: 16px;
		margin-bottom: 14px;
	}

	.article-title {
		font-size: clamp(26px, 2.3vw, 32px);
		font-weight: 800;
		line-height: 1.24;
		color: #0D2B4C;
		margin: 0;
		letter-spacing: -0.015em;
	}

	.author-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 6px 12px;
		font-size: 12.5px;
		color: #52647A;
	}

	.author-item {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.author-item strong {
		color: #0D2B4C;
		font-weight: 600;
	}

	.author-item em {
		font-style: italic;
		color: #38536F;
	}

	.author-vsep {
		color: #DFE9F0;
	}

	/* Featured Image 16:9 with Corner Accents */
	.article-hero-cover {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 15px;
		overflow: hidden;
		margin-bottom: 18px;
		background: #EAF2F8;
		box-shadow: 0 10px 30px rgba(13, 43, 76, 0.08);
	}

	.cover-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.cover-corner-tl {
		position: absolute;
		top: 0;
		left: 0;
		width: 116px;
		height: 72px;
		pointer-events: none;
	}

	.cover-corner-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 126px;
		height: 64px;
		pointer-events: none;
	}

	/* Intro Paragraph */
	.article-intro {
		font-size: 14.5px;
		line-height: 1.72;
		color: #38536F;
		margin-bottom: 20px;
	}

	.article-intro :global(p) {
		margin: 0 0 14px 0;
	}

	.article-intro :global(p:last-child) {
		margin-bottom: 0;
	}

	/* Icon + Heading + Description Sections */
	.article-sections-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 22px;
	}

	.feature-section-row {
		display: flex;
		align-items: flex-start;
		gap: 14px;
		padding: 18px 0;
		border-bottom: 1px solid #EDF3F7;
	}

	.feature-section-row:first-child {
		border-top: 1px solid #EDF3F7;
	}

	.sec-icon-box {
		width: 42px;
		height: 42px;
		border-radius: 10px;
		background: #E8F8FA;
		border: 1px solid rgba(0, 174, 187, 0.16);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.sec-content {
		flex: 1;
		min-width: 0;
	}

	.sec-heading {
		font-size: 18px;
		font-weight: 700;
		line-height: 1.35;
		color: #0D2B4C;
		margin: 0 0 8px 0;
	}

	.sec-body {
		font-size: 14.5px;
		line-height: 1.72;
		color: #38536F;
	}

	.sec-body :global(h3) {
		font-size: 15.5px;
		font-weight: 700;
		color: #0D2B4C;
		margin: 14px 0 6px 0;
	}

	.sec-body :global(p) {
		margin: 0 0 14px 0;
	}

	.sec-body :global(p:last-child) {
		margin-bottom: 0;
	}

	.sec-body :global(ul),
	.sec-body :global(ol) {
		margin: 10px 0 0 0;
		padding-left: 1.35rem;
	}

	.sec-body :global(ul) {
		list-style: disc;
	}

	.sec-body :global(ol) {
		list-style: decimal;
	}

	.sec-body :global(li) {
		margin-bottom: 6px;
	}

	/* Quotation Block */
	.article-quote-box {
		position: relative;
		background: #E8F8FA;
		border-radius: 14px;
		padding: 20px 24px;
		margin: 0 0 16px 0;
		display: flex;
		align-items: flex-start;
		gap: 14px;
		overflow: hidden;
	}

	.quote-mark {
		font-size: 48px;
		line-height: 0.9;
		font-weight: 800;
		color: #00AEBB;
		font-family: Georgia, serif;
		flex-shrink: 0;
		margin-top: 4px;
	}

	.quote-text {
		position: relative;
		z-index: 1;
		margin: 0;
		font-size: 14.5px;
		font-style: italic;
		font-weight: 500;
		line-height: 1.7;
		color: #0D2B4C;
	}

	.quote-corner-accent {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 90px;
		height: 48px;
		pointer-events: none;
	}

	/* Disclaimer Box */
	.article-footer-note {
		padding: 18px 20px;
		background: #F7FAFC;
		border-radius: 12px;
		border: 1px solid #DFE9F0;
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 18px;
	}

	.article-footer-note p {
		margin: 0;
		font-size: 12.5px;
		line-height: 1.65;
		color: #52647A;
	}

	.article-footer-note p strong {
		color: #0D2B4C;
	}

	.btn-consult {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		color: #00AEBB;
		font-size: 13px;
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.btn-consult:hover {
		color: #0D2B4C;
		text-decoration: underline;
	}

	/* Bottom Tags & Social Share Row */
	.article-bottom-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px 16px;
		padding-top: 4px;
	}

	.tags-group,
	.share-group {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-wrap: wrap;
	}

	.meta-label {
		font-size: 12.5px;
		font-weight: 700;
		color: #0D2B4C;
	}

	.tags-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tag-pill {
		background: #F4F8FB;
		border: 1px solid #DFE9F0;
		color: #38536F;
		font-size: 12px;
		font-weight: 500;
		padding: 4px 12px;
		border-radius: 999px;
	}

	.share-buttons {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.share-circle-btn {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid #DFE9F0;
		background: #FFFFFF;
		color: #38536F;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: all 0.2s ease;
		cursor: pointer;
	}

	.share-circle-btn:hover,
	.share-circle-btn.copied {
		border-color: #00AEBB;
		color: #00AEBB;
		background: #E8F8FA;
	}

	.li-text {
		font-size: 12px;
		font-weight: 800;
		line-height: 1;
	}

	/* ==========================================
	   RIGHT COLUMN: SIDEBAR
	   ========================================== */
	.article-sidebar {
		display: flex;
		flex-direction: column;
		gap: 26px;
		min-width: 0;
	}

	/* 1. Consultation Card */
	.consult-card {
		position: relative;
		background: linear-gradient(155deg, #E8F8FA 0%, #D9F4F7 100%);
		border: 1px solid rgba(0, 174, 187, 0.16);
		border-radius: 16px;
		padding: 24px 22px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 174, 187, 0.08);
	}

	.consult-icon-circle {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: #00AEBB;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 14px;
		box-shadow: 0 6px 14px rgba(0, 174, 187, 0.28);
	}

	.consult-title {
		font-size: 18px;
		font-weight: 800;
		line-height: 1.3;
		color: #0D2B4C;
		margin: 0 0 8px 0;
	}

	.consult-desc {
		font-size: 13.5px;
		line-height: 1.6;
		color: #38536F;
		margin: 0 0 18px 0;
		position: relative;
		z-index: 1;
	}

	.consult-cta-btn {
		position: relative;
		z-index: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 44px;
		background: #FFB923;
		color: #0D2B4C;
		font-size: 13.5px;
		font-weight: 700;
		padding: 0 24px;
		border-radius: 999px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(255, 185, 35, 0.35);
		transition: background 0.2s ease, transform 0.2s ease;
	}

	.consult-cta-btn:hover {
		background: #F0A814;
		transform: translateY(-1px);
	}

	.consult-corner-decor {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 122px;
		height: 50px;
		pointer-events: none;
	}

	/* 2. Related Articles */
	.related-block {
		display: flex;
		flex-direction: column;
	}

	.related-header {
		display: flex;
		align-items: center;
		gap: 9px;
		margin-bottom: 16px;
	}

	.related-dash {
		width: 20px;
		height: 3px;
		border-radius: 999px;
		background: linear-gradient(90deg, #00AEBB 0%, #FFB923 100%);
		flex-shrink: 0;
	}

	.related-title {
		font-size: 19px;
		font-weight: 800;
		color: #0D2B4C;
		margin: 0;
	}

	.related-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 18px;
	}

	.related-card {
		display: flex;
		align-items: center;
		gap: 13px;
		padding: 12px;
		background: #FFFFFF;
		border: 1px solid #DFE9F0;
		border-radius: 12px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(13, 43, 76, 0.04);
		transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
		min-height: 88px;
		box-sizing: border-box;
	}

	.related-card:hover {
		border-color: #00AEBB;
		box-shadow: 0 6px 18px rgba(0, 174, 187, 0.12);
		transform: translateY(-1px);
	}

	.related-thumb {
		width: 84px;
		height: 64px;
		border-radius: 8px;
		object-fit: cover;
		flex-shrink: 0;
		background: #EAF2F8;
	}

	.related-info {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.related-card-title {
		font-size: 13.5px;
		font-weight: 700;
		line-height: 1.38;
		color: #0D2B4C;
		margin: 0;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.related-date {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 11.5px;
		font-weight: 500;
		color: #64748B;
	}

	/* 3. View More Articles Pill Button */
	.btn-more-articles {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 100%;
		height: 40px;
		background: #FFFFFF;
		color: #00AEBB;
		border: 1.5px solid #00AEBB;
		border-radius: 999px;
		font-size: 13px;
		font-weight: 700;
		text-decoration: none;
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.btn-more-articles:hover {
		background: #00AEBB;
		color: #FFFFFF;
	}

	/* ==========================================
	   RESPONSIVE BREAKPOINTS
	   ========================================== */
	@media (max-width: 1180px) {
		.bg-wave-tl {
			width: 130px;
			height: 46px;
		}

		.bg-wave-tr {
			width: 120px;
			height: 100px;
		}
	}

	@media (max-width: 1024px) {
		.reader-container {
			padding: 28px 24px 56px;
		}

		.article-grid {
			grid-template-columns: minmax(0, 1.8fr) 1px minmax(260px, 1fr);
			gap: 22px;
		}

		.article-title {
			font-size: 27px;
		}
	}

	@media (max-width: 820px) {
		.reader-container {
			padding: 22px 18px 48px;
		}

		.article-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.col-vertical-divider {
			display: none;
		}

		.bg-wave-tl,
		.bg-wave-tr,
		.bg-wave-br {
			opacity: 0.45;
		}
	}

	@media (max-width: 640px) {
		.article-title {
			font-size: 22px;
		}

		.author-vsep {
			display: none;
		}

		.author-bar {
			flex-direction: column;
			align-items: flex-start;
			gap: 6px;
		}

		.article-hero-cover {
			border-radius: 12px;
		}

		.feature-section-row {
			gap: 12px;
		}

		.sec-icon-box {
			width: 38px;
			height: 38px;
		}

		.article-quote-box {
			padding: 16px;
			gap: 10px;
		}

		.quote-mark {
			font-size: 36px;
		}

		.bg-wave-tl,
		.bg-wave-tr,
		.bg-wave-br {
			display: none;
		}
	}
</style>
