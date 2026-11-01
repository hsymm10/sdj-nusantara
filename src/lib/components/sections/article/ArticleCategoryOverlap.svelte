<script lang="ts">
	interface Props {
		selectedCategory: string;
		onSelectCategory: (cat: string) => void;
	}

	let { selectedCategory = 'Semua Artikel', onSelectCategory }: Props = $props();

	const categories = [
		{ id: 'Semua Artikel', label: 'Semua Artikel', icon: 'all' },
		{ id: 'Pendidikan', label: 'Pendidikan', icon: 'education' },
		{ id: 'Beasiswa', label: 'Beasiswa', icon: 'scholarship' },
		{ id: 'Pengembangan Talenta', label: 'Pengembangan Talenta', icon: 'talent' },
		{ id: 'Keterampilan Digital', label: 'Keterampilan Digital', icon: 'digital' },
		{ id: 'Kemitraan', label: 'Kemitraan', icon: 'partner' },
		{ id: 'Karier & Profesional', label: 'Karier & Profesional', icon: 'career' }
	];
</script>

<div class="category-overlap-wrapper" id="semua-artikel">
	<div class="category-bar">
		{#each categories as cat, index}
			{@const isActive = selectedCategory === cat.id}
			<button
				type="button"
				class="cat-btn {isActive ? 'active' : ''}"
				onclick={() => onSelectCategory(cat.id)}
			>
				<span class="cat-icon-wrap">
					{#if cat.icon === 'all'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
							<polyline points="14 2 14 8 20 8"></polyline>
							<line x1="16" y1="13" x2="8" y2="13"></line>
							<line x1="16" y1="17" x2="8" y2="17"></line>
							<line x1="10" y1="9" x2="8" y2="9"></line>
						</svg>
					{:else if cat.icon === 'education'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21V14h6v7"></path>
						</svg>
					{:else if cat.icon === 'scholarship'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
							<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
						</svg>
					{:else if cat.icon === 'talent'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="3"></circle>
							<circle cx="19" cy="5" r="2"></circle>
							<circle cx="5" cy="5" r="2"></circle>
							<circle cx="19" cy="19" r="2"></circle>
							<circle cx="5" cy="19" r="2"></circle>
							<line x1="12" y1="9" x2="12" y2="15"></line>
							<line x1="9" y1="12" x2="15" y2="12"></line>
						</svg>
					{:else if cat.icon === 'digital'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
							<line x1="8" y1="21" x2="16" y2="21"></line>
							<line x1="12" y1="17" x2="12" y2="21"></line>
						</svg>
					{:else if cat.icon === 'partner'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					{:else if cat.icon === 'career'}
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
							<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
						</svg>
					{/if}
				</span>
				<span class="cat-label">{cat.label}</span>
			</button>

			{#if index < categories.length - 1}
				<div class="divider"></div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.category-overlap-wrapper {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 1086px;
		margin: -36px auto 0;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.category-bar {
		background: #FFFFFF;
		border-radius: 14px;
		box-shadow: 0 8px 30px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.85);
		display: flex;
		align-items: center;
		padding: 6px;
		box-sizing: border-box;
		overflow-x: auto;
		scrollbar-width: none;
	}

	.category-bar::-webkit-scrollbar {
		display: none;
	}

	.cat-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		flex: 1;
		min-width: fit-content;
		padding: 10px 14px;
		background: transparent;
		border: none;
		border-radius: 10px;
		color: #082442;
		font-family: inherit;
		cursor: pointer;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.cat-btn:hover {
		background: #F1F5F9;
		color: #079EAD;
	}

	.cat-btn.active {
		background: #079EAD;
		color: #FFFFFF;
		box-shadow: 0 4px 12px rgba(7, 158, 173, 0.25);
	}

	.cat-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #16B6C1;
	}

	.cat-btn.active .cat-icon-wrap {
		color: #FFFFFF;
	}

	.cat-label {
		font-size: 11px;
		font-weight: 700;
	}

	.divider {
		width: 1px;
		height: 28px;
		background: #E2E8F0;
		margin: 0 4px;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.category-bar {
			justify-content: flex-start;
			padding: 8px;
		}

		.divider {
			display: none;
		}
	}
</style>
