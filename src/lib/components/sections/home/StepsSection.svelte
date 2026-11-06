<!-- Section 5: 5 Tahap Pelaksanaan — navy banner kiri + white panel kanan dengan 5 steps -->
<section class="steps-section">
	<div class="steps-inner">
		<!-- Left navy column -->
		<div class="steps-left">
			<div class="steps-left-content">
				<div class="steps-badge">
					<span class="badge-dash"></span>
					<span class="badge-label">Layanan Pendidikan</span>
				</div>
				<h2 class="steps-heading">5 Tahap Pelaksanaan<br/>Program Kami</h2>
				<p class="steps-desc">
					Alur pendampingan yang sistematis, terukur, dan tepat sasaran untuk membantu Anda mencapai tujuan terbaik.
				</p>
				<a href="/layanan" class="steps-cta-btn">
					<span>Pelajari Selengkapnya</span>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
					</svg>
				</a>
			</div>
		</div>

		<!-- Right white panel: 5 steps -->
		<div class="steps-right">
			<div class="steps-list">
				<!-- Step 01 -->
				<div class="step-item">
					<div class="step-num-col">
						<div class="step-circle">01</div>
						<div class="step-connector"></div>
					</div>
					<div class="step-content">
						<h4 class="step-title">Konsultasi & Asesmen Kebutuhan</h4>
						<p class="step-desc">Pemetaan awal tujuan, minat, dan kondisi Anda untuk menentukan jalur terbaik.</p>
					</div>
				</div>

				<!-- Step 02 -->
				<div class="step-item">
					<div class="step-num-col">
						<div class="step-circle">02</div>
						<div class="step-connector"></div>
					</div>
					<div class="step-content">
						<h4 class="step-title">Pemetaan & Pemilihan Program</h4>
						<p class="step-desc">Seleksi program, beasiswa, atau layanan yang paling sesuai dengan profil Anda.</p>
					</div>
				</div>

				<!-- Step 03 -->
				<div class="step-item">
					<div class="step-num-col">
						<div class="step-circle">03</div>
						<div class="step-connector"></div>
					</div>
					<div class="step-content">
						<h4 class="step-title">Pendampingan & Pembangunan Berkas</h4>
						<p class="step-desc">Bimbingan intensif penyusunan dokumen, esai, dan materi pendukung aplikasi.</p>
					</div>
				</div>

				<!-- Step 04 -->
				<div class="step-item">
					<div class="step-num-col">
						<div class="step-circle">04</div>
						<div class="step-connector"></div>
					</div>
					<div class="step-content">
						<h4 class="step-title">Evaluasi & Umpan Balik</h4>
						<p class="step-desc">Review menyeluruh dan simulasi wawancara untuk memaksimalkan persiapan Anda.</p>
					</div>
				</div>

				<!-- Step 05 — no connector after last -->
				<div class="step-item step-last">
					<div class="step-num-col">
						<div class="step-circle step-circle-gold">05</div>
					</div>
					<div class="step-content">
						<h4 class="step-title">Tindak Lanjut & Pengembangan</h4>
						<p class="step-desc">Dukungan pasca-program untuk memastikan pertumbuhan dan dampak berkelanjutan.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.steps-section {
		background: #082442;
		width: 100%;
		overflow: hidden;
	}

	.steps-inner {
		display: flex;
		min-height: 420px;
		max-width: 1400px;
		margin: 0 auto;
	}

	/* LEFT: navy */
	.steps-left {
		flex: 0 0 42%;
		background: #082442;
		display: flex;
		align-items: center;
		padding: 60px 48px 60px clamp(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem), 80px);
		box-sizing: border-box;
	}

	.steps-left-content {
		max-width: 360px;
	}

	.steps-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 16px;
	}

	.badge-dash {
		width: 20px;
		height: 2.5px;
		background: #F5B331;
		border-radius: 2px;
	}

	.badge-label {
		color: #F5B331;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.steps-heading {
		font-size: clamp(1.5rem, 2.2vw, 2rem);
		font-weight: 800;
		color: #FFFFFF;
		line-height: 1.25;
		margin: 0 0 16px;
		letter-spacing: -0.02em;
	}

	.steps-desc {
		font-size: 14px;
		color: rgba(255,255,255,0.75);
		line-height: 1.65;
		margin: 0 0 28px;
	}

	.steps-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 10px 22px;
		background: #F5B331;
		color: #082442;
		font-weight: 700;
		font-size: 13.5px;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.3);
	}

	.steps-cta-btn:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	/* RIGHT: white panel */
	.steps-right {
		flex: 1;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 52px 56px 52px 52px;
		box-sizing: border-box;
		border-top-left-radius: 32px;
		border-bottom-left-radius: 32px;
		box-shadow: -8px 0 40px rgba(8, 36, 66, 0.12);
	}

	.steps-list {
		width: 100%;
	}

	/* Each step row */
	.step-item {
		display: flex;
		gap: 20px;
		position: relative;
	}

	.step-num-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
	}

	.step-circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, #079EAD 0%, #16B6C1 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: 800;
		color: #FFFFFF;
		flex-shrink: 0;
		box-shadow: 0 4px 12px rgba(7, 158, 173, 0.3);
	}

	.step-circle-gold {
		background: linear-gradient(135deg, #F5B331 0%, #F9C853 100%);
		color: #082442;
		box-shadow: 0 4px 12px rgba(245, 179, 49, 0.3);
	}

	.step-connector {
		width: 2px;
		flex: 1;
		min-height: 20px;
		background: linear-gradient(to bottom, #079EAD 0%, rgba(7, 158, 173, 0.15) 100%);
		margin: 4px 0;
	}

	.step-content {
		padding-top: 8px;
		padding-bottom: 20px;
		flex: 1;
	}

	.step-last .step-content {
		padding-bottom: 0;
	}

	.step-title {
		font-size: 14.5px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 5px;
		line-height: 1.3;
	}

	.step-desc {
		font-size: 13px;
		color: #52647A;
		margin: 0;
		line-height: 1.55;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.steps-inner {
			flex-direction: column;
		}
		.steps-left {
			flex: none;
			padding: 48px 2rem;
			border-radius: 0;
		}
		.steps-right {
			border-radius: 0;
			padding: 40px 2rem;
			box-shadow: none;
		}
		.steps-left-content {
			max-width: none;
		}
	}

	@media (max-width: 600px) {
		.steps-left {
			padding: 40px 1.25rem;
		}
		.steps-right {
			padding: 36px 1.25rem 48px;
		}
		.step-circle {
			width: 36px;
			height: 36px;
			font-size: 11px;
		}
	}
</style>

