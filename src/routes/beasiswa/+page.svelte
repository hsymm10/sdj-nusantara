<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroScholarship from '#lib/components/sections/scholarship/HeroScholarship.svelte';
	import ScholarshipFeatureOverlap from '#lib/components/sections/scholarship/ScholarshipFeatureOverlap.svelte';
	import ScholarshipSearchSection from '#lib/components/sections/scholarship/ScholarshipSearchSection.svelte';
	import ScholarshipPrepGuide from '#lib/components/sections/scholarship/ScholarshipPrepGuide.svelte';
	import ScholarshipCategorySection from '#lib/components/sections/scholarship/ScholarshipCategorySection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
</script>

<svelte:head>
	<title>Beasiswa — SDJNusantara Konsultan Pendidikan</title>
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
	<ScholarshipSearchSection />

	<!-- 5. Panduan Persiapan -->
	<ScholarshipPrepGuide />

	<!-- 6. Jelajahi Beasiswa Berdasarkan Kategori -->
	<ScholarshipCategorySection />

	<!-- 7. CTA Banner -->
	<CtaBanner
		title="Butuh Bantuan Memilih Beasiswa?"
		description="Konsultasikan rencana pendidikan Anda dengan tim SDJNusantara dan dapatkan rekomendasi beasiswa yang sesuai dengan profil Anda."
		primaryText="Jadwalkan Konsultasi"
		primaryHref="#kontak"
		secondaryText="Lihat Program Lainnya"
		secondaryHref="/program"
		bgImage="/images/sch-cta-cap.jpg"
	/>
</main>

<Footer variant="beasiswa" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #FFFFFF;
	}
</style>
