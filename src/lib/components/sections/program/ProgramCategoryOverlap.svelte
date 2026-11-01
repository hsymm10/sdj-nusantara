<script lang="ts">
	interface Props {
		selectedCategory?: string;
		onSelect?: (cat: string) => void;
	}

	let { selectedCategory = 'Persiapan Beasiswa', onSelect }: Props = $props();

	const categories = [
		{ id: 'Persiapan Beasiswa', label: 'Persiapan Beasiswa', icon: 'mortarboard' },
		{ id: 'Manajemen Talenta', label: 'Manajemen Talenta', icon: 'users' },
		{ id: 'Keterampilan Digital', label: 'Keterampilan Digital', icon: 'monitor' },
		{ id: 'Kolaborasi Kelembagaan', label: 'Kolaborasi Kelembagaan', icon: 'building' },
		{ id: 'Pelatihan Khusus', label: 'Pelatihan Khusus', icon: 'list' }
	];

	function select(cat: string) {
		if (onSelect) onSelect(cat);
	}
</script>

<div class="category-overlap-wrap">
	<div class="category-overlap-container">
		<div class="category-card">
			{#each categories as cat, idx}
				{#if idx > 0}
					<div class="cat-vdivider"></div>
				{/if}

				<button
					type="button"
					class="cat-item {selectedCategory === cat.id ? 'active-teal' : ''}"
					onclick={() => select(cat.id)}
				>
					<div class="cat-icon-wrap">
						{#if cat.icon === 'mortarboard'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
								<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
							</svg>
						{:else if cat.icon === 'users'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						{:else if cat.icon === 'monitor'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								<line x1="8" y1="21" x2="16" y2="21"></line>
								<line x1="12" y1="17" x2="12" y2="21"></line>
							</svg>
						{:else if cat.icon === 'building'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"></path>
								<path d="M9 9v.01M9 13v.01M9 17v.01"></path>
							</svg>
						{:else}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="8" y1="6" x2="21" y2="6"></line>
								<line x1="8" y1="12" x2="21" y2="12"></line>
								<line x1="8" y1="18" x2="21" y2="18"></line>
								<line x1="3" y1="6" x2="3.01" y2="6"></line>
								<line x1="3" y1="12" x2="3.01" y2="12"></line>
								<line x1="3" y1="18" x2="3.01" y2="18"></line>
							</svg>
						{/if}
					</div>

					<span class="cat-label">{cat.label}</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.category-overlap-wrap {
		position: relative;
		z-index: 10;
		margin-top: -32px;
		margin-bottom: 2rem;
	}

	.category-overlap-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.category-card {
		background: #FFFFFF;
		border-radius: 14px;
		box-shadow: 0 8px 30px rgba(11, 39, 71, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.8);
		display: flex;
		align-items: center;
		padding: 6px;
	}

	.cat-item {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 0.65rem 1rem;
		border-radius: 10px;
		border: none;
		background: transparent;
		cursor: pointer;
		color: #1E293B;
		transition: all 0.2s;
		text-align: left;
	}

	.cat-item:hover {
		background: #F8FAFC;
	}

	.cat-item.active-teal {
		background: #00A6B2;
		color: #FFFFFF;
		box-shadow: 0 4px 14px rgba(0, 166, 178, 0.35);
	}

	.cat-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #00A6B2;
		flex-shrink: 0;
	}

	.active-teal .cat-icon-wrap {
		color: #FFFFFF;
	}

	.cat-label {
		font-size: 11px;
		font-weight: 700;
		line-height: 14px;
	}

	.cat-vdivider {
		width: 1px;
		height: 36px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.category-card {
			flex-direction: column;
			gap: 0.5rem;
		}
		.cat-vdivider {
			display: none;
		}
		.cat-item {
			width: 100%;
		}
	}
</style>
