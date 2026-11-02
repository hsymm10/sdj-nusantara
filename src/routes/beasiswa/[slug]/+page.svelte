<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { scholarshipsData, scholarshipDisclaimer } from '#lib/data/scholarships';

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const slug = $derived(page.params.slug);
	const scholarship = $derived(
		scholarshipsData.find((s) => s.id === slug) || scholarshipsData[0]
	);

	onMount(() => {
		if (slug) {
			goto(`/layanan/pendidikan/beasiswa/${slug}`, { replaceState: true });
		}
	});
</script>

<svelte:head>
	<title>{scholarship.nama} — SDJNusantara Beasiswa</title>
	<meta
		name="description"
		content="Detail informasi dan persyaratan beasiswa {scholarship.nama} dari {scholarship.penyelenggara}."
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="scholarship-detail-page">
	<div class="detail-container">
		<!-- Back Button -->
		<a href="/beasiswa" class="btn-back">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</svg>
			<span>Kembali ke Cari Beasiswa</span>
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
			<p class="scholarship-org">Penyelenggara: <strong>{scholarship.penyelenggara}</strong></p>

			<div class="grid-specs">
				<div class="spec-card">
					<span class="spec-label">Jenjang Pendidikan</span>
					<span class="spec-val">{scholarship.jenjang}</span>
				</div>
				<div class="spec-card">
					<span class="spec-label">Negara Tujuan</span>
					<span class="spec-val">{scholarship.negara}</span>
				</div>
				<div class="spec-card">
					<span class="spec-label">Jenis Pendanaan</span>
					<span class="spec-val">{scholarship.jenisPendanaan}</span>
				</div>
				<div class="spec-card">
					<span class="spec-label">Batas Pendaftaran</span>
					<span class="spec-val">{scholarship.deadline}</span>
				</div>
			</div>

			<!-- Coverage & Details -->
			<div class="coverage-section">
				<h2 class="section-heading">Cakupan Pendanaan</h2>
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
					<span>Buka Situs Resmi Penyelenggara</span>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
						<polyline points="15 3 21 3 21 9"></polyline>
						<line x1="10" y1="14" x2="21" y2="3"></line>
					</svg>
				</a>
				<a href="/konsultasi" class="btn-secondary">
					<span>Konsultasikan Persiapan</span>
					<span>→</span>
				</a>
			</div>
		</div>

		<!-- Disclaimer -->
		<div class="disclaimer-box">
			<p><em>* {scholarshipDisclaimer}</em></p>
		</div>
	</div>
</main>

<Footer variant="beasiswa" />

<style>
	.scholarship-detail-page {
		width: 100%;
		background: #F8FAFC;
		padding-top: 48px; /* Fixed navbar height */
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
		font-size: 15px;
		color: #64748B;
		margin: 0 0 2rem 0;
	}

	.grid-specs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.spec-card {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		padding: 1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.spec-label {
		font-size: 11.5px;
		font-weight: 600;
		color: #64748B;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.spec-val {
		font-size: 15px;
		font-weight: 700;
		color: #082442;
	}

	.coverage-section {
		border-top: 1px solid #E2E8F0;
		padding-top: 1.5rem;
		margin-bottom: 2rem;
	}

	.section-heading {
		font-size: 18px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 0.75rem 0;
	}

	.coverage-desc {
		font-size: 14.5px;
		line-height: 24px;
		color: #334155;
		margin: 0;
	}

	.detail-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		border-top: 1px solid #E2E8F0;
		padding-top: 1.75rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 13.5px;
		font-weight: 700;
		padding: 10px 22px;
		border-radius: 8px;
		text-decoration: none;
		transition: background 0.2s ease;
	}

	.btn-primary:hover {
		background: #088894;
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		padding: 10px 22px;
		border-radius: 8px;
		text-decoration: none;
		transition: background 0.2s ease;
	}

	.btn-secondary:hover {
		background: #e6a528;
	}

	.disclaimer-box {
		margin-top: 1.5rem;
		font-size: 12.5px;
		line-height: 20px;
		color: #64748B;
	}
</style>
