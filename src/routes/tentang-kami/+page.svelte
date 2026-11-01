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
</script>

<svelte:head>
	<title>Tentang Kami — SDJNusantara Konsultan Pendidikan</title>
	<meta name="description" content="Profil, visi, misi, nilai luhur, dan struktur organisasi SDJNusantara sebagai konsultan pendidikan dan pengembangan talenta." />
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
		title="Mari Bersinergi Bersama SDJNusantara"
		description="Bergabunglah dalam perjalanan kami untuk menciptakan pendidikan yang lebih baik."
		primaryText="Hubungi Kami Sekarang →"
		primaryHref="/kontak"
		secondaryText="Pelajari Program Kami"
		secondaryHref="/program"
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
