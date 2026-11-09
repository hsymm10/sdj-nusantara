<!-- Section 05: 5 Tahap Pelaksanaan Pendampingan Kami (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	const steps = [
		{
			num: '01',
			title: 'Konsultasi &\nAnalisis Kebutuhan',
			icon: 'message'
		},
		{
			num: '02',
			title: 'Perencanaan\nProgram',
			icon: 'calendar'
		},
		{
			num: '03',
			title: 'Pendampingan\nIntensif',
			icon: 'users'
		},
		{
			num: '04',
			title: 'Evaluasi &\nUmpan Balik',
			icon: 'check'
		},
		{
			num: '05',
			title: 'Tindak Lanjut &\nPengembangan',
			icon: 'trophy'
		}
	];
</script>

<section class="steps-edu-section" id="tahap-pendampingan">
	<div class="steps-edu-container">
		<!-- Left: Title, Description, Button -->
		<div class="steps-edu-left">
			<div class="steps-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Layanan Pendampingan</span>
			</div>
			<h2 class="steps-title">5 Tahap Pelaksanaan Pendampingan Kami</h2>
			<p class="steps-desc">
				Alur pendampingan yang sistematis, terukur, dan berorientasi pada hasil terbaik.
			</p>
			<a href="/layanan" class="steps-btn">
				<span>Pelajari Tahapannya</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Right: 5 Steps Horizontal Strip -->
		<div class="steps-edu-right">
			<div class="steps-cards-list">
				{#each steps as st, idx}
					<div class="step-card">
						<div class="step-icon-wrap">
							{#if st.icon === 'message'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
								</svg>
							{:else if st.icon === 'calendar'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
									<line x1="16" y1="2" x2="16" y2="6"/>
									<line x1="8" y1="2" x2="8" y2="6"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
								</svg>
							{:else if st.icon === 'users'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
									<circle cx="9" cy="7" r="4"/>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
								</svg>
							{:else if st.icon === 'check'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
									<polyline points="22 4 12 14.01 9 11.01"/>
								</svg>
							{:else}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
									<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
									<path d="M4 22h16"/>
									<path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"/>
									<path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"/>
									<path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
								</svg>
							{/if}
						</div>

						<div class="step-num">{st.num}</div>
						<div class="step-title">{st.title}</div>
					</div>

					{#if idx < steps.length - 1}
						<div class="step-chevron" aria-hidden="true">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
		background: #0B2948;
		color: #FFFFFF;
		padding: 68px 0;
		position: relative;
		overflow: hidden;
		width: 100%;
		box-sizing: border-box;
	}

	.steps-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 48px;
		box-sizing: border-box;
	}

	.steps-edu-left {
		flex: 0 0 340px;
		max-width: 340px;
	}

	.steps-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2.5px;
		background: #08AEBB;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #08AEBB;
		letter-spacing: 0.04em;
	}

	.steps-title {
		font-size: clamp(24px, 2.2vw, 28px);
		line-height: 1.25;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 12px;
		letter-spacing: -0.015em;
	}

	.steps-desc {
		font-size: 14px;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.82);
		margin: 0 0 24px;
	}

	.steps-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F9B52B;
		color: #082442;
		font-size: 13px;
		font-weight: 700;
		padding: 11px 22px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(249, 181, 43, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.steps-btn:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(249, 181, 43, 0.38);
	}

	/* Right: Steps List */
	.steps-edu-right {
		flex: 1;
		background: #FFFFFF;
		border-radius: 18px;
		padding: 24px 28px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
	}

	.steps-cards-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.step-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		flex: 1;
	}

	.step-icon-wrap {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: #EBF8FA;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
		transition: transform 0.2s;
	}

	.step-card:hover .step-icon-wrap {
		transform: scale(1.08);
	}

	.step-num {
		font-size: 14px;
		font-weight: 800;
		color: #08AEBB;
		margin-bottom: 4px;
	}

	.step-title {
		font-size: 12px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		white-space: pre-line;
	}

	.step-chevron {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.5;
	}

	.step-chevron svg {
		stroke: #94A3B8;
	}

	@media (max-width: 1024px) {
		.steps-edu-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 36px;
		}

		.steps-edu-left,
		.steps-edu-right {
			max-width: 100%;
			width: 100%;
		}
	}

	@media (max-width: 640px) {
		.steps-edu-section {
			padding: 52px 0;
		}

		.steps-edu-container {
			padding: 0 20px;
		}

		.steps-edu-right {
			padding: 20px 16px;
		}

		.steps-cards-list {
			flex-direction: column;
			gap: 20px;
		}

		.step-chevron {
			transform: rotate(90deg);
		}
	}
</style>
