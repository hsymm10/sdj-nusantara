<!-- Section 05: 5 Tahap Pelaksanaan Pendampingan Kami (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	const steps = [
		{
			num: '01',
			title: 'Konsultasi & Analisis Kebutuhan',
			icon: 'message'
		},
		{
			num: '02',
			title: 'Perencanaan Program',
			icon: 'calendar'
		},
		{
			num: '03',
			title: 'Pendampingan Intensif',
			icon: 'users'
		},
		{
			num: '04',
			title: 'Evaluasi & Umpan Balik',
			icon: 'check'
		},
		{
			num: '05',
			title: 'Tindak Lanjut & Pengembangan',
			icon: 'award'
		}
	];
</script>

<section class="steps-edu-section">
	<div class="steps-edu-container">
		<!-- Left: Text & CTA on Navy Background -->
		<div class="steps-edu-left">
			<div class="steps-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Layanan Pendampingan</span>
			</div>
			<h2 class="steps-title">
				5 Tahap Pelaksanaan<br />
				Pendampingan Kami
			</h2>
			<p class="steps-desc">
				Alur pendampingan yang sistematis, terukur, dan berorientasi pada hasil terbaik.
			</p>
			<a href="/layanan" class="steps-btn">
				<span>Pelajari Tahapannya</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Right: White horizontal steps card (GAMBAR 2 layout) -->
		<div class="steps-edu-right">
			<div class="steps-card">
				{#each steps as step, idx}
					<div class="step-card-col">
						<div class="step-icon-wrap">
							{#if step.icon === 'message'}
								<!-- Chat / consultation icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
								</svg>
							{:else if step.icon === 'calendar'}
								<!-- Calendar icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
									<line x1="16" y1="2" x2="16" y2="6"/>
									<line x1="8" y1="2" x2="8" y2="6"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
								</svg>
							{:else if step.icon === 'users'}
								<!-- Coaching / users icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
									<circle cx="9" cy="7" r="4"/>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
								</svg>
							{:else if step.icon === 'check'}
								<!-- Evaluation checklist icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M9 11l3 3L22 4"/>
									<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
								</svg>
							{:else}
								<!-- Trophy / award icon -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="8" r="7"/>
									<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
								</svg>
							{/if}
						</div>
						<div class="step-num">{step.num}</div>
						<div class="step-name">{step.title}</div>
					</div>

					{#if idx < steps.length - 1}
						<div class="step-chevron">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="9 18 15 12 9 6" />
							</svg>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.steps-edu-section {
		background: #082442;
		color: #ffffff;
		padding: 44px 0 46px;
		position: relative;
		overflow: hidden;
	}

	.steps-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
	}

	.steps-edu-left {
		flex: 0 0 320px;
		max-width: 320px;
	}

	.steps-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 10px;
	}

	.badge-dash {
		display: inline-block;
		width: 12px;
		height: 2px;
		background: #16b6c1;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11px;
		font-weight: 600;
		color: #16b6c1;
		letter-spacing: 0.3px;
	}

	.steps-title {
		font-size: 24px;
		line-height: 1.25;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 10px;
		letter-spacing: -0.3px;
	}

	.steps-desc {
		font-size: 11.5px;
		line-height: 1.55;
		color: #cbd5e1;
		margin: 0 0 20px;
	}

	.steps-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #f5b331;
		color: #082442;
		font-size: 11.5px;
		font-weight: 700;
		padding: 8px 16px;
		border-radius: 6px;
		text-decoration: none;
		transition: transform 0.2s, background 0.2s;
	}

	.steps-btn:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	/* Right Panel: White rounded card with 5 horizontal steps */
	.steps-edu-right {
		flex: 1;
		min-width: 0;
	}

	.steps-card {
		background: #ffffff;
		border-radius: 12px;
		padding: 24px 18px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
	}

	.step-card-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 0 4px;
	}

	.step-icon-wrap {
		width: 44px;
		height: 44px;
		border-radius: 8px;
		background: #f4f8fb;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
	}

	.step-num {
		font-size: 12px;
		font-weight: 800;
		color: #079ead;
		margin-bottom: 4px;
	}

	.step-name {
		font-size: 10.5px;
		font-weight: 700;
		line-height: 1.35;
		color: #082442;
		min-height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step-chevron {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.6;
		margin-top: -12px;
	}

	@media (max-width: 992px) {
		.steps-edu-container {
			flex-direction: column;
			align-items: flex-start;
		}

		.steps-edu-left {
			max-width: 100%;
		}

		.steps-edu-right {
			width: 100%;
		}

		.steps-card {
			overflow-x: auto;
			justify-content: flex-start;
			gap: 16px;
		}

		.step-card-col {
			flex: 0 0 110px;
		}
	}
</style>
