<!-- Section C: Tentang Layanan Hukum — 3 Kolom Horizontal (Sesuai Mockup Referensi) -->
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
		<!-- Kolom 1 (Kiri ~42%): Label, Heading, Deskripsi, Disclaimer -->
		<div class="about-col-left">
			<div class="section-tag">
				<span class="tag-dash"></span>
				<span class="tag-label">TENTANG LAYANAN</span>
			</div>

			<h2 class="about-title">Layanan Hukum SDJNusantara</h2>

			<p class="about-desc">
				Layanan konsultasi regulasi, telaah kepatuhan, serta pendampingan tata kelola hukum bagi institusi pendidikan, organisasi, maupun korporasi di bidang pendidikan.
			</p>

			<!-- Disclaimer Box with Left Cyan Border -->
			<div class="disclaimer-box">
				<div class="disclaimer-icon-wrap" aria-hidden="true">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00AAB5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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

		<!-- Kolom 2 (Tengah ~28%): Gambar Gedung Institusi Pendidikan dengan Lengkungan Khas & Pita Sudut -->
		<div class="about-col-center">
			<div class="building-photo-frame">
				<img
					src="/images/about-campus-hd.jpg"
					alt="Gedung Institusi Pendidikan SDJNusantara"
					class="building-img"
				/>
				<!-- Ornamen pita lengkung kuning emas & tosca di sudut kanan bawah -->
				<svg class="building-corner-ribbon" viewBox="0 0 100 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M35 65C65 60 90 42 100 12V65H35Z" fill="#F5B331" />
					<path d="M60 65C80 63 94 52 100 32V65H60Z" fill="#00AAB5" />
				</svg>
			</div>
		</div>

		<!-- Kolom 3 (Kanan ~28%): Tiga Card Keunggulan Vertikal Ramping & Seragam -->
		<div class="about-col-right">
			<div class="features-vertical-list">
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
						<div class="feat-title">{feat.title}</div>
					</div>
				{/each}
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
		gap: 24px;
	}

	/* Kolom 1 (Kiri ~42%) */
	.about-col-left {
		flex: 1.4;
		max-width: 440px;
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
		font-size: 23px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px;
		letter-spacing: -0.3px;
	}

	.about-desc {
		font-size: 11.5px;
		line-height: 1.6;
		color: #64748b;
		margin: 0 0 16px;
	}

	/* Disclaimer Box */
	.disclaimer-box {
		background: #f4f8fb;
		border-left: 3px solid #00aab5;
		border-radius: 0 6px 6px 0;
		padding: 10px 14px;
		display: flex;
		align-items: flex-start;
		gap: 10px;
	}

	.disclaimer-icon-wrap {
		flex-shrink: 0;
		margin-top: 1px;
	}

	.disclaimer-text {
		font-size: 10px;
		line-height: 1.5;
		color: #475569;
		margin: 0;
	}

	/* Kolom 2 (Tengah ~28%): Gambar Gedung */
	.about-col-center {
		flex: 0.95;
		max-width: 290px;
		height: 175px;
	}

	.building-photo-frame {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 70px 10px 10px 10px;
		overflow: hidden;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
	}

	.building-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.building-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 85px;
		height: 52px;
		pointer-events: none;
	}

	/* Kolom 3 (Kanan ~28%): 3 Cards Vertikal */
	.about-col-right {
		flex: 0.95;
		max-width: 280px;
	}

	.features-vertical-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		height: 175px;
		justify-content: space-between;
	}

	.feat-card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		padding: 8px 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
		transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
		flex: 1;
	}

	.feat-card:hover {
		transform: translateY(-1px);
		border-color: #00aab5;
		box-shadow: 0 4px 12px rgba(0, 170, 181, 0.1);
	}

	.feat-icon-box {
		width: 30px;
		height: 30px;
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

	@media (max-width: 900px) {
		.about-legal-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;
		}

		.about-col-left,
		.about-col-center,
		.about-col-right {
			max-width: 100%;
			width: 100%;
		}

		.about-col-center {
			height: 200px;
		}

		.features-vertical-list {
			height: auto;
		}
	}
</style>
