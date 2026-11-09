<!-- Section 01: Komitmen Nyata untuk Dampak yang Terukur (Mockup Final SDJNusantara) -->
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
			icon: 'building',
			isHighlight: false
		}
	];
</script>

<section class="impact-edu-section" id="dampak-nyata">
	<!-- Atmospheric background gradient curves from mockup -->
	<div class="impact-bg-decor" aria-hidden="true">
		<div class="decor-curve-left"></div>
		<div class="decor-curve-right"></div>
	</div>

	<div class="impact-edu-container">
		<!-- Section Header -->
		<div class="impact-header">
			<div class="impact-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Dampak Nyata</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="impact-title">
				Komitmen Nyata untuk <span class="highlight-gold">Dampak yang Terukur</span>
			</h2>
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
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{:else if item.icon === 'calendar'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
								<line x1="16" y1="2" x2="16" y2="6"/>
								<line x1="8" y1="2" x2="8" y2="6"/>
								<line x1="3" y1="10" x2="21" y2="10"/>
							</svg>
						{:else if item.icon === 'grad'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else}
							<!-- Building / Institution with columns and door -->
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M3 21h18"/>
								<path d="M5 21V9l7-5 7 5v12"/>
								<path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
								<path d="M9 10h.01M15 10h.01"/>
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

					{#if item.isHighlight}
						<!-- Corner swoosh ribbons on bottom-right of first card (Mockup SDJNusantara) -->
						<svg class="card-corner-ribbon" viewBox="0 0 80 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
							<path d="M0 50 C25 48 55 36 80 12 V50 H0 Z" fill="#FFB928" />
							<path d="M20 50 C40 48 62 38 80 26 V50 H20 Z" fill="#00B7C7" />
						</svg>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.impact-edu-section {
		background: #FFFFFF;
		padding: 72px 0 68px;
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Background subtle decorative curves from mockup */
	.impact-bg-decor {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	.decor-curve-left {
		position: absolute;
		top: -10%;
		left: -8%;
		width: 420px;
		height: 380px;
		background: radial-gradient(ellipse at center, rgba(8, 166, 181, 0.16) 0%, rgba(8, 166, 181, 0.04) 50%, transparent 70%);
		border-radius: 50%;
		filter: blur(20px);
	}

	.decor-curve-right {
		position: absolute;
		bottom: -15%;
		right: -6%;
		width: 460px;
		height: 360px;
		background: radial-gradient(ellipse at center, rgba(255, 185, 40, 0.18) 0%, rgba(255, 185, 40, 0.05) 50%, transparent 70%);
		border-radius: 50%;
		filter: blur(24px);
	}

	.impact-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
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
		background: #08A6B5;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 13px;
		font-weight: 700;
		color: #08A6B5;
		letter-spacing: 0.02em;
	}

	.impact-title {
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
		line-height: 1.25;
	}

	.highlight-gold {
		color: #FFB928;
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
		gap: 22px;
	}

	.impact-card {
		background: #FFFFFF;
		border: 1px solid #DCE7EF;
		border-radius: 16px;
		padding: 20px 22px;
		min-height: 98px;
		display: flex;
		align-items: center;
		gap: 14px;
		position: relative;
		overflow: hidden;
		transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s;
		box-shadow: 0 4px 18px rgba(11, 41, 72, 0.04);
		box-sizing: border-box;
	}

	.impact-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 24px rgba(11, 41, 72, 0.08);
		border-color: #CBD5E1;
	}

	/* Card 1: Solid Turquoise with signature corner curves */
	.impact-card.highlight {
		background: #08A6B5;
		border-color: #08A6B5;
		box-shadow: 0 8px 24px rgba(8, 166, 181, 0.28);
	}

	.impact-card.highlight:hover {
		box-shadow: 0 12px 28px rgba(8, 166, 181, 0.38);
	}

	.impact-icon-box {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: #E8F7F8;
		color: #08A6B5;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.impact-card.highlight .impact-icon-box {
		background: rgba(255, 255, 255, 0.22);
		color: #FFFFFF;
	}

	.card-vdivider {
		width: 1px;
		height: 38px;
		background: rgba(255, 255, 255, 0.35);
		margin: 0 2px;
		flex-shrink: 0;
	}

	.card-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 80px;
		height: 50px;
		pointer-events: none;
		z-index: 1;
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
		line-height: 1.15;
		margin-bottom: 4px;
		letter-spacing: -0.01em;
	}

	.impact-card.highlight .impact-num {
		color: #FFFFFF;
	}

	.impact-label {
		font-size: 12px;
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
			padding: 48px 0;
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
