<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import FaqSection from '#lib/components/sections/faq/FaqSection.svelte';
	import { serviceConfig } from '#lib/config/services';
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<svelte:head>
	<title>{i18n.pick('Pertanyaan yang Sering Diajukan (FAQ) — SDJ Nusantara', 'Frequently Asked Questions (FAQ) — SDJ Nusantara')}</title>
	<meta
		name="description"
		content={serviceConfig.legal
			? i18n.pick(
					'Temukan jawaban cepat atas pertanyaan seputar program pendidikan, persiapan beasiswa, kemitraan institusi, dan layanan hukum SDJ Nusantara.',
					'Find quick answers about education programs, scholarship preparation, institutional partnerships, and legal services at SDJ Nusantara.'
				)
			: i18n.pick(
					'Temukan jawaban cepat atas pertanyaan seputar program pendidikan, persiapan beasiswa, dan kemitraan institusi SDJ Nusantara.',
					'Find quick answers about education programs, scholarship preparation, and institutional partnerships at SDJ Nusantara.'
				)}
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

