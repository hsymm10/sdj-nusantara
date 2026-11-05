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

	// Knowledge Base Integration
	import { faqKnowledge } from '#lib/data/knowledge/faq';
	import { getKnowledgeById } from '#lib/data/knowledge/index';

	const caraKerjaData = getKnowledgeById('cara-kerja');
	const steps = [
		{
			step: '01',
			title: 'Konsultasi & Asesmen Awal',
			desc: 'Mendiskusikan kebutuhan, target, dan profil awal Anda atau institusi secara terarah.'
		},
		{
			step: '02',
			title: 'Perencanaan Program',
			desc: 'Menyusun rencana aksi, linimasa kegiatan, kurikulum pelatihan, atau daftar target beasiswa.'
		},
		{
			step: '03',
			title: 'Pelaksanaan Terstruktur',
			desc: 'Menjalankan bimbingan, pelatihan, telaah dokumen, atau simulasi secara intensif.'
		},
		{
			step: '04',
			title: 'Evaluasi & Umpan Balik',
			desc: 'Meninjau progres, menguji kesiapan dokumen/keterampilan, dan memberikan catatan perbaikan.'
		},
		{
			step: '05',
			title: 'Tindak Lanjut & Monitoring',
			desc: 'Pendampingan berkelanjutan hingga proses pendaftaran atau implementasi selesai.'
		}
	];

	let openFaqIndex = $state<number | null>(null);
	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

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
			if (id === 'layanan') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			} else {
				const target = document.getElementById(id);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth' });
				}
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
	<!-- SECTION 1: LAYANAN -->
	<section id="layanan" class="anchor-section">
		<!-- 1. Hero Layanan Pendidikan Tunggal -->
		<HeroServices />

		<!-- 2. Services Stats Overlap (Overlap Hero wave -13px sesuai mockup) -->
		<ServicesStatsOverlap />

		<!-- 3. Sticky Subnav Bar (Layanan, Program, Beasiswa) -->
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
						<span>Portofolio Layanan</span>
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
						<span>Program Pelatihan</span>
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
						<span>Direktori Beasiswa</span>
					</a>
				</div>
			</div>
		</nav>

		<!-- 4. Intro & 5 Zigzag Blocks -->
		<ServicesIntro />
		<ServicesZigzag />
	</section>

	<!-- SECTION 2: PROGRAM -->
	<section id="program" class="anchor-section program-section-wrap">
		<div class="section-divider-bar">
			<div class="divider-inner">
				<span class="divider-pill">Program Unggulan</span>
				<h2 class="divider-title">Kembangkan Potensi Bersama Program Terstruktur</h2>
				<p class="divider-desc">Pilihan program akselerasi kompetensi, bimbingan beasiswa, dan pengembangan talenta masa depan yang siap menjawab tantangan global.</p>
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
				<h2 class="divider-title">Akses Beasiswa Terkurasi</h2>
				<p class="divider-desc">Informasi lengkap peluang beasiswa studi dalam dan luar negeri serta panduan persiapan yang sistematis bersama konsultan pendidikan SDJNusantara.</p>
			</div>
		</div>

		<ScholarshipFeatureOverlap />

		<ScholarshipSearchSection bind:selectedCategory={activeScholarshipCategory} />

		<ScholarshipPrepGuide />

		<ScholarshipCategorySection onSelectCategory={handleScholarshipCategorySelect} />
	</section>

	<!-- SECTION 4: CARA KERJA KAMI (5 Tahap) -->
	<section class="workflow-section" aria-labelledby="workflow-heading">
		<div class="workflow-container">
			<div class="section-label-center">
				<span class="label-dash">—</span>
				<span class="label-text">ALUR LAYANAN</span>
			</div>
			<h2 id="workflow-heading" class="workflow-title">
				5 Tahap Pelaksanaan Pendampingan Kami
			</h2>
			<p class="workflow-desc">
				Setiap program dan bimbingan di SDJNusantara dijalankan melalui alur kerja yang terarah, transparan, dan berkesinambungan.
			</p>

			<div class="steps-grid">
				{#each steps as s}
					<div class="step-card">
						<div class="step-num-badge">{s.step}</div>
						<h3 class="step-card-title">{s.title}</h3>
						<p class="step-card-desc">{s.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- SECTION 5: FAQ ACCORDION (7 Pertanyaan Resmi) -->
	<section class="faq-accordion-section" aria-labelledby="faq-section-heading">
		<div class="faq-container">
			<div class="section-label-center">
				<span class="label-dash">—</span>
				<span class="label-text">TANYA JAWAB</span>
			</div>
			<h2 id="faq-section-heading" class="faq-main-title">
				Pertanyaan yang Sering Diajukan
			</h2>
			<p class="faq-main-desc">
				Informasi penting seputar layanan pendidikan, pendampingan beasiswa, serta kerja sama kelembagaan.
			</p>

			<div class="faq-accordion-list">
				{#each faqKnowledge as item, idx}
					<div class="faq-row {openFaqIndex === idx ? 'open' : ''}">
						<button
							type="button"
							class="faq-trigger"
							aria-expanded={openFaqIndex === idx}
							onclick={() => toggleFaq(idx)}
						>
							<span class="faq-q-text">{item.judul}</span>
							<span class="faq-arrow-icon" aria-hidden="true">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</span>
						</button>

						{#if openFaqIndex === idx}
							<div class="faq-body-panel">
								<p class="faq-ringkas-text">{item.ringkas}</p>
								{#if item.detail && item.detail.length > 0}
									<ul class="faq-detail-bullets">
										{#each item.detail as bullet}
											<li>{bullet}</li>
										{/each}
									</ul>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- 6. Single CTA Banner di Akhir Halaman -->
	<CtaBanner
		title="Siap Mengembangkan Potensi Anda?"
		description="Konsultasikan kebutuhan pendidikan, program pelatihan, atau rencana studi beasiswa bersama konsultan pendidikan SDJNusantara."
		primaryText="Jadwalkan Konsultasi →"
		primaryHref="/kontak"
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

	/* Anchor Scroll Margin Top setinggi Navbar (48px) + Subnav (~58px) */
	.anchor-section {
		scroll-margin-top: 106px;
	}

	/* Sticky Subnav Bar */
	.subnav-sticky {
		position: sticky;
		top: 48px;
		z-index: 35;
		background: rgba(255, 255, 255, 0.94);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border-top: 1px solid rgba(226, 232, 240, 0.8);
		border-bottom: 1px solid rgba(226, 232, 240, 0.9);
		box-shadow: 0 4px 18px rgba(8, 36, 66, 0.05);
		transition: all 0.25s ease;
	}

	.subnav-container {
		max-width: 1312px;
		margin: 0 auto;
		padding: 10px 16px;
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
		gap: 10px;
		background: #F1F5F9;
		padding: 5px;
		border-radius: 9999px;
		border: 1px solid #E2E8F0;
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
	}

	.subnav-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 9px 22px;
		border-radius: 9999px;
		font-size: 13.5px;
		font-weight: 600;
		color: #475569;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
	}

	.subnav-btn:hover {
		color: #082442;
		background: rgba(255, 255, 255, 0.8);
	}

	.subnav-btn.active {
		background: #082442;
		color: #FFFFFF;
		box-shadow: 0 4px 12px rgba(8, 36, 66, 0.2);
	}

	.subnav-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.8;
	}

	.subnav-btn.active .subnav-icon {
		color: #00A6B2;
		opacity: 1;
	}

	/* Section Dividers to blend Program & Beasiswa smoothly */
	.section-divider-bar {
		background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
		padding: 64px 20px 28px;
		border-top: 1px solid #E2E8F0;
		text-align: center;
		position: relative;
	}

	.scholarship-divider {
		background: linear-gradient(180deg, #F1F5F9 0%, #FFFFFF 100%);
		border-top: 1px solid #E2E8F0;
		margin-top: 48px;
	}

	.divider-inner {
		max-width: 760px;
		margin: 0 auto;
	}

	.divider-pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 5px 16px;
		background: #E6F7F8;
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		border-radius: 9999px;
		margin-bottom: 14px;
		border: 1px solid rgba(0, 166, 178, 0.2);
	}

	.scholarship-divider .divider-pill {
		background: #FEF3C7;
		color: #B45309;
		border: 1px solid rgba(245, 179, 49, 0.3);
	}

	.divider-title {
		font-size: 32px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.025em;
		line-height: 1.25;
	}

	.divider-desc {
		font-size: 15.5px;
		color: #64748B;
		margin: 0;
		line-height: 1.6;
	}

	/* Prevent overlap collision in embedded sections */
	.program-section-wrap :global(.category-overlap-wrap) {
		margin-top: 24px;
		margin-bottom: 2.25rem;
	}

	.scholarship-section-wrap :global(.sch-feature-overlap-wrap) {
		margin-top: 24px;
		margin-bottom: 2.5rem;
	}

	@media (max-width: 768px) {
		.subnav-container {
			padding: 8px 12px;
			overflow-x: auto;
			justify-content: flex-start;
			scrollbar-width: none;
			-ms-overflow-style: none;
		}

		.subnav-container::-webkit-scrollbar {
			display: none;
		}

		.subnav-btn {
			padding: 7px 16px;
			font-size: 12.5px;
			gap: 6px;
		}

		.subnav-icon svg {
			width: 15px;
			height: 15px;
		}

		.section-divider-bar {
			padding: 44px 16px 20px;
		}

		.divider-title {
			font-size: 24px;
		}

		.divider-desc {
			font-size: 14px;
		}
	}

	/* SECTION 4: WORKFLOW (5 Tahap) */
	.workflow-section {
		background: #F8FAFC;
		padding: 72px 20px 80px;
		border-top: 1px solid #E2E8F0;
		border-bottom: 1px solid #E2E8F0;
	}

	.workflow-container {
		width: 93%;
		max-width: 1360px;
		margin: 0 auto;
		text-align: center;
	}

	.section-label-center {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.workflow-title {
		font-size: clamp(24px, 2.2vw, 34px);
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.02em;
	}

	.workflow-desc {
		font-size: 15px;
		color: #64748B;
		max-width: 720px;
		margin: 0 auto 48px;
		line-height: 1.6;
	}

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 18px;
		text-align: left;
	}

	.step-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 24px 20px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 16px rgba(8, 36, 66, 0.04);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.step-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 24px rgba(8, 36, 66, 0.08);
	}

	.step-num-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		background: #082442;
		color: #F5B331;
		font-size: 14px;
		font-weight: 800;
		border-radius: 10px;
		margin-bottom: 16px;
	}

	.step-card-title {
		font-size: 16px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 10px;
		line-height: 1.35;
	}

	.step-card-desc {
		font-size: 13.5px;
		color: #64748B;
		line-height: 1.55;
		margin: 0;
	}

	/* SECTION 5: FAQ (7 Pertanyaan Resmi) */
	.faq-accordion-section {
		background: #FFFFFF;
		padding: 80px 20px 96px;
	}

	.faq-container {
		width: 93%;
		max-width: 980px;
		margin: 0 auto;
		text-align: center;
	}

	.faq-main-title {
		font-size: clamp(24px, 2.2vw, 34px);
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.02em;
	}

	.faq-main-desc {
		font-size: 15px;
		color: #64748B;
		max-width: 680px;
		margin: 0 auto 40px;
		line-height: 1.6;
	}

	.faq-accordion-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
		text-align: left;
	}

	.faq-row {
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		background: #FFFFFF;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
		overflow: hidden;
	}

	.faq-row.open {
		border-color: #16B6C1;
		box-shadow: 0 6px 20px rgba(7, 158, 173, 0.08);
	}

	.faq-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 24px;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 16px;
	}

	.faq-q-text {
		font-size: 16.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.4;
	}

	.faq-row.open .faq-q-text {
		color: #079EAD;
	}

	.faq-arrow-icon {
		flex-shrink: 0;
		color: #64748B;
		transition: transform 0.25s ease, color 0.2s ease;
	}

	.faq-row.open .faq-arrow-icon {
		transform: rotate(180deg);
		color: #079EAD;
	}

	.faq-body-panel {
		padding: 0 24px 22px;
		border-top: 1px solid #F1F5F9;
	}

	.faq-ringkas-text {
		font-size: 14.5px;
		line-height: 1.65;
		color: #334155;
		margin: 16px 0 10px;
	}

	.faq-detail-bullets {
		margin: 0;
		padding-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.faq-detail-bullets li {
		font-size: 13.5px;
		line-height: 1.55;
		color: #475569;
	}

	@media (max-width: 1024px) {
		.steps-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.steps-grid {
			grid-template-columns: 1fr;
		}

		.faq-trigger {
			padding: 16px 18px;
		}

		.faq-q-text {
			font-size: 15px;
		}

		.faq-body-panel {
			padding: 0 18px 18px;
		}
	}
</style>
