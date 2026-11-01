<script lang="ts">
	// PartnerWorkflowSection.svelte - Faithful to design/kemitraan.png
	const steps = [
		{
			num: '01',
			title: 'Inisiasi & Konsultasi Awal',
			desc: 'Diskusi kebutuhan dan potensi kolaborasi.',
			icon: 'chat'
		},
		{
			num: '02',
			title: 'Penyusunan Proposal',
			desc: 'Penyesuaian bentuk kerja sama dengan tujuan bersama.',
			icon: 'document'
		},
		{
			num: '03',
			title: 'Penandatanganan Nota Kesepahaman',
			desc: 'Kesepakatan formal kerja sama.',
			icon: 'contract'
		},
		{
			num: '04',
			title: 'Implementasi Program',
			desc: 'Pelaksanaan kegiatan sesuai rencana.',
			icon: 'gear'
		},
		{
			num: '05',
			title: 'Evaluasi & Pengembangan',
			desc: 'Monitoring hasil dan pengembangan lanjutan.',
			icon: 'chart'
		}
	];
</script>

<section id="alur-kerja-sama" class="partner-workflow-section">
	<!-- Background building photo on right -->
	<div class="workflow-bg-wrap">
		<img
			src="/images/partner-flow-building.jpg"
			alt=""
			class="bg-building-photo"
			loading="lazy"
		/>
		<div class="bg-fade-overlay"></div>
		<!-- Soft turquoise wave overlay -->
		<svg class="bg-wave" viewBox="0 0 600 300" fill="none" preserveAspectRatio="none">
			<path d="M0 200 C200 120 400 80 600 0 L600 300 L0 300 Z" fill="#00A6B2" fill-opacity="0.12" />
		</svg>
	</div>

	<div class="workflow-container">
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

		<!-- 5 Step Cards with Arrows -->
		<div class="steps-flow-row">
			{#each steps as step, idx}
				{#if idx > 0}
					<div class="flow-arrow">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</div>
				{/if}

				<div class="step-card">
					<div class="step-card-header">
						<div class="step-icon">
							{#if step.icon === 'chat'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							{:else if step.icon === 'document'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
								</svg>
							{:else if step.icon === 'contract'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									<polyline points="9 12 11 14 15 10"></polyline>
								</svg>
							{:else if step.icon === 'gear'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="3"></circle>
									<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
								</svg>
							{:else}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<line x1="18" y1="20" x2="18" y2="10"></line>
									<line x1="12" y1="20" x2="12" y2="4"></line>
									<line x1="6" y1="20" x2="6" y2="14"></line>
								</svg>
							{/if}
						</div>
						<span class="step-num">{step.num}</span>
					</div>

					<h3 class="step-title">{step.title}</h3>
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
		padding: 3.5rem 0 4rem;
		overflow: hidden;
		border-top: 1px solid #F1F5F9;
	}

	.workflow-bg-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 50%;
		z-index: 1;
		pointer-events: none;
	}

	.bg-building-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.18;
		display: block;
	}

	.bg-fade-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 100%);
	}

	.bg-wave {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 120px;
	}

	.workflow-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.workflow-header {
		margin-bottom: 2rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 11px;
		font-weight: 700;
		margin-bottom: 0.4rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: 21px;
		line-height: 27px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.45rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #556B82;
		margin: 0;
	}

	/* 5 Steps Flow Row */
	.steps-flow-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.step-card {
		flex: 1;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 1.15rem 1rem;
		box-shadow: 0 4px 16px rgba(8, 36, 66, 0.05);
		display: flex;
		flex-direction: column;
		min-height: 130px;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.step-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.1);
	}

	.step-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.step-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step-num {
		font-size: 12px;
		font-weight: 800;
		color: #00A6B2;
	}

	.step-title {
		font-size: 11px;
		font-weight: 800;
		color: #082442;
		line-height: 15px;
		margin: 0 0 0.4rem 0;
		min-height: 30px;
	}

	.step-desc {
		font-size: 9.5px;
		line-height: 14px;
		color: #64748B;
		margin: 0;
	}

	.flow-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		opacity: 0.7;
	}

	@media (max-width: 900px) {
		.steps-flow-row {
			flex-direction: column;
		}
		.flow-arrow {
			transform: rotate(90deg);
			margin: 0.25rem 0;
		}
		.step-card {
			width: 100%;
		}
	}
</style>
