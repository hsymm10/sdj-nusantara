<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';

	// 13 Komponen Sections Presisi Sesuai Mockup Resmi (GAMBAR 2)
	import HeroEducation from '#lib/components/sections/education/HeroEducation.svelte';
	import StatsBarEducation from '#lib/components/sections/education/StatsBarEducation.svelte';
	import AboutEducation from '#lib/components/sections/education/AboutEducation.svelte';
	import ServicesUnggulEducation from '#lib/components/sections/education/ServicesUnggulEducation.svelte';
	import StepsEducation from '#lib/components/sections/education/StepsEducation.svelte';
	import ImpactEducation from '#lib/components/sections/education/ImpactEducation.svelte';
	import ProgramEducation from '#lib/components/sections/education/ProgramEducation.svelte';
	import ScholarshipCategoriesEducation from '#lib/components/sections/education/ScholarshipCategoriesEducation.svelte';
	import ScholarshipPrepEducation from '#lib/components/sections/education/ScholarshipPrepEducation.svelte';
	import ArticlesEducation from '#lib/components/sections/education/ArticlesEducation.svelte';
	import FAQEducation from '#lib/components/sections/education/FAQEducation.svelte';
	import PartnersEducation from '#lib/components/sections/education/PartnersEducation.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
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
	<!-- 01: Hero Section (Fokus Pendidikan) -->
	<HeroEducation />

	<!-- 02: Stats Bar (Overlap -12px, 4 Metrik) -->
	<StatsBarEducation />

	<!-- 03: Tentang SDJNusantara (3-Kolom: Info, 5 Keunggulan, Foto Gedung Melengkung) -->
	<AboutEducation />

	<!-- 04: Solusi Terintegrasi untuk Pengembangan Potensi (4 Cards Unggulan) -->
	<ServicesUnggulEducation />

	<!-- 05: 5 Tahap Pelaksanaan Pendampingan Kami (Navy banner + Horizontal 5 Steps) -->
	<StepsEducation />

	<!-- 06: Komitmen Nyata untuk Dampak yang Terukur (4 Cards: 1 Solid Teal) -->
	<ImpactEducation />

	<!-- 07: Program Pendidikan untuk Meningkatkan Daya Saing (2 Kolom + Foto Kampus) -->
	<ProgramEducation />

	<!-- 08: Temukan Beasiswa yang Sesuai dengan Tujuan Anda (5 Kapsul Horizontal) -->
	<ScholarshipCategoriesEducation />

	<!-- 09: Persiapkan Diri untuk Meraih Beasiswa Impian (3 Kolom: Foto, Info, Checklist) -->
	<ScholarshipPrepEducation />

	<!-- 10: Temukan Insight dan Inspirasi Terbaru (5 Cards: 4 Artikel + 1 Lihat Lebih Banyak) -->
	<ArticlesEducation />

	<!-- 11: Pertanyaan Umum / FAQ (Foto Konsultan Hijab + Bubble ? + 4 Accordion) -->
	<FAQEducation />

	<!-- 12: Mitra & Kolaborasi (Carousel Logo Resmi Institusi) -->
	<PartnersEducation />

	<!-- 13: CTA Banner Full Background Image -->
	<CtaBanner
		title='Siap Mengembangkan <span class="highlight-gold">Kualitas Pendidikan</span> Institusi Anda?'
		description="Dapatkan solusi pendidikan dan pengembangan talenta yang terarah sesuai kebutuhan institusi Anda."
		bgImage="/images/cta-pendidikan-academic-bg.jpg"
		primaryText="Konsultasikan Kebutuhan"
		primaryHref="/kontak"
		secondaryText="Jelajahi Program"
		secondaryHref="/layanan/pendidikan#program"
		variant="layanan"
	/>
</main>

<Footer compact={true} />

<style>
	.pendidikan-main-content {
		padding-top: 0;
		overflow-x: hidden;
		background: #ffffff;
	}
</style>
