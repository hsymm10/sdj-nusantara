<!-- Section 13: Mitra & Kolaborasi (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	// Mitra & Kolaborasi Carousel Strip
</script>

<section class="partners-edu-section">
	<div class="partners-edu-container">
		<!-- Section Header -->
		<div class="partners-header">
			<div class="partners-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Mitra & Kolaborasi</span>
				<span class="badge-dash"></span>
			</div>
			<p class="partners-sub">
				Bersama mitra strategis, kami memperluas dampak pendidikan di Indonesia.
			</p>
		</div>

		<!-- Partners Carousel Bar with Left & Right Nav Arrows (GAMBAR 2) -->
		<div class="partners-carousel-wrapper">
			<button type="button" class="carousel-arrow" aria-label="Mitra sebelumnya">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="15 18 9 12 15 6"/>
				</svg>
			</button>

			<div class="partners-logos-list">
				<!-- Logo 1: Kampus Merdeka -->
				<div class="partner-logo-box" title="Kampus Merdeka">
					<svg width="120" height="32" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Wing Icon -->
						<path d="M12 28C6 24 4 16 8 8C14 12 18 20 18 26C16 28 14 28 12 28Z" fill="#0090D0"/>
						<path d="M18 26C22 22 26 14 24 6C18 10 16 18 16 24C16 25 17 26 18 26Z" fill="#F37021"/>
						<!-- Text Kampus Merdeka -->
						<text x="32" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#003B73">kampus</text>
						<text x="32" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#F37021">merdeka</text>
					</svg>
				</div>

				<!-- Logo 2: LPDP -->
				<div class="partner-logo-box" title="Lembaga Pengelola Dana Pendidikan">
					<svg width="90" height="32" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Flame symbol -->
						<path d="M16 8C18 14 14 18 18 24C22 18 24 14 22 8C20 12 18 12 16 8Z" fill="#ED1C24"/>
						<path d="M12 14C14 18 12 22 15 26C18 22 19 18 17 14C15 17 14 17 12 14Z" fill="#F7941E"/>
						<!-- LPDP Text -->
						<text x="28" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="900" fill="#082442">lpdp</text>
					</svg>
				</div>

				<!-- Logo 3: BRIN -->
				<div class="partner-logo-box" title="Badan Riset dan Inovasi Nasional">
					<svg width="80" height="32" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Atom / Circle element -->
						<circle cx="14" cy="18" r="8" stroke="#DC2626" stroke-width="3" fill="none"/>
						<circle cx="14" cy="18" r="3" fill="#DC2626"/>
						<!-- BRIN Text -->
						<text x="30" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#DC2626" letter-spacing="0.5">BRIN</text>
					</svg>
				</div>

				<!-- Logo 4: Kemnaker -->
				<div class="partner-logo-box" title="Kementerian Ketenagakerjaan RI">
					<svg width="110" height="32" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Gear / flower emblem -->
						<path d="M14 8L16 11L19 9L18 13L22 13L19 16L22 19L18 19L19 23L16 21L14 24L12 21L9 23L10 19L6 19L9 16L6 13L10 13L9 9L12 11L14 8Z" fill="#0F3B66"/>
						<circle cx="14" cy="16" r="3" fill="#ffffff"/>
						<!-- Text Kemnaker -->
						<text x="30" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#0F3B66">Kemnaker</text>
					</svg>
				</div>

				<!-- Logo 5: Bappenas -->
				<div class="partner-logo-box" title="Kementerian PPN / Bappenas">
					<svg width="110" height="32" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Diamond polygon icon -->
						<path d="M14 9L21 13V21L14 25L7 21V13L14 9Z" stroke="#007799" stroke-width="2.5" fill="none"/>
						<circle cx="14" cy="17" r="2.5" fill="#007799"/>
						<!-- Text Bappenas -->
						<text x="30" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#007799">Bappenas</text>
					</svg>
				</div>
			</div>

			<button type="button" class="carousel-arrow" aria-label="Mitra berikutnya">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="9 18 15 12 9 6"/>
				</svg>
			</button>
		</div>
	</div>
</section>

<style>
	.partners-edu-section {
		background: #ffffff;
		padding: 24px 0 54px;
	}

	.partners-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.partners-header {
		text-align: center;
		margin-bottom: 24px;
	}

	.partners-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 6px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #079ead;
	}

	.partners-sub {
		font-size: 11.5px;
		color: #64748b;
		margin: 0;
	}

	/* Carousel Strip */
	.partners-carousel-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 10px 0;
	}

	.carousel-arrow {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 1px solid #e2e8f0;
		background: #ffffff;
		color: #94a3b8;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: border-color 0.2s, color 0.2s;
		flex-shrink: 0;
	}

	.carousel-arrow:hover {
		border-color: #079ead;
		color: #079ead;
	}

	.partners-logos-list {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 20px;
		flex-wrap: wrap;
	}

	.partner-logo-box {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.85;
		transition: opacity 0.2s, transform 0.2s;
	}

	.partner-logo-box:hover {
		opacity: 1;
		transform: translateY(-1px);
	}

	@media (max-width: 768px) {
		.partners-logos-list {
			gap: 16px;
		}
	}
</style>
