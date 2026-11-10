<!-- Section D: Ruang Lingkup Layanan Hukum — Mengikuti Mockup Referensi dengan Teks Existing -->
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

<section id="ruang-lingkup" class="scope-legal-section" aria-labelledby="scope-legal-heading">
	<div class="scope-legal-container">
		<!-- Section Header Terpusat -->
		<div class="scope-header">
			<div class="scope-badge">
				<span class="badge-dash" aria-hidden="true"></span>
				<span class="badge-text">RUANG LINGKUP LAYANAN</span>
				<span class="badge-dash" aria-hidden="true"></span>
			</div>
			<h2 id="scope-legal-heading" class="scope-title">Ruang Lingkup Layanan Hukum</h2>
			<p class="scope-sub">
				Berbagai layanan pendampingan hukum yang dirancang untuk memenuhi kebutuhan institusi pendidikan Anda.
			</p>
		</div>

		<!-- 3 Cards Grid Sejajar -->
		<div class="scope-grid">
			{#each scopes as item}
				<div class="scope-card">
					<!-- Wave dekoratif teal + emas di bagian bawah kartu -->
					<svg class="scope-card-wave" viewBox="0 0 360 34" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M0 34 C95 28, 215 18, 360 4 L360 34 Z" fill="#D5F3F7" fill-opacity="0.6" />
						<path d="M125 34 C198 28, 268 18, 330 8 L340 34 Z" fill="#00AAB5" fill-opacity="0.82" />
						<path d="M240 34 C285 26, 325 18, 360 6 L360 34 Z" fill="#FFB21C" fill-opacity="0.88" />
					</svg>

					<div class="scope-top">
						<div class="scope-icon-box" aria-hidden="true">
							{#if item.icon === 'contract'}
								<!-- File Text -->
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
									<polyline points="14 2 14 8 20 8" />
									<line x1="16" y1="13" x2="8" y2="13" />
									<line x1="16" y1="17" x2="8" y2="17" />
									<polyline points="10 9 9 9 8 9" />
								</svg>
							{:else if item.icon === 'gavel'}
								<!-- Gavel -->
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 13l-4 4" />
									<path d="M16 11l-8 8" />
									<path d="M14.5 4.5l5 5-2 2-5-5 2-2z" />
									<path d="M2.5 16.5l5 5 2-2-5-5-2 2z" />
									<path d="M6 21h12" />
								</svg>
							{:else}
								<!-- Scale -->
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 3v18M6 8l6-2 6 2M6 8l-3 7h6l-3-7zm12 0l-3 7h6l-3-7z" />
									<path d="M4 21h16" />
								</svg>
							{/if}
						</div>

						<h3 class="scope-card-title">{item.title}</h3>
						<p class="scope-card-desc">{item.desc}</p>
					</div>

					<div class="scope-bottom">
						<a href="/kontak" class="scope-arrow-btn" aria-label="Konsultasi {item.title}">
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
								<line x1="5" y1="12" x2="19" y2="12" />
								<polyline points="12 5 19 12 12 19" />
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
		position: relative;
		background: #FFFFFF;
		padding: 32px 0 44px;
		overflow: hidden;
		box-sizing: border-box;
	}

	.scope-legal-container {
		position: relative;
		z-index: 2;
		width: 92%;
		max-width: 1200px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.scope-header {
		text-align: center;
		margin-bottom: 36px;
	}

	.scope-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 22px;
		height: 2px;
		background: #00AAB5;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #00AAB5;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.scope-title {
		font-size: 29px;
		font-weight: 800;
		color: #092B4A;
		margin: 0 0 8px;
		line-height: 1.24;
		letter-spacing: -0.015em;
	}

	.scope-sub {
		font-size: 14px;
		color: #71839A;
		margin: 0;
		line-height: 1.5;
	}

	/* 3 Cards Grid */
	.scope-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-auto-rows: 1fr;
		gap: 22px;
	}

	.scope-card {
		position: relative;
		overflow: hidden;
		background: #FFFFFF;
		border: 1px solid #DCE7F1;
		border-radius: 16px;
		padding: 24px 24px 28px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		min-height: 224px;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.04);
		box-sizing: border-box;
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}

	.scope-card:hover {
		transform: translateY(-2px);
		border-color: #00AAB5;
		box-shadow: 0 12px 28px rgba(0, 170, 181, 0.11);
	}

	.scope-card-wave {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 18px;
		pointer-events: none;
		z-index: 1;
	}

	.scope-top {
		position: relative;
		z-index: 2;
	}

	.scope-icon-box {
		width: 46px;
		height: 46px;
		border-radius: 12px;
		background: #E8F7F9;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 16px;
	}

	.scope-card-title {
		font-size: 15.5px;
		font-weight: 700;
		color: #092B4A;
		line-height: 1.38;
		margin: 0 0 10px;
	}

	.scope-card-desc {
		font-size: 13px;
		line-height: 1.58;
		color: #71839A;
		margin: 0;
	}

	.scope-bottom {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}

	.scope-arrow-btn {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 1.5px solid #00AAB5;
		color: #00AAB5;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
	}

	.scope-card:hover .scope-arrow-btn {
		background: #00AAB5;
		color: #FFFFFF;
		transform: translateX(2px);
	}

	@media (max-width: 980px) {
		.scope-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.scope-card:last-child {
			grid-column: 1 / -1;
			max-width: 460px;
			width: 100%;
			justify-self: center;
		}
	}

	@media (max-width: 640px) {
		.scope-legal-section {
			padding: 36px 0 44px;
		}

		.scope-title {
			font-size: 24px;
		}

		.scope-grid {
			grid-template-columns: minmax(0, 1fr);
			gap: 16px;
		}

		.scope-card {
			min-height: 0;
		}

		.scope-card:last-child {
			grid-column: auto;
			max-width: none;
		}
	}
</style>
