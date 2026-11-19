<script lang="ts">
	import Navbar from "#lib/components/layout/Navbar.svelte";
	import Footer from "#lib/components/layout/Footer.svelte";

	import HeroEducation from "#lib/components/sections/education/HeroEducation.svelte";
	import ServiceFloatingNavigation from "#lib/components/ui/ServiceFloatingNavigation.svelte";
	import AboutEducation from "#lib/components/sections/education/AboutEducation.svelte";
	import ServicesUnggulEducation from "#lib/components/sections/education/ServicesUnggulEducation.svelte";
	import StepsEducation from "#lib/components/sections/education/StepsEducation.svelte";
	import ProgramEducation from "#lib/components/sections/education/ProgramEducation.svelte";
	import ScholarshipCategoriesEducation from "#lib/components/sections/education/ScholarshipCategoriesEducation.svelte";
	import ScholarshipPrepEducation from "#lib/components/sections/education/ScholarshipPrepEducation.svelte";
	import ArticlesEducation from "#lib/components/sections/education/ArticlesEducation.svelte";
	import PartnersEducation from "#lib/components/sections/education/PartnersEducation.svelte";
	import CtaBanner from "#lib/components/ui/CtaBanner.svelte";
	import { i18n } from "#lib/stores/i18n.svelte";
</script>

<svelte:head>
	<title
		>{i18n.pick(
			"Layanan Pendidikan — SDJNusantara",
			"Education Services — SDJNusantara",
		)}</title
	>
	<meta
		name="description"
		content={i18n.pick(
			"Layanan Pendidikan SDJNusantara menyediakan pendampingan profesional, persiapan beasiswa, pengembangan talenta, dan kemitraan institusi untuk masa depan pendidikan Indonesia.",
			"SDJNusantara Education Services provides professional mentoring, scholarship preparation, talent development, and institutional partnerships for the future of education.",
		)}
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="pendidikan-main-content">
	<!-- 01: Hero Section (Fokus Pendidikan) -->
	<HeroEducation />

	<!-- 02: Standardized Service Floating Navigation Overlap -->
	<ServiceFloatingNavigation activeService="education" />

	<!-- 03: Tentang SDJNusantara (3-Kolom: Info, 5 Keunggulan, Foto Gedung Melengkung) -->
	<AboutEducation />

	<!-- 04: Solusi Terintegrasi untuk Pengembangan Potensi (4 Cards Unggulan) -->
	<ServicesUnggulEducation />

	<!-- 05: 5 Tahap Pelaksanaan Pendampingan Kami (Navy banner + Horizontal 5 Steps) -->
	<StepsEducation />

	<!-- 06: Program Pendidikan untuk Meningkatkan Daya Saing (2 Kolom + Foto Kampus) -->
	<ProgramEducation />

	<!-- 07: Temukan Beasiswa yang Sesuai dengan Tujuan Anda (5 Kapsul Horizontal) -->
	<ScholarshipCategoriesEducation />

	<!-- 08: Persiapkan Diri untuk Meraih Beasiswa Impian (3 Kolom: Foto, Info, Checklist) -->
	<ScholarshipPrepEducation />

	<!-- 09: Temukan Insight dan Inspirasi Terbaru (5 Cards: 4 Artikel + 1 Lihat Lebih Banyak) -->
	<ArticlesEducation />

	<!-- 10: Mitra & Kolaborasi (Carousel Logo Resmi Institusi) -->
	<PartnersEducation />

	<!-- 11: CTA Banner Full Background Image -->
	<CtaBanner
		title={i18n.pick(
			'Siap Mengembangkan <span class="highlight-gold">Kualitas Pendidikan</span> Institusi Anda?',
			'Ready to Elevate Your Institution’s <span class="highlight-gold">Education Quality?</span>',
		)}
		description={i18n.pick(
			"Dapatkan solusi pendidikan dan pengembangan talenta yang terarah sesuai kebutuhan institusi Anda.",
			"Get targeted education and talent development solutions tailored to your institution’s needs.",
		)}
		bgImage="/images/cta-pendidikan-academic-bg.jpg"
		primaryText={i18n.pick("Ajukan Konsultasi", "Request Consultation")}
		primaryHref="/kontak"
		secondaryText={i18n.pick("Diskusi Institusi", "Institutional Discussion")}
		secondaryHref="/kemitraan"
		variant="layanan"
	/>
</main>

<Footer compact={true} />

<style>
	.pendidikan-main-content {
		padding-top: var(--navbar-height, 48px);
		overflow-x: hidden;
		background: #ffffff;
	}
</style>
