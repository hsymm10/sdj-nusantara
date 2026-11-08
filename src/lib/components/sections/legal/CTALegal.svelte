<!-- Section G: CTA Konsultasi Hukum — Wadah Navy, Foto Tanpa Wajah Lengkung Emas, Garis Pemisah Vertikal (Sesuai Mockup) -->
<script lang="ts">
	// CTA Section
</script>

<section class="cta-legal-section">
	<div class="cta-legal-container">
		<div class="cta-box-card">
			<!-- KIRI (±34% lebar): FOTO TANPA WAJAH DENGAN SISI KANAN MELENGKUNG & GARIS EMAS TIPIS (3px) -->
			<div class="cta-photo-col">
				<div class="cta-img-wrap">
					<img
						src="/images/legal-faceless-writing.jpg"
						alt="Konsultasi Hukum SDJNusantara"
						class="cta-faceless-img"
					/>
					<!-- Garis emas tipis (#F5B331, 3px) mengikuti lengkungan sisi kanan foto -->
					<svg class="cta-gold-curve-line" viewBox="0 0 40 210" preserveAspectRatio="none" fill="none" aria-hidden="true">
						<path d="M0 0 C38 60 38 150 0 210" stroke="#F5B331" stroke-width="4" stroke-linecap="round"/>
					</svg>
				</div>
			</div>

			<!-- TENGAH-KANAN: DUA KOLOM DIPISAH GARIS VERTIKAL TIPIS rgba(255,255,255,.18) -->
			<div class="cta-content-cols">
				<!-- Kolom 1 (Tengah): H2 2 baris (baris 2 emas #F5B331) + deskripsi putih -->
				<div class="cta-col-middle">
					<h2 class="cta-title">
						Konsultasikan Kebutuhan<br />
						<span class="gold-text">Hukum Institusi Anda</span>
					</h2>
					<p class="cta-desc">
						Dapatkan solusi hukum yang terarah dan sesuai dengan regulasi pendidikan.
					</p>
				</div>

				<!-- Garis Vertikal Pemisah tipis -->
				<div class="cta-vertical-divider" aria-hidden="true"></div>

				<!-- Kolom 2 (Kanan): Tombol Emas + Disclaimer dengan Ikon Info Solid Teal -->
				<div class="cta-col-right">
					<a href="/konsultasi" class="btn-cta-gold">
						<span>Ajukan Konsultasi</span>
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"/>
							<polyline points="12 5 19 12 12 19"/>
						</svg>
					</a>

					<div class="cta-disclaimer-box">
						<div class="disclaimer-teal-icon" aria-hidden="true">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="#079EAD">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
							</svg>
						</div>
						<p class="disclaimer-text">
							Informasi pada halaman ini bersifat umum dan bukan nasihat hukum. Hubungan penasihat-klien baru terbentuk setelah ada kesepakatan tertulis.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-legal-section {
		background: #ffffff;
		padding: 40px 0 64px;
	}

	.cta-legal-container {
		width: 91%;
		max-width: 1360px;
		margin: 0 auto;
	}

	.cta-box-card {
		background: #082442;
		border-radius: 24px;
		display: flex;
		align-items: stretch;
		min-height: 210px;
		overflow: hidden;
		box-shadow: 0 14px 34px rgba(8, 36, 66, 0.22);
		position: relative;
	}

	/* === KIRI (±34% lebar): FOTO TANPA WAJAH === */
	.cta-photo-col {
		flex: 0 0 34%;
		position: relative;
		min-height: 210px;
	}

	.cta-img-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		border-top-right-radius: 100px;
		border-bottom-right-radius: 100px;
		overflow: hidden;
	}

	.cta-faceless-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	/* Garis Emas tipis (#F5B331, ±3px) mengikuti lengkungan sisi kanan foto */
	.cta-gold-curve-line {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 32px;
		height: 100%;
		pointer-events: none;
		z-index: 2;
	}

	/* === TENGAH-KANAN: DUA KOLOM DIPISAH GARIS VERTIKAL === */
	.cta-content-cols {
		flex: 1;
		display: flex;
		align-items: center;
		padding: 24px 38px 24px 32px;
		gap: 32px;
	}

	/* Kolom 1 (Tengah): Heading & Deskripsi */
	.cta-col-middle {
		flex: 1.25;
	}

	.cta-title {
		font-size: 29px;
		line-height: 1.25;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 10px;
	}

	.gold-text {
		color: #f5b331;
	}

	.cta-desc {
		font-size: 14.5px;
		line-height: 1.6;
		color: #ffffff;
		margin: 0;
		opacity: 0.92;
		max-width: 440px;
	}

	/* Garis Vertikal Pemisah tipis */
	.cta-vertical-divider {
		width: 1px;
		align-self: stretch;
		background: rgba(255, 255, 255, 0.18);
		flex-shrink: 0;
	}

	/* Kolom 2 (Kanan): Tombol & Disclaimer */
	.cta-col-right {
		flex: 1;
		max-width: 340px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 14px;
	}

	.btn-cta-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		background: #f5b331;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		width: 175px;
		height: 46px;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.35);
	}

	.btn-cta-gold:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	/* Disclaimer Box */
	.cta-disclaimer-box {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		width: 100%;
	}

	.disclaimer-teal-icon {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.disclaimer-text {
		font-size: 12px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
	}

	/* === RESPONSIVE === */
	@media (max-width: 1100px) {
		.cta-box-card {
			flex-direction: column;
		}

		.cta-photo-col {
			width: 100%;
			flex: none;
			height: 180px;
		}

		.cta-img-wrap {
			border-radius: 0;
			border-bottom-left-radius: 60px;
			border-bottom-right-radius: 60px;
		}

		.cta-gold-curve-line {
			display: none;
		}

		.cta-content-cols {
			flex-direction: column;
			align-items: flex-start;
			padding: 24px;
			gap: 20px;
		}

		.cta-vertical-divider {
			display: none;
		}

		.cta-col-right {
			max-width: 100%;
			width: 100%;
		}

		.btn-cta-gold {
			width: 100%;
		}
	}
</style>
