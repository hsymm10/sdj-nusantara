<!-- Section 08: Temukan Beasiswa yang Sesuai dengan Tujuan Anda (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	const categories = [
		{
			id: 'pemerintah',
			title: 'Beasiswa\nPemerintah',
			href: '/beasiswa?kategori=pemerintah',
			icon: 'gov'
		},
		{
			id: 'universitas',
			title: 'Beasiswa\nUniversitas',
			href: '/beasiswa?kategori=universitas',
			icon: 'uni'
		},
		{
			id: 'internasional',
			title: 'Beasiswa\nInternasional',
			href: '/beasiswa?kategori=internasional',
			icon: 'globe'
		},
		{
			id: 'swasta',
			title: 'Beasiswa\nSwasta',
			href: '/beasiswa?kategori=swasta',
			icon: 'company'
		},
		{
			id: 'daerah',
			title: 'Beasiswa\nDaerah',
			href: '/beasiswa?kategori=daerah',
			icon: 'pin'
		}
	];
</script>

<section class="scholarship-cat-section" id="akses-beasiswa">
	<div class="scholarship-cat-container">
		<!-- Section Header -->
		<div class="cat-header">
			<div class="cat-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Akses Beasiswa Terkurasi</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="cat-title">Temukan Beasiswa yang Sesuai dengan Tujuan Anda</h2>
			<p class="cat-sub">
				Berbagai pilihan beasiswa terverifikasi untuk mendukung studi Anda, baik di dalam maupun luar negeri.
			</p>
		</div>

		<!-- 5 Horizontal Pill Cards Grid -->
		<div class="cat-cards-grid">
			{#each categories as item}
				<a href={item.href} class="cat-card">
					<div class="cat-icon-wrap">
						{#if item.icon === 'gov'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3l9 5H3l9-5z"/>
							</svg>
						{:else if item.icon === 'uni'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else if item.icon === 'globe'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<circle cx="12" cy="12" r="10"/>
								<line x1="2" y1="12" x2="22" y2="12"/>
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
							</svg>
						{:else if item.icon === 'company'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="2" y="7" width="20" height="14" rx="2"/>
								<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
							</svg>
						{:else}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
								<circle cx="12" cy="10" r="3"/>
							</svg>
						{/if}
					</div>

					<span class="cat-label">{item.title}</span>

					<div class="cat-chevron" aria-hidden="true">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="9 18 15 12 9 6"/>
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.scholarship-cat-section {
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.scholarship-cat-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.cat-header {
		text-align: center;
		margin-bottom: 38px;
	}

	.cat-badge {
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

	.cat-title {
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.25;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
	}

	.cat-sub {
		font-size: 14px;
		color: #64748B;
		margin: 0 auto;
		max-width: 600px;
		line-height: 1.6;
	}

	/* 5 Cards Row */
	.cat-cards-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 18px;
	}

	.cat-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 16px 18px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		text-decoration: none;
		box-shadow: 0 3px 14px rgba(11, 41, 72, 0.04);
		transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s, border-color 0.2s;
		box-sizing: border-box;
	}

	.cat-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 22px rgba(8, 174, 187, 0.12);
		border-color: #08AEBB;
	}

	.cat-icon-wrap {
		width: 44px;
		height: 44px;
		border-radius: 10px;
		background: #EBF8FA;
		color: #08AEBB;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: transform 0.2s;
	}

	.cat-card:hover .cat-icon-wrap {
		transform: scale(1.06);
		background: #08AEBB;
		color: #FFFFFF;
	}

	.cat-label {
		flex: 1;
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.3;
		white-space: pre-line;
	}

	.cat-chevron {
		color: #94A3B8;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s, color 0.2s;
	}

	.cat-card:hover .cat-chevron {
		color: #08AEBB;
		transform: translateX(3px);
	}

	@media (max-width: 1024px) {
		.cat-cards-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 14px;
		}
	}

	@media (max-width: 768px) {
		.cat-cards-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.scholarship-cat-section {
			padding: 52px 0;
		}

		.scholarship-cat-container {
			padding: 0 20px;
		}

		.cat-cards-grid {
			grid-template-columns: 1fr;
			gap: 12px;
		}
	}
</style>
