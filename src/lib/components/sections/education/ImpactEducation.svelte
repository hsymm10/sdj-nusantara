<!-- Section 01: Komitmen Nyata untuk Dampak yang Terukur (Mockup GAMBAR 2 SDJNusantara) -->
<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const stats = $derived([
		{
			num: '200+',
			label: i18n.pick('Individu Pemetaan\nTalenta', 'Talent Mapping\nIndividuals'),
			icon: 'users',
			isHighlight: true
		},
		{
			num: '12',
			label: i18n.pick('Kegiatan Sosialisasi\nBeasiswa', 'Scholarship Outreach\nEvents'),
			icon: 'calendar',
			isHighlight: false
		},
		{
			num: '60',
			label: i18n.pick('Peserta Coaching\nIntensif', 'Intensive Coaching\nParticipants'),
			icon: 'grad',
			isHighlight: false
		},
		{
			num: '20+',
			label: i18n.pick('Mitra Strategis\nInstitusi', 'Strategic Institutional\nPartners'),
			icon: 'building',
			isHighlight: false
		}
	]);
</script>

<section class="impact-edu-section" id="dampak-nyata">
	<div class="impact-edu-container">
		<!-- Section Header -->
		<div class="impact-header">
			<div class="impact-badge">
				<span class="badge-text">{i18n.pick('Dampak Nyata', 'Real Impact')}</span>
			</div>
			<h2 class="impact-title">
				{i18n.pick('Komitmen Nyata untuk', 'Real Commitment to')} <span class="highlight-gold">{i18n.pick('Dampak yang Terukur', 'Measurable Impact')}</span>
			</h2>
			<p class="impact-sub">
				{i18n.pick(
					'SDJNusantara terus menghadirkan program pendidikan dan pengembangan talenta yang berdampak luas.',
					'SDJNusantara continuously delivers education and talent development programs with broad impact.'
				)}
			</p>
		</div>

		<!-- 4 Metric Cards Grid -->
		<div class="impact-grid">
			{#each stats as item}
				<div class="impact-card" class:highlight={item.isHighlight}>
					<div class="impact-icon-box">
						{#if item.icon === 'users'}
							<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{:else if item.icon === 'calendar'}
							<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="3" y="5" width="18" height="16" rx="3"/>
								<line x1="8" y1="2" x2="8" y2="6"/>
								<line x1="16" y1="2" x2="16" y2="6"/>
								<line x1="3" y1="10" x2="21" y2="10"/>
							</svg>
						{:else if item.icon === 'grad'}
							<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else}
							<!-- Building / Institution with central tower and side wings (Mockup GAMBAR 2) -->
							<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="3.5" y="10" width="4.5" height="11" rx="1"/>
								<rect x="16" y="10" width="4.5" height="11" rx="1"/>
								<rect x="8" y="4" width="8" height="17" rx="1.2"/>
								<line x1="12" y1="8" x2="12" y2="8.01"/>
							</svg>
						{/if}
					</div>

					{#if item.isHighlight}
						<div class="card-vdivider" aria-hidden="true"></div>
					{/if}

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
		padding: 68px 0 74px;
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.impact-edu-container {
		width: 78%;
		max-width: 1240px;
		margin: 0 auto;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	.impact-header {
		text-align: center;
		margin-bottom: 22px;
	}

	.impact-badge {
		display: inline-flex;
		align-items: center;
		margin-bottom: 6px;
	}

	.badge-text {
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.impact-title {
		font-size: clamp(23px, 2.1vw, 28px);
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 6px;
		letter-spacing: -0.015em;
		line-height: 1.25;
	}

	.highlight-gold {
		color: #FFB928;
	}

	.impact-sub {
		font-size: 13px;
		line-height: 1.5;
		color: #5A6A80;
		margin: 0 auto;
		max-width: 580px;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 18px;
	}

	.impact-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 16px 20px;
		min-height: 88px;
		display: flex;
		align-items: center;
		gap: 14px;
		position: relative;
		overflow: hidden;
		transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s;
		box-shadow: 0 3px 14px rgba(11, 41, 72, 0.04);
		box-sizing: border-box;
	}

	.impact-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(11, 41, 72, 0.08);
		border-color: #CBD5E1;
	}

	/* Card 1: Solid Turquoise with signature corner curves */
	.impact-card.highlight {
		background: #00A3B4;
		border-color: #00A3B4;
		box-shadow: 0 6px 20px rgba(0, 163, 180, 0.26);
	}

	.impact-card.highlight:hover {
		box-shadow: 0 10px 24px rgba(0, 163, 180, 0.36);
	}

	.impact-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 13px;
		background: #E6F7F8;
		color: #08A6B5;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		position: relative;
		z-index: 2;
	}

	.impact-card.highlight .impact-icon-box {
		background: rgba(255, 255, 255, 0.20);
		color: #FFFFFF;
	}

	.card-vdivider {
		width: 1px;
		height: 32px;
		background: rgba(255, 255, 255, 0.35);
		margin: 0 2px;
		flex-shrink: 0;
		position: relative;
		z-index: 2;
	}

	.impact-text-group {
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 2;
	}

	.impact-num {
		font-size: 26px;
		font-weight: 800;
		color: #0B2948;
		line-height: 1.1;
		margin-bottom: 2px;
		letter-spacing: -0.01em;
	}

	.impact-card.highlight .impact-num {
		color: #FFFFFF;
	}

	.impact-label {
		font-size: 12px;
		font-weight: 500;
		color: #5A6A80;
		line-height: 1.35;
		white-space: pre-line;
	}

	.impact-card.highlight .impact-label {
		color: rgba(255, 255, 255, 0.95);
	}

	@media (max-width: 1024px) {
		.impact-edu-container {
			width: 80%;
		}
	}

	@media (max-width: 860px) {
		.impact-edu-container {
			width: 90%;
		}

		.impact-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 14px;
		}

		.impact-edu-section {
			padding: 32px 0;
		}
	}

	@media (max-width: 540px) {
		.impact-edu-container {
			width: 92%;
		}

		.impact-grid {
			grid-template-columns: 1fr;
			gap: 10px;
		}

		.impact-card {
			min-height: 76px;
			padding: 12px 16px;
		}
	}
</style>
