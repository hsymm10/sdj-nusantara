<script lang="ts">
	// PartnerTypesSection.svelte - Redesign & Optimasi Proporsi Layout min(1500px, calc(100% - 80px))
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
	<!-- Garis Pemisah Halus Antar-Section agar Menjadi Satu Kesatuan Desain -->
	<div class="types-top-divider" aria-hidden="true"></div>

	<!-- Container Konsisten: min(1500px, calc(100% - 80px)) -->
	<div class="types-container">
		<div class="types-grid">
			<!-- Kolom Kiri (~33%): Label, Heading & Deskripsi -->
			<div class="text-col">
				<div class="types-label">
					<span class="label-dash"></span>
					<span class="label-text">JENIS MITRA</span>
				</div>

				<h2 class="section-title">
					Kami Terbuka untuk Berkolaborasi dengan<br />
					<span class="highlight-teal">Berbagai Jenis Institusi.</span>
				</h2>

				<p class="section-desc">
					SDJNusantara menjalin kemitraan dengan berbagai pihak yang memiliki visi serupa dalam memajukan pendidikan dan pengembangan talenta.
				</p>
			</div>

			<!-- Kolom Kanan (~67%): 7 Kartu Jenis Mitra dalam Satu Baris Horizontal -->
			<div class="tiles-col">
				<div class="tiles-row">
					{#each partnerTypes as item}
						<div class="type-tile">
							<div class="tile-icon">
								{#if item.icon === 'school'}
									<!-- Gedung Sekolah -->
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
										<path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
										<path d="M18 10h4" />
										<path d="M18 6h4" />
										<path d="M18 14h4" />
										<path d="M2 22h20" />
										<path d="M6 18v4" />
										<path d="M6 14v-4" />
										<path d="M6 6V2" />
									</svg>
								{:else if item.icon === 'univ'}
									<!-- Topi Toga -->
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
										<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
										<path d="M6 12v5c3 3 9 3 12 0v-5" />
									</svg>
								{:else if item.icon === 'book'}
									<!-- Buku Terbuka -->
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
										<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
										<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
									</svg>
								{:else if item.icon === 'gov'}
									<!-- Bangunan Berpilar -->
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
										<path d="M3 21h18" />
										<path d="M3 10h18" />
										<path d="M5 6l7-3 7 3" />
										<path d="M4 10v11" />
										<path d="M20 10v11" />
										<path d="M8 14v4" />
										<path d="M12 14v4" />
										<path d="M16 14v4" />
									</svg>
								{:else if item.icon === 'building'}
									<!-- Gedung Kantor -->
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
										<rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
										<path d="M9 22v-4h6v4" />
										<line x1="8" y1="6" x2="8.01" y2="6" />
										<line x1="16" y1="6" x2="16.01" y2="6" />
										<line x1="8" y1="10" x2="8.01" y2="10" />
										<line x1="16" y1="10" x2="16.01" y2="10" />
										<line x1="8" y1="14" x2="8.01" y2="14" />
										<line x1="16" y1="14" x2="16.01" y2="14" />
									</svg>
								{:else if item.icon === 'users'}
									<!-- Kelompok Orang -->
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								{:else}
									<!-- Hati -->
									<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
										<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
									</svg>
								{/if}
							</div>
							<span class="tile-label">{item.label}</span>
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
		padding: 46px 0 56px;
		width: 100%;
		box-sizing: border-box;
	}

	/* Pembatas Halus Antar-Section */
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

	/* Container Konsisten: min(1500px, calc(100% - 80px)) */
	.types-container {
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		box-sizing: border-box;
	}

	/* Layout Dua Kolom: ~33% Kiri | ~67% Kanan */
	.types-grid {
		display: grid;
		grid-template-columns: 33% 1fr;
		align-items: center;
		gap: 48px;
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

	.section-title {
		font-size: clamp(23px, 1.9vw, 31px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B1B45;
		margin: 0 0 12px 0;
		letter-spacing: -0.015em;
	}

	.highlight-teal {
		color: #00A9B7;
	}

	.section-desc {
		font-size: clamp(14px, 0.98vw, 15.5px);
		line-height: 1.6;
		color: #64748B;
		margin: 0;
		max-width: 460px;
	}

	/* Kolom Kanan: 7 Kartu Horizontal Proporsional */
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
		border: 1px solid #DCE6EF;
		border-radius: 16px;
		min-height: 138px;
		padding: 18px 10px;
		box-shadow: 0 4px 16px rgba(11, 27, 69, 0.04);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 12px;
		box-sizing: border-box;
		transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease, box-shadow 0.22s ease;
	}

	.type-tile:hover {
		transform: translateY(-4px);
		border-color: #00A9B7;
		box-shadow: 0 10px 24px rgba(0, 169, 183, 0.12);
	}

	.tile-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: #EAF8F9;
		transition: transform 0.2s ease, background-color 0.2s ease;
	}

	.tile-icon svg {
		width: 28px;
		height: 28px;
	}

	.type-tile:hover .tile-icon {
		background: #D9F4F7;
		transform: scale(1.05);
	}

	.tile-label {
		font-size: 13px;
		font-weight: 700;
		color: #0B1B45;
		line-height: 1.3;
		text-align: center;
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
			padding: 36px 0 42px;
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
			min-height: 120px;
			padding: 16px 10px;
		}
	}
</style>
