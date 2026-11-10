<script lang="ts">
	// PartnerCollaborationForms.svelte - Sesuai Mockup Referensi GAMBAR 2
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
	<!-- Dekorasi Wave Cyan di Pojok Kanan Atas -->
	<div class="top-right-wave" aria-hidden="true">
		<svg viewBox="0 0 420 260" fill="none" preserveAspectRatio="none">
			<path d="M40,0 C110,120 260,180 420,210 L420,0 Z" fill="#E3F9FB" opacity="0.8" />
			<path d="M130,0 C200,95 310,145 420,170 L420,0 Z" fill="#88E5EC" opacity="0.7" />
		</svg>
	</div>

	<div class="collab-flex-layout">
		<!-- Kolom Kiri: Foto Jabat Tangan dengan Lengkung Teal Kiri & Kuning Kanan Bawah -->
		<div class="collab-photo-col">
			<!-- Aksen Kuning di Kanan Bawah Frame Foto -->
			<div class="photo-yellow-accent" aria-hidden="true">
				<svg viewBox="0 0 180 120" fill="none" preserveAspectRatio="none">
					<path d="M0,120 C70,118 140,95 180,20 L180,105 C180,114 172,120 163,120 Z" fill="#FFB923" />
				</svg>
			</div>

			<div class="collab-photo-frame">
				<img
					src="/images/partner-handshake-real.jpg"
					alt="Bentuk Kerja Sama SDJNusantara"
					class="collab-photo"
					loading="eager"
				/>
				<!-- Tab Lengkung Teal di Tepi Kiri Foto -->
				<svg class="photo-left-teal-tab" viewBox="0 0 70 280" fill="none" preserveAspectRatio="none" aria-hidden="true">
					<path d="M0,0 L48,0 C64,70 52,185 36,280 L0,280 Z" fill="url(#tealTabGrad)" />
					<defs>
						<linearGradient id="tealTabGrad" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stop-color="#08B4C4" />
							<stop offset="100%" stop-color="#007E8C" />
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
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
										<line x1="8" y1="21" x2="16" y2="21" />
										<line x1="12" y1="17" x2="12" y2="21" />
									</svg>
								{:else if item.icon === 'exchange'}
									<!-- Users / Pertukaran Peserta & Dosen -->
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								{:else if item.icon === 'curriculum'}
									<!-- Open Book / Pengembangan Kurikulum -->
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
									</svg>
								{:else if item.icon === 'research'}
									<!-- Layers Stack / Riset & Inovasi -->
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<polygon points="12 2 2 7 12 12 22 7 12 2" />
										<polyline points="2 12 12 17 22 12" />
									</svg>
								{:else if item.icon === 'scholarship'}
									<!-- Shield Check / Dukungan Beasiswa dan Pendanaan -->
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
										<polyline points="9 12 11 14 15 10" />
									</svg>
								{:else}
									<!-- Buildings / Pemanfaatan Fasilitas -->
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
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
		padding: 58px 0 64px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Top-Right Wave Decoration */
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

	/* Main Layout */
	.collab-flex-layout {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 48px;
		box-sizing: border-box;
	}

	/* Kolom Kiri: Foto (Flush kiri hingga ~37% lebar) */
	.collab-photo-col {
		position: relative;
		flex: 0 0 36%;
		max-width: 520px;
		padding-bottom: 6px;
		padding-right: 6px;
		box-sizing: border-box;
	}

	.photo-yellow-accent {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 180px;
		height: 110px;
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
		height: 265px;
		border-top-right-radius: 26px;
		border-bottom-right-radius: 26px;
		overflow: hidden;
		box-shadow: 0 12px 30px rgba(8, 36, 66, 0.08);
		background: #E2E8F0;
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
		width: 58px;
		height: 100%;
		pointer-events: none;
		z-index: 3;
	}

	/* Kolom Kanan: Konten */
	.collab-content-col {
		flex: 1;
		padding-right: 48px;
		box-sizing: border-box;
	}

	.collab-content-inner {
		max-width: 720px;
	}

	.collab-header {
		margin-bottom: 24px;
	}

	.collab-label {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.label-dash {
		width: 18px;
		height: 2.5px;
		background: #00A6B2;
		border-radius: 2px;
	}

	.label-text {
		color: #00A6B2;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.section-title {
		font-size: clamp(22px, 2vw, 28px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px 0;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB51B;
	}

	.section-desc {
		font-size: 13.5px;
		line-height: 1.58;
		color: #556980;
		margin: 0;
		max-width: 640px;
	}

	/* 3x2 Grid */
	.forms-3x2-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 18px 20px;
		width: 100%;
	}

	.form-grid-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding-right: 10px;
	}

	.form-grid-item.has-right-divider {
		border-right: 1px solid #EEF2F6;
	}

	.form-icon-box {
		width: 42px;
		height: 42px;
		border-radius: 11px;
		background: #EAF9FA;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.form-title {
		font-size: 13px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
	}

	/* Tablet */
	@media (max-width: 1100px) {
		.collab-flex-layout {
			gap: 32px;
		}

		.collab-photo-col {
			flex: 0 0 38%;
		}

		.collab-content-col {
			padding-right: 28px;
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
			padding: 40px 0 48px;
		}

		.collab-flex-layout {
			flex-direction: column;
			align-items: stretch;
			gap: 28px;
		}

		.collab-photo-col {
			flex: 1 1 auto;
			max-width: 100%;
			padding: 0 20px 6px 0;
		}

		.collab-photo-frame {
			height: 210px;
		}

		.collab-content-col {
			padding: 0 20px;
		}

		.collab-content-inner {
			max-width: 100%;
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
