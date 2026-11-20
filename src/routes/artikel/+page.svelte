<script lang="ts">
	import Navbar from "#lib/components/layout/Navbar.svelte";
	import Footer from "#lib/components/layout/Footer.svelte";
	import HeroArticle from "#lib/components/sections/article/HeroArticle.svelte";
	import ArticleCategoryOverlap from "#lib/components/sections/article/ArticleCategoryOverlap.svelte";
	import ArticleContentSection from "#lib/components/sections/article/ArticleContentSection.svelte";
	import CtaBanner from "#lib/components/ui/CtaBanner.svelte";
	import { i18n } from "#lib/stores/i18n.svelte";

	let selectedCategory = $state("Semua Artikel");

	function handleCategoryChange(cat: string) {
		selectedCategory = cat;
	}
</script>

<svelte:head>
	<title
		>{i18n.pick(
			"Perspektif — SDJ Nusantara Strategic Your Partner",
			"Perspectives — SDJ Nusantara Strategic Your Partner",
		)}</title
	>
	<meta
		name="description"
		content={i18n.pick(
			"Insight, analisis, panduan beasiswa, dan artikel pendidikan terkini dari tim konsultan ahli SDJ Nusantara.",
			"Insights, analysis, scholarship guides, and the latest education articles from SDJ Nusantara’s expert consulting team.",
		)}
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content">
	<!-- 1. Hero Perspektif -->
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

	<!-- 4. CTA Banner Kolaborasi Artikel (Tanpa Tombol) -->
	<CtaBanner
		title={i18n.pick(
			"Ingin Berdiskusi atau Mengusulkan Topik Artikel?",
			"Want to Discuss or Propose an Article Topic?",
		)}
		description={i18n.pick(
			"Kami terbuka untuk kolaborasi penulisan artikel bersama Anda.",
			"We are open to collaborative article writing and editorial partnerships with you.",
		)}
		showButtons={false}
		bgImage="/images/cta-building-glass.jpg"
		variant="artikel"
	/>
</main>

<Footer variant="artikel" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #ffffff;
		padding-top: 48px; /* Fixed compact navbar height */
	}
</style>
