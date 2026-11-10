<!-- Section B: Floating Category Navigation (Sesuai Mockup) -->
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
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="3" width="7" height="7"/>
								<rect x="14" y="3" width="7" height="7"/>
								<rect x="14" y="14" width="7" height="7"/>
								<rect x="3" y="14" width="7" height="7"/>
							</svg>
						{:else if item.icon === 'grad'}
							<!-- Graduation cap -->
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
								<path d="M6 12v5c3 3 9 3 12 0v-5"/>
							</svg>
						{:else if item.icon === 'medal'}
							<!-- Ribbon / Medal -->
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="8" r="6"/>
								<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
							</svg>
						{:else}
							<!-- Scales of Justice -->
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
								<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
								<path d="M7 21h10"/>
								<path d="M12 3v18"/>
								<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
							</svg>
						{/if}
					</div>
					<span class="tab-text">{item.name}</span>
				</a>

				{#if idx < navItems.length - 1}
					<span class="nav-divider" aria-hidden="true"></span>
				{/if}
			{/each}
		</nav>
	</div>
</div>

<style>
	.category-nav-wrapper {
		position: relative;
		z-index: var(--z-overlap-bar, 10);
		margin-top: var(--overlap-margin-top, -16px);
		margin-bottom: 36px;
	}

	.category-nav-container {
		width: 93%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		box-sizing: border-box;
	}

	.category-card {
		background: #FFFFFF;
		border-radius: 20px;
		box-shadow: 0 10px 32px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.9);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--overlap-card-height, 84px);
		padding: 12px 18px;
		box-sizing: border-box;
		overflow-x: auto;
		scrollbar-width: none;
	}

	.category-card::-webkit-scrollbar {
		display: none;
	}

	.nav-tab {
		flex: 1;
		min-width: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		height: 60px;
		padding: 0 20px;
		margin: 0 6px;
		border-radius: 14px;
		text-decoration: none;
		color: #082442;
		font-size: 15px;
		font-weight: 600;
		white-space: nowrap;
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
		box-sizing: border-box;
	}

	.nav-tab:hover:not(.active) {
		background: rgba(7, 158, 173, 0.07);
		color: #079EAD;
		transform: translateY(-1px);
	}

	.nav-tab.active {
		background: linear-gradient(135deg, #079EAD 0%, #16B6C1 100%);
		color: #FFFFFF;
		font-weight: 700;
		box-shadow: 0 4px 16px rgba(7, 158, 173, 0.26);
		transform: translateY(-1px);
	}

	.tab-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		line-height: 1;
	}

	.tab-text {
		display: inline-flex;
		align-items: center;
		line-height: 1.2;
		letter-spacing: 0.01em;
	}

	.nav-divider {
		width: 1px;
		height: 38px;
		background: #E2E8F0;
		margin: 0 16px;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.category-card {
			height: 74px;
			padding: 10px 14px;
		}

		.nav-tab {
			height: 54px;
			padding: 0 14px;
			margin: 0 4px;
			font-size: 14px;
			gap: 9px;
		}

		.nav-divider {
			height: 32px;
			margin: 0 10px;
		}
	}

	@media (max-width: 768px) {
		.category-nav-wrapper {
			margin-bottom: 24px;
		}

		.category-card {
			height: auto;
			padding: 8px 12px;
			gap: 10px;
			justify-content: flex-start;
			border-radius: 16px;
			-webkit-overflow-scrolling: touch;
		}

		.nav-tab {
			flex: 0 0 auto;
			height: 48px;
			padding: 0 18px;
			margin: 0;
			font-size: 13.5px;
			border-radius: 12px;
			gap: 8px;
		}

		.nav-divider {
			display: none;
		}
	}
</style>
