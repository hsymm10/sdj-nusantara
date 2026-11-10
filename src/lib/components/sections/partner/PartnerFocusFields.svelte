<script lang="ts">
	// PartnerFocusFields.svelte - Sesuai Mockup Referensi GAMBAR 2
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
	<!-- Garis Transisi Antar-Section dengan Aksen Cyan & Kuning di Tengah -->
	<div class="section-transition-divider" aria-hidden="true">
		<div class="divider-line"></div>
		<div class="divider-accents">
			<span class="accent-cyan"></span>
			<span class="accent-gold"></span>
		</div>
	</div>

	<!-- Dekorasi Background Sudut Kiri Bawah (Cyan Lembut) -->
	<div class="bg-decor-left" aria-hidden="true">
		<svg viewBox="0 0 220 180" fill="none" preserveAspectRatio="none">
			<path d="M0,20 C80,25 160,85 180,180 L0,180 Z" fill="#D5F4F7" opacity="0.7" />
		</svg>
	</div>

	<!-- Dekorasi Background Sudut Kanan Bawah (Kuning & Cyan Berlapis) -->
	<div class="bg-decor-right" aria-hidden="true">
		<svg viewBox="0 0 360 180" fill="none" preserveAspectRatio="none">
			<path d="M80,180 C160,110 260,55 360,15 L360,180 Z" fill="#FFB923" opacity="0.85" />
			<path d="M20,180 C110,120 220,90 360,65 L360,180 Z" fill="#63DCE6" opacity="0.7" />
			<path d="M90,180 C175,130 265,95 360,40 L360,180 Z" fill="#0095A8" />
		</svg>
	</div>

	<div class="sch-partner-container">
		<div class="fields-content-grid">
			<!-- Kolom Kiri: Heading, Deskripsi & Tombol CTA -->
			<div class="fields-text-col">
				<div class="fields-label">
					<span class="label-dash"></span>
					<span class="label-text">BIDANG KOLABORASI</span>
				</div>

				<h2 class="section-title">
					Fokus pada Bidang yang<br />
					Memberikan <span class="highlight-gold">Dampak Luas.</span>
				</h2>

				<p class="section-desc">
					Kami membuka peluang kerja sama di berbagai bidang strategis demi mendukung pengembangan talenta dan kualitas pendidikan.
				</p>

				<a href="#bentuk-kerja-sama" class="btn-gold-field">
					<span>Lihat Selengkapnya</span>
					<svg class="btn-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			</div>

			<!-- Kolom Kanan: Card Container Putih Bersih (2 Kolom x 3 Baris) -->
			<div class="fields-card-col">
				<div class="fields-card">
					<div class="fields-2col-grid">
						{#each fields as item, idx}
							<div class="field-item {idx < 4 ? 'has-bottom-border' : ''}">
								<div class="field-icon-box">
									{#if item.icon === 'education'}
										<!-- Graduation Cap -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
											<path d="M6 12v5c3 3 9 3 12 0v-5" />
										</svg>
									{:else if item.icon === 'research'}
										<!-- Lightbulb with Rays -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6" />
											<path d="M10 22h4" />
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
											<line x1="12" y1="2" x2="12" y2="3" />
											<line x1="4.22" y1="4.22" x2="5" y2="5" />
											<line x1="19.78" y1="4.22" x2="19" y2="5" />
										</svg>
									{:else if item.icon === 'talent'}
										<!-- User with Plus/Sparkle -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
											<circle cx="8.5" cy="7" r="4" />
											<line x1="20" y1="8" x2="20" y2="14" />
											<line x1="23" y1="11" x2="17" y2="11" />
										</svg>
									{:else if item.icon === 'social'}
										<!-- Heart -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
										</svg>
									{:else if item.icon === 'tech'}
										<!-- Desktop Monitor -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
											<line x1="8" y1="21" x2="16" y2="21" />
											<line x1="12" y1="17" x2="12" y2="21" />
										</svg>
									{:else}
										<!-- Leaf (Pembangunan Berkelanjutan) -->
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
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
		padding: 52px 0 68px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Garis Transisi Antar-Section */
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
	}

	.divider-line {
		width: 100%;
		max-width: 1220px;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(226, 232, 240, 0) 0%,
			#DCE5EF 15%,
			#DCE5EF 85%,
			rgba(226, 232, 240, 0) 100%
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
		width: 48px;
		height: 3.5px;
		border-radius: 99px;
		background: #00A6B2;
	}

	.accent-gold {
		width: 34px;
		height: 3.5px;
		border-radius: 99px;
		background: #FFB923;
	}

	/* Dekorasi Sudut Bawah */
	.bg-decor-left {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 180px;
		height: 140px;
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
		width: 310px;
		height: 145px;
		pointer-events: none;
		z-index: 0;
	}

	.sch-partner-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1220px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.fields-content-grid {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 44px;
	}

	/* Kolom Kiri (38%) */
	.fields-text-col {
		flex: 0 0 38%;
		max-width: 38%;
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
		background: #00A6B2;
		border-radius: 2px;
	}

	.label-text {
		color: #00A6B2;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.section-title {
		font-size: clamp(22px, 2vw, 28px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px 0;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB51B;
	}

	.section-desc {
		font-size: 13.5px;
		line-height: 1.6;
		color: #556980;
		margin: 0 0 22px 0;
		max-width: 400px;
	}

	.btn-gold-field {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 11px 22px;
		background: #FFB923;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 185, 35, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.btn-gold-field:hover {
		background: #e6a51d;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 185, 35, 0.4);
	}

	.btn-arrow {
		transition: transform 0.2s ease;
	}

	.btn-gold-field:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Kolom Kanan: Card Container (60%) */
	.fields-card-col {
		flex: 1;
		max-width: 60%;
	}

	.fields-card {
		background: #FFFFFF;
		border: 1px solid #E5EDF4;
		border-radius: 22px;
		padding: 22px 32px;
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.045);
		box-sizing: border-box;
	}

	.fields-2col-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 36px;
		position: relative;
	}

	.field-item {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 13px 0;
	}

	.field-item.has-bottom-border {
		border-bottom: 1px solid #F1F5F9;
	}

	.field-icon-box {
		width: 40px;
		height: 40px;
		border-radius: 10px;
		background: #EAF9FA;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.field-label {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.fields-content-grid {
			gap: 28px;
		}

		.fields-text-col {
			flex: 0 0 40%;
			max-width: 40%;
		}

		.fields-card-col {
			max-width: 60%;
		}

		.fields-card {
			padding: 18px 22px;
		}

		.fields-2col-grid {
			column-gap: 22px;
		}

		.field-label {
			font-size: 13px;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.focus-fields-section {
			padding: 44px 0 56px;
		}

		.sch-partner-container {
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

		.field-item.has-bottom-border {
			border-bottom: 1px solid #F1F5F9;
		}

		.field-item:not(:last-child) {
			border-bottom: 1px solid #F1F5F9;
		}

		.bg-decor-right {
			width: 180px;
			height: 90px;
		}

		.bg-decor-left {
			width: 110px;
			height: 85px;
		}
	}
</style>
