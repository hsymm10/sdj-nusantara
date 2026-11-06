<!-- Section 08: Akses Beasiswa Terkurasi — 5 Kapsul Horizontal (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	const categories = [
		{
			name: 'Beasiswa Pemerintah',
			href: '/beasiswa?kategori=pemerintah',
			icon: 'gov'
		},
		{
			name: 'Beasiswa Universitas',
			href: '/beasiswa?kategori=universitas',
			icon: 'univ'
		},
		{
			name: 'Beasiswa Internasional',
			href: '/beasiswa?kategori=internasional',
			icon: 'intl'
		},
		{
			name: 'Beasiswa Swasta',
			href: '/beasiswa?kategori=swasta',
			icon: 'corp'
		},
		{
			name: 'Beasiswa Daerah',
			href: '/beasiswa?kategori=daerah',
			icon: 'region'
		}
	];
</script>

<section class="scholarship-cat-section">
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

		<!-- 5 Horizontal Capsules Row -->
		<div class="cat-row">
			{#each categories as cat}
				<a href={cat.href} class="cat-card">
					<div class="cat-icon-circle">
						{#if cat.icon === 'gov'}
							<!-- Government/Building icon -->
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="3" y1="21" x2="21" y2="21"/>
								<line x1="3" y1="10" x2="21" y2="10"/>
								<polyline points="5 10 12 3 19 10"/>
								<line x1="6" y1="14" x2="6" y2="18"/>
								<line x1="10" y1="14" x2="10" y2="18"/>
								<line x1="14" y1="14" x2="14" y2="18"/>
								<line x1="18" y1="14" x2="18" y2="18"/>
							</svg>
						{:else if cat.icon === 'univ'}
							<!-- Graduation cap -->
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else if cat.icon === 'intl'}
							<!-- Globe -->
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"/>
								<line x1="2" y1="12" x2="22" y2="12"/>
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
							</svg>
						{:else if cat.icon === 'corp'}
							<!-- Briefcase / Company -->
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
							</svg>
						{:else}
							<!-- Map Pin / Region -->
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
								<circle cx="12" cy="10" r="3"/>
							</svg>
						{/if}
					</div>

					<span class="cat-label">{cat.name}</span>

					<div class="cat-arrow">
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
		background: #ffffff;
		padding: 38px 0 46px;
	}

	.scholarship-cat-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.cat-header {
		text-align: center;
		margin-bottom: 28px;
	}

	.cat-badge {
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

	.cat-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px;
		letter-spacing: -0.2px;
	}

	.cat-sub {
		font-size: 12px;
		color: #64748b;
		margin: 0;
	}

	/* 5 Horizontal Capsules */
	.cat-row {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 14px;
	}

	.cat-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		padding: 10px 12px;
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
	}

	.cat-card:hover {
		transform: translateY(-2px);
		border-color: #079ead;
		box-shadow: 0 6px 14px rgba(7, 158, 173, 0.12);
	}

	.cat-icon-circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #e6f6f8;
		color: #079ead;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.cat-label {
		font-size: 11px;
		font-weight: 700;
		color: #082442;
		line-height: 1.25;
		flex: 1;
	}

	.cat-arrow {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		color: #94a3b8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: color 0.2s, transform 0.2s;
	}

	.cat-card:hover .cat-arrow {
		color: #079ead;
		transform: translateX(2px);
	}

	@media (max-width: 992px) {
		.cat-row {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 600px) {
		.cat-row {
			grid-template-columns: 1fr;
		}
	}
</style>
