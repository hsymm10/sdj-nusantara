<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import CtaBanner from '#lib/components/ui/CtaBanner.svelte';

	// Section Layanan
	import HeroServices from '#lib/components/sections/services/HeroServices.svelte';
	import ServicesStatsOverlap from '#lib/components/sections/services/ServicesStatsOverlap.svelte';
	import ServicesIntro from '#lib/components/sections/services/ServicesIntro.svelte';
	import ServicesZigzag from '#lib/components/sections/services/ServicesZigzag.svelte';

	// Section Program
	import ProgramCategoryOverlap from '#lib/components/sections/program/ProgramCategoryOverlap.svelte';
	import ProgramFeaturedCard from '#lib/components/sections/program/ProgramFeaturedCard.svelte';
	import ProgramListSection from '#lib/components/sections/program/ProgramListSection.svelte';
	import ProgramCustomSection from '#lib/components/sections/program/ProgramCustomSection.svelte';

	// Section Beasiswa
	import ScholarshipFeatureOverlap from '#lib/components/sections/scholarship/ScholarshipFeatureOverlap.svelte';
	import ScholarshipSearchSection from '#lib/components/sections/scholarship/ScholarshipSearchSection.svelte';
	import ScholarshipPrepGuide from '#lib/components/sections/scholarship/ScholarshipPrepGuide.svelte';
	import ScholarshipCategorySection from '#lib/components/sections/scholarship/ScholarshipCategorySection.svelte';

	// State internal program & beasiswa
	let activeProgramCategory = $state('Semua Program');
	let activeScholarshipCategory = $state('Semua Kategori');

	// Active tab anchor for subnav
	let activeSection = $state<'layanan' | 'program' | 'beasiswa'>('layanan');

	function handleProgramCategorySelect(cat: string) {
		activeProgramCategory = cat;
		if (typeof document !== 'undefined') {
			const el = document.getElementById('daftar-program');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	function handleScholarshipCategorySelect(cat: string) {
		activeScholarshipCategory = cat;
		if (typeof document !== 'undefined') {
			const el = document.getElementById('beasiswa');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	function scrollToSection(id: 'layanan' | 'program' | 'beasiswa') {
		activeSection = id;
		if (typeof document !== 'undefined') {
			const target = document.getElementById(id);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	onMount(() => {
		// Handle hash or query param on initial load
		const hash = window.location.hash.replace('#', '');
		const tab = page.url.searchParams.get('tab');
		const targetId = hash || tab;

		if (targetId && (targetId === 'layanan' || targetId === 'program' || targetId === 'beasiswa')) {
			activeSection = targetId as 'layanan' | 'program' | 'beasiswa';
			setTimeout(() => {
				const el = document.getElementById(targetId);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth' });
				}
			}, 150);
		}

		// Setup Intersection Observer to highlight current active subnav item
		const sections = ['layanan', 'program', 'beasiswa'];
		const observerOptions = {
			root: null,
			rootMargin: '-120px 0px -60% 0px',
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
					if (id === 'layanan' || id === 'program' || id === 'beasiswa') {
						activeSection = id;
					}
				}
			});
		}, observerOptions);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Layanan Pendidikan — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="Layanan Pendidikan terpadu SDJNusantara: Konsultasi Pendidikan, Program Pelatihan & Pengembangan Talenta, serta Direktori Beasiswa terkurasi."
	/>
	<link rel="canonical" href="https://sdjnusantara.com/layanan/pendidikan" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="page-content">
	<!-- 1. Hero Layanan Pendidikan Tunggal -->
	<HeroServices />

	<!-- 2. Sticky Subnav Bar (Layanan, Program, Beasiswa) -->
	<nav class="subnav-sticky" aria-label="Navigasi Bagian Layanan Pendidikan">
		<div class="subnav-container">
			<div class="subnav-pills" role="tablist">
				<a
					href="#layanan"
					class="subnav-btn {activeSection === 'layanan' ? 'active' : ''}"
					role="tab"
					aria-selected={activeSection === 'layanan'}
					onclick={(e) => {
						e.preventDefault();
						scrollToSection('layanan');
						history.replaceState(null, '', '#layanan');
					}}
				>
					<span class="subnav-icon">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
							<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
						</svg>
					</span>
					<span>Layanan</span>
				</a>

				<a
					href="#program"
					class="subnav-btn {activeSection === 'program' ? 'active' : ''}"
					role="tab"
					aria-selected={activeSection === 'program'}
					onclick={(e) => {
						e.preventDefault();
						scrollToSection('program');
						history.replaceState(null, '', '#program');
					}}
				>
					<span class="subnav-icon">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
						</svg>
					</span>
					<span>Program</span>
				</a>

				<a
					href="#beasiswa"
					class="subnav-btn {activeSection === 'beasiswa' ? 'active' : ''}"
					role="tab"
					aria-selected={activeSection === 'beasiswa'}
					onclick={(e) => {
						e.preventDefault();
						scrollToSection('beasiswa');
						history.replaceState(null, '', '#beasiswa');
					}}
				>
					<span class="subnav-icon">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="8" r="7"></circle>
							<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
						</svg>
					</span>
					<span>Beasiswa</span>
				</a>
			</div>
		</div>
	</nav>

	<!-- SECTION 1: LAYANAN -->
	<section id="layanan" class="anchor-section">
		<ServicesStatsOverlap />
		<ServicesIntro />
		<ServicesZigzag />
	</section>

	<!-- SECTION 2: PROGRAM -->
	<section id="program" class="anchor-section program-section-wrap">
		<div class="section-divider-bar">
			<div class="divider-inner">
				<span class="divider-pill">Program Unggulan</span>
				<h2 class="divider-title">Kembangkan Potensi Bersama Program Terstruktur</h2>
				<p class="divider-desc">Pilihan program akselerasi kompetensi, bimbingan beasiswa, dan pengembangan talenta masa depan.</p>
			</div>
		</div>

		<ProgramCategoryOverlap
			selectedCategory={activeProgramCategory === 'Semua Program' ? 'Persiapan Beasiswa' : activeProgramCategory}
			onSelect={handleProgramCategorySelect}
		/>

		<ProgramFeaturedCard />

		<ProgramListSection
			activeCategory={activeProgramCategory}
			onCategoryChange={(cat) => (activeProgramCategory = cat)}
		/>

		<ProgramCustomSection />
	</section>

	<!-- SECTION 3: BEASISWA -->
	<section id="beasiswa" class="anchor-section scholarship-section-wrap">
		<div class="section-divider-bar scholarship-divider">
			<div class="divider-inner">
				<span class="divider-pill">Direktori Beasiswa</span>
				<h2 class="divider-title">Akses Beasiswa Terpercaya & Terkurasi</h2>
				<p class="divider-desc">Informasi lengkap peluang beasiswa studi dalam dan luar negeri serta panduan persiapan yang teruji.</p>
			</div>
		</div>

		<ScholarshipFeatureOverlap />

		<ScholarshipSearchSection bind:selectedCategory={activeScholarshipCategory} />

		<ScholarshipPrepGuide />

		<ScholarshipCategorySection onSelectCategory={handleScholarshipCategorySelect} />
	</section>

	<!-- 7. Single CTA Banner di Akhir Halaman -->
	<CtaBanner
		title="Siap Mengembangkan Potensi Anda?"
		description="Konsultasikan kebutuhan pendidikan, program pelatihan, atau rencana studi beasiswa bersama tim ahli SDJNusantara."
		primaryText="Jadwalkan Konsultasi →"
		primaryHref="/konsultasi"
		secondaryText="Hubungi Kami"
		secondaryHref="/kontak"
		bgImage="/images/cta-grad-cap-dark.jpg"
		variant="layanan"
	/>
</main>

<Footer variant="layanan" />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.page-content {
		padding-top: 48px;
		overflow-x: hidden;
	}

	/* Anchor Scroll Margin Top setinggi Navbar (48px) + Subnav (~54px) */
	.anchor-section {
		scroll-margin-top: 106px;
	}

	/* Sticky Subnav Bar */
	.subnav-sticky {
		position: sticky;
		top: 48px;
		z-index: 35;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid #E2E8F0;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.04);
		transition: all 0.25s ease;
	}

	.subnav-container {
		max-width: 1312px;
		margin: 0 auto;
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 1920px) {
		.subnav-container {
			max-width: 1500px;
		}
	}

	.subnav-pills {
		display: flex;
		align-items: center;
		gap: 8px;
		background: #F1F5F9;
		padding: 4px;
		border-radius: 9999px;
		border: 1px solid #E2E8F0;
	}

	.subnav-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 8px 20px;
		border-radius: 9999px;
		font-size: 13.5px;
		font-weight: 600;
		color: #475569;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.subnav-btn:hover {
		color: #082442;
		background: rgba(255, 255, 255, 0.6);
	}

	.subnav-btn.active {
		background: #082442;
		color: #FFFFFF;
		box-shadow: 0 4px 10px rgba(8, 36, 66, 0.15);
	}

	.subnav-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.85;
	}

	.subnav-btn.active .subnav-icon {
		color: #00A6B2;
		opacity: 1;
	}

	/* Section Dividers to blend Program & Beasiswa smoothly */
	.section-divider-bar {
		background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
		padding: 56px 20px 24px;
		border-top: 1px solid #EAEFF5;
		text-align: center;
	}

	.scholarship-divider {
		background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
		border-top: 1px solid #E2E8F0;
		margin-top: 40px;
	}

	.divider-inner {
		max-width: 760px;
		margin: 0 auto;
	}

	.divider-pill {
		display: inline-block;
		padding: 4px 14px;
		background: #E6F7F8;
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		border-radius: 9999px;
		margin-bottom: 12px;
	}

	.scholarship-divider .divider-pill {
		background: #FEF3C7;
		color: #B45309;
	}

	.divider-title {
		font-size: 28px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px;
		letter-spacing: -0.02em;
	}

	.divider-desc {
		font-size: 15px;
		color: #64748B;
		margin: 0;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.subnav-btn {
			padding: 6px 14px;
			font-size: 12.5px;
			gap: 6px;
		}

		.subnav-icon svg {
			width: 15px;
			height: 15px;
		}

		.divider-title {
			font-size: 22px;
		}

		.divider-desc {
			font-size: 13.5px;
		}
	}
</style>
