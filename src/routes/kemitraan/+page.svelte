<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroPartner from '#lib/components/sections/partner/HeroPartner.svelte';
	import PartnerApproachSection from '#lib/components/sections/partner/PartnerApproachSection.svelte';
	import PartnerTypesSection from '#lib/components/sections/partner/PartnerTypesSection.svelte';
	import PartnerCollaborationForms from '#lib/components/sections/partner/PartnerCollaborationForms.svelte';
	import PartnerFocusFields from '#lib/components/sections/partner/PartnerFocusFields.svelte';
	import PartnerWorkflowSection from '#lib/components/sections/partner/PartnerWorkflowSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<svelte:head>
	<title>{i18n.pick('Kemitraan — SDJNusantara Strategic Your Partner', 'Partnerships — SDJNusantara Strategic Your Partner')}</title>
	<meta
		name="description"
		content={i18n.pick(
			'Peluang kemitraan dan kolaborasi strategis bersama SDJNusantara untuk membangun ekosistem pendidikan dan pengembangan talenta yang lebih kuat.',
			'Strategic partnership and collaboration opportunities with SDJNusantara to build a stronger education and talent development ecosystem.'
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

	<!-- 4. Bentuk Kerja Sama -->
	<PartnerCollaborationForms />

	<!-- 5. Bidang Kolaborasi -->
	<PartnerFocusFields />

	<!-- 6. Alur Kerja Sama -->
	<PartnerWorkflowSection />

	<!-- 7. CTA Banner -->
	<CtaBanner
		title={i18n.pick('Siap Menjalin Kemitraan dengan SDJNusantara?', 'Ready to Partner with SDJNusantara?')}
		description={i18n.pick(
			'Bersama kita bisa menciptakan lebih banyak peluang, program inovatif, dan dampak positif bagi dunia pendidikan dan talenta Indonesia.',
			'Together we can create greater opportunities, innovative programs, and positive impact for education and talent development.'
		)}
		primaryText={i18n.pick('Ajukan Kerja Sama →', 'Propose a Partnership →')}
		primaryHref="/konsultasi"
		secondaryText={i18n.pick('Hubungi Kami', 'Contact Us')}
		secondaryHref="/kontak"
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
