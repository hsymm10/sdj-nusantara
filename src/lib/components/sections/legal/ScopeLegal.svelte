<!-- Section D: Ruang Lingkup Layanan Hukum (Sesuai Mockup & Kepatuhan) -->
<script lang="ts">
	const scopes = [
		{
			title: 'Penyusunan & Penelaahan Kontrak/MOU',
			desc: 'Pembuatan, peninjauan, dan optimalisasi perjanjian kerja sama institusi secara profesional.',
			icon: 'contract'
		},
		{
			title: 'Kepatuhan Regulasi & Kebijakan Kampus',
			desc: 'Pendampingan pemenuhan regulasi pendidikan nasional dan tata kelola institusi.',
			icon: 'gavel'
		},
		{
			title: 'Pendampingan Hukum Terstruktur',
			desc: 'Konsultasi dan pendampingan hukum berkelanjutan sesuai kebutuhan institusi.',
			icon: 'scales'
		}
	];
</script>

<section id="ruang-lingkup" class="scope-legal-section">
	<div class="scope-legal-container">
		<!-- Section Header Terpusat (Rata Tengah) -->
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
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
									<polyline points="14 2 14 8 20 8"/>
									<line x1="16" y1="13" x2="8" y2="13"/>
									<line x1="16" y1="17" x2="8" y2="17"/>
									<polyline points="10 9 9 9 8 9"/>
								</svg>
							{:else if item.icon === 'gavel'}
								<!-- Gavel / Campus policy -->
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 13l-4 4"/>
									<path d="M16 11l-8 8"/>
									<path d="M14.5 4.5l5 5-2 2-5-5 2-2z"/>
									<path d="M2.5 16.5l5 5 2-2-5-5-2 2z"/>
									<path d="M6 21h12"/>
								</svg>
							{:else}
								<!-- Scales of justice -->
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 3v18M6 8l6-2 6 2M6 8l-3 7h6l-3-7zm12 0l-3 7h6l-3-7z"/>
									<path d="M4 21h16"/>
								</svg>
							{/if}
						</div>

						<h3 class="scope-card-title">{item.title}</h3>
						<p class="scope-card-desc">{item.desc}</p>
					</div>

					<div class="scope-bottom">
						<a href="/kontak" class="scope-arrow-btn" aria-label="Konsultasi {item.title}">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
		padding: 44px 0 52px;
	}

	.scope-legal-container {
		width: 93%;
		max-width: 1360px;
		margin: 0 auto;
	}

	.scope-header {
		text-align: center;
		margin-bottom: 34px;
	}

	.scope-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.8px;
	}

	.scope-title {
		font-size: 30px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px;
	}

	.scope-sub {
		font-size: 14.5px;
		color: #64748b;
		margin: 0;
	}

	/* 3 Cards Grid */
	.scope-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.scope-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		padding: 28px 24px 22px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 4px 14px rgba(8, 36, 66, 0.04);
		transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
		min-height: 220px;
	}

	.scope-card:hover {
		transform: translateY(-2px);
		border-color: #00aab5;
		box-shadow: 0 10px 26px rgba(0, 170, 181, 0.12);
	}

	.scope-icon-box {
		width: 46px;
		height: 46px;
		border-radius: 10px;
		background: #eaf7f9;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 16px;
	}

	.scope-card-title {
		font-size: 16px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0 0 10px;
	}

	.scope-card-desc {
		font-size: 13.5px;
		line-height: 1.6;
		color: #64748b;
		margin: 0;
	}

	.scope-bottom {
		display: flex;
		justify-content: flex-end;
		margin-top: 22px;
	}

	.scope-arrow-btn {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1.5px solid #00aab5;
		color: #00aab5;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: background 0.2s, color 0.2s, transform 0.2s;
	}

	.scope-card:hover .scope-arrow-btn {
		background: #00aab5;
		color: #ffffff;
		transform: translateX(2px);
	}

	@media (max-width: 900px) {
		.scope-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
