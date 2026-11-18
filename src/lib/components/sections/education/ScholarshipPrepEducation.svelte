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
	<div class="prep-edu-container">
		<!-- Col 1: Photo with Floating Badge -->
		<div class="prep-col-photo">
			<div class="photo-card-wrap">
				<!-- Top-Left Floating Graduation Badge -->
				<div class="floating-badge-wrap" aria-hidden="true">
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
				</div>
			</div>
		</div>

		<!-- Col 2: Text & CTA -->
		<div class="prep-col-text">
			<div class="prep-badge">
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
		background: #F8FAFC;
		padding: 72px 0 80px;
		width: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.prep-edu-container {
		width: 86%;
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 42px;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	/* Col 1: Photo */
	.prep-col-photo {
		flex: 0 0 340px;
		max-width: 340px;
	}

	.photo-card-wrap {
		position: relative;
		width: 100%;
	}

	/* Floating badge top-left */
	.floating-badge-wrap {
		position: absolute;
		top: -12px;
		left: -12px;
		z-index: 10;
		display: flex;
		align-items: center;
	}

	.floating-badge-box {
		width: 46px;
		height: 46px;
		border-radius: 12px;
		background: #08A6B5;
		border: 2.5px solid #FFFFFF;
		box-shadow: 0 4px 14px rgba(8, 166, 181, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.photo-card {
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 10px 24px rgba(11, 41, 72, 0.06);
		height: 225px;
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

	/* Col 2: Text */
	.prep-col-text {
		flex: 1 1 320px;
		max-width: 440px;
	}

	.prep-badge {
		display: inline-flex;
		align-items: center;
		margin-bottom: 12px;
	}

	.badge-text {
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.prep-title {
		font-size: clamp(26px, 2.5vw, 34px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 14px;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB323;
	}

	.prep-desc {
		font-size: 15.5px;
		line-height: 1.65;
		color: #5A6A80;
		margin: 0 0 24px;
	}

	.prep-btn {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		background: #FFB323;
		color: #0B2948;
		font-size: 14.5px;
		font-weight: 700;
		padding: 12px 24px;
		border-radius: 9px;
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
		flex: 1 1 360px;
		max-width: 420px;
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
		gap: 13px;
		padding: 12px 16px;
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
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: #E6F7F8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.check-text {
		font-size: 14.5px;
		font-weight: 600;
		color: #0B2948;
		line-height: 1.4;
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
