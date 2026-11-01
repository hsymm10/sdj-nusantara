<script lang="ts">
	// ScholarshipFeatureOverlap.svelte - Faithful to design/beasiswa.png
	const features = [
		{
			title: 'Informasi Terpercaya',
			icon: 'briefcase'
		},
		{
			title: 'Dalam & Luar Negeri',
			icon: 'globe'
		},
		{
			title: 'Beragam Jenjang Pendidikan',
			icon: 'document'
		},
		{
			title: 'Panduan & Pendampingan Profesional',
			icon: 'users'
		}
	];
</script>

<div class="sch-feature-overlap-wrap">
	<div class="sch-feature-container">
		<div class="feature-card">
			{#each features as item, idx}
				{#if idx > 0}
					<div class="v-divider"></div>
				{/if}

				<div class="feature-item">
					<div class="feature-icon">
						{#if item.icon === 'briefcase'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
							</svg>
						{:else if item.icon === 'globe'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<line x1="2" y1="12" x2="22" y2="12"></line>
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
							</svg>
						{:else if item.icon === 'document'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
								<polyline points="14 2 14 8 20 8"></polyline>
								<line x1="16" y1="13" x2="8" y2="13"></line>
								<line x1="16" y1="17" x2="8" y2="17"></line>
								<polyline points="10 9 9 9 8 9"></polyline>
							</svg>
						{:else}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						{/if}
					</div>

					<span class="feature-title">{item.title}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.sch-feature-overlap-wrap {
		position: relative;
		z-index: 10;
		margin-top: -30px;
		margin-bottom: 2.5rem;
	}

	.sch-feature-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.feature-card {
		background: #FFFFFF;
		border-radius: 14px;
		box-shadow: 0 8px 30px rgba(11, 39, 71, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.8);
		display: flex;
		align-items: center;
		padding: 1.15rem 1.5rem;
	}

	.feature-item {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0 0.85rem;
	}

	.feature-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.feature-title {
		font-size: 11px;
		font-weight: 700;
		color: #082442;
		line-height: 14px;
	}

	.v-divider {
		width: 1px;
		height: 36px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.feature-card {
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
		}
		.v-divider {
			display: none;
		}
		.feature-item {
			width: 100%;
		}
	}
</style>
