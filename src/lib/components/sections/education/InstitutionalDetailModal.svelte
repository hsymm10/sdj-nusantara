<!-- src/lib/components/sections/education/InstitutionalDetailModal.svelte -->
<!-- Modal Detail Solusi Institusi — Master Visual Reference Implementation -->
<script lang="ts">
	import { tick } from 'svelte';
	import { getLenis } from '#lib/utils/lenis';
	import { i18n } from '#lib/stores/i18n.svelte';

	export interface PillarItem {
		icon: string;
		label: string;
	}

	export interface TargetAudienceItem {
		icon: string;
		label: string;
	}

	export interface InstitutionalServiceData {
		id: string;
		title: string;
		badge: string;
		desc: string;
		checklist?: string[];
		img: string;
		overview: string;
		highlights?: string[];
		targetAudience?: string[];
		pillars?: PillarItem[];
		coverageBenefits?: string[];
		targetAudienceWithIcons?: TargetAudienceItem[];
	}

	interface Props {
		isOpen: boolean;
		service: InstitutionalServiceData | null;
		triggerElement?: HTMLElement | null;
		onclose: () => void;
	}

	let { isOpen, service, triggerElement = null, onclose }: Props = $props();

	let modalCardEl = $state<HTMLDivElement | null>(null);
	let closeBtnEl = $state<HTMLButtonElement | null>(null);

	// Reset scroll position modal saat service berubah
	$effect(() => {
		if (service && modalCardEl) {
			modalCardEl.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
		}
	});

	// Penguncian Scroll Layar Penuh & Integrasi Lenis Tanpa Layout Shift
	$effect(() => {
		if (isOpen) {
			const lenis = getLenis();
			lenis?.stop();

			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			const originalBodyOverflow = document.body.style.overflow;
			const originalHtmlOverflow = document.documentElement.style.overflow;
			const originalPaddingRight = document.body.style.paddingRight;

			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			if (scrollbarWidth > 0) {
				document.body.style.paddingRight = `${scrollbarWidth}px`;
			}

			// Pindahkan fokus ke tombol close untuk aksesibilitas
			tick().then(() => {
				closeBtnEl?.focus();
			});

			return () => {
				document.documentElement.style.overflow = originalHtmlOverflow;
				document.body.style.overflow = originalBodyOverflow;
				document.body.style.paddingRight = originalPaddingRight;
				lenis?.start();

				// Kembalikan fokus ke tombol pemanggil jika ada
				if (triggerElement && typeof triggerElement.focus === 'function') {
					triggerElement.focus();
				}
			};
		}
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && isOpen) {
			e.preventDefault();
			onclose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen && service}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="inst-modal-backdrop"
		role="presentation"
		data-lenis-prevent
		onclick={(e) => {
			if (e.target === e.currentTarget) onclose();
		}}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			bind:this={modalCardEl}
			class="inst-modal-card"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-hero-title"
			tabindex="-1"
			data-lenis-prevent
			onclick={(e) => e.stopPropagation()}
			onwheel={(e) => e.stopPropagation()}
			ontouchmove={(e) => e.stopPropagation()}
		>
			<!-- ====================================================
			     A. HERO SECTION DENGAN OVERLAY GRADIENT & DEKORASI
			     ==================================================== -->
			<div class="inst-modal-hero">
				<!-- Foto Latar Belakang Kanan -->
				<img
					src={service.img}
					alt={service.title}
					class="hero-bg-photo"
					loading="eager"
					decoding="async"
				/>

				<!-- Overlay Gradient Navy di Sisi Kiri (Teks Jelas Terbaca) -->
				<div class="hero-navy-gradient" aria-hidden="true"></div>

				<!-- Aksen Dekoratif Swoosh Emas/Kuning & Teal di Kanan Bawah (Brand Signature) -->
				<svg
					class="hero-swoosh-accent"
					viewBox="0 0 260 120"
					fill="none"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<!-- Kurva Teal Bawah -->
					<path
						d="M0 120 C90 110 170 70 260 0 V120 H0 Z"
						fill="#00A6B2"
					/>
					<!-- Kurva Kuning Emas Atas -->
					<path
						d="M40 120 C120 108 190 62 260 18 V120 H40 Z"
						fill="#FFB923"
					/>
					<!-- Kurva Navy Pengunci Sudut -->
					<path
						d="M100 120 C160 112 210 82 260 48 V120 H100 Z"
						fill="#082442"
					/>
				</svg>

				<!-- Tombol Close (X) Putih di Pojok Kanan Atas -->
				<button
					bind:this={closeBtnEl}
					type="button"
					class="hero-close-btn"
					onclick={onclose}
					aria-label={i18n.pick('Tutup modal', 'Close modal')}
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#082442"
						stroke-width="2.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>

				<!-- Konten Teks Hero di Kiri -->
				<div class="hero-text-content">
					<!-- Badge Kategori Solusi Institusi Emas -->
					<div class="hero-category-badge">
						<span class="badge-icon" aria-hidden="true">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFB923" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
							</svg>
						</span>
						<span class="badge-label">{i18n.pick('Solusi Institusi', 'Institutional Solution')}</span>
					</div>

					<!-- Judul Layanan Tipografi Tegas -->
					<h3 id="modal-hero-title" class="hero-title">{service.title}</h3>

					<!-- Deskripsi Singkat -->
					<p class="hero-desc">{service.desc}</p>

					<!-- Baris Dua Tag Pill (Teal & Putih) Sesuai Mockup -->
					<div class="hero-pills-row">
						<!-- Pill 1: Teal dengan Ikon Gedung -->
						<span class="hero-pill-teal">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
							</svg>
							<span>{i18n.pick('Solusi Institusi', 'Institutional Solution')}</span>
						</span>

						<!-- Pill 2: Putih dengan Teks Navy Bold -->
						<span class="hero-pill-white">
							{service.badge || service.title}
						</span>
					</div>
				</div>
			</div>

			<!-- ====================================================
			     B. HIGHLIGHT MANFAAT (BARIS 5 PILAR DENGAN DIVIDER)
			     ==================================================== -->
			{#if service.pillars && service.pillars.length > 0}
				<div class="highlight-pillars-bar" role="region" aria-label={i18n.pick('Pilar Manfaat Utama', 'Core Benefit Pillars')}>
					{#each service.pillars as pillar, idx}
						{#if idx > 0}
							<div class="pillar-divider" aria-hidden="true"></div>
						{/if}
						<div class="pillar-item">
							<div class="pillar-icon-wrap" aria-hidden="true">
								{#if pillar.icon === 'leadership' || pillar.icon === 'assessment'}
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								{:else if pillar.icon === 'productivity' || pillar.icon === 'upskilling' || pillar.icon === 'design'}
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
										<polyline points="2 17 12 22 22 17"></polyline>
										<polyline points="2 12 12 17 22 12"></polyline>
									</svg>
								{:else if pillar.icon === 'synergy' || pillar.icon === 'consortium' || pillar.icon === 'integration'}
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M11 17l-5-5a2.5 2.5 0 0 1 0-3.5 2.5 2.5 0 0 1 3.5 0L12 11l2.5-2.5a2.5 2.5 0 0 1 3.5 0 2.5 2.5 0 0 1 0 3.5l-5 5"></path>
										<path d="M12 2a10 10 0 1 0 10 10"></path>
									</svg>
								{:else if pillar.icon === 'operations' || pillar.icon === 'performance' || pillar.icon === 'evaluation'}
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<line x1="18" y1="20" x2="18" y2="10"></line>
										<line x1="12" y1="20" x2="12" y2="4"></line>
										<line x1="6" y1="20" x2="6" y2="14"></line>
									</svg>
								{:else}
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
										<polyline points="9 12 11 14 15 10"></polyline>
									</svg>
								{/if}
							</div>
							<span class="pillar-label">{pillar.label}</span>
						</div>
					{/each}
				</div>
			{/if}

			<!-- ====================================================
			     BODY KONTEN DETAIL (SECTIONS C, D, E)
			     ==================================================== -->
			<div class="inst-modal-body">
				<!-- ==============================================
				     C. GAMBARAN LENGKAP LAYANAN
				     ============================================== -->
				<section class="modal-section" aria-labelledby="heading-gambaran">
					<div class="section-heading-row">
						<span class="heading-icon" aria-hidden="true">
							<!-- Ikon Dokumen Kuning Emas -->
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB923" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
								<polyline points="14 2 14 8 20 8"></polyline>
								<line x1="16" y1="13" x2="8" y2="13"></line>
								<line x1="16" y1="17" x2="8" y2="17"></line>
								<polyline points="10 9 9 9 8 9"></polyline>
							</svg>
						</span>
						<h4 id="heading-gambaran" class="heading-text">
							{i18n.pick('Gambaran Lengkap Layanan', 'Complete Service Overview')}
						</h4>
						<div class="heading-accent-line" aria-hidden="true">
							<span class="accent-gold-bar"></span>
							<span class="accent-grey-line"></span>
						</div>
					</div>

					<!-- Panel Soft Cyan/Grey dengan Ikon Kiri -->
					<div class="overview-soft-card">
						<div class="overview-icon-box" aria-hidden="true">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						</div>
						<p class="overview-text">{service.overview}</p>
					</div>
				</section>

				<!-- ==============================================
				     D. CAKUPAN PROGRAM & MANFAAT LAYANAN (2 KOLOM)
				     ============================================== -->
				<section class="modal-section" aria-labelledby="heading-cakupan">
					<div class="section-heading-row">
						<span class="heading-icon" aria-hidden="true">
							<!-- Ikon Target / Bullseye Kuning Emas -->
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB923" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<circle cx="12" cy="12" r="6"></circle>
								<circle cx="12" cy="12" r="2"></circle>
							</svg>
						</span>
						<h4 id="heading-cakupan" class="heading-text">
							{i18n.pick('Cakupan Program & Manfaat Layanan', 'Program Scope & Service Benefits')}
						</h4>
						<div class="heading-accent-line" aria-hidden="true">
							<span class="accent-gold-bar"></span>
							<span class="accent-grey-line"></span>
						</div>
					</div>

					<!-- Grid Dua Kolom Checklist -->
					<div class="benefits-grid-two-col">
						{#each (service.coverageBenefits || service.highlights || []) as benefit}
							<div class="benefit-item">
								<span class="benefit-check-icon" aria-hidden="true">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</span>
								<span class="benefit-label">{benefit}</span>
							</div>
						{/each}
					</div>
				</section>

				<!-- ==============================================
				     E. SASARAN INSTITUSI MITRA (BADGES ROW)
				     ============================================== -->
				<section class="modal-section" aria-labelledby="heading-sasaran">
					<div class="section-heading-row">
						<span class="heading-icon" aria-hidden="true">
							<!-- Ikon People/Community Kuning Emas -->
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB923" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						</span>
						<h4 id="heading-sasaran" class="heading-text">
							{i18n.pick('Sasaran Institusi Mitra', 'Target Institutional Partners')}
						</h4>
						<div class="heading-accent-line" aria-hidden="true">
							<span class="accent-gold-bar"></span>
							<span class="accent-grey-line"></span>
						</div>
					</div>

					<!-- Badges / Chips Mitra dengan Ikon -->
					<div class="audience-badges-row">
						{#if service.targetAudienceWithIcons && service.targetAudienceWithIcons.length > 0}
							{#each service.targetAudienceWithIcons as audience}
								<div class="audience-badge-chip">
									<span class="chip-icon" aria-hidden="true">
										{#if audience.icon === 'campus'}
											<!-- Toga / Kampus -->
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
												<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
												<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
											</svg>
										{:else if audience.icon === 'gov'}
											<!-- Pilar Pemerintah -->
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
												<line x1="3" y1="21" x2="21" y2="21"></line>
												<line x1="3" y1="10" x2="21" y2="10"></line>
												<polyline points="5 6 12 3 19 6"></polyline>
												<line x1="4" y1="10" x2="4" y2="21"></line>
												<line x1="20" y1="10" x2="20" y2="21"></line>
												<line x1="8" y1="14" x2="8" y2="17"></line>
												<line x1="12" y1="14" x2="12" y2="17"></line>
												<line x1="16" y1="14" x2="16" y2="17"></line>
											</svg>
										{:else if audience.icon === 'biz'}
											<!-- Gedung Korporasi / Industri -->
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
												<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
												<polyline points="2 17 12 22 22 17"></polyline>
												<polyline points="2 12 12 17 22 12"></polyline>
											</svg>
										{:else}
											<!-- Komunitas / Organisasi -->
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
												<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
												<circle cx="9" cy="7" r="4"></circle>
												<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
												<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
											</svg>
										{/if}
									</span>
									<span class="chip-text">{audience.label}</span>
								</div>
							{/each}
						{:else if service.targetAudience}
							{#each service.targetAudience as audienceText}
								<div class="audience-badge-chip">
									<span class="chip-icon" aria-hidden="true">
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
											<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
											<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
										</svg>
									</span>
									<span class="chip-text">{audienceText}</span>
								</div>
							{/each}
						{/if}
					</div>
				</section>
			</div>
		</div>
	</div>
{/if}

<style>
	/* ========================================================
	   BACKDROP OVERLAY
	   ======================================================== */
	.inst-modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 9999;
		background: rgba(8, 36, 66, 0.72);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		box-sizing: border-box;
		animation: modalFadeIn 0.22s ease-out forwards;
		overscroll-behavior: contain;
	}

	@keyframes modalFadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	/* ========================================================
	   CONTAINER CARD MODAL (90vh, INTERNAL SCROLL, 860px MAX)
	   ======================================================== */
	.inst-modal-card {
		background: #FFFFFF;
		border-radius: 24px;
		box-shadow: 0 30px 70px rgba(8, 36, 66, 0.35);
		border: 1px solid rgba(226, 232, 240, 0.9);
		width: 100%;
		max-width: 860px;
		max-height: 90vh;
		overflow-y: auto;
		overflow-x: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		animation: modalSlideUp 0.26s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		overscroll-behavior: contain;
		-webkit-overflow-scrolling: touch;

		/* Custom scrollbar elegan */
		scrollbar-width: thin;
		scrollbar-color: #CBD5E1 transparent;
	}

	.inst-modal-card::-webkit-scrollbar {
		width: 8px;
	}

	.inst-modal-card::-webkit-scrollbar-track {
		background: transparent;
	}

	.inst-modal-card::-webkit-scrollbar-thumb {
		background: #CBD5E1;
		border-radius: 4px;
	}

	.inst-modal-card::-webkit-scrollbar-thumb:hover {
		background: #94A3B8;
	}

	@keyframes modalSlideUp {
		from {
			opacity: 0;
			transform: translateY(24px) scale(0.97);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	/* ========================================================
	   A. HERO SECTION
	   ======================================================== */
	.inst-modal-hero {
		position: relative;
		min-height: 250px;
		background: #082442;
		overflow: hidden;
		border-radius: 24px 24px 0 0;
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	/* Foto Latar Kanan */
	.hero-bg-photo {
		position: absolute;
		top: 0;
		right: 0;
		width: 58%;
		height: 100%;
		object-fit: cover;
		object-position: center 25%;
		display: block;
		z-index: 1;
	}

	/* Overlay Gradient Navy di Kiri */
	.hero-navy-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 42%,
			rgba(8, 36, 66, 0.94) 55%,
			rgba(8, 36, 66, 0.45) 75%,
			rgba(8, 36, 66, 0.1) 100%
		);
		z-index: 2;
	}

	/* Swoosh Aksen Kanan Bawah */
	.hero-swoosh-accent {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 260px;
		height: 90px;
		z-index: 3;
		pointer-events: none;
	}

	/* Tombol Close Lingkaran Putih di Kanan Atas */
	.hero-close-btn {
		position: absolute;
		top: 16px;
		right: 16px;
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 10;
		transition: transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
	}

	.hero-close-btn:hover {
		transform: rotate(90deg) scale(1.05);
		background: #F1F5F9;
	}

	/* Konten Teks Hero */
	.hero-text-content {
		position: relative;
		z-index: 4;
		padding: 32px 36px 36px;
		max-width: 520px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	/* Badge Solusi Institusi Emas */
	.hero-category-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(8, 36, 66, 0.65);
		border: 1px solid rgba(255, 185, 35, 0.65);
		padding: 5px 14px;
		border-radius: 9999px;
		width: fit-content;
		backdrop-filter: blur(4px);
		margin-bottom: 4px;
	}

	.badge-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.badge-label {
		color: #FFB923;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.2px;
	}

	/* Judul Layanan Hero */
	.hero-title {
		font-size: 30px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 4px 0 0;
		line-height: 1.2;
		letter-spacing: -0.4px;
	}

	/* Deskripsi Hero */
	.hero-desc {
		font-size: 13.5px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.9);
		margin: 6px 0 14px;
		max-width: 440px;
	}

	/* Baris Tag Pill (Teal & Putih) */
	.hero-pills-row {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.hero-pill-teal {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 12.5px;
		font-weight: 700;
		padding: 6px 14px;
		border-radius: 9999px;
	}

	.hero-pill-white {
		display: inline-flex;
		align-items: center;
		background: #FFFFFF;
		color: #082442;
		font-size: 12.5px;
		font-weight: 700;
		padding: 6px 16px;
		border-radius: 9999px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	/* ========================================================
	   B. HIGHLIGHT MANFAAT (5 PILAR ROW DENGAN DIVIDER)
	   ======================================================== */
	.highlight-pillars-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 28px;
		background: #FFFFFF;
		border-bottom: 1px solid #EDF2F7;
		flex-shrink: 0;
		box-sizing: border-box;
	}

	.pillar-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex: 1;
		padding: 0 8px;
	}

	.pillar-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		margin-bottom: 6px;
	}

	.pillar-label {
		font-size: 12.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		white-space: pre-line;
	}

	.pillar-divider {
		width: 1px;
		height: 42px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	/* ========================================================
	   BODY KONTEN (SECTIONS C, D, E)
	   ======================================================== */
	.inst-modal-body {
		padding: 28px 36px 36px;
		display: flex;
		flex-direction: column;
		gap: 28px;
		flex: 1;
	}

	.modal-section {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	/* Section Heading Row dengan Aksen Garis Kuning & Abu-abu */
	.section-heading-row {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
	}

	.heading-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.heading-text {
		font-size: 17.5px;
		font-weight: 700;
		color: #082442;
		margin: 0;
		white-space: nowrap;
		letter-spacing: -0.2px;
	}

	.heading-accent-line {
		display: flex;
		align-items: center;
		flex: 1;
		margin-left: 6px;
	}

	.accent-gold-bar {
		width: 44px;
		height: 3.5px;
		background: #FFB923;
		border-radius: 2px;
		flex-shrink: 0;
	}

	.accent-grey-line {
		flex: 1;
		height: 1.5px;
		background: #E2E8F0;
		margin-left: 6px;
	}

	/* ========================================================
	   C. GAMBARAN LENGKAP LAYANAN (PANEL SOFT BLUE/GREY)
	   ======================================================== */
	.overview-soft-card {
		background: #EDF6FA;
		border-radius: 16px;
		padding: 18px 22px;
		display: flex;
		align-items: center;
		gap: 18px;
		box-sizing: border-box;
	}

	.overview-icon-box {
		width: 52px;
		height: 52px;
		min-width: 52px;
		border-radius: 14px;
		background: #D9EFF4;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.overview-text {
		font-size: 14px;
		line-height: 1.65;
		color: #1E293B;
		margin: 0;
		font-weight: 500;
	}

	/* ========================================================
	   D. CAKUPAN PROGRAM & MANFAAT (GRID DUA KOLOM)
	   ======================================================== */
	.benefits-grid-two-col {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 14px 28px;
		width: 100%;
		box-sizing: border-box;
	}

	.benefit-item {
		display: flex;
		align-items: flex-start;
		gap: 10px;
	}

	.benefit-check-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		flex-shrink: 0;
		margin-top: 1px;
	}

	.benefit-label {
		font-size: 13.5px;
		line-height: 1.5;
		color: #1E293B;
		font-weight: 500;
	}

	/* ========================================================
	   E. SASARAN INSTITUSI MITRA (CHIPS ROW DENGAN IKON)
	   ======================================================== */
	.audience-badges-row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		width: 100%;
	}

	.audience-badge-chip {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 8px 18px;
		background: #EDF8FA;
		border: 1px solid #BFE5EB;
		border-radius: 9999px;
		transition: background-color 0.16s ease, border-color 0.16s ease;
	}

	.chip-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.chip-text {
		font-size: 13px;
		font-weight: 600;
		color: #082442;
		letter-spacing: -0.1px;
	}

	/* ========================================================
	   RESPONSIVE MOBILE
	   ======================================================== */
	@media (max-width: 768px) {
		.inst-modal-backdrop {
			padding: 12px;
		}

		.inst-modal-card {
			max-height: 94vh;
			border-radius: 20px;
		}

		.inst-modal-hero {
			min-height: 230px;
		}

		.hero-bg-photo {
			width: 100%;
			opacity: 0.35;
		}

		.hero-navy-gradient {
			background: linear-gradient(
				180deg,
				rgba(8, 36, 66, 0.85) 0%,
				rgba(8, 36, 66, 0.98) 100%
			);
		}

		.hero-text-content {
			padding: 24px 20px 24px;
			max-width: 100%;
		}

		.hero-title {
			font-size: 24px;
		}

		.hero-desc {
			font-size: 13px;
			margin-bottom: 12px;
		}

		.hero-close-btn {
			top: 12px;
			right: 12px;
			width: 34px;
			height: 34px;
		}

		/* Pilar Manfaat menjadi Grid Responsif */
		.highlight-pillars-bar {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 14px 10px;
			padding: 16px 18px;
		}

		.pillar-divider {
			display: none;
		}

		.pillar-item {
			padding: 0;
		}

		.inst-modal-body {
			padding: 20px;
			gap: 22px;
		}

		.heading-text {
			font-size: 16px;
		}

		.overview-soft-card {
			padding: 14px 16px;
			gap: 12px;
		}

		.overview-icon-box {
			width: 44px;
			height: 44px;
			min-width: 44px;
		}

		.overview-text {
			font-size: 13px;
		}

		/* Checklist berubah menjadi 1 kolom di layar mobile */
		.benefits-grid-two-col {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		.benefit-label {
			font-size: 13px;
		}

		.audience-badge-chip {
			padding: 7px 14px;
		}

		.chip-text {
			font-size: 12px;
		}
	}
</style>
