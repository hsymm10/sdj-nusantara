<!-- Section E: Keunggulan Layanan Hukum — Redesign Mengikuti Mockup Referensi (2x2 White Cards + Corner Waves) -->
<script lang="ts">
	const advantages = [
		{
			title: 'Pendekatan Terstruktur',
			desc: 'Didukung alur kerja terstandar di bidang hukum pendidikan.',
			icon: 'shield-check',
			accent: 'teal' as const
		},
		{
			title: 'Solusi Komprehensif',
			desc: 'Mencakup konsultasi, penyusunan dokumen, hingga implementasi.',
			icon: 'layout-grid',
			accent: 'gold' as const
		},
		{
			title: 'Berbasis Regulasi',
			desc: 'Berdasarkan peraturan dan kebijakan pendidikan yang berlaku.',
			icon: 'scale',
			accent: 'gold' as const
		},
		{
			title: 'Pendampingan Berkelanjutan',
			desc: 'Dukungan jangka panjang sesuai kebutuhan institusi.',
			icon: 'users',
			accent: 'teal' as const
		}
	];
</script>

<section class="adv-legal-section" aria-labelledby="adv-legal-heading">
	<!-- Dekorasi sudut latar lembut -->
	<svg class="adv-bg-waves-tr" viewBox="0 0 280 220" fill="none" aria-hidden="true">
		<path d="M90 0 C125 95, 190 165, 280 190 L280 0 Z" fill="#B8ECF1" fill-opacity="0.55" />
		<path d="M145 0 C175 75, 220 125, 280 145 L280 0 Z" fill="#46C7D2" fill-opacity="0.7" />
		<path d="M200 0 C220 50, 245 85, 280 100 L280 0 Z" fill="#00A6B2" fill-opacity="0.9" />
	</svg>
	<div class="adv-bg-glow-bl" aria-hidden="true"></div>

	<div class="adv-legal-container">
		<!-- Kolom Kiri: Informasi (±38%) -->
		<div class="adv-left-col">
			<div class="adv-badge">
				<span class="badge-dash" aria-hidden="true"></span>
				<span class="badge-text">KEUNGGULAN LAYANAN HUKUM</span>
			</div>

			<h2 id="adv-legal-heading" class="adv-title">
				Mengapa Memilih<br />
				<span class="adv-title-highlight">
					Layanan Hukum Kami?
					<svg
						class="title-gold-swoosh"
						viewBox="0 0 240 16"
						fill="none"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<path
							d="M2 12 C68 4, 152 3, 238 8"
							stroke="#FFB629"
							stroke-width="3.2"
							stroke-linecap="round"
						/>
					</svg>
				</span>
			</h2>

			<p class="adv-desc">
				Pendampingan hukum yang tidak hanya menyelesaikan permasalahan, tetapi juga memberikan kejelasan tata kelola dan kepatuhan bagi institusi Anda.
			</p>
		</div>

		<!-- Garis Pemisah Vertikal -->
		<div class="adv-vertical-divider" aria-hidden="true"></div>

		<!-- Kolom Kanan: Grid 2x2 Kartu Keunggulan -->
		<div class="adv-right-col">
			<div class="adv-grid-2x2">
				{#each advantages as item}
					<div class="adv-card">
						<!-- Lapisan wave pojok kanan bawah -->
						<svg
							class="adv-card-wave"
							viewBox="0 0 130 64"
							fill="none"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							{#if item.accent === 'teal'}
								<path
									d="M20 64 C58 58, 96 40, 130 8 L130 64 Z"
									fill="#7CD8E0"
									fill-opacity="0.45"
								/>
								<path
									d="M52 64 C84 58, 108 44, 130 22 L130 64 Z"
									fill="#00A9B7"
									fill-opacity="0.85"
								/>
							{:else}
								<path
									d="M20 64 C58 58, 96 40, 130 8 L130 64 Z"
									fill="#FFE082"
									fill-opacity="0.6"
								/>
								<path
									d="M52 64 C84 58, 108 44, 130 22 L130 64 Z"
									fill="#FFB629"
									fill-opacity="0.9"
								/>
							{/if}
						</svg>

						<div class="adv-card-inner">
							<div class="adv-icon-box" aria-hidden="true">
								{#if item.icon === 'shield-check'}
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
										<path d="m9 12 2 2 4-4" />
									</svg>
								{:else if item.icon === 'layout-grid'}
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<rect width="7" height="7" x="3" y="3" rx="1.5" />
										<rect width="7" height="7" x="14" y="3" rx="1.5" />
										<rect width="7" height="7" x="14" y="14" rx="1.5" />
										<rect width="7" height="7" x="3" y="14" rx="1.5" />
									</svg>
								{:else if item.icon === 'scale'}
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
										<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
										<path d="M7 21h10" />
										<path d="M12 3v18" />
										<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
									</svg>
								{:else}
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								{/if}
							</div>

							<div class="adv-text-wrap">
								<h3 class="adv-item-title">{item.title}</h3>
								<p class="adv-item-desc">{item.desc}</p>
							</div>
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
		background: #FFFFFF;
		padding: 64px 0 56px;
		overflow: hidden;
		box-sizing: border-box;
	}

	.adv-bg-waves-tr {
		position: absolute;
		top: 0;
		right: 0;
		width: 240px;
		height: 190px;
		pointer-events: none;
		z-index: 1;
	}

	.adv-bg-glow-bl {
		position: absolute;
		left: -80px;
		bottom: -60px;
		width: 340px;
		height: 220px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(215, 245, 249, 0.7) 0%, rgba(215, 245, 249, 0) 70%);
		pointer-events: none;
		z-index: 1;
	}

	.adv-legal-container {
		position: relative;
		z-index: 2;
		width: 93%;
		max-width: 1320px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
		box-sizing: border-box;
	}

	.adv-left-col {
		flex: 0 0 36%;
		max-width: 440px;
		min-width: 0;
	}

	.adv-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.badge-dash {
		display: inline-block;
		width: 22px;
		height: 2px;
		background: #00A9B7;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #00A9B7;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.adv-title {
		font-size: clamp(26px, 2.5vw, 34px);
		line-height: 1.22;
		font-weight: 800;
		color: #0B2340;
		margin: 0 0 20px;
		letter-spacing: -0.015em;
	}

	.adv-title-highlight {
		color: #FFB21C;
		position: relative;
		display: inline-block;
		padding-bottom: 6px;
	}

	.title-gold-swoosh {
		position: absolute;
		left: 38%;
		bottom: -4px;
		width: 62%;
		height: 12px;
		pointer-events: none;
	}

	.adv-desc {
		font-size: 14px;
		line-height: 1.65;
		color: #475569;
		margin: 0;
	}

	/* Garis Pemisah Vertikal Tipis */
	.adv-vertical-divider {
		width: 1px;
		height: 210px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	/* Kolom Kanan: Grid 2x2 Kartu */
	.adv-right-col {
		flex: 1;
		min-width: 0;
	}

	.adv-grid-2x2 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 18px 20px;
	}

	.adv-card {
		position: relative;
		overflow: hidden;
		background: #FFFFFF;
		border: 1px solid #E4EEF5;
		border-radius: 16px;
		padding: 20px 22px;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.045);
		box-sizing: border-box;
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}

	.adv-card:hover {
		transform: translateY(-2px);
		border-color: #C4E5EC;
		box-shadow: 0 10px 26px rgba(8, 36, 66, 0.075);
	}

	.adv-card-wave {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 118px;
		height: 54px;
		pointer-events: none;
		z-index: 1;
	}

	.adv-card-inner {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 16px;
		min-width: 0;
	}

	.adv-icon-box {
		width: 54px;
		height: 54px;
		border-radius: 14px;
		background: #E7F7F9;
		border: 1px solid #D1EEF3;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.adv-text-wrap {
		display: flex;
		flex-direction: column;
		min-width: 0;
		flex: 1;
	}

	.adv-item-title {
		font-size: 15.5px;
		font-weight: 700;
		color: #0B2340;
		line-height: 1.35;
		margin: 0 0 5px;
	}

	.adv-item-desc {
		font-size: 13px;
		line-height: 1.5;
		color: #64748B;
		margin: 0;
	}

	@media (max-width: 1024px) {
		.adv-legal-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 28px;
		}

		.adv-vertical-divider {
			display: none;
		}

		.adv-left-col,
		.adv-right-col {
			flex: none;
			max-width: 100%;
			width: 100%;
		}

		.adv-bg-waves-tr {
			width: 170px;
			height: 135px;
			opacity: 0.75;
		}
	}

	@media (max-width: 640px) {
		.adv-legal-section {
			padding: 40px 0 36px;
		}

		.adv-grid-2x2 {
			grid-template-columns: minmax(0, 1fr);
			gap: 14px;
		}

		.adv-card {
			padding: 18px;
		}

		.adv-card-inner {
			align-items: flex-start;
			gap: 14px;
		}

		.adv-icon-box {
			width: 48px;
			height: 48px;
			border-radius: 12px;
		}
	}
</style>
