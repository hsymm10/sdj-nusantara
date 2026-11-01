<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroProgram from '#lib/components/sections/program/HeroProgram.svelte';
	import ProgramCategoryOverlap from '#lib/components/sections/program/ProgramCategoryOverlap.svelte';
	import ProgramFeaturedCard from '#lib/components/sections/program/ProgramFeaturedCard.svelte';
	import ProgramListSection from '#lib/components/sections/program/ProgramListSection.svelte';
	import ProgramCustomSection from '#lib/components/sections/program/ProgramCustomSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
</script>

<svelte:head>
	<title>Program — SDJNusantara Konsultan Pendidikan</title>
	<meta
		name="description"
		content="Program unggulan SDJNusantara untuk mengembangkan potensi tanpa batas: Persiapan Beasiswa, Pelatihan Keterampilan Digital, Manajemen Talenta, dan Pelatihan Khusus."
	/>
</svelte:head>

<Navbar compact={true} />

<main class="page-content">
	<!-- 1. Hero Program -->
	<HeroProgram />

	<!-- 2. Overlap 5 Categories -->
	<ProgramCategoryOverlap />

	<!-- 3. Featured Big Card -->
	<ProgramFeaturedCard />

	<!-- 4 & 5. Daftar Program (Search, Filter Tabs, 5 Cards) -->
	<ProgramListSection />

	<!-- 6. Program yang Disesuaikan -->
	<ProgramCustomSection />

	<!-- 7. CTA Banner -->
	<CtaBanner
		title="Siap Mengikuti Program Kami?"
		description="Konsultasikan kebutuhan pendidikan dan pengembangan talenta Anda bersama tim SDJNusantara."
		primaryText="Jadwalkan Konsultasi"
		primaryHref="#kontak"
		secondaryText="Pelajari Program Lainnya"
		secondaryHref="#daftar-program"
		bgImage="/images/program-cta-cap.jpg"
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
