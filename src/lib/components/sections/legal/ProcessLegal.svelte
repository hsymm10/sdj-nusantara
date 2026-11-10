<!-- Section F: Alur Layanan Hukum — Pixel-Perfect Refinement Mengikuti Mockup Referensi -->
<script lang="ts">
	const steps = [
		{
			num: '01',
			title: 'Konsultasi Awal',
			desc: 'Sampaikan kebutuhan hukum institusi Anda.',
			icon: 'message-square',
			accent: 'teal' as const
		},
		{
			num: '02',
			title: 'Analisis & Rekomendasi',
			desc: 'Tim kami melakukan kajian dan memberikan rekomendasi solusi terbaik.',
			icon: 'search-lines',
			accent: 'gold' as const
		},
		{
			num: '03',
			title: 'Penyusunan Dokumen',
			desc: 'Pembuatan atau penyempurnaan dokumen sesuai kebutuhan dan regulasi.',
			icon: 'file-pen',
			accent: 'teal' as const
		},
		{
			num: '04',
			title: 'Pendampingan Implementasi',
			desc: 'Pendampingan dalam proses penerapan dan koordinasi terkait.',
			icon: 'gears',
			accent: 'gold' as const
		},
		{
			num: '05',
			title: 'Finalisasi & Evaluasi',
			desc: 'Penyelesaian layanan serta evaluasi untuk memastikan kepatuhan dan efektivitas.',
			icon: 'check-circle',
			accent: 'teal' as const
		}
	];
</script>

