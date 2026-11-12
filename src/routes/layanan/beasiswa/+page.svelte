<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroScholarship from '#lib/components/sections/scholarship/HeroScholarship.svelte';
	import ServiceFloatingNavigation from '#lib/components/ui/ServiceFloatingNavigation.svelte';
	import ScholarshipSearchSection from '#lib/components/sections/scholarship/ScholarshipSearchSection.svelte';
	import ScholarshipPrepGuide from '#lib/components/sections/scholarship/ScholarshipPrepGuide.svelte';
	import ScholarshipCategorySection from '#lib/components/sections/scholarship/ScholarshipCategorySection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';

	let activeCategory = $state('Semua Kategori');

	function handleCategorySelect(cat: string) {
		activeCategory = cat;
	}
</script>

<svelte:head>
	<title>{i18n.pick('Beasiswa — SDJNusantara Strategic Your Partner', 'Scholarships — SDJNusantara Your Strategic Partner')}</title>
	<meta
		name="description"
		content={i18n.pick(
			'Akses informasi beasiswa dalam dan luar negeri yang terpercaya, lengkap, dan terstruktur bersama SDJNusantara.',
			'Access curated, structured information on domestic and international scholarships with SDJNusantara.'
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

	<!-- 7. CTA Banner -->
	<CtaBanner
		title={i18n.pick('Butuh Bantuan Memilih Beasiswa?', 'Need Help Choosing a Scholarship?')}
		description={i18n.pick('Konsultasikan rencana pendidikan Anda dengan tim SDJNusantara dan dapatkan rekomendasi beasiswa yang sesuai dengan profil Anda.', 'Consult your education plan with the SDJNusantara team and receive scholarship recommendations matched to your profile.')}
		primaryText={i18n.pick('Jadwalkan Konsultasi →', 'Schedule a Consultation →')}
		primaryHref="/konsultasi"
		secondaryText={i18n.pick('Lihat Program Lainnya', 'View Other Programs')}
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
		padding-top: var(--navbar-height, 48px);
	}
</style>

