<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/state";
	import Navbar from "#lib/components/layout/Navbar.svelte";
	import Footer from "#lib/components/layout/Footer.svelte";
	import CtaBanner from "#lib/components/ui/CtaBanner.svelte";
	import { chatStore } from "#lib/stores/chat.svelte";
	import { pendidikanKnowledge } from "#lib/data/knowledge/pendidikan";
	import { beasiswaKnowledge } from "#lib/data/knowledge/beasiswa";
	import { serviceConfig } from "#lib/config/services";
	import { i18n } from "#lib/stores/i18n.svelte";
	import { heroEntrance, scrollReveal } from "#lib/motion";
	import InstitutionalDetailModal, {
		type InstitutionalServiceData,
	} from "#lib/components/sections/education/InstitutionalDetailModal.svelte";

	type ServiceCategory = "individu" | "institusi";
	let activeTab = $state<ServiceCategory>(
		page.url.searchParams.get("tab")?.toLowerCase() === "institusi"
			? "institusi"
			: "individu",
	);

	$effect(() => {
		const param = page.url.searchParams.get("tab")?.toLowerCase();
		if (param === "institusi" && activeTab !== "institusi") {
			activeTab = "institusi";
		} else if (param === "individu" && activeTab !== "individu") {
			activeTab = "individu";
		}
	});

	function setTab(tab: ServiceCategory) {
		activeTab = tab;
		if (typeof window !== "undefined" && window.history) {
			const url = new URL(window.location.href);
			url.searchParams.set("tab", tab);
			url.hash = tab;
			window.history.replaceState(null, "", url.toString());
		}
	}

	const institutionalServices = $derived<InstitutionalServiceData[]>([
		{
			id: "pengembangan-kompetensi",
			title: i18n.pick(
				"Pengembangan Kompetensi",
				"Competency Development",
			),
			badge: i18n.pick(
				"Pengembangan Kompetensi",
				"Competency Development",
			),
			desc: i18n.pick(
				"Program pengembangan kemampuan dan kapasitas sumber daya manusia institusi melalui pelatihan terstruktur dan aplikatif.",
				"Capacity building and human resource development through structured and practical training programs.",
			),
			checklist: [
				i18n.pick(
					"Asesmen Kebutuhan & Pemetaan Kompetensi SDM",
					"Needs Assessment & Talent Mapping",
				),
				i18n.pick(
					"Pelatihan Upskilling & Kapasitas Digital / AI",
					"Upskilling & Digital / AI Capacity Workshops",
				),
				i18n.pick(
					"Penguatan Standar Profesional & Capaian Kinerja",
					"Professional Standards & Performance Attainment",
				),
			],
			img: "/images/about-team-4-hd.jpg",
			overview: i18n.pick(
				"Program pengembangan kompetensi dirancang khusus untuk institusi pendidikan, korporasi, dan lembaga publik guna memperkuat kapasitas, adaptasi teknologi, serta kapabilitas profesional SDM melalui modul pelatihan aplikatif yang terarah.",
				"A tailored competency development program for academic institutions, corporations, and public bodies to build digital readiness, technological adaptation, and talent capabilities.",
			),
			pillars: [
				{
					icon: "assessment",
					label: i18n.pick(
						"Pemetaan\nPotensi SDM",
						"Talent\nMapping",
					),
				},
				{
					icon: "upskilling",
					label: i18n.pick(
						"Peningkatan\nKeahlian",
						"Skills\nUpskilling",
					),
				},
				{
					icon: "digital",
					label: i18n.pick(
						"Kapabilitas\nDigital & AI",
						"Digital & AI\nReadiness",
					),
				},
				{
					icon: "performance",
					label: i18n.pick(
						"Standar\nKinerja Unggul",
						"High Performance\nStandards",
					),
				},
				{
					icon: "growth",
					label: i18n.pick(
						"Pengembangan\nBerkelanjutan",
						"Continuous\nGrowth",
					),
				},
			],
			coverageBenefits: [
				i18n.pick(
					"Asesmen komprehensif gap kompetensi & kebutuhan organisasi",
					"Comprehensive gap assessment and institutional needs diagnosis",
				),
				i18n.pick(
					"Modul upskilling kapabilitas digital, otomasi, dan AI generatif",
					"Applied digital upskilling, workflow automation, and generative AI modules",
				),
				i18n.pick(
					"Pelatihan berbasis studi kasus praktis & simulasi lingkungan kerja",
					"Practical case study training and real-world workplace simulations",
				),
				i18n.pick(
					"Penyusunan indikator ketercapaian kompetensi profesional",
					"Formulation of professional competency benchmarks and KPIs",
				),
				i18n.pick(
					"Evaluasi hasil pembelajaran berkala serta sertifikasi kompetensi peserta",
					"Periodic learning evaluations and participant competency certifications",
				),
			],
			targetAudienceWithIcons: [
				{
					icon: "campus",
					label: i18n.pick(
						"Sekolah & Madrasah",
						"Schools & Academies",
					),
				},
				{
					icon: "campus",
					label: i18n.pick(
						"Perguruan Tinggi",
						"Colleges & Universities",
					),
				},
				{
					icon: "biz",
					label: i18n.pick(
						"Korporasi & BUMN",
						"Corporations & State Enterprises",
					),
				},
				{
					icon: "community",
					label: i18n.pick(
						"Yayasan Pendidikan",
						"Educational Foundations",
					),
				},
			],
		},
		{
			id: "pelatihan-organisasi",
			title: i18n.pick("Pelatihan Organisasi", "Organizational Training"),
			badge: i18n.pick("Pelatihan Organisasi", "Organizational Training"),
			desc: i18n.pick(
				"Program pelatihan dan pendampingan untuk meningkatkan efektivitas, kepemimpinan, dan budaya kerja organisasi.",
				"Training and mentoring programs to improve organizational effectiveness, leadership, and work culture.",
			),
			checklist: [
				i18n.pick(
					"In-House Training & Lokakarya Terarah",
					"In-House Training & Focused Workshops",
				),
				i18n.pick(
					"Pengembangan Kepemimpinan & Manajemen Kolaborasi",
					"Leadership Development & Collaborative Management",
				),
				i18n.pick(
					"Pendampingan Budaya Kerja & Efektivitas Organisasi",
					"Work Culture Mentoring & Organizational Effectiveness",
				),
			],
			img: "/images/partner-hero-5.jpg",
			overview: i18n.pick(
				"Pendampingan dan in-house training intensif bagi pimpinan, manajer, dan unit kerja untuk membangun kepemimpinan transformasional, budaya kerja produktif, serta efektivitas kolaborasi tim.",
				"Intensive mentoring and in-house training for leaders, managers, and business units to build transformational leadership, productive culture, and cross-functional collaboration.",
			),
			pillars: [
				{
					icon: "leadership",
					label: i18n.pick(
						"Penguatan\nKepemimpinan",
						"Leadership\nEmpowerment",
					),
				},
				{
					icon: "productivity",
					label: i18n.pick(
						"Peningkatan\nProduktivitas",
						"Productivity\nGrowth",
					),
				},
				{
					icon: "synergy",
					label: i18n.pick("Sinergi\nTim", "Team\nSynergy"),
				},
				{
					icon: "operations",
					label: i18n.pick(
						"Efektivitas\nOperasional",
						"Operational\nEffectiveness",
					),
				},
				{
					icon: "culture",
					label: i18n.pick(
						"Budaya Kerja\nBerkelanjutan",
						"Sustainable\nWork Culture",
					),
				},
			],
			coverageBenefits: [
				i18n.pick(
					"Lokakarya kepemimpinan adaptif berbasis studi kasus riil",
					"Adaptive leadership workshops based on real-world case studies",
				),
				i18n.pick(
					"Penguatan sinergi kerja tim dan solusi komunikasi internal",
					"Strengthening team synergy and internal communication solutions",
				),
				i18n.pick(
					"Penyusunan standar operasional & budaya kerja",
					"Formulation of operational standards & workplace culture",
				),
				i18n.pick(
					"Peningkatan efektivitas kolaborasi lintas unit",
					"Enhancement of cross-unit collaboration effectiveness",
				),
				i18n.pick(
					"Pengukuran dampak pelatihan terhadap produktivitas dan kepuasan kerja",
					"Measurement of training impact on productivity and job satisfaction",
				),
			],
			targetAudienceWithIcons: [
				{
					icon: "campus",
					label: i18n.pick(
						"Manajemen Sekolah & Kampus",
						"School & Campus Management",
					),
				},
				{
					icon: "gov",
					label: i18n.pick(
						"Instansi Pemerintah",
						"Government Agencies",
					),
				},
				{
					icon: "biz",
					label: i18n.pick(
						"Dunia Usaha & Industri",
						"Business & Industry",
					),
				},
				{
					icon: "community",
					label: i18n.pick(
						"Organisasi & Komunitas",
						"Organizations & Communities",
					),
				},
			],
		},
		{
			id: "perancangan-program",
			title: i18n.pick("Perancangan Program", "Program Design"),
			badge: i18n.pick("Perancangan Program", "Program Design"),
			desc: i18n.pick(
				"Pengembangan dan perencanaan kurikulum serta program pendidikan dan talenta sesuai kebutuhan strategis institusi.",
				"Curriculum development and tailored program planning aligned with strategic institutional goals.",
			),
			checklist: [
				i18n.pick(
					"Rancang Bangun Kurikulum & Modul Pembelajaran Adaptif",
					"Adaptive Curriculum & Learning Module Design",
				),
				i18n.pick(
					"Perancangan Program Talenta & Beasiswa Khusus",
					"Custom Talent & Institutional Scholarship Design",
				),
				i18n.pick(
					"Penyusunan Panduan Operasional & Instrumen Evaluasi",
					"Standard Operating Procedures & Evaluation Tools",
				),
			],
			img: "/images/about-laptop-desk-hd.jpg",
			overview: i18n.pick(
				"Layanan konsultasi strategis dalam merancang kurikulum modern, silabus inovatif, program beasiswa kelembagaan, serta modul pelatihan khusus yang terukur dan selaras dengan standar mutu institusi.",
				"Strategic consultation in designing modern curricula, innovative syllabi, institutional scholarship blueprints, and outcome-oriented educational programs.",
			),
			pillars: [
				{
					icon: "productivity",
					label: i18n.pick(
						"Kurikulum\nAdaptif",
						"Adaptive\nCurriculum",
					),
				},
				{
					icon: "leadership",
					label: i18n.pick(
						"Desain Program\nTerarah",
						"Targeted\nDesign",
					),
				},
				{
					icon: "synergy",
					label: i18n.pick(
						"Integrasi\nIndustri",
						"Industry\nIntegration",
					),
				},
				{
					icon: "operations",
					label: i18n.pick(
						"Instrumen\nEvaluasi",
						"Evaluation\nMetrics",
					),
				},
				{
					icon: "culture",
					label: i18n.pick("Dampak\nTerukur", "Measurable\nImpact"),
				},
			],
			coverageBenefits: [
				i18n.pick(
					"Desain kurikulum dan materi ajar kontekstual berbasis luaran (outcome-based)",
					"Contextual outcome-based curriculum and instructional design",
				),
				i18n.pick(
					"Arsitektur program inkubasi talenta dan program beasiswa internal mitra",
					"Architecture for internal talent incubators and institutional scholarship schemes",
				),
				i18n.pick(
					"Penyusunan instrumen evaluasi, rubrik asesmen, dan panduan fasilitator",
					"Rubrics, assessment instruments, and facilitator handbook development",
				),
				i18n.pick(
					"Penyelarasan program institusi dengan kebutuhan industri & dunia kerja",
					"Harmonization of institutional programs with industry and workforce trends",
				),
				i18n.pick(
					"Penyusunan pedoman implementasi dan tata kelola program berkelanjutan",
					"Standard operating guidelines and sustainable program governance",
				),
			],
			targetAudienceWithIcons: [
				{
					icon: "campus",
					label: i18n.pick(
						"Pengelola Lembaga Pendidikan",
						"Education Institutions",
					),
				},
				{
					icon: "gov",
					label: i18n.pick(
						"Tim Kurikulum & Akademik",
						"Academic Curriculum Teams",
					),
				},
				{
					icon: "biz",
					label: i18n.pick(
						"Penyelenggara Program Beasiswa",
						"Scholarship Funders",
					),
				},
				{
					icon: "community",
					label: i18n.pick(
						"Lembaga Pelatihan Terpadu",
						"Integrated Training Centers",
					),
				},
			],
		},
		{
			id: "kemitraan-strategis",
			title: i18n.pick("Kemitraan Strategis", "Strategic Partnerships"),
			badge: i18n.pick("Kemitraan Strategis", "Strategic Partnerships"),
			desc: i18n.pick(
				"Kolaborasi dan pengembangan kerja sama strategis dengan institusi pendidikan, industri, dan organisasi.",
				"Collaborative frameworks and strategic partnerships uniting education, industry, and public institutions.",
			),
			checklist: [
				i18n.pick(
					"Penyelenggaraan Program Bersama & Konsorsium Pendidikan",
					"Joint Programs & Educational Consortia",
				),
				i18n.pick(
					"Sosialisasi & Jaringan Akses Beasiswa Institusi",
					"Institutional Scholarship Roadshows & Networks",
				),
				i18n.pick(
					"Fasilitasi Kolaborasi Kampus, Sekolah & Industri",
					"Facilitating School-Campus-Industry Synergies",
				),
			],
			img: "/images/layanan-panel-institusi.jpg",
			overview: i18n.pick(
				"Fasilitasi dan pendampingan kerja sama strategis lintas sektor guna memperluas jangkauan program, membuka akses beasiswa, serta membangun konsorsium kemitraan antara lembaga pendidikan dan industri.",
				"Cross-sector strategic alliance facilitation to broaden program reach, unlock scholarship access, and establish collaborative education-industry ecosystems.",
			),
			pillars: [
				{
					icon: "leadership",
					label: i18n.pick(
						"Perluasan\nJaringan Mitra",
						"Network\nExpansion",
					),
				},
				{
					icon: "synergy",
					label: i18n.pick(
						"Konsorsium\nPendidikan",
						"Educational\nConsortium",
					),
				},
				{
					icon: "productivity",
					label: i18n.pick(
						"Akses Beasiswa\nInstitusi",
						"Institutional\nScholarships",
					),
				},
				{
					icon: "operations",
					label: i18n.pick(
						"Sinergi Kampus-\nIndustri",
						"Campus-Industry\nSynergy",
					),
				},
				{
					icon: "culture",
					label: i18n.pick(
						"Dampak Sosial\n& CSR",
						"Social Impact\n& CSR",
					),
				},
			],
			coverageBenefits: [
				i18n.pick(
					"Inisiasi MoU, perancangan proposal kerja sama, & pendampingan implementasi",
					"MoU initiation, partnership proposals, and execution support",
				),
				i18n.pick(
					"Penyelenggaraan expo pendidikan, seminar nasional, & sosialisasi beasiswa",
					"Education roadshows, national seminars, and scholarship clinics",
				),
				i18n.pick(
					"Fasilitasi kemitraan kampus/sekolah dengan korporasi & yayasan donor",
					"Connecting schools/campuses with corporate partners and donor foundations",
				),
				i18n.pick(
					"Penyusunan dan pengelolaan program CSR pendidikan terarah",
					"Structured corporate social responsibility (CSR) education initiatives",
				),
				i18n.pick(
					"Monitoring hasil kerja sama dan evaluasi dampak strategis kemitraan",
					"Partnership impact evaluation and strategic stakeholder alignment",
				),
			],
			targetAudienceWithIcons: [
				{
					icon: "campus",
					label: i18n.pick(
						"Perguruan Tinggi & Universitas",
						"Universities & Colleges",
					),
				},
				{
					icon: "biz",
					label: i18n.pick(
						"Perusahaan & Mitra Industri",
						"Corporations & Industry Partners",
					),
				},
				{
					icon: "gov",
					label: i18n.pick(
						"Lembaga Donor & Filantropi",
						"Donor Foundations & Philanthropy",
					),
				},
				{
					icon: "community",
					label: i18n.pick(
						"Asosiasi Sekolah & Komunitas",
						"School Associations & Communities",
					),
				},
			],
		},
	]);

	let selectedInstitutionalService = $state<InstitutionalServiceData | null>(
		null,
	);
	let lastTriggerElement = $state<HTMLElement | null>(null);

	function openInstitutionalDetail(
		service: InstitutionalServiceData,
		event?: MouseEvent,
	) {
		selectedInstitutionalService = service;
		if (event?.currentTarget instanceof HTMLElement) {
			lastTriggerElement = event.currentTarget;
		}
	}

	function closeInstitutionalDetail() {
		selectedInstitutionalService = null;
	}

	onMount(() => {
		if (typeof window !== "undefined" && window.location.hash) {
			const hash = window.location.hash.toLowerCase();
			if (
				hash.includes("institusi") ||
				hash.includes("kemitraan") ||
				hash.includes("solusi")
			) {
				activeTab = "institusi";
			} else if (
				hash.includes("individu") ||
				hash.includes("pendidikan") ||
				hash.includes("beasiswa")
			) {
				activeTab = "individu";
			}
		}
	});

	function scrollToCards() {
		if (typeof document !== "undefined") {
			const el = document.getElementById("daftar-layanan");
			if (el) {
				el.scrollIntoView({ behavior: "smooth" });
			}
		}
	}
