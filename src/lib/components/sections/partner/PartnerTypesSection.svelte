<script lang="ts">
	// PartnerTypesSection.svelte - 100% Match Mockup Referensi GAMBAR 2
	const partnerTypes = [
		{ label: 'Sekolah', icon: 'school' },
		{ label: 'Universitas', icon: 'univ' },
		{ label: 'Lembaga Pendidikan', icon: 'book' },
		{ label: 'Instansi Pemerintah', icon: 'gov' },
		{ label: 'Perusahaan', icon: 'building' },
		{ label: 'Organisasi', icon: 'users' },
		{ label: 'Yayasan', icon: 'heart' }
	];
</script>

<section id="jenis-mitra" class="partner-types-section">
	<!-- Garis Pemisah Horizontal Tipis Antar-Section -->
	<div class="types-top-divider" aria-hidden="true"></div>

	<!-- Dekorasi Gelombang Turquoise & Kuning di Bagian Bawah Section -->
	<div class="bottom-waves-decor" aria-hidden="true">
		<svg viewBox="0 0 1440 130" fill="none" preserveAspectRatio="none">
			<!-- Garis gelombang dekoratif halus di tengah -->
			<path d="M0,75 C280,15 480,120 760,95 C1040,70 1240,125 1440,85" stroke="#D4F2F5" stroke-width="1.5" fill="none" />
			<path d="M0,95 C320,35 540,135 840,105 C1120,78 1280,120 1440,65" stroke="#E5F7F9" stroke-width="1.5" fill="none" />

			<!-- Lapisan ombak kiri (Cyan muda & Teal) -->
			<path d="M0,45 C140,55 240,105 420,115 C580,125 680,130 820,130 L0,130 Z" fill="#BCEFF4" opacity="0.6" />
			<path d="M0,65 C120,75 210,115 360,130 L0,130 Z" fill="#009AA6" />

			<!-- Lapisan ombak kanan (Kuning & Cyan & Teal) -->
			<path d="M1260,130 C1330,90 1385,40 1440,5 L1440,130 Z" fill="#FFAD16" />
			<path d="M780,130 C980,115 1180,68 1440,28 L1440,130 Z" fill="#47D3DF" opacity="0.85" />
			<path d="M980,130 C1150,115 1300,82 1440,48 L1440,130 Z" fill="#009AA6" />
		</svg>
	</div>

	<div class="types-container">
		<div class="types-grid">
			<!-- Kolom Kiri (~30%): Label, Heading & Deskripsi -->
			<div class="text-col">
				<div class="types-label">
					<span class="label-dash"></span>
					<span class="label-text">JENIS MITRA</span>
				</div>

				<h2 class="section-title">
					Kami Terbuka untuk<br />
					Berkolaborasi dengan<br />
					<span class="highlight-teal">Berbagai Jenis Institusi.</span>
				</h2>

				<p class="section-desc">
					SDJNusantara menjalin kemitraan dengan berbagai pihak yang memiliki visi serupa dalam memajukan pendidikan dan pengembangan talenta.
				</p>
			</div>

			<!-- Kolom Kanan (~70%): 7 Card Jenis Mitra Horizontal -->
			<div class="tiles-col">
				<div class="tiles-row">
					{#each partnerTypes as item}
						<div class="type-tile">
							<div class="tile-inner">
								<div class="tile-icon">
									{#if item.icon === 'school'}
										<!-- Sekolah dengan Bendera -->
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#009AA6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M3 21h18" />
											<path d="M5 21V9l7-4 7 4v12" />
											<path d="M9 21v-5a3 3 0 0 1 6 0v5" />
											<path d="M12 5V2" />
											<path d="M12 2h4l-1 1.5L16 5h-4" />
										</svg>
									{:else if item.icon === 'univ'}
										<!-- Universitas / Topi Toga -->
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#009AA6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
											<path d="M6 12v5c3 3 9 3 12 0v-5" />
										</svg>
									{:else if item.icon === 'book'}
										<!-- Lembaga Pendidikan / Tumpukan 3 Buku -->
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#009AA6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<rect x="4" y="4" width="14" height="4.5" rx="1.5" />
											<rect x="6" y="9.75" width="14" height="4.5" rx="1.5" />
											<rect x="4" y="15.5" width="14" height="4.5" rx="1.5" />
										</svg>
									{:else if item.icon === 'gov'}
										<!-- Instansi Pemerintah / Gedung Pilar -->
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#009AA6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M3 21h18" />
											<path d="M3 10h18" />
											<path d="M5 6l7-3 7 3" />
											<path d="M5 10v11" />
											<path d="M9.5 10v11" />
											<path d="M14.5 10v11" />
											<path d="M19 10v11" />
										</svg>
									{:else if item.icon === 'building'}
										<!-- Perusahaan / Gedung Bertingkat -->
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#009AA6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<rect x="4" y="3" width="11" height="18" rx="1.5" />
											<path d="M15 9h4a1.5 1.5 0 0 1 1.5 1.5V21H15" />
											<line x1="7.5" y1="7" x2="7.51" y2="7" />
											<line x1="11.5" y1="7" x2="11.51" y2="7" />
											<line x1="7.5" y1="11" x2="7.51" y2="11" />
											<line x1="11.5" y1="11" x2="11.51" y2="11" />
											<line x1="7.5" y1="15" x2="7.51" y2="15" />
											<line x1="11.5" y1="15" x2="11.51" y2="15" />
										</svg>
									{:else if item.icon === 'users'}
										<!-- Organisasi / Kelompok Orang -->
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#009AA6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
											<circle cx="10" cy="7" r="3.5" />
											<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
											<path d="M16 3.5a3.5 3.5 0 0 1 0 6.75" />
										</svg>
									{:else}
										<!-- Yayasan / Hati Peduli -->
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#009AA6" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
											<path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
										</svg>
									{/if}
								</div>

								<span class="tile-label">{item.label}</span>

								<!-- Garis Dekoratif Kuning Kecil di Bawah Label -->
								<span class="tile-gold-bar" aria-hidden="true"></span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.partner-types-section {
		position: relative;
		background: #FFFFFF;
		padding: 52px 0 96px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Garis Pemisah Horizontal Tipis Antar-Section */
	.types-top-divider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(220, 230, 239, 0) 0%,
			#DCE6EF 8%,
			#DCE6EF 92%,
			rgba(220, 230, 239, 0) 100%
		);
	}

	/* Dekorasi Gelombang Bawah Halaman */
	.bottom-waves-decor {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 105px;
		pointer-events: none;
		z-index: 0;
	}

	.bottom-waves-decor svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Container Konsisten: min(1500px, calc(100% - 80px)) */
	.types-container {
		position: relative;
		z-index: 2;
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		box-sizing: border-box;
	}

	/* Layout Dua Kolom: ~30% Kiri | ~70% Kanan */
	.types-grid {
		display: grid;
		grid-template-columns: 30% 1fr;
		align-items: center;
		gap: 44px;
	}

	/* Kolom Kiri */
	.text-col {
		width: 100%;
		box-sizing: border-box;
	}

	.types-label {
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
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.section-title {
		font-size: clamp(23px, 2vw, 32px);
		line-height: 1.24;
		font-weight: 800;
		color: #0B1B45;
		margin: 0 0 14px 0;
		letter-spacing: -0.015em;
	}

	.highlight-teal {
		color: #00A6B2;
	}

	.section-desc {
		font-size: clamp(14px, 0.98vw, 15.5px);
		line-height: 1.6;
		color: #556980;
		margin: 0;
		max-width: 440px;
	}

	/* Kolom Kanan: 7 Card Jenis Mitra Horizontal */
	.tiles-col {
		width: 100%;
		min-width: 0;
	}

	.tiles-row {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 14px;
		width: 100%;
	}

	.type-tile {
		background: #FFFFFF;
		border: 1px solid #E2ECF5;
		border-radius: 18px;
		padding: 7px;
		min-height: 146px;
		box-shadow: 0 6px 20px rgba(11, 27, 69, 0.045);
		box-sizing: border-box;
		display: flex;
		transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease, box-shadow 0.22s ease;
	}

	.type-tile:hover {
		transform: translateY(-4px);
		border-color: #00A6B2;
		box-shadow: 0 12px 26px rgba(0, 166, 178, 0.13);
	}

	/* Area Soft Turquoise di Dalam Card */
	.tile-inner {
		width: 100%;
		border-radius: 13px;
		background: linear-gradient(180deg, #F3FCFD 0%, #F9FEFF 100%);
		padding: 16px 6px 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		box-sizing: border-box;
	}

	.tile-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		height: 44px;
		margin-bottom: 6px;
	}

	.tile-label {
		font-size: 13px;
		font-weight: 700;
		color: #0B1B45;
		line-height: 1.25;
		text-align: center;
	}

	.tile-gold-bar {
		display: block;
		width: 28px;
		height: 3px;
		border-radius: 99px;
		background: #FFAD16;
		margin-top: 8px;
		opacity: 0.9;
	}

	/* Tablet */
	@media (max-width: 1200px) {
		.types-container,
		.types-top-divider {
			width: calc(100% - 56px);
		}

		.types-grid {
			grid-template-columns: 1fr;
			gap: 28px;
		}

		.section-desc {
			max-width: 100%;
		}

		.tiles-row {
			grid-template-columns: repeat(4, 1fr);
			gap: 14px;
		}
	}

	/* Mobile */
	@media (max-width: 640px) {
		.partner-types-section {
			padding: 40px 0 72px;
		}

		.types-container,
		.types-top-divider {
			width: calc(100% - 40px);
		}

		.tiles-row {
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
		}

		.type-tile {
			min-height: 130px;
		}

		.bottom-waves-decor {
			height: 65px;
		}
	}
</style>
