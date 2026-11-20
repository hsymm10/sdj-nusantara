<script lang="ts">
	import Navbar from "#lib/components/layout/Navbar.svelte";
	import Footer from "#lib/components/layout/Footer.svelte";
	import HeroContact from "#lib/components/sections/contact/HeroContact.svelte";
	import ContactOverlapCards from "#lib/components/sections/contact/ContactOverlapCards.svelte";
	import ContactFormAndChannels from "#lib/components/sections/contact/ContactFormAndChannels.svelte";
	import ContactServiceArea from "#lib/components/sections/contact/ContactServiceArea.svelte";
	import ContactLocation3Panel from "#lib/components/sections/contact/ContactLocation3Panel.svelte";
	import ContactFaqSection from "#lib/components/sections/contact/ContactFaqSection.svelte";
	import CtaBanner from "#lib/components/ui/CtaBanner.svelte";
	import { i18n } from "#lib/stores/i18n.svelte";
</script>

<svelte:head>
	<title
		>{i18n.pick(
			"Kontak Kami — SDJ Nusantara Strategic Your Partner",
			"Contact Us — SDJ Nusantara Strategic Your Partner",
		)}</title
	>
	<meta
		name="description"
		content={i18n.pick(
			"Hubungi tim SDJ Nusantara untuk konsultasi pendidikan, beasiswa, pengembangan talenta, dan kemitraan institusi di seluruh Indonesia.",
			"Contact the SDJ Nusantara team for education consultation, scholarships, talent development, and institutional partnerships across Indonesia.",
		)}
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content">
	<span id="chat" class="anchor-target" aria-hidden="true"></span>
	<!-- 1. Hero Kontak -->
	<HeroContact />

	<!-- 2. Overlap 4 Contact Cards -->
	<ContactOverlapCards />

	<!-- 3. Form Pesan Konsultasi vs Cara Lain Menghubungi Kami -->
	<ContactFormAndChannels />

	<!-- 4. Wilayah Layanan & Peta Indonesia -->
	<ContactServiceArea />

	<!-- 5. Lokasi Kantor 3-Panel Band -->
	<ContactLocation3Panel />

	<!-- 6. Pertanyaan Umum (FAQ Accordion) -->
	<ContactFaqSection />

	<!-- 7. CTA Image Banner (Di atas Footer, Tanpa Tombol) -->
	<CtaBanner
		title={i18n.pick(
			'Siap Mengembangkan <span class="highlight-gold">Potensi Institusi Anda?</span>',
			'Ready to Unlock <span class="highlight-gold">Your Institution’s Potential?</span>',
		)}
		description={i18n.pick(
			"Temukan solusi pendidikan, pengembangan talenta, dan pendampingan institusi bersama SDJ Nusantara.",
			"Discover tailored education solutions, talent development, and institutional mentoring with SDJ Nusantara.",
		)}
		bgImage="/images/cta-layanan-collaboration-bg.jpg"
		showButtons={false}
		variant="kontak"
	/>
</main>

<Footer variant="kontak" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #ffffff;
		padding-top: 48px; /* Fixed compact navbar height */
	}
</style>
