<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="profile-section" id="profil">
	<!-- Subtle line art illustration on right background (opacity 0.08) -->
	<img src="/images/tentang-line-art.png" alt="" class="bg-line-art" />

	<div class="profile-container">
		<div class="profile-grid">
			<!-- Left: Image with 2 overlapping rounded color blocks popping on LEFT -->
			<div class="image-wrapper">
				<!-- Turquoise and Gold rounded decorative blocks popping from LEFT side -->
				<div class="deco-block deco-turquoise"></div>
				<div class="deco-block deco-gold"></div>

				<div class="image-box">
					<img
						src="/images/about-team-4-hd.jpg"
						alt="Tim dan Mahasiswa SDJNusantara"
						class="profile-img"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Right: Content & Stats -->
			<div class="content-wrapper">
				<div class="section-label">{i18n.pick('— Profil Perusahaan', '— Company Profile')}</div>

				<h2 class="company-title">SDJNusantara</h2>
				<h3 class="company-subtitle">
					{i18n.pick('Konsultan Pendidikan dan Pengembangan Talenta', 'Education & Talent Development Consultancy')}<br />
					{i18n.pick('untuk Masa Depan Indonesia', 'for Indonesia’s Future')}
				</h3>

				<p class="company-desc">
					{i18n.pick(
						'SDJNusantara adalah lembaga konsultan pendidikan yang berfokus pada pengembangan potensi individu dan institusi melalui program yang inovatif, terstruktur, dan berorientasi pada hasil. Kami percaya bahwa pendidikan adalah kunci utama untuk menciptakan generasi unggul dan berdaya saing global.',
						'SDJNusantara is an education consultancy focused on developing individual and institutional potential through innovative, structured, and outcome-oriented programs. We believe education is the key to cultivating a globally competitive generation.'
					)}
				</p>

				<!-- 3 Stats with vertical dividers (RATA TENGAH, tanpa garis horizontal atas) -->
				<div class="stats-row">
					<div class="stat-item">
						<span class="stat-number">200+</span>
						<span class="stat-label">{i18n.pick('Target Pemetaan Talenta', 'Talent Mapping Target')}</span>
					</div>

					<div class="stat-vdivider"></div>

					<div class="stat-item">
						<span class="stat-number">12</span>
						<span class="stat-label">{i18n.pick('Target Sosialisasi Beasiswa', 'Scholarship Outreach Target')}</span>
					</div>

					<div class="stat-vdivider"></div>

					<div class="stat-item">
						<span class="stat-number">60+</span>
						<span class="stat-label">{i18n.pick('Target Peserta Coaching', 'Coaching Participants Target')}</span>
					</div>
				</div>
				<p class="stat-note">{i18n.pick('*Target indikatif program tahun pertama', '*Indicative first-year program targets')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.profile-section {
		position: relative;
		background: #FFFFFF;
		height: 396px;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	.bg-line-art {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 380px;
		opacity: 0.08;
		pointer-events: none;
		z-index: 1;
	}

	.profile-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.profile-container {
			max-width: 1500px;
		}
	}

	.profile-grid {
		display: grid;
		grid-template-columns: 1fr 1.15fr;
		gap: 3.5rem;
		align-items: center;
	}

	/* Image & Decorations */
	.image-wrapper {
		position: relative;
		width: 100%;
		max-width: 540px;
	}

	.deco-block {
		position: absolute;
		z-index: 1;
	}

	.deco-turquoise {
		top: 40px;
		left: -35px;
		width: 55px;
		height: 165px;
		background: #00A6B2;
		border-radius: 12px;
	}

	.deco-gold {
		top: 145px;
		left: -18px;
		width: 40px;
		height: 130px;
		background: #F5B331;
		border-radius: 10px;
	}

	.image-box {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 300px;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(11, 39, 71, 0.12);
	}

	.profile-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	/* Content */
	.content-wrapper {
		display: flex;
		flex-direction: column;
	}

	.section-label {
		font-size: 13px;
		font-weight: 600;
		color: #00A6B2;
		margin-bottom: 0.35rem;
		letter-spacing: 0;
	}

	.company-title {
		font-size: clamp(28px, 2.5vw, 36px);
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.3rem 0;
		letter-spacing: -0.015em;
		line-height: 1.1;
	}

	.company-subtitle {
		font-size: 15px;
		font-weight: 700;
		color: #0B2747;
		line-height: 1.35;
		margin: 0 0 0.75rem 0;
	}

	.company-desc {
		font-size: 12.5px;
		line-height: 1.55;
		color: #183553;
		margin: 0 0 1.2rem 0;
		text-wrap: pretty;
	}

	/* Stats Row: 3 Kolom RATA TENGAH, HAPUS garis horizontal atas */
	.stats-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 490px;
		width: 100%;
		padding-top: 0.25rem;
		border-top: none;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2px;
	}

	.stat-number {
		font-size: 26px;
		font-weight: 800;
		color: #082442;
		line-height: 1;
	}

	.stat-label {
		font-size: 11px;
		font-weight: 500;
		color: #64748B;
		white-space: nowrap;
		text-align: center;
	}

	.stat-vdivider {
		width: 1px;
		height: 34px;
		background: #CBD5E1;
	}

	.stat-note {
		font-size: 9.5px;
		color: #94A3B8;
		font-style: italic;
		margin: 0.45rem 0 0 0;
	}

	@media (max-width: 900px) {
		.profile-section {
			height: auto;
			padding: 3rem 0;
		}
		.profile-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.image-wrapper {
			margin: 0 auto;
		}
		.deco-turquoise, .deco-gold {
			display: none;
		}
		.stats-row {
			justify-content: space-around;
			gap: 0.75rem;
		}
	}
</style>
