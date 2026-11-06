<!-- Section 6: Komitmen & Dampak — centered heading + horizontal stat card dengan 4 metrics + 20+ Mitra -->
<section class="impact-section">
	<div class="impact-container">
		<!-- Header -->
		<div class="impact-header">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Dampak Nyata</span>
			</div>
			<h2 class="impact-title">Komitmen Nyata untuk Dampak yang Terukur</h2>
			<p class="impact-desc">
				SDJNusantara hadir untuk menciptakan perubahan nyata bagi individu, institusi, dan ekosistem pendidikan nasional.
			</p>
		</div>

		<!-- Stat Card -->
		<div class="stat-card">
			<!-- Stat 1 -->
			<div class="stat-item">
				<div class="stat-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#079EAD" stroke-width="2" stroke-linecap="round" fill="none"/>
						<circle cx="9" cy="7" r="4" stroke="#079EAD" stroke-width="2" fill="none"/>
						<path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
					</svg>
				</div>
				<div class="stat-text">
					<span class="stat-number">200<span class="stat-plus">+</span></span>
					<span class="stat-label">Individu Pemetaan Talenta</span>
				</div>
			</div>

			<div class="stat-divider" aria-hidden="true"></div>

			<!-- Stat 2 -->
			<div class="stat-item">
				<div class="stat-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#079EAD" stroke-width="2" fill="none"/>
						<line x1="16" y1="2" x2="16" y2="6" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
						<line x1="8" y1="2" x2="8" y2="6" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
						<line x1="3" y1="10" x2="21" y2="10" stroke="#079EAD" stroke-width="2"/>
					</svg>
				</div>
				<div class="stat-text">
					<span class="stat-number">12<span class="stat-plus"></span></span>
					<span class="stat-label">Kegiatan Sosialisasi Beasiswa</span>
				</div>
			</div>

			<div class="stat-divider" aria-hidden="true"></div>

			<!-- Stat 3 -->
			<div class="stat-item">
				<div class="stat-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#079EAD" stroke-width="2" stroke-linejoin="round" fill="none"/>
						<path d="M2 8v6" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
						<path d="M22 8v6" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
						<path d="M6 10.5v5a6 6 0 0 0 12 0v-5" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
					</svg>
				</div>
				<div class="stat-text">
					<span class="stat-number">60<span class="stat-plus"></span></span>
					<span class="stat-label">Peserta Coaching Intensif</span>
				</div>
			</div>

			<div class="stat-divider" aria-hidden="true"></div>

			<!-- Stat 4 -->
			<div class="stat-item stat-highlight">
				<div class="stat-icon stat-icon-gold">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#F5B331" stroke-width="2" stroke-linecap="round" fill="none"/>
						<circle cx="9" cy="7" r="4" stroke="#F5B331" stroke-width="2" fill="none"/>
						<path d="M22 11l-4 4-2-2" stroke="#F5B331" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div class="stat-text">
					<span class="stat-number stat-number-gold">20<span class="stat-plus stat-plus-gold">+</span></span>
					<span class="stat-label">Mitra Strategis</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.impact-section {
		background: #F4F8FB;
		padding: 72px 0 80px;
		width: 100%;
	}

	.impact-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Header */
	.impact-header {
		text-align: center;
		margin-bottom: 48px;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 12px;
	}

	.badge-dash {
		width: 20px;
		height: 2.5px;
		background: #079EAD;
		border-radius: 2px;
	}

	.badge-text {
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.impact-title {
		font-size: clamp(1.4rem, 2.2vw, 1.9rem);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 12px;
		letter-spacing: -0.02em;
	}

	.impact-desc {
		font-size: 15px;
		color: #52647A;
		margin: 0 auto;
		max-width: 580px;
		line-height: 1.6;
	}

	/* Stat Card */
	.stat-card {
		display: flex;
		align-items: stretch;
		background: #fff;
		border-radius: 20px;
		box-shadow: 0 4px 32px rgba(8, 36, 66, 0.08);
		border: 1.5px solid #E8EFF6;
		overflow: hidden;
	}

	.stat-item {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 32px 28px;
	}

	.stat-highlight {
		background: linear-gradient(135deg, rgba(7, 158, 173, 0.04) 0%, rgba(245, 179, 49, 0.04) 100%);
	}

	.stat-divider {
		width: 1px;
		background: #E3EAF1;
		margin: 20px 0;
	}

	.stat-icon {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: linear-gradient(135deg, #EBF9FA 0%, #D6F4F7 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.stat-icon-gold {
		background: linear-gradient(135deg, #FFF8E6 0%, #FFF1C7 100%);
	}

	.stat-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 900;
		color: #082442;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.stat-plus {
		font-size: 1.4rem;
		font-weight: 900;
		color: #079EAD;
	}

	.stat-number-gold {
		color: #082442;
	}

	.stat-plus-gold {
		color: #F5B331;
	}

	.stat-label {
		font-size: 12.5px;
		color: #52647A;
		font-weight: 500;
		line-height: 1.4;
		max-width: 120px;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.stat-card {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		.stat-divider {
			display: none;
		}
		.stat-item {
			border: 1px solid #E3EAF1;
		}
	}

	@media (max-width: 600px) {
		.impact-section {
			padding: 48px 0 56px;
		}
		.stat-card {
			grid-template-columns: 1fr;
		}
		.impact-header {
			margin-bottom: 32px;
		}
	}
</style>

