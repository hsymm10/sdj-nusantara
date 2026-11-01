<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroServices from '#lib/components/sections/services/HeroServices.svelte';
	import ServicesStatsOverlap from '#lib/components/sections/services/ServicesStatsOverlap.svelte';
	import ServicesIntro from '#lib/components/sections/services/ServicesIntro.svelte';
	import ServicesZigzag from '#lib/components/sections/services/ServicesZigzag.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
</script>

<svelte:head>
	<title>Layanan — SDJNusantara Konsultan Pendidikan</title>
	<meta name="description" content="Layanan konsultasi dan pengembangan talenta SDJNusantara: Talent Management, Scholarship Academy, Skills Development, Strategic Partnership, dan Digital Education." />
</svelte:head>

<Navbar compact={true} />

<main class="page-content">
	<HeroServices />
	<ServicesStatsOverlap />
	<ServicesIntro />
	<ServicesZigzag />
	<CtaBanner
		title="Siap Mengembangkan Potensi Individu atau Institusi Anda?"
		description="Konsultasikan kebutuhan Anda bersama tim ahli SDJNusantara dan temukan solusi terbaik untuk masa depan yang lebih baik."
		primaryText="Jadwalkan Konsultasi →"
		primaryHref="/kontak"
		secondaryText="Hubungi Kami"
		secondaryHref="/kontak"
		bgImage="/images/cta-grad-cap-dark.jpg"
	/>
</main>

<Footer variant="layanan" />

<style>
	.page-content {
		padding-top: 48px;
		overflow-x: hidden;
	}
</style>
