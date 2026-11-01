<script lang="ts">
	// HeroContact.svelte - Presisi sesuai design/kontak.png (x1.5 ke 1536)
</script>

<section class="hero-contact">
	<!-- Background image right: Indonesian receptionist HD full-bleed -->
	<div class="hero-bg-wrap">
		<img
			src="/images/contact-hero-reception.jpg"
			alt="Kontak SDJNusantara"
			class="hero-img"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="hero-overlay"></div>
	</div>

	<!-- Wave decoration bottom-left (Teal gelap #0A5E75, pita turquoise #16B6C1->#079EAD, lengkung putih) -->
	<div class="hero-wave-wrap">
		<svg class="hero-wave" viewBox="0 0 340 150" fill="none" preserveAspectRatio="none">
			<path d="M0 20 C80 35 170 90 230 150 H0 Z" fill="#0A5E75" fill-opacity="0.95" />
			<path d="M0 60 C75 75 160 115 205 150 H0 Z" fill="url(#teal-grad-contact)" />
			<path d="M0 115 C55 120 120 135 165 150 H0 Z" fill="#FFFFFF" />
			<defs>
				<linearGradient id="teal-grad-contact" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#16B6C1" />
					<stop offset="100%" stop-color="#079EAD" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<!-- Bottom right gold + turquoise accent -->
	<div class="hero-swoosh-br">
		<svg viewBox="0 0 260 110" fill="none" preserveAspectRatio="none">
			<path d="M50 110 C110 85 195 50 260 0 L260 110 Z" fill="url(#gold-grad-contact-br)" opacity="0.9" />
			<path d="M120 110 C170 95 220 75 260 35 L260 110 Z" fill="#16B6C1" opacity="0.65" />
			<defs>
				<linearGradient id="gold-grad-contact-br" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#F5B331" />
					<stop offset="100%" stop-color="#E5A320" />
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="hero-container">
		<div class="hero-text-col">
			<!-- Pill Tag: berpusat di y ≈ 104px pada 1536 (48px navbar + 42px margin + 14px center = 104px) -->
			<div class="pill-tag">
				<span class="pill-dot"></span>
				<span class="pill-label">Kontak Kami</span>
			</div>

			<!-- Headline: 3 baris ±52px weight 800, baris 3 emas #F5B331 -->
			<h1 class="hero-title">
				<span>Mari Berdiskusi</span><br />
				<span>untuk Pendidikan</span><br />
				<span class="gold-text">yang Lebih Baik.</span>
			</h1>

			<!-- Description: max-width 540px, 3 baris, text-wrap pretty -->
			<p class="hero-desc">
				Tim SDJNusantara siap mendengarkan kebutuhan Anda dan memberikan solusi yang tepat untuk pengembangan talenta, pendidikan, dan program strategis.
			</p>

			<!-- Buttons: dasar tombol ±50px di atas batas bawah hero -->
			<div class="hero-btn-row">
				<a href="/konsultasi" class="btn-gold">
					<span>Konsultasi Sekarang</span>
					<span class="btn-arrow">→</span>
				</a>
				<a href="/layanan" class="btn-outline">
					<span>Lihat Layanan Kami</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-contact {
		position: relative;
		width: 100%;
		height: 385px;
		background: #082442;
		overflow: hidden;
		display: flex;
		align-items: flex-start;
		box-sizing: border-box;
	}

	.hero-bg-wrap {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
	}

	.hero-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: right 25%;
		display: block;
	}

	/* Fade navy halus dari kiri: overlay solid 0-30%, ±0.8 pada 40%, 0 pada ±58% */
	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 30%,
			rgba(8, 36, 66, 0.82) 40%,
			rgba(8, 36, 66, 0.35) 50%,
			rgba(8, 36, 66, 0) 58%
		);
	}

	.hero-wave-wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 340px;
		height: 150px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-wave {
		width: 100%;
		height: 100%;
		display: block;
	}

	.hero-swoosh-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 260px;
		height: 110px;
		z-index: 2;
		pointer-events: none;
	}

	.hero-swoosh-br svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Container khusus halaman Kontak (x ±93 -> 1445 pada 1536, max 1500 di >=1920) */
	.hero-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1352px;
		margin: 0 auto;
		padding: 40px 0 0;
		box-sizing: border-box;
	}

	.hero-text-col {
		max-width: 580px;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: rgba(22, 182, 193, 0.14);
		border: 1px solid rgba(22, 182, 193, 0.4);
		border-radius: 999px;
		padding: 4px 12px;
		margin-bottom: 10px;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #16B6C1;
	}

	.pill-label {
		font-size: 11px;
		font-weight: 700;
		color: #16B6C1;
		letter-spacing: 0.04em;
	}

	.hero-title {
		font-size: 34px;
		font-weight: 800;
		line-height: 1.15;
		color: #FFFFFF;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
	}

	.gold-text {
		color: #F5B331;
	}

	.hero-desc {
		font-size: 14.5px;
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 34px;
		max-width: 540px;
		text-wrap: pretty;
	}

	.hero-btn-row {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 210px;
		height: 42px;
		background: #F5B331;
		color: #082442;
		font-size: 14px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.32);
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 15px;
		transition: transform 0.2s ease;
	}

	.btn-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 170px;
		height: 42px;
		background: transparent;
		color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.6);
		font-size: 14px;
		font-weight: 600;
		border-radius: 10px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.btn-outline:hover {
		border-color: #16B6C1;
		color: #16B6C1;
		background: rgba(22, 182, 193, 0.08);
	}

	@media (max-width: 1440px) {
		.hero-container {
			padding-left: 24px;
			padding-right: 24px;
		}
	}

	@media (max-width: 1024px) {
		.hero-contact {
			height: auto;
			min-height: 380px;
			padding-bottom: 2rem;
		}
		.hero-container {
			padding-top: 36px;
		}
		.hero-title {
			font-size: 32px;
		}
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 28px;
		}
		.hero-desc {
			font-size: 14px;
		}
		.hero-btn-row {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			gap: 10px;
		}
		.btn-gold, .btn-outline {
			width: 100%;
		}
	}

	@media (max-width: 640px) {
		.hero-contact {
			flex-direction: column;
			height: auto;
		}
		.hero-bg-wrap {
			position: relative;
			height: 220px;
			order: 2;
			margin-top: 1rem;
		}
		.hero-overlay {
			display: none;
		}
		.hero-container {
			order: 1;
			padding: 24px 16px 0;
		}
		.hero-title {
			font-size: 26px;
		}
	}
</style>
