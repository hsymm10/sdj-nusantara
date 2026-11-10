<script lang="ts">
	// PartnerApproachSection.svelte - Redesign & Optimasi Proporsi Layout min(1500px, calc(100% - 80px))
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
			<!-- Kolom Kiri (~35%): Label, Heading, Deskripsi & Tombol -->
			<div class="text-col">
				<div class="approach-label">
					<span class="label-dash"></span>
					<span class="label-text">PENDEKATAN KAMI</span>
				</div>

				<h2 class="section-title">
					Kolaborasi yang Berorientasi<br />
					pada <span class="highlight-orange">Dampak Nyata.</span>
				</h2>

				<p class="section-desc">
					Kami percaya bahwa kemitraan yang kuat lahir dari kesamaan visi dan tujuan. SDJNusantara hadir sebagai penghubung antara berbagai pihak untuk menciptakan program pendidikan yang inovatif, inklusif, dan berkelanjutan.
				</p>

				<a href="/tentang-kami" class="btn-orange-approach">
					<span>Tentang Pendekatan Kami</span>
					<svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			</div>

			<!-- Kolom Kanan (~65%): 4 Kartu Prinsip Kolaborasi dengan Divider Vertikal Tipis -->
			<div class="card-col">
				<div class="approach-card">
					<div class="pillars-grid">
						{#each approaches as item, idx}
							<div class="pillar-item" class:has-divider={idx < approaches.length - 1}>
								<div class="pillar-icon-box">
									{#if item.icon === 'handshake'}
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
											<path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L17 12" />
											<path d="m2 13 6 6" />
										</svg>
									{:else if item.icon === 'users'}
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
											<circle cx="9" cy="7" r="4" />
											<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
											<path d="M16 3.13a4 4 0 0 1 0 7.75" />
										</svg>
									{:else if item.icon === 'lightbulb'}
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M9 18h6" />
											<path d="M10 22h4" />
											<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
										</svg>
									{:else}
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
											<polyline points="9 12 11 14 15 10" />
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
		padding: 56px 0 48px;
		width: 100%;
		box-sizing: border-box;
	}

	/* Container Konsisten: min(1500px, calc(100% - 80px)) */
	.approach-container {
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		box-sizing: border-box;
	}

	/* Grid Dua Kolom Proporsional: ~35% Kiri | ~65% Kanan */
	.approach-grid {
		display: grid;
		grid-template-columns: 35% 1fr;
		align-items: center;
		gap: 52px;
	}

	/* Kolom Kiri */
	.text-col {
		width: 100%;
		box-sizing: border-box;
	}

	.approach-label {
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
		font-size: clamp(24px, 2vw, 33px);
		line-height: 1.24;
		font-weight: 800;
		color: #0B1B45;
		margin: 0 0 14px 0;
		letter-spacing: -0.015em;
	}

	.highlight-orange {
		color: #FFAD16;
	}

	.section-desc {
		font-size: clamp(14px, 0.98vw, 15.5px);
		line-height: 1.6;
		color: #64748B;
		margin: 0 0 26px 0;
		max-width: 480px;
	}

	.btn-orange-approach {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 12px 26px;
		background: #FFAD16;
		color: #0B1B45;
		font-size: 14.5px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(255, 173, 22, 0.25);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.btn-orange-approach:hover {
		background: #e69b10;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(255, 173, 22, 0.36);
	}

	.btn-arrow {
		transition: transform 0.2s ease;
	}

	.btn-orange-approach:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Kolom Kanan: Card 4 Pilar Konsisten & Lega */
	.card-col {
		width: 100%;
		min-width: 0;
	}

	.approach-card {
		background: #FFFFFF;
		border: 1px solid #DCE6EF;
		border-radius: 22px;
		padding: 34px 20px;
		box-shadow: 0 6px 26px rgba(11, 27, 69, 0.04);
		box-sizing: border-box;
		width: 100%;
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 100%;
		align-items: stretch;
	}

	.pillar-item {
		display: flex;
		flex-direction: column;
		padding: 4px 22px;
		box-sizing: border-box;
	}

	.pillar-item.has-divider {
		border-right: 1px solid #E8EFF6;
	}

	.pillar-icon-box {
		width: 50px;
		height: 50px;
		border-radius: 13px;
		background: #EAF8F9;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 18px;
		flex-shrink: 0;
	}

	.pillar-title {
		font-size: 16px;
		font-weight: 800;
		color: #0B1B45;
		line-height: 1.32;
		margin: 0 0 10px 0;
		min-height: 42px;
	}

	.pillar-desc {
		font-size: 14px;
		line-height: 1.55;
		color: #64748B;
		margin: 0;
	}

	/* Tablet */
	@media (max-width: 1200px) {
		.approach-container {
			width: calc(100% - 56px);
		}

		.approach-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.section-desc {
			max-width: 100%;
		}

		.approach-card {
			padding: 28px 20px;
		}

		.pillars-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 28px 20px;
		}

		.pillar-item {
			padding: 4px 16px;
		}

		.pillar-item.has-divider {
			border-right: none;
		}

		.pillar-item:nth-child(odd) {
			border-right: 1px solid #E8EFF6;
		}
	}

	/* Mobile */
	@media (max-width: 640px) {
		.partner-approach-section {
			padding: 36px 0 36px;
		}

		.approach-container {
			width: calc(100% - 40px);
		}

		.approach-card {
			padding: 22px 18px;
		}

		.pillars-grid {
			grid-template-columns: 1fr;
			gap: 20px;
		}

		.pillar-item {
			padding: 0 0 18px 0;
		}

		.pillar-item:nth-child(odd) {
			border-right: none;
		}

		.pillar-item:not(:last-child) {
			border-bottom: 1px solid #E8EFF6;
		}

		.pillar-item:last-child {
			padding-bottom: 0;
		}

		.pillar-title {
			min-height: auto;
		}
	}
</style>
