<script lang="ts">
</script>

<div class="stats-wrapper">
	<div class="stats-card">
		<!-- Column 1: Target Program Tahun Pertama -->
		<div class="stat-col stat-col-title">
			<span class="stat-title-line">Target Program</span>
			<span class="stat-title-line">Tahun Pertama</span>
		</div>

		<div class="divider" aria-hidden="true"></div>

		<!-- Column 2: 200+ Individu Pemetaan Talenta -->
		<div class="stat-col stat-col-data">
			<div class="icon-wrap">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
					<circle cx="9" cy="7" r="4"/>
					<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
				</svg>
			</div>
			<div class="text-wrap">
				<span class="stat-num">200+</span>
				<span class="stat-label">Individu Pemetaan Talenta</span>
			</div>
		</div>

		<div class="divider" aria-hidden="true"></div>

		<!-- Column 3: 12 Kegiatan Sosialisasi Beasiswa -->
		<div class="stat-col stat-col-data">
			<div class="icon-wrap">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
					<line x1="16" y1="2" x2="16" y2="6"/>
					<line x1="8" y1="2" x2="8" y2="6"/>
					<line x1="3" y1="10" x2="21" y2="10"/>
				</svg>
			</div>
			<div class="text-wrap">
				<span class="stat-num">12</span>
				<span class="stat-label">Kegiatan Sosialisasi Beasiswa</span>
			</div>
		</div>

		<div class="divider" aria-hidden="true"></div>

		<!-- Column 4: 60 Peserta Coaching Intensif -->
		<div class="stat-col stat-col-data">
			<div class="icon-wrap">
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M12 3L2 8l10 5 10-5-10-5z"/>
					<path d="M2 8v6"/>
					<path d="M6 10.5v5a6 6 0 0 0 12 0v-5"/>
				</svg>
			</div>
			<div class="text-wrap">
				<span class="stat-num">60</span>
				<span class="stat-label">Peserta Coaching Intensif</span>
			</div>
		</div>

		<div class="divider" aria-hidden="true"></div>

		<!-- Column 5: Action Arrow Button -->
		<div class="stat-col stat-col-action">
			<a href="/layanan/pendidikan#dampak-nyata" class="btn-circle-action" aria-label="Lihat dampak program">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"/>
					<polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>
	</div>
</div>

<style>
	.stats-wrapper {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 1086px;
		margin: -12px auto 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	.stats-card {
		background: #FFFFFF;
		border-radius: 16px;
		box-shadow: 0 8px 30px rgba(8, 36, 66, 0.08);
		border: 1px solid #E8EFF6;
		display: flex;
		align-items: center;
		padding: 12px 24px;
		min-height: 64px;
		box-sizing: border-box;
	}

	.stat-col {
		display: flex;
		align-items: center;
	}

	.stat-col-title {
		flex: 0 0 145px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.stat-title-line {
		font-size: 13px;
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		letter-spacing: -0.01em;
	}

	.stat-col-data {
		flex: 1;
		gap: 12px;
		padding: 0 16px;
	}

	.icon-wrap {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #EBF9FA;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.text-wrap {
		display: flex;
		flex-direction: column;
	}

	.stat-num {
		font-size: 19px;
		font-weight: 800;
		color: #082442;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.stat-label {
		font-size: 11px;
		color: #52647A;
		font-weight: 500;
		line-height: 1.35;
		margin-top: 2px;
	}

	.divider {
		width: 1px;
		height: 36px;
		background: #E3EAF1;
		flex-shrink: 0;
	}

	.stat-col-action {
		flex: 0 0 auto;
		padding-left: 12px;
	}

	.btn-circle-action {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1.5px solid #00A6B2;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.btn-circle-action:hover {
		background: #00A6B2;
		transform: translateX(2px);
	}

	.btn-circle-action:hover svg {
		stroke: #FFFFFF;
	}

	@media (max-width: 991px) {
		.stats-card {
			flex-wrap: wrap;
			gap: 16px;
			padding: 20px;
		}
		.divider {
			display: none;
		}
		.stat-col-title {
			flex: 0 0 100%;
			border-bottom: 1px solid #E8EFF6;
			padding-bottom: 8px;
		}
		.stat-col-data {
			flex: 0 0 45%;
			padding: 0;
		}
	}

	@media (max-width: 600px) {
		.stat-col-data {
			flex: 0 0 100%;
		}
		.stat-col-action {
			display: none;
		}
	}
</style>
