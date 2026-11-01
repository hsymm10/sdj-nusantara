<script lang="ts">
	// PartnerFocusFields.svelte - Faithful to design/kemitraan.png (1536px Primary)
	// Fixed layout bugs: Wide text column (≥460px), non-overlapping glass card, clean single-line Pembangunan Berkelanjutan
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
	<!-- Right: Modern Building Photo flush right (x ±1000→1536) with fade to white on left -->
	<div class="photo-side-wrap" aria-hidden="true">
		<img
			src="/images/partner-fields-building.jpg"
			alt="SDJNusantara Mitra Gedung"
			class="fields-photo"
			loading="lazy"
		/>
		<div class="photo-fade-overlay"></div>
	</div>

	<!-- Container: x ±78→1458 on 1536px -->
	<div class="sch-partner-container">
		<div class="fields-content-grid">
			<!-- Zone 1 (Left): Text Column (Width ≥ 460px, no break per word) -->
			<div class="fields-text-col">
				<div class="section-label">
					<span class="label-dash">—</span>
					<span class="label-text">Bidang Kolaborasi</span>
				</div>

				<h2 class="section-title">
					Fokus pada Bidang yang<br />
					Memberikan Dampak Luas.
				</h2>

				<p class="section-desc">
					Kami membuka peluang kerja sama di berbagai bidang strategis demi mendukung pengembangan talenta dan kualitas pendidikan.
				</p>

				<a href="#bentuk-kerja-sama" class="btn-gold-field">
					<span>Lihat Selengkapnya</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Zone 2 (Center): White Glass Card (Radius ±16px, shadow, 6 items 2 cols x 3 rows) -->
			<div class="fields-card-col">
				<div class="fields-glass-card">
					<div class="fields-2col-grid">
						{#each fields as item}
							<div class="field-item">
								<div class="field-icon-wrap">
									{#if item.icon === 'education'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
											<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
										</svg>
									{:else if item.icon === 'research'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6"></path>
											<path d="M10 22h4"></path>
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
										</svg>
									{:else if item.icon === 'talent'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
										</svg>
									{:else if item.icon === 'social'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
										</svg>
									{:else if item.icon === 'tech'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
											<line x1="8" y1="21" x2="16" y2="21"></line>
											<line x1="12" y1="17" x2="12" y2="21"></line>
										</svg>
									{:else}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="12" r="10"></circle>
											<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
											<path d="M2 12h20"></path>
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

		<!-- Mobile / Tablet Banner Photo (Only displayed on ≤ 1100px) -->
		<div class="fields-banner-mobile" aria-hidden="true">
			<img
				src="/images/partner-fields-building.jpg"
				alt="SDJNusantara Mitra Gedung"
				class="banner-mobile-img"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<style>
	.focus-fields-section {
		position: relative;
		background: #FFFFFF;
		height: 260px;
		width: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		border-top: 1px solid #F1F5F9;
	}

	/* Zone 3: Modern Building Photo flush right (x ±1000→1536) with fade to white on left */
	.photo-side-wrap {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 36%;
		max-width: 550px;
		z-index: 1;
		overflow: hidden;
	}

	.fields-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.photo-fade-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#FFFFFF 0%,
			rgba(255, 255, 255, 0.88) 18%,
			rgba(255, 255, 255, 0.25) 45%,
			rgba(255, 255, 255, 0) 70%
		);
	}

	/* Scoped Container: x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px */
	.sch-partner-container {
		position: relative;
		z-index: 2;
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

	.fields-content-grid {
		display: grid;
		grid-template-columns: 480px 440px;
		align-items: center;
		gap: 2rem;
	}

	/* Zone 1: Text Column (Width ≥ 460px, NO single word wrapping) */
	.fields-text-col {
		width: 100%;
		max-width: 480px;
		box-sizing: border-box;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.35rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: clamp(22px, 1.85vw, 28px);
		line-height: 1.22;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.5rem 0;
	}

	.section-desc {
		font-size: 14px;
		line-height: 1.5;
		color: #475569;
		margin: 0 0 1.25rem 0;
		max-width: 440px;
		text-wrap: pretty;
	}

	.btn-gold-field {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		height: 42px;
		padding: 0 20px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.25);
		transition: all 0.2s ease;
		width: fit-content;
	}

	.btn-gold-field:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 14px;
		transition: transform 0.2s ease;
	}

	.btn-gold-field:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Zone 2: White Glass Card (Radius ±16px, shadow, 2 columns x 3 rows) */
	.fields-card-col {
		width: 100%;
		max-width: 440px;
	}

	.fields-glass-card {
		background: rgba(255, 255, 255, 0.95);
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 1.15rem 1.25rem;
		box-shadow: 0 6px 24px rgba(8, 36, 66, 0.06);
		backdrop-filter: blur(8px);
		box-sizing: border-box;
	}

	.fields-2col-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.9rem 1.15rem;
	}

	.field-item {
		display: flex;
		align-items: center;
		gap: 9px;
	}

	.field-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 28px;
		height: 28px;
	}

	.field-label {
		font-size: 13px;
		font-weight: 600;
		color: #082442;
		line-height: 1.3;
		white-space: nowrap;
	}

	.fields-banner-mobile {
		display: none;
	}

	@media (max-width: 1100px) {
		.focus-fields-section {
			height: auto;
			padding: 2.5rem 0;
		}
		.photo-side-wrap {
			display: none;
		}
		.fields-content-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		.fields-text-col,
		.fields-card-col {
			max-width: 100%;
		}
		.fields-banner-mobile {
			display: block;
			width: 100%;
			height: 180px;
			border-radius: 14px;
			overflow: hidden;
			margin-top: 1.5rem;
		}
		.banner-mobile-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			display: block;
		}
	}

	@media (max-width: 640px) {
		.fields-2col-grid {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
	}
</style>
