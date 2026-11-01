<script lang="ts">
	// PendekatanSection.svelte - Faithful to design/tentang-kami.png
</script>

<section class="pendekatan-section" id="pendekatan">
	<!-- Left photo fading into white -->
	<div class="photo-fade-wrap">
		<img
			src="/images/about-laptop-desk-hd.jpg"
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
				<div class="section-label">— Pendekatan Kami</div>

				<h2 class="pendekatan-title">
					Pendekatan Berbasis<br />
					Kebutuhan & Hasil Nyata
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
		height: 198px;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		border-bottom: 1px solid #EAF0F6;
	}

	.photo-fade-wrap {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 40%;
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
			transparent 65%,
			rgba(255, 255, 255, 0.85) 88%,
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
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.pendekatan-container {
			max-width: 1500px;
		}
	}

	.pendekatan-grid {
		display: grid;
		grid-template-columns: 460px 1.25fr auto 1.15fr;
		gap: 2.2rem;
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
		font-size: 13px;
		font-weight: 600;
		color: #00A6B2;
		margin-bottom: 0.3rem;
		letter-spacing: 0;
	}

	.pendekatan-title {
		font-size: clamp(18px, 1.55vw, 22px);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 0.5rem 0;
		letter-spacing: -0.01em;
	}

	.pendekatan-desc {
		font-size: 11.5px;
		line-height: 1.5;
		color: #475569;
		margin: 0;
		max-width: 380px;
		text-wrap: pretty;
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
		gap: 0.55rem;
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
		.pendekatan-section {
			height: auto;
			padding: 2.5rem 0;
		}
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
