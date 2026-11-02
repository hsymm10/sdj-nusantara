<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroProgram from '#lib/components/sections/program/HeroProgram.svelte';
	import ProgramCategoryOverlap from '#lib/components/sections/program/ProgramCategoryOverlap.svelte';
	import ProgramFeaturedCard from '#lib/components/sections/program/ProgramFeaturedCard.svelte';
	import ProgramListSection from '#lib/components/sections/program/ProgramListSection.svelte';
	import ProgramCustomSection from '#lib/components/sections/program/ProgramCustomSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';

	let activeCategory = $state('Semua Program');

	function handleCategorySelect(cat: string) {
		activeCategory = cat;
		if (typeof document !== 'undefined') {
			const el = document.getElementById('daftar-program');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
</script>

<svelte:head>
	<title>Program — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="Program unggulan SDJNusantara untuk mengembangkan potensi tanpa batas: Persiapan Beasiswa, Pelatihan Keterampilan Digital, Manajemen Talenta, dan Pelatihan Khusus."
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content">
	<!-- 1. Hero Program (tinggi ±408px) -->
	<HeroProgram />

	<!-- 2. Overlap 5 Categories (tinggi ±111px) -->
	<ProgramCategoryOverlap
		selectedCategory={activeCategory === 'Semua Program' ? 'Persiapan Beasiswa' : activeCategory}
		onSelect={handleCategorySelect}
	/>

	<!-- 3. Featured Big Card (tinggi ±390px) -->
	<ProgramFeaturedCard />

	<!-- 4 & 5. Daftar Program (Search, Filter Tabs, 5 Cards, tinggi ±150px + ±458px) -->
	<ProgramListSection
		{activeCategory}
		onCategoryChange={(cat) => (activeCategory = cat)}
	/>

	<!-- 6. Program yang Disesuaikan (tinggi ±218px) -->
	<ProgramCustomSection />

	<!-- 7. CTA Banner (tinggi ±131px) -->
	<CtaBanner
		title="Siap Mengikuti Program Kami?"
		description="Konsultasikan kebutuhan pendidikan dan pengembangan talenta Anda bersama tim SDJNusantara."
		primaryText="Jadwalkan Konsultasi →"
		primaryHref="/konsultasi"
		secondaryText="Pelajari Program Lainnya"
		secondaryHref="#daftar-program"
		bgImage="/images/program-cta-cap.jpg"
		variant="program"
	/>
</main>

<Footer variant="program" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #FFFFFF;
	}
</style>
