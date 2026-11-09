<!-- Section 04: Solusi Terintegrasi untuk Pengembangan Potensi (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	const services = [
		{
			id: 'talent-management',
			title: 'Talent Management &\nDevelopment Center',
			desc: 'Pengelolaan, pemetaan, dan pengembangan talenta secara terstruktur.',
			href: '/layanan#talent-management',
			icon: 'users'
		},
		{
			id: 'scholarship-academy',
			title: 'Scholarship\nAcademy',
			desc: 'Pendampingan menyeluruh untuk meraih beasiswa dalam dan luar negeri.',
			href: '/layanan#scholarship-academy',
			icon: 'grad'
		},
		{
			id: 'skills-development',
			title: 'Skills Development &\nCertification',
			desc: 'Peningkatan kompetensi dengan pelatihan dan sertifikasi berstandar.',
			href: '/layanan#skills-development',
			icon: 'star'
		},
		{
			id: 'institutional-partnership',
			title: 'Institutional &\nStrategic Partnership',
			desc: 'Kolaborasi strategis untuk memperluas dampak pendidikan.',
			href: '/layanan#institutional-partnership',
			icon: 'briefcase'
		}
	];
</script>

<section class="layanan-section" id="solusi-terintegrasi">
	<div class="layanan-container">
		<!-- Header -->
		<div class="layanan-header">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Layanan Unggulan</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="layanan-title">Solusi Terintegrasi untuk Pengembangan Potensi</h2>
			<p class="layanan-desc">
				Berbagai layanan profesional yang dirancang untuk mendukung perjalanan pendidikan dan karier Anda.
			</p>
		</div>

		<!-- 4 Cards Grid -->
		<div class="layanan-grid">
			{#each services as item, idx}
				<a href={item.href} class="layanan-card" class:active={idx === 3}>
					<div class="card-icon-wrap">
						{#if item.icon === 'users'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{:else if item.icon === 'grad'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M12 3L2 8l10 5 10-5-10-5z"/>
								<path d="M2 8v6"/>
								<path d="M6 10.5v5a6 6 0 0 0 12 0v-5"/>
							</svg>
						{:else if item.icon === 'star'}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
							</svg>
						{:else}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="2" y="7" width="20" height="14" rx="2"/>
								<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
								<line x1="12" y1="12" x2="12" y2="12"/>
							</svg>
						{/if}
					</div>

					<div class="card-content-wrap">
						<h3 class="card-title">{item.title}</h3>
						<p class="card-desc">{item.desc}</p>
					</div>

					<div class="card-arrow-wrap">
						<div class="card-arrow">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
							</svg>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.layanan-section {
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.layanan-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	/* Header */
	.layanan-header {
		text-align: center;
		margin-bottom: 38px;
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

	.layanan-title {
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.25;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
	}

	.layanan-desc {
		font-size: 14px;
		color: #64748B;
		margin: 0 auto;
		max-width: 600px;
		line-height: 1.6;
	}

	/* 4 Cards Grid */
	.layanan-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
	}

	.layanan-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 28px 24px 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-decoration: none;
		min-height: 250px;
		box-shadow: 0 4px 20px rgba(11, 41, 72, 0.04);
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s;
		box-sizing: border-box;
		position: relative;
	}

	.layanan-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 28px rgba(11, 41, 72, 0.09);
		border-color: #08AEBB;
	}

	/* Active / highlight card border */
	.layanan-card.active {
		border-color: #08AEBB;
		box-shadow: 0 6px 22px rgba(8, 174, 187, 0.12);
	}

	.card-icon-wrap {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: #08AEBB;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		transition: transform 0.2s;
	}

	.layanan-card:hover .card-icon-wrap {
		transform: scale(1.05);
	}

	.card-content-wrap {
		flex: 1;
		margin-bottom: 20px;
	}

	.card-title {
		font-size: 16px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		margin: 0 0 10px;
		white-space: pre-line;
	}

	.card-desc {
		font-size: 13px;
		line-height: 1.55;
		color: #64748B;
		margin: 0;
	}

	.card-arrow-wrap {
		display: flex;
		justify-content: flex-end;
		margin-top: auto;
	}

	.card-arrow {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #F8FAFC;
		border: 1.5px solid #08AEBB;
		color: #08AEBB;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.layanan-card:hover .card-arrow {
		background: #08AEBB;
		color: #FFFFFF;
		transform: scale(1.06);
	}

	@media (max-width: 1024px) {
		.layanan-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
	}

	@media (max-width: 640px) {
		.layanan-section {
			padding: 52px 0;
		}

		.layanan-container {
			padding: 0 20px;
		}

		.layanan-grid {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}
</style>
