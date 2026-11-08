<!-- Section D: Ruang Lingkup Layanan Hukum (Sesuai Mockup Referensi) -->
<script lang="ts">
	const scopes = [
		{
			title: 'Penyusunan & Penelaahan Kontrak/MOU',
			desc: 'Pembuatan, peninjauan, dan optimalisasi perjanjian kerja sama institusi secara cermat.',
			icon: 'contract',
			href: '/konsultasi'
		},
		{
			title: 'Kepatuhan Regulasi & Kebijakan Kampus',
			desc: 'Pendampingan pemenuhan regulasi pendidikan nasional dan tata kelola institusi.',
			icon: 'gavel',
			href: '/konsultasi'
		},
		{
			title: 'Pendampingan Hukum Terstruktur',
			desc: 'Konsultasi dan pendampingan hukum berkelanjutan sesuai kebutuhan institusi.',
			icon: 'scales',
			href: '/konsultasi'
		}
	];
</script>

<section id="ruang-lingkup" class="scope-legal-section">
	<div class="scope-legal-container">
		<!-- Section Header -->
		<div class="scope-header">
			<div class="scope-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">RUANG LINGKUP LAYANAN</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="scope-title">Ruang Lingkup Layanan Hukum</h2>
			<p class="scope-sub">
				Berbagai layanan pendampingan hukum yang dirancang untuk memenuhi kebutuhan institusi pendidikan Anda.
			</p>
		</div>

		<!-- 3 Cards Grid -->
		<div class="scope-grid">
			{#each scopes as item}
				<div class="scope-card">
					<div class="scope-top">
						<div class="scope-icon-box">
							{#if item.icon === 'contract'}
								<!-- Document / Contract -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
									<polyline points="14 2 14 8 20 8"/>
									<line x1="16" y1="13" x2="8" y2="13"/>
									<line x1="16" y1="17" x2="8" y2="17"/>
									<polyline points="10 9 9 9 8 9"/>
								</svg>
							{:else if item.icon === 'gavel'}
								<!-- Gavel / Campus policy -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 13l-4 4"/>
									<path d="M16 11l-8 8"/>
									<path d="M14.5 4.5l5 5-2 2-5-5 2-2z"/>
									<path d="M2.5 16.5l5 5 2-2-5-5-2 2z"/>
									<path d="M6 21h12"/>
								</svg>
							{:else}
								<!-- Scales of justice -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 3v18M6 8l6-2 6 2M6 8l-3 7h6l-3-7zm12 0l-3 7h6l-3-7z"/>
									<path d="M4 21h16"/>
								</svg>
							{/if}
						</div>

						<h3 class="scope-card-title">{item.title}</h3>
						<p class="scope-card-desc">{item.desc}</p>
					</div>

					<div class="scope-bottom">
						<a href={item.href} class="scope-arrow-btn" aria-label="Konsultasi {item.title}">
							<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<line x1="5" y1="12" x2="19" y2="12"/>
								<polyline points="12 5 19 12 12 19"/>
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.scope-legal-section {
		background: #ffffff;
		padding: 38px 0 46px;
	}

	.scope-legal-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.scope-header {
		text-align: center;
		margin-bottom: 30px;
	}

	.scope-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.5px;
	}

	.scope-title {
		font-size: 23px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px;
		letter-spacing: -0.2px;
	}

	.scope-sub {
		font-size: 12px;
		color: #64748b;
		margin: 0;
	}

	/* 3 Cards Grid */
	.scope-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}

	.scope-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 24px 20px 18px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
		transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
	}

	.scope-card:hover {
		transform: translateY(-2px);
		border-color: #00aab5;
		box-shadow: 0 8px 20px rgba(0, 170, 181, 0.1);
	}

	.scope-icon-box {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background: #e6f7f8;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 14px;
	}

	.scope-card-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0 0 8px;
	}

	.scope-card-desc {
		font-size: 11.5px;
		line-height: 1.55;
		color: #64748b;
		margin: 0;
	}

	.scope-bottom {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}

	.scope-arrow-btn {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 1px solid #cbd5e1;
		color: #00aab5;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
	}

	.scope-card:hover .scope-arrow-btn {
		background: #00aab5;
		border-color: #00aab5;
		color: #ffffff;
		transform: translateX(2px);
	}

	@media (max-width: 868px) {
		.scope-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
