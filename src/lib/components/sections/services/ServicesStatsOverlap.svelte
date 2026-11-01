<script lang="ts">
	// ServicesStatsOverlap.svelte - Overlap 5 kartu layanan sesuai design/layanan.png (Tinggi ±123px, overlap ±13px)
</script>

<div class="stats-overlap-wrap">
	<div class="stats-overlap-container">
		<div class="stats-card">
			<!-- 01 Talent Management -->
			<a href="#layanan-1" class="service-item">
				<div class="service-icon">
					<!-- Outline icon 44px: Kelompok Orang -->
					<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
						<circle cx="9" cy="7" r="4"></circle>
						<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">01</span>
					<span class="service-title">Talent Management<br />&amp; Development Center</span>
				</div>
			</a>

			<div class="vdivider"></div>

			<!-- 02 Scholarship Academy -->
			<a href="#layanan-2" class="service-item">
				<div class="service-icon">
					<!-- Outline icon 44px: Jabat Tangan / Kerjasama -->
					<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
						<path d="M20.5 8.5L16 4L11 9L14 12"></path>
						<path d="M3.5 15.5L8 20L13 15L10 12"></path>
						<path d="M2 11l4.5-4.5a2.12 2.12 0 0 1 3 0L12 9"></path>
						<path d="M22 13l-4.5 4.5a2.12 2.12 0 0 1-3 0L12 15"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">02</span>
					<span class="service-title">Scholarship<br />Academy</span>
				</div>
			</a>

			<div class="vdivider"></div>

			<!-- 03 Skills Development & Certification -->
			<a href="#layanan-3" class="service-item">
				<div class="service-icon">
					<!-- Outline icon 44px: Kalender / Jadwal Sertifikasi -->
					<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
						<line x1="16" y1="2" x2="16" y2="6"></line>
						<line x1="8" y1="2" x2="8" y2="6"></line>
						<line x1="3" y1="10" x2="21" y2="10"></line>
						<path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">03</span>
					<span class="service-title">Skills Development<br />&amp; Certification</span>
				</div>
			</a>

			<div class="vdivider"></div>

			<!-- 04 Institutional & Strategic Partnership -->
			<a href="#layanan-4" class="service-item">
				<div class="service-icon">
					<!-- Outline icon 44px: Topi Toga Akademik -->
					<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
						<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
						<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">04</span>
					<span class="service-title">Institutional &amp; Strategic<br />Partnership</span>
				</div>
			</a>

			<div class="vdivider"></div>

			<!-- 05 Digital Education & Learning Platform -->
			<a href="#layanan-5" class="service-item">
				<div class="service-icon">
					<!-- Outline icon 44px: Layar Monitor / Platform Digital -->
					<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
						<line x1="8" y1="21" x2="16" y2="21"></line>
						<line x1="12" y1="17" x2="12" y2="21"></line>
						<path d="M7 8h10M7 12h6"></path>
					</svg>
				</div>
				<div class="service-meta">
					<span class="service-num">05</span>
					<span class="service-title">Digital Education<br />&amp; Learning Platform</span>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	.stats-overlap-wrap {
		position: relative;
		z-index: 10;
		margin-top: -13px; /* Overlap hero ±13px sesuai mockup */
		margin-bottom: 0;
		width: 100%;
	}

	.stats-overlap-container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.stats-overlap-container {
			max-width: 1500px;
		}
	}

	.stats-card {
		background: #FFFFFF;
		border-radius: 16px;
		box-shadow: 0 10px 30px rgba(11, 39, 71, 0.08);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 123px;
		padding: 0 1.25rem;
		box-sizing: border-box;
		border: 1px solid rgba(226, 232, 240, 0.8);
	}

	.service-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		padding: 0 0.5rem;
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}

	.service-item:hover {
		transform: translateY(-2px);
	}

	.service-icon {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.service-meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2px;
	}

	.service-num {
		font-size: 11px;
		font-weight: 700;
		color: #00A6B2;
		letter-spacing: 0.05em;
		line-height: 1;
	}

	.service-title {
		font-size: 12px;
		font-weight: 500;
		color: #082442;
		line-height: 1.35;
		white-space: normal;
	}

	.vdivider {
		width: 1px;
		height: 52px;
		background: #E2E8F0;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.stats-card {
			height: auto;
			padding: 1.25rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
		}
		.vdivider {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.stats-card {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 0.85rem;
		}
		.service-item {
			justify-content: flex-start;
			padding: 0.5rem 0;
			border-bottom: 1px solid #F1F5F9;
		}
		.service-item:last-child {
			border-bottom: none;
		}
	}
</style>
