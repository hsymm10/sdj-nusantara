<script lang="ts">
	// PartnerTypesSection.svelte - Faithful to design/kemitraan.png
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
	<div class="types-container">
		<div class="types-grid">
			<!-- Left: Text -->
			<div class="text-col">
				<div class="section-label">
					<span class="label-dash">—</span>
					<span class="label-text">Jenis Mitra</span>
				</div>

				<h2 class="section-title">
					Kami Terbuka untuk Berkolaborasi<br />
					dengan Berbagai Jenis Institusi.
				</h2>

				<p class="section-desc">
					SDJNusantara menjalin kemitraan dengan berbagai pihak yang memiliki visi serupa dalam memajukan pendidikan dan pengembangan talenta.
				</p>
			</div>

			<!-- Right: 7 Tiles -->
			<div class="tiles-col">
				<div class="tiles-row">
					{#each partnerTypes as item}
						<div class="type-tile">
							<div class="tile-icon">
								{#if item.icon === 'school'}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
										<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
									</svg>
								{:else if item.icon === 'book'}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
										<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
									</svg>
								{:else if item.icon === 'gov'}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"></path>
										<path d="M9 9v.01M9 13v.01M9 17v.01"></path>
									</svg>
								{:else if item.icon === 'building'}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								{:else}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
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
		background: #F8FAFC;
		padding: 2.75rem 0;
		border-top: 1px solid #E2E8F0;
	}

	.types-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.types-grid {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		align-items: center;
		gap: 2rem;
	}

	/* Text Col */
	.text-col {
		padding-right: 0.5rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 11px;
		font-weight: 700;
		margin-bottom: 0.4rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: 21px;
		line-height: 27px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.55rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11px;
		line-height: 17px;
		color: #556B82;
		margin: 0;
	}

	/* Tiles Col */
	.tiles-row {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.5rem;
	}

	.type-tile {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		padding: 0.85rem 0.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 8px;
		box-shadow: 0 3px 12px rgba(8, 36, 66, 0.04);
		transition: all 0.2s ease;
	}

	.type-tile:hover {
		transform: translateY(-2px);
		border-color: #00A6B2;
		box-shadow: 0 6px 18px rgba(0, 166, 178, 0.12);
	}

	.tile-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tile-label {
		font-size: 8.5px;
		font-weight: 700;
		color: #082442;
		line-height: 11px;
	}

	@media (max-width: 900px) {
		.types-grid {
			grid-template-columns: 1fr;
		}
		.tiles-row {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 500px) {
		.tiles-row {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
