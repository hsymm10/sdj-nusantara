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
				<span class="stat-label">
					Individu Pemetaan<br />Talenta
				</span>
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
				<span class="stat-label">
					Kegiatan Sosialisasi<br />Beasiswa
				</span>
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
				<span class="stat-label">
					Peserta Coaching<br />Intensif
				</span>
			</div>
		</div>

		<!-- Divider 4 (x≈1239) -->
		<div class="stat-divider"></div>

		<!-- Action Circle Arrow Button: lingkaran outline turquoise ±22px berlatar putih -->
		<a href="/program" class="stat-action-btn" aria-label="Lihat Program">
			<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
		margin: -10px auto 0; /* Overlap ke hero hanya 10px, top y=335 */
		padding: 0 0.5rem;
		height: 72px;
	}

	.stats-card {
		background: #FFFFFF;
		border-radius: 14px;
		box-shadow: 0 6px 22px rgba(11, 39, 71, 0.08);
		border: 1px solid rgba(220, 230, 238, 0.9);
		padding: 0.65rem 1.6rem;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
	}

	.stats-heading {
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}

	.heading-line-bold {
		font-size: 13.5px;
		font-weight: 800;
		color: #0B2747;
		line-height: 1.22;
		letter-spacing: 0;
	}

	.stat-divider {
		width: 1px;
		height: 44px;
		background: #DCE6EE;
		flex-shrink: 0;
	}

	.stat-block {
		display: flex;
		align-items: center;
		gap: 0.85rem;
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
		color: #0B2747;
		line-height: 1.05;
		letter-spacing: -0.01em;
	}

	.stat-label {
		font-size: 11px;
		font-weight: 500;
		color: #64748B;
		line-height: 1.25;
		margin-top: 1px;
		letter-spacing: 0;
	}

	/* Tombol panah: lingkaran outline turquoise ±22px berlatar putih */
	.stat-action-btn {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		border: 1.5px solid #00A6B2;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.stat-action-btn:hover {
		background: #00A6B2;
	}

	.stat-action-btn:hover svg {
		stroke: #FFFFFF !important;
	}

	@media (max-width: 1024px) {
		.stats-card {
			height: auto;
			padding: 0.75rem 1rem;
			gap: 0.75rem;
		}
		.stat-num {
			font-size: 1.15rem;
		}
	}

	@media (max-width: 768px) {
		.stats-wrapper {
			margin-top: -10px;
			height: auto;
		}
		.stats-card {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
			padding: 1.25rem;
			height: auto;
		}
		.stat-divider {
			width: 100%;
			height: 1px;
		}
	}
</style>
