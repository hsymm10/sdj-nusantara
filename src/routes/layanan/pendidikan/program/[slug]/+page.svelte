<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { programsData } from '#lib/data/programs';
	import { programsEnMap } from '#lib/i18n/dataEn';
	import { i18n } from '#lib/stores/i18n.svelte';

	const slug = $derived(page.params.slug);
	const rawProgram = $derived(programsData.find((p) => p.slug === slug) || programsData[0]);
	const program = $derived(
		i18n.lang === 'en' && programsEnMap[rawProgram.slug]
			? { ...rawProgram, ...programsEnMap[rawProgram.slug] }
			: rawProgram
	);
</script>

<svelte:head>
	<title
		>{program.title} — {i18n.pick(
			"Layanan Pendidikan SDJNusantara",
			"SDJNusantara Education Services",
		)}</title
	>
	<meta name="description" content={program.desc} />
	<link
		rel="canonical"
		href="https://sdjnusantara.com/layanan/pendidikan/program/{program.slug}"
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="program-detail-page">
	<div class="detail-container">
		<!-- Breadcrumb -->
		<nav class="breadcrumb" aria-label="Breadcrumb">
			<a href="/">{i18n.dict.nav.home}</a>
			<span class="bc-sep">/</span>
			<a href="/layanan/pendidikan"
				>{i18n.dict.nav.servicesMenu.educationTitle}</a
			>
			<span class="bc-sep">/</span>
			<a href="/layanan/pendidikan#program"
				>{i18n.pick("Program", "Programs")}</a
			>
			<span class="bc-sep">/</span>
			<span class="bc-current">{program.title}</span>
		</nav>

		<!-- Detail Header Card -->
		<div class="detail-hero-card">
			<div class="detail-text-col">
				<span class="badge-cat">{program.category}</span>
				<h1 class="detail-title">{program.title}</h1>
				<p class="detail-desc">{program.desc}</p>

				<div class="detail-meta-row">
					<div class="meta-pill">
						<svg
							width="15"
							height="15"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<polyline points="12 6 12 12 16 14"></polyline>
						</svg>
						<span
							><strong>{i18n.pick("Durasi:", "Duration:")}</strong
							>
							{program.duration}</span
						>
					</div>
					<div class="meta-pill">
						<svg
							width="15"
							height="15"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
							></path>
							<circle cx="9" cy="7" r="4"></circle>
						</svg>
						<span
							><strong>{i18n.pick("Target:", "Target:")}</strong>
							{program.target}</span
						>
					</div>
				</div>

				<div class="detail-actions">
					<a href="/kontak" class="btn-gold">
						<span
							>{i18n.pick(
								"Konsultasikan Program Ini",
								"Consult on This Program",
							)}</span
						>
						<span class="btn-arrow">→</span>
					</a>
					<a href="/layanan/pendidikan#program" class="btn-outline">
						<span
							>{i18n.pick(
								"Kembali ke Daftar Program",
								"Back to Program List",
							)}</span
						>
					</a>
				</div>
			</div>

			<div class="detail-image-col">
				<img
					src={program.image}
					alt={program.title}
					class="detail-img"
				/>
			</div>
		</div>

		<!-- Features Block -->
		{#if program.features && program.features.length > 0}
			<div class="features-card">
				<h2 class="features-title">
					{i18n.pick(
						"Cakupan & Manfaat Program",
						"Program Scope & Benefits",
					)}
				</h2>
				<ul class="features-list">
					{#each program.features as feature}
						<li>
							<span class="check-icon">✓</span>
							<span>{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Format Block -->
		{#if program.format && program.format.length > 0}
			<div class="features-card format-card">
				<h2 class="features-title">
					{i18n.pick(
						"Format Pembelajaran yang Ditawarkan",
						"Available Learning Formats",
					)}
				</h2>
				<ul class="features-list">
					{#each program.format as fmt}
						<li>
							<span class="check-icon">✓</span>
							<span>{fmt}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</main>

<Footer variant="layanan" />

<style>
	.program-detail-page {
		min-height: calc(100vh - 350px);
		background: #f8fafc;
		padding: 70px 1rem 60px;
	}

	.detail-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: #64748b;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
	}

	.breadcrumb a {
		color: #082442;
		text-decoration: none;
		font-weight: 500;
	}

	.breadcrumb a:hover {
		color: #00a6b2;
	}

	.bc-sep {
		color: #94a3b8;
	}

	.bc-current {
		color: #00a6b2;
		font-weight: 600;
	}

	.detail-hero-card {
		background: #ffffff;
		border-radius: 20px;
		padding: 2.5rem;
		box-shadow: 0 10px 30px rgba(11, 39, 71, 0.06);
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: 2.5rem;
		align-items: center;
		margin-bottom: 2rem;
	}

	.badge-cat {
		display: inline-block;
		background: rgba(0, 166, 178, 0.1);
		color: #00a6b2;
		font-size: 12px;
		font-weight: 700;
		padding: 5px 12px;
		border-radius: 20px;
		margin-bottom: 1rem;
	}

	.detail-title {
		font-size: 32px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 1rem 0;
	}

	.detail-desc {
		font-size: 15px;
		line-height: 1.6;
		color: #334155;
		margin: 0 0 1.5rem 0;
	}

	.detail-meta-row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-bottom: 2rem;
	}

	.meta-pill {
		display: flex;
		align-items: center;
		gap: 8px;
		background: #f1f5f9;
		padding: 8px 14px;
		border-radius: 10px;
		font-size: 13px;
		color: #0f172a;
	}

	.detail-actions {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #f5b331;
		color: #082442;
		padding: 11px 22px;
		border-radius: 8px;
		font-weight: 700;
		font-size: 13.5px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.3);
		transition: transform 0.2s;
	}

	.btn-gold:hover {
		transform: translateY(-2px);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		padding: 10px 20px;
		border: 1px solid #cbd5e1;
		border-radius: 8px;
		color: #082442;
		font-weight: 600;
		font-size: 13.5px;
		text-decoration: none;
		background: #ffffff;
		transition: background 0.2s;
	}

	.btn-outline:hover {
		background: #f8fafc;
	}

	.detail-image-col {
		height: 320px;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
	}

	.detail-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.features-card {
		background: #ffffff;
		border-radius: 20px;
		padding: 2rem 2.5rem;
		box-shadow: 0 8px 24px rgba(11, 39, 71, 0.05);
	}

	.features-title {
		font-size: 20px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 1.25rem 0;
	}

	.features-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem 2rem;
	}

	.features-list li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 14px;
		color: #1e293b;
		line-height: 1.5;
	}

	.check-icon {
		color: #00a6b2;
		font-weight: 800;
		font-size: 15px;
		line-height: 1;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.detail-hero-card {
			grid-template-columns: 1fr;
		}
		.features-list {
			grid-template-columns: 1fr;
		}
	}
</style>
