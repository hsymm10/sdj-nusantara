<script lang="ts">
	// PartnerFocusFields.svelte - Faithful to design/kemitraan.png
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
	<div class="fields-layout-row">
		<!-- Left: Text & Button -->
		<div class="text-side">
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

			<a href="#bentuk-kerja-sama" class="btn-gold">
				<span>Lihat Selengkapnya</span>
				<span class="btn-arrow">→</span>
			</a>
		</div>

		<!-- Center: White Glass Card (6 Items 2 Columns, Clean One-Line for Pembangunan Berkelanjutan) -->
		<div class="card-side">
			<div class="fields-glass-card">
				<div class="fields-2col-grid">
					{#each fields as item}
						<div class="field-item">
							<div class="field-icon">
								{#if item.icon === 'education'}
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
										<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
									</svg>
								{:else if item.icon === 'research'}
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M9 18h6"></path>
										<path d="M10 22h4"></path>
										<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
									</svg>
								{:else if item.icon === 'talent'}
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								{:else if item.icon === 'social'}
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
									</svg>
								{:else if item.icon === 'tech'}
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
										<line x1="8" y1="21" x2="16" y2="21"></line>
										<line x1="12" y1="17" x2="12" y2="21"></line>
									</svg>
								{:else}
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

		<!-- Right: Building Photo flush right -->
		<div class="photo-side">
			<img
				src="/images/partner-fields-building.jpg"
				alt="SDJNusantara Mitra Gedung"
				class="fields-photo"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<style>
	.focus-fields-section {
		background: #F8FAFC;
		padding: 3rem 0;
		overflow: hidden;
		border-top: 1px solid #E2E8F0;
	}

	.fields-layout-row {
		display: flex;
		align-items: center;
		width: 100%;
	}

	/* Text Side */
	.text-side {
		flex: 1;
		max-width: 420px;
		padding-left: max(1.5rem, calc((100% - 1086px) / 2));
		padding-right: 1.5rem;
		box-sizing: border-box;
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
		margin: 0 0 1.25rem 0;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F4B334;
		color: #071D36;
		padding: 7px 18px;
		font-size: 11px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		box-shadow: 0 2px 8px rgba(244, 179, 52, 0.25);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
	}

	/* Card Side */
	.card-side {
		flex: 1.2;
		max-width: 480px;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	.fields-glass-card {
		background: rgba(255, 255, 255, 0.95);
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 1.5rem 1.35rem;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.06);
	}

	.fields-2col-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.15rem 1.25rem;
	}

	.field-item {
		display: flex;
		align-items: center;
		gap: 9px;
	}

	.field-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.field-label {
		font-size: 10.5px;
		font-weight: 700;
		color: #082442;
		line-height: 14px;
		white-space: nowrap;
	}

	/* Photo Side flush right */
	.photo-side {
		flex: 1;
		min-width: 320px;
		height: 270px;
		overflow: hidden;
	}

	.fields-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (max-width: 900px) {
		.fields-layout-row {
			flex-direction: column;
		}
		.text-side {
			max-width: 100%;
			padding: 1rem;
		}
		.card-side {
			max-width: 100%;
			padding: 1rem;
		}
		.photo-side {
			width: 100%;
			height: 220px;
		}
	}
</style>
