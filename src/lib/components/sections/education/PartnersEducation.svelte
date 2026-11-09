<!-- Section 12: Mitra & Kolaborasi (Mockup Resmi SDJNusantara) -->
<script lang="ts">
</script>

<section class="partners-edu-section" id="mitra-kolaborasi">
	<div class="partners-edu-container">
		<!-- Section Header -->
		<div class="partners-header">
			<div class="partners-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Mitra & Kolaborasi</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="partners-title">Mitra & Kolaborasi</h2>
			<p class="partners-sub">
				Bersama mitra strategis, kami memperluas dampak pendidikan di Indonesia.
			</p>
		</div>

		<!-- Partners Logos Strip: Single Elegant Row on Desktop -->
		<div class="partners-strip-card">
			<div class="partners-logos-list">
				<!-- Logo 1: Kampus Merdeka -->
				<div class="partner-logo-item" title="Kampus Merdeka">
					<svg width="150" height="42" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Wing Icon -->
						<path d="M12 28C6 24 4 16 8 8C14 12 18 20 18 26C16 28 14 28 12 28Z" fill="#0090D0"/>
						<path d="M18 26C22 22 26 14 24 6C18 10 16 18 16 24C16 25 17 26 18 26Z" fill="#F37021"/>
						<!-- Text Kampus Merdeka -->
						<text x="32" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#003B73">kampus</text>
						<text x="32" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#F37021">merdeka</text>
					</svg>
				</div>

				<!-- Logo 2: LPDP -->
				<div class="partner-logo-item" title="Lembaga Pengelola Dana Pendidikan">
					<svg width="120" height="42" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Flame symbol -->
						<path d="M16 8C18 14 14 18 18 24C22 18 24 14 22 8C20 12 18 12 16 8Z" fill="#ED1C24"/>
						<path d="M12 14C14 18 12 22 15 26C18 22 19 18 17 14C15 17 14 17 12 14Z" fill="#F7941E"/>
						<!-- LPDP Text -->
						<text x="28" y="25" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="900" fill="#0B2948">lpdp</text>
					</svg>
				</div>

				<!-- Logo 3: BRIN -->
				<div class="partner-logo-item" title="Badan Riset dan Inovasi Nasional">
					<svg width="110" height="42" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Atom / Circle element -->
						<circle cx="14" cy="18" r="9" stroke="#DC2626" stroke-width="3" fill="none"/>
						<circle cx="14" cy="18" r="3.5" fill="#DC2626"/>
						<!-- BRIN Text -->
						<text x="32" y="25" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#DC2626" letter-spacing="0.5">BRIN</text>
					</svg>
				</div>

				<!-- Logo 4: Kemnaker -->
				<div class="partner-logo-item" title="Kementerian Ketenagakerjaan RI">
					<svg width="140" height="42" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Gear / flower emblem -->
						<path d="M14 8L16 11L19 9L18 13L22 13L19 16L22 19L18 19L19 23L16 21L14 24L12 21L9 23L10 19L6 19L9 16L6 13L10 13L9 9L12 11L14 8Z" fill="#0F3B66"/>
						<circle cx="14" cy="16" r="3" fill="#ffffff"/>
						<!-- Text Kemnaker -->
						<text x="32" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#0F3B66">Kemnaker</text>
					</svg>
				</div>

				<!-- Logo 5: Bappenas -->
				<div class="partner-logo-item" title="Kementerian PPN / Bappenas">
					<svg width="140" height="42" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<!-- Diamond polygon icon -->
						<path d="M14 9L21 13V21L14 25L7 21V13L14 9Z" stroke="#007799" stroke-width="2.5" fill="none"/>
						<circle cx="14" cy="17" r="2.5" fill="#007799"/>
						<!-- Text Bappenas -->
						<text x="32" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#007799">Bappenas</text>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.partners-edu-section {
		background: #FFFFFF;
		padding: 68px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.partners-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.partners-header {
		text-align: center;
		margin-bottom: 34px;
	}

	.partners-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2.5px;
		background: #08AEBB;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #08AEBB;
		letter-spacing: 0.04em;
	}

	.partners-title {
		font-size: clamp(22px, 2vw, 26px);
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 8px;
		letter-spacing: -0.015em;
	}

	.partners-sub {
		font-size: 14px;
		color: #64748B;
		margin: 0;
	}

	/* Single Line Strip Card */
	.partners-strip-card {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 24px 36px;
		box-shadow: 0 4px 18px rgba(11, 41, 72, 0.03);
	}

	.partners-logos-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
		flex-wrap: wrap;
	}

	.partner-logo-item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 12px;
		opacity: 0.9;
		filter: grayscale(0.2);
		transition: all 0.25s ease;
	}

	.partner-logo-item:hover {
		opacity: 1;
		filter: grayscale(0);
		transform: translateY(-2px);
	}

	@media (max-width: 900px) {
		.partners-logos-list {
			justify-content: center;
			gap: 24px;
		}
	}

	@media (max-width: 640px) {
		.partners-edu-section {
			padding: 48px 0;
		}

		.partners-edu-container {
			padding: 0 20px;
		}

		.partners-strip-card {
			padding: 20px 16px;
		}

		.partners-logos-list {
			gap: 18px;
		}
	}
</style>
