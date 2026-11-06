<!-- Section 12: CTA Masih Bingung Menentukan Layanan yang Tepat (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	// Props or static links
</script>

<section class="cta-edu-section">
	<div class="cta-edu-container">
		<div class="cta-card">
			<!-- Left: Text -->
			<div class="cta-left">
				<h2 class="cta-title">
					Masih Bingung Menentukan<br />
					<span class="gold-accent">Layanan yang Tepat?</span>
				</h2>
				<p class="cta-desc">
					Tim SDJNusantara siap membantu Anda menemukan program, beasiswa, maupun layanan yang sesuai dengan kebutuhan.
				</p>
			</div>

			<!-- Right: Buttons -->
			<div class="cta-right">
				<a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="btn-chat">
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
					</svg>
					<span>Chat dengan Kami</span>
				</a>

				<a href="/kontak" class="btn-outline">
					<span>Hubungi Kami</span>
				</a>
			</div>

			<!-- Decorative curved ribbons at bottom-right of the card (GAMBAR 2) -->
			<svg class="cta-corner-ribbon" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
				<!-- Turquoise curve -->
				<path d="M40 100C90 95 145 70 180 20V100H40Z" fill="#16B6C1" fill-opacity="0.8"/>
				<!-- Gold curve -->
				<path d="M90 100C125 98 160 80 180 50V100H90Z" fill="#F5B331"/>
			</svg>
		</div>
	</div>
</section>

<style>
	.cta-edu-section {
		background: #ffffff;
		padding: 24px 0 46px;
	}

	.cta-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.cta-card {
		background: #082442;
		border-radius: 16px;
		padding: 34px 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
		position: relative;
		overflow: hidden;
		box-shadow: 0 12px 30px rgba(8, 36, 66, 0.2);
	}

	.cta-left {
		flex: 1;
		max-width: 540px;
		position: relative;
		z-index: 2;
	}

	.cta-title {
		font-size: 22px;
		line-height: 1.25;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 8px;
		letter-spacing: -0.2px;
	}

	.gold-accent {
		color: #f5b331;
	}

	.cta-desc {
		font-size: 11.5px;
		line-height: 1.55;
		color: #cbd5e1;
		margin: 0;
	}

	.cta-right {
		display: flex;
		align-items: center;
		gap: 12px;
		position: relative;
		z-index: 2;
		flex-shrink: 0;
	}

	.btn-chat {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #f5b331;
		color: #082442;
		font-size: 11.5px;
		font-weight: 700;
		padding: 9px 18px;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
	}

	.btn-chat:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		border: 1px solid rgba(255, 255, 255, 0.4);
		color: #ffffff;
		font-size: 11.5px;
		font-weight: 700;
		padding: 9px 18px;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s;
	}

	.btn-outline:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: #ffffff;
	}

	.cta-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 160px;
		height: 90px;
		pointer-events: none;
		z-index: 1;
	}

	@media (max-width: 868px) {
		.cta-card {
			flex-direction: column;
			align-items: flex-start;
			padding: 28px 24px;
		}

		.cta-right {
			width: 100%;
			flex-wrap: wrap;
		}
	}
</style>
