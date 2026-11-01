<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroContact from '#lib/components/sections/contact/HeroContact.svelte';
	import ContactOverlapCards from '#lib/components/sections/contact/ContactOverlapCards.svelte';
	import ContactFormAndChannels from '#lib/components/sections/contact/ContactFormAndChannels.svelte';
	import ContactServiceArea from '#lib/components/sections/contact/ContactServiceArea.svelte';
	import ContactLocation3Panel from '#lib/components/sections/contact/ContactLocation3Panel.svelte';
	import ContactFaqSection from '#lib/components/sections/contact/ContactFaqSection.svelte';
</script>

<svelte:head>
	<title>Kontak Kami — SDJNusantara Konsultan Pendidikan</title>
	<meta
		name="description"
		content="Hubungi tim SDJNusantara untuk konsultasi pendidikan, beasiswa, pengembangan talenta, dan kemitraan institusi di seluruh Indonesia."
	/>
</svelte:head>

<Navbar compact={true} />

<main class="page-content">
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
</main>

<Footer variant="kontak" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #FFFFFF;
		padding-top: 48px; /* Fixed compact navbar height */
	}
</style>
