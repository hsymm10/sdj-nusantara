<!-- Section C: Tentang Layanan Hukum (Sesuai Mockup Referensi) -->
<script lang="ts">
	const features = [
		{
			title: 'Pendampingan Terarah',
			icon: 'shield'
		},
		{
			title: 'Pendekatan Berbasis Kebutuhan',
			icon: 'users'
		},
		{
			title: 'Sesuai Regulasi Pendidikan',
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

		<!-- Right Column: Curved Building Photo + 3 Feature Cards (Mockup Layout) -->
		<div class="about-right-col">
			<div class="right-panel-wrapper">
				<!-- Building photo with curved top-left and gold/teal corner ribbon -->
				<div class="building-frame">
					<img
						src="/images/about-campus-hd.jpg"
						alt="Gedung Institusi Pendidikan SDJNusantara"
						class="building-img"
					/>
					<!-- Corner Ribbon Decoration at bottom-right -->
					<svg class="building-deco-ribbon" viewBox="0 0 110 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M40 70C70 65 95 45 110 15V70H40Z" fill="#F5B331" />
						<path d="M65 70C85 68 100 55 110 35V70H65Z" fill="#079EAD" />
					</svg>
				</div>

				<!-- 3 Feature Cards Column -->
				<div class="features-list">
					{#each features as feat}
						<div class="feat-card">
							<div class="feat-icon-box">
								{#if feat.icon === 'shield'}
									<!-- Shield check -->
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
										<polyline points="9 12 11 14 15 10"/>
									</svg>
								{:else if feat.icon === 'users'}
									<!-- Users / team -->
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
										<circle cx="9" cy="7" r="4"/>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
									</svg>
								{:else}
									<!-- Document / regulation -->
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
										<polyline points="14 2 14 8 20 8"/>
										<line x1="16" y1="13" x2="8" y2="13"/>
										<line x1="16" y1="17" x2="8" y2="17"/>
										<polyline points="10 9 9 9 8 9"/>
									</svg>
								{/if}
							</div>
							<h3 class="feat-title">{feat.title}</h3>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-legal-section {
		background: #ffffff;
		padding: 24px 0 46px;
	}

	.about-legal-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
	}

	/* Left Column */
	.about-left-col {
		flex: 1;
		max-width: 470px;
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
		font-size: 24px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.3px;
	}

	.about-desc {
		font-size: 12px;
		line-height: 1.6;
		color: #64748b;
		margin: 0 0 20px;
	}

	/* Disclaimer Box */
	.disclaimer-box {
		background: #f4f8fb;
		border-left: 3.5px solid #00aab5;
		border-radius: 0 8px 8px 0;
		padding: 12px 14px;
		display: flex;
		align-items: flex-start;
		gap: 10px;
	}

	.disclaimer-icon-wrap {
		flex-shrink: 0;
		margin-top: 1px;
	}

	.disclaimer-text {
		font-size: 10.5px;
		line-height: 1.5;
		color: #475569;
		margin: 0;
	}

	/* Right Column */
	.about-right-col {
		flex: 1.15;
		max-width: 530px;
	}

	.right-panel-wrapper {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	/* Building photo */
	.building-frame {
		position: relative;
		flex: 1.1;
		height: 195px;
		border-radius: 80px 12px 12px 12px;
		overflow: hidden;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
	}

	.building-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.building-deco-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 90px;
		height: 55px;
		pointer-events: none;
	}

	/* 3 Feature cards */
	.features-list {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.feat-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		padding: 10px 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.feat-card:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
	}

	.feat-icon-box {
		width: 32px;
		height: 32px;
		border-radius: 6px;
		background: #e6f7f8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.feat-title {
		font-size: 11px;
		font-weight: 700;
		color: #082442;
		line-height: 1.3;
		margin: 0;
	}

	@media (max-width: 868px) {
		.about-legal-container {
			flex-direction: column;
			align-items: flex-start;
		}

		.about-left-col,
		.about-right-col {
			max-width: 100%;
			width: 100%;
		}

		.right-panel-wrapper {
			flex-direction: column;
		}

		.building-frame {
			width: 100%;
			height: 200px;
		}

		.features-list {
			width: 100%;
		}
	}
</style>
