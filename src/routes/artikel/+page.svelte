<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroArticle from '#lib/components/sections/article/HeroArticle.svelte';
	import ArticleCategoryOverlap from '#lib/components/sections/article/ArticleCategoryOverlap.svelte';
	import ArticleContentSection from '#lib/components/sections/article/ArticleContentSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';

	let selectedCategory = $state('Semua Artikel');

	function handleCategoryChange(cat: string) {
		selectedCategory = cat;
	}
</script>

<svelte:head>
	<title>Artikel & Wawasan — SDJNusantara Konsultan Pendidikan</title>
	<meta
		name="description"
		content="Insight, analisis, panduan beasiswa, dan artikel pendidikan terkini dari tim konsultan ahli SDJNusantara."
	/>
</svelte:head>

<Navbar compact={true} />

<main class="page-content">
	<!-- 1. Hero Artikel & Wawasan -->
	<HeroArticle />

	<!-- 2. Overlap 7 Kategori Filter Bar -->
	<ArticleCategoryOverlap
		{selectedCategory}
		onSelectCategory={handleCategoryChange}
	/>

	<!-- 3. Konten Utama: Featured Carousel & Artikel Terbaru di Kiri, Search & Sidebar di Kanan -->
	<ArticleContentSection
		{selectedCategory}
		onSelectCategory={handleCategoryChange}
	/>

	<!-- 4. CTA Banner Kolaborasi Artikel -->
	<CtaBanner
		title="Ingin Berdiskusi atau Mengusulkan Topik Artikel?"
		description="Kami terbuka untuk kolaborasi penulisan artikel bersama Anda."
		primaryText="Ajukan Topik Artikel →"
		primaryHref="/kontak"
		secondaryText="Hubungi Kami"
		secondaryHref="/kontak"
		bgImage="/images/article-cta-bg.jpg"
		variant="artikel"
	/>
</main>

<Footer variant="artikel" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #FFFFFF;
		padding-top: 48px; /* Fixed compact navbar height */
	}
</style>
