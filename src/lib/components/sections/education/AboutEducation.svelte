<!-- Section 03: Tentang SDJNusantara (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	const pillars = [
		{
			id: 'terintegrasi',
			title: 'Pendekatan Terintegrasi',
			active: false,
			icon: 'diamond'
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
	<div class="about-container">
		<!-- Kolom 1 — Konten Utama (Kiri: 34%) -->
		<div class="about-left-col">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Tentang SDJNusantara</span>
			</div>
			<h2 class="about-title">
				Menjembatani Potensi
				<span class="title-line">dengan <span class="highlight-gold">Peluang Pendidikan</span></span>
				<span class="highlight-gold title-line">& Karier</span>
			</h2>
			<p class="about-desc">
				SDJNusantara hadir untuk menghubungkan potensi individu dan institusi dengan kesempatan pendidikan, pengembangan kompetensi, dan jejaring profesional.
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
			{#each pillars as p}
				<div class="pillar-card {p.active ? 'active-pillar' : ''}">
					<div class="pillar-icon-box">
						{#if p.icon === 'diamond'}
							<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M6 3h12l4 6-10 12L2 9z" />
								<path d="M11 3L8 9l4 12 4-12-3-6" />
								<path d="M2 9h20" />
							</svg>
						{:else if p.icon === 'users'}
							<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						{:else if p.icon === 'chart'}
							<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<line x1="18" y1="20" x2="18" y2="10" />
								<line x1="12" y1="20" x2="12" y2="4" />
								<line x1="6" y1="20" x2="6" y2="14" />
							</svg>
						{:else if p.icon === 'nodes'}
							<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<circle cx="18" cy="5" r="3" />
								<circle cx="6" cy="12" r="3" />
								<circle cx="18" cy="19" r="3" />
								<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
								<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
							</svg>
						{:else if p.icon === 'shield'}
							<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
								<path d="M9 12l2 2 4-4" />
							</svg>
						{/if}
					</div>
					<span class="pillar-title">{p.title}</span>
				</div>
			{/each}
		</div>

		<!-- Kolom 3 — Gambar Utama (Kanan: 36%) -->
		<div class="about-right-col">
			<div class="bldg-card">
				<img
					src="/images/about-campus-hd.jpg"
					alt="Gedung Kampus SDJNusantara"
					class="bldg-img"
					loading="lazy"
				/>
				<!-- Aksen lengkung kuning dan teal pada bagian kanan bawah gambar -->
				<svg class="bldg-corner-swoosh" viewBox="0 0 160 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
					<path d="M0 120 C50 115 110 95 160 30 V120 H0 Z" fill="#FFB923" />
					<path d="M45 120 C90 116 130 98 160 60 V120 H45 Z" fill="#00AAB5" />
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	.about-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
		box-sizing: border-box;
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
		margin-bottom: 12px;
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
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.25;
		margin: 0 0 16px;
		letter-spacing: -0.015em;
	}

	.title-line {
		display: block;
	}

	.highlight-gold {
		color: #FFB923;
	}

	.about-desc {
		font-size: 14px;
		color: #475569;
		line-height: 1.6;
		margin: 0 0 24px;
		max-width: 360px;
	}

	.about-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 24px;
		background: #FFB923;
		color: #0B2948;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 185, 35, 0.3);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.about-cta-btn:hover {
		background: #e6a51d;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 185, 35, 0.42);
	}

	/* Kolom 2 — Tengah: 30% */
	.about-mid-col {
		flex: 0 0 30%;
		max-width: 30%;
		display: flex;
		flex-direction: column;
		gap: 11px;
	}

	.pillar-card {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 10px 16px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		box-shadow: 0 2px 6px rgba(11, 41, 72, 0.03);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.pillar-card:hover {
		transform: translateX(4px);
		box-shadow: 0 4px 14px rgba(0, 170, 181, 0.12);
		border-color: #00AAB5;
	}

	.active-pillar {
		background: #F0FBFB;
		border: 1.5px solid #00AAB5;
		box-shadow: 0 4px 14px rgba(0, 170, 181, 0.12);
	}

	.pillar-icon-box {
		width: 38px;
		height: 38px;
		border-radius: 10px;
		background: #E8F7F8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: background-color 0.2s;
	}

	.active-pillar .pillar-icon-box {
		background: #D9F3F5;
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

	.bldg-card {
		position: relative;
		width: 100%;
		height: 330px;
		border-radius: 26px;
		overflow: hidden;
		box-shadow: 0 14px 34px rgba(11, 41, 72, 0.08);
		border: 1px solid #E2E8F0;
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
	@media (max-width: 1024px) {
		.about-container {
			gap: 24px;
			padding: 0 24px;
		}

		.about-left-col {
			flex: 0 0 33%;
			max-width: 33%;
		}

		.about-mid-col {
			flex: 0 0 31%;
			max-width: 31%;
		}

		.about-right-col {
			flex: 0 0 36%;
			max-width: 36%;
		}

		.bldg-card {
			height: 310px;
			border-radius: 20px;
		}

		.about-title {
			font-size: 22px;
		}

		.pillar-title {
			font-size: 12.5px;
		}

		.pillar-card {
			padding: 8px 12px;
			gap: 10px;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.about-section {
			padding: 56px 0;
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
	}
</style>
