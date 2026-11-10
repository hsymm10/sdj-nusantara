<script lang="ts">
	// PartnerCollaborationForms.svelte - Sesuai Mockup Referensi GAMBAR 2 (Full-Bleed Left & Proportions)
	const forms = [
		{
			title: 'Penyelenggaraan Program Bersama',
			icon: 'program'
		},
		{
			title: 'Pertukaran Peserta & Dosen',
			icon: 'exchange'
		},
		{
			title: 'Pengembangan Kurikulum',
			icon: 'curriculum'
		},
		{
			title: 'Riset & Inovasi',
			icon: 'research'
		},
		{
			title: 'Dukungan Beasiswa dan Pendanaan',
			icon: 'scholarship'
		},
		{
			title: 'Pemanfaatan Fasilitas',
			icon: 'facility'
		}
	];
</script>

<section id="bentuk-kerja-sama" class="collab-forms-section">
	<!-- Dekorasi Lengkungan Teal Muda di Pojok Kanan Atas -->
	<div class="top-right-wave" aria-hidden="true">
		<svg viewBox="0 0 460 280" fill="none" preserveAspectRatio="none">
			<path d="M40,0 C115,130 280,200 460,235 L460,0 Z" fill="#E3F9FB" opacity="0.85" />
			<path d="M140,0 C215,105 335,160 460,188 L460,0 Z" fill="#8CE7EE" opacity="0.72" />
		</svg>
	</div>

	<!-- SVG Clip Path untuk bingkai miring halus pada sisi kanan foto -->
	<svg width="0" height="0" style="position:absolute;" aria-hidden="true">
		<defs>
			<clipPath id="handshakeFrameClip" clipPathUnits="objectBoundingBox">
				<path d="M 0,0 L 0.96,0 C 0.99,0 1.0,0.035 0.993,0.09 L 0.93,0.91 C 0.923,0.965 0.90,1 0.865,1 L 0,1 Z" />
			</clipPath>
		</defs>
	</svg>

	<div class="collab-full-layout">
		<!-- Kolom Kiri: Gambar Jabat Tangan Besar & Melebar dari Tepi Kiri -->
		<div class="collab-photo-col">
			<!-- Aksen Garis/Kurva Kuning di Kanan Bawah Gambar -->
			<div class="photo-yellow-accent" aria-hidden="true">
				<svg viewBox="0 0 220 140" fill="none" preserveAspectRatio="none">
					<path d="M0,140 C85,136 160,115 205,15 L212,110 C215,128 202,140 184,140 Z" fill="#FFB923" />
				</svg>
			</div>

			<div class="collab-photo-frame">
				<img
					src="/images/partner-handshake-real.jpg"
					alt="Bentuk Kerja Sama SDJNusantara"
					class="collab-photo"
					loading="eager"
				/>
				<!-- Elemen Dekoratif Teal di Sisi Kiri Gambar -->
				<svg class="photo-left-teal-tab" viewBox="0 0 80 320" fill="none" preserveAspectRatio="none" aria-hidden="true">
					<path d="M0,0 L56,0 C74,78 62,210 42,320 L0,320 Z" fill="url(#tealTabGrad)" />
					<defs>
						<linearGradient id="tealTabGrad" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stop-color="#08B4C4" />
							<stop offset="100%" stop-color="#007D8A" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>

		<!-- Kolom Kanan: Konten & 6 Bentuk Kerja Sama -->
		<div class="collab-content-col">
			<div class="collab-content-inner">
				<!-- Section Header -->
				<div class="collab-header">
					<div class="collab-label">
						<span class="label-dash"></span>
						<span class="label-text">BENTUK KERJA SAMA</span>
					</div>

					<h2 class="section-title">
						Beragam Bentuk Kolaborasi<br />
						yang Dapat <span class="highlight-gold">Disesuaikan dengan Kebutuhan.</span>
					</h2>

					<p class="section-desc">
						Kami menyediakan berbagai bentuk kerja sama yang fleksibel dan saling menguntungkan, baik dalam jangka pendek maupun jangka panjang.
					</p>
				</div>

				<!-- 3x2 Grid of Collaboration Forms -->
				<div class="forms-3x2-grid">
					{#each forms as item, idx}
						<div class="form-grid-item {(idx % 3 !== 2) ? 'has-right-divider' : ''}">
							<div class="form-icon-box">
								{#if item.icon === 'program'}
									<!-- Monitor / Penyelenggaraan Program Bersama -->
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
										<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
										<line x1="8" y1="21" x2="16" y2="21" />
										<line x1="12" y1="17" x2="12" y2="21" />
									</svg>
								{:else if item.icon === 'exchange'}
									<!-- Users / Pertukaran Peserta & Dosen -->
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								{:else if item.icon === 'curriculum'}
									<!-- Open Book / Pengembangan Kurikulum -->
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
									</svg>
								{:else if item.icon === 'research'}
									<!-- Layers Stack / Riset & Inovasi -->
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
										<polygon points="12 2 2 7 12 12 22 7 12 2" />
										<polyline points="2 12 12 17 22 12" />
									</svg>
								{:else if item.icon === 'scholarship'}
									<!-- Shield Check / Dukungan Beasiswa dan Pendanaan -->
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
										<polyline points="9 12 11 14 15 10" />
									</svg>
								{:else}
									<!-- Buildings / Pemanfaatan Fasilitas -->
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
										<rect x="8" y="3" width="8" height="18" rx="1" />
										<path d="M3 10h5v11H3z" />
										<path d="M16 12h5v9h-5z" />
										<line x1="12" y1="7" x2="12" y2="7.01" />
										<line x1="12" y1="11" x2="12" y2="11.01" />
									</svg>
								{/if}
							</div>
							<span class="form-title">{item.title}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.collab-forms-section {
		position: relative;
		background: #FFFFFF;
		padding: clamp(46px, 4.2vw, 72px) 0 clamp(44px, 4vw, 66px);
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Top-Right Wave Decoration */
	.top-right-wave {
		position: absolute;
		top: 0;
		right: 0;
		width: clamp(280px, 24vw, 440px);
		height: clamp(160px, 14vw, 260px);
		pointer-events: none;
		z-index: 0;
	}

	.top-right-wave svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Full-Width Layout: Left Photo Flush Edge + Right Content */
	.collab-full-layout {
		position: relative;
		z-index: 2;
		width: 100%;
		display: flex;
		align-items: center;
		gap: clamp(32px, 4vw, 68px);
		padding-right: clamp(28px, 6vw, 110px);
		box-sizing: border-box;
	}

	/* Kolom Kiri: Gambar Besar Melebar dari Tepi Kiri */
	.collab-photo-col {
		position: relative;
		flex: 0 0 36.5%;
		width: 36.5%;
		padding-bottom: 8px;
		padding-right: 8px;
		box-sizing: border-box;
	}

	.photo-yellow-accent {
		position: absolute;
		right: 2px;
		bottom: 0;
		width: clamp(140px, 14vw, 240px);
		height: clamp(90px, 9vw, 150px);
		z-index: 1;
		pointer-events: none;
	}

	.photo-yellow-accent svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.collab-photo-frame {
		position: relative;
		z-index: 2;
		width: 100%;
		height: clamp(270px, 21.5vw, 390px);
		clip-path: url(#handshakeFrameClip);
		background: #E2E8F0;
		overflow: hidden;
	}

	.collab-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.photo-left-teal-tab {
		position: absolute;
		top: 0;
		left: 0;
		width: clamp(50px, 4.5vw, 82px);
		height: 100%;
		pointer-events: none;
		z-index: 3;
	}

	/* Kolom Kanan: Konten */
	.collab-content-col {
		flex: 1;
		min-width: 0;
		box-sizing: border-box;
	}

	.collab-content-inner {
		width: 100%;
		max-width: 860px;
	}

	.collab-header {
		margin-bottom: clamp(22px, 2vw, 32px);
	}

	.collab-label {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.label-dash {
		width: 22px;
		height: 2.5px;
		background: #00A6B2;
		border-radius: 2px;
	}

	.label-text {
		color: #00A6B2;
		font-size: clamp(12px, 0.85vw, 14px);
		font-weight: 700;
		letter-spacing: 0.05em;
	}

	.section-title {
		font-size: clamp(24px, 2.25vw, 37px);
		line-height: 1.24;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px 0;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB51B;
	}

	.section-desc {
		font-size: clamp(13.5px, 0.98vw, 16px);
		line-height: 1.6;
		color: #556980;
		margin: 0;
		max-width: 720px;
	}

	/* 3x2 Grid */
	.forms-3x2-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(18px, 1.8vw, 28px) clamp(16px, 1.8vw, 28px);
		width: 100%;
	}

	.form-grid-item {
		display: flex;
		align-items: center;
		gap: clamp(12px, 1vw, 16px);
		padding-right: clamp(8px, 1vw, 16px);
	}

	.form-grid-item.has-right-divider {
		border-right: 1px solid #E5EDF4;
	}

	.form-icon-box {
		width: clamp(46px, 3.5vw, 56px);
		height: clamp(46px, 3.5vw, 56px);
		border-radius: 14px;
		background: #EAF9FA;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.form-icon-box svg {
		width: clamp(22px, 1.55vw, 26px);
		height: clamp(22px, 1.55vw, 26px);
	}

	.form-title {
		font-size: clamp(13px, 0.95vw, 15.5px);
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
	}

	/* Tablet */
	@media (max-width: 1100px) {
		.collab-full-layout {
			gap: 28px;
			padding-right: 28px;
		}

		.collab-photo-col {
			flex: 0 0 38%;
			width: 38%;
		}

		.forms-3x2-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 16px;
		}

		.form-grid-item.has-right-divider {
			border-right: none;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.collab-forms-section {
			padding: 36px 0 44px;
		}

		.collab-full-layout {
			flex-direction: column;
			align-items: stretch;
			gap: 28px;
			padding-right: 0;
		}

		.collab-photo-col {
			flex: 1 1 auto;
			width: 100%;
			padding: 0 20px 8px 0;
		}

		.collab-photo-frame {
			height: 220px;
			clip-path: none;
			border-top-right-radius: 24px;
			border-bottom-right-radius: 24px;
		}

		.collab-content-col {
			padding: 0 20px;
		}

		.forms-3x2-grid {
			grid-template-columns: 1fr;
			gap: 14px;
		}

		.form-grid-item {
			padding-right: 0;
		}
	}
</style>
