<script lang="ts">
	// StrukturSection.svelte - Faithful to design/tentang-kami.png
</script>

<section class="struktur-section" id="struktur">
	<div class="struktur-container">
		<div class="struktur-grid">
			<!-- Left Column -->
			<div class="struktur-left">
				<div class="section-label">
					<span class="label-line"></span>
					<span class="label-text">Struktur Organisasi</span>
				</div>

				<h2 class="struktur-title">
					Didukung oleh Tim Profesional & Berpengalaman
				</h2>

				<p class="struktur-desc">
					Tim kami terdiri dari para ahli di bidang pendidikan, pengembangan talenta, dan manajemen program yang siap memberikan solusi terbaik.
				</p>

				<a href="#kontak" class="btn-gold">
					<span>Lihat Struktur Lengkap</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Right Column: Organization Tree Chart -->
			<div class="chart-wrapper">
				<!-- Top Node: Direktur Utama -->
				<div class="chart-top">
					<div class="node-root">Direktur Utama</div>
				</div>

				<!-- Connectors -->
				<div class="tree-line-v"></div>
				<div class="tree-line-h"></div>
				<div class="tree-connectors-5">
					<div class="t-line"></div>
					<div class="t-line"></div>
					<div class="t-line"></div>
					<div class="t-line"></div>
					<div class="t-line"></div>
				</div>

				<!-- 5 Division Cards -->
				<div class="chart-cards-row">
					<!-- Divisi 1 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Program &amp; Pengembangan</span>
					</div>

					<!-- Divisi 2 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 20.66l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.65z"></path>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Kemitraan &amp; Kolaborasi</span>
					</div>

					<!-- Divisi 3 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<line x1="12" y1="2" x2="12" y2="6"></line>
								<line x1="12" y1="18" x2="12" y2="22"></line>
								<line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
								<line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
								<line x1="2" y1="12" x2="6" y2="12"></line>
								<line x1="18" y1="12" x2="22" y2="12"></line>
								<circle cx="12" cy="12" r="5"></circle>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Riset &amp; Inovasi</span>
					</div>

					<!-- Divisi 4 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
								<line x1="9" y1="22" x2="9" y2="22.01"></line>
								<line x1="15" y1="22" x2="15" y2="22.01"></line>
								<line x1="9" y1="6" x2="9" y2="6.01"></line>
								<line x1="15" y1="6" x2="15" y2="6.01"></line>
								<line x1="9" y1="10" x2="9" y2="10.01"></line>
								<line x1="15" y1="10" x2="15" y2="10.01"></line>
								<line x1="9" y1="14" x2="9" y2="14.01"></line>
								<line x1="15" y1="14" x2="15" y2="14.01"></line>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Administrasi &amp; Operasional</span>
					</div>

					<!-- Divisi 5 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								<line x1="8" y1="21" x2="16" y2="21"></line>
								<line x1="12" y1="17" x2="12" y2="21"></line>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Digital Learning</span>
					</div>
				</div>
				<!-- ISI DATA: Struktur organisasi visual di atas dapat diperbarui dengan data tim aktual -->
			</div>
		</div>
	</div>
</section>

<style>
	.struktur-section {
		background: #FFFFFF;
		padding: 3.5rem 0 3.2rem;
		border-bottom: 1px solid #E2E8F0;
	}

	.struktur-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.struktur-grid {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		gap: 3rem;
		align-items: center;
	}

	/* Left */
	.struktur-left {
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

	.struktur-title {
		font-size: 20px;
		font-weight: 800;
		color: #082442;
		line-height: 27px;
		margin: 0 0 0.85rem 0;
		letter-spacing: -0.01em;
	}

	.struktur-desc {
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

	/* Right Chart */
	.chart-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.chart-top {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.node-root {
		background: #082442;
		color: #FFFFFF;
		font-size: 11.5px;
		font-weight: 700;
		padding: 6px 20px;
		border-radius: 7px;
		box-shadow: 0 4px 12px rgba(8, 36, 66, 0.15);
	}

	.tree-line-v {
		width: 1.5px;
		height: 16px;
		background: #CBD5E1;
	}

	.tree-line-h {
		width: 82%;
		height: 1.5px;
		background: #CBD5E1;
	}

	.tree-connectors-5 {
		width: 82%;
		display: flex;
		justify-content: space-between;
	}

	.t-line {
		width: 1.5px;
		height: 14px;
		background: #CBD5E1;
	}

	.chart-cards-row {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 8px;
		width: 100%;
	}

	.divisi-card {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 10px;
		padding: 0.85rem 0.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		box-shadow: 0 2px 8px rgba(11, 39, 71, 0.03);
		transition: all 0.2s;
	}

	.divisi-card:hover {
		transform: translateY(-2px);
		border-color: #00A6B2;
		background: #FFFFFF;
	}

	.divisi-icon {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.4rem;
	}

	.divisi-prefix {
		font-size: 9px;
		font-weight: 600;
		color: #94A3B8;
		line-height: 1;
		margin-bottom: 2px;
	}

	.divisi-name {
		font-size: 9.5px;
		font-weight: 700;
		color: #082442;
		line-height: 12.5px;
	}

	@media (max-width: 900px) {
		.struktur-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.chart-cards-row {
			grid-template-columns: repeat(2, 1fr);
		}
		.tree-line-h, .tree-connectors-5 {
			display: none;
		}
	}
</style>
