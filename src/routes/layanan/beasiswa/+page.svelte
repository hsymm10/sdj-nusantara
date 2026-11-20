<script lang="ts">
	import Navbar from "#lib/components/layout/Navbar.svelte";
	import Footer from "#lib/components/layout/Footer.svelte";
	import HeroScholarship from "#lib/components/sections/scholarship/HeroScholarship.svelte";
	import ServiceFloatingNavigation from "#lib/components/ui/ServiceFloatingNavigation.svelte";
	import ScholarshipSearchSection from "#lib/components/sections/scholarship/ScholarshipSearchSection.svelte";
	import ScholarshipPrepGuide from "#lib/components/sections/scholarship/ScholarshipPrepGuide.svelte";
	import ScholarshipCategorySection from "#lib/components/sections/scholarship/ScholarshipCategorySection.svelte";
	import CtaBanner from "#lib/components/ui/CtaBanner.svelte";
	import { i18n } from "#lib/stores/i18n.svelte";

	let activeCategory = $state("Semua Kategori");

	function handleCategorySelect(cat: string) {
		activeCategory = cat;
	}
</script>

<svelte:head>
	<title
		>{i18n.pick(
			"Beasiswa — SDJ Nusantara Strategic Your Partner",
			"Scholarships — SDJ Nusantara Your Strategic Partner",
		)}</title
	>
	<meta
		name="description"
		content={i18n.pick(
			"Akses informasi beasiswa dalam dan luar negeri yang terpercaya, lengkap, dan terstruktur bersama SDJ Nusantara.",
			"Access curated, structured information on domestic and international scholarships with SDJ Nusantara.",
		)}
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content">
	<!-- 1. Hero Beasiswa -->
	<HeroScholarship />

	<!-- 2. Standardized Service Floating Navigation Overlap -->
	<ServiceFloatingNavigation activeService="scholarship" />

	<!-- 3 & 4. Cari Beasiswa (Search, 5 Filters, 4 Cards, Disclaimer) -->
	<ScholarshipSearchSection bind:selectedCategory={activeCategory} />

	<!-- 5. Panduan Persiapan -->
	<ScholarshipPrepGuide />

	<!-- 6. Jelajahi Beasiswa Berdasarkan Kategori -->
	<ScholarshipCategorySection onSelectCategory={handleCategorySelect} />

	<!-- 7. CTA Banner (Tanpa Tombol) -->
	<CtaBanner
		title={i18n.pick(
			'Butuh Bantuan <span class="highlight-gold">Memilih Beasiswa?</span>',
			'Need Help <span class="highlight-gold">Choosing a Scholarship?</span>',
		)}
		description={i18n.pick(
			"Konsultasikan rencana pendidikan Anda dengan tim SDJ Nusantara dan dapatkan rekomendasi beasiswa yang sesuai dengan profil Anda.",
			"Consult your education plan with the SDJ Nusantara team and receive scholarship recommendations matched to your profile.",
		)}
		showButtons={false}
		bgImage="/images/cta-pendidikan-academic-bg.jpg"
		variant="layanan"
	/>
</main>

<Footer variant="beasiswa" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #ffffff;
		padding-top: var(--navbar-height, 48px);
	}
</style>
