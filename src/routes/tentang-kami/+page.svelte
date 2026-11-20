<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroAbout from '#lib/components/sections/about/HeroAbout.svelte';
	import ProfileSection from '#lib/components/sections/about/ProfileSection.svelte';
	import AboutDetailedSection from '#lib/components/sections/about/AboutDetailedSection.svelte';
	import VisiMisiSection from '#lib/components/sections/about/VisiMisiSection.svelte';
	import NilaiSection from '#lib/components/sections/about/NilaiSection.svelte';
	import PendekatanSection from '#lib/components/sections/about/PendekatanSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<svelte:head>
	<title>{i18n.pick('Tentang Kami — SDJ Nusantara Strategic Your Partner', 'About Us — SDJ Nusantara Your Strategic Partner')}</title>
	<meta name="description" content={i18n.pick('Profil, visi, misi, nilai luhur, dan pendekatan SDJ Nusantara sebagai konsultan pendidikan dan pengembangan talenta.', 'Profile, vision, mission, core values, and approach of SDJ Nusantara as an education and talent development consultancy.')} />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content about-page">
	<HeroAbout />
	<ProfileSection />
	<AboutDetailedSection />
	<VisiMisiSection />
	<NilaiSection />
	<PendekatanSection />
	<CtaBanner
		title={i18n.pick('Mari Bersinergi Bersama SDJ Nusantara', 'Let’s Collaborate with SDJ Nusantara')}
		description={i18n.pick('Bergabunglah dalam perjalanan kami untuk menciptakan pendidikan yang lebih baik.', 'Join us on our journey to build better education for the future.')}
		bgImage="/images/cta-building-glass.jpg"
		variant="tentang-kami"
		showButtons={false}
	/>
</main>

<Footer variant="tentang-kami" />

<style>
	.page-content {
		padding-top: 48px; /* Fixed navbar height */
		overflow-x: hidden;
	}
</style>
