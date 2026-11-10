<!-- Section C: Tentang Layanan Hukum — Mengikuti Mockup Referensi dengan Teks Existing -->
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

<section class="about-legal-section" aria-labelledby="about-legal-heading">
	<div class="about-legal-container">
		<!-- KOLOM KIRI (~40%): Label, Heading, Deskripsi, Information Box -->
		<div class="about-col-left">
			<div class="section-tag">
				<span class="tag-dash" aria-hidden="true"></span>
				<span class="tag-label">TENTANG LAYANAN</span>
			</div>

			<h2 id="about-legal-heading" class="about-title">Layanan Hukum SDJNusantara</h2>

			<p class="about-desc">
				Layanan konsultasi regulasi, telaah kepatuhan, serta pendampingan tata kelola hukum bagi institusi pendidikan, organisasi, maupun korporasi di bidang pendidikan.
			</p>

			<!-- Kotak Informasi: Latar #E8F7F9, Aksen Garis Kiri Turquoise, Ikon Info Turquoise -->
			<div class="disclaimer-box">
				<div class="disclaimer-icon-wrap" aria-hidden="true">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10" />
						<path d="M12 16v-4" />
						<path d="M12 8h.01" />
					</svg>
				</div>
				<p class="disclaimer-text">
					Informasi pada halaman ini bersifat umum dan bukan nasihat hukum. Hubungan penasihat-klien baru terbentuk setelah ada kesepakatan tertulis.
				</p>
			</div>
		</div>

		<!-- Garis Pemisah Vertikal Tipis (Sesuai Mockup) -->
		<div class="about-vertical-divider" aria-hidden="true"></div>

		<!-- KOLOM KANAN (~56%): Foto Gedung + Floating White Card Menempel di Sisi Kanan -->
		<div class="about-col-right">
			<div class="photo-panel-combo">
				<!-- Aksen garis lengkung turquoise di bagian kiri atas gambar -->
				<svg class="swoosh-top-left" viewBox="0 0 180 135" fill="none" aria-hidden="true">
					<path
						d="M8 128 C12 52, 62 10, 168 6"
						stroke="#00AAB5"
						stroke-width="3.2"
						stroke-linecap="round"
					/>
					<path
						d="M22 122 C28 60, 72 22, 152 18"
						stroke="#7AD8E0"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-opacity="0.7"
					/>
				</svg>

				<!-- Foto Gedung Landscape -->
				<div class="building-photo-box">
					<img
						src="/images/about-campus-hd.jpg"
						alt="Gedung Perkantoran Modern SDJNusantara"
						class="building-img"
					/>
					<!-- Lengkung emas kecil di sudut kanan bawah foto -->
					<svg class="building-deco-gold" viewBox="0 0 110 70" fill="none" aria-hidden="true">
						<path d="M40 70 C70 65, 95 45, 110 15 V70 H40 Z" fill="#FFB21C" fill-opacity="0.92" />
					</svg>
				</div>

				<!-- Floating White Card Menempel di Kanan Foto -->
				<div class="overlapping-white-panel">
					{#each features as feat, idx}
						<div class="feature-row" class:border-bottom={idx < features.length - 1}>
							<div class="feat-icon-circle" aria-hidden="true">
								{#if feat.icon === 'shield'}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
										<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
										<path d="m9 12 2 2 4-4" />
									</svg>
								{:else if feat.icon === 'users'}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								{:else}
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
										<polyline points="14 2 14 8 20 8" />
										<line x1="16" y1="13" x2="8" y2="13" />
										<line x1="16" y1="17" x2="8" y2="17" />
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
		position: relative;
		background: transparent;
		padding: 36px 0 42px;
		box-sizing: border-box;
	}

	.about-legal-container {
		position: relative;
		z-index: 2;
		width: 92%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 44px;
		box-sizing: border-box;
	}

	/* === KOLOM KIRI (~40%) === */
	.about-col-left {
		flex: 0 0 40%;
		max-width: 470px;
		min-width: 0;
	}

	.section-tag {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.tag-dash {
		display: inline-block;
		width: 20px;
		height: 2px;
		background: #00AAB5;
		border-radius: 2px;
	}

	.tag-label {
		font-size: 11.5px;
		font-weight: 700;
		color: #00AAB5;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.about-title {
		font-size: 29px;
		line-height: 1.24;
		font-weight: 800;
		color: #092B4A;
		margin: 0 0 14px;
		letter-spacing: -0.015em;
	}

	.about-desc {
		font-size: 13.5px;
		line-height: 1.62;
		color: #475569;
		margin: 0 0 18px;
	}

	/* Information Box */
	.disclaimer-box {
		background: #E8F7F9;
		border-left: 3.5px solid #00AAB5;
		border-radius: 12px;
		padding: 13px 16px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		box-sizing: border-box;
	}

	.disclaimer-icon-wrap {
		flex-shrink: 0;
		margin-top: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.disclaimer-text {
		font-size: 12.5px;
		line-height: 1.55;
		color: #1E3A5F;
		margin: 0;
	}

	/* Garis Pemisah Vertikal */
	.about-vertical-divider {
		width: 1px;
		height: 215px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	/* === KOLOM KANAN (~56%) === */
	.about-col-right {
		flex: 1;
		min-width: 0;
		display: flex;
		justify-content: flex-end;
	}

	.photo-panel-combo {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 645px;
	}

	.swoosh-top-left {
		position: absolute;
		top: -12px;
		left: -14px;
		width: 165px;
		height: 122px;
		pointer-events: none;
		z-index: 1;
	}

	.building-photo-box {
		position: relative;
		z-index: 2;
		width: 385px;
		height: 240px;
		border-top-left-radius: 120px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		overflow: hidden;
		box-shadow: 0 10px 26px rgba(8, 36, 66, 0.10);
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
		width: 82px;
		height: 48px;
		pointer-events: none;
	}

	/* Floating Card Putih Menempel Rapi di Kanan Foto */
	.overlapping-white-panel {
		position: relative;
		z-index: 3;
		margin-left: -22px;
		width: 282px;
		height: 240px;
		background: #FFFFFF;
		border-radius: 16px;
		box-shadow: 0 10px 28px rgba(8, 36, 66, 0.09);
		border: 1px solid #DCE7F1;
		display: grid;
		grid-template-rows: repeat(3, minmax(0, 1fr));
		overflow: hidden;
		box-sizing: border-box;
	}

	.feature-row {
		display: flex;
		align-items: center;
		gap: 13px;
		padding: 0 18px;
		box-sizing: border-box;
		min-width: 0;
	}

	.feature-row.border-bottom {
		border-bottom: 1px solid #E5EEF5;
	}

	.feat-icon-circle {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #E8F7F9;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.feat-text {
		font-size: 13.5px;
		font-weight: 600;
		color: #092B4A;
		line-height: 1.35;
	}

	/* === RESPONSIVE === */
	@media (max-width: 1120px) {
		.about-legal-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 36px;
		}

		.about-vertical-divider {
			display: none;
		}

		.about-col-left {
			max-width: 100%;
			width: 100%;
			flex: none;
		}

		.about-col-right {
			width: 100%;
			flex: none;
			justify-content: flex-start;
		}

		.photo-panel-combo {
			max-width: 640px;
		}
	}

	@media (max-width: 720px) {
		.about-legal-section {
			padding: 40px 0 36px;
		}

		.about-title {
			font-size: 25px;
		}

		.photo-panel-combo {
			flex-direction: column;
			align-items: stretch;
			max-width: 100%;
		}

		.swoosh-top-left {
			width: 120px;
			height: 90px;
			top: -8px;
			left: -8px;
		}

		.building-photo-box {
			width: 100%;
			height: 210px;
			border-top-left-radius: 84px;
		}

		.overlapping-white-panel {
			margin-left: 0;
			margin-top: -18px;
			width: calc(100% - 16px);
			align-self: center;
			height: auto;
			min-height: 0;
		}

		.feature-row {
			padding: 14px 16px;
		}
	}
</style>
