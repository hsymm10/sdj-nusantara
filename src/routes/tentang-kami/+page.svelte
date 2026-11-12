<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroAbout from '#lib/components/sections/about/HeroAbout.svelte';
	import LeadershipSection from '#lib/components/sections/about/LeadershipSection.svelte';
	import ProfileSection from '#lib/components/sections/about/ProfileSection.svelte';
	import VisiMisiSection from '#lib/components/sections/about/VisiMisiSection.svelte';
	import NilaiSection from '#lib/components/sections/about/NilaiSection.svelte';
	import PendekatanSection from '#lib/components/sections/about/PendekatanSection.svelte';
	import StrukturSection from '#lib/components/sections/about/StrukturSection.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<svelte:head>
	<title>{i18n.pick('Tentang Kami — SDJNusantara Strategic Your Partner', 'About Us — SDJNusantara Your Strategic Partner')}</title>
	<meta name="description" content={i18n.pick('Profil, visi, misi, nilai luhur, dan struktur organisasi SDJNusantara sebagai konsultan pendidikan dan pengembangan talenta.', 'Profile, vision, mission, core values, and organizational structure of SDJNusantara as an education and talent development consultancy.')} />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content about-page">
	<HeroAbout />
	<LeadershipSection />
	<ProfileSection />
	<VisiMisiSection />
	<NilaiSection />
	<PendekatanSection />
	<StrukturSection />
	<CtaBanner
		title={i18n.pick('Mari Bersinergi Bersama SDJNusantara', 'Let’s Collaborate with SDJNusantara')}
		description={i18n.pick('Bergabunglah dalam perjalanan kami untuk menciptakan pendidikan yang lebih baik.', 'Join us on our journey to build better education for the future.')}
		primaryText={i18n.pick('Hubungi Kami Sekarang →', 'Contact Us Now →')}
		primaryHref="/kontak"
		secondaryText={i18n.pick('Pelajari Program Kami', 'Explore Our Programs')}
		secondaryHref="/layanan/pendidikan#program"
		bgImage="/images/cta-building-glass.jpg"
		variant="tentang-kami"
	/>
</main>

<Footer variant="tentang-kami" />

<style>
	.page-content {
		padding-top: 48px; /* Fixed navbar height */
		overflow-x: hidden;
	}
</style>
