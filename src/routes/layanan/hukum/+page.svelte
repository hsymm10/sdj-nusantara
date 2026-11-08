<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';

	// 7 Komponen Section Sesuai Mockup Referensi
	import HeroLegal from '#lib/components/sections/legal/HeroLegal.svelte';
	import CategoryNavLegal from '#lib/components/sections/legal/CategoryNavLegal.svelte';
	import AboutLegal from '#lib/components/sections/legal/AboutLegal.svelte';
	import ScopeLegal from '#lib/components/sections/legal/ScopeLegal.svelte';
	import AdvantagesLegal from '#lib/components/sections/legal/AdvantagesLegal.svelte';
	import ProcessLegal from '#lib/components/sections/legal/ProcessLegal.svelte';
	import CTALegal from '#lib/components/sections/legal/CTALegal.svelte';
</script>

<svelte:head>
	<title>Layanan Hukum & Konsultasi Regulasi — SDJNusantara</title>
	<meta
		name="description"
		content="Pendampingan hukum yang terarah dan sesuai regulasi di bidang pendidikan bagi institusi, organisasi, maupun korporasi."
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="legal-page">
	<!-- Section A: Hero Section Layanan Hukum -->
	<HeroLegal />

	<!-- Section B: Floating Category Navigation -->
	<CategoryNavLegal />

	<!-- Section C: Tentang Layanan Hukum -->
	<AboutLegal />

	<!-- Section D: Ruang Lingkup Layanan Hukum -->
	<ScopeLegal />

	<!-- Section E: Keunggulan Layanan Hukum -->
	<AdvantagesLegal />

	<!-- Section F: Alur Layanan -->
	<ProcessLegal />

	<!-- Section G: CTA Konsultasi Hukum -->
	<CTALegal />
</main>

<Footer variant="layanan" />

<style>
	.legal-page {
		padding-top: 0;
		background: #ffffff;
		color: #183553;
		overflow-x: hidden;
	}
</style>
