<script lang="ts">
	import { i18n } from "#lib/stores/i18n.svelte";
</script>

<section
	class="cta-banner"
	aria-label={i18n.pick("Aksi dan Konsultasi", "Action and Consultation")}
>
	<!-- Background Foto Lingkungan Akademik / Pendidikan HD -->
	<div class="cta-bg-wrap" aria-hidden="true">
		<picture>
			<source
				srcset="/images/home-cta-academic-bg.webp"
				type="image/webp"
			/>
			<img
				src="/images/home-cta-academic-bg.jpg"
				alt=""
				class="cta-bg-image"
				loading="eager"
				decoding="async"
			/>
		</picture>
	</div>

	<!-- Gradient Overlay Navy Gelap Khas SDJ Nusantara -->
	<div class="cta-gradient" aria-hidden="true"></div>

	<!-- Content Container (Centered & Balanced Layout Without Buttons) -->
	<div class="cta-container">
		<div class="cta-content">
			<h2 class="cta-title">
				{i18n.pick(
					"Siap Mengambil Langkah Berikutnya?",
					"Ready to Take the Next Step?",
				)}
			</h2>
			<p class="cta-text">
				{i18n.pick(
					"Konsultasikan kebutuhan pendidikan, pengembangan talenta, atau kerja sama institusi Anda.",
					"Consult your education, talent development, or institutional partnership needs with us.",
				)}
			</p>
		</div>
	</div>
</section>

<style>
	.cta-banner {
		position: relative;
		background-color: #0b2948;
		min-height: 88px;
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 1.5rem 1rem;
	}

	.cta-bg-wrap {
		position: absolute;
		inset: 0;
		z-index: 1;
		opacity: 1;
		pointer-events: none;
	}

	.cta-bg-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	/* Navy Gradient: gelap elegan terpusat menyatu dengan identitas visual SDJ Nusantara */
	.cta-gradient {
		position: absolute;
		inset: 0;
		z-index: 2;
		background: linear-gradient(
			90deg,
			rgba(11, 41, 72, 0.92) 0%,
			rgba(11, 41, 72, 0.8) 50%,
			rgba(11, 41, 72, 0.92) 100%
		);
		pointer-events: none;
	}

	.cta-container {
		position: relative;
		z-index: 4;
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		box-sizing: border-box;
	}

	.cta-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		max-width: 780px;
		gap: 6px;
		margin: 0 auto;
	}

	.cta-title {
		font-size: clamp(19px, 1.8vw, 24px);
		font-weight: 800;
		color: #ffffff;
		line-height: 1.3;
		margin: 0;
		letter-spacing: -0.01em;
		text-wrap: balance;
		text-align: center;
	}

	.cta-text {
		font-size: clamp(12.5px, 1.05vw, 14px);
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
		max-width: 640px;
		letter-spacing: 0;
		text-wrap: pretty;
		text-align: center;
	}

	@media (max-width: 767px) {
		.cta-banner {
			padding: 1.35rem 1rem;
			min-height: auto;
		}

		.cta-title {
			font-size: 1.15rem;
		}

		.cta-text {
			font-size: 13px;
			line-height: 1.5;
		}
	}
</style>
