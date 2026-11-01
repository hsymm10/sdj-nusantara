<script lang="ts">
	import { contactConfig } from '#lib/config/contact';
</script>

<section class="location-3panel-section" id="lokasi">
	<div class="panel-grid">
		<!-- Panel Kiri: Foto Gedung Kaca Modern Penuh Tepi Kiri Layar (x 0→678, ±44% lebar) -->
		<div class="panel-left">
			<img
				src="/images/contact-building.jpg"
				alt="Gedung Kantor SDJNusantara"
				class="panel-img"
				loading="lazy"
			/>
			
			<!-- Overlay Papan Signage Logo SDJNusantara pada fasad gedung -->
			<div class="building-logo-plaque" aria-hidden="true">
				<div class="plaque-inner">
					<svg class="plaque-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18 3L32 10.5L18 18L4 10.5L18 3Z" fill="#16B6C1"/>
						<path d="M4 14.5L18 22L32 14.5L32 17.5L18 25L4 17.5V14.5Z" fill="#4176A8"/>
						<path d="M4 21.5L18 29L32 21.5L32 24.5L18 32L4 24.5V21.5Z" fill="#F5B331"/>
					</svg>
					<div class="plaque-text">
						<span class="plaque-brand">SDJNusantara</span>
						<span class="plaque-sub">KONSULTAN PENDIDIKAN</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Panel Tengah: Informasi Lokasi & Kartu Alamat (x ±678→1098, Latar PUTIH) -->
		<div class="panel-center">
			<div class="section-label">
				<span class="label-line"></span>
				<span class="label-text">Lokasi Kami</span>
			</div>

			<h2 class="location-title">Kunjungi Kantor Kami</h2>

			<p class="location-desc">
				Kami terbuka untuk diskusi dan pertemuan langsung dengan institusi, mitra, maupun individu yang ingin menjalin kerja sama.
			</p>

			<!-- Kartu Putih Alamat Kantor -->
			<div class="address-card">
				<div class="address-top-row">
					<div class="pin-circle">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
					</div>
					<div class="address-info">
						<!-- WAJIB DIISI alamat kantor resmi (content-master bagian 15) -->
						<strong class="addr-label">Alamat Kantor</strong>
						<span class="addr-city">{contactConfig.address}</span>
						<span class="addr-note">(Dapat disesuaikan sesuai lokasi sebenarnya)</span>
					</div>
				</div>
				<div class="address-btn-row">
					<a
						href={contactConfig.mapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-maps"
					>
						<span>Buka di Google Maps</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Panel Kanan: Foto Lobi Modern Penuh Tepi Kanan Layar dengan Kutipan HTML Text -->
		<div class="panel-right">
			<img
				src="/images/contact-lobby.jpg"
				alt="Lobi dan Lounge SDJNusantara"
				class="panel-img"
				loading="lazy"
			/>
			<div class="quote-scrim">
				<blockquote class="quote-text">
					“Pendidikan adalah investasi untuk masa depan yang lebih baik.”
				</blockquote>
			</div>
		</div>
	</div>
</section>

<style>
	.location-3panel-section {
		width: 100%;
		background: #FFFFFF;
		overflow: hidden;
		box-sizing: border-box;
	}

	.panel-grid {
		width: 100%;
		height: 290px;
		display: grid;
		grid-template-columns: 44.14% 27.34% 28.52%;
		align-items: stretch;
	}

	/* Panel Kiri */
	.panel-left {
		position: relative;
		height: 100%;
		overflow: hidden;
	}

	.panel-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.building-logo-plaque {
		position: absolute;
		top: 24px;
		left: 28px;
		background: rgba(8, 36, 66, 0.88);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(22, 182, 193, 0.4);
		border-radius: 8px;
		padding: 7px 12px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
	}

	.plaque-inner {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.plaque-svg {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	.plaque-text {
		display: flex;
		flex-direction: column;
		line-height: 1.1;
	}

	.plaque-brand {
		font-size: 11px;
		font-weight: 800;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	.plaque-sub {
		font-size: 7.5px;
		font-weight: 600;
		color: #16B6C1;
		letter-spacing: 0.04em;
	}

	/* Panel Tengah (PUTIH) */
	.panel-center {
		background: #FFFFFF;
		padding: 24px 28px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		border-left: 1px solid #E2E8F0;
		border-right: 1px solid #E2E8F0;
	}

	.section-label {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 6px;
	}

	.label-line {
		width: 16px;
		height: 2px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.label-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #16B6C1;
	}

	.location-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px;
		letter-spacing: -0.01em;
		line-height: 1.25;
	}

	.location-desc {
		font-size: 12.5px;
		line-height: 1.45;
		color: #183553;
		margin: 0 0 14px;
		max-width: 360px;
		text-wrap: pretty;
	}

	/* Kartu Putih Alamat */
	.address-card {
		background: #FFFFFF;
		border: 1px solid #D9E2EC;
		border-radius: 12px;
		padding: 10px 14px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.06);
	}

	.address-top-row {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.pin-circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1.5px solid #16B6C1;
		background: rgba(22, 182, 193, 0.08);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.address-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.addr-label {
		font-size: 11.5px;
		font-weight: 800;
		color: #082442;
	}

	.addr-city {
		font-size: 12px;
		font-weight: 700;
		color: #079EAD;
	}

	.addr-note {
		font-size: 9px;
		color: #64748B;
		line-height: 1.25;
	}

	.address-btn-row {
		display: flex;
		justify-content: center;
	}

	.btn-maps {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		font-size: 11px;
		font-weight: 700;
		color: #082442;
		background: #FFFFFF;
		border: 1.5px solid #16B6C1;
		padding: 5px 14px;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.btn-maps:hover {
		background: #16B6C1;
		color: #FFFFFF;
	}

	.btn-arrow {
		font-size: 12px;
		transition: transform 0.2s ease;
	}

	.btn-maps:hover .btn-arrow {
		transform: translateX(2px);
	}

	/* Panel Kanan */
	.panel-right {
		position: relative;
		height: 100%;
		overflow: hidden;
	}

	.quote-scrim {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 30px 24px 20px;
		background: linear-gradient(to top, rgba(8, 36, 66, 0.92) 0%, rgba(8, 36, 66, 0.65) 60%, transparent 100%);
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
	}

	.quote-text {
		font-size: 18px;
		font-weight: 700;
		font-style: italic;
		line-height: 1.35;
		color: #FFFFFF;
		margin: 0;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
		text-wrap: balance;
	}

	/* Responsive Tablet & Mobile */
	@media (max-width: 1024px) {
		.panel-grid {
			grid-template-columns: 1fr;
			height: auto;
		}

		.panel-left {
			height: 220px;
		}

		.panel-center {
			border-left: none;
			border-right: none;
			padding: 28px 20px;
		}

		.panel-right {
			height: 220px;
		}

		.quote-text {
			font-size: 16px;
		}
	}
</style>
