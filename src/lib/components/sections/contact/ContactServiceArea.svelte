<script lang="ts">
	// ContactServiceArea.svelte - Faithful implementation of design/kontak.png Wilayah Layanan section
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

		<!-- Right Column: Interactive Indonesia Vector Map (x ±555 -> 1445) -->
		<div class="area-map-col">
			<!-- Floating Glass/White Card on Top-Right (x ±1115 -> 1465) -->
			<div class="map-floating-card">
				<div class="floating-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2">
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

			<!-- SVG Map of Indonesia (Vektor Tajam, Kepulauan Jelas) -->
			<div class="map-svg-wrap">
				<svg viewBox="0 0 680 280" fill="none" class="indonesia-svg" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<!-- Teal Gradient for islands -->
						<linearGradient id="mapTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stop-color="#16B6C1" />
							<stop offset="100%" stop-color="#079EAD" />
						</linearGradient>
						<!-- Soft background water ripple -->
						<linearGradient id="mapWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stop-color="rgba(22, 182, 193, 0.02)" />
							<stop offset="50%" stop-color="rgba(22, 182, 193, 0.1)" />
							<stop offset="100%" stop-color="rgba(22, 182, 193, 0.02)" />
						</linearGradient>
					</defs>

					<!-- Subtle background marine curves -->
					<path d="M-10 240 C100 200 250 270 420 225 C540 195 620 235 690 245" stroke="url(#mapWaveGrad)" stroke-width="24" fill="none" />
					<path d="M-5 130 C120 100 280 170 450 115 C550 90 630 135 690 145" stroke="url(#mapWaveGrad)" stroke-width="18" fill="none" />

					<!-- Island 1: Sumatra (Diagonal Northwest to Southeast) -->
					<path d="M30 45 C42 36 68 62 82 90 C96 118 116 142 142 165 C147 172 139 184 128 178 C113 166 94 138 75 110 C56 82 26 58 30 45 Z" fill="url(#mapTealGrad)" opacity="0.95" />
					<!-- Nias, Mentawai, Bangka, Belitung -->
					<path d="M22 92 C25 88 29 96 27 101 Z" fill="url(#mapTealGrad)" />
					<path d="M40 124 C43 120 48 131 45 135 Z" fill="url(#mapTealGrad)" />
					<path d="M62 160 C64 156 69 167 66 170 Z" fill="url(#mapTealGrad)" />
					<path d="M144 138 C150 134 155 146 148 151 Z" fill="url(#mapTealGrad)" />
					<path d="M166 146 C171 143 175 152 170 156 Z" fill="url(#mapTealGrad)" />

					<!-- Island 2: Java & Madura (Horizontal South) -->
					<path d="M148 190 C166 190 205 198 238 201 C272 203 302 207 330 208 C335 212 325 219 302 217 C264 215 224 212 186 207 C161 203 146 198 148 190 Z" fill="url(#mapTealGrad)" opacity="0.95" />
					<path d="M308 196 C322 192 331 197 326 201 C317 203 308 200 308 196 Z" fill="url(#mapTealGrad)" />

					<!-- Island 3: Kalimantan / Borneo (Large Central Island) -->
					<path d="M205 80 C224 71 262 66 282 80 C301 93 306 116 301 134 C296 152 277 161 253 161 C228 161 214 152 209 134 C204 116 190 93 205 80 Z" fill="url(#mapTealGrad)" opacity="0.95" />

					<!-- Island 4: Sulawesi (Distinct K-shape) -->
					<path d="M342 98 C352 93 366 100 361 109 C356 115 347 120 342 127 C337 133 344 146 356 150 C366 153 376 146 385 146 C376 155 361 159 351 156 C342 155 337 163 337 176 C337 185 330 188 327 179 C324 168 330 155 330 142 C330 129 334 111 342 98 Z" fill="url(#mapTealGrad)" opacity="0.95" />

					<!-- Island 5: Nusa Tenggara (Bali, Lombok, Sumbawa, Flores, Timor) -->
					<path d="M338 215 C345 213 348 218 342 220 Z" fill="url(#mapTealGrad)" />
					<path d="M352 216 C359 214 362 219 356 221 Z" fill="url(#mapTealGrad)" />
					<path d="M367 217 C380 215 383 222 371 223 Z" fill="url(#mapTealGrad)" />
					<path d="M390 218 C411 216 414 223 398 224 Z" fill="url(#mapTealGrad)" />
					<path d="M424 220 C440 218 450 224 436 227 Z" fill="url(#mapTealGrad)" />

					<!-- Island 6: Maluku & Halmahera -->
					<path d="M408 102 C415 98 419 107 415 115 C411 124 417 132 412 137 C408 132 406 119 403 111 Z" fill="url(#mapTealGrad)" />
					<path d="M398 150 C408 147 412 156 406 159 Z" fill="url(#mapTealGrad)" />
					<path d="M416 161 C425 158 429 166 422 168 Z" fill="url(#mapTealGrad)" />

					<!-- Island 7: Papua (Large Island in East) -->
					<path d="M458 126 C477 120 515 114 554 120 C592 126 621 132 626 141 C621 154 602 166 578 175 C554 184 525 179 505 171 C486 162 467 154 462 141 C457 132 448 129 458 126 Z" fill="url(#mapTealGrad)" opacity="0.95" />

					<!-- Dotted Curved Connecting Lines -->
					<path d="M60 75 Q108 118 174 196" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.75" fill="none" />
					<path d="M174 196 Q224 168 272 124" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.75" fill="none" />
					<path d="M174 196 Q234 203 292 210" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.75" fill="none" />
					<path d="M272 124 Q306 142 330 172" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.75" fill="none" />
					<path d="M292 210 Q321 190 330 172" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.75" fill="none" />
					<path d="M330 172 Q437 150 544 145" stroke="#16B6C1" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.75" fill="none" />

					<!-- 9 Ringed Pin Dots on Major Locations -->
					<!-- 1. Medan -->
					<circle cx="60" cy="75" r="5" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(7,158,173,0.35))" />
					<circle cx="60" cy="75" r="2.2" fill="#079EAD" />

					<!-- 2. Padang -->
					<circle cx="98" cy="118" r="4.5" fill="#FFFFFF" />
					<circle cx="98" cy="118" r="2" fill="#079EAD" />

					<!-- 3. Palembang -->
					<circle cx="132" cy="152" r="4.5" fill="#FFFFFF" />
					<circle cx="132" cy="152" r="2" fill="#079EAD" />

					<!-- 4. Jakarta -->
					<circle cx="174" cy="196" r="6" fill="#FFFFFF" filter="drop-shadow(0 2px 6px rgba(7,158,173,0.45))" />
					<circle cx="174" cy="196" r="2.8" fill="#F5B331" />

					<!-- 5. Surabaya -->
					<circle cx="292" cy="210" r="4.5" fill="#FFFFFF" />
					<circle cx="292" cy="210" r="2" fill="#079EAD" />

					<!-- 6. Pontianak / Banjarmasin -->
					<circle cx="272" cy="124" r="5" fill="#FFFFFF" />
					<circle cx="272" cy="124" r="2.2" fill="#079EAD" />

					<!-- 7. Makassar -->
					<circle cx="330" cy="172" r="5" fill="#FFFFFF" />
					<circle cx="330" cy="172" r="2.2" fill="#079EAD" />

					<!-- 8. Denpasar / Bali -->
					<circle cx="342" cy="217" r="4.5" fill="#FFFFFF" />
					<circle cx="342" cy="217" r="2" fill="#079EAD" />

					<!-- 9. Jayapura / Papua -->
					<circle cx="544" cy="145" r="5.5" fill="#FFFFFF" filter="drop-shadow(0 2px 5px rgba(7,158,173,0.4))" />
					<circle cx="544" cy="145" r="2.5" fill="#079EAD" />
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	.service-area-section {
		width: 100%;
		background: #F4F8FA;
		padding: 16px 0 18px;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
	}

	/* Container khusus halaman Kontak (x ±93 -> 1445 pada 1536) */
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
		gap: 8px;
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

	/* Right Map Column */
	.area-map-col {
		position: relative;
		width: 100%;
		height: 255px;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
	}

	.map-floating-card {
		position: absolute;
		top: 0;
		right: 20px;
		z-index: 2;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 14px;
		padding: 10px 14px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		max-width: 330px;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.08);
	}

	.floating-icon {
		background: #079EAD;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.floating-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.floating-title {
		font-size: 12.5px;
		font-weight: 700;
		color: #082442;
		margin: 0;
		line-height: 1.3;
	}

	.floating-desc {
		font-size: 11px;
		line-height: 1.35;
		color: #64748B;
		margin: 0;
	}

	.map-svg-wrap {
		width: 100%;
		max-width: 660px;
		height: 215px;
	}

	.indonesia-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	@media (max-width: 1440px) {
		.area-container {
			padding: 0 24px;
		}
	}

	@media (max-width: 1024px) {
		.area-container {
			grid-template-columns: 1fr;
			gap: 32px;
		}
		.area-map-col {
			align-items: center;
		}
		.map-floating-card {
			margin-right: 0;
			margin-bottom: 16px;
			max-width: 100%;
		}
	}

	@media (max-width: 640px) {
		.area-title {
			font-size: 24px;
		}
		.mini-cards-row {
			flex-direction: column;
		}
		.btn-gold-area {
			width: 100%;
		}
		.map-svg-wrap {
			height: 180px;
		}
	}
</style>
