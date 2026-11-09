<!-- Section 12: CTA Masih Bingung Menentukan Layanan yang Tepat (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	// Props or static links
</script>

<section class="cta-edu-section">
	<div class="cta-edu-container">
		<div class="cta-card">
			<!-- Background Foto Lingkungan Akademik / Wisudawan Toga HD sesuai Gambar 2 -->
			<div class="cta-bg-wrap" aria-hidden="true">
				<picture>
					<source srcset="/images/home-cta-academic-bg.webp" type="image/webp" />
					<img
						src="/images/home-cta-academic-bg.jpg"
						alt=""
						class="cta-bg-image"
						loading="lazy"
						decoding="async"
					/>
				</picture>
				<div class="cta-gradient"></div>
			</div>

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

	.cta-bg-wrap {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		overflow: hidden;
		pointer-events: none;
	}

	.cta-bg-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
		display: block;
		opacity: 0.95;
		filter: saturate(0.9) brightness(0.95);
	}

	.cta-gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			rgba(8, 36, 66, 0.42) 0%,
			rgba(8, 36, 66, 0.65) 24%,
			rgba(8, 36, 66, 0.88) 46%,
			#082442 68%,
			#082442 100%
		);
		pointer-events: none;
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
