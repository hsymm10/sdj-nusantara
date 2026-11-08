<!-- Section E: Keunggulan Layanan Hukum (Sesuai Mockup Referensi) -->
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
	<div class="adv-legal-container">
		<!-- Left Column: Heading and info -->
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

		<!-- Right Column: 2x2 Advantages Grid -->
		<div class="adv-right-col">
			<div class="adv-grid-2x2">
				{#each advantages as item}
					<div class="adv-item">
						<div class="adv-icon-box">
							{#if item.icon === 'check-circle'}
								<!-- Circle check -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"/>
									<polyline points="16 10 11 15 8 12"/>
								</svg>
							{:else if item.icon === 'grid'}
								<!-- 4 squares / grid -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="3" width="7" height="7"/>
									<rect x="14" y="3" width="7" height="7"/>
									<rect x="14" y="14" width="7" height="7"/>
									<rect x="3" y="14" width="7" height="7"/>
								</svg>
							{:else if item.icon === 'shield'}
								<!-- Shield check -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
									<polyline points="9 12 11 14 15 10"/>
								</svg>
							{:else}
								<!-- Network / Team -->
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
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
		background: #ffffff;
		padding: 38px 0 46px;
	}

	.adv-legal-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
	}

	.adv-left-col {
		flex: 1;
		max-width: 440px;
	}

	.adv-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.5px;
	}

	.adv-title {
		font-size: 24px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.3px;
	}

	.adv-desc {
		font-size: 12px;
		line-height: 1.6;
		color: #64748b;
		margin: 0;
	}

	/* Right 2x2 Grid */
	.adv-right-col {
		flex: 1.3;
		max-width: 580px;
	}

	.adv-grid-2x2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 22px 28px;
	}

	.adv-item {
		display: flex;
		align-items: flex-start;
		gap: 12px;
	}

	.adv-icon-box {
		width: 36px;
		height: 36px;
		border-radius: 8px;
		background: #e6f7f8;
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
		font-size: 12.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0 0 4px;
	}

	.adv-item-desc {
		font-size: 11px;
		line-height: 1.5;
		color: #64748b;
		margin: 0;
	}

	@media (max-width: 868px) {
		.adv-legal-container {
			flex-direction: column;
			align-items: flex-start;
		}

		.adv-left-col,
		.adv-right-col {
			max-width: 100%;
			width: 100%;
		}

		.adv-grid-2x2 {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}
</style>

