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
</script>

<svelte:head>
	<title>Kemitraan — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="Peluang kemitraan dan kolaborasi strategis bersama SDJNusantara untuk membangun ekosistem pendidikan dan pengembangan talenta yang lebih kuat."
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
		title="Siap Menjalin Kemitraan dengan SDJNusantara?"
		description="Bersama kita bisa menciptakan lebih banyak peluang, program inovatif, dan dampak positif bagi dunia pendidikan dan talenta Indonesia."
		primaryText="Ajukan Kerja Sama →"
		primaryHref="/konsultasi"
		secondaryText="Hubungi Kami"
		secondaryHref="/kontak"
		bgImage="/images/cta-building-glass-left.jpg"
		variant="kemitraan"
	/>
</main>

<Footer variant="kemitraan" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #FFFFFF;
	}
</style>
