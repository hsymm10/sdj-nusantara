<script lang="ts">
	// PartnerWorkflowSection.svelte - Faithful to design/kemitraan.png (1536px Primary)
	const steps = [
		{
			num: '01',
			title: 'Inisiasi &\nKonsultasi Awal',
			desc: 'Diskusi kebutuhan dan potensi kolaborasi.',
			icon: 'chat'
		},
		{
			num: '02',
			title: 'Penyusunan\nProposal',
			desc: 'Penyesuaian bentuk kerja sama dengan tujuan bersama.',
			icon: 'document'
		},
		{
			num: '03',
			title: 'Penandatanganan\nNota Kesepahaman',
			desc: 'Kesepakatan formal kerja sama.',
			icon: 'contract'
		},
		{
			num: '04',
			title: 'Implementasi\nProgram',
			desc: 'Pelaksanaan kegiatan sesuai rencana.',
			icon: 'gear'
		},
		{
			num: '05',
			title: 'Evaluasi &\nPengembangan',
			desc: 'Monitoring hasil dan pengembangan lanjutan.',
			icon: 'chart'
		}
	];
</script>

<section id="alur-kerja-sama" class="partner-workflow-section">
	<!-- Background building photo faint on top-right (x ±1000→1536, opacity ±0.4) + turquoise swoosh -->
	<div class="workflow-bg-wrap" aria-hidden="true">
		<img
			src="/images/partner-flow-building.jpg"
			alt=""
			class="bg-building-photo"
			loading="lazy"
		/>
		<div class="bg-fade-overlay"></div>
		<svg class="bg-swoosh" viewBox="0 0 500 240" fill="none" preserveAspectRatio="none">
			<path d="M0,80 Q250,180 500,40 L500,240 L0,240 Z" fill="#00A6B2" fill-opacity="0.06" />
		</svg>
	</div>

	<!-- Scoped Container: x ±78→1458 on 1536px -->
	<div class="sch-partner-container">
		<!-- Section Header -->
		<div class="workflow-header">
			<div class="section-label">
				<span class="label-dash">—</span>
				<span class="label-text">Alur Kerja Sama</span>
			</div>
			<h2 class="section-title">Langkah Mudah Menuju Kolaborasi yang Sukses.</h2>
			<p class="section-desc">
				Proses kerja sama yang terstruktur dan transparan, untuk memastikan hasil terbaik bagi semua pihak.
			</p>
		</div>

		<!-- 5 Step Cards with Arrows between them -->
		<div class="steps-flow-row">
			{#each steps as step, idx}
				{#if idx > 0}
					<div class="flow-arrow" aria-hidden="true">
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</div>
				{/if}

				<div class="step-card">
					<!-- Top Row: Pale Circle 54px with icon + Bold Turquoise Number -->
					<div class="step-card-top">
						<div class="step-icon-circle">
							{#if step.icon === 'chat'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							{:else if step.icon === 'document'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
								</svg>
							{:else if step.icon === 'contract'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									<polyline points="9 12 11 14 15 10"></polyline>
								</svg>
							{:else if step.icon === 'gear'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="3"></circle>
									<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
								</svg>
							{:else}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<line x1="18" y1="20" x2="18" y2="10"></line>
									<line x1="12" y1="20" x2="12" y2="4"></line>
									<line x1="6" y1="20" x2="6" y2="14"></line>
								</svg>
							{/if}
						</div>
						<div class="step-header-text">
							<span class="step-num">{step.num}</span>
							<h3 class="step-title">{step.title}</h3>
						</div>
					</div>

					<p class="step-desc">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.partner-workflow-section {
		position: relative;
		background: #FFFFFF;
		height: 300px;
		width: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		border-top: 1px solid #F1F5F9;
	}

	.workflow-bg-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 38%;
		max-width: 550px;
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
	}

	.bg-building-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.28;
		display: block;
	}

	.bg-fade-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#FFFFFF 0%,
			rgba(255, 255, 255, 0.9) 25%,
			rgba(255, 255, 255, 0.4) 65%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	.bg-swoosh {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 120px;
	}

	/* Scoped Container: x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px */
	.sch-partner-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-partner-container {
			max-width: 1500px;
		}
	}

	.workflow-header {
		margin-bottom: 1.25rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.35rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: clamp(20px, 1.8vw, 27px);
		line-height: 1.22;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.35rem 0;
		white-space: nowrap;
	}

	.section-desc {
		font-size: 14px;
		line-height: 1.45;
		color: #475569;
		margin: 0;
	}

	/* 5 Steps Flow Row */
	.steps-flow-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		width: 100%;
	}

	/* 5 Cards Equal Height: ±135px, radius ±14px, shadow lembut */
	.step-card {
		flex: 1;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 14px 12px;
		box-shadow: 0 4px 16px rgba(11, 39, 71, 0.06);
		display: flex;
		flex-direction: column;
		height: 135px;
		box-sizing: border-box;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.step-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 166, 178, 0.12);
	}

	.step-card-top {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 8px;
	}

	/* Pale Turquoise Circle ±48px */
	.step-icon-circle {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.step-header-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: 0;
	}

	.step-num {
		font-size: 13px;
		font-weight: 800;
		color: #00A6B2;
		line-height: 1;
		margin-bottom: 2px;
	}

	.step-title {
		font-size: 13.5px;
		font-weight: 800;
		color: #082442;
		line-height: 1.2;
		margin: 0;
		white-space: pre-line;
	}

	.step-desc {
		font-size: 12px;
		line-height: 1.35;
		color: #183553;
		margin: 0;
	}

	.flow-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		opacity: 0.65;
	}

	@media (max-width: 1100px) {
		.partner-workflow-section {
			height: auto;
			padding: 2.5rem 0;
		}
		.section-title {
			white-space: normal;
		}
		.steps-flow-row {
			flex-wrap: wrap;
			gap: 14px;
		}
		.flow-arrow {
			display: none;
		}
		.step-card {
			flex: 1 1 calc(33.333% - 14px);
			height: auto;
			min-height: 130px;
		}
	}

	@media (max-width: 640px) {
		.step-card {
			flex: 1 1 100%;
		}
	}
</style>
