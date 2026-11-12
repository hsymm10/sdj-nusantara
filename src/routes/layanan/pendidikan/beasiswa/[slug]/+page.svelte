<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { scholarshipsData, scholarshipDisclaimer } from '#lib/data/scholarships';
	import { i18n } from '#lib/stores/i18n.svelte';

	const slug = $derived(page.params.slug);
	const scholarship = $derived(
		scholarshipsData.find((s) => s.id === slug) || scholarshipsData[0]
	);
</script>

<svelte:head>
	<title>{scholarship.nama} — {i18n.pick('SDJNusantara Layanan Pendidikan', 'SDJNusantara Education Services')}</title>
	<meta
		name="description"
		content={i18n.pick(
			`Detail informasi dan persyaratan beasiswa ${scholarship.nama} dari ${scholarship.penyelenggara}.`,
			`Detailed information and requirements for ${scholarship.nama} scholarship by ${scholarship.penyelenggara}.`
		)}
	/>
	<link rel="canonical" href="https://sdjnusantara.com/layanan/pendidikan/beasiswa/{scholarship.id}" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="scholarship-detail-page">
	<div class="detail-container">
		<!-- Back Button ke rute baru /layanan/pendidikan#beasiswa -->
		<a href="/layanan/pendidikan#beasiswa" class="btn-back">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</svg>
			<span>{i18n.pick('Kembali ke Direktori Beasiswa', 'Back to Scholarship Directory')}</span>
		</a>

		<!-- Header Card -->
		<div class="detail-header-card">
			<div class="header-badges">
				<span class="badge-cat">{scholarship.kategori}</span>
				<span class="badge-scope">{scholarship.cakupan}</span>
				<span class="badge-status {scholarship.status === 'Buka' ? 'status-open' : 'status-soon'}">
					{scholarship.status}
				</span>
			</div>

			<h1 class="scholarship-title">{scholarship.nama}</h1>
			<p class="scholarship-org">{i18n.pick('Penyelenggara:', 'Provider:')} <strong>{scholarship.penyelenggara}</strong></p>

			<div class="grid-specs">
				<div class="spec-card">
					<span class="spec-label">{i18n.pick('Jenjang Pendidikan', 'Education Level')}</span>
					<span class="spec-val">{scholarship.jenjang}</span>
				</div>
				<div class="spec-card">
					<span class="spec-label">{i18n.pick('Negara Tujuan', 'Destination Country')}</span>
					<span class="spec-val">{scholarship.negara}</span>
				</div>
				<div class="spec-card">
					<span class="spec-label">{i18n.pick('Jenis Pendanaan', 'Funding Type')}</span>
					<span class="spec-val">{scholarship.jenisPendanaan}</span>
				</div>
				<div class="spec-card">
					<span class="spec-label">{i18n.pick('Batas Pendaftaran', 'Application Deadline')}</span>
					<span class="spec-val">{scholarship.deadline}</span>
				</div>
			</div>

			<!-- Coverage & Details -->
			<div class="coverage-section">
				<h2 class="section-heading">{i18n.pick('Cakupan Pendanaan', 'Funding Coverage')}</h2>
				<p class="coverage-desc">{scholarship.pendanaan}</p>
			</div>

			<!-- Actions -->
			<div class="detail-actions">
				<a
					href={scholarship.sourceUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-primary"
				>
					<span>{i18n.pick('Buka Situs Resmi Penyelenggara', 'Visit Official Provider Website')}</span>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
						<polyline points="15 3 21 3 21 9"></polyline>
						<line x1="10" y1="14" x2="21" y2="3"></line>
					</svg>
				</a>
				<a href="/konsultasi" class="btn-secondary">
					<span>{i18n.pick('Konsultasikan Persiapan', 'Consult on Preparation')}</span>
					<span>→</span>
				</a>
			</div>
		</div>

		<!-- Disclaimer -->
		<div class="disclaimer-box">
			<p><em>* {i18n.pick(scholarshipDisclaimer, 'Reference sample data. Always verify the latest information and requirements on each scholarship provider’s official website. SDJNusantara does not guarantee scholarship admission; final decisions rest solely with the provider.')}</em></p>
		</div>
	</div>
</main>

<Footer variant="layanan" />

<style>
	.scholarship-detail-page {
		width: 100%;
		background: #F8FAFC;
		padding-top: 48px;
		padding-bottom: 4rem;
		min-height: calc(100vh - 200px);
	}

	.detail-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 2rem 1.5rem 0;
		box-sizing: border-box;
	}

	.btn-back {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: #00A6B2;
		font-size: 13.5px;
		font-weight: 600;
		text-decoration: none;
		margin-bottom: 1.5rem;
		transition: color 0.2s ease;
	}

	.btn-back:hover {
		color: #088894;
	}

	.detail-header-card {
		background: #FFFFFF;
		border-radius: 18px;
		border: 1px solid #E2E8F0;
		padding: 2.25rem 2rem;
		box-shadow: 0 4px 20px rgba(11, 39, 71, 0.05);
	}

	.header-badges {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.badge-cat {
		background: #FEF3C7;
		color: #92400E;
		font-size: 12px;
		font-weight: 700;
		padding: 4px 12px;
		border-radius: 999px;
	}

	.badge-scope {
		background: #E0F2FE;
		color: #0369A1;
		font-size: 12px;
		font-weight: 600;
		padding: 4px 12px;
		border-radius: 999px;
	}

	.badge-status {
		font-size: 12px;
		font-weight: 700;
		padding: 4px 12px;
		border-radius: 999px;
	}

	.status-open {
		background: #DCFCE7;
		color: #166534;
	}

	.status-soon {
		background: #F1F5F9;
		color: #475569;
	}

	.scholarship-title {
		font-size: clamp(24px, 2.5vw, 32px);
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.5rem 0;
		line-height: 1.25;
	}

	.scholarship-org {
		font-size: 14.5px;
		color: #64748B;
		margin: 0 0 1.75rem 0;
	}

	.scholarship-org strong {
		color: #0F172A;
	}

	.grid-specs {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #F1F5F9;
	}

	.spec-card {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		padding: 1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.spec-label {
		font-size: 12px;
		color: #64748B;
		font-weight: 500;
	}

	.spec-val {
		font-size: 14.5px;
		font-weight: 700;
		color: #082442;
	}

	.coverage-section {
		margin-bottom: 2.25rem;
	}

	.section-heading {
		font-size: 17px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 0.75rem 0;
	}

	.coverage-desc {
		font-size: 14.5px;
		line-height: 1.6;
		color: #334155;
		margin: 0;
	}

	.detail-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 14px;
		font-weight: 600;
		padding: 12px 22px;
		border-radius: 10px;
		text-decoration: none;
		transition: background 0.2s ease;
	}

	.btn-primary:hover {
		background: #088894;
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F1F5F9;
		color: #082442;
		font-size: 14px;
		font-weight: 600;
		padding: 12px 20px;
		border-radius: 10px;
		text-decoration: none;
		transition: background 0.2s ease;
	}

	.btn-secondary:hover {
		background: #E2E8F0;
	}

	.disclaimer-box {
		margin-top: 1.5rem;
		padding: 1rem 1.25rem;
		background: rgba(245, 179, 49, 0.08);
		border-left: 3px solid #F5B331;
		border-radius: 0 8px 8px 0;
	}

	.disclaimer-box p {
		margin: 0;
		font-size: 12.5px;
		color: #78350F;
		line-height: 1.5;
	}

	@media (max-width: 860px) {
		.grid-specs {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 540px) {
		.grid-specs {
			grid-template-columns: 1fr;
		}

		.detail-header-card {
			padding: 1.5rem 1.25rem;
		}
	}
</style>
