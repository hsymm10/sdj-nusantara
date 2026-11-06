<script lang="ts">
</script>

<div class="stats-wrapper">
	<div class="stats-card">
		<!-- Target Program Label: 2 baris teks tebal yang sama sesuai mockup -->
		<div class="stats-heading">
			<span class="heading-line-bold">Target Program</span>
			<span class="heading-line-bold">Tahun Pertama</span>
		</div>

		<!-- Divider 1 (x≈462) -->
		<div class="stat-divider"></div>

		<!-- Stat 1: 200+ Individu Pemetaan Talenta -->
		<div class="stat-block">
			<div class="stat-icon-wrap">
				<!-- People group outline turquoise ±34px -->
				<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
					<circle cx="9" cy="7" r="4"></circle>
					<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
				</svg>
			</div>
			<div class="stat-details">
				<span class="stat-num">200+</span>
				<div class="stat-label">
					<span class="stat-line">Individu Pemetaan</span>
					<span class="stat-line">Talenta</span>
				</div>
			</div>
		</div>

		<!-- Divider 2 (x≈717) -->
		<div class="stat-divider"></div>

		<!-- Stat 2: 12 Kegiatan Sosialisasi Beasiswa -->
		<div class="stat-block">
			<div class="stat-icon-wrap">
				<!-- Calendar grid outline turquoise ±34px -->
				<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
					<line x1="16" y1="2" x2="16" y2="6"></line>
					<line x1="8" y1="2" x2="8" y2="6"></line>
					<line x1="3" y1="10" x2="21" y2="10"></line>
					<circle cx="8" cy="14" r="0.8" fill="#00A6B2"></circle>
					<circle cx="12" cy="14" r="0.8" fill="#00A6B2"></circle>
					<circle cx="16" cy="14" r="0.8" fill="#00A6B2"></circle>
					<circle cx="8" cy="18" r="0.8" fill="#00A6B2"></circle>
					<circle cx="12" cy="18" r="0.8" fill="#00A6B2"></circle>
					<circle cx="16" cy="18" r="0.8" fill="#00A6B2"></circle>
				</svg>
			</div>
			<div class="stat-details">
				<span class="stat-num">12</span>
				<div class="stat-label">
					<span class="stat-line">Kegiatan Sosialisasi</span>
					<span class="stat-line">Beasiswa</span>
				</div>
			</div>
		</div>

		<!-- Divider 3 (x≈975) -->
		<div class="stat-divider"></div>

		<!-- Stat 3: 60 Peserta Coaching Intensif -->
		<div class="stat-block">
			<div class="stat-icon-wrap">
				<!-- Graduation Cap outline turquoise ±34px -->
				<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
					<path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
				</svg>
			</div>
			<div class="stat-details">
				<span class="stat-num">60</span>
				<div class="stat-label">
					<span class="stat-line">Peserta Coaching</span>
					<span class="stat-line">Intensif</span>
				</div>
			</div>
		</div>

		<!-- Divider 4 (x≈1239) -->
		<div class="stat-divider"></div>

		<!-- Action Circle Arrow Button: lingkaran putih ±24px dengan ikon panah turquoise dan bayangan lembut -->
		<a href="/layanan/pendidikan#program" class="stat-action-btn" aria-label="Lihat Program">
			<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<polyline points="12 5 19 12 12 19"></polyline>
			</svg>
		</a>
	</div>
</div>

<style>
	.stats-wrapper {
		position: relative;
		z-index: 20;
		max-width: 1086px;
		margin: -12px auto 0; /* Overlap hero ±12px sesuai spesifikasi mockup */
		padding: 0 1rem;
		height: 72px;
		box-sizing: border-box;
	}

	.stats-card {
		background: #FFFFFF;
		border-radius: 16px;
		box-shadow: 0 10px 30px rgba(8, 36, 66, 0.10);
		border: 1px solid #E3EAF1;
		padding: 0 1.75rem;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
		box-sizing: border-box;
	}

	.stats-heading {
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}

	.heading-line-bold {
		font-size: 13.5px;
		font-weight: 800;
		color: #082442;
		line-height: 1.22;
		letter-spacing: 0;
	}

	.stat-divider {
		width: 1px;
		height: 38px;
		background: #E3EAF1;
		flex-shrink: 0;
	}

	.stat-block {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex: 1;
	}

	.stat-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.stat-details {
		display: flex;
		flex-direction: column;
	}

	.stat-num {
		font-size: 20px;
		font-weight: 800;
		color: #082442;
		line-height: 1.05;
		letter-spacing: -0.01em;
	}

	.stat-label {
		display: flex;
		flex-direction: column;
		font-size: 11px;
		font-weight: 500;
		color: #183553;
		line-height: 1.25;
		margin-top: 1px;
		letter-spacing: 0;
	}

	.stat-line {
		white-space: nowrap;
	}

	/* Tombol panah: lingkaran putih ±24px dengan ikon panah turquoise dan bayangan lembut */
	.stat-action-btn {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 1px solid #E3EAF1;
		background: #FFFFFF;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.stat-action-btn:hover {
		background: #079EAD;
		border-color: #079EAD;
	}

	.stat-action-btn:hover svg {
		stroke: #FFFFFF !important;
	}

	@media (max-width: 1099px) {
		.stats-wrapper {
			height: auto;
			margin: -15px auto 0;
			padding: 0 1.5rem;
		}
		.stats-card {
			height: auto;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1.25rem;
			padding: 1.25rem 1.5rem;
		}
		.stats-heading {
			grid-column: 1 / -1;
			border-bottom: 1px solid #DCE6EE;
			padding-bottom: 0.75rem;
			flex-direction: row;
			gap: 0.5rem;
		}
		.stat-divider {
			display: none;
		}
		.stat-action-btn {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.stats-wrapper {
			margin: -10px auto 0;
			padding: 0 1rem;
		}
		.stats-card {
			grid-template-columns: 1fr;
			gap: 1rem;
			padding: 1rem 1.25rem;
		}
		.stat-label {
			max-width: 100%;
		}
	}
</style>
