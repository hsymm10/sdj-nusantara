<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
	import { scrollReveal } from '#lib/motion';
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
	<div class="about-container" use:scrollReveal={{ selector: '.about-left-text, .about-center-features, .about-right-card', stagger: 0.09 }}>
		<!-- Left: Text Content -->
		<div class="about-left-text">
			<div class="section-label">{i18n.pick('Tentang SDJ Nusantara', 'About SDJ Nusantara')}</div>

			<h2 class="about-title">
				{i18n.pick('Menjembatani Potensi dengan', 'Bridging Potential with')}<br />
				{i18n.pick('Peluang Pendidikan & Karier', 'Education & Career Opportunities')}
			</h2>

			<p class="about-desc">
				{i18n.pick(
					'SDJ Nusantara hadir untuk menghubungkan potensi individu dan institusi dengan kesempatan pendidikan, pengembangan kompetensi, dan jejaring profesional.',
					'SDJ Nusantara connects individual and institutional potential with educational opportunities, competency development, and professional networks.'
				)}
			</p>

			<a href="/tentang-kami" class="about-btn">
				<span>{i18n.pick('Selengkapnya Tentang Kami', 'More About Us')}</span>
				<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
					<span class="feat-line">{i18n.pick('Pendekatan', 'Integrated')}</span>
					<span class="feat-line">{i18n.pick('Terintegrasi', 'Approach')}</span>
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
					<span class="feat-line">{i18n.pick('Pendampingan', 'Targeted')}</span>
					<span class="feat-line">{i18n.pick('Terarah', 'Mentoring')}</span>
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
					<span class="feat-line">{i18n.pick('Program', 'Practical')}</span>
					<span class="feat-line">{i18n.pick('Aplikatif', 'Programs')}</span>
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
					<span class="feat-line">{i18n.pick('Jaringan', 'Collaborative')}</span>
					<span class="feat-line">{i18n.pick('Kolaborasi', 'Network')}</span>
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
					<span class="feat-line">{i18n.pick('Etika &', 'Ethics &')}</span>
					<span class="feat-line">{i18n.pick('Transparansi', 'Transparency')}</span>
				</div>
			</div>
		</div>

		<!-- Right: Modern Layered Card (Sesuai Mockup Referensi Gambar 1) -->
		<div class="about-right-card-col" aria-hidden="true">
			<div class="modern-layered-card">
				<!-- 1. Teal Dot Grid (Kiri-Atas Kartu) -->
				<svg class="card-decor-dots" width="56" height="46" viewBox="0 0 56 46" fill="none">
					<circle cx="5" cy="5" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="17" cy="5" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="29" cy="5" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="41" cy="5" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="53" cy="5" r="2.2" fill="#00A6B2" fill-opacity="0.65" />

					<circle cx="5" cy="17" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="17" cy="17" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="29" cy="17" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="41" cy="17" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="53" cy="17" r="2.2" fill="#00A6B2" fill-opacity="0.65" />

					<circle cx="5" cy="29" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="17" cy="29" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="29" cy="29" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="41" cy="29" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="53" cy="29" r="2.2" fill="#00A6B2" fill-opacity="0.65" />

					<circle cx="5" cy="41" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="17" cy="41" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="29" cy="41" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="41" cy="41" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
					<circle cx="53" cy="41" r="2.2" fill="#00A6B2" fill-opacity="0.65" />
				</svg>

				<!-- 2. Lapisan Biru Muda Organik (Backdrop Cyan Curve) -->
				<svg class="card-decor-cyan-blob" viewBox="0 0 360 240" fill="none">
					<path d="M45 35 C120 -15, 270 -5, 335 45 C380 85, 360 190, 285 225 C210 245, 95 235, 35 180 C-25 125, -15 65, 45 35 Z" fill="#E2F6F8" fill-opacity="0.8" />
				</svg>

				<!-- 3. Lapisan Navy di Belakang Foto (Offset Kanan-Atas) -->
				<div class="card-navy-layer"></div>

				<!-- 4. Foto Utama (Bingkai Rounded Card) -->
				<div class="card-photo-frame">
					<img
						src="/images/about-campus-hd.jpg"
						alt={i18n.pick('Gedung Kampus SDJ Nusantara', 'SDJ Nusantara Campus Building')}
						class="card-building-img"
						loading="eager"
						decoding="async"
					/>
				</div>

				<!-- 5. Aksen Teal dan Kuning di Bagian Bawah Gambar -->
				<svg class="card-bottom-swooshes" viewBox="0 0 250 80" fill="none" preserveAspectRatio="none">
					<!-- Teal Swoosh Curve -->
					<path d="M0 50 C65 35, 155 18, 250 0 V60 C200 75, 115 80, 0 80 Z" fill="#00A6B2" />
					<!-- Yellow Accent Swoosh Curve -->
					<path d="M50 70 C115 60, 190 38, 250 14 V70 C205 80, 135 80, 50 80 Z" fill="#F5B331" />
				</svg>

				<!-- 6. Badge Geometris Berwarna Kuning dengan Ikon Gedung (Kanan-Bawah) -->
				<div class="card-building-badge">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
						<path d="M6 12H4a2 2 0 0 0-2 2v8h4"></path>
						<path d="M18 9h2a2 2 0 0 1 2 2v11h-4"></path>
						<path d="M10 6h4"></path>
						<path d="M10 10h4"></path>
						<path d="M10 14h4"></path>
						<path d="M10 18h4"></path>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		position: relative;
		background: #FFFFFF;
		min-height: 280px;
		height: auto;
		width: 100%;
		overflow-x: clip;
		overflow-y: visible;
		display: flex;
		align-items: center;
		padding: 56px 0 36px 0;
		box-sizing: border-box;
	}

	/* Faint building line art vector on left-bottom */
	.about-bg-line-art {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 240px;
		height: 180px;
		z-index: 1;
		pointer-events: none;
	}

	/* Main Centered Container */
	.about-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1320px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		box-sizing: border-box;
	}

	/* Left Column */
	.about-left-text {
		flex: 0 1 370px;
		max-width: 390px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		box-sizing: border-box;
	}

	.section-label {
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.about-title {
		font-size: clamp(23px, 2.05vw, 29px);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		letter-spacing: -0.015em;
		margin: 0 0 0.65rem 0;
	}

	.about-desc {
		font-size: 14px;
		line-height: 1.6;
		color: #37474F;
		margin: 0 0 1.25rem 0;
		letter-spacing: 0;
		max-width: 370px;
		text-wrap: pretty;
	}

	.about-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.65rem 1.4rem;
		background: #F5B331;
		color: #082442;
		font-weight: 700;
		font-size: 13.5px;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.32);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		width: fit-content;
		max-width: 100%;
		letter-spacing: 0;
	}

	.about-btn:hover {
		background: #e6a528;
		transform: translateY(-1px);
		box-shadow: 0 6px 18px rgba(245, 179, 49, 0.4);
	}

	/* Center Features */
	.about-center-features {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 0 1 440px;
		box-sizing: border-box;
	}

	.feature-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		flex: 1;
		padding: 0 0.35rem;
	}

	.feature-icon-box {
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 34px;
	}

	.feature-text {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.feat-line {
		font-size: 12px;
		font-weight: 600;
		color: #082442;
		line-height: 1.3;
		white-space: nowrap;
		width: fit-content;
		max-width: 100%;
		letter-spacing: 0;
	}

	.feature-vdivider {
		width: 1px;
		height: 48px;
		background: #E2EBF1;
		flex-shrink: 0;
	}

	/* Right Column: Modern Layered Card (Sesuai Mockup Referensi Gambar 1) */
	.about-right-card-col {
		flex: 0 0 340px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
	}

	.modern-layered-card {
		position: relative;
		width: 310px;
		height: 195px;
	}

	/* 1. Teal Dot Grid */
	.card-decor-dots {
		position: absolute;
		top: 14px;
		left: -26px;
		width: 52px;
		height: 42px;
		z-index: 1;
		pointer-events: none;
	}

	/* 2. Soft Light Cyan Blob Curve */
	.card-decor-cyan-blob {
		position: absolute;
		top: -24px;
		left: -32px;
		width: 350px;
		height: 235px;
		z-index: 0;
		pointer-events: none;
	}

	/* 3. Navy Layer Behind Photo (Offset Kanan-Atas) */
	.card-navy-layer {
		position: absolute;
		top: -12px;
		right: -10px;
		width: 100%;
		height: 100%;
		background: #082442;
		border-radius: 20px;
		z-index: 1;
		box-shadow: 0 10px 28px rgba(8, 36, 66, 0.18);
	}

	/* 4. Main Photo Card */
	.card-photo-frame {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 18px;
		overflow: hidden;
		background: #FFFFFF;
		border: 2px solid #FFFFFF;
		box-shadow: 0 12px 30px rgba(8, 36, 66, 0.12);
		z-index: 2;
	}

	.card-building-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 25% center;
		display: block;
	}

	/* 5. Bottom Teal & Yellow Swooshes */
	.card-bottom-swooshes {
		position: absolute;
		bottom: -16px;
		right: -12px;
		width: 220px;
		height: 60px;
		z-index: 3;
		pointer-events: none;
	}

	/* 6. Yellow Geometric Building Badge */
	.card-building-badge {
		position: absolute;
		bottom: -10px;
		right: -10px;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: #F5B331;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 6px 18px rgba(245, 179, 49, 0.45);
		border: 2px solid #FFFFFF;
		z-index: 4;
	}

	@media (max-width: 1199px) {
		.about-section {
			height: auto;
			padding: 2.5rem 1.5rem;
		}
		.about-container {
			flex-direction: column;
			align-items: center;
			padding: 0;
			gap: 2.25rem;
		}
		.about-left-text {
			width: 100%;
			max-width: 600px;
			align-items: center;
			text-align: center;
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
			max-width: 680px;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 0.75rem;
		}
		.feature-vdivider {
			display: none;
		}
		.about-right-card-col {
			flex: 0 0 auto;
			width: 100%;
			justify-content: center;
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
			align-items: flex-start;
			text-align: left;
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
		.about-right-card-col {
			width: 100%;
			padding: 0.75rem 0 0.5rem;
		}
		.modern-layered-card {
			width: 280px;
			height: 175px;
		}
		.card-decor-dots {
			left: -18px;
		}
		.card-decor-cyan-blob {
			width: 310px;
			left: -20px;
		}
	}
</style>