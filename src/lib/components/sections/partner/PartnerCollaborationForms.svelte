<script lang="ts">
	// PartnerCollaborationForms.svelte - Optimasi Proporsi & Alignment Container min(1500px, calc(100% - 80px))
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
	<!-- Ornamen Lengkungan Turquoise & Cyan di Sudut Kanan Atas -->
	<div class="top-right-wave" aria-hidden="true">
		<svg viewBox="0 0 380 240" fill="none" preserveAspectRatio="none">
			<path d="M40,0 C110,115 240,175 380,205 L380,0 Z" fill="#E4F9FB" opacity="0.85" />
			<path d="M125,0 C190,90 285,138 380,162 L380,0 Z" fill="#8CE7EE" opacity="0.7" />
		</svg>
	</div>

	<!-- Clip Path untuk Potongan Geometris Miring Halus pada Foto -->
	<svg width="0" height="0" style="position:absolute;" aria-hidden="true">
		<defs>
			<clipPath id="handshakeFrameClip" clipPathUnits="objectBoundingBox">
				<path d="M 0,0.02 L 0.96,0.02 C 0.99,0.02 1.0,0.05 0.992,0.11 L 0.925,0.91 C 0.918,0.965 0.895,0.985 0.86,0.985 L 0,0.985 Z" />
			</clipPath>
		</defs>
	</svg>

	<!-- Consistent Centered Container: min(1500px, calc(100% - 80px)) -->
	<div class="collab-container">
		<div class="collab-grid-layout">
			<!-- Kolom Kiri (40%) — Gambar Handshake Proporsional 540-580px x 270-310px -->
			<div class="collab-photo-col">
				<div class="collab-photo-wrapper">
					<div class="collab-photo-frame">
						<img
							src="/images/partner-handshake-real.jpg"
							alt="Bentuk Kerja Sama SDJNusantara"
							class="collab-photo"
							loading="eager"
						/>
					</div>

					<!-- Overlay SVG Presisi: Tab Teal Kiri + Aksen Garis Kuning Kanan Bawah -->
					<svg class="photo-overlays-svg" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<defs>
							<linearGradient id="tealTabGrad" x1="0" y1="0" x2="1" y2="1">
								<stop offset="0%" stop-color="#00A9B7" />
								<stop offset="100%" stop-color="#007D8A" />
							</linearGradient>
						</defs>

						<!-- Border putih pemisah di tepi kanan tab teal -->
						<path d="M0,0 L12.5,0 C15.2,0.5 16.5,4 15.6,9 L4.8,99 L0,99 Z" fill="#FFFFFF" />
						<!-- Tab Geometris Turquoise/Teal Kiri -->
						<path d="M0,0 L11.5,0 C14.2,0.5 15.4,4 14.5,9 L3.8,99 L0,99 Z" fill="url(#tealTabGrad)" />

						<!-- Aksen Garis Kuning/Oranye Melengkung di Kanan Bawah -->
						<path d="M44,98.5 C68,98.5 82,98.3 86.2,98.1 C89.8,97.9 91.8,95.8 92.6,90.5 L95.3,62 L97.0,62 L94.1,91.8 C93.1,97.8 90.6,100.3 86.4,100.5 C81.5,100.7 66,100 44,99.2 Z" fill="#FFAD16" />
					</svg>
				</div>
			</div>

			<!-- Kolom Kanan (60%) — Konten & Grid 3x2 Bentuk Kerja Sama -->
			<div class="collab-content-col">
				<div class="collab-header">
					<div class="collab-label">
						<span class="label-dash"></span>
						<span class="label-text">BENTUK KERJA SAMA</span>
					</div>

					<h2 class="section-title">
						Beragam Bentuk Kolaborasi<br />
						yang Dapat <span class="highlight-orange">Disesuaikan dengan Kebutuhan.</span>
					</h2>

					<p class="section-desc">
						Kami menyediakan berbagai bentuk kerja sama yang fleksibel dan saling menguntungkan, baik dalam jangka pendek maupun jangka panjang.
					</p>
				</div>

				<!-- 3 Kolom x 2 Baris Bentuk Kerja Sama -->
				<div class="forms-3x2-grid">
					{#each forms as item, idx}
						<div class="form-grid-item {(idx % 3 !== 2) ? 'has-right-divider' : ''}">
							<div class="form-icon-box">
								{#if item.icon === 'program'}
									<!-- Monitor / Penyelenggaraan Program Bersama -->
									<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
										<line x1="8" y1="21" x2="16" y2="21" />
										<line x1="12" y1="17" x2="12" y2="21" />
									</svg>
								{:else if item.icon === 'exchange'}
									<!-- Users / Pertukaran Peserta & Dosen -->
									<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								{:else if item.icon === 'curriculum'}
									<!-- Open Book / Pengembangan Kurikulum -->
									<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
									</svg>
								{:else if item.icon === 'research'}
									<!-- Layers Stack / Riset & Inovasi -->
									<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<polygon points="12 2 2 7 12 12 22 7 12 2" />
										<polyline points="2 12 12 17 22 12" />
									</svg>
								{:else if item.icon === 'scholarship'}
									<!-- Shield Check / Dukungan Beasiswa dan Pendanaan -->
									<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
										<polyline points="9 12 11 14 15 10" />
									</svg>
								{:else}
									<!-- Buildings / Pemanfaatan Fasilitas -->
									<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00A9B7" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
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
		padding: 56px 0 52px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Ornamen Sudut Kanan Atas */
	.top-right-wave {
		position: absolute;
		top: 0;
		right: 0;
		width: 360px;
		height: 220px;
		pointer-events: none;
		z-index: 0;
	}

	.top-right-wave svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Container Konsisten: min(1500px, calc(100% - 80px)) */
	.collab-container {
		position: relative;
		z-index: 2;
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		box-sizing: border-box;
	}

	/* Grid Dua Kolom: ~40% Gambar | ~60% Konten */
	.collab-grid-layout {
		display: grid;
		grid-template-columns: 40% 1fr;
		align-items: center;
		gap: 52px;
	}

	/* Kolom Kiri — Gambar 540–580px x 270–310px */
	.collab-photo-col {
		width: 100%;
		box-sizing: border-box;
	}

	.collab-photo-wrapper {
		position: relative;
		width: 100%;
		height: clamp(250px, 19.5vw, 305px);
	}

	.collab-photo-frame {
		position: relative;
		width: 100%;
		height: 100%;
		clip-path: url(#handshakeFrameClip);
		background: #E2E8F0;
		overflow: hidden;
		border-top-left-radius: 16px;
		border-bottom-left-radius: 16px;
	}

	.collab-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 45%;
		display: block;
	}

	.photo-overlays-svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 3;
		overflow: visible;
	}

	/* Kolom Kanan — Konten (60%) */
	.collab-content-col {
		width: 100%;
		min-width: 0;
		box-sizing: border-box;
	}

	.collab-header {
		margin-bottom: 28px;
	}

	.collab-label {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.label-dash {
		width: 20px;
		height: 2.5px;
		background: #00A9B7;
		border-radius: 2px;
	}

	.label-text {
		color: #00A9B7;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	/* Heading Target Desktop: 30–36px */
	.section-title {
		font-size: clamp(24px, 2vw, 33px);
		line-height: 1.24;
		font-weight: 800;
		color: #0B1B45;
		margin: 0 0 14px 0;
		letter-spacing: -0.015em;
	}

	.highlight-orange {
		color: #FFAD16;
	}

	/* Deskripsi Target Desktop: 14–16px */
	.section-desc {
		font-size: clamp(14px, 0.98vw, 15.5px);
		line-height: 1.58;
		color: #64748B;
		margin: 0;
		max-width: 720px;
	}

	/* Grid 3 Kolom x 2 Baris */
	.forms-3x2-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px 26px;
		width: 100%;
	}

	.form-grid-item {
		display: flex;
		align-items: center;
		gap: 14px;
		padding-right: 14px;
	}

	.form-grid-item.has-right-divider {
		border-right: 1px solid #E8EFF6;
	}

	.form-icon-box {
		width: 50px;
		height: 50px;
		border-radius: 13px;
		background: #EAF8F9;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.form-title {
		font-size: clamp(13.5px, 0.92vw, 14.5px);
		font-weight: 700;
		color: #0B1B45;
		line-height: 1.38;
	}

	/* Tablet */
	@media (max-width: 1100px) {
		.collab-container {
			width: calc(100% - 56px);
		}

		.collab-grid-layout {
			grid-template-columns: 42% 1fr;
			gap: 32px;
		}

		.collab-photo-wrapper {
			height: 245px;
		}

		.forms-3x2-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 18px;
		}

		.form-grid-item.has-right-divider {
			border-right: none;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.collab-forms-section {
			padding: 36px 0 40px;
		}

		.collab-container {
			width: calc(100% - 40px);
		}

		.collab-grid-layout {
			grid-template-columns: 1fr;
			gap: 24px;
		}

		.collab-photo-wrapper {
			height: 215px;
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
