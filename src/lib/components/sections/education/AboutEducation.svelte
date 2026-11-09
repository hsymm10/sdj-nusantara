<!-- Section 03: Tentang SDJNusantara (Mockup Resmi SDJNusantara) -->
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
		<!-- Left Col: Text & CTA -->
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
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>

		<!-- Middle Col: 5 Pillars -->
		<div class="about-mid-col">
			{#each pillars as p}
				<div class="pillar-item">
					<div class="pillar-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d={p.path} />
						</svg>
					</div>
					<span class="pillar-label">{p.title}</span>
				</div>
			{/each}
		</div>

		<!-- Right Col: Building Architecture Photo with Curved Corner -->
		<div class="about-right-col">
			<div class="bldg-frame">
				<img
					src="/images/about-campus-hd.jpg"
					alt="Gedung Kampus SDJNusantara"
					class="bldg-img"
					loading="lazy"
				/>
				<!-- Gold curved ribbon accent on bottom-right -->
				<svg class="gold-ribbon-swoosh" viewBox="0 0 140 100" fill="none" aria-hidden="true">
					<path d="M40 100C80 95 120 70 140 25V100H40Z" fill="#F9B52B"/>
					<path d="M80 100C110 98 130 85 140 55V100H80Z" fill="#08AEBB"/>
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

	/* Left */
	.about-left-col {
		flex: 0 0 360px;
		max-width: 360px;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		width: 16px;
		height: 2.5px;
		background: #08AEBB;
		border-radius: 2px;
	}

	.badge-text {
		color: #08AEBB;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.about-title {
		font-size: clamp(22px, 2vw, 27px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.25;
		margin: 0 0 14px;
		letter-spacing: -0.015em;
	}

	.about-desc {
		font-size: 14px;
		color: #475569;
		line-height: 1.6;
		margin: 0 0 24px;
	}

	.about-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 11px 22px;
		background: #F9B52B;
		color: #082442;
		font-size: 13px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgba(249, 181, 43, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.about-cta-btn:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(249, 181, 43, 0.38);
	}

	/* Middle (5 Pillars) */
	.about-mid-col {
		flex: 1;
		max-width: 330px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.pillar-item {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 10px 16px;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		transition: transform 0.2s, border-color 0.2s, background 0.2s;
	}

	.pillar-item:hover {
		transform: translateX(3px);
		background: #FFFFFF;
		border-color: #08AEBB;
		box-shadow: 0 4px 14px rgba(11, 41, 72, 0.05);
	}

	.pillar-icon {
		width: 36px;
		height: 36px;
		border-radius: 10px;
		background: #EBF8FA;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.pillar-label {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.3;
	}

	/* Right (Building Frame) */
	.about-right-col {
		flex: 0 0 380px;
		max-width: 380px;
	}

	.bldg-frame {
		position: relative;
		width: 100%;
		height: 280px;
		border-radius: 80px 18px 18px 18px;
		overflow: hidden;
		box-shadow: 0 14px 32px rgba(11, 41, 72, 0.08);
		border: 1px solid #E2E8F0;
	}

	.bldg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.bldg-frame:hover .bldg-img {
		transform: scale(1.03);
	}

	.gold-ribbon-swoosh {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 140px;
		height: 100px;
		pointer-events: none;
	}

	@media (max-width: 1024px) {
		.about-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 36px;
		}

		.about-left-col,
		.about-mid-col,
		.about-right-col {
			max-width: 100%;
			width: 100%;
		}

		.bldg-frame {
			border-radius: 18px;
			height: 320px;
		}
	}

	@media (max-width: 640px) {
		.about-section {
			padding: 52px 0;
		}

		.about-container {
			padding: 0 20px;
		}
	}
</style>
