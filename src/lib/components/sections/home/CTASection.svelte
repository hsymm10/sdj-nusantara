<script lang="ts">
</script>

<section class="cta-banner">
	<!-- Background clean texture with siluet foto samar -->
	<div class="cta-bg-wrap">
		<img
			src="/images/cta-bg-clean.jpg"
			alt=""
			class="cta-bg-image"
		/>
	</div>

	<!-- Graduation Cap on the left: x≈110-215, y≈788-850 (Clean transparent SVG, NO gray box!) -->
	<div class="cta-cap-wrap">
		<svg width="105" height="65" viewBox="0 0 105 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="cta-cap-svg">
			<!-- Cap skull under crown -->
			<path d="M34 29 C34 40 46 47 60 47 C74 47 86 40 86 29 L86 33 C86 44 74 51 60 51 C46 51 34 44 34 33 Z" fill="rgba(8, 28, 52, 0.75)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="0.8"/>
			<!-- Cap flat rhomboid crown -->
			<polygon points="60,11 100,27 60,41 20,25" fill="rgba(10, 32, 58, 0.9)" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1.2"/>
			<!-- Center button on crown -->
			<ellipse cx="60" cy="26" rx="3" ry="1.8" fill="rgba(255, 255, 255, 0.5)"/>
			<!-- Tassel ribbon & hanging tassel on left side -->
			<path d="M60 26 Q40 28 26 34 Q24 40 23 50" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.4" fill="none" stroke-linecap="round"/>
			<rect x="20" y="50" width="6" height="11" rx="1.5" fill="rgba(255, 255, 255, 0.4)"/>
		</svg>
	</div>

	<!-- Navy Gradient Overlay: slightly brighter in the middle #16375A to #0B2948 -->
	<div class="cta-gradient"></div>

	<!-- Content Container (x≈235 for text, right side for buttons) -->
	<div class="cta-container">
		<div class="cta-left-content">
			<h2 class="cta-title">Siap Mengambil Langkah Berikutnya?</h2>
			<p class="cta-text">
				Konsultasikan kebutuhan pendidikan, pengembangan talenta, atau kerja sama institusi Anda.
			</p>
		</div>

		<div class="cta-right-actions">
			<a href="/kontak" class="cta-btn-gold">
				<span>Jadwalkan Konsultasi</span>
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<polyline points="12 5 19 12 12 19"></polyline>
				</svg>
			</a>
			<a href="/kemitraan" class="cta-btn-outline">
				<span>Ajukan Kerja Sama</span>
			</a>
		</div>
	</div>
</section>

<style>
	.cta-banner {
		position: relative;
		background-color: #0B2948;
		height: 83px;
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.cta-bg-wrap {
		position: absolute;
		inset: 0;
		z-index: 1;
		opacity: 0.45;
	}

	.cta-bg-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Topi toga (graduation cap) di kiri: x≈110–215, y≈788–850 */
	.cta-cap-wrap {
		position: absolute;
		top: 9px;
		left: 110px;
		width: 105px;
		height: 65px;
		z-index: 2;
		pointer-events: none;
	}

	.cta-cap-svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Navy Gradient: #0B2948 at ends, #16375A in middle */
	.cta-gradient {
		position: absolute;
		inset: 0;
		z-index: 2;
		background: linear-gradient(
			90deg,
			rgba(11, 41, 72, 0.88) 0%,
			rgba(11, 41, 72, 0.75) 20%,
			rgba(22, 55, 90, 0.6) 50%,
			rgba(11, 41, 72, 0.78) 75%,
			rgba(11, 41, 72, 0.95) 100%
		);
		pointer-events: none;
	}

	.cta-container {
		position: relative;
		z-index: 4;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cta-left-content {
		display: flex;
		flex-direction: column;
	}

	.cta-title {
		font-size: 17px;
		font-weight: 800;
		color: #FFFFFF;
		line-height: 1.25;
		margin-bottom: 3px;
		letter-spacing: 0;
	}

	.cta-text {
		font-size: 11px;
		line-height: 1.4;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
		letter-spacing: 0;
	}

	.cta-right-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	/* "Jadwalkan Konsultasi →" (tinggi ±32px) */
	.cta-btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0 1rem;
		height: 32px;
		background: #F5B331;
		color: #071D36;
		font-weight: 700;
		font-size: 11px;
		border-radius: 6px;
		text-decoration: none;
		box-shadow: 0 3px 8px rgba(245, 179, 49, 0.25);
		transition: all 0.2s ease;
		white-space: nowrap;
		letter-spacing: 0;
	}

	.cta-btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	/* "Ajukan Kerja Sama" (tinggi ±32px) */
	.cta-btn-outline {
		display: inline-flex;
		align-items: center;
		padding: 0 1rem;
		height: 32px;
		background: rgba(255, 255, 255, 0.05);
		border: 1.5px solid rgba(255, 255, 255, 0.65);
		color: #FFFFFF;
		font-weight: 700;
		font-size: 11px;
		border-radius: 6px;
		text-decoration: none;
		transition: all 0.2s ease;
		white-space: nowrap;
		letter-spacing: 0;
	}

	.cta-btn-outline:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: #FFFFFF;
	}

	@media (max-width: 1099px) {
		.cta-banner {
			height: auto;
			padding: 2rem 1.5rem;
		}
		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.25rem;
		}
		.cta-cap-wrap {
			display: none;
		}
		.cta-right-actions {
			width: 100%;
		}
	}

	@media (max-width: 767px) {
		.cta-banner {
			padding: 2rem 1.25rem;
		}
		.cta-title {
			font-size: 1.25rem;
		}
		.cta-text {
			font-size: 13.5px;
			line-height: 1.5;
		}
		.cta-right-actions {
			flex-direction: column;
			gap: 0.75rem;
		}
		.cta-btn-gold,
		.cta-btn-outline {
			width: 100%;
			height: 44px;
			justify-content: center;
			font-size: 14px;
		}
	}
</style>
