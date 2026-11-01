<script lang="ts">
	// ProgramCategoryOverlap.svelte - Replikasi presisi sesuai design/program.png
	interface Props {
		selectedCategory?: string;
		onSelect?: (cat: string) => void;
	}

	let { selectedCategory = 'Persiapan Beasiswa', onSelect }: Props = $props();

	const categories = [
		{
			id: 'Persiapan Beasiswa',
			lines: ['Persiapan', 'Beasiswa'],
			icon: 'mortarboard'
		},
		{
			id: 'Manajemen Talenta',
			lines: ['Manajemen', 'Talenta'],
			icon: 'users'
		},
		{
			id: 'Keterampilan Digital',
			lines: ['Keterampilan', 'Digital'],
			icon: 'monitor'
		},
		{
			id: 'Kolaborasi Kelembagaan',
			lines: ['Kolaborasi', 'Kelembagaan'],
			icon: 'building'
		},
		{
			id: 'Pelatihan Khusus',
			lines: ['Pelatihan', 'Khusus'],
			icon: 'list'
		}
	];

	function select(cat: string) {
		if (onSelect) onSelect(cat);
	}
</script>

<div class="category-overlap-wrap">
	<div class="category-overlap-container">
		<div class="category-card">
			{#each categories as cat, idx}
				<button
					type="button"
					class="cat-item {selectedCategory === cat.id ? 'active-teal-pill' : ''}"
					onclick={() => select(cat.id)}
				>
					<div class="cat-icon-col">
						{#if cat.icon === 'mortarboard'}
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
								<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
							</svg>
						{:else if cat.icon === 'users'}
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						{:else if cat.icon === 'monitor'}
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								<line x1="8" y1="21" x2="16" y2="21"></line>
								<line x1="12" y1="17" x2="12" y2="21"></line>
							</svg>
						{:else if cat.icon === 'building'}
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"></path>
								<path d="M9 9v.01M9 13v.01M9 17v.01"></path>
							</svg>
						{:else}
							<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
								<line x1="8" y1="6" x2="21" y2="6"></line>
								<line x1="8" y1="12" x2="21" y2="12"></line>
								<line x1="8" y1="18" x2="21" y2="18"></line>
								<line x1="3" y1="6" x2="3.01" y2="6"></line>
								<line x1="3" y1="12" x2="3.01" y2="12"></line>
								<line x1="3" y1="18" x2="3.01" y2="18"></line>
							</svg>
						{/if}
					</div>

					<div class="cat-text-col">
						<span class="cat-line">{cat.lines[0]}</span>
						<span class="cat-line">{cat.lines[1]}</span>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.category-overlap-wrap {
		position: relative;
		z-index: 10;
		margin-top: -10px;
		margin-bottom: 1.25rem;
		width: 100%;
	}

	.category-overlap-container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.category-overlap-container {
			max-width: 1500px;
		}
	}

	.category-card {
		background: #FFFFFF;
		height: 111px;
		border-radius: 27px;
		box-shadow: 0 10px 32px rgba(11, 39, 71, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.9);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-items: center;
		padding: 10px 14px;
		box-sizing: border-box;
	}

	.cat-item {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		height: 85px;
		border-radius: 16px;
		border: none;
		background: transparent;
		cursor: pointer;
		padding: 0 12px;
		transition: all 0.2s ease;
		box-sizing: border-box;
		text-align: left;
	}

	.cat-item:not(:last-child):not(.active-teal-pill)::after {
		content: '';
		position: absolute;
		right: 0;
		top: 25%;
		height: 50%;
		width: 1px;
		background: #E2E8F0;
	}

	.cat-item:hover:not(.active-teal-pill) {
		background: #F8FAFC;
	}

	/* Kolom aktif teal terisi #16B6C1→#079EAD */
	.cat-item.active-teal-pill {
		background: linear-gradient(135deg, #16B6C1 0%, #079EAD 100%);
		box-shadow: 0 6px 18px rgba(7, 158, 173, 0.35);
		color: #FFFFFF;
	}

	.cat-icon-col {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.cat-item.active-teal-pill .cat-icon-col {
		color: #FFFFFF;
	}

	.cat-text-col {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.cat-line {
		font-size: 15px;
		font-weight: 500;
		line-height: 1.25;
		color: #082442;
		white-space: nowrap;
	}

	.cat-item.active-teal-pill .cat-line {
		color: #FFFFFF;
		font-weight: 600;
	}



	@media (max-width: 1099px) {
		.category-card {
			height: auto;
			grid-template-columns: repeat(3, 1fr);
			gap: 8px;
			padding: 12px;
		}
		.cat-item {
			height: 70px;
		}
	}

	@media (max-width: 767px) {
		.category-card {
			grid-template-columns: 1fr;
			border-radius: 16px;
			padding: 8px;
		}

		.cat-item {
			height: 54px;
			justify-content: flex-start;
			padding: 0 16px;
		}

		.cat-icon-col svg {
			width: 28px;
			height: 28px;
		}

		.cat-text-col {
			flex-direction: row;
			gap: 6px;
		}

		.cat-line {
			font-size: 14px;
		}
	}
</style>
