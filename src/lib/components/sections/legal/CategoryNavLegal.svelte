<!-- Section B: Floating Category Navigation (Sesuai Mockup Referensi) -->
<script lang="ts">
	const navItems = [
		{
			name: 'Semua Layanan',
			href: '/layanan',
			icon: 'grid',
			active: false
		},
		{
			name: 'Program Pendidikan',
			href: '/layanan/pendidikan',
			icon: 'grad',
			active: false
		},
		{
			name: 'Beasiswa',
			href: '/beasiswa',
			icon: 'medal',
			active: false
		},
		{
			name: 'Layanan Hukum',
			href: '/layanan/hukum',
			icon: 'scales',
			active: true
		}
	];
</script>

<div class="category-nav-wrapper">
	<div class="category-nav-container">
		<nav class="category-card" aria-label="Navigasi Kategori Layanan">
			{#each navItems as item, idx}
				<a
					href={item.href}
					class="nav-tab"
					class:active={item.active}
					aria-current={item.active ? 'page' : undefined}
				>
					<div class="tab-icon">
						{#if item.icon === 'grid'}
							<!-- Grid 2x2 icon -->
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="3" width="7" height="7"/>
								<rect x="14" y="3" width="7" height="7"/>
								<rect x="14" y="14" width="7" height="7"/>
								<rect x="3" y="14" width="7" height="7"/>
							</svg>
						{:else if item.icon === 'grad'}
							<!-- Graduation cap -->
							<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else if item.icon === 'medal'}
							<!-- Ribbon / Medal -->
							<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="8" r="6"/>
								<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
							</svg>
						{:else}
							<!-- Scales of Justice -->
							<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 3v18M6 8l6-2 6 2M6 8l-3 7h6l-3-7zm12 0l-3 7h6l-3-7z"/>
								<path d="M4 21h16"/>
							</svg>
						{/if}
					</div>
					<span class="tab-text">{item.name}</span>
				</a>

				{#if idx < navItems.length - 1 && !item.active && !navItems[idx + 1].active}
					<span class="nav-divider" aria-hidden="true"></span>
				{/if}
			{/each}
		</nav>
	</div>
</div>

<style>
	.category-nav-wrapper {
		position: relative;
		z-index: 10;
		margin-top: -26px;
		margin-bottom: 34px;
	}

	.category-nav-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.category-card {
		background: #ffffff;
		border-radius: 12px;
		padding: 6px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
		border: 1px solid rgba(226, 232, 240, 0.8);
	}

	.nav-tab {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 10px 16px;
		border-radius: 8px;
		text-decoration: none;
		color: #082442;
		font-size: 12px;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.nav-tab:hover:not(.active) {
		background: #f4f8fb;
		color: #079ead;
	}

	.nav-tab.active {
		background: #00aab5;
		color: #ffffff;
		font-weight: 700;
		box-shadow: 0 4px 12px rgba(0, 170, 181, 0.25);
	}

	.tab-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-divider {
		width: 1px;
		height: 22px;
		background: #e2e8f0;
		margin: 0 4px;
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.category-card {
			flex-wrap: wrap;
			gap: 6px;
			padding: 8px;
		}

		.nav-tab {
			flex: 1 1 calc(50% - 6px);
			padding: 8px 10px;
			font-size: 11.5px;
		}

		.nav-divider {
			display: none;
		}
	}
</style>
