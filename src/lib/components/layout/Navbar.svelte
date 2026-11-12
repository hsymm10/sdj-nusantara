<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { navItems, type NavItem, type NavSubItem } from '#lib/config/navigation';
	import { i18n } from '#lib/stores/i18n.svelte';
	import Logo from '#lib/components/ui/Logo.svelte';

	function getNavLabel(item: NavItem): string {
		const n = i18n.dict.nav;
		switch (item.href) {
			case '/': return n.home;
			case '/tentang-kami': return n.about;
			case '/layanan': return n.services;
			case '/kemitraan': return n.partnership;
			case '/artikel': return n.articles;
			case '/kontak': return n.contact;
			default: return item.label;
		}
	}

	function getSubInfo(sub: NavSubItem): { label: string; description: string; badge?: string } {
		const m = i18n.dict.nav.servicesMenu;
		if (sub.href === '/layanan/pendidikan') {
			return { label: m.educationTitle, description: m.educationDesc, badge: sub.badge };
		}
		if (sub.href === '/layanan/beasiswa') {
			return { label: m.scholarshipTitle, description: m.scholarshipDesc, badge: m.scholarshipBadge };
		}
		if (sub.href === '/layanan/hukum') {
			return { label: m.legalTitle, description: m.legalDesc, badge: sub.badge };
		}
		return { label: sub.label, description: sub.description, badge: sub.badge };
	}

	interface Props {
		compact?: boolean;
		wide?: boolean;
	}

	let { compact = true, wide = true }: Props = $props();

	// Mobile drawer state & accordion state
	let mobileOpen = $state(false);
	let mobileLayananOpen = $state(false);

	// Desktop dropdown state
	let desktopDropdownOpen = $state(false);
	let hoverTimeout: any = null;
	let closeTimeout: any = null;

	let triggerButtonEl = $state<HTMLButtonElement | null>(null);
	let panelEl = $state<HTMLDivElement | null>(null);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			if (desktopDropdownOpen) {
				desktopDropdownOpen = false;
				triggerButtonEl?.focus();
			}
			if (mobileOpen) {
				mobileOpen = false;
			}
		}
	}

	// Kunci scroll body saat drawer mobile terbuka
	$effect(() => {
		if (typeof document !== 'undefined') {
			if (mobileOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	});

	// Tutup dropdown dan drawer saat rute berpindah
	$effect(() => {
		const _ = page.url.pathname;
		desktopDropdownOpen = false;
		mobileOpen = false;
	});

	function isItemActive(href: string): boolean {
		if (href === '/') {
			return page.url.pathname === '/';
		}
		if (href === '/layanan') {
			return page.url.pathname.startsWith('/layanan');
		}
		return page.url.pathname.startsWith(href);
	}

	function isSubItemActive(href: string): boolean {
		return page.url.pathname.startsWith(href);
	}

	// Desktop Hover Handlers with 120ms debounce
	function onTriggerMouseEnter() {
		if (closeTimeout) clearTimeout(closeTimeout);
		hoverTimeout = setTimeout(() => {
			desktopDropdownOpen = true;
		}, 120);
	}

	function onTriggerMouseLeave() {
		if (hoverTimeout) clearTimeout(hoverTimeout);
		closeTimeout = setTimeout(() => {
			desktopDropdownOpen = false;
		}, 120);
	}

	function toggleDesktopDropdown() {
		desktopDropdownOpen = !desktopDropdownOpen;
	}

	// Keyboard navigation in panel
	function handlePanelKeydown(e: KeyboardEvent) {
		if (!panelEl) return;
		const focusableElements = Array.from(panelEl.querySelectorAll<HTMLElement>('a, button'));
		const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			const nextIndex = (currentIndex + 1) % focusableElements.length;
			focusableElements[nextIndex]?.focus();
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
			focusableElements[prevIndex]?.focus();
		} else if (e.key === 'Home') {
			e.preventDefault();
			focusableElements[0]?.focus();
		} else if (e.key === 'End') {
			e.preventDefault();
			focusableElements[focusableElements.length - 1]?.focus();
		}
	}

	function handleTriggerKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			desktopDropdownOpen = true;
			setTimeout(() => {
				const firstLink = panelEl?.querySelector<HTMLElement>('a');
				firstLink?.focus();
			}, 50);
		}
	}

	// Handle click outside to close dropdown
	onMount(() => {
		function handleClickOutside(e: MouseEvent) {
			const target = e.target as Node;
			const dropdownContainer = document.querySelector('.dropdown-container');
			if (desktopDropdownOpen && dropdownContainer && !dropdownContainer.contains(target)) {
				desktopDropdownOpen = false;
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="navbar" aria-label={i18n.dict.nav.ariaMainNav}>
	<!-- Swoosh abu-abu samar (#E5EAEE) di pojok kanan-atas navbar -->
	<svg class="nav-top-swoosh" viewBox="0 0 96 48" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 48 C40 32 75 15 96 0 H96 V48 Z" fill="#E5EAEE" fill-opacity="0.75" />
	</svg>

	<div class="navbar-inner">
		<!-- Logo resmi SDJNusantara (rasio proporsional penuh) -->
		<a href="/" class="logo-link" aria-label={i18n.pick('SDJNusantara Beranda', 'SDJNusantara Home')}>
			<Logo size="nav" variant="plain" />
		</a>

		<!-- Desktop Navigation -->
		<ul class="nav-list" role="menubar">
			{#each navItems as item}
				{#if item.hasDropdown}
					<!-- Item dengan Dropdown (Layanan) -->
					<li
						class="nav-item dropdown-container"
						role="none"
						onmouseenter={onTriggerMouseEnter}
						onmouseleave={onTriggerMouseLeave}
					>
						<div class="dropdown-trigger-group {isItemActive(item.href) ? 'active' : ''}">
							<a
								href={item.href}
								class="nav-link dropdown-text-link {isItemActive(item.href) ? 'active' : ''}"
								role="menuitem"
								aria-haspopup="true"
								aria-expanded={desktopDropdownOpen}
							>
								<span>{getNavLabel(item)}</span>
							</a>

							<button
								type="button"
								bind:this={triggerButtonEl}
								class="dropdown-chevron-btn {desktopDropdownOpen ? 'open' : ''}"
								aria-label={i18n.pick('Buka submenu Layanan', 'Open Services submenu')}
								aria-haspopup="true"
								aria-expanded={desktopDropdownOpen}
								onclick={(e) => {
									e.stopPropagation();
									toggleDesktopDropdown();
								}}
								onkeydown={handleTriggerKeydown}
							>
								<svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</button>

							{#if isItemActive(item.href)}
								<span class="active-indicator"></span>
							{/if}
						</div>

						<!-- Dropdown Panel dengan jembatan hover tak terlihat -->
						{#if desktopDropdownOpen}
							<div
								bind:this={panelEl}
								class="dropdown-panel"
								role="menu"
								aria-label={i18n.pick('Submenu Layanan', 'Services submenu')}
								tabindex="-1"
								onkeydown={handlePanelKeydown}
							>
								<div class="dropdown-notch" aria-hidden="true"></div>

								<ul class="dropdown-cards-list" role="none">
									{#if item.children}
										{#each item.children as sub}
											{@const subInfo = getSubInfo(sub)}
											<li role="none">
												<a
													href={sub.href}
													class="dropdown-card {sub.iconType} {isSubItemActive(sub.href) ? 'card-active' : ''}"
													role="menuitem"
												>
													<div class="card-icon-wrap {sub.iconType}">
														{#if sub.iconType === 'education'}
															<!-- Ikon Topi Toga Teal -->
															<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
																<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
																<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
															</svg>
														{:else}
															<!-- Ikon Timbangan Emas Gelap -->
															<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B7791F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
																<path d="M12 3v18"></path>
																<path d="M6 6h12"></path>
																<path d="M3 13l3-7 3 7a3 3 0 0 1-6 0z"></path>
																<path d="M15 13l3-7 3 7a3 3 0 0 1-6 0z"></path>
																<path d="M4 21h16"></path>
															</svg>
														{/if}
													</div>

													<div class="card-content">
														<div class="card-title-row">
															<span class="card-title">{subInfo.label}</span>
															{#if isSubItemActive(sub.href)}
																<span class="active-dot" aria-hidden="true"></span>
															{/if}
															{#if subInfo.badge}
																<span class="card-badge">{subInfo.badge}</span>
															{/if}
														</div>
														<p class="card-desc">{subInfo.description}</p>
													</div>

													<span class="card-arrow" aria-hidden="true">
														<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
															<polyline points="9 18 15 12 9 6"></polyline>
														</svg>
													</span>
												</a>
											</li>
										{/each}
									{/if}
								</ul>

								<div class="dropdown-footer-divider"></div>

								<a href="/layanan" class="dropdown-footer-link" role="menuitem">
									<span>{i18n.dict.nav.viewAllServices}</span>
									<span class="footer-link-arrow">→</span>
								</a>
							</div>
						{/if}
					</li>
				{:else}
					<!-- Item Nav Biasa -->
					<li class="nav-item" role="none">
						<a
							href={item.href}
							class="nav-link {isItemActive(item.href) ? 'active' : ''}"
							role="menuitem"
						>
							<span>{getNavLabel(item)}</span>
							{#if isItemActive(item.href)}
								<span class="active-indicator"></span>
							{/if}
						</a>
					</li>
				{/if}
			{/each}
		</ul>

		<!-- Right Controls: Language Switcher (Desktop & Mobile) + Hamburger -->
		<div class="nav-right-controls">
			<div class="lang-switcher" role="group" aria-label={i18n.dict.nav.ariaLangSwitcher}>
				<button
					type="button"
					class="lang-btn {i18n.lang === 'id' ? 'active' : ''}"
					onclick={() => i18n.setLang('id')}
					aria-pressed={i18n.lang === 'id'}
					title="Bahasa Indonesia"
				>
					ID
				</button>
				<button
					type="button"
					class="lang-btn {i18n.lang === 'en' ? 'active' : ''}"
					onclick={() => i18n.setLang('en')}
					aria-pressed={i18n.lang === 'en'}
					title="English"
				>
					EN
				</button>
			</div>

			<!-- Mobile Hamburger -->
			<button
				class="hamburger"
				onclick={toggleMobile}
				aria-label={i18n.dict.nav.ariaMobileToggle}
				aria-expanded={mobileOpen}
			>
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				{#if mobileOpen}
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				{:else}
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				{/if}
			</svg>
		</button>
		</div>
	</div>

	<!-- Mobile Menu Drawer (≤1023px) -->
	{#if mobileOpen}
		<div class="mobile-menu-backdrop" onclick={() => (mobileOpen = false)} role="presentation"></div>
		<div class="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu navigasi mobile">
			<div class="mobile-menu-inner">
				{#each navItems as item}
					{#if item.hasDropdown}
						<!-- Accordion Item "Layanan" -->
						<div class="mobile-accordion-group">
							<div class="mobile-accordion-header {isItemActive(item.href) ? 'active' : ''}">
								<a
									href={item.href}
									class="mobile-accordion-title"
									onclick={() => (mobileOpen = false)}
								>
									<span>{getNavLabel(item)}</span>
								</a>
								<button
									type="button"
									class="mobile-accordion-btn {mobileLayananOpen ? 'open' : ''}"
									aria-label={i18n.pick('Buka submenu Layanan', 'Open Services submenu')}
									aria-expanded={mobileLayananOpen}
									onclick={() => (mobileLayananOpen = !mobileLayananOpen)}
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</button>
							</div>

							<!-- Submenu accordion -->
							{#if mobileLayananOpen}
								<div class="mobile-submenu-tree">
									{#if item.children}
										{#each item.children as sub}
											{@const subInfo = getSubInfo(sub)}
											<a
												href={sub.href}
												class="mobile-sublink {isSubItemActive(sub.href) ? 'active' : ''}"
												onclick={() => (mobileOpen = false)}
											>
												<span class="mobile-sub-icon {sub.iconType}">
													{#if sub.iconType === 'education'}
														<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
															<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
															<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
														</svg>
													{:else}
														<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B7791F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
															<path d="M12 3v18"></path>
															<path d="M6 6h12"></path>
															<path d="M3 13l3-7 3 7a3 3 0 0 1-6 0z"></path>
															<path d="M15 13l3-7 3 7a3 3 0 0 1-6 0z"></path>
															<path d="M4 21h16"></path>
														</svg>
													{/if}
												</span>
												<div class="mobile-sub-text">
													<div class="mobile-sub-heading">
														<span class="mobile-sub-title">{subInfo.label}</span>
														{#if subInfo.badge}
															<span class="mobile-sub-badge">{subInfo.badge}</span>
														{/if}
													</div>
													<span class="mobile-sub-desc">{subInfo.description}</span>
												</div>
											</a>
										{/each}
									{/if}

									<a
										href="/layanan"
										class="mobile-sublink-all"
										onclick={() => (mobileOpen = false)}
									>
										<span>{i18n.dict.nav.viewAllServices} →</span>
									</a>
								</div>
							{/if}
						</div>
					{:else}
						<a
							href={item.href}
							class="mobile-link {isItemActive(item.href) ? 'active' : ''}"
							onclick={() => (mobileOpen = false)}
						>
							<span>{getNavLabel(item)}</span>
							{#if isItemActive(item.href)}
								<span class="mobile-active-dot"></span>
							{/if}
						</a>
					{/if}
				{/each}

				<!-- Mobile Drawer Language Switcher -->
				<div class="mobile-lang-row">
					<span class="mobile-lang-label">{i18n.dict.nav.langLabel}</span>
					<div class="lang-switcher" role="group" aria-label={i18n.dict.nav.ariaLangSwitcher}>
						<button
							type="button"
							class="lang-btn {i18n.lang === 'id' ? 'active' : ''}"
							onclick={() => i18n.setLang('id')}
							aria-pressed={i18n.lang === 'id'}
						>
							ID
						</button>
						<button
							type="button"
							class="lang-btn {i18n.lang === 'en' ? 'active' : ''}"
							onclick={() => i18n.setLang('en')}
							aria-pressed={i18n.lang === 'en'}
						>
							EN
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 48px;
		z-index: 1000;
		background: #FFFFFF;
		border-bottom: 1px solid #DCE6EE;
		box-shadow: 0 1px 4px rgba(11, 39, 71, 0.03);
	}

	.nav-top-swoosh {
		position: absolute;
		top: 0;
		right: 0;
		width: 96px;
		height: 48px;
		pointer-events: none;
		z-index: 1;
	}

	.navbar-inner {
		position: relative;
		z-index: 2;
		max-width: 1312px;
		height: 48px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.navbar-inner {
			max-width: 1500px;
		}
	}

	.logo-link {
		text-decoration: none;
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
	}

	.nav-list {
		display: flex;
		align-items: center;
		gap: 1.6rem;
		list-style: none;
		margin: 0 0 0 auto;
		padding: 0;
		height: 100%;
	}

	.nav-item {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.nav-link {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		height: 100%;
		padding: 0 0.2rem;
		font-size: 12.5px;
		font-weight: 500;
		color: #183553;
		text-decoration: none;
		transition: color 0.2s ease;
		white-space: nowrap;
		letter-spacing: 0;
	}

	.nav-link:hover {
		color: #00A6B2;
	}

	.nav-link.active {
		font-weight: 700;
		color: #00A6B2;
	}

	.active-indicator {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2.5px;
		background: #00A6B2;
		border-radius: 2px 2px 0 0;
	}

	/* Trigger Group for Dropdown Item */
	.dropdown-trigger-group {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.dropdown-text-link {
		padding-right: 0;
	}

	.dropdown-chevron-btn {
		background: none;
		border: none;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 24px;
		height: 32px;
		padding: 0 4px;
		color: #183553;
		transition: color 0.2s ease;
	}

	.dropdown-trigger-group.active .dropdown-chevron-btn,
	.dropdown-chevron-btn:hover {
		color: #00A6B2;
	}

	.dropdown-chevron {
		width: 11px;
		height: 11px;
		transition: transform 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
	}

	.dropdown-chevron-btn.open .dropdown-chevron {
		transform: rotate(180deg);
	}

	/* Dropdown Panel */
	.dropdown-container {
		position: relative;
	}

	/* Invisible hover bridge between trigger and panel */
	.dropdown-container::after {
		content: '';
		position: absolute;
		top: 48px;
		left: 0;
		width: 440px;
		height: 12px;
		background: transparent;
	}

	.dropdown-panel {
		position: absolute;
		top: calc(48px + 8px);
		left: 0;
		width: 440px;
		background: #FFFFFF;
		border-radius: 18px;
		border: 1px solid #E3EAF1;
		box-shadow:
			0 18px 40px rgba(8, 36, 66, 0.14),
			0 2px 6px rgba(8, 36, 66, 0.06);
		padding: 10px;
		box-sizing: border-box;
		z-index: 1010;
		animation: dropdownFadeIn 180ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
		transform-origin: top left;
	}

	@keyframes dropdownFadeIn {
		from {
			opacity: 0;
			transform: translateY(8px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.dropdown-panel {
			animation: dropdownFadeOnly 120ms ease forwards;
			transform: none !important;
		}
		@keyframes dropdownFadeOnly {
			from { opacity: 0; }
			to { opacity: 1; }
		}
	}

	.dropdown-notch {
		position: absolute;
		top: -6px;
		left: 28px;
		width: 10px;
		height: 10px;
		background: #FFFFFF;
		border-left: 1px solid #E3EAF1;
		border-top: 1px solid #E3EAF1;
		transform: rotate(45deg);
	}

	.dropdown-cards-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.dropdown-card {
		display: flex;
		align-items: center;
		height: 84px;
		border-radius: 14px;
		padding: 14px 16px;
		box-sizing: border-box;
		text-decoration: none;
		background: #FFFFFF;
		border-left: 3px solid transparent;
		transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
		gap: 14px;
	}

	.dropdown-card:hover,
	.dropdown-card:focus-visible {
		background: #F4F8FB;
		outline: none;
	}

	.dropdown-card.education:hover,
	.dropdown-card.education:focus-visible {
		border-left: 3px solid #079EAD;
	}

	.dropdown-card.legal:hover,
	.dropdown-card.legal:focus-visible {
		border-left: 3px solid #F5B331;
	}

	.card-icon-wrap {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.card-icon-wrap.education {
		background: #E3F6F8;
	}

	.card-icon-wrap.legal {
		background: #FDF1D3;
	}

	.card-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.card-title-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 3px;
	}

	.card-title {
		font-size: 15px;
		font-weight: 700;
		color: #082442;
		letter-spacing: -0.01em;
	}

	.dropdown-card.card-active .card-title {
		font-weight: 800;
		color: #079EAD;
	}

	.active-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #079EAD;
	}

	.card-badge {
		font-size: 11px;
		font-weight: 600;
		background: #EEF2F6;
		color: #5B6B7F;
		padding: 2px 8px;
		border-radius: 999px;
	}

	.card-desc {
		font-size: 13px;
		color: #5B6B7F;
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.4;
	}

	.card-arrow {
		color: #94A3B8;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease, color 0.2s ease;
	}

	.dropdown-card:hover .card-arrow {
		transform: translateX(3px);
		color: #082442;
	}

	.dropdown-footer-divider {
		height: 1px;
		background: #EEF2F6;
		margin: 6px 4px 8px;
	}

	.dropdown-footer-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 6px 12px;
		font-size: 13px;
		font-weight: 600;
		color: #079EAD;
		text-decoration: none;
		border-radius: 8px;
		transition: background 0.15s ease, color 0.15s ease;
	}

	.dropdown-footer-link:hover,
	.dropdown-footer-link:focus-visible {
		background: #E3F6F8;
		color: #057A86;
		outline: none;
	}

	.footer-link-arrow {
		transition: transform 0.2s ease;
	}

	.dropdown-footer-link:hover .footer-link-arrow {
		transform: translateX(3px);
	}

	/* Hamburger Button */
	.hamburger {
		display: none;
		background: none;
		border: none;
		color: #0B2747;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 6px;
	}

	.hamburger:hover {
		background: #F1F5F9;
	}

	/* Mobile Menu Drawer (≤1023px) */
	.mobile-menu-backdrop {
		position: fixed;
		inset: 0;
		top: 48px;
		background: rgba(11, 39, 71, 0.45);
		backdrop-filter: blur(2px);
		z-index: 998;
	}

	.mobile-menu {
		position: fixed;
		top: 48px;
		left: 0;
		right: 0;
		bottom: 0;
		background: #FFFFFF;
		z-index: 999;
		overflow-y: auto;
		border-top: 1px solid #DCE6EE;
	}

	.mobile-menu-inner {
		padding: 1.25rem 1.5rem 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		max-width: 480px;
		margin: 0 auto;
	}

	.mobile-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1rem;
		font-weight: 500;
		color: #183553;
		text-decoration: none;
		min-height: 48px;
		padding: 0.5rem 0.25rem;
		border-bottom: 1px solid #F1F5F9;
		transition: color 0.15s ease;
	}

	.mobile-link.active {
		color: #00A6B2;
		font-weight: 700;
	}

	.mobile-active-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #00A6B2;
	}

	/* Mobile Accordion for Layanan */
	.mobile-accordion-group {
		border-bottom: 1px solid #F1F5F9;
	}

	.mobile-accordion-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 48px;
		padding: 0.25rem 0;
	}

	.mobile-accordion-header.active .mobile-accordion-title {
		color: #00A6B2;
		font-weight: 700;
	}

	.mobile-accordion-title {
		font-size: 1rem;
		font-weight: 500;
		color: #183553;
		text-decoration: none;
		flex: 1;
		display: flex;
		align-items: center;
		min-height: 48px;
	}

	.mobile-accordion-btn {
		background: none;
		border: none;
		cursor: pointer;
		min-width: 48px;
		min-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #183553;
	}

	.mobile-accordion-btn svg {
		transition: transform 0.22s ease;
	}

	.mobile-accordion-btn.open svg {
		transform: rotate(180deg);
		color: #00A6B2;
	}

	.mobile-submenu-tree {
		margin-left: 12px;
		padding-left: 16px;
		border-left: 2px solid #00A6B2;
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding-top: 4px;
		padding-bottom: 12px;
	}

	.mobile-sublink {
		display: flex;
		align-items: center;
		gap: 12px;
		min-height: 48px;
		padding: 8px 10px;
		border-radius: 10px;
		text-decoration: none;
		background: #F8FAFC;
		transition: background 0.15s ease;
	}

	.mobile-sublink:hover,
	.mobile-sublink.active {
		background: #E3F6F8;
	}

	.mobile-sub-icon {
		width: 36px;
		height: 36px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.mobile-sub-icon.education {
		background: #E3F6F8;
	}

	.mobile-sub-icon.legal {
		background: #FDF1D3;
	}

	.mobile-sub-text {
		display: flex;
		flex-direction: column;
	}

	.mobile-sub-heading {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.mobile-sub-title {
		font-size: 14px;
		font-weight: 700;
		color: #082442;
	}

	.mobile-sublink.active .mobile-sub-title {
		color: #079EAD;
	}

	.mobile-sub-badge {
		font-size: 10.5px;
		font-weight: 600;
		background: #EEF2F6;
		color: #5B6B7F;
		padding: 1px 6px;
		border-radius: 999px;
	}

	.mobile-sub-desc {
		font-size: 12px;
		color: #64748B;
	}

	.mobile-sublink-all {
		display: inline-flex;
		align-items: center;
		min-height: 40px;
		padding: 6px 10px;
		font-size: 13px;
		font-weight: 600;
		color: #079EAD;
		text-decoration: none;
	}

	/* Responsive Media Queries (Drawer aktif di ≤1023px) */
	@media (max-width: 1023px) {
		.navbar {
			height: 48px;
		}
		.navbar-inner {
			height: 48px;
			padding: 0 1.25rem;
		}
		.nav-list,
		.nav-top-swoosh {
			display: none;
		}
		.hamburger {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	/* Right Controls + Language Switcher */
	.nav-right-controls {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		flex-shrink: 0;
	}

	.lang-switcher {
		display: inline-flex;
		align-items: center;
		background: #F1F5F9;
		border: 1px solid #DCE6EE;
		border-radius: 9999px;
		padding: 2px;
		gap: 2px;
	}

	.lang-btn {
		border: none;
		background: transparent;
		color: #475569;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.03em;
		padding: 4px 9px;
		border-radius: 9999px;
		cursor: pointer;
		transition: all 0.18s ease;
		line-height: 1.1;
	}

	.lang-btn:hover:not(.active) {
		color: #0B2747;
		background: rgba(255, 255, 255, 0.7);
	}

	.lang-btn.active {
		background: #082442;
		color: #FFFFFF;
		box-shadow: 0 1px 3px rgba(8, 36, 66, 0.18);
	}

	.mobile-lang-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 16px;
		padding-top: 14px;
		border-top: 1px solid #E2E8F0;
	}

	.mobile-lang-label {
		font-size: 0.9rem;
		font-weight: 600;
		color: #183553;
	}
</style>
