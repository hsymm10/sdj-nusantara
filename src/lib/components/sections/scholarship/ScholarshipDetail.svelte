<script lang="ts">
	import type { Scholarship } from '#lib/data/scholarships';
	import { i18n } from '#lib/stores/i18n.svelte';

	interface Props {
		scholarship: Scholarship;
	}

	let { scholarship }: Props = $props();

	// Split pendanaan into bullet points
	let fundingItems = $derived(
		scholarship.pendanaan
			? scholarship.pendanaan.split(',').map((s) => s.trim()).filter(Boolean)
			: []
	);

	const generalPrepItems = $derived(
		i18n.lang === 'en'
			? [
					'Academic Curriculum Vitae (CV) and achievement portfolio',
					'Targeted motivation letter or personal statement',
					'Study plan or research proposal (especially for Master & PhD)',
					'Official recommendation letters from academics or supervisors',
					'Foreign language proficiency certificate (as required by target university)',
					'Legalized academic diplomas and transcripts'
				]
			: [
					'Curriculum Vitae (CV) akademik dan portofolio prestasi',
					'Motivation letter atau personal statement terarah',
					'Rencana studi atau proposal riset (terutama untuk jenjang S2 & S3)',
					'Surat rekomendasi resmi dari akademisi atau atasan profesional',
					'Sertifikat kemahiran bahasa asing (sesuai ketentuan kampus tujuan)',
					'Ijazah dan transkrip nilai akademik terlegalisir'
				]
	);

	const sdjAssistanceItems = $derived(
		i18n.lang === 'en'
			? [
					'Profile mapping and curating the most aligned scholarship options.',
					'In-depth review and strengthening of application documents (essays, CV, and proposals).',
					'Targeted interview simulation and evaluation to build presentation readiness.'
				]
			: [
					'Pemetaan profil dan kurasi pilihan beasiswa yang paling selaras.',
					'Review mendalam dan penguatan dokumen aplikasi (esai, CV, dan proposal).',
					'Simulasi dan evaluasi wawancara terarah untuk membangun kesiapan presentasi.'
				]
	);
</script>