<section class="process-legal-section" aria-labelledby="process-legal-heading">
	<!-- Dekorasi sudut bawah kanan & kiri latar belakang -->
	<div class="process-bg-glow-bl" aria-hidden="true"></div>
	<svg class="process-bg-waves-br" viewBox="0 0 420 210" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M55 210 C158 140, 282 90, 420 55 L420 210 Z" fill="#B5EAF0" fill-opacity="0.58" />
		<path d="M125 210 C222 145, 322 105, 420 82 L420 210 Z" fill="#FFB21C" fill-opacity="0.94" />
		<path d="M192 210 C272 160, 348 130, 420 116 L420 210 Z" fill="#00A6B2" />
	</svg>

	<div class="process-legal-container">
		<!-- Container Soft-Cyan: #EAF8FA dengan border radius 24px -->
		<div class="process-box">
			<!-- Header Terpusat -->
			<div class="process-header">
				<div class="process-badge">
					<span class="badge-dash" aria-hidden="true"></span>
					<span class="badge-text">ALUR LAYANAN HUKUM</span>
					<span class="badge-dash" aria-hidden="true"></span>
				</div>
				<h2 id="process-legal-heading" class="process-title">
					Proses Layanan yang <span class="process-title-highlight">Jelas dan Terarah.</span>
				</h2>
				<p class="process-sub">
					Dapatkan pendampingan hukum secara terstruktur, efektif, dan transparan.
				</p>
			</div>

			<!-- 5 Kartu Tahapan Layanan dengan Panah Penghubung -->
			<div class="steps-row">
				{#each steps as st, idx}
					<div class="step-card">
						<!-- Lapisan wave lembut sepanjang sisi bawah kartu -->
						<div class="step-card-bg" aria-hidden="true">
							<svg class="step-card-wave" viewBox="0 0 240 44" fill="none" preserveAspectRatio="none">
								{#if st.accent === 'teal'}
									<path
										d="M0 44 C78 36, 152 22, 240 4 L240 44 Z"
										fill="#9BE4EC"
										fill-opacity="0.46"
									/>
									<path
										d="M84 44 C142 36, 194 26, 240 12 L240 44 Z"
										fill="#4DC9D4"
										fill-opacity="0.72"
									/>
								{:else}
									<path
										d="M0 44 C78 36, 152 22, 240 4 L240 44 Z"
										fill="#FFE49C"
										fill-opacity="0.56"
									/>
									<path
										d="M84 44 C142 36, 194 26, 240 12 L240 44 Z"
										fill="#FFC247"
										fill-opacity="0.82"
									/>
								{/if}
							</svg>
						</div>

						<!-- Kotak Ikon Mengambang di Sisi Atas Kartu -->
						<div class="step-icon-box" aria-hidden="true">
							{#if st.icon === 'message-square'}
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								</svg>
							{:else if st.icon === 'search-lines'}
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.3-4.3" />
									<path d="M8 9.5h6" />
									<path d="M8 12.5h4.5" />
								</svg>
							{:else if st.icon === 'file-pen'}
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" />
									<path d="M14 2v4a2 2 0 0 0 2 2h4" />
									<path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
								</svg>
							{:else if st.icon === 'gears'}
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
									<circle cx="12" cy="12" r="3" />
								</svg>
							{:else}
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10" />
									<path d="m9 12 2 2 4-4" />
								</svg>
							{/if}
						</div>

						<!-- Badge Nomor Teal Bulat -->
						<span class="step-num-badge">{st.num}</span>

						<h3 class="step-name">{st.title}</h3>
						<p class="step-desc">{st.desc}</p>
					</div>

					{#if idx < steps.length - 1}
						<div class="step-arrow-wrap" aria-hidden="true">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
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
		position: relative;
		background: #FFFFFF;
		padding: 16px 0 80px;
		overflow: hidden;
		box-sizing: border-box;
	}

	.process-bg-glow-bl {
		position: absolute;
		left: -60px;
		bottom: -50px;
		width: 420px;
		height: 280px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(208, 245, 249, 0.72) 0%, rgba(208, 245, 249, 0) 72%);
		pointer-events: none;
		z-index: 1;
	}

	.process-bg-waves-br {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 380px;
		height: 190px;
		pointer-events: none;
		z-index: 1;
	}

	.process-legal-container {
		position: relative;
		z-index: 2;
		width: 90%;
		max-width: 1620px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.process-box {
		background: linear-gradient(180deg, #E6F7FA 0%, #F0FAFC 100%);
		border: 1px solid #D5EEF3;
		border-radius: 26px;
		padding: 50px 44px 56px;
		box-shadow: 0 14px 36px rgba(8, 36, 66, 0.045);
		box-sizing: border-box;
	}

	.process-header {
		text-align: center;
		margin-bottom: 52px;
	}

	.process-badge {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.badge-dash {
		display: inline-block;
		width: 26px;
		height: 2px;
		background: #00A9B7;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 13px;
		font-weight: 700;
		color: #00A9B7;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.process-title {
		font-size: clamp(26px, 2.1vw, 40px);
		font-weight: 800;
		color: #0B2340;
		margin: 0 0 12px;
		line-height: 1.22;
		letter-spacing: -0.015em;
	}

	.process-title-highlight {
		color: #FFB21C;
	}

	.process-sub {
		font-size: clamp(14.5px, 0.9vw, 17px);
		color: #475569;
		margin: 0;
		line-height: 1.5;
	}

	/* 5 Kartu Sejajar + 4 Panah Penghubung */
	.steps-row {
		display: grid;
		grid-template-columns:
			minmax(0, 1fr) auto
			minmax(0, 1fr) auto
			minmax(0, 1fr) auto
			minmax(0, 1fr) auto
			minmax(0, 1fr);
		align-items: stretch;
		gap: clamp(8px, 0.8vw, 14px);
	}

	.step-card {
		position: relative;
		margin-top: 33px;
		min-height: 264px;
		background: #FFFFFF;
		border: 1px solid #E1EEF5;
		border-radius: 20px;
		padding: 48px 20px 38px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		box-shadow: 0 10px 26px rgba(8, 36, 66, 0.05);
		box-sizing: border-box;
		min-width: 0;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.step-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 14px 32px rgba(8, 36, 66, 0.08);
	}

	.step-card-bg {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		overflow: hidden;
		pointer-events: none;
		z-index: 1;
	}

	.step-card-wave {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 38px;
	}

	/* Kotak Ikon Mengambang di Sisi Atas Kartu */
	.step-icon-box {
		position: absolute;
		top: -33px;
		left: 50%;
		transform: translateX(-50%);
		width: 66px;
		height: 66px;
		border-radius: 16px;
		background: #E8F8FA;
		border: 1px solid #D3EFF3;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8px 20px rgba(0, 169, 183, 0.16);
		z-index: 3;
	}

	/* Badge Nomor Teal Bulat */
	.step-num-badge {
		position: relative;
		z-index: 2;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #00A9B7;
		color: #FFFFFF;
		font-size: 12.5px;
		font-weight: 800;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 10px rgba(0, 169, 183, 0.28);
		margin-bottom: 16px;
	}

	.step-name {
		position: relative;
		z-index: 2;
		font-size: clamp(15px, 0.92vw, 18px);
		font-weight: 700;
		color: #0B2340;
		margin: 0 0 10px;
		line-height: 1.35;
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.step-desc {
		position: relative;
		z-index: 2;
		font-size: clamp(12.5px, 0.78vw, 14.5px);
		line-height: 1.55;
		color: #64748B;
		margin: 0;
		white-space: normal;
		overflow-wrap: anywhere;
	}

	.step-arrow-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 32px;
		flex-shrink: 0;
	}

	/* Tablet: Grid 2 kolom + baris ke-3 terpusat rapi */
	@media (max-width: 1180px) {
		.process-legal-container {
			width: 92%;
		}

		.process-box {
			padding: 36px 24px 40px;
		}

		.steps-row {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 24px 20px;
		}

		.step-card {
			min-height: 220px;
		}

		.step-arrow-wrap {
			display: none;
		}

		.step-card:last-child {
			grid-column: 1 / -1;
			max-width: 440px;
			width: 100%;
			justify-self: center;
		}
	}

	/* Mobile: Vertikal 1 kolom dengan panah mengarah ke bawah */
	@media (max-width: 640px) {
		.process-legal-section {
			padding: 12px 0 48px;
		}

		.process-box {
			padding: 28px 16px 32px;
			border-radius: 20px;
		}

		.process-header {
			margin-bottom: 32px;
		}

		.steps-row {
			grid-template-columns: minmax(0, 1fr);
			gap: 12px;
		}

		.step-card {
			margin-top: 26px;
			min-height: 0;
			padding: 40px 18px 28px;
		}

		.step-icon-box {
			width: 56px;
			height: 56px;
			top: -28px;
		}

		.step-card:last-child {
			grid-column: auto;
			max-width: none;
		}

		.step-arrow-wrap {
			display: flex;
			padding-top: 0;
			margin: 2px 0 -4px;
			transform: rotate(90deg);
		}

		.process-bg-waves-br {
			width: 200px;
			height: 110px;
		}
	}
</style>
