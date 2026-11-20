<script lang="ts">
	import Navbar from "#lib/components/layout/Navbar.svelte";
	import Footer from "#lib/components/layout/Footer.svelte";
	import { i18n } from "#lib/stores/i18n.svelte";
	import HeroSection from "#lib/components/sections/home/HeroSection.svelte";
	import AboutSection from "#lib/components/sections/home/AboutSection.svelte";
	import ServicesSection from "#lib/components/sections/home/ServicesSection.svelte";
	import LeadershipSection from "#lib/components/sections/about/LeadershipSection.svelte";
	import CTASection from "#lib/components/sections/home/CTASection.svelte";
</script>

<svelte:head>
	<title
		>{i18n.pick(
			"SDJ Nusantara — Strategic Your Partner",
			"SDJ Nusantara — Your Strategic Partner",
		)}</title
	>
	<meta
		name="description"
		content={i18n.pick(
			"SDJ Nusantara adalah konsultan pendidikan dan pengembangan talenta yang membantu individu serta institusi merencanakan pendidikan, mempersiapkan beasiswa, dan meningkatkan keterampilan.",
			"SDJ Nusantara is an education and talent development consultancy helping individuals and institutions plan education, prepare for scholarships, and build skills.",
		)}
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="main-content">
	<HeroSection />
	<AboutSection />
	<ServicesSection />
	<LeadershipSection />
	<CTASection />
</main>

<Footer compact={true} />

<style>
	.main-content {
		padding-top: var(--navbar-height, 48px);
		overflow-x: hidden;
	}
</style>
