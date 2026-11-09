<!-- Section 06: Komitmen Nyata untuk Dampak yang Terukur (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	const stats = [
		{
			num: '200+',
			label: 'Individu Pemetaan\nTalenta',
			icon: 'users',
			isHighlight: true
		},
		{
			num: '12',
			label: 'Kegiatan Sosialisasi\nBeasiswa',
			icon: 'calendar',
			isHighlight: false
		},
		{
			num: '60',
			label: 'Peserta Coaching\nIntensif',
			icon: 'grad',
			isHighlight: false
		},
		{
			num: '20+',
			label: 'Mitra Strategis\nInstitusi',
			icon: 'network',
			isHighlight: false
		}
	];
</script>

<section class="impact-edu-section" id="dampak-nyata">
	<div class="impact-edu-container">
		<!-- Section Header -->
		<div class="impact-header">
			<div class="impact-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Dampak Nyata</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="impact-title">Komitmen Nyata untuk Dampak yang Terukur</h2>
			<p class="impact-sub">
				SDJNusantara terus menghadirkan program pendidikan dan pengembangan talenta yang berdampak luas.
			</p>
		</div>

		<!-- 4 Metric Cards Grid -->
		<div class="impact-grid">
			{#each stats as item}
				<div class="impact-card" class:highlight={item.isHighlight}>
					<div class="impact-icon-box">
						{#if item.icon === 'users'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{:else if item.icon === 'calendar'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
								<line x1="16" y1="2" x2="16" y2="6"/>
								<line x1="8" y1="2" x2="8" y2="6"/>
								<line x1="3" y1="10" x2="21" y2="10"/>
							</svg>
						{:else if item.icon === 'grad'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
							</svg>
						{/if}
					</div>

					<div class="impact-text-group">
						<div class="impact-num">{item.num}</div>
						<div class="impact-label">{item.label}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.impact-edu-section {
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.impact-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.impact-header {
		text-align: center;
		margin-bottom: 36px;
	}

	.impact-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
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

	.impact-title {
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
		line-height: 1.25;
	}

	.impact-sub {
		font-size: 14px;
		line-height: 1.6;
		color: #64748B;
		margin: 0 auto;
		max-width: 600px;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
	}

	.impact-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 22px 24px;
		min-height: 96px;
		display: flex;
		align-items: center;
		gap: 16px;
		transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s;
		box-shadow: 0 4px 18px rgba(11, 41, 72, 0.04);
		box-sizing: border-box;
	}

	.impact-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 24px rgba(11, 41, 72, 0.08);
		border-color: #CBD5E1;
	}

	/* Highlight Card: Solid Teal */
	.impact-card.highlight {
		background: #08AEBB;
		border-color: #08AEBB;
		box-shadow: 0 8px 24px rgba(8, 174, 187, 0.28);
	}

	.impact-card.highlight:hover {
		box-shadow: 0 12px 28px rgba(8, 174, 187, 0.36);
	}

	.impact-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		background: #EBF8FA;
		color: #08AEBB;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.impact-card.highlight .impact-icon-box {
		background: rgba(255, 255, 255, 0.22);
		color: #FFFFFF;
	}

	.impact-text-group {
		display: flex;
		flex-direction: column;
	}

	.impact-num {
		font-size: 26px;
		font-weight: 800;
		color: #0B2948;
		line-height: 1.15;
		margin-bottom: 4px;
		letter-spacing: -0.01em;
	}

	.impact-card.highlight .impact-num {
		color: #FFFFFF;
	}

	.impact-label {
		font-size: 12.5px;
		font-weight: 600;
		color: #64748B;
		line-height: 1.35;
		white-space: pre-line;
	}

	.impact-card.highlight .impact-label {
		color: rgba(255, 255, 255, 0.95);
	}

	@media (max-width: 1024px) {
		.impact-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 18px;
		}
	}

	@media (max-width: 640px) {
		.impact-edu-section {
			padding: 52px 0;
		}

		.impact-edu-container {
			padding: 0 20px;
		}

		.impact-grid {
			grid-template-columns: 1fr;
			gap: 14px;
		}
	}
</style>
