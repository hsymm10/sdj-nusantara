<script lang="ts">
	interface Props {
		selectedCategory: string;
		onSelectCategory: (cat: string) => void;
	}

	let { selectedCategory = 'Semua Artikel', onSelectCategory }: Props = $props();

	const categories = [
		{ id: 'Semua Artikel', label: 'Semua Artikel', icon: 'all', line1: 'Semua', line2: 'Artikel' },
		{ id: 'Pendidikan', label: 'Pendidikan', icon: 'education', line1: 'Pendidikan', line2: '' },
		{ id: 'Beasiswa', label: 'Beasiswa', icon: 'scholarship', line1: 'Beasiswa', line2: '' },
		{ id: 'Pengembangan Talenta', label: 'Pengembangan Talenta', icon: 'talent', line1: 'Pengembangan', line2: 'Talenta' },
		{ id: 'Keterampilan Digital', label: 'Keterampilan Digital', icon: 'digital', line1: 'Keterampilan', line2: 'Digital' },
		{ id: 'Kemitraan', label: 'Kemitraan', icon: 'partner', line1: 'Kemitraan', line2: '' },
		{ id: 'Karier & Profesional', label: 'Karier & Profesional', icon: 'career', line1: 'Karier &', line2: 'Profesional' }
	];
</script>

<div class="category-overlap-wrapper" id="semua-artikel">
	<div class="category-bar">
		{#each categories as cat, index}
			{@const isActive = selectedCategory === cat.id}
			<button
				type="button"
				class="cat-tile {isActive ? 'active' : ''} {cat.id === 'Semua Artikel' ? 'tile-all' : ''}"
				onclick={() => onSelectCategory(cat.id)}
			>
				<div class="cat-icon-box">
					{#if cat.icon === 'all'}
						<!-- Document icon -->
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
							<polyline points="14 2 14 8 20 8"></polyline>
							<line x1="16" y1="13" x2="8" y2="13"></line>
							<line x1="16" y1="17" x2="8" y2="17"></line>
							<line x1="10" y1="9" x2="8" y2="9"></line>
						</svg>
					{:else if cat.icon === 'education'}
						<!-- School / Building icon -->
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21V14h6v7"></path>
						</svg>
					{:else if cat.icon === 'scholarship'}
						<!-- Graduation cap icon -->
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
						</svg>
					{:else if cat.icon === 'talent'}
						<!-- Connected nodes / talent icon -->
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="3"></circle>
							<circle cx="19" cy="5" r="2"></circle>
							<circle cx="5" cy="5" r="2"></circle>
							<circle cx="19" cy="19" r="2"></circle>
							<circle cx="5" cy="19" r="2"></circle>
							<line x1="12" y1="9" x2="12" y2="15"></line>
							<line x1="9" y1="12" x2="15" y2="12"></line>
						</svg>
					{:else if cat.icon === 'digital'}
						<!-- Monitor / Digital icon -->
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
							<line x1="8" y1="21" x2="16" y2="21"></line>
							<line x1="12" y1="17" x2="12" y2="21"></line>
						</svg>
					{:else if cat.icon === 'partner'}
						<!-- People group / Partnership icon -->
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					{:else if cat.icon === 'career'}
						<!-- Office building / Career icon -->
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
							<line x1="9" y1="6" x2="9" y2="6.01"></line>
							<line x1="15" y1="6" x2="15" y2="6.01"></line>
							<line x1="9" y1="10" x2="9" y2="10.01"></line>
							<line x1="15" y1="10" x2="15" y2="10.01"></line>
							<line x1="9" y1="14" x2="9" y2="14.01"></line>
							<line x1="15" y1="14" x2="15" y2="14.01"></line>
							<path d="M9 18h6"></path>
						</svg>
					{/if}
				</div>

				<div class="cat-label-box">
					{#if cat.id === 'Semua Artikel'}
						<span class="cat-single-label">Semua Artikel</span>
					{:else}
						<span class="cat-label-line">{cat.line1}</span>
						{#if cat.line2}
							<span class="cat-label-line">{cat.line2}</span>
						{/if}
					{/if}
				</div>
			</button>

			{#if index < categories.length - 1}
				<div class="col-divider" aria-hidden="true"></div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.category-overlap-wrapper {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 1425px; /* x ±57→1482 on 1536 */
		margin: -14px auto 0; /* Overlap hero ≤ 14px */
		padding: 0;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.category-overlap-wrapper {
			max-width: 1500px;
		}
	}

	/* Card: Height ±100px, radius ±21px, soft shadow */
	.category-bar {
		background: #FFFFFF;
		border-radius: 21px;
		height: 100px;
		box-shadow: 0 8px 30px rgba(11, 39, 71, 0.08);
		border: 1px solid #E2E8F0;
		display: flex;
		align-items: center;
		padding: 10px 14px;
		box-sizing: border-box;
	}

	.cat-tile {
		flex: 1;
		min-width: 0;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 8px 10px;
		background: transparent;
		border: none;
		border-radius: 14px;
		color: #082442;
		cursor: pointer;
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.cat-tile:hover {
		background: #F8FAFC;
	}

	/* Active "Semua Artikel": filled teal block (#16B6C1→#079EAD, radius ±14px) with white doc icon */
	.cat-tile.tile-all.active {
		background: linear-gradient(135deg, #16B6C1 0%, #079EAD 100%);
		color: #FFFFFF;
		box-shadow: 0 4px 14px rgba(7, 158, 173, 0.28);
	}

	.cat-tile.tile-all.active .cat-icon-box {
		color: #FFFFFF;
	}

	.cat-tile.tile-all.active .cat-single-label {
		color: #FFFFFF;
		font-weight: 700;
	}

	/* Active for others */
	.cat-tile.active:not(.tile-all) {
		background: rgba(22, 182, 193, 0.1);
	}

	.cat-icon-box {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		color: #00A6B2;
		width: 32px;
		height: 32px;
	}

	.cat-label-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		line-height: 1.25;
	}

	.cat-single-label {
		font-size: 14px;
		font-weight: 700;
		color: #082442;
		white-space: nowrap;
	}

	.cat-label-line {
		font-size: 13.5px;
		font-weight: 600;
		color: #082442;
		white-space: nowrap;
	}

	.col-divider {
		width: 1px;
		height: 48px;
		background: #F1F5F9;
		margin: 0 4px;
		flex-shrink: 0;
	}

	@media (max-width: 1100px) {
		.category-overlap-wrapper {
			padding: 0 1.5rem;
		}
		.category-bar {
			height: auto;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 8px;
			padding: 12px;
		}
		.col-divider {
			display: none;
		}
		.cat-tile {
			height: 60px;
		}
	}

	@media (max-width: 640px) {
		.category-bar {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
