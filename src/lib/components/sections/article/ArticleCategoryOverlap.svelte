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
	<nav class="category-bar" aria-label="Kategori Artikel">
		{#each categories as cat, index}
			{@const isActive = selectedCategory === cat.id}
			{@const nextIsActive =
				index < categories.length - 1 && selectedCategory === categories[index + 1].id}
			<button
				type="button"
				class="cat-tile"
				class:active={isActive}
				aria-pressed={isActive}
				onclick={() => onSelectCategory(cat.id)}
			>
				<span class="cat-icon-box" aria-hidden="true">
					{#if cat.icon === 'all'}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
							<polyline points="14 2 14 8 20 8" />
							<line x1="16" y1="13" x2="8" y2="13" />
							<line x1="16" y1="17" x2="8" y2="17" />
							<line x1="10" y1="9" x2="8" y2="9" />
						</svg>
					{:else if cat.icon === 'education'}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21V14h6v7" />
						</svg>
					{:else if cat.icon === 'scholarship'}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
							<path d="M6 12v5c3 3 9 3 12 0v-5" />
						</svg>
					{:else if cat.icon === 'talent'}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="3" />
							<circle cx="19" cy="5" r="2" />
							<circle cx="5" cy="5" r="2" />
							<circle cx="19" cy="19" r="2" />
							<circle cx="5" cy="19" r="2" />
							<line x1="14.2" y1="9.8" x2="17.5" y2="6.5" />
							<line x1="9.8" y1="9.8" x2="6.5" y2="6.5" />
							<line x1="14.2" y1="14.2" x2="17.5" y2="17.5" />
							<line x1="9.8" y1="14.2" x2="6.5" y2="17.5" />
						</svg>
					{:else if cat.icon === 'digital'}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
							<line x1="8" y1="21" x2="16" y2="21" />
							<line x1="12" y1="17" x2="12" y2="21" />
						</svg>
					{:else if cat.icon === 'partner'}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round">
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
							<path d="M16 3.13a4 4 0 0 1 0 7.75" />
						</svg>
					{:else}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round">
							<rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
							<line x1="9" y1="6" x2="9" y2="6.01" />
							<line x1="15" y1="6" x2="15" y2="6.01" />
							<line x1="9" y1="10" x2="9" y2="10.01" />
							<line x1="15" y1="10" x2="15" y2="10.01" />
							<line x1="9" y1="14" x2="9" y2="14.01" />
							<line x1="15" y1="14" x2="15" y2="14.01" />
							<path d="M9 18h6" />
						</svg>
					{/if}
				</span>

				<span class="cat-label">{cat.label}</span>
			</button>

			{#if index < categories.length - 1}
				<span
					class="col-divider"
					class:is-hidden={isActive || nextIsActive}
					aria-hidden="true"
				></span>
			{/if}
		{/each}
	</nav>
</div>

<style>
	.category-overlap-wrapper {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 1425px;
		margin: -16px auto 0;
		padding: 0;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.category-overlap-wrapper {
			max-width: 1500px;
		}
	}

	.category-bar {
		width: 100%;
		height: 118px;
		background: #FFFFFF;
		border: 1px solid #E2EAF1;
		border-radius: 26px;
		padding: 12px 14px;
		box-shadow: 0 10px 32px rgba(16, 43, 73, 0.075), 0 3px 10px rgba(16, 43, 73, 0.03);
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	.cat-tile {
		flex: 1 1 0;
		min-width: 0;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		padding: 10px 14px;
		background: transparent;
		border: none;
		border-radius: 17px;
		color: #102B49;
		cursor: pointer;
		transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
		box-sizing: border-box;
		text-align: left;
	}

	.cat-tile:not(.active):hover {
		background: #ECF9FA;
	}

	.cat-tile.active {
		background: #08AAB5;
		color: #FFFFFF;
		box-shadow: 0 6px 18px rgba(8, 170, 181, 0.28);
	}

	.cat-icon-box {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		color: #00AAB5;
		transition: color 0.2s ease;
	}

	.cat-tile.active .cat-icon-box {
		color: #FFFFFF;
	}

	.cat-label {
		font-size: 16px;
		font-weight: 600;
		line-height: 1.25;
		color: inherit;
		white-space: normal;
		word-break: break-word;
	}

	.cat-tile.active .cat-label {
		font-weight: 600;
	}

	.col-divider {
		width: 1px;
		height: 60%;
		background: #E2EAF1;
		margin: 0 4px;
		flex-shrink: 0;
		transition: opacity 0.2s ease;
	}

	.col-divider.is-hidden {
		opacity: 0;
	}

	/* Tablet: Pertahankan 1 baris horizontal dengan horizontal scroll halus */
	@media (max-width: 1220px) {
		.category-overlap-wrapper {
			padding: 0 1.5rem;
		}

		.category-bar {
			height: auto;
			min-height: 88px;
			border-radius: 22px;
			overflow-x: auto;
			overflow-y: hidden;
			scrollbar-width: none;
			-webkit-overflow-scrolling: touch;
			padding: 10px 12px;
			gap: 4px;
		}

		.category-bar::-webkit-scrollbar {
			display: none;
		}

		.cat-tile {
			flex: 0 0 auto;
			min-width: max-content;
			height: 64px;
			padding: 8px 18px;
			border-radius: 15px;
			gap: 12px;
		}

		.cat-label {
			white-space: nowrap;
			font-size: 14.5px;
		}

		.col-divider {
			height: 36px;
			margin: 0 2px;
		}
	}

	/* Mobile: Single row horizontal scroll, scrollbar tersembunyi */
	@media (max-width: 640px) {
		.category-overlap-wrapper {
			padding: 0 1rem;
			margin-top: -12px;
		}

		.category-bar {
			min-height: 70px;
			border-radius: 18px;
			padding: 8px;
			scroll-snap-type: x proximity;
		}

		.cat-tile {
			height: 52px;
			padding: 6px 15px;
			border-radius: 13px;
			gap: 9px;
			scroll-snap-align: start;
		}

		.cat-label {
			font-size: 13.5px;
		}

		.col-divider {
			height: 26px;
		}
	}
</style>
