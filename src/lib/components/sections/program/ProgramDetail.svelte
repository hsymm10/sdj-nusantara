<script lang="ts">
	import type { ProgramItem } from '#lib/data/programs';
	import { programKnowledge } from '#lib/data/knowledge/program';

	interface Props {
		program: ProgramItem;
	}

	let { program }: Props = $props();

	// Temukan entri detail lengkap dari programKnowledge
	let knowledgeEntry = $derived(
		programKnowledge.find((p) => p.slug === program.slug)
	);

	const initialSteps = [
		{ num: '01', title: 'Konsultasi Kebutuhan', desc: 'Diskusi awal profil, tujuan belajar, atau kebutuhan institusi Anda.' },
		{ num: '02', title: 'Penyusunan Rencana', desc: 'Penyesuaian modul pelatihan, linimasa kegiatan, dan penentuan format.' },
		{ num: '03', title: 'Pelaksanaan Program', desc: 'Sesi bimbingan, simulasi, dan pendampingan terarah bersama konsultan.' }
	];
</script>

<div class="prog-detail-content">
	<!-- Header Info -->
	<div class="header-info-group">
		<h2 id="modal-title" class="detail-title">{program.title}</h2>

		<div class="badges-row">
			<span class="badge-chip badge-teal">{program.category}</span>
			<span class="badge-chip badge-gold">Durasi: {program.duration}</span>
			<span class="badge-chip badge-outline">Sertifikat: Ya</span>
		</div>
	</div>

	<!-- Description -->
	<p class="desc-lead">
		{knowledgeEntry ? knowledgeEntry.ringkas : program.desc}
	</p>

	<!-- Cocok Untuk -->
	<div class="section-subblock">
		<h3 class="subblock-heading">Cocok untuk Anda Jika:</h3>
		<ul class="target-list">
			{#if knowledgeEntry && knowledgeEntry.cocokUntuk}
				{#each knowledgeEntry.cocokUntuk as target}
					<li>
						<span class="check-bullet" aria-hidden="true">✓</span>
						<span>{target}</span>
					</li>
				{/each}
			{:else}
				<li>
					<span class="check-bullet" aria-hidden="true">✓</span>
					<span>{program.target}</span>
				</li>
			{/if}
		</ul>
	</div>

	<!-- Yang Anda Dapatkan / Kurikulum Utama -->
	<div class="section-subblock">
		<h3 class="subblock-heading">Yang Anda Dapatkan</h3>
		<ul class="bullet-list-checklist">
			{#if knowledgeEntry && knowledgeEntry.detail}
				{#each knowledgeEntry.detail as point}
					<li>
						<span class="bullet-dot" aria-hidden="true">•</span>
						<span>{point}</span>
					</li>
				{/each}
			{:else}
				<li>
					<span class="bullet-dot" aria-hidden="true">•</span>
					<span>Materi pelatihan terstruktur dan aplikatif</span>
				</li>
				<li>
					<span class="bullet-dot" aria-hidden="true">•</span>
					<span>Sesi praktik dan evaluasi langsung bersama konsultan</span>
				</li>
				<li>
					<span class="bullet-dot" aria-hidden="true">•</span>
					<span>Sertifikat penyelesaian program (Certificate of Completion)</span>
				</li>
			{/if}
		</ul>
	</div>

	<!-- Format Pelaksanaan -->
	<div class="section-subblock">
		<h3 class="subblock-heading">Format Pelaksanaan yang Ditawarkan</h3>
		<div class="format-cards-grid">
			{#if knowledgeEntry && knowledgeEntry.format}
				{#each knowledgeEntry.format as fmt}
					<div class="fmt-pill">
						<span class="fmt-icon" aria-hidden="true">⚡</span>
						<span>{fmt}</span>
					</div>
				{/each}
			{:else}
				<div class="fmt-pill">
					<span class="fmt-icon" aria-hidden="true">⚡</span>
					<span>Kelas Intensif (Daring / Tatap Muka)</span>
				</div>
				<div class="fmt-pill">
					<span class="fmt-icon" aria-hidden="true">⚡</span>
					<span>Pendampingan Personal & Kelompok</span>
				</div>
			{/if}
		</div>
	</div>

	<!-- 3 Langkah Awal -->
	<div class="section-subblock">
		<h3 class="subblock-heading">3 Langkah Memulai Program</h3>
		<div class="steps-row">
			{#each initialSteps as s}
				<div class="step-card-mini">
					<div class="step-num">{s.num}</div>
					<h4 class="step-name">{s.title}</h4>
					<p class="step-desc">{s.desc}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Catatan Biaya & Jadwal -->
	<div class="indicative-box">
		<div class="indicative-icon" aria-hidden="true">ℹ</div>
		<p class="indicative-text">
			<strong>Catatan:</strong> Informasi detail mengenai jadwal dan biaya program dijelaskan secara transparan saat sesi konsultasi awal, disesuaikan dengan format dan kebutuhan Anda.
		</p>
	</div>
</div>

<style>
	.prog-detail-content {
		display: flex;
		flex-direction: column;
		gap: 22px;
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

	.badges-row {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.badge-chip {
		display: inline-flex;
		align-items: center;
		padding: 4px 10px;
		border-radius: 6px;
		font-size: 12px;
		font-weight: 700;
	}

	.badge-teal {
		background: #E6F7F8;
		color: #079EAD;
	}

	.badge-gold {
		background: #FEF3C7;
		color: #B45309;
	}

	.badge-outline {
		border: 1px solid #CBD5E1;
		color: #475569;
		background: #FFFFFF;
	}

	.desc-lead {
		font-size: 15px;
		line-height: 1.6;
		color: #183553;
		margin: 0;
		padding: 12px 16px;
		background: #F8FAFC;
		border-left: 3px solid #079EAD;
		border-radius: 0 8px 8px 0;
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

	.target-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.target-list li {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 13.5px;
		line-height: 1.5;
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

	.format-cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
	}

	.fmt-pill {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 14px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 10px;
		font-size: 13px;
		font-weight: 600;
		color: #1E293B;
	}

	.fmt-icon {
		color: #F5B331;
	}

	.steps-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	.step-card-mini {
		padding: 14px 12px;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.step-num {
		font-size: 13px;
		font-weight: 800;
		color: #079EAD;
	}

	.step-name {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		margin: 0;
	}

	.step-desc {
		font-size: 12px;
		line-height: 1.5;
		color: #64748B;
		margin: 0;
	}

	.indicative-box {
		padding: 12px 16px;
		background: #F1F5F9;
		border-radius: 10px;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.indicative-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: #CBD5E1;
		color: #082442;
		font-size: 12px;
		font-weight: 700;
		flex-shrink: 0;
	}

	.indicative-text {
		font-size: 12.5px;
		color: #475569;
		margin: 0;
		line-height: 1.5;
	}

	@media (max-width: 640px) {
		.format-cards-grid,
		.steps-row {
			grid-template-columns: 1fr;
		}

		.detail-title {
			font-size: 22px;
		}
	}
</style>
