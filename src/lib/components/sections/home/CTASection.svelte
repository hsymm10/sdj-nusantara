<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="cta-banner" aria-label={i18n.pick('Aksi dan Konsultasi', 'Action and Consultation')}>
	<!-- Background Foto Lingkungan Akademik / Pendidikan HD -->
	<div class="cta-bg-wrap" aria-hidden="true">
		<picture>
			<source srcset="/images/home-cta-academic-bg.webp" type="image/webp" />
			<img
				src="/images/home-cta-academic-bg.jpg"
				alt=""
				class="cta-bg-image"
				loading="eager"
				decoding="async"
			/>
		</picture>
	</div>

	<!-- Gradient Overlay Navy Gelap Khas SDJNusantara -->
	<div class="cta-gradient" aria-hidden="true"></div>

	<!-- Content Container -->
	<div class="cta-container">
		<div class="cta-left-content">
			<h2 class="cta-title">{i18n.pick('Siap Mengambil Langkah Berikutnya?', 'Ready to Take the Next Step?')}</h2>
			<p class="cta-text">
				{i18n.pick(
					'Konsultasikan kebutuhan pendidikan, pengembangan talenta, atau kerja sama institusi Anda.',
					'Consult your education, talent development, or institutional partnership needs with us.'
				)}
			</p>
		</div>

		<!-- Aksi Tombol Sesuai Referensi Gambar 5 -->
		<div class="cta-right-actions">
			<!-- 1. Ajukan Konsultasi (Orange Background, White Text, 8px radius) -->
			<a href="/kontak" class="cta-btn-orange">
				<span>{i18n.pick('Ajukan Konsultasi', 'Request Consultation')}</span>
				<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<polyline points="12 5 19 12 12 19"></polyline>
				</svg>
			</a>

			<!-- 2. Diskusi Institusi (Navy Border / White Card, Navy Text, 8px radius) -->
			<a href="/kemitraan" class="cta-btn-institusi">
				<span>{i18n.pick('Diskusi Institusi', 'Institutional Discussion')}</span>
			</a>
		</div>
	</div>
</section>

<style>
	.cta-banner {
		position: relative;
		background-color: #0B2948;
		min-height: 88px;
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 16px 0;
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
		object-position: left center;
		display: block;
	}

	/* Navy Gradient: gelap elegan menyatu dengan identitas visual SDJNusantara */
	.cta-gradient {
		position: absolute;
		inset: 0;
		z-index: 2;
		background: linear-gradient(
			90deg,
			rgba(11, 41, 72, 0.38) 0%,
			rgba(11, 41, 72, 0.6) 22%,
			rgba(11, 41, 72, 0.78) 50%,
			rgba(11, 41, 72, 0.85) 75%,
			rgba(11, 41, 72, 0.92) 100%
		);
		pointer-events: none;
	}

	.cta-container {
		position: relative;
		z-index: 4;
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		gap: 1.5rem;
	}

	@media (min-width: 1920px) {
		.cta-container {
			max-width: 1500px;
		}
	}

	.cta-left-content {
		display: flex;
		flex-direction: column;
		padding-left: clamp(10px, 11vw, 150px); /* Ruang visual agar foto mahasiswa bertoga di sisi kiri tetap tampak jelas */
	}

	.cta-title {
		font-size: clamp(16px, 1.35vw, 18.5px);
		font-weight: 800;
		color: #FFFFFF;
		line-height: 1.25;
		margin: 0 0 3px 0;
		letter-spacing: -0.01em;
	}

	.cta-text {
		font-size: clamp(11.5px, 0.9vw, 12.5px);
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
		letter-spacing: 0;
	}

	.cta-right-actions {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		flex-shrink: 0;
	}

	/* Tombol Pertama: Oranye SDJNusantara (#D95D0F) Sesuai Referensi Gambar 5 */
	.cta-btn-orange {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		padding: 0 1.25rem;
		height: 38px;
		background: #D95D0F;
		color: #FFFFFF;
		font-weight: 700;
		font-size: 12.5px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(217, 93, 15, 0.32);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		letter-spacing: -0.005em;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.cta-btn-orange:hover {
		background: #C4510B;
		transform: translateY(-1px);
		box-shadow: 0 6px 16px rgba(217, 93, 15, 0.42);
		color: #FFFFFF;
	}

	/* Tombol Kedua: Putih dengan Border Navy & Teks Navy Sesuai Referensi Gambar 5 */
	.cta-btn-institusi {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 1.25rem;
		height: 38px;
		background: #FFFFFF;
		border: 2px solid #082442;
		color: #082442;
		font-weight: 700;
		font-size: 12.5px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(8, 36, 66, 0.18);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		letter-spacing: -0.005em;
	}

	.cta-btn-institusi:hover {
		background: #082442;
		color: #FFFFFF;
		border-color: #082442;
		transform: translateY(-1px);
		box-shadow: 0 6px 16px rgba(8, 36, 66, 0.3);
	}

	@media (max-width: 1024px) {
		.cta-banner {
			padding: 1.75rem 1.25rem;
		}
		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.25rem;
			padding: 0;
		}
		.cta-left-content {
			padding-left: 0;
		}
		.cta-right-actions {
			width: 100%;
		}
	}

	@media (max-width: 767px) {
		.cta-banner {
			padding: 1.75rem 1rem;
		}
		.cta-title {
			font-size: 1.15rem;
		}
		.cta-text {
			font-size: 13px;
			line-height: 1.5;
		}
		.cta-right-actions {
			flex-direction: column;
			gap: 0.75rem;
			width: 100%;
		}
		.cta-btn-orange,
		.cta-btn-institusi {
			width: 100%;
			height: 42px;
			justify-content: center;
			font-size: 13.5px;
			box-sizing: border-box;
		}
	}
</style>