<div class="sch-detail-content">
	<!-- Title & Org Row -->
	<div class="header-info-group">
		<h2 id="modal-title" class="detail-title">{scholarship.nama}</h2>

		<div class="org-row">
			<div class="neutral-org-icon" aria-hidden="true">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M3 21h18"></path>
					<path d="M3 10h18"></path>
					<path d="M5 6l7-3 7 3"></path>
					<path d="M4 10v11"></path>
					<path d="M20 10v11"></path>
					<path d="M8 14v4"></path>
					<path d="M12 14v4"></path>
					<path d="M16 14v4"></path>
				</svg>
			</div>
			<span class="org-text">{scholarship.penyelenggara}</span>
		</div>

		<!-- Badges Row -->
		<div class="badges-row">
			<span class="badge-chip badge-gold">{scholarship.kategori}</span>
			<span class="badge-chip badge-teal">{scholarship.jenisPendanaan}</span>
			<span class="badge-chip badge-outline">{scholarship.cakupan}</span>
			<span class="updated-text">{scholarship.updatedAt}</span>
		</div>
	</div>

	<!-- Short Summary -->
	<p class="summary-lead">
		{i18n.pick(
			`Program pendanaan studi ${scholarship.jenjang} dari ${scholarship.penyelenggara} untuk penempatan di ${scholarship.negara}.`,
			`${scholarship.jenjang} study funding program by ${scholarship.penyelenggara} for study in ${scholarship.negara}.`
		)}
	</p>

	<!-- 2-Column Info Block with Outline Teal Icons -->
	<div class="info-grid-two">
		<!-- Jenjang -->
		<div class="info-card-item">
			<div class="info-icon-teal" aria-hidden="true">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
					<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
				</svg>
			</div>
			<div class="info-text-group">
				<span class="info-lbl">{i18n.pick('Jenjang Studi', 'Study Level')}</span>
				<strong class="info-val">{scholarship.jenjang}</strong>
			</div>
		</div>

		<!-- Negara -->
		<div class="info-card-item">
			<div class="info-icon-teal" aria-hidden="true">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="2" y1="12" x2="22" y2="12"></line>
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
				</svg>
			</div>
			<div class="info-text-group">
				<span class="info-lbl">{i18n.pick('Negara / Wilayah', 'Country / Region')}</span>
				<strong class="info-val">{scholarship.negara}</strong>
			</div>
		</div>

		<!-- Cakupan Wilayah -->
		<div class="info-card-item">
			<div class="info-icon-teal" aria-hidden="true">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
			</div>
			<div class="info-text-group">
				<span class="info-lbl">{i18n.pick('Cakupan Wilayah', 'Coverage Scope')}</span>
				<strong class="info-val">{scholarship.cakupan}</strong>
			</div>
		</div>

		<!-- Status Pendaftaran -->
		<div class="info-card-item">
			<div class="info-icon-teal" aria-hidden="true">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 6 12 12 14 14"></polyline>
				</svg>
			</div>
			<div class="info-text-group">
				<span class="info-lbl">{i18n.pick('Status Pendaftaran', 'Application Status')}</span>
				<strong class="info-val status-{scholarship.status.toLowerCase().replace(/\s+/g, '-')}">{scholarship.status}</strong>
			</div>
		</div>
	</div>

	<!-- Cakupan Komponen Pendanaan (Poin-poin) -->
	<div class="section-subblock">
		<h3 class="subblock-heading">{i18n.pick('Komponen Pendanaan', 'Funding Components')}</h3>
		<ul class="bullet-list-teal">
			{#each fundingItems as item}
				<li>
					<span class="check-bullet" aria-hidden="true">✓</span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Yang Perlu Disiapkan -->
	<div class="section-subblock">
		<h3 class="subblock-heading">{i18n.pick('Yang Perlu Anda Siapkan', 'What You Need to Prepare')}</h3>
		<p class="subblock-desc">
			{i18n.pick(
				'Secara umum, berkas utama yang dipersyaratkan oleh komite beasiswa meliputi:',
				'In general, the primary documents required by scholarship committees include:'
			)}
		</p>
		<ul class="bullet-list-checklist">
			{#each generalPrepItems as prep}
				<li>
					<span class="bullet-dot" aria-hidden="true">•</span>
					<span>{prep}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Bantuan dari SDJNusantara -->
	<div class="section-subblock">
		<h3 class="subblock-heading">{i18n.pick('Bantuan Pendampingan dari SDJNusantara', 'Mentoring Support from SDJNusantara')}</h3>
		<div class="assistance-cards-row">
			{#each sdjAssistanceItems as item, idx}
				<div class="assist-card">
					<div class="assist-badge">0{idx + 1}</div>
					<p class="assist-text">{item}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Catatan Kejujuran & Situs Resmi -->
	<div class="compliance-note-box">
		<div class="note-icon-wrap" aria-hidden="true">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<line x1="12" y1="8" x2="12" y2="12"></line>
				<line x1="12" y1="16" x2="12.01" y2="16"></line>
			</svg>
		</div>
		<div class="note-body">
			<p class="note-paragraph">
				{#if i18n.lang === 'en'}
					<strong>Note:</strong> Reference sample data. Requirements, deadlines, and official links may change at any time according to the provider's policy. Always verify information on the official provider website. SDJNusantara does not guarantee admission or scholarship award; final decisions rest solely with the provider.
				{:else}
					<strong>Catatan:</strong> Contoh data referensi. Syarat, tenggat waktu, dan tautan resmi dapat berubah sewaktu-waktu sesuai kebijakan penyelenggara. Pastikan selalu memverifikasi informasi di situs resmi penyelenggara. SDJNusantara tidak menjanjikan kelulusan atau perolehan beasiswa; keputusan mutlak berada pada pihak penyelenggara.
				{/if}
			</p>

			<div class="note-action-row">
				{#if scholarship.sourceUrl}
					<a
						href={scholarship.sourceUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-visit-official"
					>
						<span>{i18n.pick('Kunjungi Situs Resmi Penyelenggara', 'Visit Official Provider Website')}</span>
						<span aria-hidden="true">↗</span>
					</a>
				{:else}
					<span class="source-disabled-text">{i18n.pick('Tautan resmi belum diisi', 'Official link not yet available')}</span>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.sch-detail-content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.header-info-group {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.detail-title {
		font-size: 26px;
		font-weight: 800;
		color: #082442;
		margin: 0;
		line-height: 1.25;
	}

	.org-row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.neutral-org-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: #E6F7F8;
		flex-shrink: 0;
	}

	.org-text {
		font-size: 14.5px;
		font-weight: 600;
		color: #475569;
	}

	.badges-row {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 4px;
	}

	.badge-chip {
		display: inline-flex;
		align-items: center;
		padding: 4px 10px;
		border-radius: 6px;
		font-size: 12px;
		font-weight: 700;
	}

	.badge-gold {
		background: #FEF3C7;
		color: #B45309;
	}

	.badge-teal {
		background: #E6F7F8;
		color: #079EAD;
	}

	.badge-outline {
		border: 1px solid #CBD5E1;
		color: #475569;
		background: #FFFFFF;
	}

	.updated-text {
		font-size: 12px;
		color: #94A3B8;
		margin-left: auto;
	}

	.summary-lead {
		font-size: 15px;
		line-height: 1.6;
		color: #183553;
		margin: 0;
		padding: 12px 16px;
		background: #F8FAFC;
		border-left: 3px solid #079EAD;
		border-radius: 0 8px 8px 0;
	}

	/* 2-Column Info Grid */
	.info-grid-two {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 12px;
	}

	.info-card-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 14px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
	}

	.info-icon-teal {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 10px;
		background: #E6F7F8;
		flex-shrink: 0;
	}

	.info-text-group {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.info-lbl {
		font-size: 11.5px;
		color: #64748B;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.04em;
	}

	.info-val {
		font-size: 14px;
		color: #082442;
		font-weight: 700;
	}

	.status-buka {
		color: #0D9488;
	}

	.status-segera-dibuka {
		color: #D97706;
	}

	.status-ditutup {
		color: #DC2626;
	}

	/* Section Subblock */
	.section-subblock {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.subblock-heading {
		font-size: 16px;
		font-weight: 700;
		color: #082442;
		margin: 0;
	}

	.subblock-desc {
		font-size: 13.5px;
		color: #64748B;
		margin: 0;
		line-height: 1.5;
	}

	.bullet-list-teal {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
	}

	.bullet-list-teal li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13.5px;
		color: #334155;
	}

	.check-bullet {
		color: #079EAD;
		font-weight: 800;
	}

	.bullet-list-checklist {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 7px;
	}

	.bullet-list-checklist li {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 13.5px;
		line-height: 1.5;
		color: #334155;
	}

	.bullet-dot {
		color: #079EAD;
		font-size: 16px;
		line-height: 1;
	}

	/* Assistance Row */
	.assistance-cards-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	.assist-card {
		padding: 14px 12px;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.assist-badge {
		font-size: 13px;
		font-weight: 800;
		color: #079EAD;
	}

	.assist-text {
		font-size: 12.5px;
		color: #475569;
		line-height: 1.5;
		margin: 0;
	}

	/* Compliance Box */
	.compliance-note-box {
		padding: 14px 16px;
		background: #FDF1D3;
		border: 1px solid #FDE68A;
		border-radius: 12px;
		display: flex;
		gap: 12px;
	}

	.note-icon-wrap {
		flex-shrink: 0;
		padding-top: 2px;
	}

	.note-body {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.note-paragraph {
		font-size: 12.5px;
		line-height: 1.6;
		color: #78350F;
		margin: 0;
	}

	.btn-visit-official {
		align-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 14px;
		background: #082442;
		color: #FFFFFF;
		font-size: 12.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		transition: background 0.15s ease;
	}

	.btn-visit-official:hover {
		background: #079EAD;
	}

	.source-disabled-text {
		font-size: 12px;
		color: #94A3B8;
		font-style: italic;
	}

	@media (max-width: 640px) {
		.info-grid-two,
		.bullet-list-teal,
		.assistance-cards-row {
			grid-template-columns: 1fr;
		}

		.detail-title {
			font-size: 22px;
		}
	}
</style>

