<script lang="ts">
	const pillars = [
		{
			id: 'terintegrasi',
			title: 'Pendekatan Terintegrasi',
			path: 'M12 2L2 9l10 13 10-13-10-7z M2 9h20'
		},
		{
			id: 'terarah',
			title: 'Pendampingan Terarah',
			path: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
		},
		{
			id: 'aplikatif',
			title: 'Program Aplikatif',
			path: 'M18 20V10 M12 20V4 M6 20v-6'
		},
		{
			id: 'kolaborasi',
			title: 'Jaringan Kolaborasi',
			path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'
		},
		{
			id: 'transparansi',
			title: 'Etika & Transparansi',
			path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4'
		}
	];
</script>

<section class="about-section" id="tentang-sdj">
	<div class="about-container">
		<!-- Left: Text & CTA -->
		<div class="about-left-col">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Tentang SDJNusantara</span>
			</div>
			<h2 class="about-title">Menjembatani Potensi dengan Peluang Pendidikan & Karier</h2>
			<p class="about-desc">
				SDJNusantara hadir untuk menghubungkan potensi individu dan institusi dengan kesempatan pendidikan, pengembangan kompetensi, dan jejaring profesional.
			</p>
			<a href="/tentang-kami" class="about-cta-btn">
				<span>Selengkapnya Tentang Kami</span>
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>

		<!-- Middle: 5 Pillars -->
		<div class="about-mid-col">
			{#each pillars as p}
				<div class="pillar-item">
					<div class="pillar-icon">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d={p.path} />
						</svg>
					</div>
					<span class="pillar-label">{p.title}</span>
				</div>
			{/each}
		</div>

		<!-- Right: Building Blob Image with Arch Top-Left + Gold Ribbon -->
		<div class="about-right-col">
			<div class="bldg-frame">
				<img
					src="/images/about-campus-hd.jpg"
					alt="Kampus Modern SDJNusantara"
					class="bldg-img"
					loading="lazy"
				/>
				<!-- Gold curved ribbon accent on bottom-right -->
				<svg class="gold-ribbon-swoosh" viewBox="0 0 160 160" fill="none" aria-hidden="true">
					<path d="M160 90C160 128.66 128.66 160 90 160C130 160 160 130 160 90Z" fill="#F5B331" opacity="0.9" />
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		background: #FFFFFF;
		padding: 44px 0 52px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	.about-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 28px;
		box-sizing: border-box;
	}

	/* Left */
	.about-left-col {
		flex: 0 0 310px;
		max-width: 310px;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		margin-bottom: 8px;
	}

	.badge-dash {
		width: 18px;
		height: 2px;
		background: #079EAD;
		border-radius: 2px;
	}

	.badge-text {
		color: #079EAD;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.about-title {
		font-size: 17px;
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 8px;
		letter-spacing: -0.015em;
	}

	.about-desc {
		font-size: 11.5px;
		color: #52647A;
		line-height: 1.55;
		margin: 0 0 16px;
	}

	.about-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 8px 16px;
		background: #F5B331;
		color: #082442;
		font-weight: 700;
		font-size: 11.5px;
		border-radius: 6px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.25);
		white-space: nowrap;
	}

	.about-cta-btn:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	/* Middle Pillars */
	.about-mid-col {
		display: flex;
		align-items: center;
		gap: 14px;
		flex-shrink: 0;
	}

	.pillar-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 6px;
		width: 68px;
	}

	.pillar-icon {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: #EBF9FA;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease;
	}

	.pillar-item:hover .pillar-icon {
		transform: translateY(-2px);
		background: #D6F4F7;
	}

	.pillar-label {
		font-size: 9.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.25;
	}

	/* Right Building Frame */
	.about-right-col {
		flex: 1;
		max-width: 340px;
		position: relative;
	}

	.bldg-frame {
		position: relative;
		border-top-left-radius: 140px;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		overflow: hidden;
		height: 180px;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.1);
	}

	.bldg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.gold-ribbon-swoosh {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 70px;
		height: 70px;
		pointer-events: none;
	}

	@media (max-width: 991px) {
		.about-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;
		}
		.about-left-col,
		.about-right-col {
			max-width: 100%;
			width: 100%;
		}
		.bldg-frame {
			border-top-left-radius: 80px;
			height: 200px;
		}
		.about-mid-col {
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
		}
	}
</style>
