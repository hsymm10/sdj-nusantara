<script lang="ts">
	// ProgramCustomSection.svelte - Replikasi presisi sesuai design/program.png
	const reasons = [
		'Materi relevan dan aplikatif',
		'Didampingi oleh mentor berpengalaman',
		'Pendekatan personal dan terstruktur',
		'Fleksibel (online & offline)',
		'Sertifikat dan laporan hasil program'
	];
</script>

<section class="program-custom-section">
	<!-- Gold swoosh decoration top-left (x 0→255, y 1665→1775) -->
	<svg class="deco-swoosh-left" viewBox="0 0 255 120" fill="none" preserveAspectRatio="none">
		<path
			d="M0 60 C80 60 160 20 255 0 L0 0 Z"
			fill="#F5B331"
			fill-opacity="0.3"
		/>
		<path
			d="M0 95 C90 95 180 40 255 0 L0 0 Z"
			fill="#F5B331"
			fill-opacity="0.5"
		/>
	</svg>

	<div class="custom-container">
		<div class="custom-grid">
			<!-- Left Column: Text & CTA (teks mulai x≈123) -->
			<div class="text-col">
				<h2 class="section-title">
					Program yang Disesuaikan<br />
					dengan Kebutuhan Anda
				</h2>

				<p class="section-desc">
					Kami juga membuka kesempatan untuk merancang program khusus<br />
					sesuai kebutuhan institusi, sekolah, atau organisasi Anda.
				</p>

				<a href="/konsultasi" class="btn-gold">
					<span>Diskusikan Program Khusus</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Middle Column: Fading Laptop Photo (x 585→1185, no box/border) -->
			<div class="image-col">
				<img
					src="/images/program-custom-laptop.jpg"
					alt="Program Disesuaikan"
					class="custom-laptop-img"
					loading="lazy"
				/>
				<!-- Soft gradient fade left and right into background -->
				<div class="fade-overlay-left"></div>
				<div class="fade-overlay-right"></div>

				<!-- Thin gold curve on right edge of photo (x 1110→1185) -->
				<svg class="gold-curve-right" viewBox="0 0 40 160" fill="none" preserveAspectRatio="none">
					<path d="M0 0 C25 50 35 110 40 160" stroke="#F5B331" stroke-width="2.5" />
				</svg>
			</div>

			<!-- Right Column: White Card "Mengapa Memilih Program Kami?" (x 1150→1492) -->
			<div class="card-col">
				<div class="why-card">
					<h3 class="why-title">Mengapa Memilih Program Kami?</h3>
					<ul class="why-list">
						{#each reasons as item}
							<li>
								<div class="check-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<span class="why-item-text">{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.program-custom-section {
		position: relative;
		background: #F4F8FB;
		width: 100%;
		height: 218px;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	.deco-swoosh-left {
		position: absolute;
		top: 0;
		left: 0;
		width: 255px;
		height: 110px;
		pointer-events: none;
		z-index: 1;
	}

	.custom-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.custom-container {
			max-width: 1500px;
		}
	}

	.custom-grid {
		display: grid;
		grid-template-columns: 1.25fr 1.1fr 1fr;
		align-items: center;
		gap: 1.5rem;
	}

	/* Text Column */
	.text-col {
		padding-left: 1.5rem;
	}

	.section-title {
		font-size: clamp(20px, 1.8vw, 24px);
		line-height: 1.18;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.5rem 0;
		letter-spacing: -0.015em;
	}

	.section-desc {
		font-size: 12.5px;
		line-height: 1.45;
		color: #183553;
		margin: 0 0 1rem 0;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		background: #F5B331;
		color: #071D36;
		width: 235px;
		height: 42px;
		font-size: 13px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.28);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 14px;
	}

	/* Image Column (fading into background) */
	.image-col {
		position: relative;
		height: 185px;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.custom-laptop-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.fade-overlay-left {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 60px;
		background: linear-gradient(90deg, #F4F8FB 0%, rgba(244, 248, 251, 0) 100%);
	}

	.fade-overlay-right {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 60px;
		background: linear-gradient(270deg, #F4F8FB 0%, rgba(244, 248, 251, 0) 100%);
	}

	.gold-curve-right {
		position: absolute;
		top: 10px;
		right: 15px;
		width: 35px;
		height: 160px;
		pointer-events: none;
	}

	/* Right Card: Mengapa Memilih Program Kami? */
	.card-col {
		display: flex;
		justify-content: flex-end;
	}

	.why-card {
		background: #FFFFFF;
		width: 100%;
		max-width: 320px;
		border-radius: 21px;
		padding: 16px 20px;
		box-shadow: 0 6px 22px rgba(11, 39, 71, 0.07);
		border: 1px solid rgba(226, 232, 240, 0.8);
		box-sizing: border-box;
	}

	.why-title {
		font-size: 13px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px 0;
		letter-spacing: -0.01em;
	}

	.why-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.why-list li {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.check-icon-teal {
		width: 17px;
		height: 17px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.why-item-text {
		font-size: 11.5px;
		font-weight: 500;
		color: #082442;
		line-height: 1.25;
	}

	@media (max-width: 1099px) {
		.program-custom-section {
			height: auto;
			padding: 2.5rem 0;
		}

		.custom-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.text-col {
			padding-left: 0;
		}

		.image-col {
			height: 220px;
		}

		.card-col {
			justify-content: flex-start;
		}

		.why-card {
			max-width: 100%;
		}
	}
</style>
