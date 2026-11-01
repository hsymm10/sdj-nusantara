<script lang="ts">
	// PartnerApproachSection.svelte - Faithful to design/kemitraan.png
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
	<div class="approach-container">
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

				<a href="#bentuk-kerja-sama" class="btn-gold">
					<span>Tentang Pendekatan Kami</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Right: 4-Column White Card -->
			<div class="card-col">
				<div class="approach-card">
					<div class="pillars-grid">
						{#each approaches as item}
							<div class="pillar-item">
								<div class="pillar-icon">
									{#if item.icon === 'handshake'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
											<path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L17 12"></path>
											<path d="m2 13 6 6"></path>
										</svg>
									{:else if item.icon === 'users'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
										</svg>
									{:else if item.icon === 'lightbulb'}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6"></path>
											<path d="M10 22h4"></path>
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
										</svg>
									{:else}
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
		padding: 3rem 0;
	}

	.approach-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.approach-grid {
		display: grid;
		grid-template-columns: 1fr 1.75fr;
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
		margin: 0 0 0.65rem 0;
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

	/* Right Card */
	.approach-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 1.5rem 1.25rem;
		box-shadow: 0 6px 24px rgba(8, 36, 66, 0.06);
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.pillar-item {
		display: flex;
		flex-direction: column;
	}

	.pillar-icon {
		margin-bottom: 0.65rem;
	}

	.pillar-title {
		font-size: 11px;
		font-weight: 800;
		color: #082442;
		line-height: 14px;
		margin: 0 0 0.4rem 0;
		min-height: 28px;
	}

	.pillar-desc {
		font-size: 9.5px;
		line-height: 14px;
		color: #64748B;
		margin: 0;
	}

	@media (max-width: 900px) {
		.approach-grid {
			grid-template-columns: 1fr;
		}
		.pillars-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.pillars-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
