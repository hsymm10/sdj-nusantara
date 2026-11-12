<script lang="ts">
	import { tick, type Snippet } from 'svelte';
	import { chatStore } from '#lib/stores/chat.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';

	interface Props {
		isOpen: boolean;
		title: string;
		categoryLabel?: string;
		imageSrc: string;
		imageAlt?: string;
		fullPageRoute: string;
		chatQuestion?: string;
		consultationHref?: string;
		currentIndex?: number;
		totalCount?: number;
		onClose: () => void;
		onPrev?: () => void;
		onNext?: () => void;
		triggerElement?: HTMLElement | null;
		bookmarked?: boolean;
		onToggleBookmark?: () => void;
		children?: Snippet;
	}

	let {
		isOpen = false,
		title,
		categoryLabel = '',
		imageSrc,
		imageAlt = '',
		fullPageRoute,
		chatQuestion = '',
		consultationHref = '/kontak',
		currentIndex,
		totalCount,
		onClose,
		onPrev,
		onNext,
		triggerElement = null,
		bookmarked = false,
		onToggleBookmark,
		children
	}: Props = $props();

	let modalPanelEl = $state<HTMLElement | null>(null);
	let closeBtnEl = $state<HTMLButtonElement | null>(null);

	// Action Portal: Memindahkan modal ke body agar tidak terpotong overflow
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

	// Scroll lock tanpa layout shift
	$effect(() => {
		if (isOpen) {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			const originalOverflow = document.body.style.overflow;
			const originalPaddingRight = document.body.style.paddingRight;

			document.body.style.overflow = 'hidden';
			if (scrollbarWidth > 0) {
				document.body.style.paddingRight = `${scrollbarWidth}px`;
			}

			// Fokus awal ke tombol close
			tick().then(() => {
				closeBtnEl?.focus();
			});

			return () => {
				document.body.style.overflow = originalOverflow;
				document.body.style.paddingRight = originalPaddingRight;
				// Kembalikan fokus ke elemen pemicu
				if (triggerElement && typeof triggerElement.focus === 'function') {
					triggerElement.focus();
				}
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

		if (e.key === 'ArrowLeft' && onPrev && totalCount && totalCount > 1) {
			e.preventDefault();
			onPrev();
			return;
		}

		if (e.key === 'ArrowRight' && onNext && totalCount && totalCount > 1) {
			e.preventDefault();
			onNext();
			return;
		}

		// Focus trap
		if (e.key === 'Tab') {
			if (!modalPanelEl) return;
			const focusables = modalPanelEl.querySelectorAll<HTMLElement>(
				'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

	function handleChatClick() {
		const question = chatQuestion;
		onClose();
		chatStore.open();
		if (question) {
			chatStore.sendUserMessage(question);
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div class="modal-root" use:portal role="none">
		<!-- Backdrop -->
		<button
			type="button"
			class="modal-backdrop"
			onclick={onClose}
			aria-label="Tutup modal latar belakang"
			tabindex="-1"
		></button>

		<!-- Dialog Panel -->
		<div
			class="modal-container"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			bind:this={modalPanelEl}
		>
			<!-- Mobile Drag Handle -->
			<div class="mobile-drag-handle" aria-hidden="true"></div>

			<!-- Header Banner -->
			<div class="modal-banner-wrap">
				<img
					src={imageSrc}
					alt={imageAlt || title}
					class="modal-banner-img"
					loading="eager"
				/>
				<div class="banner-gradient"></div>

				<!-- Category Pill & Scope -->
				{#if categoryLabel}
					<div class="banner-pill">
						{categoryLabel}
					</div>
				{/if}

				<!-- Top Actions (Bookmark & Close) -->
				<div class="banner-top-actions">
					{#if onToggleBookmark}
						<button
							type="button"
							class="action-icon-btn {bookmarked ? 'bookmarked' : ''}"
							onclick={onToggleBookmark}
							aria-label={bookmarked ? i18n.pick('Hapus dari simpanan', 'Remove from saved') : i18n.pick('Simpan item ini', 'Save this item')}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill={bookmarked ? '#F5B331' : 'none'} stroke={bookmarked ? '#F5B331' : '#FFFFFF'} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
							</svg>
						</button>
					{/if}

					<button
						type="button"
						class="action-icon-btn close-btn"
						onclick={onClose}
						bind:this={closeBtnEl}
						aria-label={i18n.dict.common.close}
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
				</div>

				<!-- Single Subtle Wave Edge -->
				<div class="banner-wave-edge" aria-hidden="true">
					<svg viewBox="0 0 720 20" preserveAspectRatio="none" class="wave-svg">
						<path
							d="M0,0 C200,18 480,18 720,0 L720,20 L0,20 Z"
							fill="#FFFFFF"
						/>
						<path
							d="M0,2 C220,20 460,20 720,2"
							stroke="#079EAD"
							stroke-width="2.5"
							fill="none"
							opacity="0.65"
						/>
					</svg>
				</div>
			</div>

			<!-- Card Navigation Bar (Sebelumnya / Berikutnya) -->
			{#if totalCount && totalCount > 1 && currentIndex !== undefined}
				<div class="card-nav-bar">
					<button
						type="button"
						class="card-nav-btn"
						onclick={onPrev}
						aria-label={i18n.pick('Kartu sebelumnya', 'Previous card')}
					>
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="15 18 9 12 15 6"></polyline>
						</svg>
						<span>{i18n.pick('Sebelumnya', 'Previous')}</span>
					</button>

					<span class="card-nav-counter">
						{currentIndex + 1} {i18n.pick('dari', 'of')} {totalCount}
					</span>

					<button
						type="button"
						class="card-nav-btn"
						onclick={onNext}
						aria-label={i18n.pick('Kartu berikutnya', 'Next card')}
					>
						<span>{i18n.pick('Berikutnya', 'Next')}</span>
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</button>
				</div>
			{/if}

			<!-- Scrollable Content Body -->
			<div class="modal-body-scroll">
				{#if children}
					{@render children()}
				{/if}
			</div>

			<!-- Sticky Action Footer -->
			<div class="modal-sticky-footer">
				<div class="footer-primary-actions">
					<a href={consultationHref} class="btn-footer-gold" onclick={onClose}>
						<span>{i18n.pick('Konsultasi Persiapan', 'Preparation Consultation')}</span>
						<span class="footer-arrow" aria-hidden="true">→</span>
					</a>

					<button type="button" class="btn-footer-outline" onclick={handleChatClick}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
						</svg>
						<span>{i18n.pick('Tanya Asisten', 'Ask Assistant')}</span>
					</button>
				</div>

				<div class="footer-link-row">
					<a href={fullPageRoute} class="link-full-page" onclick={onClose}>
						<span>{i18n.pick('Buka halaman penuh', 'Open full page')}</span>
						<span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-root {
		position: fixed;
		inset: 0;
		z-index: 10000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px 16px;
		box-sizing: border-box;
	}

	.modal-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(8, 36, 66, 0.55);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		border: none;
		cursor: pointer;
		animation: backdropFade 200ms ease-out forwards;
	}

	@keyframes backdropFade {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.modal-container {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: min(720px, 92vw);
		max-height: 88vh;
		background: #FFFFFF;
		border-radius: 20px;
		box-shadow: 0 24px 60px rgba(8, 36, 66, 0.28), 0 4px 16px rgba(8, 36, 66, 0.08);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		animation: panelScaleIn 260ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}

	@keyframes panelScaleIn {
		from {
			opacity: 0;
			transform: translateY(12px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.modal-backdrop {
			animation: backdropFade 150ms ease-out forwards;
		}
		.modal-container {
			animation: backdropFade 150ms ease-out forwards;
			transform: none !important;
		}
	}

	.mobile-drag-handle {
		display: none;
	}

	/* Header Banner */
	.modal-banner-wrap {
		position: relative;
		width: 100%;
		height: 180px;
		background: #082442;
		overflow: hidden;
		flex-shrink: 0;
	}

	.modal-banner-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.banner-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(8, 36, 66, 0.65) 0%, rgba(8, 36, 66, 0.1) 60%);
	}

	.banner-pill {
		position: absolute;
		top: 16px;
		left: 18px;
		padding: 5px 14px;
		background: rgba(255, 255, 255, 0.95);
		color: #082442;
		font-size: 12.5px;
		font-weight: 700;
		border-radius: 9999px;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.15);
	}

	.banner-top-actions {
		position: absolute;
		top: 14px;
		right: 16px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.action-icon-btn {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(8, 36, 66, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.25);
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		backdrop-filter: blur(4px);
		transition: background 0.2s ease, transform 0.15s ease;
	}

	.action-icon-btn:hover {
		background: rgba(8, 36, 66, 0.85);
		transform: scale(1.05);
	}

	.action-icon-btn:focus-visible {
		outline: 3px solid #16B6C1;
		outline-offset: 2px;
	}

	.banner-wave-edge {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 18px;
		line-height: 0;
	}

	.wave-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Card Nav Bar */
	.card-nav-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 24px;
		background: #F8FAFC;
		border-bottom: 1px solid #E2E8F0;
		flex-shrink: 0;
	}

	.card-nav-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 12px;
		border: 1px solid #CBD5E1;
		border-radius: 8px;
		background: #FFFFFF;
		color: #1E293B;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.card-nav-btn:hover {
		background: #F1F5F9;
		border-color: #079EAD;
		color: #079EAD;
	}

	.card-nav-counter {
		font-size: 13px;
		font-weight: 700;
		color: #64748B;
	}

	/* Scrollable Body */
	.modal-body-scroll {
		padding: 24px 28px;
		overflow-y: auto;
		overscroll-behavior: contain;
		flex: 1;
	}

	/* Sticky Footer */
	.modal-sticky-footer {
		padding: 16px 28px;
		background: #FFFFFF;
		border-top: 1px solid #E2E8F0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex-shrink: 0;
		box-shadow: 0 -4px 16px rgba(8, 36, 66, 0.04);
	}

	.footer-primary-actions {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.btn-footer-gold {
		flex: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 44px;
		padding: 0 20px;
		background: #F5B331;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		transition: background 0.2s ease, transform 0.15s ease;
	}

	.btn-footer-gold:hover {
		background: #EAA31E;
		transform: translateY(-1px);
	}

	.btn-footer-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 44px;
		padding: 0 18px;
		background: #FFFFFF;
		border: 1.5px solid #082442;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.btn-footer-outline:hover {
		background: #F4F8FB;
		border-color: #079EAD;
		color: #079EAD;
	}

	.footer-link-row {
		text-align: center;
	}

	.link-full-page {
		font-size: 12.5px;
		font-weight: 600;
		color: #079EAD;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}

	.link-full-page:hover {
		text-decoration: underline;
		color: #082442;
	}

	/* Mobile ≤ 767px: Bottom sheet */
	@media (max-width: 767px) {
		.modal-root {
			padding: 0;
			align-items: flex-end;
		}

		.modal-container {
			max-width: 100vw;
			max-height: 92vh;
			border-radius: 22px 22px 0 0;
			animation: sheetSlideUp 260ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
		}

		@keyframes sheetSlideUp {
			from {
				opacity: 0;
				transform: translateY(100%);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		.mobile-drag-handle {
			display: block;
			width: 40px;
			height: 4px;
			background: #CBD5E1;
			border-radius: 9999px;
			margin: 10px auto 4px;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10;
		}

		.modal-banner-wrap {
			height: 140px;
		}

		.modal-body-scroll {
			padding: 18px 20px;
		}

		.modal-sticky-footer {
			padding: 12px 18px;
		}

		.footer-primary-actions {
			flex-direction: column;
		}

		.btn-footer-gold,
		.btn-footer-outline {
			width: 100%;
		}
	}
</style>

