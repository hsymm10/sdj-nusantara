<!-- Section E: Keunggulan Layanan Hukum — Dipisah Garis Vertikal Tipis & Lengkung Emas (Sesuai Mockup) -->
<script lang="ts">
	const advantages = [
		{
			title: 'Pendekatan Terstruktur',
			desc: 'Didukung alur kerja terstandar di bidang hukum pendidikan.',
			icon: 'check-circle'
		},
		{
			title: 'Solusi Komprehensif',
			desc: 'Mencakup konsultasi, penyusunan dokumen, hingga implementasi.',
			icon: 'grid'
		},
		{
			title: 'Berbasis Regulasi',
			desc: 'Berdasarkan peraturan dan kebijakan pendidikan yang berlaku.',
			icon: 'shield'
		},
		{
			title: 'Pendampingan Berkelanjutan',
			desc: 'Dukungan jangka panjang sesuai kebutuhan institusi.',
			icon: 'network'
		}
	];
</script>

<section class="adv-legal-section">
	<!-- Lengkung emas halus di tepi kiri-bawah section (Sesuai Mockup) -->
	<svg class="adv-bottom-gold-curve" viewBox="0 0 200 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 120 C80 120 160 80 200 0 C130 50 60 90 0 120 Z" fill="#F5B331" fill-opacity="0.85"/>
	</svg>

	<div class="adv-legal-container">
		<!-- Left Column: Heading and info (±42%) -->
		<div class="adv-left-col">
			<div class="adv-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">KEUNGGULAN</span>
			</div>

			<h2 class="adv-title">
				Mengapa Memilih<br />
				Layanan Hukum Kami?
			</h2>

			<p class="adv-desc">
				Pendampingan hukum yang tidak hanya menyelesaikan permasalahan, tetapi juga memberikan kejelasan tata kelola dan kepatuhan bagi institusi Anda.
			</p>
		</div>

		<!-- Garis vertikal tipis pemisah kolom kiri dan grid 2x2 kanan -->
		<div class="adv-vertical-divider" aria-hidden="true"></div>

		<!-- Right Column: 2x2 Advantages Grid (±55%) -->
		<div class="adv-right-col">
			<div class="adv-grid-2x2">
				{#each advantages as item}
					<div class="adv-item">
						<!-- Ikon dalam lingkaran teal pucat ±52px -->
						<div class="adv-icon-circle">
							{#if item.icon === 'check-circle'}
								<!-- Circle check -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"/>
									<polyline points="16 10 11 15 8 12"/>
								</svg>
							{:else if item.icon === 'grid'}
								<!-- 4 squares / grid -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="3" width="7" height="7"/>
									<rect x="14" y="3" width="7" height="7"/>
									<rect x="14" y="14" width="7" height="7"/>
									<rect x="3" y="14" width="7" height="7"/>
								</svg>
							{:else if item.icon === 'shield'}
								<!-- Shield check -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
									<polyline points="9 12 11 14 15 10"/>
								</svg>
							{:else}
								<!-- Network / Team -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
									<circle cx="9" cy="7" r="4"/>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
								</svg>
							{/if}
						</div>

						<div class="adv-text-wrap">
							<h3 class="adv-item-title">{item.title}</h3>
							<p class="adv-item-desc">{item.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.adv-legal-section {
		position: relative;
		background: #ffffff;
		padding: 50px 0 60px;
		overflow: hidden;
	}

	.adv-bottom-gold-curve {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 140px;
		height: 90px;
		pointer-events: none;
		z-index: 1;
	}

	.adv-legal-container {
		position: relative;
		z-index: 2;
		width: 93%;
		max-width: 1360px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
	}

	.adv-left-col {
		flex: 0 0 38%;
		max-width: 480px;
	}

	.adv-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.8px;
	}

	.adv-title {
		font-size: 32px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 14px;
	}

	.adv-desc {
		font-size: 14px;
		line-height: 1.65;
		color: #183553;
		margin: 0;
	}

	/* Garis Vertikal Pemisah tipis */
	.adv-vertical-divider {
		width: 1px;
		height: 190px;
		background: #e2e8f0;
		flex-shrink: 0;
	}

	/* Right 2x2 Grid */
	.adv-right-col {
		flex: 1;
		max-width: 680px;
	}

	.adv-grid-2x2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 26px 36px;
	}

	.adv-item {
		display: flex;
		align-items: flex-start;
		gap: 16px;
	}

	.adv-icon-circle {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #eaf7f9;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.adv-text-wrap {
		display: flex;
		flex-direction: column;
	}

	.adv-item-title {
		font-size: 15px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0 0 6px;
	}

	.adv-item-desc {
		font-size: 13px;
		line-height: 1.55;
		color: #64748b;
		margin: 0;
	}

	@media (max-width: 992px) {
		.adv-legal-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 32px;
		}

		.adv-vertical-divider {
			display: none;
		}

		.adv-left-col,
		.adv-right-col {
			max-width: 100%;
			width: 100%;
		}

		.adv-grid-2x2 {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
</style>
