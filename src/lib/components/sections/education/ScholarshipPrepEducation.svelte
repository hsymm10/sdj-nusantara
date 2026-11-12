<!-- Section 09: Persiapkan Diri untuk Meraih Beasiswa Impian — 3 Kolom (Mockup GAMBAR 2 SDJNusantara) -->
<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const checklist = $derived(
		i18n.pick(
			[
				'Pemetaan profil & target beasiswa',
				'Persiapan dokumen akademik & CV',
				'Bimbingan esai & <em>motivation letter</em>',
				'Simulasi wawancara terarah',
				'Pemeriksaan kelengkapan berkas'
			],
			[
				'Profile & scholarship target mapping',
				'Academic document & CV preparation',
				'Essay & <em>motivation letter</em> mentoring',
				'Structured interview simulation',
				'Application completeness review'
			]
		)
	);
</script>

<section class="prep-edu-section" id="persiapan-beasiswa">
	<!-- Atmospheric background geometric curves from Mockup GAMBAR 2 -->
	<div class="prep-bg-decor" aria-hidden="true">
		<!-- Bottom-right geometric yellow/amber swoosh curve -->
		<svg class="decor-swoosh-right" viewBox="0 0 340 200" fill="none" preserveAspectRatio="none">
			<path d="M0 200 C110 180 200 135 340 95 L340 200 Z" fill="url(#gold-pale-layer-prep)" />
			<path d="M40 200 C140 185 230 145 340 120 L340 200 Z" fill="url(#gold-main-ribbon-prep)" />
			<path d="M0 200 C110 180 200 135 340 95" stroke="url(#gold-crest-stroke-prep)" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
			<defs>
				<linearGradient id="gold-pale-layer-prep" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFCE52" stop-opacity="0.45"/>
					<stop offset="60%" stop-color="#FFE399" stop-opacity="0.22"/>
					<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
				</linearGradient>
				<linearGradient id="gold-main-ribbon-prep" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFB928" stop-opacity="0.75"/>
					<stop offset="50%" stop-color="#FFC84C" stop-opacity="0.50"/>
					<stop offset="100%" stop-color="#FFEBB8" stop-opacity="0.10"/>
				</linearGradient>
				<linearGradient id="gold-crest-stroke-prep" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFB928" stop-opacity="0.6"/>
					<stop offset="100%" stop-color="#FFE399" stop-opacity="0.1"/>
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="prep-edu-container">
		<!-- Col 1: Photo with Floating Badge & Bottom-Left Corner Swoosh -->
		<div class="prep-col-photo">
			<div class="photo-card-wrap">
				<!-- Top-Left Floating Graduation Badge with Golden Sparkle Rays -->
				<div class="floating-badge-wrap" aria-hidden="true">
					<svg class="sparkle-rays" viewBox="0 0 32 18" fill="none">
						<line x1="8" y1="14" x2="3" y2="4" stroke="#FFB928" stroke-width="2.5" stroke-linecap="round"/>
						<line x1="16" y1="12" x2="16" y2="2" stroke="#FFB928" stroke-width="2.5" stroke-linecap="round"/>
						<line x1="24" y1="14" x2="29" y2="4" stroke="#FFB928" stroke-width="2.5" stroke-linecap="round"/>
					</svg>
					<div class="floating-badge-box">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
							<path d="M6 12v5c3 3 9 3 12 0v-5"/>
						</svg>
					</div>
				</div>

				<div class="photo-card">
					<img
						src="/images/beasiswa-prep-laptop-cap.jpg"
						alt="Persiapan Beasiswa SDJNusantara"
						class="prep-img"
						loading="lazy"
					/>
					<!-- Decorative curve ribbons on bottom-left (Mockup GAMBAR 2) -->
					<svg class="photo-corner-ribbon-left" viewBox="0 0 110 70" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<path d="M0 0 C15 35 45 60 110 70 H0 Z" fill="#08A6B5"/>
						<path d="M0 22 C12 45 32 62 80 70 H0 Z" fill="#FFB323"/>
					</svg>
				</div>
			</div>
		</div>

		<!-- Col 2: Text & CTA -->
		<div class="prep-col-text">
			<div class="prep-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">{i18n.pick('Program Beasiswa', 'Scholarship Program')}</span>
			</div>
			<h2 class="prep-title">
				{i18n.pick('Persiapkan Diri untuk', 'Prepare Yourself to')}<br />
				{i18n.pick('Meraih', 'Win Your')} <span class="highlight-gold">{i18n.pick('Beasiswa Impian', 'Dream Scholarship')}</span>
			</h2>
			<p class="prep-desc">
				{i18n.pick(
					'Dapatkan pendampingan, informasi lengkap, dan strategi terbaik untuk meraih beasiswa bersama SDJNusantara.',
					'Get mentoring, comprehensive information, and winning strategies for scholarships with SDJNusantara.'
				)}
			</p>
			<a href="/beasiswa" class="prep-btn">
				<span>{i18n.pick('Mulai Persiapan Beasiswa', 'Start Scholarship Prep')}</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Col 3: Checklist (5 items) -->
		<div class="prep-col-checklist">
			<ul class="checklist-items">
				{#each checklist as item}
					<li class="check-item">
						<span class="check-icon">
							<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#08A6B5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<polyline points="20 6 9 17 4 12"/>
							</svg>
						</span>
						<span class="check-text">{@html item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.prep-edu-section {
		background: linear-gradient(180deg, #FFFFFF 0%, #FCFDFF 100%);
		padding: 16px 0 48px;
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.prep-bg-decor {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	.decor-swoosh-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 340px;
		height: 190px;
		pointer-events: none;
	}

	.prep-edu-container {
		width: 78%;
		max-width: 1240px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	/* Col 1: Photo */
	.prep-col-photo {
		flex: 0 0 310px;
		max-width: 310px;
	}

	.photo-card-wrap {
		position: relative;
		width: 100%;
	}

	/* Floating badge top-left */
	.floating-badge-wrap {
		position: absolute;
		top: -14px;
		left: -12px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sparkle-rays {
		width: 28px;
		height: 16px;
		margin-bottom: -4px;
	}

	.floating-badge-box {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: #08A6B5;
		border: 2.5px solid #FFFFFF;
		box-shadow: 0 6px 16px rgba(8, 166, 181, 0.35);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.photo-card {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 10px 26px rgba(11, 41, 72, 0.08);
		height: 200px;
		border: 1px solid #E2E8F0;
		background: #FFFFFF;
	}

	.prep-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.4s ease;
	}

	.photo-card:hover .prep-img {
		transform: scale(1.02);
	}

	.photo-corner-ribbon-left {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 95px;
		height: 58px;
		pointer-events: none;
		z-index: 2;
	}

	/* Col 2: Text */
	.prep-col-text {
		flex: 1 1 260px;
		max-width: 380px;
	}

	.prep-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.badge-dash {
		display: inline-block;
		width: 18px;
		height: 2.5px;
		background: #08A6B5;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 13px;
		font-weight: 700;
		color: #08A6B5;
		letter-spacing: 0.02em;
	}

	.prep-title {
		font-size: clamp(22px, 2vw, 27px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 12px;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB323;
	}

	.prep-desc {
		font-size: 13.5px;
		line-height: 1.6;
		color: #5A6A80;
		margin: 0 0 20px;
	}

	.prep-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #FFB323;
		color: #0B2948;
		font-size: 13.5px;
		font-weight: 700;
		padding: 11px 22px;
		border-radius: 8px;
		text-decoration: none;
		white-space: nowrap;
		box-shadow: 0 4px 14px rgba(255, 179, 35, 0.32);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.prep-btn:hover {
		background: #e6a01d;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 179, 35, 0.42);
	}

	/* Col 3: Checklist */
	.prep-col-checklist {
		flex: 1 1 310px;
		max-width: 350px;
	}

	.checklist-items {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.check-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 14px;
		background: #F8FBFC;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		transition: transform 0.2s, border-color 0.2s, background 0.2s;
	}

	.check-item:hover {
		transform: translateX(2px);
		background: #FFFFFF;
		border-color: #08A6B5;
		box-shadow: 0 3px 10px rgba(11, 41, 72, 0.04);
	}

	.check-icon {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #E6F7F8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.check-text {
		font-size: 13px;
		font-weight: 600;
		color: #0B2948;
		line-height: 1.35;
	}

	@media (max-width: 960px) {
		.prep-edu-container {
			width: 86%;
			flex-direction: column;
			align-items: flex-start;
			gap: 32px;
		}

		.prep-col-photo,
		.prep-col-text,
		.prep-col-checklist {
			max-width: 100%;
			width: 100%;
			flex: 1 1 100%;
		}

		.photo-card {
			height: 260px;
		}
	}

	@media (max-width: 640px) {
		.prep-edu-section {
			padding: 20px 0 44px;
		}

		.prep-edu-container {
			width: 92%;
		}

		.photo-card {
			height: 200px;
		}
	}
</style>
