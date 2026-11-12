<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import FaqSection from '#lib/components/sections/faq/FaqSection.svelte';
	import { serviceConfig } from '#lib/config/services';
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<svelte:head>
	<title>{i18n.pick('Pertanyaan yang Sering Diajukan (FAQ) — SDJNusantara', 'Frequently Asked Questions (FAQ) — SDJNusantara')}</title>
	<meta
		name="description"
		content={serviceConfig.legal
			? i18n.pick(
					'Temukan jawaban cepat atas pertanyaan seputar program pendidikan, persiapan beasiswa, kemitraan institusi, dan layanan hukum SDJNusantara.',
					'Find quick answers about education programs, scholarship preparation, institutional partnerships, and legal services at SDJNusantara.'
				)
			: i18n.pick(
					'Temukan jawaban cepat atas pertanyaan seputar program pendidikan, persiapan beasiswa, dan kemitraan institusi SDJNusantara.',
					'Find quick answers about education programs, scholarship preparation, and institutional partnerships at SDJNusantara.'
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

