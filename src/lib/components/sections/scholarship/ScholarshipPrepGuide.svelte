<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const checklist = $derived(
		i18n.lang === 'en'
			? [
					'Profile mapping & scholarship targeting',
					'Academic document & CV preparation',
					'Essay & motivation letter coaching',
					'Targeted interview simulation',
					'Application completeness review'
				]
			: [
					'Pemetaan profil & target beasiswa',
					'Persiapan dokumen akademik & CV',
					'Bimbingan esai & motivation letter',
					'Simulasi wawancara terarah',
					'Pemeriksaan kelengkapan berkas'
				]
	);
</script>

<section id="panduan-persiapan" class="prep-guide-section">
	<!-- Atmospheric background image with translucent high-contrast overlay -->
	<div class="prep-bg-wrap" aria-hidden="true">
		<img
			src="/images/cta-pendidikan-academic-bg.jpg"
			alt=""
			class="prep-bg-image"
			loading="lazy"
		/>
		<div class="prep-bg-overlay"></div>
	</div>

	<div class="prep-guide-container">
		<!-- 1. Visual Gambar (Mahasiswa berfokus studi beasiswa dengan kartu beraksen) -->
		<div class="prep-col-visual">
			<div class="visual-card-wrap">
				<img
					src="/images/sch-guide-writing.jpg"
					alt="Panduan Persiapan Beasiswa"
					class="visual-photo"
					loading="lazy"
				/>
				<!-- Floating Top-Left Badge -->
				<div class="visual-floating-badge" aria-hidden="true">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
						<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
					</svg>
					<span>{i18n.pick('Mentoring Terarah', 'Targeted Mentoring')}</span>
				</div>
				<!-- Decorative Bottom-Right Brand Swoosh -->
				<svg class="visual-corner-ribbon" viewBox="0 0 90 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
					<path d="M0 50 C20 25 50 10 90 0 L90 50 Z" fill="#079EAD" opacity="0.85"></path>
					<path d="M20 50 C38 32 60 18 90 10 L90 50 Z" fill="#F5B331"></path>
				</svg>
			</div>
		</div>

		<!-- 2. Area Informasi Utama (Label, Judul, Deskripsi, Tombol Emas) -->
		<div class="prep-col-info">
			<div class="section-label">
				<span class="label-bar" aria-hidden="true"></span>
				<span class="label-text">{i18n.pick('PANDUAN PERSIAPAN', 'PREPARATION GUIDE')}</span>
			</div>

			<h2 class="prep-title">
				{i18n.pick('Persiapkan Diri untuk Meraih Beasiswa Impian', 'Prepare Yourself to Win Your Dream Scholarship')}
			</h2>

			<p class="prep-desc">
				{i18n.pick(
					'Dapatkan panduan, strategi dokumen, dan simulasi wawancara terarah dari konsultan pendidikan SDJ Nusantara untuk mendukung persiapan studi Anda.',
					'Get structured guidance, document strategies, and targeted interview simulations from SDJ Nusantara education consultants to support your study preparation.'
				)}
			</p>

			<div class="prep-action">
				<a href="/kontak" class="btn-gold-guide">
					<span>{i18n.pick('Konsultasi Persiapan Beasiswa', 'Scholarship Preparation Consultation')}</span>
					<span class="arrow-glyph" aria-hidden="true">→</span>
				</a>
			</div>
		</div>

		<!-- 3. Panel Daftar Panduan (Kartu Putih Elegan 5 Poin Checklist) -->
		<div class="prep-col-checklist">
			<div class="checklist-panel">
				<ul class="checklist-items">
					{#each checklist as item}
						<li class="check-item">
							<div class="check-icon-box" aria-hidden="true">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="20 6 9 17 4 12"></polyline>
								</svg>
							</div>
							<span class="check-label">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.prep-guide-section {
		position: relative;
		width: 100%;
		background: #F8FAFC;
		overflow: hidden;
		border-top: 1px solid #E2E8F0;
		border-bottom: 1px solid #E2E8F0;
		box-sizing: border-box;
	}

	/* Atmospheric Background */
	.prep-bg-wrap {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	.prep-bg-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		filter: saturate(1.05) brightness(1.02);
		opacity: 0.16;
		display: block;
	}

	.prep-bg-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.95) 0%,
			rgba(248, 250, 252, 0.93) 50%,
			rgba(241, 245, 249, 0.96) 100%
		);
	}

	/* Main 3-Element Container */
	.prep-guide-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 42px 54px;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 330px minmax(360px, 1fr) 350px;
		gap: 36px;
		align-items: center;
	}

	@media (min-width: 1920px) {
		.prep-guide-container {
			max-width: 1500px;
			padding: 46px 64px;
		}
	}

	/* Element 1: Visual Photo Card */
	.prep-col-visual {
		width: 100%;
	}

	.visual-card-wrap {
		position: relative;
		width: 100%;
		height: 230px;
		border-radius: 18px;
		overflow: hidden;
		box-shadow:
			0 12px 30px rgba(8, 36, 66, 0.12),
			0 2px 8px rgba(8, 36, 66, 0.06);
		border: 3px solid #FFFFFF;
		background: #082442;
	}

	.visual-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visual-card-wrap:hover .visual-photo {
		transform: scale(1.03);
	}

	.visual-floating-badge {
		position: absolute;
		top: 14px;
		left: 14px;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 5px 12px;
		background: rgba(8, 36, 66, 0.85);
		backdrop-filter: blur(6px);
		border: 1px solid rgba(255, 255, 255, 0.25);
		color: #FFFFFF;
		font-size: 11.5px;
		font-weight: 700;
		border-radius: 9999px;
		box-shadow: 0 4px 12px rgba(8, 36, 66, 0.2);
	}

	.visual-corner-ribbon {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 85px;
		height: 48px;
		pointer-events: none;
	}

	/* Element 2: Main Info */
	.prep-col-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 8px;
	}

	.label-bar {
		display: inline-block;
		width: 18px;
		height: 3px;
		background: #079EAD;
		border-radius: 2px;
	}

	.label-text {
		color: #079EAD;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.prep-title {
		font-size: clamp(23px, 1.85vw, 29px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px 0;
		letter-spacing: -0.015em;
	}

	.prep-desc {
		font-size: 14px;
		line-height: 1.58;
		color: #475569;
		margin: 0 0 20px 0;
		max-width: 520px;
	}

	.prep-action {
		display: flex;
		align-items: center;
	}

	.btn-gold-guide {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 42px;
		padding: 0 22px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.32);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.btn-gold-guide:hover {
		background: #eaa31e;
		transform: translateY(-1px);
		box-shadow: 0 6px 18px rgba(245, 179, 49, 0.42);
	}

	.arrow-glyph {
		font-size: 15px;
		transition: transform 0.2s ease;
	}

	.btn-gold-guide:hover .arrow-glyph {
		transform: translateX(3px);
	}

	/* Element 3: Checklist Panel */
	.prep-col-checklist {
		width: 100%;
	}

	.checklist-panel {
		background: #FFFFFF;
		border-radius: 18px;
		border: 1px solid #E2E8F0;
		box-shadow:
			0 12px 30px rgba(8, 36, 66, 0.07),
			0 2px 6px rgba(8, 36, 66, 0.03);
		padding: 22px 24px;
		box-sizing: border-box;
	}

	.checklist-items {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 11px;
	}

	.check-item {
		display: flex;
		align-items: center;
		gap: 11px;
	}

	.check-icon-box {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: rgba(7, 158, 173, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.check-label {
		font-size: 13px;
		font-weight: 600;
		color: #1E293B;
		line-height: 1.35;
	}

	/* Responsive Tablet (992px to 1180px) */
	@media (max-width: 1180px) {
		.prep-guide-container {
			grid-template-columns: 290px 1fr 310px;
			gap: 24px;
			padding: 36px 36px;
		}

		.visual-card-wrap {
			height: 210px;
		}

		.prep-title {
			font-size: 22px;
		}

		.checklist-panel {
			padding: 18px 20px;
		}

		.check-label {
			font-size: 12.5px;
		}
	}

	/* Tablet stacked layout (≤ 991px) */
	@media (max-width: 991px) {
		.prep-guide-container {
			grid-template-columns: 1fr;
			gap: 28px;
			padding: 36px 28px;
		}

		.visual-card-wrap {
			max-width: 480px;
			height: 220px;
			margin: 0 auto;
		}

		.prep-col-info {
			text-align: center;
			align-items: center;
		}

		.section-label {
			justify-content: center;
		}

		.prep-desc {
			max-width: 580px;
			margin: 0 auto 20px;
		}

		.prep-action {
			justify-content: center;
		}

		.checklist-panel {
			max-width: 480px;
			margin: 0 auto;
		}
	}

	/* Mobile (≤ 640px) */
	@media (max-width: 640px) {
		.prep-guide-container {
			padding: 28px 18px;
			gap: 22px;
		}

		.visual-card-wrap {
			height: 180px;
			max-width: 100%;
		}

		.prep-title {
			font-size: 20px;
		}

		.prep-desc {
			font-size: 13.5px;
		}

		.btn-gold-guide {
			width: 100%;
			justify-content: center;
		}

		.checklist-panel {
			padding: 16px 18px;
			max-width: 100%;
		}

		.check-label {
			font-size: 12.5px;
		}
	}
</style>
