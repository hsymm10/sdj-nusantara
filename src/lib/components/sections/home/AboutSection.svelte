<script lang="ts">
	// AboutSection.svelte (Beranda) - Precise implementation matching design/beranda-bawah-hero-mockup.png
</script>

<section class="about-section">
	<!-- Faint building line art vector illustration in bottom-left corner with gradient fade mask -->
	<div class="about-bg-line-art" aria-hidden="true">
		<svg width="220" height="160" viewBox="0 0 220 160" fill="none" preserveAspectRatio="none">
			<defs>
				<linearGradient id="line-fade-x" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95" />
					<stop offset="60%" stop-color="#FFFFFF" stop-opacity="0.4" />
					<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
				</linearGradient>
				<linearGradient id="line-fade-y" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#FFFFFF" stop-opacity="0" />
					<stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.8" />
					<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.95" />
				</linearGradient>
				<mask id="arch-line-mask">
					<rect x="0" y="0" width="220" height="160" fill="url(#line-fade-x)" />
					<rect x="0" y="0" width="220" height="160" fill="url(#line-fade-y)" style="mix-blend-mode: multiply;" />
				</mask>
			</defs>
			<g stroke="#0B2948" stroke-width="1.2" stroke-opacity="0.08" mask="url(#arch-line-mask)">
				<!-- Floor lines -->
				<line x1="0" y1="30" x2="200" y2="30" />
				<line x1="0" y1="55" x2="210" y2="55" />
				<line x1="0" y1="80" x2="220" y2="80" />
				<line x1="0" y1="105" x2="220" y2="105" />
				<line x1="0" y1="130" x2="220" y2="130" />
				<line x1="0" y1="155" x2="220" y2="155" />

				<!-- Vertical facade structural mullions -->
				<line x1="15" y1="10" x2="15" y2="160" />
				<line x1="45" y1="10" x2="45" y2="160" />
				<line x1="75" y1="10" x2="75" y2="160" />
				<line x1="105" y1="10" x2="105" y2="160" />
				<line x1="135" y1="10" x2="135" y2="160" />
				<line x1="165" y1="10" x2="165" y2="160" />
				<line x1="195" y1="10" x2="195" y2="160" />

				<!-- Diagonal perspective roof & entrance canopy -->
				<line x1="0" y1="30" x2="75" y2="5" />
				<line x1="75" y1="5" x2="185" y2="25" />
				<line x1="75" y1="5" x2="75" y2="30" />
				<line x1="135" y1="15" x2="135" y2="30" />
				
				<!-- Window accents -->
				<line x1="15" y1="65" x2="45" y2="65" stroke-dasharray="2 3" />
				<line x1="75" y1="65" x2="105" y2="65" stroke-dasharray="2 3" />
				<line x1="135" y1="65" x2="165" y2="65" stroke-dasharray="2 3" />
				<line x1="15" y1="115" x2="45" y2="115" stroke-dasharray="2 3" />
				<line x1="75" y1="115" x2="105" y2="115" stroke-dasharray="2 3" />
				<line x1="135" y1="115" x2="165" y2="115" stroke-dasharray="2 3" />
			</g>
		</svg>
	</div>

	<!-- Main Centered Container (aligned with StatsBar x 232→1318) -->
	<div class="about-container">
		<!-- Left: Text Content -->
		<div class="about-left-text">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Tentang SDJNusantara</span>
			</div>

			<h2 class="about-title">
				Menjembatani Potensi dengan<br />
				Peluang Pendidikan & Karier
			</h2>

			<p class="about-desc">
				SDJNusantara hadir untuk menghubungkan potensi individu dan institusi dengan kesempatan pendidikan, pengembangan kompetensi, dan jejaring profesional.
			</p>

			<a href="/tentang-kami" class="about-btn">
				<span>Selengkapnya Tentang Kami</span>
				<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<polyline points="12 5 19 12 12 19"></polyline>
				</svg>
			</a>
		</div>

		<!-- Center: 5 Features in Single Horizontal Row (x 577→1060 pada 1536) -->
		<div class="about-center-features">
			<!-- Feat 1: Pendekatan Terintegrasi (berlian / diamond) -->
			<div class="feature-col">
				<div class="feature-icon-box">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="M6 3h12l4 7-10 11L2 10l4-7z"></path>
						<path d="M2 10h20"></path>
						<path d="m7.5 3 4.5 7 4.5-7"></path>
					</svg>
				</div>
				<div class="feature-text">
					<span class="feat-line">Pendekatan</span>
					<span class="feat-line">Terintegrasi</span>
				</div>
			</div>

			<!-- Divider -->
			<div class="feature-vdivider"></div>

			<!-- Feat 2: Pendampingan Terarah (JABAT TANGAN / handshake) -->
			<div class="feature-col">
				<div class="feature-icon-box">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L13 12"></path>
						<path d="m18 10 1.8-1.8a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L12 7.6"></path>
						<path d="m7 11 3 3a1 1 0 0 0 1.4 0l1.6-1.6"></path>
						<path d="m3 7 3.3 3.3a2 2 0 0 0 2.8 0l1.4-1.4a2 2 0 0 0 0-2.8L7.2 2.8a2 2 0 0 0-2.8 0L3 4.2a2 2 0 0 0 0 2.8z"></path>
					</svg>
				</div>
				<div class="feature-text">
					<span class="feat-line">Pendampingan</span>
					<span class="feat-line">Terarah</span>
				</div>
			</div>

			<!-- Divider -->
			<div class="feature-vdivider"></div>

			<!-- Feat 3: Program Aplikatif (diagram batang dengan panah tren naik) -->
			<div class="feature-col">
				<div class="feature-icon-box">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<line x1="6" y1="20" x2="6" y2="14"></line>
						<line x1="12" y1="20" x2="12" y2="10"></line>
						<line x1="18" y1="20" x2="18" y2="6"></line>
						<polyline points="4 10 11 4 18 8"></polyline>
						<polyline points="14 4 18 4 18 8"></polyline>
					</svg>
				</div>
				<div class="feature-text">
					<span class="feat-line">Program</span>
					<span class="feat-line">Aplikatif</span>
				</div>
			</div>

			<!-- Divider -->
			<div class="feature-vdivider"></div>

			<!-- Feat 4: Jaringan Kolaborasi (KELOMPOK ORANG - tiga figur) -->
			<div class="feature-col">
				<div class="feature-icon-box">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
						<circle cx="9" cy="7" r="4"></circle>
						<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
					</svg>
				</div>
				<div class="feature-text">
					<span class="feat-line">Jaringan</span>
					<span class="feat-line">Kolaborasi</span>
				</div>
			</div>

			<!-- Divider -->
			<div class="feature-vdivider"></div>

			<!-- Feat 5: Etika & Transparansi (perisai dengan centang) -->
			<div class="feature-col">
				<div class="feature-icon-box">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
						<polyline points="9 12 11 14 15 10"></polyline>
					</svg>
				</div>
				<div class="feature-text">
					<span class="feat-line">Etika &</span>
					<span class="feat-line">Transparansi</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Right: Large Curved Campus Building Blob with decorative swooshes behind -->
	<div class="about-right-blob-wrap" aria-hidden="true">
		<!-- Background Swooshes behind the photo (z-index 1) -->
		<svg class="about-blob-decor" viewBox="0 0 520 220" fill="none" preserveAspectRatio="none">
			<defs>
				<linearGradient id="blob-teal-grad" x1="0" y1="1" x2="1" y2="0">
					<stop offset="0%" stop-color="#079EAD" />
					<stop offset="100%" stop-color="#16B6C1" />
				</linearGradient>
			</defs>

			<!-- 1. Top-Right Turquoise Swoosh -->
			<path d="M340,0 C410,22 470,52 520,72 L520,0 Z" fill="url(#blob-teal-grad)" />

			<!-- 2. Top-Right Thin Gold Ribbon (#F5B331) -->
			<path d="M400,0 C450,26 485,46 520,62 L520,40 C490,26 460,12 425,0 Z" fill="#F5B331" />

			<!-- 3. Bottom-Left Golden Crescent Swoosh (#F5B331) (x ≈ 1010→1100, y ≈ 540→613) -->
			<path d="M0,220 C25,175 60,135 110,105 C85,145 65,185 48,220 Z" fill="#F5B331" />
		</svg>

		<!-- Building Photo Blob with smooth arch (z-index 2) -->
		<div class="about-building-frame">
			<img
				src="/images/about-campus-hd.jpg"
				alt="Gedung Kampus SDJNusantara"
				class="building-blob-img"
				loading="eager"
			/>
		</div>
	</div>
</section>

<style>
	.about-section {
		position: relative;
		background: #FFFFFF;
		min-height: 250px;
		height: auto;
		width: 100%;
		overflow-x: clip;
		overflow-y: visible;
		display: flex;
		align-items: center;
		padding: 34px 0 16px 0; /* label ±34px di bawah dasar kartu statistik */
		box-sizing: border-box;
	}

	/* Faint building line art vector on left-bottom */
	.about-bg-line-art {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 220px;
		height: 160px;
		z-index: 1;
		pointer-events: none;
	}

	/* Main Centered Container (x 232→1318) */
	.about-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 2.25rem;
		box-sizing: border-box;
	}

	/* Left Column */
	.about-left-text {
		width: 350px;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		box-sizing: border-box;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-bottom: 0.35rem;
	}

	.badge-dash {
		width: 16px;
		height: 2.5px;
		background: #079EAD;
		border-radius: 2px;
	}

	.badge-text {
		color: #079EAD;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.about-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		line-height: 1.22;
		letter-spacing: -0.01em;
		margin: 0 0 0.4rem 0;
	}

	.about-desc {
		font-size: 12.5px;
		line-height: 1.55;
		color: #183553;
		margin: 0 0 0.85rem 0;
		letter-spacing: 0;
		max-width: 350px;
	}

	.about-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 1.15rem;
		background: #F5B331;
		color: #082442;
		font-weight: 700;
		font-size: 11.5px;
		border-radius: 12px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		letter-spacing: 0;
	}

	.about-btn:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	/* Center Features (x 577→1060 pada 1536) */
	.about-center-features {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 480px;
		flex-shrink: 0;
		box-sizing: border-box;
	}

	.feature-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		flex: 1;
		padding: 0 0.2rem;
	}

	.feature-icon-box {
		margin-bottom: 0.45rem;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32px;
	}

	.feature-text {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.feat-line {
		font-size: 11.5px;
		font-weight: 500;
		color: #082442;
		line-height: 1.25;
		white-space: nowrap;
		letter-spacing: 0;
	}

	.feature-vdivider {
		width: 1px;
		height: 48px;
		background: #E3EAF1;
		flex-shrink: 0;
	}

	/* Right: Large Curved Campus Building Blob */
	.about-right-blob-wrap {
		position: absolute;
		right: 0;
		bottom: 0;
		width: clamp(360px, 29vw, 455px);
		height: 195px;
		z-index: 2;
		overflow: visible;
		pointer-events: none;
	}

	.about-blob-decor {
		position: absolute;
		top: -24px;
		right: 0;
		width: 100%;
		height: calc(100% + 24px);
		z-index: 1;
		pointer-events: none;
	}

	.about-building-frame {
		position: absolute;
		right: 0;
		bottom: 0;
		width: calc(100% - 35px);
		height: 100%;
		border-top-left-radius: 190px;
		overflow: hidden;
		z-index: 2;
	}

	.building-blob-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 25% center;
		display: block;
	}

	@media (max-width: 1199px) {
		.about-section {
			height: auto;
			flex-direction: column;
			padding: 2.5rem 1.5rem;
			gap: 2rem;
		}
		.about-container {
			height: auto;
			flex-direction: column;
			padding: 0;
			gap: 2rem;
		}
		.about-left-text {
			width: 100%;
			max-width: 600px;
		}
		.about-desc {
			max-width: 100%;
			font-size: 14px;
			line-height: 1.6;
		}
		.about-btn {
			padding: 0.6rem 1.25rem;
			font-size: 13px;
		}
		.about-center-features {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 1rem;
		}
		.feature-vdivider {
			display: none;
		}
		.about-right-blob-wrap {
			position: relative;
			width: 100%;
			height: 240px;
		}
		.about-building-frame {
			width: 100%;
			border-top-left-radius: 60px;
			border-top-right-radius: 60px;
		}
	}

	@media (max-width: 767px) {
		.about-section {
			padding: 2rem 1.25rem;
		}
		.about-bg-line-art {
			display: none;
		}
		.about-left-text {
			width: 100%;
		}
		.about-title {
			font-size: 1.45rem;
		}
		.about-btn {
			width: 100%;
			justify-content: center;
			height: 44px;
			font-size: 14px;
		}
		.about-center-features {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.25rem;
		}
		.feature-col:last-child {
			grid-column: 1 / -1;
		}
		.about-right-blob-wrap {
			height: 200px;
		}
		.about-building-frame {
			border-top-left-radius: 40px;
			border-top-right-radius: 40px;
		}
	}
</style>