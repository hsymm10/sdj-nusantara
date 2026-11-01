<script lang="ts">
	// ProgramCustomSection.svelte - Faithful to design/program.png
	const reasons = [
		'Materi relevan dan aplikatif',
		'Didampingi oleh mentor berpengalaman',
		'Pendekatan personal dan terstruktur',
		'Fleksibel (online & offline)',
		'Sertifikat dan laporan hasil program'
	];
</script>

<section class="program-custom-section">
	<!-- Gold swoosh decoration top-left -->
	<svg class="deco-swoosh" viewBox="0 0 240 120" fill="none" preserveAspectRatio="none">
		<path
			d="M0 60 C80 60 140 20 240 0 L0 0 Z"
			fill="#F4B334"
			fill-opacity="0.25"
		/>
		<path
			d="M0 90 C90 90 160 40 240 0 L0 0 Z"
			fill="#F4B334"
			fill-opacity="0.45"
		/>
	</svg>

	<div class="custom-container">
		<div class="custom-grid">
			<!-- Left Column: Text & CTA -->
			<div class="text-col">
				<h2 class="section-title">
					Program yang Disesuaikan<br />
					dengan Kebutuhan Anda
				</h2>

				<p class="section-desc">
					Kami juga membuka kesempatan untuk merancang program khusus sesuai kebutuhan institusi, sekolah, atau organisasi Anda.
				</p>

				<a href="#kontak" class="btn-gold">
					<span>Diskusikan Program Khusus</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Middle Column: Fading Laptop Photo -->
			<div class="image-col">
				<img
					src="/images/program-custom-laptop.jpg"
					alt="Program Disesuaikan"
					class="custom-laptop-img"
					loading="lazy"
				/>
				<div class="fade-overlay"></div>
			</div>

			<!-- Right Column: White Card "Mengapa Memilih Program Kami?" -->
			<div class="card-col">
				<div class="why-card">
					<h3 class="why-title">Mengapa Memilih Program Kami?</h3>
					<ul class="why-list">
						{#each reasons as item}
							<li>
								<div class="check-icon">
									<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<span>{item}</span>
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
		background: #F8FAFC;
		padding: 3.5rem 0;
		overflow: hidden;
		border-top: 1px solid #E2E8F0;
	}

	.deco-swoosh {
		position: absolute;
		top: 0;
		left: 0;
		width: 260px;
		height: 120px;
		pointer-events: none;
		z-index: 1;
	}

	.custom-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.custom-grid {
		display: grid;
		grid-template-columns: 1.15fr 0.95fr 1fr;
		align-items: center;
		gap: 1.5rem;
	}

	/* Text Col */
	.text-col {
		padding-right: 0.5rem;
	}

	.section-title {
		font-size: 21px;
		line-height: 27px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.85rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #556B82;
		margin: 0 0 1.5rem 0;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F4B334;
		color: #071D36;
		padding: 7px 18px;
		font-size: 11px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		box-shadow: 0 2px 8px rgba(244, 179, 52, 0.25);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
	}

	/* Image Col */
	.image-col {
		position: relative;
		height: 190px;
		border-radius: 12px;
		overflow: hidden;
	}

	.custom-laptop-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.fade-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			rgba(248, 250, 252, 0.1) 0%,
			rgba(248, 250, 252, 0) 40%,
			rgba(248, 250, 252, 0.4) 80%,
			rgba(248, 250, 252, 0.95) 100%
		);
	}

	/* Card Col */
	.card-col {
		width: 100%;
	}

	.why-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 1.5rem 1.35rem;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.06);
	}

	.why-title {
		font-size: 12.5px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 1rem 0;
	}

	.why-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.why-list li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 10.5px;
		color: #334155;
		font-weight: 600;
	}

	.check-icon {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.custom-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.image-col {
			height: 220px;
		}
	}
</style>
