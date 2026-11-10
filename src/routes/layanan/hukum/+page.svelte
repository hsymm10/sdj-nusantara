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
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
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

	<!-- Section G: CTA Banner Full Background Image -->
	<CtaBanner
		title='Siap Memperkuat <span class="highlight-gold">Tata Kelola Hukum</span> Institusi Anda?'
		description="Dapatkan pendampingan hukum yang terarah untuk membantu memenuhi kebutuhan regulasi, kepatuhan, dan tata kelola institusi pendidikan."
		bgImage="/images/cta-hukum-legal-bg.jpg"
		primaryText="Ajukan Konsultasi"
		primaryHref="/kontak"
		variant="layanan"
	/>
</main>

<Footer variant="layanan" />

<style>
	.legal-page {
		padding-top: 0;
		background: #ffffff;
		color: #183553;
		overflow-x: hidden;
	}

	/* Selaraskan lebar container CTA Banner di /layanan/hukum dengan container 1200px seluruh section */
	.legal-page :global(.cta-banner.variant-layanan .cta-container) {
		width: 92%;
		max-width: 1200px;
		padding: 0;
	}
</style>
