<!-- Section C: Tentang Layanan Hukum — Susunan Satu Blok Gabungan Foto + Panel Menimpa (Sesuai Mockup) -->
<script lang="ts">
	const features = [
		{
			title: 'Pendampingan Terarah',
			icon: 'shield'
		},
		{
			title: 'Pendekatan Berbasis Kebutuhan',
			icon: 'users'
		},
		{
			title: 'Sesuai Regulasi Pendidikan',
			icon: 'doc'
		}
	];
</script>

<section class="about-legal-section">
	<div class="about-legal-container">
		<!-- KIRI (±42%): Label, H2, Deskripsi, Disclaimer -->
		<div class="about-col-left">
			<div class="section-tag">
				<span class="tag-dash"></span>
				<span class="tag-label">TENTANG LAYANAN</span>
			</div>

			<h2 class="about-title">Layanan Hukum SDJNusantara</h2>

			<p class="about-desc">
				Layanan konsultasi regulasi, telaah kepatuhan, serta pendampingan tata kelola hukum bagi institusi pendidikan, organisasi, maupun korporasi di bidang pendidikan.
			</p>

			<!-- Kotak Disclaimer: latar #EAF7F9, garis kiri teal 3px, radius 10px, ikon info SOLID teal 18px -->
			<div class="disclaimer-box">
				<div class="disclaimer-icon-wrap" aria-hidden="true">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="#079EAD">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
					</svg>
				</div>
				<p class="disclaimer-text">
					Informasi pada halaman ini bersifat umum dan bukan nasihat hukum. Hubungan penasihat-klien baru terbentuk setelah ada kesepakatan tertulis.
				</p>
			</div>
		</div>

		<!-- KANAN (±58%): SATU BLOK GABUNGAN FOTO + PANEL MENIMPA -->
		<div class="about-col-right">
			<div class="photo-panel-combo">
				<!-- Dekorasi Swoosh di BELAKANG foto (z-index 1) -->
				<div class="swoosh-bg-layer" aria-hidden="true">
					<!-- Swoosh turquoise melengkung di kiri-atas -->
					<svg class="swoosh-top-left" viewBox="0 0 160 120" fill="none">
						<path d="M0 120C0 50 50 0 160 0C100 0 0 30 0 120Z" fill="url(#teal-grad-swoosh)"/>
						<defs>
							<linearGradient id="teal-grad-swoosh" x1="0" y1="0" x2="1" y2="1">
								<stop offset="0%" stop-color="#16B6C1"/>
								<stop offset="100%" stop-color="#079EAD"/>
							</linearGradient>
						</defs>
					</svg>
					<!-- Lengkung emas di kiri-bawah/sudut bawah -->
					<svg class="swoosh-bottom-gold" viewBox="0 0 140 100" fill="none">
						<path d="M0 100C40 100 90 80 140 0C90 60 40 85 0 100Z" fill="#F5B331"/>
					</svg>
				</div>

				<!-- Foto Gedung (z-index 2): Sudut kiri-atas melengkung besar 120px -->
				<div class="building-photo-box">
					<img
						src="/images/about-campus-hd.jpg"
						alt="Gedung Institusi Pendidikan SDJNusantara"
						class="building-img"
					/>
					<!-- Lengkung emas tipis di sudut kanan bawah foto -->
					<svg class="building-deco-gold" viewBox="0 0 110 70" fill="none" aria-hidden="true">
						<path d="M40 70C70 65 95 45 110 15V70H40Z" fill="#F5B331" />
					</svg>
				</div>

				<!-- Panel Putih MENIMPA TEPI KANAN FOTO ±30px (z-index 3) -->
				<div class="overlapping-white-panel">
					{#each features as feat, idx}
						<div class="feature-row" class:border-bottom={idx < features.length - 1}>
							<div class="feat-icon-wrap">
								{#if feat.icon === 'shield'}
									<!-- Perisai centang outline teal 26px -->
									<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
										<polyline points="9 12 11 14 15 10"/>
									</svg>
								{:else if feat.icon === 'users'}
									<!-- Kelompok orang outline teal 26px -->
									<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
										<circle cx="9" cy="7" r="4"/>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
									</svg>
								{:else}
									<!-- Dokumen outline teal 26px -->
									<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
										<polyline points="14 2 14 8 20 8"/>
										<line x1="16" y1="13" x2="8" y2="13"/>
										<line x1="16" y1="17" x2="8" y2="17"/>
									</svg>
								{/if}
							</div>
							<span class="feat-text">{feat.title}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-legal-section {
		background: #ffffff;
		padding: 44px 0 52px;
	}

	.about-legal-container {
		width: 93%;
		max-width: 1360px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
	}

	/* === KIRI (±42%) === */
	.about-col-left {
		flex: 0 0 42%;
		max-width: 520px;
	}

	.section-tag {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.tag-dash {
		display: inline-block;
		width: 16px;
		height: 2.5px;
		background: #16b6c1;
		border-radius: 2px;
	}

	.tag-label {
		font-size: 12px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.8px;
		text-transform: uppercase;
	}

	.about-title {
		font-size: 32px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 14px;
	}

	.about-desc {
		font-size: 14.5px;
		line-height: 1.65;
		color: #183553;
		margin: 0 0 20px;
		max-width: 470px;
	}

	/* Kotak Disclaimer */
	.disclaimer-box {
		background: #eaf7f9;
		border-left: 3.5px solid #079ead;
		border-radius: 10px;
		padding: 12px 16px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		max-width: 480px;
	}

	.disclaimer-icon-wrap {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.disclaimer-text {
		font-size: 12.5px;
		line-height: 1.55;
		color: #183553;
		margin: 0;
	}

	/* === KANAN (±58%): BLOK GABUNGAN FOTO + PANEL MENIMPA === */
	.about-col-right {
		flex: 0 0 55%;
		display: flex;
		justify-content: flex-end;
	}

	.photo-panel-combo {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 660px;
		height: 235px;
	}

	/* Swoosh di belakang foto */
	.swoosh-bg-layer {
		position: absolute;
		inset: -12px auto auto -20px;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.swoosh-top-left {
		position: absolute;
		top: -8px;
		left: -12px;
		width: 140px;
		height: 100px;
	}

	.swoosh-bottom-gold {
		position: absolute;
		bottom: -10px;
		left: 20px;
		width: 120px;
		height: 80px;
	}

	/* Foto Gedung */
	.building-photo-box {
		position: relative;
		z-index: 2;
		width: 385px;
		height: 235px;
		border-top-left-radius: 120px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		overflow: hidden;
		box-shadow: 0 10px 24px rgba(8, 36, 66, 0.12);
		flex-shrink: 0;
	}

	.building-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.building-deco-gold {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 90px;
		height: 55px;
		pointer-events: none;
	}

	/* Panel Putih Menimpa Tepi Kanan Foto ±30px */
	.overlapping-white-panel {
		position: relative;
		z-index: 3;
		margin-left: -32px;
		width: 270px;
		height: 235px;
		background: #ffffff;
		border-radius: 18px;
		box-shadow: 0 12px 32px rgba(8, 36, 66, 0.12);
		border: 1px solid #e3eaf1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
	}

	.feature-row {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 0 20px;
	}

	.feature-row.border-bottom {
		border-bottom: 1px solid #e3eaf1;
	}

	.feat-icon-wrap {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.feat-text {
		font-size: 14.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
	}

	/* === RESPONSIVE === */
	@media (max-width: 1100px) {
		.about-legal-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 36px;
		}

		.about-col-left {
			max-width: 100%;
			flex: auto;
		}

		.about-col-right {
			width: 100%;
			flex: auto;
			justify-content: flex-start;
		}

		.photo-panel-combo {
			max-width: 100%;
		}
	}

	@media (max-width: 680px) {
		.photo-panel-combo {
			flex-direction: column;
			height: auto;
			align-items: stretch;
		}

		.building-photo-box {
			width: 100%;
			height: 200px;
			border-top-left-radius: 80px;
		}

		.overlapping-white-panel {
			margin-left: 0;
			margin-top: 16px;
			width: 100%;
			height: auto;
		}

		.feature-row {
			padding: 16px 20px;
		}
	}
</style>
