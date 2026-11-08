<!-- Section F: Alur Layanan — Panel #EAF7F9, Lingkaran Putih 68px, Badge Nomor Teal Bulat (Sesuai Mockup) -->
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
		<!-- Main Soft-Cyan Box: #EAF7F9 dengan radius 24px -->
		<div class="process-box">
			<!-- Header Terpusat -->
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
						<!-- Ikon dalam lingkaran putih ±68px dengan bayangan halus -->
						<div class="step-icon-circle">
							{#if st.icon === 'chat'}
								<!-- Chat / consultation icon teal -->
								<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
								</svg>
							{:else if st.icon === 'calendar'}
								<!-- Calendar icon teal -->
								<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
									<line x1="16" y1="2" x2="16" y2="6"/>
									<line x1="8" y1="2" x2="8" y2="6"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
								</svg>
							{:else if st.icon === 'doc'}
								<!-- Document icon teal -->
								<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
									<polyline points="14 2 14 8 20 8"/>
									<line x1="16" y1="13" x2="8" y2="13"/>
									<line x1="16" y1="17" x2="8" y2="17"/>
								</svg>
							{:else}
								<!-- Checkmark icon teal -->
								<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="20 6 9 17 4 12"/>
								</svg>
							{/if}
							<!-- BADGE NOMOR teal bulat di bawah lingkaran -->
							<span class="step-num-badge">{st.num}</span>
						</div>

						<h3 class="step-name">{st.title}</h3>
						<p class="step-desc">{st.desc}</p>
					</div>

					{#if idx < steps.length - 1}
						<div class="step-arrow-wrap" aria-hidden="true">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
		padding: 40px 0 52px;
	}

	.process-legal-container {
		width: 93%;
		max-width: 1360px;
		margin: 0 auto;
	}

	.process-box {
		background: #eaf7f9;
		border-radius: 24px;
		padding: 44px 36px 48px;
	}

	.process-header {
		text-align: center;
		margin-bottom: 40px;
	}

	.process-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.8px;
	}

	.process-title {
		font-size: 30px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px;
	}

	.process-sub {
		font-size: 14.5px;
		color: #64748b;
		margin: 0;
	}

	/* Steps row */
	.steps-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
	}

	.step-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 0 8px;
	}

	/* Lingkaran putih ±68px */
	.step-icon-circle {
		position: relative;
		width: 68px;
		height: 68px;
		border-radius: 50%;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		box-shadow: 0 6px 18px rgba(8, 36, 66, 0.08);
	}

	/* BADGE NOMOR teal bulat di bawah lingkaran */
	.step-num-badge {
		position: absolute;
		bottom: -8px;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #00aab5;
		color: #ffffff;
		font-size: 11px;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #ffffff;
		box-shadow: 0 2px 6px rgba(0, 170, 181, 0.3);
	}

	.step-name {
		font-size: 15px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 8px;
		line-height: 1.35;
	}

	.step-desc {
		font-size: 13px;
		line-height: 1.55;
		color: #64748b;
		margin: 0;
	}

	.step-arrow-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 24px;
		opacity: 0.8;
		flex-shrink: 0;
	}

	@media (max-width: 868px) {
		.steps-row {
			flex-direction: column;
			gap: 28px;
		}

		.step-arrow-wrap {
			transform: rotate(90deg);
			margin: 0;
		}
	}
</style>
