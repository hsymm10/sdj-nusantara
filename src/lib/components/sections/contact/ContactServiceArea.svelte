<script lang="ts">
	// ContactServiceArea.svelte - Section Wilayah Layanan & Lokasi SDJNusantara
	// Menggunakan data geografis nyata kepulauan Indonesia (Natural Earth 1:50m, Public Domain)
	// dan data resmi alamat kantor SDJNusantara dari contact.ts
	import { contactConfig } from '#lib/config/contact';
	import { INDONESIA_MAP_PATH } from '#lib/assets/maps/indonesiaPath';

	// ilustrasi jangkauan layanan, bukan lokasi kantor (maksimal ±9 titik bersama Jakarta)
	const serviceCities = [
		{ name: 'Medan', x: 83.4, y: 58.1 },
		{ name: 'Palembang', x: 205.5, y: 189.5 },
		{ name: 'Surabaya', x: 365.0, y: 275.2 },
		{ name: 'Pontianak', x: 296.9, y: 130.5 },
		{ name: 'Balikpapan', x: 446.6, y: 155.3 },
		{ name: 'Makassar', x: 498.7, y: 233.0 },
		{ name: 'Denpasar', x: 414.3, y: 303.4 },
		{ name: 'Jayapura', x: 924.4, y: 180.7 }
	];
</script>

