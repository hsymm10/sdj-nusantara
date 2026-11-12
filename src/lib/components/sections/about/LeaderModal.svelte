<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type leadersData from '#lib/data/leaders.js';
	import { leadersEnMap } from '#lib/i18n/dataEn';
	import { i18n } from '#lib/stores/i18n.svelte';

	type Leader = (typeof leadersData)[0];

	interface Props {
		isOpen?: boolean;
		leader: Leader | null;
		currentIndex?: number;
		totalCount?: number;
		onClose: () => void;
		onPrev: () => void;
		onNext: () => void;
		triggerElement?: HTMLElement | null;
	}

	let {
		isOpen = false,
		leader,
		currentIndex = 0,
		totalCount = 5,
		onClose,
		onPrev,
		onNext,
		triggerElement = null
	}: Props = $props();

	let modalEl = $state<HTMLElement | null>(null);
	let closeBtnEl = $state<HTMLButtonElement | null>(null);

	let displayLeader = $derived.by(() => {
		if (!leader) return null;
		if (i18n.lang === 'en' && leadersEnMap[leader.id]) {
			return { ...leader, ...leadersEnMap[leader.id] };
		}
		return leader;
	});

	// Portal action: appends modal to document.body
	function portal(node: HTMLElement) {
		document.body.appendChild(node);
		return {
			destroy() {
				if (node.parentNode) {
					node.parentNode.removeChild(node);
				}
			}
		};
	}

	// Scroll lock with scrollbar width compensation
	$effect(() => {
		if (isOpen) {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			if (scrollbarWidth > 0) {
				document.body.style.paddingRight = `${scrollbarWidth}px`;
			}

			// Focus close button on open
			tick().then(() => {
				closeBtnEl?.focus();
			});

			return () => {
				document.body.style.overflow = '';
				document.body.style.paddingRight = '';
				// Return focus to trigger element
				triggerElement?.focus();
			};
		}
	});

	function handleKeydown(e: KeyboardEvent) {
		if (!isOpen) return;

		if (e.key === 'Escape') {
			e.preventDefault();
			onClose();
			return;
		}

		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			onPrev();
			return;
		}

		if (e.key === 'ArrowRight') {
			e.preventDefault();
			onNext();
			return;
		}

		// Focus trap
		if (e.key === 'Tab') {
			if (!modalEl) return;
			const focusables = modalEl.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			if (focusables.length === 0) return;

			const first = focusables[0];
			const last = focusables[focusables.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen && leader}
	<div
		use:portal
		class="modal-backdrop"
		onclick={handleBackdropClick}
		role="presentation"
	>
		<div
			bind:this={modalEl}
			class="modal-panel"
			role="dialog"
			aria-modal="true"
			aria-labelledby="leader-modal-title"
			aria-describedby="leader-modal-desc"
		>
			<!-- Mobile drag handle -->
			<div class="mobile-handle" aria-hidden="true"></div>

			<!-- Background Wave SVG Decor Top-Left -->
			<svg
				class="deco-wave deco-top-left"
				width="150"
				height="60"
				viewBox="0 0 150 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M0 0C45 38 95 42 150 0H0V60C0 60 25 22 65 12"
					fill="url(#tealGradTop)"
					opacity="0.14"
				/>
				<defs>
					<linearGradient id="tealGradTop" x1="0" y1="0" x2="150" y2="60" gradientUnits="userSpaceOnUse">
						<stop stop-color="#079EAD" />
						<stop offset="1" stop-color="#16B6C1" />
					</linearGradient>
				</defs>
			</svg>

			<!-- Background Wave SVG Decor Bottom-Right -->
			<svg
				class="deco-wave deco-bottom-right"
				width="330"
				height="110"
				viewBox="0 0 330 110"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M330 110C235 68 115 84 0 110H330V0C330 42 278 82 238 92"
					fill="url(#tealGradBottom)"
					opacity="0.10"
				/>
				<defs>
					<linearGradient id="tealGradBottom" x1="330" y1="110" x2="0" y2="0" gradientUnits="userSpaceOnUse">
						<stop stop-color="#079EAD" />
						<stop offset="1" stop-color="#16B6C1" />
					</linearGradient>
				</defs>
			</svg>

			<!-- Close Button X -->
			<button
				bind:this={closeBtnEl}
				type="button"
				class="close-btn"
				onclick={onClose}
				aria-label={i18n.dict.common.close}
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<div class="modal-body">
				<!-- Left Column: Portrait Photo -->
				<div class="left-col">
					<div class="photo-frame">
						{#if leader.foto.includes('.webp')}
							<picture>
								<source srcset={leader.foto} type="image/webp" />
								<img
									src={leader.foto.replace('.webp', '.jpg')}
									alt={leader.fotoAlt}
									class="modal-photo"
									width="246"
									height="305"
								/>
							</picture>
						{:else}
							<img
								src={leader.foto}
								alt={leader.fotoAlt}
								class="modal-photo"
								width="246"
								height="305"
							/>
						{/if}
					</div>
				</div>

				<!-- Right Column: Profile Details -->
				<div class="right-col">
					<!-- Pill & Badge Header -->
					<div class="pills-row">
						<span class="profile-pill">{i18n.pick('Profil Pimpinan', 'Leadership Profile')}</span>
						{#if leader.isPlaceholder}
							<span class="placeholder-tag" title="Data contoh sementara">
								{i18n.pick('Data contoh', 'Sample data')}
							</span>
						{/if}
					</div>

					<!-- Leader Name -->
					<h2 id="leader-modal-title" class="leader-name">
						{leader.nama}
					</h2>

					<!-- Leader Role with Portfolio/Building Icon -->
					<div class="leader-role-row">
						<svg class="role-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
							<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
						</svg>
						<span class="role-text">{leader.jabatanDetail || leader.jabatan}</span>
					</div>

					<!-- Divider -->
					<div class="modal-divider" aria-hidden="true"></div>

					<!-- Short Bio -->
					<div class="bio-section">
						<h3 class="bio-title">{i18n.pick('Profil Singkat', 'Short Biography')}</h3>
						<div id="leader-modal-desc" class="bio-paragraphs">
							{#each (displayLeader?.profilSingkat ?? leader.profilSingkat).split(/\n\s*\n/) as paragraph}
								<p class="bio-text">{paragraph}</p>
							{/each}
						</div>
					</div>

					<!-- Info Rows (Pendidikan & Jabatan) -->
					<div class="info-rows">
						<div class="info-row">
							<div class="info-label-box">
								<svg class="info-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
									<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
								</svg>
								<span class="info-label">{i18n.pick('Pendidikan', 'Education')}</span>
							</div>
							<div class="info-value">{displayLeader?.pendidikan ?? leader.pendidikan}</div>
						</div>

						<div class="info-row">
							<div class="info-label-box">
								<svg class="info-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M20 7h-4v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
								</svg>
								<span class="info-label">{i18n.pick('Jabatan', 'Position')}</span>
							</div>
							<div class="info-value">{leader.jabatan}</div>
						</div>
					</div>

					<!-- Footer Navigation: Prev / Next buttons and counter -->
					<div class="modal-nav-footer">
						<div class="counter-text">{currentIndex + 1} {i18n.pick('dari', 'of')} {totalCount}</div>
						<div class="nav-btn-group">
							<button
								type="button"
								class="modal-nav-btn"
								onclick={onPrev}
								aria-label={i18n.pick('Pimpinan sebelumnya', 'Previous leader')}
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="15 18 9 12 15 6"></polyline>
								</svg>
							</button>
							<button
								type="button"
								class="modal-nav-btn"
								onclick={onNext}
								aria-label={i18n.pick('Pimpinan berikutnya', 'Next leader')}
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Modal Backdrop */
	.modal-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(8, 36, 66, 0.55);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 20px;
		box-sizing: border-box;
		animation: backdropFade 200ms ease forwards;
	}

	@keyframes backdropFade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Modal Panel - Fixed & Consistent Dimensions */
	.modal-panel {
		background: #FFFFFF;
		border-radius: 18px;
		box-shadow: 0 24px 60px rgba(8, 36, 66, 0.28);
		width: 828px;
		height: 512px;
		min-height: 512px;
		max-width: min(900px, 92vw);
		max-height: 90vh;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		animation: panelAppear 260ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}

	@keyframes panelAppear {
		from {
			opacity: 0;
			transform: translateY(12px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	/* Mobile Drag Handle (hidden on desktop) */
	.mobile-handle {
		display: none;
		width: 44px;
		height: 4px;
		border-radius: 2px;
		background: #CBD5E1;
		margin: 10px auto 4px auto;
	}

	/* SVG Wave Decor */
	.deco-wave {
		position: absolute;
		pointer-events: none;
		z-index: 1;
	}

	.deco-top-left {
		top: 0;
		left: 0;
	}

	.deco-bottom-right {
		bottom: 0;
		right: 0;
	}

	/* Close Button */
	.close-btn {
		position: absolute;
		top: 16px;
		right: 16px;
		width: 40px;
		height: 40px;
		min-width: 44px;
		min-height: 44px;
		border-radius: 50%;
		border: none;
		background: transparent;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 180ms ease, color 180ms ease;
		z-index: 10;
		outline: none;
	}

	.close-btn:hover {
		background: #F4F8FB;
		color: #079EAD;
	}

	.close-btn:focus-visible {
		box-shadow: 0 0 0 3px #16B6C1;
	}

	/* Modal Body Layout */
	.modal-body {
		display: grid;
		grid-template-columns: 280px 1fr;
		position: relative;
		z-index: 2;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Left Column */
	.left-col {
		padding: 34px 0 34px 34px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		height: 100%;
	}

	.photo-frame {
		width: 246px;
		height: 305px;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #E3EAF1;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.08);
		background: #EDF2F7;
	}

	.modal-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
	}

	/* Right Column */
	.right-col {
		padding: 32px 38px 24px 30px;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		overflow-y: auto;
	}

	/* Pills Row */
	.pills-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
		flex-shrink: 0;
	}

	.profile-pill {
		display: inline-flex;
		align-items: center;
		background: #D9F4F6;
		color: #05707B;
		font-size: 13px;
		font-weight: 600;
		padding: 4px 12px;
		border-radius: 9999px;
		letter-spacing: 0.01em;
	}

	.placeholder-tag {
		display: inline-flex;
		align-items: center;
		background: #FEF3C7;
		color: #92400E;
		font-size: 11px;
		font-weight: 600;
		padding: 3px 8px;
		border-radius: 6px;
		border: 1px solid #FCD34D;
	}

	/* Leader Name H2 - Consistent 2-line height so content below never shifts */
	.leader-name {
		font-size: 26px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px 0;
		line-height: 1.25;
		letter-spacing: -0.01em;
		min-height: 65px;
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	/* Leader Role Row */
	.leader-role-row {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #183553;
		font-size: 15px;
		font-weight: 500;
		margin-bottom: 12px;
		min-height: 22px;
		flex-shrink: 0;
	}

	.role-icon {
		flex-shrink: 0;
	}

	.role-text {
		color: #183553;
	}

	/* Divider */
	.modal-divider {
		height: 1px;
		background: #D9E2EC;
		margin: 0 0 14px 0;
		width: 100%;
		flex-shrink: 0;
	}

	/* Bio Section */
	.bio-section {
		margin-bottom: 14px;
		flex-shrink: 0;
	}

	.bio-title {
		font-size: 14.5px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 5px 0;
	}

	.bio-paragraphs {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.bio-text {
		font-size: 13.5px;
		line-height: 1.55;
		color: #183553;
		margin: 0;
	}

	/* Info Rows */
	.info-rows {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: auto;
		flex-shrink: 0;
	}

	.info-row {
		display: flex;
		align-items: center;
		font-size: 13px;
		padding: 3px 0;
		border-bottom: 1px dashed #E2E8F0;
		min-height: 26px;
	}

	.info-label-box {
		width: 115px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		gap: 6px;
		font-weight: 700;
		color: #082442;
	}

	.info-icon {
		flex-shrink: 0;
	}

	.info-value {
		flex: 1;
		color: #183553;
		line-height: 1.35;
	}

	/* Footer Navigation */
	.modal-nav-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: auto;
		padding-top: 10px;
		border-top: 1px solid #F1F5F9;
		flex-shrink: 0;
	}

	.counter-text {
		font-size: 12.5px;
		color: #64748B;
		font-weight: 500;
	}

	.nav-btn-group {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.modal-nav-btn {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid #CBD5E1;
		background: #FFFFFF;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 180ms ease;
		outline: none;
	}

	.modal-nav-btn:hover {
		background: #F8FAFC;
		border-color: #079EAD;
		color: #079EAD;
	}

	.modal-nav-btn:focus-visible {
		box-shadow: 0 0 0 3px #16B6C1;
	}

	/* Responsive Styles */
	@media (max-width: 820px) {
		.modal-panel {
			width: 94vw;
		}

		.modal-body {
			grid-template-columns: 220px 1fr;
		}

		.photo-frame {
			width: 190px;
			height: 240px;
		}

		.right-col {
			padding: 28px 24px 24px 20px;
		}

		.leader-name {
			font-size: 22px;
		}
	}

	/* Mobile Bottom Sheet (≤767px) */
	@media (max-width: 767px) {
		.modal-backdrop {
			padding: 0;
			align-items: flex-end; /* Bottom sheet */
		}

		.modal-panel {
			width: 100%;
			max-width: 100%;
			max-height: 92vh;
			border-radius: 20px 20px 0 0;
			animation: bottomSheetSlide 280ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
		}

		@keyframes bottomSheetSlide {
			from {
				opacity: 0;
				transform: translateY(100%);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		.mobile-handle {
			display: block;
		}

		.modal-body {
			grid-template-columns: 1fr;
			overflow-y: auto;
			max-height: calc(92vh - 30px);
		}

		.left-col {
			padding: 16px 20px 8px 20px;
			justify-content: center;
		}

		.photo-frame {
			width: 140px;
			height: 175px;
		}

		.right-col {
			padding: 16px 20px 24px 20px;
			overflow-y: visible;
		}

		.leader-name {
			font-size: 20px;
		}

		.leader-role-row {
			font-size: 14px;
		}

		.info-row {
			flex-direction: column;
			gap: 4px;
			font-size: 14px;
		}

		.info-label-box {
			width: auto;
		}
	}

	/* Respect prefers-reduced-motion */
	@media (prefers-reduced-motion: reduce) {
		.modal-backdrop,
		.modal-panel {
			animation: none;
			transform: none;
			transition: opacity 150ms ease;
		}
	}
</style>
