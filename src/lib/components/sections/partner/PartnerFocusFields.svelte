<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const fields = $derived(
		i18n.lang === 'en'
			? [
					{ label: 'Education & Training', icon: 'education' },
					{ label: 'Research & Innovation', icon: 'research' },
					{ label: 'Talent Development', icon: 'talent' },
					{ label: 'Social & Community', icon: 'social' },
					{ label: 'Technology & Digitalization', icon: 'tech' },
					{ label: 'Sustainable Development', icon: 'sustainable' }
				]
			: [
					{ label: 'Pendidikan & Pelatihan', icon: 'education' },
					{ label: 'Riset & Inovasi', icon: 'research' },
					{ label: 'Pengembangan Talenta', icon: 'talent' },
					{ label: 'Sosial & Komunitas', icon: 'social' },
					{ label: 'Teknologi & Digitalisasi', icon: 'tech' },
					{ label: 'Pembangunan Berkelanjutan', icon: 'sustainable' }
				]
	);
</script>

<section id="bidang-kolaborasi" class="focus-fields-section">
	<!-- Pemisah Antar-Section: Sejajar Container min(1500px, calc(100% - 80px)) -->
	<div class="section-transition-divider" aria-hidden="true">
		<div class="divider-line"></div>
		<div class="divider-accents">
			<span class="accent-cyan"></span>
			<span class="accent-orange"></span>
		</div>
	</div>

	<!-- Dekorasi Lengkungan Cyan Muda di Sudut Kiri Bawah -->
	<div class="bg-decor-left" aria-hidden="true">
		<svg viewBox="0 0 220 170" fill="none" preserveAspectRatio="none">
			<path d="M0,15 C85,22 160,85 185,170 L0,170 Z" fill="#D5F4F7" opacity="0.7" />
		</svg>
	</div>

	<!-- Dekorasi Gelombang Turquoise & Oranye di Sudut Kanan Bawah -->
	<div class="bg-decor-right" aria-hidden="true">
		<svg viewBox="0 0 380 185" fill="none" preserveAspectRatio="none">
			<path d="M85,185 C170,110 270,58 380,16 L380,185 Z" fill="#FFAD16" opacity="0.9" />
			<path d="M20,185 C120,120 235,88 380,64 L380,185 Z" fill="#63DCE6" opacity="0.72" />
			<path d="M100,185 C190,128 285,92 380,40 L380,185 Z" fill="#009AA6" />
		</svg>
	</div>

	<!-- Container Konsisten: min(1500px, calc(100% - 80px)) -->
	<div class="fields-container">
		<div class="fields-grid-layout">
			<!-- Kolom Kiri (~38%): Label, Heading, Deskripsi & Tombol -->
			<div class="fields-text-col">
				<div class="fields-label">
					<span class="label-dash"></span>
					<span class="label-text">{i18n.pick('BIDANG KOLABORASI', 'COLLABORATION SECTORS')}</span>
				</div>

				<h2 class="section-title">
					{i18n.pick('Fokus pada Bidang yang', 'Focused on Sectors That')}<br />
					{i18n.pick('Memberikan ', 'Deliver ')}<span class="highlight-orange">{i18n.pick('Dampak Luas.', 'Broad Impact.')}</span>
				</h2>

				<p class="section-desc">
					{i18n.pick(
						'Kami membuka peluang kerja sama di berbagai bidang strategis demi mendukung pengembangan talenta dan kualitas pendidikan.',
						'We open partnership opportunities across strategic fields to advance talent development and educational excellence.'
					)}
				</p>

				<a href="#bentuk-kerja-sama" class="btn-orange-field">
					<span>{i18n.pick('Lihat Selengkapnya', 'Learn More')}</span>
					<svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			</div>

			<!-- Kolom Kanan (~62%): Card Bidang Kolaborasi -->
			<div class="fields-card-col">
				<div class="fields-card">
					<div class="fields-2col-grid">
						{#each fields as item, idx}
							<div class="field-item {idx < 4 ? 'has-bottom-border' : ''}">
								<div class="field-icon-box">
									{#if item.icon === 'education'}
										<!-- Graduation Cap -->
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
											<path d="M6 12v5c3 3 9 3 12 0v-5" />
										</svg>
									{:else if item.icon === 'research'}
										<!-- Lightbulb with Rays -->
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6" />
											<path d="M10 22h4" />
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
											<line x1="12" y1="2" x2="12" y2="3" />
											<line x1="4.22" y1="4.22" x2="5" y2="5" />
											<line x1="19.78" y1="4.22" x2="19" y2="5" />
										</svg>
									{:else if item.icon === 'talent'}
										<!-- User with Plus -->
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
											<circle cx="8.5" cy="7" r="4" />
											<line x1="20" y1="8" x2="20" y2="14" />
											<line x1="23" y1="11" x2="17" y2="11" />
										</svg>
									{:else if item.icon === 'social'}
										<!-- Heart -->
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
										</svg>
									{:else if item.icon === 'tech'}
										<!-- Desktop Monitor -->
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
											<line x1="8" y1="21" x2="16" y2="21" />
											<line x1="12" y1="17" x2="12" y2="21" />
										</svg>
									{:else}
										<!-- Leaf -->
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
											<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
										</svg>
									{/if}
								</div>
								<span class="field-label">{item.label}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.focus-fields-section {
		position: relative;
		background: #FFFFFF;
		padding: 54px 0 72px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Pemisah Antar-Section: Sejajar Container min(1500px, calc(100% - 80px)) */
	.section-transition-divider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
		pointer-events: none;
	}

	.divider-line {
		width: 100%;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(220, 230, 239, 0) 0%,
			#DCE6EF 8%,
			#DCE6EF 92%,
			rgba(220, 230, 239, 0) 100%
		);
	}

	.divider-accents {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 6px;
		background: #FFFFFF;
		padding: 0 12px;
	}

	.accent-cyan {
		width: 56px;
		height: 3.5px;
		border-radius: 99px;
		background: #00A9B7;
	}

	.accent-orange {
		width: 42px;
		height: 3.5px;
		border-radius: 99px;
		background: #FFAD16;
	}

	/* Dekorasi Sudut Bawah */
	.bg-decor-left {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 210px;
		height: 165px;
		pointer-events: none;
		z-index: 0;
	}

	.bg-decor-left svg,
	.bg-decor-right svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.bg-decor-right {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 360px;
		height: 175px;
		pointer-events: none;
		z-index: 0;
	}

	/* Container Konsisten: min(1500px, calc(100% - 80px)) */
	.fields-container {
		position: relative;
		z-index: 2;
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		box-sizing: border-box;
	}

	/* Grid Dua Kolom: ~38% Teks | ~62% Card */
	.fields-grid-layout {
		display: grid;
		grid-template-columns: 38% 1fr;
		align-items: center;
		gap: 52px;
	}

	/* Kolom Kiri (~38%) */
	.fields-text-col {
		width: 100%;
		box-sizing: border-box;
	}

	.fields-label {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.label-dash {
		width: 20px;
		height: 2.5px;
		background: #00A9B7;
		border-radius: 2px;
	}

	.label-text {
		color: #00A9B7;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	/* Heading Target Desktop: 30–36px */
	.section-title {
		font-size: clamp(24px, 2vw, 33px);
		line-height: 1.24;
		font-weight: 800;
		color: #0B1B45;
		margin: 0 0 14px 0;
		letter-spacing: -0.015em;
	}

	.highlight-orange {
		color: #FFAD16;
	}

	/* Deskripsi Target Desktop: 14–16px */
	.section-desc {
		font-size: clamp(14px, 0.98vw, 15.5px);
		line-height: 1.58;
		color: #64748B;
		margin: 0 0 26px 0;
		max-width: 480px;
	}

	.btn-orange-field {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 12px 26px;
		background: #FFAD16;
		color: #0B1B45;
		font-size: 14.5px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(255, 173, 22, 0.25);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.btn-orange-field:hover {
		background: #e69b10;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(255, 173, 22, 0.36);
	}

	.btn-arrow {
		transition: transform 0.2s ease;
	}

	.btn-orange-field:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Kolom Kanan (~62%): Card Mengisi Ruang Tersedia Secara Proporsional */
	.fields-card-col {
		width: 100%;
		min-width: 0;
	}

	.fields-card {
		background: #FFFFFF;
		border: 1px solid #DCE6EF;
		border-radius: 24px;
		padding: 28px 44px;
		box-shadow: 0 6px 26px rgba(11, 27, 69, 0.04);
		box-sizing: border-box;
		width: 100%;
	}

	.fields-2col-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 52px;
		position: relative;
	}

	/* Separator Vertikal di Tengah Kedua Kolom */
	.fields-2col-grid::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 8px;
		bottom: 8px;
		width: 1px;
		background: #E8EFF6;
		transform: translateX(-50%);
		pointer-events: none;
	}

	.field-item {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px 0;
	}

	.field-item.has-bottom-border {
		border-bottom: 1px solid #E8EFF6;
	}

	.field-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		background: #EAF8F9;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.field-label {
		font-size: clamp(14px, 0.96vw, 15px);
		font-weight: 700;
		color: #0B1B45;
		line-height: 1.38;
	}

	/* Tablet */
	@media (max-width: 1100px) {
		.fields-container,
		.section-transition-divider {
			width: calc(100% - 56px);
		}

		.fields-grid-layout {
			grid-template-columns: 40% 1fr;
			gap: 32px;
		}

		.fields-card {
			padding: 22px 26px;
		}

		.fields-2col-grid {
			column-gap: 32px;
		}

		.field-label {
			font-size: 13.5px;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.focus-fields-section {
			padding: 40px 0 52px;
		}

		.fields-container,
		.section-transition-divider {
			width: calc(100% - 40px);
		}

		.fields-grid-layout {
			grid-template-columns: 1fr;
			gap: 28px;
		}

		.fields-text-col {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.section-desc {
			max-width: 100%;
		}

		.fields-2col-grid {
			grid-template-columns: 1fr;
		}

		.fields-2col-grid::before {
			display: none;
		}

		.field-item.has-bottom-border,
		.field-item:not(:last-child) {
			border-bottom: 1px solid #E8EFF6;
		}

		.bg-decor-right {
			width: 190px;
			height: 95px;
		}

		.bg-decor-left {
			width: 110px;
			height: 85px;
		}
	}
</style>