<section class="service-area-section">
	<div class="area-container">
		<!-- Left Column: Text & Features (x ±93 -> 560 pada 1536) -->
		<div class="area-text-col">
			<div class="section-dash-line">
				<span class="dash"></span>
				<span class="section-tag">Wilayah Layanan</span>
			</div>

			<h2 class="area-title">Mendukung Institusi Pendidikan di Seluruh Indonesia.</h2>
			
			<p class="area-desc">
				Program dan layanan SDJNusantara dapat diakses oleh institusi dan individu dari berbagai daerah di Indonesia, baik secara online maupun offline.
			</p>

			<!-- 2 Small Cards (±160x66px, radius ±14px, shadow): Tanpa klaim seluruh provinsi -->
			<div class="mini-cards-row">
				<div class="mini-card">
					<div class="mini-icon">
						<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="2" y1="12" x2="22" y2="12"></line>
							<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
						</svg>
					</div>
					<div class="mini-text">
						<strong class="mini-title">Jangkauan Nasional</strong>
						<span class="mini-sub">Indonesia</span>
					</div>
				</div>

				<div class="mini-card">
					<div class="mini-icon">
						<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
							<line x1="8" y1="21" x2="16" y2="21"></line>
							<line x1="12" y1="17" x2="12" y2="21"></line>
						</svg>
					</div>
					<div class="mini-text">
						<strong class="mini-title">Layanan Online & Offline</strong>
						<span class="mini-sub">Fleksibel</span>
					</div>
				</div>
			</div>

			<!-- Button Gold: Pelajari Wilayah Layanan -->
			<a href="/layanan" class="btn-gold-area">
				<span>Pelajari Wilayah Layanan</span>
				<span class="btn-arrow">→</span>
			</a>
		</div>

		<!-- Right Column: Interactive Indonesia Vector Map & Lokasi SDJNusantara -->
		<div class="area-map-col">
			<!-- Floating Card: Informasi LOKASI SDJNUSANTARA (menggantikan teks lama) -->
			<div class="map-floating-card">
				<div class="floating-icon" aria-hidden="true">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
						<circle cx="12" cy="10" r="3"></circle>
					</svg>
				</div>
				<div class="floating-text">
					<h3 class="floating-title">Lokasi SDJNusantara</h3>
					<p class="floating-address">
						{contactConfig.addressDetail}
					</p>
					<a 
						href={contactConfig.mapsUrl} 
						target="_blank" 
						rel="noopener noreferrer" 
						class="floating-maps-link"
					>
						<span>Buka di Google Maps</span>
						<span class="link-arrow">→</span>
					</a>
				</div>
			</div>

			<!-- SVG Map of Indonesia (Data Geografis Nyata Natural Earth Skala 1:50m) -->
			<div class="map-svg-wrap">
				<svg 
					viewBox="0 0 940 360" 
					fill="none" 
					class="indonesia-svg" 
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					aria-labelledby="map-title map-desc"
				>
					<title id="map-title">Peta Indonesia</title>
					<desc id="map-desc">Peta Kepulauan Nusantara Sumber Data Natural Earth Skala 1:50m Proyeksi Equirectangular dengan Penanda Lokasi Kantor SDJNusantara di Jakarta dan Titik Jangkauan Layanan Nasional</desc>
					
					<defs>
						<!-- Teal Gradient for islands -->
						<linearGradient id="mapTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stop-color="#16B6C1" />
							<stop offset="100%" stop-color="#079EAD" />
						</linearGradient>
						<!-- Soft background water ripple -->
						<linearGradient id="mapWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stop-color="rgba(22, 182, 193, 0.02)" />
							<stop offset="50%" stop-color="rgba(22, 182, 193, 0.12)" />
							<stop offset="100%" stop-color="rgba(22, 182, 193, 0.02)" />
						</linearGradient>
					</defs>

					<!-- Latar Laut Putih-Kebiruan Bersih #F4F8FB -->
					<rect width="940" height="360" rx="16" fill="#F4F8FB" />

					<!-- 2-3 Garis Gelombang Sangat Tipis (Opacity ±0.08) Tanpa Blob -->
					<path d="M0 315 C 220 285, 480 345, 940 305" stroke="#16B6C1" stroke-width="2" opacity="0.08" fill="none" />
					<path d="M0 165 C 260 125, 560 195, 940 145" stroke="#16B6C1" stroke-width="1.8" opacity="0.08" fill="none" />
					<path d="M0 65 C 300 25, 620 95, 940 55" stroke="#16B6C1" stroke-width="1.5" opacity="0.06" fill="none" />

					<!-- Garis Penghubung Titik Jakarta ke Arah Kartu Lokasi SDJNusantara -->
					<path 
						class="jakarta-card-line"
						d="M246.9 254.2 C 280 140, 520 60, 720 50" 
						stroke="#F5B331" 
						stroke-width="1.6" 
						stroke-dasharray="4 4" 
						opacity="0.75" 
						fill="none" 
					/>

					<!-- Jalur Geometri Kepulauan Nusantara (Sumatra, Jawa, Bali, Nusa Tenggara, Kalimantan, Sulawesi, Maluku, Papua) -->
					<path 
						d={INDONESIA_MAP_PATH} 
						fill="url(#mapTealGrad)" 
						stroke="#FFFFFF" 
						stroke-width="0.6" 
						stroke-linejoin="round"
						class="island-paths"
					/>

					<!-- ilustrasi jangkauan layanan, bukan lokasi kantor -->
					<!-- Garis Lengkung Putus-putus Tipis dari Jakarta ke Titik Kota Lain (Opacity ±0.45) -->
					<g class="service-routes" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.45" fill="none">
						<!-- Jakarta -> Medan -->
						<path d="M246.9 254.2 Q 135 180 83.4 58.1" />
						<!-- Jakarta -> Palembang -->
						<path d="M246.9 254.2 Q 220 220 205.5 189.5" />
						<!-- Jakarta -> Surabaya -->
						<path d="M246.9 254.2 Q 305 250 365.0 275.2" />
						<!-- Jakarta -> Pontianak -->
						<path d="M246.9 254.2 Q 260 180 296.9 130.5" />
						<!-- Jakarta -> Balikpapan -->
						<path d="M246.9 254.2 Q 340 180 446.6 155.3" />
						<!-- Jakarta -> Makassar -->
						<path d="M246.9 254.2 Q 370 230 498.7 233.0" />
						<!-- Jakarta -> Denpasar -->
						<path d="M246.9 254.2 Q 330 290 414.3 303.4" />
						<!-- Jakarta -> Jayapura -->
						<path d="M246.9 254.2 Q 580 140 924.4 180.7" />
					</g>

					<!-- ilustrasi jangkauan layanan, bukan lokasi kantor -->
					<!-- Titik Penanda Putih Bercincin (±8px, ring turquoise) di Kota-Kota Besar -->
					<g class="city-markers">
						{#each serviceCities as city}
							<g class="city-marker" transform="translate({city.x}, {city.y})">
								<circle r="4" fill="#FFFFFF" stroke="#079EAD" stroke-width="2" class="city-dot" />
								<title>{city.name} (Jangkauan Layanan)</title>
							</g>
						{/each}
					</g>

					<!-- Titik JAKARTA (Lokasi Kantor Resmi SDJNusantara): ±14px Emas #F5B331 dengan Ring Putih & Pulse Halus -->
					<g class="jakarta-marker-group" transform="translate(246.9, 254.2)">
						<!-- Pulse Ring Halus (Hormati prefers-reduced-motion) -->
						<circle class="jakarta-pulse" r="16" fill="rgba(245, 179, 49, 0.25)" />
						<circle class="jakarta-pulse-outer" r="22" fill="none" stroke="#F5B331" stroke-width="1.2" opacity="0.4" />
						<!-- Lingkaran Luar Putih 14px (r=7) + Shadow Lembut -->
						<circle r="7" fill="#FFFFFF" filter="drop-shadow(0 2px 5px rgba(245, 179, 49, 0.6))" />
						<!-- Inti Emas #F5B331 (10px, r=5) -->
						<circle r="5" fill="#F5B331" />
						<!-- Titik Pusat Putih -->
						<circle r="1.8" fill="#FFFFFF" />
						<!-- Label Kota Jakarta -->
						<g class="jakarta-badge" transform="translate(0, 16)">
							<rect x="-34" y="-8.5" width="68" height="17" rx="8.5" fill="#082442" opacity="0.92" />
							<text x="0" y="3.2" fill="#FFFFFF" font-size="8.5" font-weight="700" text-anchor="middle" font-family="inherit">Jakarta</text>
						</g>
						<title>Jakarta: Lokasi Kantor SDJNusantara</title>
					</g>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	.service-area-section {
		width: 100%;
		background: #F4F8FA;
		padding: 20px 0 24px;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}

	/* Container Wilayah Layanan (x ±93 -> 1445 pada 1536) */
	.area-container {
		width: 100%;
		max-width: 1352px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 460px 1fr;
		gap: 36px;
		align-items: center;
		box-sizing: border-box;
	}

	.area-text-col {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.section-dash-line {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.dash {
		width: 18px;
		height: 2.5px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.section-tag {
		font-size: 12px;
		font-weight: 700;
		color: #16B6C1;
	}

	.area-title {
		font-size: 26px;
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0;
		letter-spacing: -0.015em;
		text-wrap: balance;
	}

	.area-desc {
		font-size: 13.5px;
		line-height: 1.45;
		color: #183553;
		margin: 0 0 2px;
		max-width: 440px;
		text-wrap: pretty;
	}

	.mini-cards-row {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 2px;
	}

	.mini-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.85);
		border-radius: 12px;
		padding: 8px 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		box-shadow: 0 4px 16px rgba(8, 36, 66, 0.05);
		flex: 1;
		box-sizing: border-box;
		min-height: 56px;
	}

	.mini-icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mini-text {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.mini-title {
		font-size: 12px;
		font-weight: 700;
		color: #082442;
		line-height: 1.2;
	}

	.mini-sub {
		font-size: 10px;
		color: #64748B;
	}

	.btn-gold-area {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 210px;
		height: 38px;
		background: #F5B331;
		color: #082442;
		font-size: 13px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.3);
		transition: all 0.2s ease;
		box-sizing: border-box;
		margin-top: 2px;
	}

	.btn-gold-area:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 13px;
		transition: transform 0.2s ease;
	}

	.btn-gold-area:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Right Map Column (x ±555 -> 1445 pada 1536) */
	.area-map-col {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
	}

	/* Floating Card: Lokasi SDJNusantara */
	.map-floating-card {
		position: absolute;
		top: 10px;
		right: 14px;
		z-index: 4;
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(226, 232, 240, 0.95);
		border-radius: 16px;
		padding: 12px 14px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		max-width: 320px;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.08);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		box-sizing: border-box;
	}

	.map-floating-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 28px rgba(8, 36, 66, 0.12);
	}

	.floating-icon {
		background: #079EAD;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 4px 12px rgba(7, 158, 173, 0.3);
	}

	.floating-text {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.floating-title {
		font-size: 14.5px;
		font-weight: 700;
		color: #082442;
		margin: 0;
		line-height: 1.25;
	}

	.floating-address {
		font-size: 12.5px;
		line-height: 1.4;
		color: #183553;
		margin: 0;
	}

	.floating-maps-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 12px;
		font-weight: 700;
		color: #079EAD;
		text-decoration: none;
		margin-top: 2px;
		transition: color 0.15s ease;
	}

	.floating-maps-link:hover {
		color: #056a74;
		text-decoration: underline;
	}

	.link-arrow {
		font-size: 12px;
		transition: transform 0.2s ease;
	}

	.floating-maps-link:hover .link-arrow {
		transform: translateX(2px);
	}

	/* SVG Map Container */
	.map-svg-wrap {
		width: 100%;
		max-width: 780px;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(8, 36, 66, 0.04);
		background: #F4F8FB;
		border: 1px solid rgba(226, 232, 240, 0.7);
	}

	.indonesia-svg {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: 940 / 360;
	}

	/* Animasi Pulse Halus Titik Jakarta */
	@keyframes pulseMarker {
		0% {
			r: 7px;
			opacity: 0.8;
		}
		50% {
			r: 18px;
			opacity: 0.25;
		}
		100% {
			r: 24px;
			opacity: 0;
		}
	}

	@keyframes pulseOuter {
		0% {
			r: 12px;
			opacity: 0.6;
		}
		100% {
			r: 28px;
			opacity: 0;
		}
	}

	.jakarta-pulse {
		animation: pulseMarker 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
		transform-origin: center;
	}

	.jakarta-pulse-outer {
		animation: pulseOuter 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) 0.6s infinite;
		transform-origin: center;
	}

	@media (prefers-reduced-motion: reduce) {
		.jakarta-pulse,
		.jakarta-pulse-outer {
			animation: none;
			opacity: 0.2;
		}
	}

	@media (max-width: 1440px) {
		.area-container {
			padding: 0 24px;
		}
	}

	/* Tablet Responsive (<= 1023px) */
	@media (max-width: 1023px) {
		.area-container {
			grid-template-columns: 1fr;
			gap: 28px;
		}
		.area-map-col {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 16px;
		}
		.map-svg-wrap {
			order: 1;
			max-width: 100%;
		}
		.map-floating-card {
			order: 2;
			position: static;
			margin: 0;
			max-width: 100%;
		}
	}

	/* Mobile Responsive (<= 767px) */
	@media (max-width: 767px) {
		.area-container {
			padding: 0 20px;
			gap: 24px;
		}
		.area-title {
			font-size: 22px;
		}
		.mini-cards-row {
			flex-direction: column;
		}
		.btn-gold-area {
			width: 100%;
		}
		.map-svg-wrap {
			order: 1;
		}
		.map-floating-card {
			order: 2;
			padding: 14px 16px;
			border-radius: 14px;
			width: 100%;
			box-sizing: border-box;
		}
		.floating-title {
			font-size: 15px;
		}
		.floating-address {
			font-size: 13px;
		}
		.floating-maps-link {
			font-size: 13px;
		}
		.city-dot {
			r: 3px;
		}
	}
</style>
