<script lang="ts">
	// PartnerFocusFields.svelte - Presisi Mockup Referensi GAMBAR 2
	const fields = [
		{ label: 'Pendidikan & Pelatihan', icon: 'education' },
		{ label: 'Riset & Inovasi', icon: 'research' },
		{ label: 'Pengembangan Talenta', icon: 'talent' },
		{ label: 'Sosial & Komunitas', icon: 'social' },
		{ label: 'Teknologi & Digitalisasi', icon: 'tech' },
		{ label: 'Pembangunan Berkelanjutan', icon: 'sustainable' }
	];
</script>

<section id="bidang-kolaborasi" class="focus-fields-section">
	<!-- Pemisah Antar-Section: Garis Horizontal Tipis + 2 Aksen Garis Pendek Tengah (Turquoise & Oranye) -->
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
		<svg viewBox="0 0 360 175" fill="none" preserveAspectRatio="none">
			<path d="M85,175 C165,105 260,55 360,16 L360,175 Z" fill="#FFAD16" opacity="0.9" />
			<path d="M20,175 C115,115 225,85 360,62 L360,175 Z" fill="#63DCE6" opacity="0.72" />
			<path d="M95,175 C180,122 270,88 360,38 L360,175 Z" fill="#009AA6" />
		</svg>
	</div>

	<!-- Centered Container Proporsional (max-width: 1240px) -->
	<div class="fields-centered-container">
		<div class="fields-content-grid">
			<!-- Kolom Kiri: Konten Heading, Deskripsi & Tombol -->
			<div class="fields-text-col">
				<div class="fields-label">
					<span class="label-dash"></span>
					<span class="label-text">BIDANG KOLABORASI</span>
				</div>

				<h2 class="section-title">
					Fokus pada Bidang yang<br />
					Memberikan <span class="highlight-orange">Dampak Luas.</span>
				</h2>

				<p class="section-desc">
					Kami membuka peluang kerja sama di berbagai bidang strategis demi mendukung pengembangan talenta dan kualitas pendidikan.
				</p>

				<a href="#bentuk-kerja-sama" class="btn-orange-field">
					<span>Lihat Selengkapnya</span>
					<svg class="btn-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			</div>

			<!-- Kolom Kanan: Card Utama Bidang Kolaborasi (Proporsional & Seimbang) -->
			<div class="fields-card-col">
				<div class="fields-card">
					<div class="fields-2col-grid">
						{#each fields as item, idx}
							<div class="field-item {idx < 4 ? 'has-bottom-border' : ''}">
								<div class="field-icon-box">
									{#if item.icon === 'education'}
										<!-- Graduation Cap -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
											<path d="M6 12v5c3 3 9 3 12 0v-5" />
										</svg>
									{:else if item.icon === 'research'}
										<!-- Lightbulb with Rays -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6" />
											<path d="M10 22h4" />
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
											<line x1="12" y1="2" x2="12" y2="3" />
											<line x1="4.22" y1="4.22" x2="5" y2="5" />
											<line x1="19.78" y1="4.22" x2="19" y2="5" />
										</svg>
									{:else if item.icon === 'talent'}
										<!-- User with Plus -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
											<circle cx="8.5" cy="7" r="4" />
											<line x1="20" y1="8" x2="20" y2="14" />
											<line x1="23" y1="11" x2="17" y2="11" />
										</svg>
									{:else if item.icon === 'social'}
										<!-- Heart -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
										</svg>
									{:else if item.icon === 'tech'}
										<!-- Desktop Monitor -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
											<line x1="8" y1="21" x2="16" y2="21" />
											<line x1="12" y1="17" x2="12" y2="21" />
										</svg>
									{:else}
										<!-- Leaf -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
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
		padding: 46px 0 64px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Pemisah Antar-Section */
	.section-transition-divider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
		pointer-events: none;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.divider-line {
		width: 100%;
		max-width: 1240px;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(220, 230, 239, 0) 0%,
			#DCE6EF 10%,
			#DCE6EF 90%,
			rgba(220, 230, 239, 0) 100%
		);
	}

	.divider-accents {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 5px;
		background: #FFFFFF;
		padding: 0 10px;
	}

	.accent-cyan {
		width: 52px;
		height: 3.5px;
		border-radius: 99px;
		background: #00A9B7;
	}

	.accent-orange {
		width: 40px;
		height: 3.5px;
		border-radius: 99px;
		background: #FFAD16;
	}

	/* Dekorasi Sudut Bawah */
	.bg-decor-left {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 185px;
		height: 145px;
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
		width: 320px;
		height: 155px;
		pointer-events: none;
		z-index: 0;
	}

	/* Centered Container (1240px Proporsional — Tidak Terlalu Zoom) */
	.fields-centered-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1240px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.fields-content-grid {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 48px;
	}

	/* Kolom Kiri (~36%) */
	.fields-text-col {
		flex: 0 0 36%;
		max-width: 390px;
		box-sizing: border-box;
	}

	.fields-label {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.label-dash {
		width: 18px;
		height: 2.5px;
		background: #00A9B7;
		border-radius: 2px;
	}

	.label-text {
		color: #00A9B7;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.section-title {
		font-size: clamp(22px, 1.85vw, 27px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B1B45;
		margin: 0 0 12px 0;
		letter-spacing: -0.015em;
	}

	.highlight-orange {
		color: #FFAD16;
	}

	.section-desc {
		font-size: 13.5px;
		line-height: 1.55;
		color: #64748B;
		margin: 0 0 22px 0;
		max-width: 380px;
	}

	.btn-orange-field {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 10px 22px;
		background: #FFAD16;
		color: #0B1B45;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(255, 173, 22, 0.25);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.btn-orange-field:hover {
		background: #e69b10;
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(255, 173, 22, 0.36);
	}

	.btn-arrow {
		transition: transform 0.2s ease;
	}

	.btn-orange-field:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Kolom Kanan: Card Proporsional (~60%, max 680px) */
	.fields-card-col {
		flex: 1;
		max-width: 680px;
	}

	.fields-card {
		background: #FFFFFF;
		border: 1px solid #DCE6EF;
		border-radius: 22px;
		padding: 24px 36px;
		box-shadow: 0 6px 24px rgba(11, 27, 69, 0.04);
		box-sizing: border-box;
	}

	.fields-2col-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 44px;
		position: relative;
	}

	/* Separator Vertikal di Antara Kedua Kolom */
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
		gap: 14px;
		padding: 13px 0;
	}

	.field-item.has-bottom-border {
		border-bottom: 1px solid #E8EFF6;
	}

	.field-icon-box {
		width: 42px;
		height: 42px;
		border-radius: 11px;
		background: #EAF8F9;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.field-label {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B1B45;
		line-height: 1.35;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.fields-centered-container {
			padding: 0 28px;
		}

		.fields-content-grid {
			gap: 28px;
		}

		.fields-text-col {
			flex: 0 0 38%;
			max-width: 38%;
		}

		.fields-card-col {
			max-width: 62%;
		}

		.fields-card {
			padding: 18px 24px;
		}

		.fields-2col-grid {
			column-gap: 28px;
		}

		.field-label {
			font-size: 13px;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.focus-fields-section {
			padding: 40px 0 52px;
		}

		.fields-centered-container {
			padding: 0 20px;
		}

		.fields-content-grid {
			flex-direction: column;
			align-items: stretch;
			gap: 28px;
		}

		.fields-text-col,
		.fields-card-col {
			flex: 1 1 100%;
			max-width: 100%;
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
