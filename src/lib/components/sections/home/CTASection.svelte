<script lang="ts">
</script>

<section class="cta-banner" aria-label="Aksi dan Konsultasi">
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
			<h2 class="cta-title">Siap Mengambil Langkah Berikutnya?</h2>
			<p class="cta-text">
				Konsultasikan kebutuhan pendidikan, pengembangan talenta, atau kerja sama institusi Anda.
			</p>
		</div>

		<div class="cta-right-actions">
			<a href="/kontak" class="cta-btn-gold">
				<span>Jadwalkan Konsultasi</span>
				<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
		min-height: 86px;
		height: 86px;
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		box-sizing: border-box;
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

	/* Tombol Pertama: Gold SDJNusantara (#F9B52B) */
	.cta-btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0 1.15rem;
		height: 35px;
		background: #F9B52B;
		color: #071D36;
		font-weight: 700;
		font-size: 11.5px;
		border-radius: 7px;
		text-decoration: none;
		box-shadow: 0 3px 8px rgba(249, 181, 43, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		letter-spacing: 0;
	}

	.cta-btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
		box-shadow: 0 5px 12px rgba(249, 181, 43, 0.38);
	}

	/* Tombol Kedua: Gaya Outline Transparan dengan Border Putih */
	.cta-btn-outline {
		display: inline-flex;
		align-items: center;
		padding: 0 1.15rem;
		height: 35px;
		background: rgba(255, 255, 255, 0.04);
		border: 1.5px solid rgba(255, 255, 255, 0.7);
		color: #FFFFFF;
		font-weight: 700;
		font-size: 11.5px;
		border-radius: 7px;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
		letter-spacing: 0;
	}

	.cta-btn-outline:hover {
		background: rgba(255, 255, 255, 0.16);
		border-color: #FFFFFF;
		transform: translateY(-1px);
	}

	@media (max-width: 1024px) {
		.cta-banner {
			height: auto;
			min-height: auto;
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
			font-size: 1.2rem;
		}
		.cta-text {
			font-size: 13px;
			line-height: 1.5;
		}
		.cta-right-actions {
			flex-direction: column;
			gap: 0.75rem;
		}
		.cta-btn-gold,
		.cta-btn-outline {
			width: 100%;
			height: 42px;
			justify-content: center;
			font-size: 13.5px;
		}
	}
</style>
