<script lang="ts">
	// ScholarshipCategorySection.svelte - Faithful to design/beasiswa.png
	const categories = [
		{
			title: 'Beasiswa Pemerintah',
			sub: 'Dalam dan luar negeri',
			icon: 'gov'
		},
		{
			title: 'Beasiswa Universitas',
			sub: 'Langsung dari kampus dan institusi pendidikan',
			icon: 'univ'
		},
		{
			title: 'Beasiswa Lembaga Internasional',
			sub: 'Organisasi global dan multilateral',
			icon: 'intl'
		},
		{
			title: 'Beasiswa Swasta',
			sub: 'Perusahaan dan organisasi non-pemerintah',
			icon: 'private'
		},
		{
			title: 'Beasiswa Daerah',
			sub: 'Pemerintah provinsi, kabupaten, dan kota',
			icon: 'regional'
		}
	];
</script>

<section class="sch-category-section">
	<div class="sch-cat-container">
		<!-- Section Header -->
		<div class="cat-header">
			<div class="section-label">
				<span class="label-dash">—</span>
				<span class="label-text">Jenis Beasiswa</span>
			</div>
			<h2 class="section-title">Jelajahi Beasiswa Berdasarkan Kategori</h2>
			<p class="section-desc">Pilih kategori yang paling sesuai dengan tujuan dan minat Anda.</p>
		</div>

		<!-- 5 Cards Row -->
		<div class="cat-cards-grid">
			{#each categories as item}
				<div class="cat-card">
					<div class="cat-card-top">
						<div class="cat-icon-circle">
							{#if item.icon === 'gov'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"></path>
									<path d="M9 9v.01M9 13v.01M9 17v.01"></path>
								</svg>
							{:else if item.icon === 'univ'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
									<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
								</svg>
							{:else if item.icon === 'intl'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="2" y1="12" x2="22" y2="12"></line>
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
								</svg>
							{:else if item.icon === 'private'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
									<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
								</svg>
							{:else}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							{/if}
						</div>

						<div class="cat-text-wrap">
							<h4 class="cat-item-title">{item.title}</h4>
							<p class="cat-item-sub">{item.sub}</p>
						</div>

						<div class="cat-arrow-circle">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sch-category-section {
		background: #FFFFFF;
		padding: 2rem 0 3.5rem;
	}

	.sch-cat-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.cat-header {
		margin-bottom: 1.5rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 11px;
		font-weight: 700;
		margin-bottom: 0.4rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: 20px;
		line-height: 26px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.4rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11px;
		color: #64748B;
		margin: 0;
	}

	.cat-cards-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.75rem;
	}

	.cat-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		padding: 0.85rem 0.75rem;
		box-shadow: 0 3px 12px rgba(8, 36, 66, 0.04);
		transition: all 0.2s ease;
		cursor: pointer;
	}

	.cat-card:hover {
		transform: translateY(-2px);
		border-color: #00A6B2;
		box-shadow: 0 6px 18px rgba(0, 166, 178, 0.12);
	}

	.cat-card-top {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.cat-icon-circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.cat-text-wrap {
		flex: 1;
		min-width: 0;
	}

	.cat-item-title {
		font-size: 10px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 2px 0;
		line-height: 13px;
	}

	.cat-item-sub {
		font-size: 8px;
		line-height: 11px;
		color: #64748B;
		margin: 0;
	}

	.cat-arrow-circle {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid #CBD5E1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all 0.2s;
	}

	.cat-card:hover .cat-arrow-circle {
		border-color: #00A6B2;
		background: #00A6B2;
	}

	.cat-card:hover .cat-arrow-circle svg {
		stroke: #FFFFFF;
	}

	@media (max-width: 1024px) {
		.cat-cards-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 640px) {
		.cat-cards-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
