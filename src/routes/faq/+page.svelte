<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import FaqSection from '#lib/components/sections/faq/FaqSection.svelte';
</script>

<svelte:head>
	<title>Pertanyaan yang Sering Diajukan (FAQ) — SDJNusantara</title>
	<meta
		name="description"
		content="Temukan jawaban cepat atas pertanyaan seputar program pendidikan, persiapan beasiswa, kemitraan institusi, dan layanan hukum SDJNusantara."
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content">
	<FaqSection />
</main>

<Footer variant="kontak" />

<style>
	.page-content {
		width: 100%;
		overflow-x: hidden;
		background: #F5F9FC;
		padding-top: 48px; /* Fixed navbar height */
		box-sizing: border-box;
	}
</style>
