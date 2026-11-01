<script lang="ts">
	// VisiMisiSection.svelte - Faithful to design/tentang-kami.png
</script>

<section class="visi-misi-section" id="visi-misi">
	<div class="visi-misi-container">
		<div class="visi-misi-grid">
			<!-- Left: Intro & Heading -->
			<div class="visi-misi-left">
				<div class="section-label">
					<span class="label-line"></span>
					<span class="label-text">Visi & Misi</span>
				</div>

				<h2 class="section-heading">
					Menjadi mitra terpercaya dalam pengembangan talenta anak bangsa untuk masa depan yang lebih baik.
				</h2>

				<p class="section-desc">
					Kami berkomitmen untuk terus berinovasi dan memberikan solusi pendidikan terbaik bagi individu, institusi, dan masyarakat.
				</p>

				<a href="#nilai" class="btn-gold">
					<span>Pelajari Visi Misi Kami</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Right: 2 White Cards -->
			<div class="visi-misi-cards">
				<!-- Visi Card -->
				<div class="vm-card">
					<div class="vm-icon-circle">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
							<circle cx="12" cy="12" r="3"></circle>
						</svg>
					</div>

					<h3 class="vm-card-title">Visi</h3>

					<p class="vm-card-text">
						Menjadi mitra terpercaya dalam pengembangan talenta anak bangsa untuk pendidikan yang lebih inklusif, adaptif, dan berkelanjutan.
					</p>
				</div>

				<!-- Misi Card -->
				<div class="vm-card">
					<div class="vm-icon-circle">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="6"></circle>
							<circle cx="12" cy="12" r="2"></circle>
						</svg>
					</div>

					<h3 class="vm-card-title">Misi</h3>

					<ul class="misi-list">
						<li>
							<span class="misi-num">1</span>
							<span>Menyediakan layanan pendidikan yang inovatif dan berkualitas.</span>
						</li>
						<li>
							<span class="misi-num">2</span>
							<span>Membangun kolaborasi strategis dengan berbagai pihak.</span>
						</li>
						<li>
							<span class="misi-num">3</span>
							<span>Memberikan dampak positif bagi individu, institusi, dan masyarakat.</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.visi-misi-section {
		background: #F4F8FB;
		padding: 3.5rem 0 3.2rem;
		border-top: 1px solid #E2E8F0;
		border-bottom: 1px solid #E2E8F0;
	}

	.visi-misi-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.visi-misi-grid {
		display: grid;
		grid-template-columns: 1fr 1.3fr;
		gap: 3rem;
		align-items: center;
	}

	/* Left */
	.visi-misi-left {
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

	.section-heading {
		font-size: 20px;
		font-weight: 800;
		color: #082442;
		line-height: 27px;
		margin: 0 0 0.85rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11.5px;
		line-height: 17.5px;
		color: #475569;
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

	/* Right Cards */
	.visi-misi-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
	}

	.vm-card {
		background: #FFFFFF;
		border-radius: 14px;
		padding: 1.5rem 1.35rem;
		box-shadow: 0 4px 20px rgba(11, 39, 71, 0.05);
		border: 1px solid rgba(226, 232, 240, 0.8);
		display: flex;
		flex-direction: column;
	}

	.vm-icon-circle {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.85rem;
	}

	.vm-card-title {
		font-size: 15px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.5rem 0;
	}

	.vm-card-text {
		font-size: 11px;
		line-height: 17px;
		color: #475569;
		margin: 0;
	}

	.misi-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.misi-list li {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 10.5px;
		line-height: 15.5px;
		color: #475569;
	}

	.misi-num {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 9px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}

	@media (max-width: 900px) {
		.visi-misi-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 600px) {
		.visi-misi-cards {
			grid-template-columns: 1fr;
		}
	}
</style>
