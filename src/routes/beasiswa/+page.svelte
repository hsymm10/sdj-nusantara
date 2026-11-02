<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroScholarship from '#lib/components/sections/scholarship/HeroScholarship.svelte';
	import ScholarshipFeatureOverlap from '#lib/components/sections/scholarship/ScholarshipFeatureOverlap.svelte';
	import ScholarshipSearchSection from '#lib/components/sections/scholarship/ScholarshipSearchSection.svelte';
	import ScholarshipPrepGuide from '#lib/components/sections/scholarship/ScholarshipPrepGuide.svelte';
	import ScholarshipCategorySection from '#lib/components/sections/scholarship/ScholarshipCategorySection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';

	let activeCategory = $state('Semua Kategori');

	function handleCategorySelect(cat: string) {
		activeCategory = cat;
	}
</script>

<svelte:head>
	<title>Beasiswa — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="Akses informasi beasiswa dalam dan luar negeri yang terpercaya, lengkap, dan terstruktur bersama SDJNusantara."
	/>
</svelte:head>

<Navbar compact={true} />

<main class="page-content">
	<!-- 1. Hero Beasiswa -->
	<HeroScholarship />

	<!-- 2. Overlap 4 Features -->
	<ScholarshipFeatureOverlap />

	<!-- 3 & 4. Cari Beasiswa (Search, 5 Filters, 4 Cards, Disclaimer) -->
	<ScholarshipSearchSection bind:selectedCategory={activeCategory} />

	<!-- 5. Panduan Persiapan -->
	<ScholarshipPrepGuide />

	<!-- 6. Jelajahi Beasiswa Berdasarkan Kategori -->
	<ScholarshipCategorySection onSelectCategory={handleCategorySelect} />

	<!-- 7. CTA Banner -->
	<CtaBanner
		title="Butuh Bantuan Memilih Beasiswa?"
		description="Konsultasikan rencana pendidikan Anda dengan tim SDJNusantara dan dapatkan rekomendasi beasiswa yang sesuai dengan profil Anda."
		primaryText="Jadwalkan Konsultasi →"
		primaryHref="/konsultasi"
		secondaryText="Lihat Program Lainnya"
		secondaryHref="/program"
		bgImage="/images/sch-cta-cap.jpg"
		variant="beasiswa"
	/>
</main>

<Footer variant="beasiswa" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #FFFFFF;
		padding-top: 48px; /* Fixed compact navbar height */
	}
</style>
