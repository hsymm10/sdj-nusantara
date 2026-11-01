<script lang="ts">
	// ContactServiceArea.svelte - Faithful implementation of design/kontak.png Wilayah Layanan section
</script>

<section class="service-area-section">
	<div class="area-container">
		<!-- Left Column: Text & Features -->
		<div class="area-text-col">
			<div class="section-dash-line">
				<span class="dash"></span>
				<span class="section-tag">Wilayah Layanan</span>
			</div>

			<h2 class="area-title">Mendukung Institusi Pendidikan di Seluruh Indonesia.</h2>
			
			<p class="area-desc">
				Program dan layanan SDJNusantara dapat diakses oleh institusi dan individu dari berbagai daerah di Indonesia, baik secara online maupun offline.
			</p>

			<!-- 2 Small Cards -->
			<div class="mini-cards-row">
				<div class="mini-card">
					<div class="mini-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

			<!-- Button Gold -->
			<a href="#lokasi" class="btn-gold-area">
				<span>Pelajari Wilayah Layanan</span>
				<span class="btn-arrow">→</span>
			</a>
		</div>

		<!-- Right Column: Interactive Indonesia Vector Map -->
		<div class="area-map-col">
			<!-- Floating Frosted Card on Top-Right -->
			<div class="map-floating-card">
				<div class="floating-icon">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
					</svg>
				</div>
				<div class="floating-text">
					<h3 class="floating-title">Layanan Dapat Diakses dari Berbagai Daerah</h3>
					<p class="floating-desc">
						Kami siap berkolaborasi dengan institusi pendidikan di berbagai daerah untuk menciptakan dampak yang lebih luas.
					</p>
				</div>
			</div>

			<!-- SVG Map of Indonesia -->
			<div class="map-svg-wrap">
				<svg viewBox="0 0 680 340" fill="none" class="indonesia-svg" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<!-- Teal Gradient for islands -->
						<linearGradient id="mapTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stop-color="#16B6C1" />
							<stop offset="100%" stop-color="#079EAD" />
						</linearGradient>
						<!-- Soft wave gradient -->
						<linearGradient id="mapWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stop-color="rgba(22, 182, 193, 0.04)" />
							<stop offset="50%" stop-color="rgba(22, 182, 193, 0.12)" />
							<stop offset="100%" stop-color="rgba(22, 182, 193, 0.04)" />
						</linearGradient>
					</defs>

					<!-- Background subtle wave ripples -->
					<path d="M-20 280 C120 240 280 320 450 270 C560 240 640 280 700 290" stroke="url(#mapWaveGrad)" stroke-width="40" fill="none" />
					<path d="M-10 150 C140 120 300 200 480 140 C580 110 650 160 700 170" stroke="url(#mapWaveGrad)" stroke-width="28" fill="none" />

					<!-- Island 1: Sumatra -->
					<path d="M35 55 C45 45 70 75 85 105 C100 135 120 160 145 185 C150 192 142 205 130 198 C115 185 95 155 75 125 C55 95 30 70 35 55 Z" fill="url(#mapTealGrad)" opacity="0.95" />
					<!-- Nias & Mentawai -->
					<path d="M25 105 C28 100 32 110 30 115 Z" fill="url(#mapTealGrad)" />
					<path d="M45 140 C48 135 53 148 50 152 Z" fill="url(#mapTealGrad)" />
					<path d="M68 180 C70 175 75 188 72 192 Z" fill="url(#mapTealGrad)" />
					<!-- Bangka & Belitung -->
					<path d="M148 155 C155 150 160 165 152 170 Z" fill="url(#mapTealGrad)" />
					<path d="M172 165 C178 162 182 172 176 176 Z" fill="url(#mapTealGrad)" />

					<!-- Island 2: Java & Madura -->
					<path d="M152 215 C170 215 210 225 245 228 C280 230 310 235 340 236 C345 240 335 248 310 246 C270 244 230 240 190 235 C165 230 150 224 152 215 Z" fill="url(#mapTealGrad)" opacity="0.95" />
					<path d="M315 222 C330 218 340 224 335 228 C325 230 315 227 315 222 Z" fill="url(#mapTealGrad)" />

					<!-- Island 3: Kalimantan (Borneo south) -->
					<path d="M210 95 C230 85 270 80 290 95 C310 110 315 135 310 155 C305 175 285 185 260 185 C235 185 220 175 215 155 C210 135 195 110 210 95 Z" fill="url(#mapTealGrad)" opacity="0.95" />

					<!-- Island 4: Sulawesi -->
					<path d="M350 115 C360 110 375 118 370 128 C365 135 355 140 350 148 C345 155 352 170 365 175 C375 178 385 170 395 170 C385 180 370 185 360 182 C350 180 345 190 345 205 C345 215 338 218 335 208 C332 195 338 180 338 165 C338 150 342 130 350 115 Z" fill="url(#mapTealGrad)" opacity="0.95" />

					<!-- Island 5: Nusa Tenggara (Bali, Lombok, Sumbawa, Flores, Timor) -->
					<path d="M348 244 C355 242 358 248 352 250 Z" fill="url(#mapTealGrad)" />
					<path d="M362 245 C370 243 373 249 366 251 Z" fill="url(#mapTealGrad)" />
					<path d="M378 246 C392 244 395 252 382 253 Z" fill="url(#mapTealGrad)" />
					<path d="M402 247 C425 245 428 253 410 254 Z" fill="url(#mapTealGrad)" />
					<path d="M438 250 C455 248 465 255 450 258 Z" fill="url(#mapTealGrad)" />

					<!-- Island 6: Maluku & Halmahera -->
					<path d="M420 120 C428 115 432 125 428 135 C424 145 430 155 425 160 C420 155 418 140 415 130 Z" fill="url(#mapTealGrad)" />
					<path d="M410 175 C420 172 425 182 418 185 Z" fill="url(#mapTealGrad)" />
					<path d="M428 188 C438 185 442 194 434 196 Z" fill="url(#mapTealGrad)" />

					<!-- Island 7: Papua -->
					<path d="M470 148 C490 142 530 135 570 142 C610 148 640 155 645 165 C640 180 620 195 595 205 C570 215 540 210 520 200 C500 190 480 180 475 165 C470 155 460 152 470 148 Z" fill="url(#mapTealGrad)" opacity="0.95" />

					<!-- Dotted Connection Curved Lines -->
					<path d="M65 85 Q115 135 178 222" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" fill="none" />
					<path d="M178 222 Q230 190 280 140" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" fill="none" />
					<path d="M178 222 Q240 230 300 238" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" fill="none" />
					<path d="M280 140 Q315 160 340 195" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" fill="none" />
					<path d="M300 238 Q330 215 340 195" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" fill="none" />
					<path d="M340 195 Q450 170 560 165" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.8" fill="none" />

					<!-- 9 Ringed Pin Dots on Locations -->
					<!-- 1. Medan -->
					<circle cx="65" cy="85" r="5" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(7,158,173,0.4))" />
					<circle cx="65" cy="85" r="2.2" fill="#079EAD" />

					<!-- 2. Padang -->
					<circle cx="105" cy="135" r="4.5" fill="#FFFFFF" />
					<circle cx="105" cy="135" r="2" fill="#079EAD" />

					<!-- 3. Palembang -->
					<circle cx="138" cy="172" r="4.5" fill="#FFFFFF" />
					<circle cx="138" cy="172" r="2" fill="#079EAD" />

					<!-- 4. Jakarta (Prominent Hub) -->
					<circle cx="178" cy="222" r="6" fill="#FFFFFF" filter="drop-shadow(0 2px 6px rgba(245,179,49,0.5))" />
					<circle cx="178" cy="222" r="3" fill="#F5B331" />

					<!-- 5. Bandung -->
					<circle cx="200" cy="232" r="4.5" fill="#FFFFFF" />
					<circle cx="200" cy="232" r="2" fill="#079EAD" />

					<!-- 6. Surabaya -->
					<circle cx="300" cy="238" r="5" fill="#FFFFFF" />
					<circle cx="300" cy="238" r="2.2" fill="#079EAD" />

					<!-- 7. Balikpapan -->
					<circle cx="280" cy="140" r="5" fill="#FFFFFF" />
					<circle cx="280" cy="140" r="2.2" fill="#079EAD" />

					<!-- 8. Makassar -->
					<circle cx="340" cy="195" r="5" fill="#FFFFFF" />
					<circle cx="340" cy="195" r="2.2" fill="#079EAD" />

					<!-- 9. Jayapura -->
					<circle cx="560" cy="165" r="5.5" fill="#FFFFFF" />
					<circle cx="560" cy="165" r="2.5" fill="#079EAD" />
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	.service-area-section {
		width: 100%;
		background: #F8FAFC;
		padding: 4.5rem 0 4.5rem;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}

	.area-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 420px 1fr;
		gap: 2.5rem;
		align-items: center;
	}

	/* Left Column */
	.section-dash-line {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 6px;
	}

	.dash {
		width: 16px;
		height: 2.5px;
		background: #16B6C1;
		border-radius: 2px;
	}

	.section-tag {
		font-size: 11px;
		font-weight: 700;
		color: #16B6C1;
	}

	.area-title {
		font-size: 21px;
		font-weight: 800;
		line-height: 1.25;
		color: #082442;
		margin: 0 0 10px;
		letter-spacing: -0.01em;
	}

	.area-desc {
		font-size: 11px;
		line-height: 1.55;
		color: #556B82;
		margin: 0 0 18px;
	}

	.mini-cards-row {
		display: flex;
		gap: 12px;
		margin-bottom: 20px;
	}

	.mini-card {
		background: #FFFFFF;
		border-radius: 12px;
		padding: 10px 14px;
		display: flex;
		align-items: center;
		gap: 10px;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.05);
		border: 1px solid rgba(226, 232, 240, 0.85);
		flex: 1;
	}

	.mini-icon {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		background: rgba(22, 182, 193, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.mini-text {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.mini-title {
		font-size: 10.5px;
		font-weight: 700;
		color: #082442;
	}

	.mini-sub {
		font-size: 9.5px;
		color: #64748B;
	}

	.btn-gold-area {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F5B331;
		color: #082442;
		font-size: 11px;
		font-weight: 700;
		padding: 8px 18px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.28);
		transition: all 0.2s;
	}

	.btn-gold-area:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
	}

	/* Right Column: Map */
	.area-map-col {
		position: relative;
		width: 100%;
	}

	.map-floating-card {
		position: absolute;
		top: -15px;
		right: 10px;
		z-index: 10;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 12px;
		padding: 10px 14px;
		display: flex;
		align-items: flex-start;
		gap: 10px;
		max-width: 280px;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.08);
	}

	.floating-icon {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.floating-title {
		font-size: 10.5px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 2px;
	}

	.floating-desc {
		font-size: 9px;
		line-height: 1.35;
		color: #5D7289;
		margin: 0;
	}

	.map-svg-wrap {
		width: 100%;
		height: 380px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.indonesia-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	@media (max-width: 1024px) {
		.area-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.map-floating-card {
			position: static;
			margin-bottom: 12px;
			max-width: 100%;
		}
	}

	@media (max-width: 640px) {
		.mini-cards-row {
			flex-direction: column;
		}
	}
</style>
