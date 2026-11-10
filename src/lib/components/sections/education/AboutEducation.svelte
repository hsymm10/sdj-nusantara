<!-- Section 03: Tentang SDJNusantara (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	const pillars = [
		{
			id: 'terintegrasi',
			title: 'Pendidikan Terintegrasi',
			active: false,
			icon: 'grad'
		},
		{
			id: 'terarah',
			title: 'Pendampingan Terarah',
			active: false,
			icon: 'users'
		},
		{
			id: 'aplikatif',
			title: 'Program Aplikatif',
			active: true,
			icon: 'chart'
		},
		{
			id: 'kolaborasi',
			title: 'Jaringan Kolaborasi',
			active: false,
			icon: 'nodes'
		},
		{
			id: 'transparansi',
			title: 'Etika & Transparansi',
			active: false,
			icon: 'shield'
		}
	];
</script>

<section class="about-section" id="tentang-sdj">
	<!-- Background Decor: Left Dot Matrix & Glow -->
	<div class="bg-glow-left" aria-hidden="true"></div>
	<div class="dot-matrix" aria-hidden="true">
		{#each Array(15) as _}
			<span class="dot"></span>
		{/each}
	</div>

	<!-- Background Decor: Top-Right Soft Yellow Glow -->
	<div class="bg-glow-right" aria-hidden="true"></div>

	<!-- Background Decor: Bottom Cyan Flowing Wave -->
	<div class="bottom-cyan-wave" aria-hidden="true">
		<svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none">
			<path d="M0,40 C320,80 600,25 920,62 C1180,92 1340,55 1440,35 L1440,90 L0,90 Z" fill="url(#cyanWaveGrad)" />
			<path d="M0,58 C360,92 680,45 1040,78 C1260,98 1380,72 1440,60 L1440,90 L0,90 Z" fill="#E8FAF9" opacity="0.7" />
			<defs>
				<linearGradient id="cyanWaveGrad" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#24CBD8" stop-opacity="0.45" />
					<stop offset="50%" stop-color="#64E0EA" stop-opacity="0.32" />
					<stop offset="100%" stop-color="#D7F6F8" stop-opacity="0.18" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="about-container">
		<!-- Kolom 1 — Konten Utama (Kiri: 34%) -->
		<div class="about-left-col">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Tentang SDJNusantara</span>
			</div>
			<h2 class="about-title">
				Menjembatani Potensi
				<span class="title-line">dengan <span class="highlight-cyan">Peluang</span></span>
				<span class="highlight-gold title-line">Pendidikan &amp; Karier</span>
			</h2>
			<p class="about-desc">
				SDJNusantara hadir untuk memperluas akses, membangun kompetensi, dan menghubungkan individu dengan peluang terbaik di dunia pendidikan dan dunia kerja.
			</p>
			<a href="/tentang-kami" class="about-cta-btn">
				<span>Selengkapnya Tentang Kami</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Kolom 2 — Daftar Keunggulan (Tengah: 30%) -->
		<div class="about-mid-col">
			<!-- Arc curve dekoratif di sebelah kiri pills -->
			<svg class="pill-arc-svg" viewBox="0 0 38 270" fill="none" aria-hidden="true">
				<path d="M 32 14 C 2 78, 2 192, 32 256" stroke="#22CBD8" stroke-width="1.8" stroke-linecap="round" fill="none" />
				<circle cx="32" cy="14" r="3" fill="#A4EEF3" />
				<circle cx="15" cy="74" r="3.5" fill="#00AAB5" />
				<circle cx="9" cy="135" r="4.2" fill="#00AAB5" />
				<circle cx="15" cy="196" r="3.5" fill="#00AAB5" />
				<circle cx="32" cy="256" r="3" fill="#A4EEF3" />
			</svg>

			<div class="pillars-list">
				{#each pillars as p}
					<div class="pillar-card {p.active ? 'active-pillar' : ''}">
						<div class="pillar-icon-box">
							{#if p.icon === 'grad'}
								<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M12 3L2 8l10 5 10-5-10-5z" />
									<path d="M2 8v6" />
									<path d="M6 10.5v5a6 6 0 0 0 12 0v-5" />
								</svg>
							{:else if p.icon === 'users'}
								<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							{:else if p.icon === 'chart'}
								<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<line x1="18" y1="20" x2="18" y2="10" />
									<line x1="12" y1="20" x2="12" y2="4" />
									<line x1="6" y1="20" x2="6" y2="14" />
								</svg>
							{:else if p.icon === 'nodes'}
								<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<circle cx="18" cy="5" r="3" />
									<circle cx="6" cy="12" r="3" />
									<circle cx="18" cy="19" r="3" />
									<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
									<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
								</svg>
							{:else if p.icon === 'shield'}
								<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
									<path d="M9 12l2 2 4-4" />
								</svg>
							{/if}
						</div>
						<span class="pillar-title">{p.title}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Kolom 3 — Gambar Utama (Kanan: 36%) -->
		<div class="about-right-col">
			<div class="bldg-wrapper">
				<!-- Floating Badge: Dedikasi untuk Talenta Indonesia -->
				<div class="floating-badge">
					<div class="badge-sparkles" aria-hidden="true">
						<svg width="22" height="18" viewBox="0 0 24 20" fill="none">
							<path d="M12 2V6M5 6L8 9M19 6L16 9" stroke="#FFB923" stroke-width="2.2" stroke-linecap="round" />
						</svg>
					</div>
					<div class="badge-icon" aria-hidden="true">
						<!-- Laurel wreath -->
						<svg width="28" height="28" viewBox="0 0 48 48" fill="#FFB51B">
							<path d="M16.5 39.5c-4.8-3.4-7.5-8.8-7.5-14.7 0-4.8 1.8-9.3 5.1-12.8l2.1 2.1c-2.8 2.9-4.2 6.8-4.2 10.7 0 5 2.3 9.6 6.3 12.5l-1.8 2.2zm15 0l-1.8-2.2c4-2.9 6.3-7.5 6.3-12.5 0-3.9-1.4-7.8-4.2-10.7l2.1-2.1c3.3 3.5 5.1 8 5.1 12.8 0 5.9-2.7 11.3-7.5 14.7z" />
							<circle cx="11" cy="22" r="3" />
							<circle cx="14" cy="15" r="2.8" />
							<circle cx="20" cy="10" r="2.5" />
							<circle cx="37" cy="22" r="3" />
							<circle cx="34" cy="15" r="2.8" />
							<circle cx="28" cy="10" r="2.5" />
							<circle cx="11" cy="29" r="2.8" />
							<circle cx="37" cy="29" r="2.8" />
							<circle cx="15" cy="35" r="2.5" />
							<circle cx="33" cy="35" r="2.5" />
						</svg>
					</div>
					<div class="badge-text-group">
						<span class="badge-row-1">Dedikasi untuk</span>
						<span class="badge-row-2">Talenta Indonesia</span>
					</div>
				</div>

				<!-- Building Card Frame -->
				<div class="bldg-card">
					<img
						src="/images/about-campus-hd.jpg"
						alt="Gedung Kampus SDJNusantara"
						class="bldg-img"
						loading="eager"
					/>
					<!-- Aksen lengkung kuning dan teal pada bagian kanan bawah gambar -->
					<svg class="bldg-corner-swoosh" viewBox="0 0 160 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M0 120 C50 115 110 95 160 30 V120 H0 Z" fill="#FFB923" />
						<path d="M45 120 C90 116 130 98 160 60 V120 H45 Z" fill="#00AAB5" />
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
		padding: 72px 0 86px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Background Decorations */
	.bg-glow-left {
		position: absolute;
		top: 20%;
		left: -120px;
		width: 320px;
		height: 320px;
		background: radial-gradient(circle, rgba(0, 170, 181, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
	}

	.dot-matrix {
		position: absolute;
		top: 38%;
		left: 36px;
		display: grid;
		grid-template-columns: repeat(5, 5px);
		gap: 9px;
		pointer-events: none;
		z-index: 1;
	}

	.dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #00AAB5;
		opacity: 0.42;
	}

	.bg-glow-right {
		position: absolute;
		top: -40px;
		right: -60px;
		width: 420px;
		height: 420px;
		background: radial-gradient(circle, rgba(255, 185, 35, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
	}

	.bottom-cyan-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 75px;
		pointer-events: none;
		z-index: 1;
	}

	.bottom-cyan-wave svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.about-container {
		position: relative;
		width: 100%;
		max-width: 1220px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
		box-sizing: border-box;
		z-index: 2;
	}

	/* Kolom 1 — Kiri: 34% */
	.about-left-col {
		flex: 0 0 34%;
		max-width: 34%;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 14px;
	}

	.badge-dash {
		width: 18px;
		height: 3px;
		background: #00AAB5;
		border-radius: 2px;
	}

	.badge-text {
		color: #00AAB5;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.about-title {
		font-size: clamp(24px, 2.25vw, 31px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.25;
		margin: 0 0 16px;
		letter-spacing: -0.015em;
	}

	.title-line {
		display: block;
	}

	.highlight-cyan {
		color: #00AAB5;
	}

	.highlight-gold {
		color: #FFB923;
	}

	.about-desc {
		font-size: 13.5px;
		color: #556980;
		line-height: 1.62;
		margin: 0 0 24px;
		max-width: 360px;
	}

	.about-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		padding: 12px 24px;
		background: #FFB923;
		color: #0B2948;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 185, 35, 0.32);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.about-cta-btn:hover {
		background: #e6a51d;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 185, 35, 0.45);
	}

	/* Kolom 2 — Tengah: 30% */
	.about-mid-col {
		flex: 0 0 30%;
		max-width: 30%;
		position: relative;
		display: flex;
		align-items: center;
	}

	.pill-arc-svg {
		position: absolute;
		left: -32px;
		top: 50%;
		transform: translateY(-50%);
		width: 38px;
		height: 270px;
		pointer-events: none;
	}

	.pillars-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.pillar-card {
		display: flex;
		align-items: center;
		gap: 13px;
		padding: 7px 18px 7px 8px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 9999px;
		box-shadow: 0 3px 10px rgba(11, 41, 72, 0.04);
		transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.pillar-card:hover {
		transform: translateX(4px);
		box-shadow: 0 6px 16px rgba(0, 170, 181, 0.12);
		border-color: #00AAB5;
	}

	.active-pillar {
		background: linear-gradient(90deg, #E2F9FA 0%, #D8F7F9 100%);
		border: 1.5px solid #00AAB5;
		box-shadow: 0 4px 16px rgba(0, 170, 181, 0.16);
	}

	.pillar-icon-box {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #F4F8FA;
		border: 1px solid #E5EBF2;
		color: #0B2948;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all 0.2s;
	}

	.active-pillar .pillar-icon-box {
		background: #FFFFFF;
		border-color: transparent;
		color: #00AAB5;
		box-shadow: 0 2px 8px rgba(0, 170, 181, 0.15);
	}

	.pillar-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.3;
	}

	/* Kolom 3 — Kanan: 36% */
	.about-right-col {
		flex: 0 0 36%;
		max-width: 36%;
	}

	.bldg-wrapper {
		position: relative;
		width: 100%;
	}

	/* Floating Badge: Dedikasi untuk Talenta Indonesia */
	.floating-badge {
		position: absolute;
		top: -18px;
		right: -10px;
		z-index: 10;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: #FFFFFF;
		padding: 7px 18px 7px 12px;
		border-radius: 9999px;
		border: 1.5px solid #FDE68A;
		box-shadow: 0 8px 24px rgba(11, 41, 72, 0.1);
	}

	.badge-sparkles {
		position: absolute;
		top: -14px;
		right: 12px;
		pointer-events: none;
	}

	.badge-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.badge-text-group {
		display: flex;
		flex-direction: column;
		line-height: 1.25;
	}

	.badge-row-1 {
		font-size: 10.5px;
		font-weight: 600;
		color: #0B2948;
	}

	.badge-row-2 {
		font-size: 11px;
		font-weight: 800;
		color: #0B2948;
	}

	.bldg-card {
		position: relative;
		width: 100%;
		height: 330px;
		border-radius: 26px;
		overflow: hidden;
		box-shadow: 0 16px 36px rgba(11, 41, 72, 0.1);
		border: 3px solid #FFFFFF;
		background: #F1F5F9;
	}

	.bldg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}

	.bldg-card:hover .bldg-img {
		transform: scale(1.03);
	}

	.bldg-corner-swoosh {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 160px;
		height: 120px;
		pointer-events: none;
	}

	/* Tablet */
	@media (max-width: 1100px) {
		.dot-matrix {
			display: none;
		}
	}

	@media (max-width: 1024px) {
		.about-container {
			gap: 24px;
			padding: 0 24px;
		}

		.dot-matrix {
			left: 14px;
		}

		.about-left-col {
			flex: 0 0 33%;
			max-width: 33%;
		}

		.about-mid-col {
			flex: 0 0 31%;
			max-width: 31%;
		}

		.pill-arc-svg {
			left: -22px;
			width: 30px;
		}

		.about-right-col {
			flex: 0 0 36%;
			max-width: 36%;
		}

		.bldg-card {
			height: 300px;
			border-radius: 20px;
		}

		.about-title {
			font-size: 22px;
		}

		.pillar-title {
			font-size: 12.5px;
		}

		.pillar-card {
			padding: 6px 14px 6px 6px;
			gap: 10px;
		}

		.floating-badge {
			top: -14px;
			right: -6px;
			padding: 5px 14px 5px 10px;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.about-section {
			padding: 52px 0 64px;
		}

		.dot-matrix {
			display: none;
		}

		.pill-arc-svg {
			display: none;
		}

		.about-container {
			flex-direction: column;
			text-align: center;
			gap: 32px;
			padding: 0 20px;
		}

		.about-left-col,
		.about-mid-col,
		.about-right-col {
			flex: 1 1 100%;
			max-width: 100%;
			width: 100%;
		}

		.about-left-col {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.section-badge {
			justify-content: center;
		}

		.about-desc {
			max-width: 100%;
		}

		.pillar-card {
			text-align: left;
		}

		.bldg-card {
			height: 240px;
			border-radius: 20px;
		}

		.floating-badge {
			top: -12px;
			right: 8px;
		}
	}
</style>