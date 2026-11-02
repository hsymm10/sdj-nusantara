<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '#lib/data/navigation';
	import logoSdj from '#lib/assets/logo_sdj.png';

	interface Props {
		compact?: boolean;
		wide?: boolean;
	}

	// Default ke true agar seluruh halaman otomatis mengikuti ukuran & gaya Navbar Tentang Kami
	let { compact = true, wide = true }: Props = $props();
	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && mobileOpen) {
			mobileOpen = false;
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

	// Tutup drawer saat rute berpindah
	$effect(() => {
		const _ = page.url.pathname;
		mobileOpen = false;
	});

	function isActive(href: string): boolean {
		if (href === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(href);
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="navbar">
	<!-- Swoosh abu-abu samar (#E5EAEE) di pojok kanan-atas navbar -->
	<svg class="nav-top-swoosh" viewBox="0 0 96 48" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 48 C40 32 75 15 96 0 H96 V48 Z" fill="#E5EAEE" fill-opacity="0.75"/>
	</svg>

	<div class="navbar-inner">
		<!-- Logo (ikon 28px, SDJNusantara 16px bold, Strategic Your Partner 10px) -->
		<a href="/" class="logo-link" aria-label="SDJNusantara Beranda">
			<div class="nav-logo-box">
				<img
					src={logoSdj}
					alt="Logo SDJNusantara"
					class="nav-logo-img"
					width="28"
					height="28"
				/>
				<div class="nav-logo-text">
					<span class="nav-brand-title">SDJNusantara</span>
					<span class="nav-brand-tagline">Strategic Your Partner</span>
				</div>
			</div>
		</a>

		<!-- Desktop Navigation (Font 11px, gap 1.35rem, konsisten mengikuti Tentang Kami) -->
		<ul class="nav-list">
			{#each navItems as item}
				<li class="nav-item">
					<a
						href={item.href}
						class="nav-link {isActive(item.href) ? 'active' : ''}"
					>
						<span>{item.label}</span>
						{#if item.hasDropdown}
							<svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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

		<!-- Mobile Hamburger -->
		<button
			class="hamburger"
			onclick={toggleMobile}
			aria-label="Toggle navigasi"
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

	<!-- Mobile Menu Drawer (seluruh item navigasi, drawer lock body scroll) -->
	{#if mobileOpen}
		<div class="mobile-menu-backdrop" onclick={() => mobileOpen = false} role="presentation"></div>
		<div class="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu navigasi mobile">
			<div class="mobile-menu-inner">
				{#each navItems as item}
					<a
						href={item.href}
						class="mobile-link {isActive(item.href) ? 'active' : ''}"
						onclick={() => mobileOpen = false}
					>
						<span>{item.label}</span>
						{#if isActive(item.href)}
							<span class="mobile-active-dot"></span>
						{/if}
					</a>
				{/each}
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

	/* Ukuran container lebar konsisten persis seperti Tentang Kami (1312px, 1500px di 1920px) */
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

	.nav-logo-box {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.nav-logo-img {
		width: 28px;
		height: 28px;
		object-fit: contain;
		flex-shrink: 0;
	}

	.nav-logo-text {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.nav-brand-title {
		font-size: 16px;
		font-weight: 800;
		color: #0B2747;
		letter-spacing: -0.015em;
	}

	.nav-brand-tagline {
		font-size: 10px;
		font-weight: 500;
		color: #64748B;
		letter-spacing: 0.04em;
		margin-top: 1px;
	}

	.nav-list {
		display: flex;
		align-items: center;
		gap: 1.35rem;
		list-style: none;
		margin: 0;
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
		gap: 0.2rem;
		height: 100%;
		padding: 0 0.15rem;
		font-size: 11px;
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

	@media (max-width: 992px) {
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
</style>
