<!-- Section C: Tentang Layanan Hukum (Sesuai Mockup & Instruksi User: Tanpa Gambar Gedung) -->
<script lang="ts">
	const features = [
		{
			title: 'Pendampingan Terarah',
			desc: 'Bimbingan hukum yang terstruktur dan terfokus pada solusi institusi.',
			icon: 'shield'
		},
		{
			title: 'Pendekatan Berbasis Kebutuhan',
			desc: 'Menyesuaikan telaah dan konsultasi dengan karakteristik tata kelola Anda.',
			icon: 'users'
		},
		{
			title: 'Sesuai Regulasi Pendidikan',
			desc: 'Selaras dengan regulasi kementerian, standar akreditasi, dan perundang-undangan.',
			icon: 'doc'
		}
	];
</script>

<section class="about-legal-section">
	<div class="about-legal-container">
		<!-- Left Column: Information, Heading, Description, Disclaimer Box -->
		<div class="about-left-col">
			<div class="section-tag">
				<span class="tag-dash"></span>
				<span class="tag-label">TENTANG LAYANAN</span>
			</div>

			<h2 class="about-title">Layanan Hukum SDJNusantara</h2>

			<p class="about-desc">
				Layanan konsultasi regulasi, telaah kepatuhan, serta pendampingan tata kelola hukum bagi institusi pendidikan, organisasi, maupun korporasi di bidang pendidikan.
			</p>

			<!-- Legal Disclaimer Box with Cyan Left Accent -->
			<div class="disclaimer-box">
				<div class="disclaimer-icon-wrap" aria-hidden="true">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10"/>
						<line x1="12" y1="16" x2="12" y2="12"/>
						<line x1="12" y1="8" x2="12.01" y2="8"/>
					</svg>
				</div>
				<p class="disclaimer-text">
					Informasi pada halaman ini bersifat umum dan bukan nasihat hukum. Hubungan penasihat-klien baru terbentuk setelah ada kesepakatan tertulis.
				</p>
			</div>
		</div>

		<!-- Right Column: 3 Feature Cards (Clean, Balanced & Without Building Photo) -->
		<div class="about-right-col">
			<div class="features-list">
				{#each features as feat}
					<div class="feat-card">
						<div class="feat-icon-box">
							{#if feat.icon === 'shield'}
								<!-- Shield check -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
									<polyline points="9 12 11 14 15 10"/>
								</svg>
							{:else if feat.icon === 'users'}
								<!-- Users / team -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
									<circle cx="9" cy="7" r="4"/>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
								</svg>
							{:else}
								<!-- Document / regulation -->
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
									<polyline points="14 2 14 8 20 8"/>
									<line x1="16" y1="13" x2="8" y2="13"/>
									<line x1="16" y1="17" x2="8" y2="17"/>
									<polyline points="10 9 9 9 8 9"/>
								</svg>
							{/if}
						</div>
						<div class="feat-content">
							<h3 class="feat-title">{feat.title}</h3>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.about-legal-section {
		background: #ffffff;
		padding: 30px 0 54px;
	}

	.about-legal-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 48px;
	}

	/* Left Column */
	.about-left-col {
		flex: 1.15;
		max-width: 520px;
	}

	.section-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.tag-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.tag-label {
		font-size: 11px;
		font-weight: 700;
		color: #079ead;
		letter-spacing: 0.5px;
	}

	.about-title {
		font-size: 25px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.3px;
	}

	.about-desc {
		font-size: 12.5px;
		line-height: 1.65;
		color: #64748b;
		margin: 0 0 22px;
	}

	/* Disclaimer Box */
	.disclaimer-box {
		background: #f4f8fb;
		border-left: 3.5px solid #00aab5;
		border-radius: 0 8px 8px 0;
		padding: 13px 16px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
	}

	.disclaimer-icon-wrap {
		flex-shrink: 0;
		margin-top: 1px;
	}

	.disclaimer-text {
		font-size: 11px;
		line-height: 1.55;
		color: #475569;
		margin: 0;
	}

	/* Right Column: 3 Cards Clean */
	.about-right-col {
		flex: 0.95;
		max-width: 440px;
	}

	.features-list {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.feat-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		padding: 14px 18px;
		display: flex;
		align-items: center;
		gap: 14px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
		transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
	}

	.feat-card:hover {
		transform: translateY(-1px);
		border-color: #00aab5;
		box-shadow: 0 6px 16px rgba(0, 170, 181, 0.1);
	}

	.feat-icon-box {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background: #e6f7f8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.feat-content {
		display: flex;
		flex-direction: column;
	}

	.feat-title {
		font-size: 13px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0;
	}

	@media (max-width: 868px) {
		.about-legal-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 32px;
		}

		.about-left-col,
		.about-right-col {
			max-width: 100%;
			width: 100%;
		}
	}
</style>
