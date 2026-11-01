<script lang="ts">
	// StrukturSection.svelte - Faithful to design/tentang-kami.png
</script>

<section class="struktur-section" id="struktur">
	<!-- Decorative faint geometric lines left & right (opacity 0.05) -->
	<div class="bg-decor-left"></div>
	<div class="bg-decor-right"></div>

	<div class="struktur-container">
		<div class="struktur-grid">
			<!-- Left Column: Heading, Desc, CTA -->
			<div class="struktur-left">
				<div class="section-label">— Struktur Organisasi</div>

				<h2 class="struktur-title">
					Didukung oleh Tim<br />
					Profesional &amp; Berpengalaman
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
			<!-- WAJIB DIGANTI data tim aktual (content-master: ISI DATA) -->
			<div class="chart-wrapper">
				<!-- Top Node: Direktur Utama -->
				<div class="chart-top">
					<div class="node-root">Direktur Utama</div>
				</div>

				<!-- Connectors: satu garis vertikal turun ke garis horizontal lalu cabang 5 -->
				<div class="tree-line-v"></div>
				<div class="tree-connector-grid">
					<div class="tree-line-h"></div>
					<div class="tree-branches">
						<div class="b-line"></div>
						<div class="b-line"></div>
						<div class="b-line"></div>
						<div class="b-line"></div>
						<div class="b-line"></div>
					</div>
				</div>

				<!-- 5 Division Cards -->
				<div class="chart-cards-row">
					<!-- Divisi 1 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
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
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L13 11.6"></path>
								<path d="m13 11.6-2-2a1 1 0 0 0-1.4 0L3 16.2a2 2 0 0 0 0 2.8l1.6 1.6a2 2 0 0 0 2.8 0l3.6-3.6"></path>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Kemitraan &amp; Kolaborasi</span>
					</div>

					<!-- Divisi 3 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="5"></circle>
								<line x1="12" y1="1" x2="12" y2="3"></line>
								<line x1="12" y1="21" x2="12" y2="23"></line>
								<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
								<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
								<line x1="1" y1="12" x2="3" y2="12"></line>
								<line x1="21" y1="12" x2="23" y2="12"></line>
								<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
								<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Riset &amp; Inovasi</span>
					</div>

					<!-- Divisi 4 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
								<line x1="8" y1="6" x2="16" y2="6"></line>
								<line x1="8" y1="10" x2="16" y2="10"></line>
								<line x1="8" y1="14" x2="12" y2="14"></line>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Administrasi &amp; Operasional</span>
					</div>

					<!-- Divisi 5 -->
					<div class="divisi-card">
						<div class="divisi-icon">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								<line x1="8" y1="21" x2="16" y2="21"></line>
								<line x1="12" y1="17" x2="12" y2="21"></line>
							</svg>
						</div>
						<span class="divisi-prefix">Divisi</span>
						<span class="divisi-name">Digital Learning</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.struktur-section {
		position: relative;
		background: #FFFFFF;
		height: 252px;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		border-bottom: 1px solid #EAF0F6;
	}

	.bg-decor-left {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 120px;
		background: radial-gradient(circle at 0% 50%, rgba(0, 166, 178, 0.05) 0%, transparent 70%);
		pointer-events: none;
	}

	.bg-decor-right {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 120px;
		background: radial-gradient(circle at 100% 50%, rgba(0, 166, 178, 0.05) 0%, transparent 70%);
		pointer-events: none;
	}

	.struktur-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.struktur-container {
			max-width: 1500px;
		}
	}

	.struktur-grid {
		display: grid;
		grid-template-columns: 1fr 1.8fr;
		gap: 3.5rem;
		align-items: center;
	}

	/* Left */
	.struktur-left {
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

	.struktur-title {
		font-size: clamp(19px, 1.6vw, 23px);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 0.55rem 0;
		letter-spacing: -0.01em;
	}

	.struktur-desc {
		font-size: 11.5px;
		line-height: 1.5;
		color: #475569;
		margin: 0 0 1rem 0;
		max-width: 380px;
		text-wrap: pretty;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F5B331;
		color: #071D36;
		padding: 7px 18px;
		font-size: 11px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		align-self: flex-start;
		box-shadow: 0 2px 8px rgba(245, 179, 49, 0.25);
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
		padding: 5px 22px;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(8, 36, 66, 0.15);
	}

	.tree-line-v {
		width: 1.5px;
		height: 12px;
		background: #CBD5E1;
	}

	.tree-connector-grid {
		position: relative;
		width: 80%;
		height: 12px;
	}

	.tree-line-h {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1.5px;
		background: #CBD5E1;
	}

	.tree-branches {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 12px;
	}

	.b-line {
		width: 1.5px;
		height: 12px;
		background: #CBD5E1;
	}

	/* 5 Division Cards */
	.chart-cards-row {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.65rem;
		width: 100%;
	}

	.divisi-card {
		background: #FFFFFF;
		border: 1px solid rgba(226, 232, 240, 0.9);
		border-radius: 10px;
		padding: 0.75rem 0.5rem;
		box-shadow: 0 4px 14px rgba(11, 39, 71, 0.06);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 3px;
	}

	.divisi-icon {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.08);
		border: 1px solid rgba(0, 166, 178, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 2px;
	}

	.divisi-prefix {
		font-size: 8.5px;
		font-weight: 600;
		color: #64748B;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.divisi-name {
		font-size: 10px;
		font-weight: 700;
		color: #082442;
		line-height: 1.25;
	}

	@media (max-width: 900px) {
		.struktur-section {
			height: auto;
			padding: 3rem 0;
		}
		.struktur-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.tree-line-v,
		.tree-connector-grid {
			display: none;
		}
		.chart-cards-row {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.75rem;
		}
	}
</style>
