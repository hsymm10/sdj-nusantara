<!-- Modal Detail Layanan Unggulan (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	import { onDestroy } from 'svelte';
	import { i18n } from '#lib/stores/i18n.svelte';

	interface ServiceDetail {
		id: string;
		title: string;
		icon: string;
		img: string;
		desc: string;
		benefits: string[];
	}

	interface Props {
		isOpen: boolean;
		service: ServiceDetail | null;
		onclose: () => void;
	}

	let { isOpen = false, service = null, onclose }: Props = $props();

	// Kunci scroll background saat modal terbuka
	$effect(() => {
		if (typeof document !== 'undefined') {
			if (isOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && isOpen) {
			onclose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen && service}
	<!-- Overlay Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="modal-backdrop"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-service-title"
		tabindex="-1"
		onclick={(e) => {
			if (e.target === e.currentTarget) onclose();
		}}
	>
		<!-- Container Modal (850px Desktop, 2 Kolom) -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="modal-container"
			role="document"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
		>
			<!-- Kolom Kiri — Gambar Ilustrasi (38%) -->
			<div class="modal-left-col">
				<div class="modal-img-frame">
					<!-- Kotak Ikon Layanan Kuning di Kiri Atas -->
					<div class="modal-img-icon-box" aria-hidden="true">
						{#if service.icon === 'grad'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 3L2 8l10 5 10-5-10-5z" />
								<path d="M2 8v6" />
								<path d="M6 10.5v5a6 6 0 0 0 12 0v-5" />
							</svg>
						{:else if service.icon === 'users'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						{:else if service.icon === 'star'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
							</svg>
						{:else}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="7" width="20" height="14" rx="2" />
								<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
								<line x1="12" y1="12" x2="12" y2="12" />
							</svg>
						{/if}
					</div>

					<img
						src={service.img}
						alt={service.title}
						class="modal-img"
						loading="eager"
					/>

					<!-- Aksen dekoratif lengkungan kuning & oranye pada bagian bawah gambar -->
					<svg class="modal-img-swoosh" viewBox="0 0 160 80" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M0 80 C50 74 105 52 160 12 V80 H0 Z" fill="#FFB923" />
						<path d="M40 80 C85 78 120 60 160 28 V80 H40 Z" fill="#FFA726" />
					</svg>
				</div>
			</div>

			<!-- Kolom Kanan — Informasi Layanan (62%) -->
			<div class="modal-right-col">
				<div class="modal-content-top">
					<!-- 1. Label kecil "Layanan Unggulan" -->
					<div class="modal-badge">
						<span>{i18n.pick('Layanan Unggulan', 'Featured Service')}</span>
					</div>

					<!-- 2. Judul layanan (Warna Navy) -->
					<h3 id="modal-service-title" class="modal-service-title">
						{service.title}
					</h3>

					<!-- 3. Deskripsi lengkap layanan -->
					<p class="modal-service-desc">
						{service.desc}
					</p>

					<!-- 4. Subjudul "Manfaat Layanan" -->
					<h4 class="modal-benefits-heading">
						{i18n.pick('Manfaat Layanan', 'Service Benefits')}
					</h4>

					<!-- 5. Daftar manfaat dengan ikon centang kuning -->
					<ul class="modal-benefits-list">
						{#each service.benefits as b}
							<li class="modal-benefit-item">
								<span class="benefit-check-icon" aria-hidden="true">
									<svg width="18" height="18" viewBox="0 0 20 20" fill="none">
										<circle cx="10" cy="10" r="10" fill="#FFB51B" />
										<path d="M6 10.2L8.7 13L14 7.5" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</span>
								<span class="benefit-text">{b}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- 6. Satu-satunya tombol penutup: "Tutup" pada bagian kanan bawah -->
				<div class="modal-btn-wrap">
					<button
						type="button"
						class="modal-tutup-btn"
						onclick={onclose}
					>
						{i18n.dict.common.close}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Overlay Backdrop */
	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 9999;
		background: rgba(11, 41, 72, 0.62);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		box-sizing: border-box;
		animation: fadeIn 0.22s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Container Modal (850px Desktop, 2 Kolom) */
	.modal-container {
		position: relative;
		background: #FFFFFF;
		width: 100%;
		max-width: 820px;
		border-radius: 24px;
		box-shadow: 0 24px 60px rgba(11, 41, 72, 0.24);
		padding: 28px;
		display: flex;
		gap: 30px;
		align-items: stretch;
		box-sizing: border-box;
		animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	@keyframes scaleUp {
		from {
			opacity: 0;
			transform: scale(0.94);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* Kolom Kiri — Gambar Ilustrasi (38%) */
	.modal-left-col {
		flex: 0 0 37%;
		max-width: 37%;
		display: flex;
	}

	.modal-img-frame {
		position: relative;
		width: 100%;
		border-radius: 20px;
		overflow: hidden;
		min-height: 290px;
		background: #F1F5F9;
		box-shadow: 0 8px 20px rgba(11, 41, 72, 0.08);
	}

	.modal-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	/* Kotak Ikon Kuning di Kiri Atas Gambar */
	.modal-img-icon-box {
		position: absolute;
		top: 14px;
		left: 14px;
		z-index: 3;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: #FFB51B;
		border: 2px solid #FFFFFF;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.14);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Lengkungan Kuning & Oranye di Kanan Bawah Gambar */
	.modal-img-swoosh {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 64px;
		pointer-events: none;
		z-index: 2;
	}

	/* Kolom Kanan — Informasi Layanan (63%) */
	.modal-right-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.modal-content-top {
		display: flex;
		flex-direction: column;
	}

	/* 1. Label kecil "Layanan Unggulan" */
	.modal-badge {
		display: inline-flex;
		align-items: center;
		padding: 3.5px 12px;
		background: #F0FCFD;
		border: 1px solid #7DE4EC;
		border-radius: 6px;
		width: fit-content;
		margin-bottom: 11px;
	}

	.modal-badge span {
		color: #00AAB5;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	/* 2. Judul layanan (Warna Navy) */
	.modal-service-title {
		font-size: 22px;
		font-weight: 800;
		color: #0B2948;
		line-height: 1.3;
		margin: 0 0 12px;
		letter-spacing: -0.015em;
	}

	/* 3. Deskripsi lengkap layanan */
	.modal-service-desc {
		font-size: 13px;
		line-height: 1.62;
		color: #556980;
		margin: 0 0 18px;
	}

	/* 4. Subjudul "Manfaat Layanan" */
	.modal-benefits-heading {
		font-size: 13.5px;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px;
	}

	/* 5. Daftar manfaat dengan ikon centang kuning */
	.modal-benefits-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 9px;
	}

	.modal-benefit-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.benefit-check-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.benefit-text {
		font-size: 12.8px;
		line-height: 1.5;
		color: #556980;
	}

	/* 6. Tombol "Tutup" pada bagian kanan bawah */
	.modal-btn-wrap {
		display: flex;
		justify-content: flex-end;
		margin-top: 22px;
	}

	.modal-tutup-btn {
		background: #FFB923;
		color: #0B2948;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 9px;
		padding: 9px 34px;
		border: none;
		cursor: pointer;
		box-shadow: 0 4px 14px rgba(255, 185, 35, 0.3);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.modal-tutup-btn:hover {
		background: #e6a51d;
		transform: translateY(-1px);
		box-shadow: 0 6px 18px rgba(255, 185, 35, 0.42);
	}

	/* Tablet */
	@media (max-width: 860px) {
		.modal-container {
			max-width: 680px;
			gap: 22px;
			padding: 24px;
		}

		.modal-left-col {
			flex: 0 0 38%;
			max-width: 38%;
		}

		.modal-service-title {
			font-size: 20px;
		}

		.modal-service-desc {
			font-size: 12.5px;
		}
	}

	/* Mobile */
	@media (max-width: 640px) {
		.modal-backdrop {
			padding: 16px;
			align-items: center;
		}

		.modal-container {
			flex-direction: column;
			max-height: 90vh;
			overflow-y: auto;
			padding: 20px;
			gap: 18px;
			border-radius: 20px;
		}

		.modal-left-col {
			flex: 1 1 auto;
			max-width: 100%;
			width: 100%;
		}

		.modal-img-frame {
			height: 190px;
			min-height: 190px;
		}

		.modal-service-title {
			font-size: 19px;
		}

		.modal-btn-wrap {
			margin-top: 16px;
		}

		.modal-tutup-btn {
			width: 100%;
			text-align: center;
			padding: 11px 24px;
		}
	}
</style>