</script>

<svelte:head>
	<title
		>{i18n.pick(
			"Portofolio Layanan — SDJ Nusantara Strategic Your Partner",
			"Service Portfolio — SDJ Nusantara Your Strategic Partner",
		)}</title
	>
	<meta
		name="description"
		content={i18n.pick(
			serviceConfig.legal
				? "SDJ Nusantara menyediakan berbagai layanan pendidikan, program beasiswa, dan layanan hukum untuk mendukung potensi individu dan institusi."
				: "SDJ Nusantara menyediakan berbagai layanan pendidikan, pengembangan talenta, dan program beasiswa untuk mendukung potensi individu dan institusi.",
			serviceConfig.legal
				? "SDJ Nusantara provides education services, scholarship programs, and legal services to support individual and institutional potential."
				: "SDJ Nusantara provides education services, talent development, and scholarship programs to support individual and institutional potential.",
		)}
	/>
	<link rel="canonical" href="https://sdjnusantara.com/layanan" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="services-hub-page">
	<!-- ==========================================
	     1. HERO SECTION (Tinggi ±360px skala 1536, ±240px skala 1024)
	     ========================================== -->
	<header class="hub-hero" use:heroEntrance>
		<!-- Photo full-bleed di kanan mulai ±x 42% dengan fade navy halus dari kiri -->
		<div class="hero-bg-wrapper" aria-hidden="true">
			<picture>
				<source srcset="/images/partner-hero-5.jpg" type="image/jpeg" />
				<img
					src="/images/partner-hero-5.jpg"
					alt="Tim SDJ Nusantara"
					class="hero-img"
					loading="eager"
					decoding="async"
				/>
			</picture>
			<!-- Fade navy halus dari kiri -->
			<div class="hero-gradient-overlay"></div>
		</div>

		<!-- Wave decoration bottom-left (Teal gelap, pita turquoise, lengkung putih) -->
		<svg
			class="hero-wave"
			viewBox="0 0 380 160"
			fill="none"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<path
				d="M0 30 C100 30 180 90 300 160 H0 Z"
				fill="#0A5E75"
				fill-opacity="0.92"
			/>
			<path
				d="M0 75 C100 75 180 120 270 160 H0 Z"
				fill="url(#teal-grad-hub)"
			/>
			<path d="M0 125 C70 125 140 145 200 160 H0 Z" fill="#FFFFFF" />
			<defs>
				<linearGradient id="teal-grad-hub" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#16B6C1" />
					<stop offset="100%" stop-color="#079EAD" />
				</linearGradient>
			</defs>
		</svg>

		<!-- Accent decoration bottom-right (Emas tipis & turquoise) -->
		<svg
			class="hero-wave-right"
			viewBox="0 0 260 160"
			fill="none"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<path
				d="M260 20 C200 65 120 115 40 160 H260 Z"
				fill="#079EAD"
				fill-opacity="0.85"
			/>
			<path d="M260 70 C210 105 150 135 90 160 H260 Z" fill="#16B6C1" />
			<path d="M260 120 C220 138 180 150 140 160 H260 Z" fill="#F5B331" />
		</svg>

		<div class="hub-container hero-container">
			<div class="hero-content">
				<!-- Pill Portofolio Layanan -->
				<div class="hero-pill">
					<span class="pill-dot"></span>
					<span class="pill-text"
						>{i18n.pick(
							"Portofolio Layanan",
							"Service Portfolio",
						)}</span
					>
				</div>

				<!-- H1 3 baris ±46px weight 800: Dinamis mengikuti tab aktif -->
				<h1 class="hero-title">
					{#if activeTab === "institusi"}
						<span class="title-line"
							>{i18n.pick(
								"Solusi Strategis untuk",
								"Strategic Solutions for",
							)}</span
						>
						<span class="title-line"
							>{i18n.pick(
								"Pengembangan dan",
								"Development and",
							)}</span
						>
						<span class="title-line highlight-gold"
							>{i18n.pick(
								"Transformasi Institusi.",
								"Institutional Transformation.",
							)}</span
						>
					{:else}
						<span class="title-line"
							>{i18n.pick(
								"Pendampingan Pendidikan",
								"Educational Mentoring",
							)}</span
						>
						<span class="title-line"
							>{i18n.pick(
								"dan Pengembangan",
								"and Individual",
							)}</span
						>
						<span class="title-line highlight-gold"
							>{i18n.pick(
								"Potensi Individu.",
								"Potential Development.",
							)}</span
						>
					{/if}
				</h1>

				<!-- Deskripsi putih ±14px 3 baris max-width ±540px: Dinamis mengikuti tab aktif -->
				<p class="hero-desc">
					{#if activeTab === "institusi"}
						{i18n.pick(
							"SDJ Nusantara mendukung institusi melalui pengembangan kompetensi SDM, pelatihan organisasi, perancangan program, dan kemitraan strategis.",
							"SDJ Nusantara supports institutions through HR competency development, organizational training, program design, and strategic partnerships.",
						)}
					{:else}
						{i18n.pick(
							"SDJ Nusantara mendampingi individu dalam merencanakan pendidikan, mengembangkan kompetensi, serta mempersiapkan masa depan melalui program pendidikan dan beasiswa.",
							"SDJ Nusantara assists individuals in planning education, developing competencies, and preparing for the future through education and scholarship programs.",
						)}
					{/if}
				</p>
			</div>
		</div>
	</header>

	<!-- ==========================================
	     2. TAB BAR (Segmented Control: 2 Kategori Seimbang & Proporsional)
	     ========================================== -->
	<section class="tab-overlap-section" aria-label="Filter Layanan">
		<div class="hub-container">
			<div
				class="tab-overlap-card"
				role="tablist"
				aria-label="Kategori Portofolio Layanan"
			>
				<!-- Tab 1: Layanan Individu -->
				<button
					type="button"
					role="tab"
					data-tab="individu"
					class="tab-btn {activeTab === 'individu' ? 'active' : ''}"
					aria-selected={activeTab === "individu"}
					onclick={() => setTab("individu")}
				>
					<span class="tab-icon" aria-hidden="true">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
							></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</span>
					<span class="tab-label"
						>{i18n.pick(
							"Layanan Individu",
							"Individual Services",
						)}</span
					>
				</button>

				<div class="tab-vdivider" aria-hidden="true"></div>

				<!-- Tab 2: Solusi Institusi -->
				<button
					type="button"
					role="tab"
					data-tab="institusi"
					class="tab-btn {activeTab === 'institusi' ? 'active' : ''}"
					aria-selected={activeTab === "institusi"}
					onclick={() => setTab("institusi")}
				>
					<span class="tab-icon" aria-hidden="true">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect
								x="4"
								y="2"
								width="16"
								height="20"
								rx="2"
								ry="2"
							></rect>
							<path d="M9 22v-4h6v4"></path>
							<path d="M8 6h.01"></path>
							<path d="M16 6h.01"></path>
							<path d="M8 10h.01"></path>
							<path d="M16 10h.01"></path>
							<path d="M8 14h.01"></path>
							<path d="M16 14h.01"></path>
						</svg>
					</span>
					<span class="tab-label"
						>{i18n.pick(
							"Solusi Institusi",
							"Institutional Solutions",
						)}</span
					>
				</button>
			</div>
		</div>
	</section>

	<div class="hub-showcase-band">
		<!-- Ornamen sudut dekoratif lembut sesuai identitas visual SDJ Nusantara -->
		<svg
			class="showcase-arc-tl"
			viewBox="0 0 260 140"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M0 0 H210 C155 55, 85 95, 0 115 Z"
				fill="#BCEAF0"
				fill-opacity="0.38"
			/>
			<path
				d="M0 0 H145 C105 42, 55 72, 0 88 Z"
				fill="#00A6B2"
				fill-opacity="0.16"
			/>
		</svg>
		<svg
			class="showcase-arc-br"
			viewBox="0 0 320 170"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M40 170 C125 112, 220 75, 320 45 L320 170 Z"
				fill="#7FD8E0"
				fill-opacity="0.3"
			/>
			<path
				d="M95 170 C175 118, 245 88, 320 68 L320 170 Z"
				fill="#FFB629"
				fill-opacity="0.82"
			/>
			<path
				d="M145 170 C210 128, 265 102, 320 92 L320 170 Z"
				fill="#00A6B2"
				fill-opacity="0.92"
			/>
		</svg>

		<!-- ==========================================
	     3. INTRO SECTION (Teks kiri & 4 ubin putih kanan)
	     ========================================== -->
		<section class="hub-intro-section" aria-labelledby="intro-heading" use:scrollReveal={{ selector: '.intro-text-col, .intro-tiles-col', stagger: 0.1 }}>
			<div class="hub-container intro-grid">
				<!-- Kiri: Header teks -->
				<div class="intro-text-col">
					<div class="section-badge-label">
						<span class="label-text"
							>{i18n.pick(
								"Layanan SDJ Nusantara",
								"SDJ Nusantara Services",
							)}</span
						>
					</div>
					<h2 id="intro-heading" class="intro-title">
						{#if activeTab === "institusi"}
							{i18n.pick(
								"Solusi Institusi",
								"Institutional Solutions",
							)}
						{:else}
							{i18n.pick(
								"Layanan Individu",
								"Individual Services",
							)}
						{/if}
					</h2>
					<p class="intro-desc">
						{#if activeTab === "institusi"}
							{i18n.pick(
								"Layanan terpadu mencakup pengembangan kompetensi sumber daya manusia, pelatihan organisasi, perancangan program, dan kemitraan strategis.",
								"Integrated services covering human resource competency development, organizational training, program design, and strategic partnerships.",
							)}
						{:else}
							{i18n.pick(
								"Pendampingan terintegrasi untuk membantu individu dalam merencanakan pendidikan, mengembangkan kompetensi, serta mempersiapkan masa depan dan beasiswa.",
								"Integrated mentoring to help individuals plan education, build competencies, and prepare for their future and scholarships.",
							)}
						{/if}
					</p>
				</div>

				<!-- Kanan: 4 ubin putih dengan icon container soft teal -->
				<div class="intro-tiles-col">
					{#if activeTab === "institusi"}
						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
									></path>
									<circle cx="8.5" cy="7" r="4"></circle>
									<polyline points="17 11 19 13 23 9"
									></polyline>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Pengembangan Kompetensi",
									"Competency Development",
								)}</span
							>
						</div>

						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect
										x="2"
										y="7"
										width="20"
										height="14"
										rx="2"
										ry="2"
									></rect>
									<path
										d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
									></path>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Pelatihan Organisasi",
									"Organizational Training",
								)}</span
							>
						</div>

						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
									></path>
									<path
										d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
									></path>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Perancangan Program",
									"Program Design",
								)}</span
							>
						</div>

						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
									></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Kemitraan Strategis",
									"Strategic Partnerships",
								)}</span
							>
						</div>
					{:else}
						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
									></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Pendampingan Menyeluruh",
									"End-to-End Mentoring",
								)}</span
							>
						</div>

						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="12" r="10"></circle>
									<circle cx="12" cy="12" r="6"></circle>
									<circle cx="12" cy="12" r="2"></circle>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Program Terstruktur",
									"Structured Programs",
								)}</span
							>
						</div>

						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
									></path>
									<path
										d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
									></path>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Informasi Beasiswa",
									"Scholarship Insights",
								)}</span
							>
						</div>

						<div class="feature-tile">
							<div class="tile-icon-box" aria-hidden="true">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#00A6B2"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<line x1="18" y1="20" x2="18" y2="10"
									></line>
									<line x1="12" y1="20" x2="12" y2="4"></line>
									<line x1="6" y1="20" x2="6" y2="14"></line>
								</svg>
							</div>
							<span class="tile-label"
								>{i18n.pick(
									"Pengembangan Talenta",
									"Talent Development",
								)}</span
							>
						</div>
					{/if}
				</div>
			</div>
		</section>

		<!-- ==========================================
	     4. SECTION DAFTAR KARTU LAYANAN & PANEL (Tinggi ±330px per kartu)
	     ========================================== -->
		<section
			id="daftar-layanan"
			class="hub-cards-section"
			aria-label="Daftar Layanan"
			use:scrollReveal={{ selector: '.service-card-curved, .why-us-card', stagger: 0.1 }}
		>
			{#snippet mediaCorners()}
				<svg
					class="card-media-corner-tl"
					viewBox="0 0 110 110"
					fill="none"
				>
					<path d="M0 0 H110 C64 22, 24 64, 0 110 Z" fill="#009AA6" />
					<path d="M0 0 H76 C45 18, 18 45, 0 76 Z" fill="#25C3CF" />
				</svg>
				<svg
					class="card-media-corner-br"
					viewBox="0 0 190 120"
					fill="none"
				>
					<path
						d="M0 120 C75 112, 145 68, 190 0 V120 H0 Z"
						fill="#F5B331"
					/>
					<path
						d="M52 120 C110 112, 160 76, 190 22 V120 H52 Z"
						fill="#009AA6"
					/>
					<path
						d="M100 120 C142 114, 174 88, 190 52 V120 H100 Z"
						fill="#25C3CF"
					/>
				</svg>
			{/snippet}
			<div class="hub-container">
				<span
					id="skills-development"
					class="anchor-target"
					aria-hidden="true"
				></span>
				<span
					id="institutional-partnership"
					class="anchor-target"
					aria-hidden="true"
				></span>
				<div class="cards-grid two-services">
					{#if activeTab === "individu"}
						<!-- ==============================================
					     KATEGORI 1: LAYANAN INDIVIDU
					     1. Program Pendidikan
					     2. Program Beasiswa
					     ============================================== -->
						<!-- KARTU 1: Program Pendidikan -->
						<article
							id="talent-management"
							class="service-card card-program"
						>
							<div class="card-body">
								<div>
									<div class="card-pill">
										<span
											class="card-pill-icon"
											aria-hidden="true"
										>
											<svg
												width="15"
												height="15"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path
													d="M22 10v6M2 10l10-5 10 5-10 5z"
												></path>
												<path
													d="M6 12v5c3 3 9 3 12 0v-5"
												></path>
											</svg>
										</span>
										<span
											>{i18n.pick(
												"Program Pendidikan",
												"Education Programs",
											)}</span
										>
									</div>

									<h3 class="card-title">
										{i18n.pick(
											"Program Pendidikan",
											"Education Programs",
										)}
									</h3>
									<p class="card-desc">
										{i18n.pick(
											pendidikanKnowledge[0].ringkas,
											"Layanan pemetaan bakat dan minat terpadu untuk membantu Anda mengenali kelebihan diri serta menyusun rencana pengembangan studi dan karier masa depan.",
										)}
									</p>

									<ul
										class="card-checklist"
										aria-label={i18n.pick(
											"Fitur Program Pendidikan",
											"Education Program Features",
										)}
									>
										<li>
											<span
												class="check-icon"
												aria-hidden="true"
											>
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#079EAD"
													stroke-width="3"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polyline
														points="20 6 9 17 4 12"
													></polyline>
												</svg>
											</span>
											<span
												>{i18n.pick(
													"Konsultasi & Manajemen Talenta",
													"Talent Consultation & Management",
												)}</span
											>
										</li>
										<li>
											<span
												class="check-icon"
												aria-hidden="true"
											>
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#079EAD"
													stroke-width="3"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polyline
														points="20 6 9 17 4 12"
													></polyline>
												</svg>
											</span>
											<span
												>{i18n.pick(
													"Scholarship Academy & Kurasi Beasiswa",
													"Scholarship Academy & Curated Guides",
												)}</span
											>
										</li>
										<li>
											<span
												class="check-icon"
												aria-hidden="true"
											>
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#079EAD"
													stroke-width="3"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polyline
														points="20 6 9 17 4 12"
													></polyline>
												</svg>
											</span>
											<span
												>{i18n.pick(
													"Pelatihan Khusus & Kemitraan Kampus",
													"Custom Training & Campus Partnerships",
												)}</span
											>
										</li>
									</ul>
								</div>

								<div class="card-action">
									<a
										href="/layanan/pendidikan"
										class="btn-card-gold"
									>
										<span
											>{i18n.pick(
												"Jelajahi Semua Program",
												"Explore All Programs",
											)}</span
										>
										<span
											class="btn-arrow"
											aria-hidden="true">→</span
										>
									</a>
								</div>
							</div>

							<div class="card-media" aria-hidden="true">
								<picture class="card-picture">
									<source
										srcset="/images/layanan-hub-program.webp"
										type="image/webp"
									/>
									<img
										src="/images/layanan-hub-program.jpg"
										alt="Program Pendidikan SDJ Nusantara"
										class="card-img-curved"
										loading="eager"
										decoding="async"
									/>
								</picture>
								{@render mediaCorners()}
							</div>
						</article>

						<!-- KARTU 2: Program Beasiswa -->
						<article
							id="scholarship-academy"
							class="service-card card-beasiswa"
						>
							<div class="card-body">
								<div>
									<div class="card-pill">
										<span
											class="card-pill-icon"
											aria-hidden="true"
										>
											<svg
												width="15"
												height="15"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<polyline
													points="20 12 20 22 4 22 4 12"
												></polyline>
												<rect
													x="2"
													y="7"
													width="20"
													height="5"
												></rect>
												<line
													x1="12"
													y1="22"
													x2="12"
													y2="7"
												></line>
												<path
													d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
												></path>
												<path
													d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
												></path>
											</svg>
										</span>
										<span
											>{i18n.pick(
												"Beasiswa",
												"Scholarships",
											)}</span
										>
									</div>

									<h3 class="card-title">
										{i18n.pick(
											"Program Beasiswa",
											"Scholarship Programs",
										)}
									</h3>
									<p class="card-desc">
										{i18n.pick(
											beasiswaKnowledge[0].ringkas,
											"Pendampingan beasiswa SDJ Nusantara dirancang melalui 6 langkah berurutan agar berkas dan kesiapan mental Anda matang sebelum batas waktu pendaftaran tiba.",
										)}
									</p>

									<ul
										class="card-checklist"
										aria-label={i18n.pick(
											"Fitur Program Beasiswa",
											"Scholarship Program Features",
										)}
									>
										<li>
											<span
												class="check-icon"
												aria-hidden="true"
											>
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#079EAD"
													stroke-width="3"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polyline
														points="20 6 9 17 4 12"
													></polyline>
												</svg>
											</span>
											<span
												>{i18n.pick(
													"Informasi Beasiswa Dalam & Luar Negeri",
													"Domestic & International Scholarship Info",
												)}</span
											>
										</li>
										<li>
											<span
												class="check-icon"
												aria-hidden="true"
											>
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#079EAD"
													stroke-width="3"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polyline
														points="20 6 9 17 4 12"
													></polyline>
												</svg>
											</span>
											<span
												>{i18n.pick(
													"Pendampingan Persiapan & Seleksi",
													"Application & Selection Mentoring",
												)}</span
											>
										</li>
										<li>
											<span
												class="check-icon"
												aria-hidden="true"
											>
												<svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#079EAD"
													stroke-width="3"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<polyline
														points="20 6 9 17 4 12"
													></polyline>
												</svg>
											</span>
											<span
												>{i18n.pick(
													"Kurasi Beasiswa Sesuai Profil",
													"Profile-Matched Scholarship Curation",
												)}</span
											>
										</li>
									</ul>
								</div>

								<div class="card-action card-action-with-note">
									<a
										href="/layanan/beasiswa"
										class="btn-card-gold"
									>
										<span
											>{i18n.pick(
												"Jelajahi Semua Program",
												"Explore All Programs",
											)}</span
										>
										<span
											class="btn-arrow"
											aria-hidden="true">→</span
										>
									</a>
									<p class="card-disclaimer">
										{i18n.pick(
											"SDJ Nusantara tidak menjanjikan kelulusan atau perolehan beasiswa.",
											"SDJ Nusantara does not guarantee admission or scholarship awards.",
										)}
									</p>
								</div>
							</div>

							<div class="card-media" aria-hidden="true">
								<picture class="card-picture">
									<source
										srcset="/images/layanan-hub-beasiswa.webp"
										type="image/webp"
									/>
									<img
										src="/images/layanan-hub-beasiswa.jpg"
										alt="Program Beasiswa SDJ Nusantara"
										class="card-img-curved"
										loading="eager"
										decoding="async"
									/>
								</picture>
								{@render mediaCorners()}
							</div>
						</article>
					{:else}
						<!-- ==============================================
					     KATEGORI 2: SOLUSI INSTITUSI
					     1. Pengembangan Kompetensi
					     2. Pelatihan Organisasi
					     3. Perancangan Program
					     4. Kemitraan Strategis
					     ============================================== -->
						{#each institutionalServices as service (service.id)}
							<article
								id={service.id}
								class="service-card card-institusi"
							>
								<div class="card-body">
									<div>
										<div class="card-pill">
											<span
												class="card-pill-icon"
												aria-hidden="true"
											>
												{#if service.id === "pengembangan-kompetensi"}
													<svg
														width="15"
														height="15"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<path
															d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
														></path>
														<circle
															cx="8.5"
															cy="7"
															r="4"
														></circle>
														<polyline
															points="17 11 19 13 23 9"
														></polyline>
													</svg>
												{:else if service.id === "pelatihan-organisasi"}
													<svg
														width="15"
														height="15"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<rect
															x="2"
															y="7"
															width="20"
															height="14"
															rx="2"
															ry="2"
														></rect>
														<path
															d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
														></path>
													</svg>
												{:else if service.id === "perancangan-program"}
													<svg
														width="15"
														height="15"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<path
															d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
														></path>
														<path
															d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
														></path>
													</svg>
												{:else}
													<svg
														width="15"
														height="15"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<path
															d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
														></path>
														<circle
															cx="9"
															cy="7"
															r="4"
														></circle>
														<path
															d="M23 21v-2a4 4 0 0 0-3-3.87"
														></path>
														<path
															d="M16 3.13a4 4 0 0 1 0 7.75"
														></path>
													</svg>
												{/if}
											</span>
											<span>{service.badge}</span>
										</div>

										<h3 class="card-title">
											{service.title}
										</h3>
										<p class="card-desc">
											{service.desc}
										</p>

										<ul
											class="card-checklist"
											aria-label={`Fitur ${service.title}`}
										>
											{#each service.checklist as item}
												<li>
													<span
														class="check-icon"
														aria-hidden="true"
													>
														<svg
															width="14"
															height="14"
															viewBox="0 0 24 24"
															fill="none"
															stroke="#079EAD"
															stroke-width="3"
															stroke-linecap="round"
															stroke-linejoin="round"
														>
															<polyline
																points="20 6 9 17 4 12"
															></polyline>
														</svg>
													</span>
													<span>{item}</span>
												</li>
											{/each}
										</ul>
									</div>

									<div class="card-action">
										<button
											type="button"
											class="btn-card-gold"
											onclick={(e) =>
												openInstitutionalDetail(
													service,
													e,
												)}
											aria-haspopup="dialog"
											aria-expanded={selectedInstitutionalService?.id ===
												service.id}
										>
											<span
												>{i18n.pick(
													"Jelajahi Semua Program",
													"Explore All Programs",
												)}</span
											>
											<span
												class="btn-arrow"
												aria-hidden="true">→</span
											>
										</button>
									</div>
								</div>

								<div class="card-media" aria-hidden="true">
									<picture class="card-picture">
										<img
											src={service.img}
											alt={service.title}
											class="card-img-curved"
											loading="eager"
											decoding="async"
										/>
									</picture>
									{@render mediaCorners()}
								</div>
							</article>
						{/each}
					{/if}

					<!-- KARTU 3: Mengapa Memilih SDJ Nusantara? (Full width banner on 2-col layout) -->
					<aside class="why-us-card" aria-labelledby="why-us-heading">
						<!-- Swoosh SVG dekorasi kanan -->
						<div class="why-swoosh-wrap" aria-hidden="true">
							<svg
								class="why-swoosh-svg"
								viewBox="0 0 160 330"
								fill="none"
								preserveAspectRatio="none"
							>
								<path
									d="M30,0 C90,80 150,140 160,330 L160,0 Z"
									fill="#16B6C1"
									opacity="0.16"
								/>
								<path
									d="M70,0 C120,70 150,150 160,260 L160,0 Z"
									fill="#079EAD"
									opacity="0.12"
								/>
							</svg>
						</div>

						<div class="why-header">
							<h3 id="why-us-heading" class="why-title">
								{#if activeTab === "institusi"}
									{i18n.pick(
										"Keunggulan Kolaborasi Bersama Kami",
										"Why Partner with SDJ Nusantara?",
									)}
								{:else}
									{i18n.pick(
										"Mengapa Memilih SDJ Nusantara?",
										"Why Choose SDJ Nusantara?",
									)}
								{/if}
							</h3>
							<p class="why-desc">
								{#if activeTab === "institusi"}
									{i18n.pick(
										"Kami membangun kemitraan yang berkelanjutan, adaptif, dan berorientasi pada hasil nyata bagi institusi Anda.",
										"We build sustainable, adaptive partnerships focused on tangible results for your institution.",
									)}
								{:else}
									{i18n.pick(
										"Kami mendampingi dengan pendekatan yang terarah, transparan, dan berorientasi pada kebutuhan Anda.",
										"We guide you with a targeted, transparent, and needs-oriented approach.",
									)}
								{/if}
							</p>
						</div>

						<div class="why-tiles-row">
							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#16B6C1"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
										></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"
										></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"
										></path>
									</svg>
								</div>
								<h4 class="why-tile-title">
									{i18n.pick(
										"Tim Profesional",
										"Professional Team",
									)}
								</h4>
								<p class="why-tile-desc">
									{i18n.pick(
										"Didampingi konsultan dan mentor sesuai bidangnya.",
										"Guided by domain-specialist consultants and mentors.",
									)}
								</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#16B6C1"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
										></path>
										<path
											d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
										></path>
									</svg>
								</div>
								<h4 class="why-tile-title">
									{i18n.pick(
										"Pendampingan Terarah",
										"Targeted Mentoring",
									)}
								</h4>
								<p class="why-tile-desc">
									{i18n.pick(
										"Proses yang sistematis dan sesuai kebutuhan.",
										"A systematic process tailored to your goals.",
									)}
								</p>
							</div>

							<div class="why-tile">
								<div class="why-icon" aria-hidden="true">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#16B6C1"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<circle cx="12" cy="12" r="6"></circle>
										<circle cx="12" cy="12" r="2"></circle>
									</svg>
								</div>
								<h4 class="why-tile-title">
									{i18n.pick(
										"Solusi Terintegrasi",
										"Integrated Solutions",
									)}
								</h4>
								<p class="why-tile-desc">
									{i18n.pick(
										"Layanan saling terhubung untuk kebutuhan pendidikan Anda.",
										"Connected services for your complete educational journey.",
									)}
								</p>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	</div>

	<!-- ==========================================
	     5. CTA BANNER FULL BACKGROUND IMAGE (Tanpa Tombol)
	     ========================================== -->
	<CtaBanner
		title={activeTab === 'institusi'
			? i18n.pick(
				'Siap Mengembangkan <span class="highlight-gold">Potensi Institusi Anda?</span>',
				'Ready to Unlock <span class="highlight-gold">Your Institution’s Potential?</span>',
			)
			: i18n.pick(
				'Siap Mengembangkan <span class="highlight-gold">Potensi Diri Anda?</span>',
				'Ready to Unlock <span class="highlight-gold">Your Individual Potential?</span>',
			)}
		description={activeTab === 'institusi'
			? i18n.pick(
				"Temukan solusi pendidikan, pengembangan talenta, dan pendampingan institusi bersama SDJ Nusantara.",
				"Discover education solutions, talent development, and institutional mentoring with SDJ Nusantara.",
			)
			: i18n.pick(
				"Dapatkan pendampingan terarah untuk perencanaan pendidikan, pengembangan bakat, dan persiapan beasiswa bersama SDJ Nusantara.",
				"Get targeted mentoring for educational planning, talent development, and scholarship preparation with SDJ Nusantara.",
			)}
		bgImage="/images/cta-layanan-collaboration-bg.jpg"
		showButtons={false}
		variant="layanan"
	/>

	<!-- ==========================================
	     6. MODAL DETAIL SOLUSI INSTITUSI
	     ========================================== -->
	<InstitutionalDetailModal
		isOpen={!!selectedInstitutionalService}
		service={selectedInstitutionalService}
		triggerElement={lastTriggerElement}
		onclose={closeInstitutionalDetail}
	/>
</main>

<Footer compact={true} variant="layanan" />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.services-hub-page {
		padding-top: 48px;
		background: #ffffff;
		overflow-x: hidden;
	}

	/* Container terstandar konsisten dengan Hero & Floating Overlap Bar */
	.hub-container {
		width: 93%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hub-container {
			max-width: var(--hero-container-max-xl, 1500px);
		}
	}

	/* ==========================================
	     1. HERO STYLING (Tinggi ±360px skala 1536, ±240px skala 1024)
	     ========================================== */
	.hub-hero {
		position: relative;
		background-color: #082442;
		height: var(--hero-height-desktop, 445px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: var(--navbar-height, 48px);
		overflow: hidden;
		box-sizing: border-box;
	}

	.hero-bg-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
	}

	/* Foto full-bleed di kanan */
	.hero-img {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 82% 24%;
		display: block;
	}

	/* Fade navy halus dari kiri */
	.hero-gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 34%,
			rgba(8, 36, 66, 0.92) 43%,
			rgba(8, 36, 66, 0.6) 52%,
			rgba(8, 36, 66, 0.12) 62%,
			transparent 72%
		);
		pointer-events: none;
	}

	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 380px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-wave-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 260px;
		height: 160px;
		z-index: 2;
		pointer-events: none;
	}

	.hub-hero .hub-container.hero-container {
		position: relative;
		z-index: var(--z-hero-content, 3);
		width: 100%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		padding: 0 var(--hero-padding-x, 54px);
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.hub-hero .hub-container.hero-container {
			max-width: var(--hero-container-max-xl, 1500px);
		}
	}

	@media (max-width: 900px) {
		.hub-hero .hub-container.hero-container {
			padding: 0 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.hub-hero .hub-container.hero-container {
			padding: 0 1.25rem;
		}
	}

	.hero-content {
		max-width: 580px;
		display: flex;
		flex-direction: column;
		transform: translateY(-54px);
	}

	.hero-pill {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		background: rgba(7, 158, 173, 0.18);
		border: 1px solid rgba(226, 232, 240, 0.4);
		padding: 4px 12px;
		border-radius: 9999px;
		width: fit-content;
		margin-bottom: 12px;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #16b6c1;
		box-shadow: 0 0 6px #16b6c1;
	}

	.pill-text {
		color: #e6f7f9;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.03em;
	}

	.hero-title {
		font-size: clamp(30px, 2.6vw, 39px);
		line-height: 1.2;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 12px 0;
		display: flex;
		flex-direction: column;
	}

	.title-line {
		display: block;
	}

	.highlight-gold {
		color: #f5b331;
	}

	.hero-desc {
		font-size: 14.5px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.92);
		max-width: 550px;
		margin: 0;
		text-wrap: pretty;
	}

	/* ==========================================
	     2. TAB BAR OVERLAP (Segmented Category Navigation)
	     ========================================== */
	.tab-overlap-section {
		position: relative;
		z-index: var(--z-overlap-bar, 10);
		margin-top: -30px;
		margin-bottom: 14px;
	}

	.tab-overlap-card {
		background: #ffffff;
		border-radius: 18px;
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.95);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
		width: 100%;
		max-width: 620px;
		margin: 0 auto;
		padding: 6px 8px;
		box-sizing: border-box;
	}

	.tab-btn {
		flex: 1;
		min-width: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		height: 48px;
		padding: 0 16px;
		margin: 0;
		border-radius: 12px;
		border: none;
		background: transparent;
		color: #082442;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		box-sizing: border-box;
	}

	.tab-btn:hover:not(.active) {
		background: rgba(7, 158, 173, 0.08);
		color: #079ead;
	}

	.tab-btn.active {
		background: linear-gradient(135deg, #079ead 0%, #16b6c1 100%);
		color: #ffffff;
		font-weight: 700;
		box-shadow: 0 4px 14px rgba(7, 158, 173, 0.28);
	}

	.tab-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		line-height: 1;
	}

	.tab-label {
		display: inline-flex;
		align-items: center;
		line-height: 1.2;
		letter-spacing: 0.01em;
	}

	.tab-vdivider {
		width: 1px;
		height: 28px;
		background: #e2e8f0;
		margin: 0 6px;
		flex-shrink: 0;
	}

	/* ==========================================
	     3. SHOWCASE BAND & INTRO SECTION
	     ========================================== */
	.hub-showcase-band {
		position: relative;
		overflow: hidden;
		background: linear-gradient(180deg, #ffffff 0%, #fafdff 100%);
	}

	.showcase-arc-tl {
		position: absolute;
		top: 0;
		left: 0;
		width: 240px;
		height: 130px;
		pointer-events: none;
		z-index: 1;
	}

	.showcase-arc-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 300px;
		height: 160px;
		pointer-events: none;
		z-index: 1;
	}

	.hub-intro-section {
		position: relative;
		z-index: 2;
		padding: 14px 0 24px;
	}

	.intro-grid {
		display: grid;
		grid-template-columns: minmax(340px, 1fr) auto;
		gap: 36px;
		align-items: center;
	}

	.intro-text-col {
		display: flex;
		flex-direction: column;
		padding-left: 26px;
	}

	.section-badge-label {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		padding-left: 18px;
	}

	.label-text {
		font-size: 15px;
		font-weight: 700;
		color: #00a6b2;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.intro-title {
		position: relative;
		padding-left: 18px;
		font-size: clamp(28px, 2.5vw, 38px);
		line-height: 1.22;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px 0;
		letter-spacing: -0.02em;
	}

	.intro-title::before {
		content: "";
		position: absolute;
		left: 0;
		top: 5px;
		bottom: 5px;
		width: 4.5px;
		border-radius: 4px;
		background: #f5b331;
	}

	.intro-desc {
		font-size: 15px;
		line-height: 1.6;
		color: #475569;
		margin: 0;
		max-width: 540px;
		padding-left: 18px;
		text-wrap: pretty;
	}

	.intro-tiles-col {
		display: flex;
		gap: 14px;
		align-items: stretch;
	}

	.feature-tile {
		width: clamp(138px, 11vw, 158px);
		min-height: 134px;
		background: #ffffff;
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 16px;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.055);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 18px 12px;
		box-sizing: border-box;
		flex-shrink: 0;
		transition:
			transform 0.22s ease,
			border-color 0.22s ease,
			box-shadow 0.22s ease;
	}

	.feature-tile:hover {
		transform: translateY(-3px);
		border-color: #16b6c1;
		box-shadow: 0 12px 28px rgba(7, 158, 173, 0.1);
	}

	.tile-icon-box {
		width: 52px;
		height: 52px;
		border-radius: 12px;
		background: #eaf9fa;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
	}

	.tile-label {
		font-size: 13.5px;
		line-height: 1.32;
		font-weight: 700;
		color: #082442;
		display: block;
	}

	/* ==========================================
	     4. SECTION DAFTAR KARTU LAYANAN & PANEL
	     ========================================== */
	.hub-cards-section {
		position: relative;
		z-index: 2;
		padding: 6px 0 64px;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
		align-items: stretch;
	}

	.service-card {
		background: #ffffff;
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 24px;
		box-shadow: 0 10px 34px rgba(8, 36, 66, 0.06);
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		overflow: hidden;
		position: relative;
		min-height: 364px;
		height: auto;
		box-sizing: border-box;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
	}

	.service-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 14px 40px rgba(8, 36, 66, 0.09);
	}

	.card-body {
		width: 56%;
		padding: 26px 24px 24px 28px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		z-index: 2;
	}

	.card-pill {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		background: #e4f7f9;
		color: #079ead;
		font-size: 12.5px;
		font-weight: 700;
		padding: 5px 12px;
		border-radius: 9999px;
		margin-bottom: 10px;
		width: fit-content;
	}

	.card-pill-icon {
		display: flex;
		align-items: center;
	}

	.card-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		line-height: 1.28;
		letter-spacing: -0.015em;
	}

	.card-desc {
		font-size: 14px;
		line-height: 1.55;
		color: #475569;
		margin: 0 0 14px 0;
		max-width: 520px;
		text-wrap: pretty;
	}

	.card-checklist {
		list-style: none;
		padding: 0;
		margin: 0 0 18px 0;
		display: flex;
		flex-direction: column;
		gap: 7px;
	}

	.card-checklist li {
		display: flex;
		align-items: center;
		gap: 9px;
		font-size: 14px;
		font-weight: 700;
		color: #082442;
		line-height: 1.38;
	}

	.check-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	.card-action {
		margin-top: auto;
	}

	.card-action-with-note {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}

	.btn-card-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #f5b331;
		color: #082442;
		padding: 10px 20px;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.24);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.btn-card-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(245, 179, 49, 0.34);
	}

	.btn-card-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	.card-disclaimer {
		font-size: 12px;
		color: #64748b;
		margin: 0;
		line-height: 1.4;
		font-style: italic;
	}

	/* FOTO BERBENTUK: Bingkai sudut organik + aksen lengkung teal & kuning */
	.card-media {
		position: relative;
		width: 44%;
		margin: 14px 14px 14px 0;
		border-radius: 18px;
		border-top-left-radius: 50px;
		overflow: hidden;
		flex-shrink: 0;
		background: #ebf5f7;
	}

	.card-picture {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
	}

	.card-img-curved {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		display: block;
	}

	.card-media-corner-tl {
		position: absolute;
		top: 0;
		left: 0;
		width: 72px;
		height: 72px;
		pointer-events: none;
		z-index: 2;
	}

	.card-media-corner-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 132px;
		height: 84px;
		pointer-events: none;
		z-index: 2;
	}

	/* Mengapa Memilih SDJ Nusantara Panel */
	.why-us-card {
		background: #eaf7f9;
		border: 1px solid #d2eff2;
		border-radius: 24px;
		position: relative;
		overflow: hidden;
		padding: 28px 28px 24px;
		min-height: 364px;
		height: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.045);
	}

	.why-swoosh-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 150px;
		pointer-events: none;
		z-index: 1;
	}

	.why-swoosh-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.why-header {
		position: relative;
		z-index: 2;
	}

	.why-title {
		font-size: 24px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		line-height: 1.25;
	}

	.why-desc {
		font-size: 14.5px;
		line-height: 1.55;
		color: #334155;
		margin: 0 0 20px 0;
	}

	.why-tiles-row {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 14px;
	}

	.why-tile {
		background: #ffffff;
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 14px;
		padding: 16px 14px;
		min-height: 155px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 12px rgba(8, 36, 66, 0.035);
		transition:
			transform 0.2s ease,
			border-color 0.2s ease;
	}

	.why-tile:hover {
		transform: translateY(-2px);
		border-color: #16b6c1;
	}

	.why-icon {
		margin-bottom: 10px;
		display: flex;
		align-items: center;
	}

	.why-tile-title {
		font-size: 14px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 4px 0;
		line-height: 1.3;
	}

	.why-tile-desc {
		font-size: 12.5px;
		line-height: 1.48;
		color: #64748b;
		margin: 0;
	}

	/* Tata letak penuh seimbang saat hanya 2 layanan aktif (tanpa slot kosong bekas Layanan Hukum) */
	.cards-grid.two-services .why-us-card {
		grid-column: 1 / -1;
		flex-direction: row;
		align-items: center;
		gap: 36px;
		min-height: 210px;
		padding: 30px 36px;
	}

	.cards-grid.two-services .why-header {
		flex: 0 0 34%;
	}

	.cards-grid.two-services .why-desc {
		margin-bottom: 0;
	}

	.cards-grid.two-services .why-tiles-row {
		flex: 1;
		gap: 16px;
	}

	.cards-grid.two-services .why-tile {
		min-height: 142px;
	}

	/* ==========================================
	     RESPONSIVE
	     ========================================== */
	@media (max-width: 1200px) {
		.intro-grid {
			grid-template-columns: 1fr;
			gap: 24px;
		}

		.intro-tiles-col {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}

		.feature-tile {
			width: 100%;
		}
	}

	@media (max-width: 1024px) {
		.tab-overlap-card {
			max-width: 580px;
			height: 56px;
			padding: 5px 6px;
		}

		.tab-btn {
			height: 46px;
			padding: 0 14px;
			margin: 0;
			font-size: 14.5px;
			gap: 8px;
		}

		.tab-vdivider {
			height: 24px;
			margin: 0 4px;
		}

		.cards-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 900px) {
		.hub-hero {
			height: auto;
			padding: 3.5rem 0 3.25rem;
		}

		.hero-content {
			transform: none;
		}

		.intro-text-col {
			padding-left: 0;
		}

		.hero-gradient-overlay {
			background: linear-gradient(
				90deg,
				#082442 0%,
				rgba(8, 36, 66, 0.94) 60%,
				rgba(8, 36, 66, 0.78) 100%
			);
		}

		.hero-wave,
		.hero-wave-right {
			display: none;
		}

		.cards-grid.two-services .why-us-card {
			flex-direction: column;
			align-items: stretch;
			gap: 18px;
		}

		.cards-grid.two-services .why-header {
			flex: none;
		}
	}

	@media (max-width: 768px) {
		.hub-hero {
			height: auto;
			padding: 36px 0 44px;
		}

		.hero-img {
			display: none;
		}

		.hero-gradient-overlay {
			background: #082442;
		}

		.hub-hero .hub-container.hero-container {
			padding: 0 1.5rem;
		}

		.hero-title {
			font-size: 28px;
		}

		.hero-desc {
			font-size: 14px;
		}

		.tab-overlap-section {
			margin-top: -24px;
			margin-bottom: 12px;
		}

		.tab-overlap-card {
			max-width: 520px;
			height: 54px;
			padding: 5px 6px;
			border-radius: 14px;
			overflow-x: visible;
		}

		.tab-btn {
			flex: 1;
			min-width: 0;
			height: 44px;
			padding: 0 12px;
			margin: 0;
			font-size: 13.5px;
			border-radius: 10px;
			gap: 8px;
		}

		.tab-vdivider {
			display: block;
			width: 1px;
			height: 22px;
			background: #e2e8f0;
			margin: 0 3px;
			flex-shrink: 0;
		}

		.hub-intro-section {
			padding: 12px 0 18px;
		}

		.intro-title {
			font-size: 26px;
			padding-left: 14px;
		}

		.intro-desc {
			font-size: 14.5px;
			padding-left: 14px;
		}

		.intro-tiles-col {
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
		}

		.feature-tile {
			min-height: 118px;
			padding: 14px 10px;
		}

		.tile-icon-box {
			width: 46px;
			height: 46px;
		}

		.hub-cards-section {
			padding: 4px 0 44px;
		}

		.service-card {
			height: auto;
			min-height: 0;
			flex-direction: column-reverse;
			padding: 0;
			gap: 0;
			border-radius: 20px;
		}

		.card-body {
			width: 100%;
			padding: 22px 18px;
		}

		.card-media {
			width: 100%;
			height: 200px;
			min-height: 200px;
			margin: 0;
			border-radius: 0;
		}

		.card-media-corner-tl {
			width: 64px;
			height: 64px;
		}

		.card-media-corner-br {
			width: 118px;
			height: 74px;
		}

		.btn-card-gold {
			width: 100%;
			justify-content: center;
			padding: 12px 20px;
			font-size: 14px;
		}

		.why-us-card,
		.cards-grid.two-services .why-us-card {
			height: auto;
			min-height: 0;
			flex-direction: column;
			align-items: stretch;
			gap: 18px;
			padding: 22px 18px;
			border-radius: 20px;
		}

		.cards-grid.two-services .why-header {
			flex: none;
		}

		.why-tiles-row {
			grid-template-columns: 1fr;
		}

		.why-tile {
			height: auto;
			min-height: 0;
		}

		.showcase-arc-tl {
			display: none;
		}

		.showcase-arc-br {
			opacity: 0.45;
			transform: scale(0.65);
		}
	}

	@media (max-width: 480px) {
		.tab-overlap-card {
			max-width: 100%;
			height: 50px;
			padding: 4px;
			border-radius: 12px;
		}

		.tab-btn {
			height: 42px;
			padding: 0 8px;
			font-size: 12.5px;
			border-radius: 9px;
			gap: 6px;
		}

		.tab-icon :global(svg) {
			width: 17px;
			height: 17px;
		}

		.tab-vdivider {
			height: 20px;
			margin: 0 2px;
		}
	}
</style>
