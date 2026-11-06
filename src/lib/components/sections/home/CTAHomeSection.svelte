<!-- Section 12: CTA Konsultasi — navy banner dengan 2 tombol dan teal/gold dekorasi -->
<section class="cta-home-section">
	<!-- Decorative circles -->
	<div class="cta-deco cta-deco-teal-1" aria-hidden="true"></div>
	<div class="cta-deco cta-deco-teal-2" aria-hidden="true"></div>
	<div class="cta-deco cta-deco-gold" aria-hidden="true"></div>

	<!-- Content -->
	<div class="cta-home-container">
		<div class="cta-home-text">
			<div class="cta-label" aria-hidden="true">
				<div class="cta-label-line"></div>
				<span>Hubungi Kami</span>
			</div>
			<h2 class="cta-home-title">Masih Bingung Menentukan<br/>Layanan yang Tepat?</h2>
			<p class="cta-home-desc">
				Tim SDJNusantara siap membantu Anda menemukan program, beasiswa, maupun layanan yang sesuai dengan kebutuhan.
			</p>
		</div>
		<div class="cta-home-actions">
			<a href="/kontak" class="cta-home-btn-gold">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.42 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
				</svg>
				<span>Hubungi Kami</span>
			</a>
			<a href="/kontak#chat" class="cta-home-btn-outline">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<span>Chat dengan Kami</span>
			</a>
		</div>
	</div>
</section>

<style>
	.cta-home-section {
		background: linear-gradient(135deg, #082442 0%, #0d3360 60%, #082442 100%);
		padding: 60px 0;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	/* Decorative circles */
	.cta-deco {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
	}

	.cta-deco-teal-1 {
		width: 300px;
		height: 300px;
		background: rgba(7, 158, 173, 0.15);
		top: -120px;
		right: 160px;
	}

	.cta-deco-teal-2 {
		width: 160px;
		height: 160px;
		background: rgba(7, 158, 173, 0.1);
		bottom: -60px;
		right: 60px;
	}

	.cta-deco-gold {
		width: 120px;
		height: 120px;
		background: rgba(245, 179, 49, 0.12);
		top: -40px;
		left: 10%;
	}

	/* Container */
	.cta-home-container {
		position: relative;
		z-index: 2;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 48px;
	}

	/* Text */
	.cta-home-text {
		flex: 1;
	}

	.cta-label {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 16px;
	}

	.cta-label-line {
		width: 20px;
		height: 2.5px;
		background: #F5B331;
		border-radius: 2px;
	}

	.cta-label span {
		color: #F5B331;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.cta-home-title {
		font-size: clamp(1.5rem, 2.2vw, 2rem);
		font-weight: 800;
		color: #FFFFFF;
		line-height: 1.25;
		margin: 0 0 14px;
		letter-spacing: -0.02em;
	}

	.cta-home-desc {
		font-size: 15px;
		color: rgba(255,255,255,0.75);
		line-height: 1.65;
		margin: 0;
		max-width: 500px;
	}

	/* Actions */
	.cta-home-actions {
		display: flex;
		align-items: center;
		gap: 14px;
		flex-shrink: 0;
	}

	.cta-home-btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 13px 26px;
		background: #F5B331;
		color: #082442;
		font-weight: 700;
		font-size: 14px;
		border-radius: 10px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-shadow: 0 4px 16px rgba(245, 179, 49, 0.35);
		white-space: nowrap;
	}

	.cta-home-btn-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(245, 179, 49, 0.45);
	}

	.cta-home-btn-outline {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 24px;
		background: rgba(255,255,255,0.08);
		border: 1.5px solid rgba(255,255,255,0.5);
		color: #fff;
		font-weight: 700;
		font-size: 14px;
		border-radius: 10px;
		text-decoration: none;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.cta-home-btn-outline:hover {
		background: rgba(255,255,255,0.18);
		border-color: #fff;
		transform: translateY(-2px);
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.cta-home-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 32px;
		}
		.cta-home-desc {
			max-width: none;
		}
	}

	@media (max-width: 600px) {
		.cta-home-section {
			padding: 48px 0;
		}
		.cta-home-actions {
			flex-direction: column;
			width: 100%;
		}
		.cta-home-btn-gold,
		.cta-home-btn-outline {
			width: 100%;
			justify-content: center;
		}
	}
</style>

