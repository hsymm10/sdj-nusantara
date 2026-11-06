<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';

	// 13 Sections sesuai Mockup Resmi /layanan/pendidikan
	import HeroServices from '#lib/components/sections/services/HeroServices.svelte';
	import StatsBar from '#lib/components/sections/home/StatsBar.svelte';
	import AboutSection from '#lib/components/sections/home/AboutSection.svelte';
	import ServicesUnggulSection from '#lib/components/sections/home/ServicesUnggulSection.svelte';
	import StepsSection from '#lib/components/sections/home/StepsSection.svelte';
	import ImpactSection from '#lib/components/sections/home/ImpactSection.svelte';
	import ProgramSection from '#lib/components/sections/home/ProgramSection.svelte';
	import ScholarshipCategoriesSection from '#lib/components/sections/home/ScholarshipCategoriesSection.svelte';
	import ScholarshipPrepSection from '#lib/components/sections/home/ScholarshipPrepSection.svelte';
	import ArticlesPreviewSection from '#lib/components/sections/home/ArticlesPreviewSection.svelte';
	import FAQHomeSection from '#lib/components/sections/home/FAQHomeSection.svelte';
	import CTAHomeSection from '#lib/components/sections/home/CTAHomeSection.svelte';
	import PartnersSection from '#lib/components/sections/home/PartnersSection.svelte';
</script>

<svelte:head>
	<title>Layanan Pendidikan — SDJNusantara</title>
	<meta
		name="description"
		content="Layanan Pendidikan SDJNusantara menyediakan pendampingan profesional, persiapan beasiswa, pengembangan talenta, dan kemitraan institusi untuk masa depan pendidikan Indonesia."
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="pendidikan-main-content">
	<!-- 01: Hero Section (Master Design Kemitraan: Fokus Pendidikan) -->
	<HeroServices />

	<!-- 02: Stats Bar (Target Program, 200+ Talenta, 12 Sosialisasi, 60 Coaching) -->
	<StatsBar />

	<!-- 03: Tentang SDJNusantara (Menjembatani Potensi & 5 Keunggulan) -->
	<AboutSection />

	<!-- 04: Layanan Unggulan (4 Cards Solusi Terintegrasi) -->
	<ServicesUnggulSection />

	<!-- 05: 5 Tahap Pelaksanaan (Navy banner + horizontal steps) -->
	<StepsSection />

	<!-- 06: Komitmen & Dampak (4 Metrik: 200+, 12, 60, 20+) -->
	<ImpactSection />

	<!-- 07: Program Pendidikan (2-col dengan foto mahasiswa kampus & aksen pita) -->
	<ProgramSection />

	<!-- 08: Akses Beasiswa Terkurasi (5 Kategori Horizontal) -->
	<ScholarshipCategoriesSection />

	<!-- 09: Persiapan Beasiswa (3-col: Foto, Bimbingan, Checklist Berkas) -->
	<ScholarshipPrepSection />

	<!-- 10: Artikel & Wawasan (4 Artikel + 1 Lihat Lebih Banyak) -->
	<ArticlesPreviewSection />

	<!-- 11: Pertanyaan Umum / FAQ (Foto Konsultan Wanita + Accordion) -->
	<FAQHomeSection />

	<!-- 12: CTA Konsultasi (Card Navy + Aksen Sudut Emas & Teal) -->
	<CTAHomeSection />

	<!-- 13: Mitra & Kolaborasi (Strip Logo Mitra Institusi) -->
	<PartnersSection />
</main>

<Footer compact={true} />

<style>
	.pendidikan-main-content {
		padding-top: 0;
		overflow-x: hidden;
	}
</style>
