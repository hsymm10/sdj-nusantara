<script lang="ts">
	// NilaiSection.svelte - Faithful to design/tentang-kami.png
</script>

<section class="nilai-section" id="nilai">
	<!-- Background image overlay -->
	<div class="nilai-bg-wrap">
		<img
			src="/images/about-hands-network.jpg"
			alt=""
			class="nilai-bg-img"
			loading="lazy"
		/>
		<div class="nilai-overlay"></div>
	</div>

	<!-- Swoosh teal bottom-right -->
	<svg class="nilai-swoosh-br" viewBox="0 0 240 100" fill="none" preserveAspectRatio="none">
		<path d="M0 100 C80 60 160 30 240 0 V100 H0 Z" fill="#00A6B2" fill-opacity="0.25"/>
		<path d="M60 100 C120 75 180 50 240 30 V100 H60 Z" fill="#16B6C1" fill-opacity="0.3"/>
	</svg>

	<div class="nilai-container">
		<div class="nilai-grid">
			<!-- Left Column: Title & CTA -->
			<div class="nilai-left">
				<div class="section-label">
					<span class="label-line"></span>
					<span class="label-text">Nilai-Nilai Luhur</span>
				</div>

				<h2 class="nilai-title">
					Integritas, Profesionalitas, Kolaborasi, dan Dampak Nyata
				</h2>

				<p class="nilai-desc">
					Nilai-nilai ini menjadi landasan dalam setiap langkah kami untuk menghadirkan solusi pendidikan terbaik.
				</p>

				<a href="#pendekatan" class="btn-gold">
					<span>Pelajari Nilai Kami</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Right Columns: 4 Value Items with Vertical Dividers -->
			<div class="nilai-items">
				<!-- Item 1: Integritas -->
				<div class="nilai-col">
					<div class="nilai-icon">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
							<polyline points="9 12 11 14 15 10"></polyline>
						</svg>
					</div>
					<h3 class="nilai-item-title">Integritas</h3>
					<p class="nilai-item-desc">Menjunjung tinggi kejujuran dan etika.</p>
				</div>

				<div class="nilai-vdivider"></div>

				<!-- Item 2: Profesionalitas -->
				<div class="nilai-col">
					<div class="nilai-icon">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					</div>
					<h3 class="nilai-item-title">Profesionalitas</h3>
					<p class="nilai-item-desc">Memberikan layanan dengan standar terbaik.</p>
				</div>

				<div class="nilai-vdivider"></div>

				<!-- Item 3: Kolaborasi -->
				<div class="nilai-col">
					<div class="nilai-icon">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 20.66l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.65z"></path>
						</svg>
					</div>
					<h3 class="nilai-item-title">Kolaborasi</h3>
					<p class="nilai-item-desc">Bersinergi untuk mencapai tujuan bersama.</p>
				</div>

				<div class="nilai-vdivider"></div>

				<!-- Item 4: Dampak Nyata -->
				<div class="nilai-col">
					<div class="nilai-icon">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
							<polyline points="17 6 23 6 23 12"></polyline>
						</svg>
					</div>
					<h3 class="nilai-item-title">Dampak Nyata</h3>
					<p class="nilai-item-desc">Berorientasi pada hasil yang berkelanjutan.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.nilai-section {
		position: relative;
		background: #082442;
		padding: 3.5rem 0 3.2rem;
		overflow: hidden;
	}

	.nilai-bg-wrap {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}

	.nilai-bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		opacity: 0.18;
	}

	.nilai-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 40%,
			rgba(8, 36, 66, 0.88) 70%,
			rgba(8, 36, 66, 0.8) 100%
		);
	}

	.nilai-swoosh-br {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 240px;
		height: 90px;
		z-index: 2;
		pointer-events: none;
	}

	.nilai-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.nilai-grid {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		gap: 3rem;
		align-items: center;
	}

	/* Left */
	.nilai-left {
		display: flex;
		flex-direction: column;
	}

	.section-label {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 0.5rem;
	}

	.label-line {
		width: 16px;
		height: 2px;
		background: #00A6B2;
	}

	.label-text {
		font-size: 11px;
		font-weight: 700;
		color: #00A6B2;
	}

	.nilai-title {
		font-size: 20px;
		font-weight: 800;
		color: #FFFFFF;
		line-height: 27px;
		margin: 0 0 0.85rem 0;
		letter-spacing: -0.01em;
	}

	.nilai-desc {
		font-size: 11.5px;
		line-height: 17.5px;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 1.35rem 0;
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
		align-self: flex-start;
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

	/* Right: 4 items */
	.nilai-items {
		display: flex;
		align-items: stretch;
		gap: 1.25rem;
	}

	.nilai-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.nilai-icon {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.65rem;
	}

	.nilai-item-title {
		font-size: 12.5px;
		font-weight: 700;
		color: #FFFFFF;
		margin: 0 0 0.35rem 0;
	}

	.nilai-item-desc {
		font-size: 10px;
		line-height: 14.5px;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
	}

	.nilai-vdivider {
		width: 1px;
		background: rgba(255, 255, 255, 0.15);
		margin: 0.5rem 0;
	}

	@media (max-width: 900px) {
		.nilai-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.nilai-items {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1.5rem;
		}
		.nilai-vdivider {
			display: none;
		}
	}
</style>
