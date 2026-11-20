<!-- Section 08: Temukan Beasiswa yang Sesuai dengan Tujuan Anda (Mockup Resmi SDJ Nusantara GAMBAR 2) -->
<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const categories = $derived([
		{
			id: 'pemerintah',
			title: i18n.pick('Beasiswa\nPemerintah', 'Government\nScholarships'),
			href: '/layanan/beasiswa?kategori=pemerintah',
			icon: 'grad',
			isHighlight: true
		},
		{
			id: 'universitas',
			title: i18n.pick('Beasiswa\nUniversitas', 'University\nScholarships'),
			href: '/layanan/beasiswa?kategori=universitas',
			icon: 'grad',
			isHighlight: false
		},
		{
			id: 'internasional',
			title: i18n.pick('Beasiswa\nInternasional', 'International\nScholarships'),
			href: '/layanan/beasiswa?kategori=internasional',
			icon: 'globe',
			isHighlight: false
		},
		{
			id: 'swasta',
			title: i18n.pick('Beasiswa\nSwasta', 'Private\nScholarships'),
			href: '/layanan/beasiswa?kategori=swasta',
			icon: 'company',
			isHighlight: false
		},
		{
			id: 'daerah',
			title: i18n.pick('Beasiswa\nDaerah', 'Regional\nScholarships'),
			href: '/layanan/beasiswa?kategori=daerah',
			icon: 'pin',
			isHighlight: false
		}
	]);
</script>

<section class="scholarship-cat-section" id="akses-beasiswa">
	<div class="scholarship-cat-container">
		<!-- Section Header -->
		<div class="cat-header">
			<div class="cat-badge">
				<span class="badge-text">{i18n.pick('Akses Beasiswa Terpercaya', 'Curated Scholarship Access')}</span>
			</div>
			<h2 class="cat-title">
				{i18n.pick('Temukan Beasiswa yang Sesuai dengan', 'Find Scholarships Matched to')} <span class="highlight-gold">{i18n.pick('Tujuan Anda', 'Your Goals')}</span>
			</h2>
			<p class="cat-sub">
				{i18n.pick(
					'Berbagai pilihan beasiswa terverifikasi untuk mendukung studi Anda, baik di dalam maupun luar negeri.',
					'Verified scholarship options to support your studies domestically and abroad.'
				)}
			</p>
		</div>

		<!-- 5 Horizontal Pill Cards Grid -->
		<div class="cat-cards-grid">
			{#each categories as item}
				<a href={item.href} class="cat-card" class:highlight={item.isHighlight}>
					<div class="cat-icon-wrap">
						{#if item.icon === 'grad'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else if item.icon === 'globe'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<circle cx="12" cy="12" r="10"/>
								<line x1="2" y1="12" x2="22" y2="12"/>
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
							</svg>
						{:else if item.icon === 'company'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="2" y="7" width="20" height="14" rx="2"/>
								<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
							</svg>
						{:else}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
								<circle cx="12" cy="10" r="3"/>
							</svg>
						{/if}
					</div>

					<span class="cat-label">{item.title}</span>

					<div class="cat-chevron" aria-hidden="true">
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="9 18 15 12 9 6"/>
						</svg>
					</div>

					{#if item.isHighlight}
						<!-- Corner ribbons for Card 1 (Mockup GAMBAR 2) -->
						<svg class="card-corner-ribbon" viewBox="0 0 70 45" fill="none" preserveAspectRatio="none" aria-hidden="true">
							<path d="M0 45 C20 42 45 32 70 8 V45 H0 Z" fill="#046775"/>
							<path d="M15 45 C35 43 55 35 70 18 V45 H15 Z" fill="#00B8C8"/>
							<path d="M35 45 C50 44 62 38 70 28 V45 H35 Z" fill="#FFB928"/>
						</svg>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.scholarship-cat-section {
		background: #FFFFFF;
		padding: 68px 0 74px;
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.scholarship-cat-container {
		width: 86%;
		max-width: 1280px;
		margin: 0 auto;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	.cat-header {
		text-align: center;
		margin-bottom: 32px;
	}

	.cat-badge {
		display: inline-flex;
		align-items: center;
		margin-bottom: 8px;
	}

	.badge-text {
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.cat-title {
		font-size: clamp(26px, 2.5vw, 34px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.3;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB323;
	}

	.cat-sub {
		font-size: 15.5px;
		color: #5A6A80;
		margin: 0 auto;
		max-width: 660px;
		line-height: 1.6;
	}

	/* 5 Cards Row */
	.cat-cards-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 16px;
	}

	.cat-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 13px 15px;
		min-height: 68px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(11, 41, 72, 0.04);
		transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s, border-color 0.2s;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}

	.cat-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 18px rgba(8, 166, 181, 0.12);
		border-color: #CBD5E1;
	}

	/* Card 1 Highlight (Solid Teal SDJ Nusantara) */
	.cat-card.highlight {
		background: #00A3B4;
		border-color: #00A3B4;
		box-shadow: 0 6px 18px rgba(0, 163, 180, 0.26);
	}

	.cat-card.highlight:hover {
		box-shadow: 0 10px 22px rgba(0, 163, 180, 0.36);
	}

	.cat-icon-wrap {
		width: 40px;
		height: 40px;
		border-radius: 11px;
		background: #E6F7F8;
		color: #08A6B5;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		position: relative;
		z-index: 2;
	}

	.cat-card.highlight .cat-icon-wrap {
		background: rgba(255, 255, 255, 0.20);
		color: #FFFFFF;
	}

	.cat-label {
		flex: 1;
		min-width: 0;
		font-size: 14.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		white-space: pre-line;
		position: relative;
		z-index: 2;
	}

	.cat-card.highlight .cat-label {
		color: #FFFFFF;
	}

	.cat-chevron {
		color: #0B2948;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		position: relative;
		z-index: 2;
		transition: transform 0.2s;
	}

	.cat-card.highlight .cat-chevron {
		color: #FFFFFF;
	}

	.cat-card:hover .cat-chevron {
		transform: translateX(2px);
	}

	.card-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 64px;
		height: 42px;
		pointer-events: none;
		z-index: 1;
	}

	@media (max-width: 960px) {
		.scholarship-cat-container {
			width: 86%;
		}

		.cat-cards-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 12px;
		}
	}

	@media (max-width: 768px) {
		.scholarship-cat-container {
			width: 90%;
		}

		.cat-cards-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.scholarship-cat-section {
			padding: 34px 0 16px;
		}

		.scholarship-cat-container {
			width: 92%;
		}

		.cat-cards-grid {
			grid-template-columns: 1fr;
			gap: 10px;
		}
	}
</style>
