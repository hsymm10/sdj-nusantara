<script lang="ts">
	// PendekatanSection.svelte - Faithful to design/tentang-kami.png
</script>

<section class="pendekatan-section" id="pendekatan">
	<!-- Left photo fading into white -->
	<div class="photo-fade-wrap">
		<img
			src="/images/about-laptop-desk.jpg"
			alt="Ruang Kerja Konsultasi"
			class="photo-fade-img"
			loading="lazy"
		/>
		<div class="photo-fade-mask"></div>

		<!-- Teal swoosh top-left -->
		<svg class="swoosh-tl" viewBox="0 0 160 120" fill="none" preserveAspectRatio="none">
			<path d="M0 0 H120 C80 50 30 100 0 120 Z" fill="#00A6B2" fill-opacity="0.35"/>
		</svg>
	</div>

	<div class="pendekatan-container">
		<div class="pendekatan-grid">
			<!-- Empty spacer for left photo -->
			<div class="spacer-col"></div>

			<!-- Center Column: Heading & Desc -->
			<div class="pendekatan-content">
				<div class="section-label">
					<span class="label-line"></span>
					<span class="label-text">Pendekatan Kami</span>
				</div>

				<h2 class="pendekatan-title">
					Pendekatan Berbasis Kebutuhan & Hasil Nyata
				</h2>

				<p class="pendekatan-desc">
					Kami mengutamakan pendekatan yang berfokus pada kebutuhan klien dengan strategi yang terukur, sehingga setiap program memberikan hasil yang nyata dan berkelanjutan.
				</p>
			</div>

			<!-- Vertical Divider -->
			<div class="center-vdivider"></div>

			<!-- Right Column: 4 Checkmarks -->
			<div class="pendekatan-checks">
				<ul class="checks-list">
					<li>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<span>Analisis kebutuhan mendalam</span>
					</li>
					<li>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<span>Program yang terstruktur dan terarah</span>
					</li>
					<li>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<span>Pendampingan profesional</span>
					</li>
					<li>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<span>Evaluasi dan pengukuran dampak</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.pendekatan-section {
		position: relative;
		background: #FFFFFF;
		padding: 3rem 0;
		overflow: hidden;
		border-bottom: 1px solid #E2E8F0;
	}

	.photo-fade-wrap {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 38%;
		z-index: 1;
		pointer-events: none;
	}

	.photo-fade-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
		display: block;
	}

	.photo-fade-mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			transparent 0%,
			transparent 70%,
			rgba(255, 255, 255, 0.8) 90%,
			#FFFFFF 100%
		);
	}

	.swoosh-tl {
		position: absolute;
		top: 0;
		left: 0;
		width: 130px;
		height: 90px;
		z-index: 2;
	}

	.pendekatan-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.pendekatan-grid {
		display: grid;
		grid-template-columns: 280px 1.2fr auto 1.1fr;
		gap: 1.75rem;
		align-items: center;
	}

	.spacer-col {
		width: 100%;
	}

	.pendekatan-content {
		display: flex;
		flex-direction: column;
	}

	.section-label {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 0.4rem;
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

	.pendekatan-title {
		font-size: 19px;
		font-weight: 800;
		color: #082442;
		line-height: 25px;
		margin: 0 0 0.65rem 0;
		letter-spacing: -0.01em;
	}

	.pendekatan-desc {
		font-size: 11px;
		line-height: 17px;
		color: #475569;
		margin: 0;
	}

	.center-vdivider {
		width: 1px;
		height: 75px;
		background: #E2E8F0;
	}

	.checks-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.checks-list li {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 11px;
		font-weight: 600;
		color: #1E293B;
	}

	@media (max-width: 1024px) {
		.pendekatan-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		.photo-fade-wrap,
		.center-vdivider,
		.spacer-col {
			display: none;
		}
	}
</style>
