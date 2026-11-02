<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroConsult from '#lib/components/sections/consult/HeroConsult.svelte';
	import ConsultMainSection from '#lib/components/sections/consult/ConsultMainSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
	import { contactConfig } from '#lib/config/contact';
</script>

<svelte:head>
	<title>Konsultasi — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="Konsultasi pendidikan dan pengembangan talenta bersama SDJNusantara untuk merencanakan pendidikan, meraih beasiswa, dan meningkatkan karier masa depan."
	/>
</svelte:head>

<Navbar compact={true} />

<main class="page-content">
	<!-- 1. Hero Konsultasi -->
	<HeroConsult />

	<!-- 2. Mengapa Konsultasi, Alur & Form Pengajuan -->
	<ConsultMainSection />

	<!-- 3. CTA Banner -->
	<CtaBanner
		title="Masih Punya Pertanyaan?"
		description="Tim kami siap membantu Anda melalui sesi konsultasi yang personal dan solutif."
		primaryText="Hubungi Konsultan →"
		primaryHref="/kontak"
		secondaryText="Chat via WhatsApp"
		secondaryHref={contactConfig.whatsappUrl}
		secondaryIcon="whatsapp"
		secondaryTarget="_blank"
		bgImage="/images/cta-grad-cap-dark.jpg"
	/>
</main>

<Footer variant="home" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #FFFFFF;
		padding-top: 48px;
	}
</style>
