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
		z-index: var(--z-overlap-bar, 10);
		width: 93%;
		max-width: var(--hero-container-max, 1380px);
		margin: var(--overlap-margin-top, -16px) auto 0;
		padding: 0;
		box-sizing: border-box;
	}

	.stats-card {
		background: #FFFFFF;
		border-radius: 20px;
		box-shadow: 0 10px 32px rgba(8, 36, 66, 0.08);
		border: 1px solid rgba(226, 232, 240, 0.9);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 12px 26px;
		min-height: var(--overlap-card-height, 84px);
		height: var(--overlap-card-height, 84px);
		box-sizing: border-box;
	}

	.stat-col {
		display: flex;
		align-items: center;
	}

	.stat-col-title {
		flex: 0 0 auto;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.stat-title-line {
		font-size: 15px;
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		letter-spacing: 0;
	}

	.stat-col-data {
		flex: 1;
		min-width: 0;
		gap: 0.9rem;
		padding: 0;
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
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		line-height: 1.08;
		letter-spacing: -0.01em;
	}

	.stat-label {
		font-size: 12px;
		color: #183553;
		font-weight: 500;
		line-height: 1.25;
		margin-top: 2px;
	}

	.divider {
		width: 1px;
		height: 38px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	.stat-col-action {
		flex: 0 0 auto;
	}

	.btn-circle-action {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1px solid #E2E8F0;
		background: #FFFFFF;
		box-shadow: 0 2px 8px rgba(8, 36, 66, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.btn-circle-action:hover {
		background: #079EAD;
		border-color: #079EAD;
	}

	.btn-circle-action:hover svg {
		stroke: #FFFFFF;
	}

	@media (max-width: 1099px) {
		.stats-wrapper {
			margin: -15px auto 0;
			padding: 0 1.5rem;
		}
		.stats-card {
			height: auto;
			min-height: 0;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1.25rem;
			padding: 1.25rem 1.5rem;
		}
		.divider {
			display: none;
		}
		.stat-col-title {
			grid-column: 1 / -1;
			border-bottom: 1px solid #DCE6EE;
			padding-bottom: 0.75rem;
			flex-direction: row;
			gap: 0.5rem;
		}
		.stat-col-action {
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
	}
</style>
