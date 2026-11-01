<script lang="ts">
	// PartnerTypesSection.svelte - Faithful to design/kemitraan.png (1536px Primary)
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
	<div class="sch-partner-container">
		<div class="types-grid">
			<!-- Left: Text -->
			<div class="text-col">
				<div class="section-label">
					<span class="label-dash">—</span>
					<span class="label-text">Jenis Mitra</span>
				</div>

				<h2 class="section-title">
					Kami Terbuka untuk Berkolaborasi dengan<br />
					Berbagai Jenis Institusi.
				</h2>

				<p class="section-desc">
					SDJNusantara menjalin kemitraan dengan berbagai pihak yang memiliki visi serupa dalam memajukan pendidikan dan pengembangan talenta.
				</p>
			</div>

			<!-- Right: 7 Tiles (equal width, height ±120px, radius ±14px, soft shadow) -->
			<div class="tiles-col">
				<div class="tiles-row">
					{#each partnerTypes as item}
						<div class="type-tile">
							<div class="tile-icon">
								{#if item.icon === 'school'}
									<!-- Gedung Sekolah -->
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
										<path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
										<path d="M18 10h4"></path>
										<path d="M18 6h4"></path>
										<path d="M18 14h4"></path>
										<path d="M2 22h20"></path>
										<path d="M6 18v4"></path>
										<path d="M6 14v-4"></path>
										<path d="M6 6V2"></path>
									</svg>
								{:else if item.icon === 'univ'}
									<!-- Topi Toga -->
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
										<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
										<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
									</svg>
								{:else if item.icon === 'book'}
									<!-- Buku Terbuka -->
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
										<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
										<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
									</svg>
								{:else if item.icon === 'gov'}
									<!-- Bangunan Berpilar -->
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
										<path d="M3 21h18"></path>
										<path d="M3 10h18"></path>
										<path d="M5 6l7-3 7 3"></path>
										<path d="M4 10v11"></path>
										<path d="M20 10v11"></path>
										<path d="M8 14v4"></path>
										<path d="M12 14v4"></path>
										<path d="M16 14v4"></path>
									</svg>
								{:else if item.icon === 'building'}
									<!-- Gedung Kantor -->
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
										<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
										<path d="M9 22v-4h6v4"></path>
										<line x1="8" y1="6" x2="8.01" y2="6"></line>
										<line x1="16" y1="6" x2="16.01" y2="6"></line>
										<line x1="8" y1="10" x2="8.01" y2="10"></line>
										<line x1="16" y1="10" x2="16.01" y2="10"></line>
										<line x1="8" y1="14" x2="8.01" y2="14"></line>
										<line x1="16" y1="14" x2="16.01" y2="14"></line>
									</svg>
								{:else if item.icon === 'users'}
									<!-- Kelompok Orang -->
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								{:else}
									<!-- Hati dalam Tangan -->
									<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
										<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
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
		background: #FFFFFF;
		padding: 1rem 0 1.15rem;
		width: 100%;
		box-sizing: border-box;
	}

	/* Scoped Container: x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px */
	.sch-partner-container {
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-partner-container {
			max-width: 1500px;
		}
	}

	.types-grid {
		display: grid;
		grid-template-columns: 460px 1fr;
		align-items: center;
		gap: 2rem;
	}

	/* Text Col */
	.text-col {
		max-width: 460px;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.45rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: clamp(22px, 1.8vw, 29px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.65rem 0;
	}

	.section-desc {
		font-size: 14px;
		line-height: 1.5;
		color: #556B82;
		margin: 0;
		text-wrap: pretty;
	}

	/* 7 Tiles Col */
	.tiles-col {
		flex: 1;
		min-width: 0;
	}

	.tiles-row {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 12px;
		width: 100%;
	}

	.type-tile {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		height: 105px;
		padding: 10px 8px;
		box-shadow: 0 4px 16px rgba(11, 39, 71, 0.05);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 8px;
		box-sizing: border-box;
		transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.type-tile:hover {
		transform: translateY(-2px);
		border-color: #00A6B2;
		box-shadow: 0 6px 20px rgba(0, 166, 178, 0.12);
	}

	.tile-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		height: 44px;
	}

	.tile-label {
		font-size: 12.5px;
		font-weight: 600;
		color: #082442;
		line-height: 1.25;
		text-align: center;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	@media (max-width: 1200px) {
		.types-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		.text-col {
			max-width: 100%;
		}
		.tiles-row {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 640px) {
		.tiles-row {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
		}
		.type-tile {
			height: 105px;
		}
	}
</style>
