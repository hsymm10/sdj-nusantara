<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroPartner from '#lib/components/sections/partner/HeroPartner.svelte';
	import PartnerApproachSection from '#lib/components/sections/partner/PartnerApproachSection.svelte';
	import PartnerTypesSection from '#lib/components/sections/partner/PartnerTypesSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<svelte:head>
	<title>{i18n.pick('Kemitraan — SDJ Nusantara Strategic Your Partner', 'Partnerships — SDJ Nusantara Strategic Your Partner')}</title>
	<meta
		name="description"
		content={i18n.pick(
			'Peluang kemitraan dan kolaborasi strategis bersama SDJ Nusantara untuk membangun ekosistem pendidikan dan pengembangan talenta yang lebih kuat.',
			'Strategic partnership and collaboration opportunities with SDJ Nusantara to build a stronger education and talent development ecosystem.'
		)}
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content">
	<!-- 1. Hero Kemitraan -->
	<HeroPartner />

	<!-- 2. Pendekatan Kami -->
	<PartnerApproachSection />

	<!-- 3. Jenis Mitra -->
	<PartnerTypesSection />

	<!-- 4. CTA Banner -->
	<CtaBanner
		title={i18n.pick('Siap Menjalin Kemitraan dengan SDJ Nusantara?', 'Ready to Partner with SDJ Nusantara?')}
		description={i18n.pick(
			'Bersama kita bisa menciptakan lebih banyak peluang, program inovatif, dan dampak positif bagi dunia pendidikan dan talenta Indonesia.',
			'Together we can create greater opportunities, innovative programs, and positive impact for education and talent development.'
		)}
		showButtons={false}
		bgImage="/images/cta-building-glass-left.jpg"
		variant="kemitraan"
	/>
</main>

<Footer variant="kemitraan" />

<style>
	.page-content {
		width: 100%;
		padding-top: var(--navbar-height, 48px);
		overflow-x: hidden;
		background: #FFFFFF;
	}
</style>
