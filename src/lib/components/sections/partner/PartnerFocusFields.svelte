<script lang="ts">
	// PartnerFocusFields.svelte - Sesuai Mockup Referensi GAMBAR 2 (Wider Layout & Vertical/Horizontal Dividers)
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
	<!-- Garis Pemisah Panjang Hampir Selebar Halaman dengan 2 Aksen Tengah (Teal & Kuning) -->
	<div class="section-transition-divider" aria-hidden="true">
		<div class="divider-line"></div>
		<div class="divider-accents">
			<span class="accent-cyan"></span>
			<span class="accent-gold"></span>
		</div>
	</div>

	<!-- Dekorasi Lengkungan Teal Muda di Pojok Kiri Bawah -->
	<div class="bg-decor-left" aria-hidden="true">
		<svg viewBox="0 0 240 190" fill="none" preserveAspectRatio="none">
			<path d="M0,15 C95,25 180,95 205,190 L0,190 Z" fill="#D5F4F7" opacity="0.72" />
		</svg>
	</div>

	<!-- Dekorasi Gelombang Teal & Kuning di Pojok Kanan Bawah -->
	<div class="bg-decor-right" aria-hidden="true">
		<svg viewBox="0 0 420 200" fill="none" preserveAspectRatio="none">
			<path d="M95,200 C185,120 300,60 420,18 L420,200 Z" fill="#FFB923" opacity="0.9" />
			<path d="M25,200 C130,130 255,95 420,70 L420,200 Z" fill="#63DCE6" opacity="0.72" />
			<path d="M110,200 C205,140 310,100 420,42 L420,200 Z" fill="#0095A8" />
		</svg>
	</div>

	<div class="fields-wide-container">
		<div class="fields-content-grid">
			<!-- Kolom Kiri: Label, Heading Besar, Deskripsi & Tombol CTA (~37%) -->
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

			<!-- Kolom Kanan: Container Card Besar & Lega (~60%, Grid 2x3) -->
			<div class="fields-card-col">
				<div class="fields-card">
					<div class="fields-2col-grid">
						{#each fields as item, idx}
							<div class="field-item {idx < 4 ? 'has-bottom-border' : ''}">
								<div class="field-icon-box">
									{#if item.icon === 'education'}
										<!-- Graduation Cap -->
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
											<path d="M6 12v5c3 3 9 3 12 0v-5" />
										</svg>
									{:else if item.icon === 'research'}
										<!-- Lightbulb with Rays -->
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6" />
											<path d="M10 22h4" />
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
											<line x1="12" y1="2" x2="12" y2="3" />
											<line x1="4.22" y1="4.22" x2="5" y2="5" />
											<line x1="19.78" y1="4.22" x2="19" y2="5" />
										</svg>
									{:else if item.icon === 'talent'}
										<!-- User with Plus/Sparkle -->
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
											<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
											<circle cx="8.5" cy="7" r="4" />
											<line x1="20" y1="8" x2="20" y2="14" />
											<line x1="23" y1="11" x2="17" y2="11" />
										</svg>
									{:else if item.icon === 'social'}
										<!-- Heart -->
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
										</svg>
									{:else if item.icon === 'tech'}
										<!-- Desktop Monitor -->
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
											<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
											<line x1="8" y1="21" x2="16" y2="21" />
											<line x1="12" y1="17" x2="12" y2="21" />
										</svg>
									{:else}
										<!-- Leaf (Pembangunan Berkelanjutan) -->
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
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
		padding: clamp(50px, 4.5vw, 76px) 0 clamp(60px, 5.2vw, 88px);
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Garis Pemisah Panjang Hampir Selebar Halaman */
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
		padding: 0 clamp(20px, 4vw, 64px);
		box-sizing: border-box;
	}

	.divider-line {
		width: 100%;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(203, 213, 225, 0) 0%,
			#CBD5E1 8%,
			#CBD5E1 92%,
			rgba(203, 213, 225, 0) 100%
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
		width: clamp(48px, 4vw, 68px);
		height: 4px;
		border-radius: 99px;
		background: #00A6B2;
	}

	.accent-gold {
		width: clamp(34px, 3vw, 48px);
		height: 4px;
		border-radius: 99px;
		background: #FFB923;
	}

	/* Dekorasi Sudut Bawah */
	.bg-decor-left {
		position: absolute;
		left: 0;
		bottom: 0;
		width: clamp(140px, 14vw, 240px);
		height: clamp(110px, 11vw, 190px);
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
		width: clamp(240px, 24vw, 420px);
		height: clamp(115px, 11.5vw, 200px);
		pointer-events: none;
		z-index: 0;
	}

	/* Wide Container yang tidak sempit di layar lebar */
	.fields-wide-container {
		position: relative;
		z-index: 2;
		width: 100%;
		padding: 0 clamp(28px, 6vw, 110px);
		box-sizing: border-box;
	}

	.fields-content-grid {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: clamp(32px, 4vw, 68px);
	}

	/* Kolom Kiri (~37%) */
	.fields-text-col {
		flex: 0 0 36%;
		max-width: 36%;
		box-sizing: border-box;
	}

	.fields-label {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.label-dash {
		width: 22px;
		height: 2.5px;
		background: #00A6B2;
		border-radius: 2px;
	}

	.label-text {
		color: #00A6B2;
		font-size: clamp(12px, 0.85vw, 14px);
		font-weight: 700;
		letter-spacing: 0.05em;
	}

	.section-title {
		font-size: clamp(24px, 2.25vw, 37px);
		line-height: 1.24;
		font-weight: 800;
		color: #082442;
		margin: 0 0 14px 0;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB51B;
	}

	.section-desc {
		font-size: clamp(13.5px, 0.98vw, 16px);
		line-height: 1.6;
		color: #556980;
		margin: 0 0 clamp(22px, 2vw, 30px) 0;
		max-width: 480px;
	}

	.btn-gold-field {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: clamp(11px, 0.9vw, 14px) clamp(22px, 1.8vw, 28px);
		background: #FFB923;
		color: #082442;
		font-size: clamp(13.5px, 0.95vw, 15px);
		font-weight: 700;
		border-radius: 10px;
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

	/* Kolom Kanan: Container Card Besar & Lega (~60%) */
	.fields-card-col {
		flex: 1;
		max-width: 60%;
	}

	.fields-card {
		background: #FFFFFF;
		border: 1px solid #DCE5EF;
		border-radius: 26px;
		padding: clamp(22px, 2.2vw, 36px) clamp(28px, 3vw, 48px);
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.04);
		box-sizing: border-box;
	}

	.fields-2col-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: clamp(32px, 3.8vw, 60px);
		position: relative;
	}

	/* Garis Pemisah Vertikal Tengah di antara 2 Kolom */
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
		gap: clamp(14px, 1.2vw, 18px);
		padding: clamp(14px, 1.25vw, 20px) 0;
	}

	.field-item.has-bottom-border {
		border-bottom: 1px solid #E8EFF6;
	}

	.field-icon-box {
		width: clamp(44px, 3.4vw, 54px);
		height: clamp(44px, 3.4vw, 54px);
		border-radius: 13px;
		background: #EAF9FA;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.field-icon-box svg {
		width: clamp(22px, 1.55vw, 26px);
		height: clamp(22px, 1.55vw, 26px);
	}

	.field-label {
		font-size: clamp(13.5px, 0.98vw, 16px);
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.fields-wide-container {
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
			padding: 20px 24px;
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
			padding: 44px 0 56px;
		}

		.fields-wide-container {
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
