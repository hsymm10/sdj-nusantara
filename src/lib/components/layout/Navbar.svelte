<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '#lib/data/navigation';

	interface Props {
		compact?: boolean;
	}

	let { compact = false }: Props = $props();
	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function isActive(href: string): boolean {
		if (page.url.pathname === '/konsultasi') {
			return false; // di halaman Konsultasi tidak ada item menu yang aktif per aturan 1.4
		}
		if (href === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(href);
	}
</script>

<nav class="navbar {compact ? 'compact' : ''}">
	<!-- Swoosh abu-abu samar (#E5EAEE) di pojok kanan-atas navbar (x 1440–1536) -->
	{#if compact}
		<svg class="nav-top-swoosh" viewBox="0 0 96 48" fill="none" preserveAspectRatio="none">
			<path d="M0 48 C40 32 75 15 96 0 H96 V48 Z" fill="#E5EAEE" fill-opacity="0.75"/>
		</svg>
	{/if}

	<div class="navbar-inner {compact ? 'compact-inner' : ''}">
		<!-- Logo (ikon ±28px, SDJNusantara ±16px bold, KONSULTAN PENDIDIKAN ±7px rapat) -->
		<a href="/" class="logo-link">
			<div class="nav-logo-box">
				<svg class="nav-logo-svg {compact ? 'compact-logo' : ''}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18 3L32 10.5L18 18L4 10.5L18 3Z" fill="#00A6B2"/>
					<path d="M4 14.5L18 22L32 14.5L32 17.5L18 25L4 17.5V14.5Z" fill="#0B2747"/>
					<path d="M4 21.5L18 29L32 21.5L32 24.5L18 32L4 24.5V21.5Z" fill="#F4B334"/>
				</svg>
				<div class="nav-logo-text">
					<span class="nav-brand-title {compact ? 'compact-title' : ''}">SDJNusantara</span>
					<span class="nav-brand-tagline {compact ? 'compact-tagline' : ''}">KONSULTAN PENDIDIKAN</span>
				</div>
			</div>
		</a>

		<!-- Desktop Navigation (Menu font ±11px, rentang menu x 450→1038) -->
		<ul class="nav-list {compact ? 'compact-nav' : ''}">
			{#each navItems as item}
				<li class="nav-item">
					<a
						href={item.href}
						class="nav-link {compact ? 'compact-link' : ''} {isActive(item.href) ? 'active' : ''}"
					>
						<span>{item.label}</span>
						{#if item.hasDropdown}
							<svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						{/if}
						{#if isActive(item.href)}
							<span class="active-indicator"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA Button (x 1238→1325) -->
		<a href="/konsultasi" class="btn-konsultasi {compact ? 'compact-btn' : ''} {page.url.pathname === '/konsultasi' ? 'btn-active' : ''}">
			<svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
			</svg>
			<span>Konsultasi</span>
		</a>

		<!-- Mobile Hamburger -->
		<button class="hamburger" onclick={toggleMobile} aria-label="Toggle menu">
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div class="mobile-menu">
			{#each navItems as item}
				<a
					href={item.href}
					class="mobile-link {isActive(item.href) ? 'active' : ''}"
					onclick={() => mobileOpen = false}
				>
					{item.label}
				</a>
			{/each}
			<a href="/konsultasi" class="mobile-cta" onclick={() => mobileOpen = false}>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
				</svg>
				<span>Konsultasi</span>
			</a>
		</div>
	{/if}
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: #FFFFFF;
		border-bottom: 1px solid #DCE6EE;
		box-shadow: 0 1px 4px rgba(11, 39, 71, 0.03);
	}

	.navbar.compact {
		height: 48px;
	}

	/* Swoosh abu-abu samar (#E5EAEE) di pojok kanan-atas navbar */
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
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 2rem;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.navbar-inner.compact-inner {
		max-width: 1086px;
		height: 48px;
		padding: 0 0.5rem;
		gap: 1.5rem;
	}

	.logo-link {
		text-decoration: none;
		flex-shrink: 0;
	}

	.nav-logo-box {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.nav-logo-svg {
		width: 36px;
		height: 36px;
		flex-shrink: 0;
	}

	.nav-logo-svg.compact-logo {
		width: 28px;
		height: 28px;
	}

	.nav-logo-text {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.nav-brand-title {
		font-size: 1.15rem;
		font-weight: 800;
		color: #0B2747;
		letter-spacing: -0.015em;
	}

	.nav-brand-title.compact-title {
		font-size: 16px;
	}

	.nav-brand-tagline {
		font-size: 8px;
		font-weight: 700;
		color: #64748B;
		letter-spacing: 0.08em;
		margin-top: 2px;
	}

	.nav-brand-tagline.compact-tagline {
		font-size: 7px;
		letter-spacing: 0.02em;
	}

	.nav-list {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.nav-list.compact-nav {
		gap: 1.35rem;
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
		gap: 0.2rem;
		height: 100%;
		padding: 0 0.15rem;
		font-size: 0.86rem;
		font-weight: 500;
		color: #183553;
		text-decoration: none;
		transition: color 0.2s ease;
		white-space: nowrap;
	}

	.nav-link.compact-link {
		font-size: 11px;
		letter-spacing: 0;
	}

	.nav-link:hover {
		color: #00A6B2;
	}

	.nav-link.active {
		font-weight: 700;
		color: #00A6B2;
	}

	.dropdown-chevron {
		width: 10px;
		height: 10px;
		margin-left: 1px;
		stroke: currentColor;
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

	.btn-konsultasi {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.5rem 1.15rem;
		background: #F4B334;
		color: #071D36;
		font-weight: 700;
		font-size: 0.82rem;
		border-radius: 7px;
		text-decoration: none;
		box-shadow: 0 2px 6px rgba(244, 179, 52, 0.25);
		transition: all 0.2s ease;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.btn-konsultasi.compact-btn {
		padding: 0.35rem 0.95rem;
		font-size: 11px;
		border-radius: 8px;
		letter-spacing: 0;
	}

	.chat-icon {
		width: 13px;
		height: 13px;
		stroke: #071D36;
		fill: none;
	}

	.btn-konsultasi:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.hamburger {
		display: none;
		background: none;
		border: none;
		color: #0B2747;
		cursor: pointer;
		padding: 0.25rem;
	}

	.mobile-menu {
		background: #FFFFFF;
		border-top: 1px solid #DCE6EE;
		padding: 1rem 2rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.mobile-link {
		font-size: 0.95rem;
		font-weight: 500;
		color: #183553;
		text-decoration: none;
		padding: 0.6rem 0;
		border-bottom: 1px solid #F1F5F9;
	}

	.mobile-link.active {
		color: #00A6B2;
		font-weight: 700;
	}

	.mobile-cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		margin-top: 1rem;
		padding: 0.65rem 1.25rem;
		background: #F4B334;
		color: #071D36;
		font-weight: 700;
		font-size: 0.88rem;
		border-radius: 6px;
		text-decoration: none;
	}

	@media (max-width: 992px) {
		.nav-list,
		.btn-konsultasi {
			display: none;
		}
		.hamburger {
			display: block;
		}
	}
</style>
