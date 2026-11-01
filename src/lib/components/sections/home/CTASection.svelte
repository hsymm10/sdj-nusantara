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

	<!-- Graduation Cap on the left: x≈110-215, y≈788-850 -->
	<div class="cta-cap-wrap">
		<img
			src="/images/cta-cap-clean.png"
			alt="Graduation cap"
			class="cta-cap-image"
		/>
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
		top: 5px;
		left: 110px;
		width: 115px;
		height: 72px;
		z-index: 2;
		pointer-events: none;
		opacity: 0.85;
	}

	.cta-cap-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
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

	@media (max-width: 860px) {
		.cta-banner {
			height: auto;
			padding: 1.5rem 1rem;
		}
		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}
	}
</style>
