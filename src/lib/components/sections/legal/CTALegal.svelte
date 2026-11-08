<!-- Section G: CTA Konsultasi Hukum (Presisi 1:1 Mockup Referensi) -->
<script lang="ts">
	// Props or static links
</script>

<section class="cta-legal-section">
	<div class="cta-legal-container">
		<div class="cta-box-card">
			<!-- Bagian 1: Kiri — Gambar Profesional Hukum (270 x 180 px) dengan Crop Lengkung Oval & Pita Geometris -->
			<div class="cta-photo-col">
				<div class="cta-img-wrap">
					<img
						src="/images/legal-consultant-writing.jpg"
						alt="Konsultasi Hukum SDJNusantara"
						class="cta-lawyer-img"
					/>
					<!-- Dekorasi Geometris Teal dan Kuning pada sudut kanan atas gambar -->
					<svg class="cta-photo-ribbon" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<!-- Yellow Gold Ribbon -->
						<path d="M100 0C60 4 25 30 10 80H100V0Z" fill="#F5B331" />
						<!-- Teal Ribbon -->
						<path d="M100 0C78 3 48 22 32 60H100V0Z" fill="#00AAB5" />
					</svg>
				</div>
			</div>

			<!-- Bagian 2: Tengah — Heading & Deskripsi Singkat -->
			<div class="cta-info-col">
				<h2 class="cta-main-title">
					Konsultasikan Kebutuhan<br />
					<span class="gold-text">Hukum Institusi Anda</span>
				</h2>
				<p class="cta-sub-text">
					Dapatkan solusi hukum yang terarah dan sesuai dengan regulasi pendidikan.
				</p>
			</div>

			<!-- Bagian 3: Kanan — Tombol CTA & Disclaimer Hukum Lebar Proporsional -->
			<div class="cta-action-col">
				<a href="/konsultasi" class="btn-cta-gold">
					<span>Ajukan Konsultasi</span>
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="5" y1="12" x2="19" y2="12"/>
						<polyline points="12 5 19 12 12 19"/>
					</svg>
				</a>

				<!-- Disclaimer Hukum tepat di bawah tombol dengan lebar yang cukup agar tidak sempit -->
				<div class="cta-disclaimer-wrap">
					<div class="disclaimer-teal-icon" aria-hidden="true">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<line x1="12" y1="16" x2="12" y2="12"/>
							<line x1="12" y1="8" x2="12.01" y2="8"/>
						</svg>
					</div>
					<p class="disclaimer-content">
						Informasi pada halaman ini bersifat umum dan bukan nasihat hukum. Hubungan penasihat-klien baru terbentuk setelah ada kesepakatan tertulis.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-legal-section {
		background: #ffffff;
		padding: 24px 0 64px;
	}

	.cta-legal-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.cta-box-card {
		background: #082442;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 28px;
		overflow: hidden;
		box-shadow: 0 10px 28px rgba(8, 36, 66, 0.2);
		position: relative;
		min-height: 180px;
	}

	/* Bagian 1: Kiri — Gambar (270 x 180 px pada desktop) */
	.cta-photo-col {
		flex: 0 0 270px;
		width: 270px;
		height: 180px;
		position: relative;
		flex-shrink: 0;
	}

	.cta-img-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 0 75px 75px 0;
		overflow: hidden;
	}

	.cta-lawyer-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.cta-photo-ribbon {
		position: absolute;
		right: 0;
		top: 0;
		width: 85px;
		height: 60px;
		pointer-events: none;
		z-index: 2;
	}

	/* Bagian 2: Tengah — Informasi */
	.cta-info-col {
		flex: 1.15;
		padding: 16px 0;
	}

	.cta-main-title {
		font-size: 21.5px;
		line-height: 1.25;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 8px;
		letter-spacing: -0.3px;
	}

	.gold-text {
		color: #f5b331;
	}

	.cta-sub-text {
		font-size: 11.5px;
		line-height: 1.55;
		color: #cbd5e1;
		margin: 0;
		max-width: 360px;
	}

	/* Bagian 3: Kanan — CTA & Disclaimer */
	.cta-action-col {
		flex: 0 0 340px;
		max-width: 340px;
		padding: 20px 28px 20px 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
	}

	.btn-cta-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #f5b331;
		color: #082442;
		font-size: 12px;
		font-weight: 700;
		padding: 9.5px 20px;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.3);
	}

	.btn-cta-gold:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	.cta-disclaimer-wrap {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		width: 100%;
	}

	.disclaimer-teal-icon {
		flex-shrink: 0;
		margin-top: 1.5px;
	}

	.disclaimer-content {
		font-size: 10px;
		line-height: 1.5;
		color: #94a3b8;
		margin: 0;
	}

	@media (max-width: 992px) {
		.cta-box-card {
			flex-direction: column;
			align-items: flex-start;
			padding-bottom: 24px;
		}

		.cta-photo-col {
			width: 100%;
			flex: none;
			height: 180px;
		}

		.cta-img-wrap {
			border-radius: 0;
		}

		.cta-info-col {
			padding: 0 24px;
		}

		.cta-action-col {
			padding: 0 24px;
			max-width: 100%;
			width: 100%;
		}
	}
</style>
