<script lang="ts">
	import { page } from '$app/state';

	export type ServiceKey = 'all' | 'education' | 'scholarship' | 'legal';

	interface Props {
		activeService?: ServiceKey;
	}

	let { activeService }: Props = $props();

	const resolvedActive = $derived.by<ServiceKey>(() => {
		if (activeService) return activeService;
		const path = page.url.pathname;
		if (path.startsWith('/layanan/pendidikan')) return 'education';
		if (path.startsWith('/layanan/beasiswa') || path.startsWith('/beasiswa')) return 'scholarship';
		if (path.startsWith('/layanan/hukum')) return 'legal';
		return 'all';
	});

	interface NavItem {
		key: ServiceKey;
		name: string;
		href: string;
	}

	const navItems: NavItem[] = [
		{ key: 'all', name: 'Semua Layanan', href: '/layanan' },
		{ key: 'education', name: 'Program Pendidikan', href: '/layanan/pendidikan' },
		{ key: 'scholarship', name: 'Beasiswa', href: '/layanan/beasiswa' },
		{ key: 'legal', name: 'Layanan Hukum', href: '/layanan/hukum' }
	];

	let navCardEl = $state<HTMLElement | null>(null);

	$effect(() => {
		const activeKey = resolvedActive;
		if (!navCardEl || typeof window === 'undefined') return;
		if (window.innerWidth > 768) return;
		const activeEl = navCardEl.querySelector<HTMLElement>(`[data-service="${activeKey}"]`);
		if (!activeEl) return;
		const targetLeft =
			activeEl.offsetLeft - (navCardEl.clientWidth - activeEl.offsetWidth) / 2;
		navCardEl.scrollTo({ left: Math.max(0, targetLeft), behavior: 'auto' });
	});
</script>

<div class="service-nav-wrapper">
	<div class="service-nav-container">
		<nav
			bind:this={navCardEl}
			class="service-nav-card"
			aria-label="Navigasi Kategori Layanan"
		>
			{#each navItems as item, idx (item.key)}
				{@const isActive = resolvedActive === item.key}
				<a
					href={item.href}
					data-service={item.key}
					class="service-nav-item"
					class:active={isActive}
					aria-current={isActive ? 'page' : undefined}
				>
					<span class="service-nav-icon" aria-hidden="true">
						{#if item.key === 'all'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="3" width="7" height="7"></rect>
								<rect x="14" y="3" width="7" height="7"></rect>
								<rect x="14" y="14" width="7" height="7"></rect>
								<rect x="3" y="14" width="7" height="7"></rect>
							</svg>
						{:else if item.key === 'education'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
								<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
							</svg>
						{:else if item.key === 'scholarship'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="20 12 20 22 4 22 4 12"></polyline>
								<rect x="2" y="7" width="20" height="5"></rect>
								<line x1="12" y1="22" x2="12" y2="7"></line>
								<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
								<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
							</svg>
						{:else}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
								<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
								<path d="M7 21h10"></path>
								<path d="M12 3v18"></path>
								<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
							</svg>
						{/if}
					</span>
					<span class="service-nav-label">{item.name}</span>
				</a>

				{#if idx < navItems.length - 1}
					<span class="service-nav-divider" aria-hidden="true"></span>
				{/if}
			{/each}
		</nav>
	</div>
</div>

<style>
	.service-nav-wrapper {
		position: relative;
		z-index: var(--z-overlap-bar, 10);
		margin-top: var(--overlap-margin-top, -16px);
		margin-bottom: 36px;
	}

	.service-nav-container {
		width: 93%;
		max-width: var(--hero-container-max, 1380px);
		margin: 0 auto;
		box-sizing: border-box;
	}

	.service-nav-card {
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

	.service-nav-card::-webkit-scrollbar {
		display: none;
	}

	.service-nav-item {
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

	.service-nav-item:hover:not(.active) {
		background: rgba(7, 158, 173, 0.07);
		color: #079EAD;
		transform: translateY(-1px);
	}

	.service-nav-item.active {
		background: linear-gradient(135deg, #079EAD 0%, #16B6C1 100%);
		color: #FFFFFF;
		font-weight: 700;
		box-shadow: 0 4px 16px rgba(7, 158, 173, 0.26);
		transform: translateY(-1px);
	}

	.service-nav-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		line-height: 1;
	}

	.service-nav-label {
		display: inline-flex;
		align-items: center;
		line-height: 1.2;
		letter-spacing: 0.01em;
	}

	.service-nav-divider {
		width: 1px;
		height: 38px;
		background: #E2E8F0;
		margin: 0 16px;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.service-nav-card {
			height: 74px;
			padding: 10px 14px;
		}

		.service-nav-item {
			height: 54px;
			padding: 0 14px;
			margin: 0 4px;
			font-size: 14px;
			gap: 9px;
		}

		.service-nav-divider {
			height: 32px;
			margin: 0 10px;
		}
	}

	@media (max-width: 768px) {
		.service-nav-wrapper {
			margin-bottom: 24px;
		}

		.service-nav-card {
			height: auto;
			padding: 8px 12px;
			gap: 10px;
			justify-content: flex-start;
			border-radius: 16px;
			-webkit-overflow-scrolling: touch;
		}

		.service-nav-item {
			flex: 0 0 auto;
			height: 48px;
			padding: 0 18px;
			margin: 0;
			font-size: 13.5px;
			border-radius: 12px;
			gap: 8px;
		}

		.service-nav-divider {
			display: none;
		}
	}
</style>

