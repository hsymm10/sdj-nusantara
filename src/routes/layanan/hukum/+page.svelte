<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';

	// 7 Komponen Section Sesuai Mockup Referensi
	import HeroLegal from '#lib/components/sections/legal/HeroLegal.svelte';
	import CategoryNavLegal from '#lib/components/sections/legal/CategoryNavLegal.svelte';
	import AboutLegal from '#lib/components/sections/legal/AboutLegal.svelte';
	import ScopeLegal from '#lib/components/sections/legal/ScopeLegal.svelte';
	import AdvantagesLegal from '#lib/components/sections/legal/AdvantagesLegal.svelte';
	import ProcessLegal from '#lib/components/sections/legal/ProcessLegal.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
</script>

<svelte:head>
	<title>Layanan Hukum & Konsultasi Regulasi — SDJNusantara</title>
	<meta
		name="description"
		content="Pendampingan hukum yang terarah dan sesuai regulasi di bidang pendidikan bagi institusi, organisasi, maupun korporasi."
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="legal-page">
	<!-- Section A: Hero Section Layanan Hukum -->
	<HeroLegal />

	<!-- Section B: Floating Category Navigation -->
	<CategoryNavLegal />

	<!-- Area Konten Putih Utama dengan Dekorasi Terpusat hanya di Sudut Kanan Atas & Kanan Bawah -->
	<div class="legal-content-surface">
		<!-- Dekorasi A: Concentric Quarter-Circle di Pojok Kanan Atas -->
		<svg class="legal-deco-top-right" viewBox="0 0 180 180" fill="none" aria-hidden="true">
			<path d="M180 0 H10 A170 170 0 0 0 180 170 V0 Z" fill="#DFF6F8" />
			<path d="M180 0 H60 A120 120 0 0 0 180 120 V0 Z" fill="#6CD5DF" fill-opacity="0.55" />
			<path d="M180 0 H110 A70 70 0 0 0 180 70 V0 Z" fill="#00AAB5" />
		</svg>

		<!-- Dekorasi B: Curved Wave Abstrak di Pojok Kanan Bawah (#DFF6F8 + #FFB72B + #00AAB5) -->
		<svg class="legal-deco-bottom-right" viewBox="0 0 360 140" fill="none" preserveAspectRatio="none" aria-hidden="true">
			<path d="M20 140 C125 112, 240 62, 360 12 V140 H20 Z" fill="#DFF6F8" />
			<path d="M88 140 C178 116, 272 78, 360 36 V140 H88 Z" fill="#FFB72B" />
			<path d="M158 140 C228 122, 298 94, 360 64 V140 H158 Z" fill="#00AAB5" />
		</svg>

		<!-- Section C: Tentang Layanan Hukum -->
		<AboutLegal />

		<!-- Section D: Ruang Lingkup Layanan Hukum -->
		<ScopeLegal />

		<!-- Section E: Keunggulan Layanan Hukum -->
		<AdvantagesLegal />

		<!-- Section F: Alur Layanan -->
		<ProcessLegal />
	</div>

	<!-- Section G: CTA Banner Full Background Image -->
	<CtaBanner
		title='Siap Memperkuat <span class="highlight-gold">Tata Kelola Hukum</span> Institusi Anda?'
		description="Dapatkan pendampingan hukum yang terarah untuk membantu memenuhi kebutuhan regulasi, kepatuhan, dan tata kelola institusi pendidikan."
		bgImage="/images/cta-hukum-legal-bg.jpg"
		primaryText="Ajukan Konsultasi"
		primaryHref="/kontak"
		variant="layanan"
	/>
</main>

<Footer variant="layanan" />

<style>
	.legal-page {
		padding-top: 0;
		background: #ffffff;
		color: #183553;
		overflow-x: hidden;
	}

	/* Selaraskan lebar container CTA Banner di /layanan/hukum dengan container 1200px seluruh section */
	.legal-page :global(.cta-banner.variant-layanan .cta-container) {
		width: 92%;
		max-width: 1200px;
		padding: 0;
	}

	/* Wrapper dekorasi background yang terisolasi pada sudut kanan atas & bawah */
	.legal-content-surface {
		position: relative;
		overflow: hidden;
		background: #ffffff;
	}

	.legal-deco-top-right {
		position: absolute;
		top: 0;
		right: 0;
		width: 150px;
		height: 150px;
		pointer-events: none;
		z-index: 1;
	}

	.legal-deco-bottom-right {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 280px;
		height: 112px;
		pointer-events: none;
		z-index: 1;
	}

	@media (max-width: 1024px) {
		.legal-deco-top-right {
			width: 110px;
			height: 110px;
		}

		.legal-deco-bottom-right {
			width: 200px;
			height: 82px;
		}
	}

	@media (max-width: 680px) {
		.legal-deco-top-right,
		.legal-deco-bottom-right {
			display: none;
		}
	}
</style>
