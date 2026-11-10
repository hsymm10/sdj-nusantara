<!-- Section E: Keunggulan Layanan Hukum — Pixel-Perfect Refinement Mengikuti Mockup Referensi -->
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
	<svg class="adv-bg-waves-tr" viewBox="0 0 320 240" fill="none" aria-hidden="true">
		<path d="M95 0 C138 110, 212 185, 320 212 L320 0 Z" fill="#BCECF2" fill-opacity="0.58" />
		<path d="M162 0 C196 88, 248 142, 320 164 L320 0 Z" fill="#46C7D2" fill-opacity="0.68" />
		<path d="M224 0 C248 60, 278 100, 320 116 L320 0 Z" fill="#00A6B2" fill-opacity="0.9" />
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
						viewBox="0 0 280 18"
						fill="none"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<path
							d="M2 14 C78 4, 178 3, 278 9"
							stroke="#FFB629"
							stroke-width="3.6"
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
						<!-- Lapisan wave lembut bagian kanan bawah kartu -->
						<svg
							class="adv-card-wave"
							viewBox="0 0 260 64"
							fill="none"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							{#if item.accent === 'teal'}
								<path
									d="M40 64 C118 56, 198 38, 260 4 L260 64 Z"
									fill="#99E3EA"
									fill-opacity="0.45"
								/>
								<path
									d="M125 64 C180 56, 224 42, 260 18 L260 64 Z"
									fill="#4AC7D2"
									fill-opacity="0.72"
								/>
							{:else}
								<path
									d="M40 64 C118 56, 198 38, 260 4 L260 64 Z"
									fill="#FFE49C"
									fill-opacity="0.55"
								/>
								<path
									d="M125 64 C180 56, 224 42, 260 18 L260 64 Z"
									fill="#FFC247"
									fill-opacity="0.82"
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
		padding: 48px 0 36px;
		overflow: hidden;
		box-sizing: border-box;
	}

	.adv-bg-waves-tr {
		position: absolute;
		top: 0;
		right: 0;
		width: 230px;
		height: 175px;
		pointer-events: none;
		z-index: 1;
	}

	.adv-bg-glow-bl {
		position: absolute;
		left: -70px;
		bottom: -50px;
		width: 340px;
		height: 210px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(212, 245, 249, 0.68) 0%, rgba(212, 245, 249, 0) 70%);
		pointer-events: none;
		z-index: 1;
	}

	.adv-legal-container {
		position: relative;
		z-index: 2;
		width: 92%;
		max-width: 1220px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 28px;
		box-sizing: border-box;
	}

	.adv-left-col {
		flex: 0 0 34%;
		max-width: 420px;
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
		width: 20px;
		height: 2px;
		background: #00A9B7;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #00A9B7;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.adv-title {
		font-size: clamp(24px, 2.1vw, 32px);
		line-height: 1.2;
		font-weight: 800;
		color: #0B2340;
		margin: 0 0 14px;
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
		left: 36%;
		bottom: -4px;
		width: 64%;
		height: 12px;
		pointer-events: none;
	}

	.adv-desc {
		font-size: 14px;
		line-height: 1.6;
		color: #475569;
		margin: 0;
		max-width: 400px;
	}

	/* Garis Pemisah Vertikal Tipis */
	.adv-vertical-divider {
		width: 1px;
		height: 196px;
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
		gap: 18px;
	}

	.adv-card {
		position: relative;
		overflow: hidden;
		background: #FFFFFF;
		border: 1px solid #E4EEF5;
		border-radius: 15px;
		min-height: 102px;
		padding: 18px 20px;
		display: flex;
		align-items: center;
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
		width: 140px;
		height: 38px;
		pointer-events: none;
		z-index: 1;
	}

	.adv-card-inner {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 14px;
		width: 100%;
		min-width: 0;
	}

	.adv-icon-box {
		width: 50px;
		height: 50px;
		border-radius: 13px;
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
		line-height: 1.32;
		margin: 0 0 4px;
	}

	.adv-item-desc {
		font-size: 13px;
		line-height: 1.48;
		color: #64748B;
		margin: 0;
	}

	@media (max-width: 1120px) {
		.adv-legal-container {
			width: 92%;
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

		.adv-desc {
			max-width: 680px;
		}

		.adv-bg-waves-tr {
			width: 190px;
			height: 145px;
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
			min-height: 0;
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
