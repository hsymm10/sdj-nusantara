<script lang="ts">
	// PartnerApproachSection.svelte - Faithful to design/kemitraan.png (1536px Primary)
	const approaches = [
		{
			title: 'Berorientasi pada Solusi',
			desc: 'Fokus pada kebutuhan nyata dan hasil yang terukur.',
			icon: 'handshake'
		},
		{
			title: 'Kolaborasi Jangka Panjang',
			desc: 'Membangun hubungan berkelanjutan untuk dampak lebih besar.',
			icon: 'users'
		},
		{
			title: 'Inovasi Bersama',
			desc: 'Menghadirkan program yang relevan dengan perkembangan zaman.',
			icon: 'lightbulb'
		},
		{
			title: 'Transparansi dan Akuntabilitas',
			desc: 'Menjaga kepercayaan melalui tata kelola yang profesional.',
			icon: 'shield'
		}
	];
</script>

<section id="pendekatan-kami" class="partner-approach-section">
	<div class="sch-partner-container">
		<div class="approach-grid">
			<!-- Left: Text Column -->
			<div class="text-col">
				<div class="section-label">
					<span class="label-dash">—</span>
					<span class="label-text">Pendekatan Kami</span>
				</div>

				<h2 class="section-title">
					Kolaborasi yang Berorientasi<br />
					pada Dampak Nyata.
				</h2>

				<p class="section-desc">
					Kami percaya bahwa kemitraan yang kuat lahir dari kesamaan visi dan tujuan. SDJNusantara hadir sebagai penghubung antara berbagai pihak untuk menciptakan program pendidikan yang inovatif, inklusif, dan berkelanjutan.
				</p>

				<a href="/tentang-kami" class="btn-gold-approach">
					<span>Tentang Pendekatan Kami</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Right: 4-Column White Card (x ±582→1464, height ±245px, radius ±21px) -->
			<div class="card-col">
				<div class="approach-card">
					<div class="pillars-grid">
						{#each approaches as item, idx}
							<div class="pillar-item" class:has-divider={idx < approaches.length - 1}>
								<div class="pillar-icon">
									{#if item.icon === 'handshake'}
										<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
											<path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L17 12"></path>
											<path d="m2 13 6 6"></path>
										</svg>
									{:else if item.icon === 'users'}
										<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
										</svg>
									{:else if item.icon === 'lightbulb'}
										<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6"></path>
											<path d="M10 22h4"></path>
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
										</svg>
									{:else}
										<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
											<polyline points="9 12 11 14 15 10"></polyline>
										</svg>
									{/if}
								</div>

								<h3 class="pillar-title">{item.title}</h3>
								<p class="pillar-desc">{item.desc}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.partner-approach-section {
		background: #FFFFFF;
		padding: 1.65rem 0 1.75rem;
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

	.approach-grid {
		display: grid;
		grid-template-columns: 440px 1fr;
		align-items: center;
		gap: 2.25rem;
	}

	/* Text Column */
	.text-col {
		max-width: 440px;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: clamp(24px, 2vw, 32px);
		line-height: 1.22;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.75rem 0;
	}

	.section-desc {
		font-size: 14.5px;
		line-height: 1.55;
		color: #183553;
		margin: 0 0 1.5rem 0;
		text-wrap: pretty;
	}

	.btn-gold-approach {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 0 22px;
		height: 42px;
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

	.btn-gold-approach:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 14px;
		transition: transform 0.2s ease;
	}

	.btn-gold-approach:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Right Card: Height ±245px, radius ±21px, soft shadow */
	.card-col {
		flex: 1;
		min-width: 0;
	}

	.approach-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 21px;
		padding: 1.75rem 1.5rem;
		height: 245px;
		box-shadow: 0 8px 30px rgba(11, 39, 71, 0.08);
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 100%;
		height: 100%;
	}

	.pillar-item {
		display: flex;
		flex-direction: column;
		padding: 0 1.15rem;
		box-sizing: border-box;
	}

	.pillar-item.has-divider {
		border-right: 1px solid #F1F5F9;
	}

	.pillar-icon {
		margin-bottom: 0.85rem;
		display: flex;
		align-items: center;
	}

	.pillar-title {
		font-size: 15.5px;
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 0.5rem 0;
		min-height: 40px;
	}

	.pillar-desc {
		font-size: 13.5px;
		line-height: 1.45;
		color: #475569;
		margin: 0;
	}

	@media (max-width: 1100px) {
		.approach-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.text-col {
			max-width: 100%;
		}
		.approach-card {
			height: auto;
			padding: 1.5rem;
		}
		.pillars-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem 1rem;
		}
		.pillar-item.has-divider {
			border-right: none;
		}
	}

	@media (max-width: 640px) {
		.pillars-grid {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}
		.pillar-item {
			padding: 0;
		}
		.pillar-title {
			min-height: auto;
		}
	}
</style>
