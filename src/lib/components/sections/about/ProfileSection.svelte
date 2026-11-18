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
				<div class="section-label">{i18n.pick('PROFIL PERUSAHAAN', 'COMPANY PROFILE')}</div>

				<h2 class="company-title">SDjNusantara</h2>
				<h3 class="company-subtitle">
					{i18n.pick('Konsultan Pengembangan Talenta untuk Masa Depan Indonesia', 'Talent Development Consultancy for Indonesia’s Future')}
				</h3>

				<p class="company-desc">
					{i18n.pick(
						'SDjNusantara adalah perusahaan konsultan yang berfokus pada pengembangan talenta, penguatan kapasitas organisasi, pendidikan, serta pengembangan program strategis yang berorientasi pada kebutuhan masa kini dan masa depan.',
						'SDjNusantara is a consulting firm focused on talent development, institutional capacity building, education, and strategic programs oriented toward present and future needs.'
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

		<!-- Centered Duo-Pill Divider (Teal + Gold) as seen in mockup -->
		<div class="section-duo-divider" aria-hidden="true">
			<span class="duo-pill teal"></span>
			<span class="duo-pill gold"></span>
		</div>
	</div>
</section>

<style>
	.profile-section {
		position: relative;
		background: #FFFFFF;
		min-height: 420px;
		height: auto;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		padding: 56px 0 32px 0;
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
		height: 180px;
		background: #00A6B2;
		border-radius: 12px;
	}

	.deco-gold {
		top: 155px;
		left: -18px;
		width: 40px;
		height: 145px;
		background: #F5B331;
		border-radius: 10px;
	}

	.image-box {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 330px;
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
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		margin-bottom: 0.45rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.company-title {
		font-size: clamp(30px, 2.8vw, 38px);
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.4rem 0;
		letter-spacing: -0.015em;
		line-height: 1.15;
	}

	.company-subtitle {
		font-size: 17px;
		font-weight: 700;
		color: #082442;
		line-height: 1.4;
		margin: 0 0 0.85rem 0;
	}

	.company-desc {
		font-size: 15px;
		line-height: 1.65;
		color: #37474F;
		margin: 0 0 1.5rem 0;
		text-wrap: pretty;
	}

	/* Stats Row: 3 Kolom RATA TENGAH, HAPUS garis horizontal atas */
	.stats-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 530px;
		width: 100%;
		padding-top: 0.25rem;
		border-top: none;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 3px;
	}

	.stat-number {
		font-size: 32px;
		font-weight: 800;
		color: #082442;
		line-height: 1;
	}

	.stat-label {
		font-size: 13px;
		font-weight: 600;
		color: #546E7A;
		white-space: nowrap;
		text-align: center;
	}

	.stat-vdivider {
		width: 1px;
		height: 40px;
		background: #CBD5E1;
	}

	.stat-note {
		font-size: 11.5px;
		color: #78909C;
		font-style: italic;
		margin: 0.55rem 0 0 0;
	}

	/* Centered Duo-Pill Divider */
	.section-duo-divider {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-top: 48px;
		width: 100%;
	}

	.duo-pill {
		width: 32px;
		height: 3.5px;
		border-radius: 99px;
		display: inline-block;
	}

	.duo-pill.teal {
		background: #00A6B2;
	}

	.duo-pill.gold {
		background: #F5B331;
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
