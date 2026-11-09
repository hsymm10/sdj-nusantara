<!-- Section 01: Komitmen Nyata untuk Dampak yang Terukur (Mockup GAMBAR 2 SDJNusantara) -->
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
	<!-- Atmospheric background geometric curves from Mockup GAMBAR 2 -->
	<div class="impact-bg-decor" aria-hidden="true">
		<!-- Top-left geometric cyan swoosh curve (Mockup GAMBAR 2) -->
		<svg class="decor-swoosh-left" viewBox="0 0 320 240" fill="none" preserveAspectRatio="none">
			<!-- Layer 1: Very pale soft cyan wide background arc -->
			<path d="M0 0 L220 0 C160 55 90 120 0 170 Z" fill="url(#teal-pale-layer)" />
			<!-- Layer 2: Main sweeping ribbon wave with stronger teal gradient -->
			<path d="M260 0 C190 50 110 110 0 145 L0 205 C95 155 180 90 220 0 Z" fill="url(#teal-main-ribbon)" />
			<!-- Layer 3: Accent crest line along upper curve -->
			<path d="M260 0 C190 50 110 110 0 145" stroke="url(#teal-crest-stroke)" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
			<defs>
				<linearGradient id="teal-pale-layer" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#C2F1F5" stop-opacity="0.5"/>
					<stop offset="70%" stop-color="#E2F9FB" stop-opacity="0.25"/>
					<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
				</linearGradient>
				<linearGradient id="teal-main-ribbon" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#08A6B5" stop-opacity="0.32"/>
					<stop offset="50%" stop-color="#00B7C7" stop-opacity="0.22"/>
					<stop offset="100%" stop-color="#5FE3EC" stop-opacity="0.08"/>
				</linearGradient>
				<linearGradient id="teal-crest-stroke" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#08A6B5" stop-opacity="0.5"/>
					<stop offset="100%" stop-color="#00B7C7" stop-opacity="0.1"/>
				</linearGradient>
			</defs>
		</svg>

		<!-- Bottom-right geometric yellow/amber swoosh curve (Mockup GAMBAR 2) -->
		<svg class="decor-swoosh-right" viewBox="0 0 340 200" fill="none" preserveAspectRatio="none">
			<!-- Layer 1: Wider pale yellow underlayer -->
			<path d="M0 200 C110 180 200 135 340 95 L340 200 Z" fill="url(#gold-pale-layer)" />
			<!-- Layer 2: Main flowing rich gold ribbon -->
			<path d="M40 200 C140 185 230 145 340 120 L340 200 Z" fill="url(#gold-main-ribbon)" />
			<!-- Layer 3: Accent crest line along upper curve -->
			<path d="M0 200 C110 180 200 135 340 95" stroke="url(#gold-crest-stroke)" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
			<defs>
				<linearGradient id="gold-pale-layer" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFCE52" stop-opacity="0.45"/>
					<stop offset="60%" stop-color="#FFE399" stop-opacity="0.22"/>
					<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
				</linearGradient>
				<linearGradient id="gold-main-ribbon" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFB928" stop-opacity="0.75"/>
					<stop offset="50%" stop-color="#FFC84C" stop-opacity="0.50"/>
					<stop offset="100%" stop-color="#FFEBB8" stop-opacity="0.10"/>
				</linearGradient>
				<linearGradient id="gold-crest-stroke" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFB928" stop-opacity="0.6"/>
					<stop offset="100%" stop-color="#FFE399" stop-opacity="0.1"/>
				</linearGradient>
			</defs>
		</svg>
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

					{#if item.isHighlight}
						<!-- Card 1 corner decoration (Mockup GAMBAR 2): Dark teal shadow wave + Bright teal band + Gold corner arc -->
						<svg class="card-corner-ribbon" viewBox="0 0 120 74" fill="none" preserveAspectRatio="none" aria-hidden="true">
							<!-- 1. Dark teal curved wave -->
							<path d="M0 74 C35 70 75 52 120 12 V74 H0 Z" fill="#046775"/>
							<!-- 2. Bright cyan/teal wave -->
							<path d="M25 74 C58 72 92 56 120 28 V74 H25 Z" fill="#00B8C8"/>
							<!-- 3. Signature golden yellow corner arc -->
							<path d="M55 74 C80 73 104 62 120 44 V74 H55 Z" fill="#FFB928"/>
						</svg>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.impact-edu-section {
		background: linear-gradient(180deg, #F8FDFF 0%, #FFFFFF 60%, #FCFDFF 100%);
		padding: 34px 0 38px;
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Background subtle decorative geometric curves from GAMBAR 2 */
	.impact-bg-decor {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	.decor-swoosh-left {
		position: absolute;
		top: 0;
		left: 0;
		width: 320px;
		height: 240px;
		pointer-events: none;
	}

	.decor-swoosh-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 340px;
		height: 190px;
		pointer-events: none;
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
		gap: 8px;
		margin-bottom: 6px;
	}

	.badge-dash {
		display: inline-block;
		width: 22px;
		height: 2px;
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

	.card-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 105px;
		height: 66px;
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
