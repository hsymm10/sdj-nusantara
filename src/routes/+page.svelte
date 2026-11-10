<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroSection from '#lib/components/sections/home/HeroSection.svelte';
	import StatsBar from '#lib/components/sections/home/StatsBar.svelte';
	import AboutSection from '#lib/components/sections/home/AboutSection.svelte';
	import ServicesSection from '#lib/components/sections/home/ServicesSection.svelte';
	import CTASection from '#lib/components/sections/home/CTASection.svelte';
</script>

<svelte:head>
	<title>SDJNusantara — Strategic Your Partner</title>
	<meta name="description" content="SDJNusantara adalah konsultan pendidikan dan pengembangan talenta yang membantu individu serta institusi merencanakan pendidikan, mempersiapkan beasiswa, dan meningkatkan keterampilan." />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="main-content">
	<HeroSection />
	<StatsBar />
	<AboutSection />
	<ServicesSection />
	<CTASection />
</main>

<Footer compact={true} />

<style>
	.main-content {
		padding-top: var(--navbar-height, 48px);
		overflow-x: hidden;
	}
</style>
