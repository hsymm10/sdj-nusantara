<!-- Section F: Alur Layanan — 4 Tahap Horizontal (Sesuai Mockup Referensi) -->
<script lang="ts">
	const steps = [
		{
			num: '01',
			title: 'Konsultasi Awal',
			desc: 'Sampaikan kebutuhan hukum institusi Anda.',
			icon: 'chat'
		},
		{
			num: '02',
			title: 'Analisis & Rekomendasi',
			desc: 'Tim kami melakukan kajian dan telaah kebutuhan.',
			icon: 'calendar'
		},
		{
			num: '03',
			title: 'Penyusunan Dokumen',
			desc: 'Pembuatan atau penelaahan dokumen sesuai kebutuhan.',
			icon: 'doc'
		},
		{
			num: '04',
			title: 'Pendampingan & Finalisasi',
			desc: 'Implementasi dan tindak lanjut layanan.',
			icon: 'check'
		}
	];
</script>

<section class="process-legal-section">
	<div class="process-legal-container">
		<!-- Main Soft-Colored Box -->
		<div class="process-box">
			<!-- Header -->
			<div class="process-header">
				<div class="process-badge">
					<span class="badge-dash"></span>
					<span class="badge-text">ALUR LAYANAN</span>
					<span class="badge-dash"></span>
				</div>
				<h2 class="process-title">Proses Layanan yang Jelas</h2>
				<p class="process-sub">
					Dapatkan pendampingan hukum secara terstruktur dan transparan.
				</p>
			</div>

			<!-- 4 Horizontal Steps Row -->
			<div class="steps-row">
				{#each steps as st, idx}
					<div class="step-col">
						<div class="step-icon-circle">
							{#if st.icon === 'chat'}
								<!-- Chat / consultation icon -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
								</svg>
							{:else if st.icon === 'calendar'}
								<!-- Calendar icon -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
									<line x1="16" y1="2" x2="16" y2="6"/>
									<line x1="8" y1="2" x2="8" y2="6"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
								</svg>
							{:else if st.icon === 'doc'}
								<!-- Document icon -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
									<polyline points="14 2 14 8 20 8"/>
									<line x1="16" y1="13" x2="8" y2="13"/>
									<line x1="16" y1="17" x2="8" y2="17"/>
								</svg>
							{:else}
								<!-- Checkmark icon -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="20 6 9 17 4 12"/>
								</svg>
							{/if}
							<!-- Step number pill attached below circle -->
							<span class="step-num-badge">{st.num}</span>
						</div>

						<h3 class="step-name">{st.title}</h3>
						<p class="step-desc">{st.desc}</p>
					</div>

					{#if idx < steps.length - 1}
						<div class="step-arrow-wrap" aria-hidden="true">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<line x1="5" y1="12" x2="19" y2="12"/>
								<polyline points="12 5 19 12 12 19"/>
							</svg>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.process-legal-section {
		background: #ffffff;
		padding: 24px 0 46px;
	}

	.process-legal-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.process-box {
		background: #f3f8fb;
		border-radius: 16px;
		padding: 34px 28px 40px;
	}

	.process-header {
		text-align: center;
		margin-bottom: 34px;
	}

	.process-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 6px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.5px;
	}

	.process-title {
		font-size: 23px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px;
		letter-spacing: -0.2px;
	}

	.process-sub {
		font-size: 12px;
		color: #64748b;
		margin: 0;
	}

	/* Steps row */
	.steps-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
	}

	.step-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 0 6px;
	}

	.step-icon-circle {
		position: relative;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: #00aab5;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 16px;
		box-shadow: 0 4px 14px rgba(0, 170, 181, 0.25);
	}

	.step-num-badge {
		position: absolute;
		bottom: -6px;
		background: #082442;
		color: #ffffff;
		font-size: 9.5px;
		font-weight: 800;
		padding: 1px 6px;
		border-radius: 10px;
		border: 1.5px solid #ffffff;
		letter-spacing: 0.2px;
	}

	.step-name {
		font-size: 12.5px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 6px;
		line-height: 1.35;
	}

	.step-desc {
		font-size: 11px;
		line-height: 1.5;
		color: #64748b;
		margin: 0;
	}

	.step-arrow-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 14px;
		opacity: 0.7;
		flex-shrink: 0;
	}

	@media (max-width: 868px) {
		.steps-row {
			flex-direction: column;
			gap: 22px;
		}

		.step-arrow-wrap {
			transform: rotate(90deg);
			margin: 0;
		}
	}
</style>

