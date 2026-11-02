<script lang="ts">
	import { chatConfig } from '#lib/config/chat';
	import { chatStore } from '#lib/stores/chat.svelte';

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function handleClear() {
		menuOpen = false;
		if (confirm('Hapus seluruh riwayat percakapan dan mulai dari awal?')) {
			chatStore.clearConversation();
		}
	}

	function handleMinimize() {
		chatStore.close();
	}

	function handleClose() {
		chatStore.close();
	}
</script>

<header class="chat-header">
	<!-- Left: Avatar + Title & Status -->
	<div class="header-brand">
		<div class="bot-avatar-circle" aria-hidden="true">
			<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
				<rect x="4" y="6" width="16" height="12" rx="4" fill="#079EAD" />
				<circle cx="9" cy="11.5" r="1.5" fill="#FFFFFF" />
				<circle cx="15" cy="11.5" r="1.5" fill="#FFFFFF" />
				<path d="M10 14.5c.7.6 1.7.9 2 .9s1.3-.3 2-.9" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
				<path d="M12 2.5v3.5" stroke="#079EAD" stroke-width="2" stroke-linecap="round" />
				<circle cx="12" cy="2.5" r="1.25" fill="#079EAD" />
				<rect x="2" y="10" width="2" height="4" rx="1" fill="#079EAD" />
				<rect x="20" y="10" width="2" height="4" rx="1" fill="#079EAD" />
			</svg>
		</div>

		<div class="brand-text">
			<h2 class="assistant-name">{chatConfig.title}</h2>
			<div class="assistant-status">
				<span class="status-indicator" aria-hidden="true"></span>
				<span class="status-label">{chatConfig.subtitle}</span>
			</div>
		</div>
	</div>

	<!-- Right: Actions (Menu, Minimize, Close) -->
	<div class="header-actions">
		<!-- Menu titik tiga / Opsi Hapus Percakapan -->
		<div class="action-menu-wrap">
			<button
				type="button"
				class="header-icon-btn"
				onclick={toggleMenu}
				aria-label="Opsi percakapan"
				aria-expanded={menuOpen}
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="1"></circle>
					<circle cx="12" cy="5" r="1"></circle>
					<circle cx="12" cy="19" r="1"></circle>
				</svg>
			</button>

			{#if menuOpen}
				<div class="header-dropdown-menu" role="menu">
					<button type="button" class="dropdown-item danger" onclick={handleClear} role="menuitem">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="3 6 5 6 21 6"></polyline>
							<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
						</svg>
						<span>Hapus Percakapan</span>
					</button>
				</div>
			{/if}
		</div>

		<!-- Minimize Button (Hit area ≥ 40px) -->
		<button
			type="button"
			class="header-icon-btn"
			onclick={handleMinimize}
			aria-label="Perkecil"
			title="Perkecil"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
				<line x1="5" y1="12" x2="19" y2="12"></line>
			</svg>
		</button>

		<!-- Close Button (Hit area ≥ 40px) -->
		<button
			type="button"
			class="header-icon-btn"
			onclick={handleClose}
			aria-label="Tutup"
			title="Tutup"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>
	</div>

	<!-- Wave Shape Divider di Tepi Bawah Header (SVG Presisi seperti Referensi) -->
	<div class="header-wave" aria-hidden="true">
		<svg viewBox="0 0 392 16" fill="none" preserveAspectRatio="none">
			<path d="M0 0 C120 12 260 14 392 0 V16 H0 Z" fill="#FFFFFF" />
		</svg>
	</div>
</header>

<style>
	.chat-header {
		position: relative;
		background: #079EAD;
		color: #FFFFFF;
		padding: 14px 14px 22px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 20px 20px 0 0;
		box-shadow: 0 2px 10px rgba(7, 158, 173, 0.25);
		user-select: none;
	}

	.header-brand {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.bot-avatar-circle {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
		flex-shrink: 0;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.assistant-name {
		font-size: 15.5px;
		font-weight: 700;
		color: #FFFFFF;
		line-height: 1.25;
		margin: 0;
	}

	.assistant-status {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.status-indicator {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #22C55E; /* Hijau aktif */
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
	}

	.status-label {
		font-size: 12px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.92);
		letter-spacing: 0.01em;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 2px;
		position: relative;
		z-index: 2;
	}

	.header-icon-btn {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: transparent;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
		transition: background-color 0.15s ease, opacity 0.15s ease;
		opacity: 0.9;
	}

	.header-icon-btn:hover {
		background: rgba(255, 255, 255, 0.18);
		opacity: 1;
	}

	.header-icon-btn:focus-visible {
		outline: 2px solid #FFFFFF;
		outline-offset: 1px;
	}

	.action-menu-wrap {
		position: relative;
	}

	.header-dropdown-menu {
		position: absolute;
		top: 42px;
		right: 0;
		background: #FFFFFF;
		color: #082442;
		border-radius: 12px;
		padding: 6px;
		min-width: 170px;
		box-shadow: 0 8px 24px rgba(11, 39, 71, 0.2);
		border: 1px solid #DCE6EE;
		z-index: 10;
		animation: dropdownFade 0.15s ease forwards;
	}

	.dropdown-item {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		border-radius: 8px;
		font-size: 13px;
		font-weight: 500;
		background: transparent;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background 0.12s ease;
	}

	.dropdown-item.danger {
		color: #E5484D;
	}

	.dropdown-item.danger:hover {
		background: #FEE2E2;
	}

	.header-wave {
		position: absolute;
		bottom: -1px;
		left: 0;
		right: 0;
		height: 14px;
		pointer-events: none;
		z-index: 1;
	}

	.header-wave svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	@keyframes dropdownFade {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
