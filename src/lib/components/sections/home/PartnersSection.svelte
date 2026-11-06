<!-- Section 13: Mitra & Kolaborasi — partner logos strip -->
<section class="partners-section">
	<div class="partners-container">
		<div class="partners-header">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Mitra & Kolaborasi</span>
			</div>
			<p class="partners-desc">Dipercaya oleh institusi-institusi terkemuka untuk pengembangan pendidikan Indonesia.</p>
		</div>

		<!-- Logos strip in white card -->
		<div class="partners-logo-card">
			<!-- Partner 1: Kampus Merdeka -->
			<div class="partner-logo-item">
				<div class="partner-logo-wrap">
					<svg width="100" height="40" viewBox="0 0 100 40" aria-label="Kampus Merdeka" role="img">
						<rect width="100" height="40" rx="6" fill="#E8F4FD"/>
						<text x="50" y="26" text-anchor="middle" font-size="10" font-weight="700" fill="#0066CC">Kampus Merdeka</text>
					</svg>
				</div>
			</div>

			<div class="partners-divider" aria-hidden="true"></div>

			<!-- Partner 2: LPDP -->
			<div class="partner-logo-item">
				<div class="partner-logo-wrap">
					<svg width="80" height="40" viewBox="0 0 80 40" aria-label="LPDP" role="img">
						<rect width="80" height="40" rx="6" fill="#FFF3E0"/>
						<text x="40" y="26" text-anchor="middle" font-size="13" font-weight="800" fill="#E65100">LPDP</text>
					</svg>
				</div>
			</div>

			<div class="partners-divider" aria-hidden="true"></div>

			<!-- Partner 3: BRIN -->
			<div class="partner-logo-item">
				<div class="partner-logo-wrap">
					<svg width="80" height="40" viewBox="0 0 80 40" aria-label="BRIN" role="img">
						<rect width="80" height="40" rx="6" fill="#E8F5E9"/>
						<text x="40" y="26" text-anchor="middle" font-size="13" font-weight="800" fill="#2E7D32">BRIN</text>
					</svg>
				</div>
			</div>

			<div class="partners-divider" aria-hidden="true"></div>

			<!-- Partner 4: Komwasjur -->
			<div class="partner-logo-item">
				<div class="partner-logo-wrap">
					<svg width="110" height="40" viewBox="0 0 110 40" aria-label="Komwasjur" role="img">
						<rect width="110" height="40" rx="6" fill="#EDE7F6"/>
						<text x="55" y="26" text-anchor="middle" font-size="10" font-weight="700" fill="#512DA8">Komwasjur</text>
					</svg>
				</div>
			</div>

			<div class="partners-divider" aria-hidden="true"></div>

			<!-- Partner 5: Sapernas -->
			<div class="partner-logo-item">
				<div class="partner-logo-wrap">
					<svg width="100" height="40" viewBox="0 0 100 40" aria-label="Sapernas" role="img">
						<rect width="100" height="40" rx="6" fill="#E3F2FD"/>
						<text x="50" y="26" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0">Sapernas</text>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.partners-section {
		background: #fff;
		padding: 56px 0 72px;
		width: 100%;
	}

	.partners-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Header */
	.partners-header {
		text-align: center;
		margin-bottom: 32px;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 10px;
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

	.partners-desc {
		font-size: 15px;
		color: #52647A;
		margin: 0 auto;
		max-width: 500px;
		line-height: 1.6;
	}

	/* Logo card */
	.partners-logo-card {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		background: #F4F8FB;
		border-radius: 20px;
		padding: 32px 48px;
		border: 1.5px solid #E8EFF6;
		flex-wrap: wrap;
	}

	.partner-logo-item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 32px;
		transition: opacity 0.2s ease;
	}

	.partner-logo-item:hover {
		opacity: 0.75;
	}

	.partner-logo-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		filter: grayscale(30%);
		transition: filter 0.2s ease;
	}

	.partner-logo-item:hover .partner-logo-wrap {
		filter: none;
	}

	.partners-divider {
		width: 1px;
		height: 32px;
		background: #D8E4EF;
		flex-shrink: 0;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.partners-logo-card {
			padding: 24px 24px;
			gap: 16px;
		}
		.partners-divider {
			display: none;
		}
		.partner-logo-item {
			padding: 8px 16px;
		}
	}

	@media (max-width: 600px) {
		.partners-section {
			padding: 48px 0 56px;
		}
		.partners-logo-card {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

