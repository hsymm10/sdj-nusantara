<!-- Section 06: Komitmen Nyata untuk Dampak yang Terukur (Sesuai Mockup GAMBAR 2) -->
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

<section class="impact-edu-section">
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

		<!-- 4 Metric Cards -->
		<div class="impact-grid">
			{#each stats as item}
				<div class="impact-card" class:highlight={item.isHighlight}>
					<div class="impact-icon-box">
						{#if item.icon === 'users'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{:else if item.icon === 'calendar'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
								<line x1="16" y1="2" x2="16" y2="6"/>
								<line x1="8" y1="2" x2="8" y2="6"/>
								<line x1="3" y1="10" x2="21" y2="10"/>
							</svg>
						{:else if item.icon === 'grad'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
		background: #ffffff;
		padding: 48px 0 54px;
	}

	.impact-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.impact-header {
		text-align: center;
		margin-bottom: 34px;
	}

	.impact-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #079ead;
	}

	.impact-title {
		font-size: 23px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px;
		letter-spacing: -0.2px;
	}

	.impact-sub {
		font-size: 12px;
		color: #64748b;
		margin: 0;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
	}

	.impact-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		padding: 20px 18px;
		display: flex;
		align-items: center;
		gap: 14px;
		transition: transform 0.2s, box-shadow 0.2s;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
	}

	.impact-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
	}

	/* Card 1 is highlighted with solid teal */
	.impact-card.highlight {
		background: #079ead;
		border-color: #079ead;
		box-shadow: 0 8px 20px rgba(7, 158, 173, 0.25);
	}

	.impact-icon-box {
		width: 44px;
		height: 44px;
		border-radius: 8px;
		background: #f4f8fb;
		color: #079ead;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.impact-card.highlight .impact-icon-box {
		background: rgba(255, 255, 255, 0.2);
		color: #ffffff;
	}

	.impact-text-group {
		display: flex;
		flex-direction: column;
	}

	.impact-num {
		font-size: 20px;
		font-weight: 800;
		color: #082442;
		line-height: 1.1;
		margin-bottom: 3px;
	}

	.impact-card.highlight .impact-num {
		color: #ffffff;
	}

	.impact-label {
		font-size: 11px;
		font-weight: 600;
		color: #64748b;
		line-height: 1.3;
		white-space: pre-line;
	}

	.impact-card.highlight .impact-label {
		color: rgba(255, 255, 255, 0.9);
	}

	@media (max-width: 900px) {
		.impact-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.impact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
