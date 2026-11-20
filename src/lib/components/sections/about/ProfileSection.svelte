<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
	import { scrollReveal } from '#lib/motion';
</script>

<section class="profile-section" id="profil">
	<!-- Subtle line art illustration on right background (opacity 0.08) -->
	<img src="/images/tentang-line-art.png" alt="" class="bg-line-art" />

	<div class="profile-container">
		<div class="profile-grid" use:scrollReveal={{ selector: '.image-wrapper, .content-wrapper', stagger: 0.1 }}>
			<!-- Left: Image with 2 overlapping rounded color blocks popping on LEFT -->
			<div class="image-wrapper">
				<!-- Turquoise and Gold rounded decorative blocks popping from LEFT side -->
				<div class="deco-block deco-turquoise"></div>
				<div class="deco-block deco-gold"></div>

				<div class="image-box">
					<img
						src="/images/about-team-4-hd.jpg"
						alt="Tim dan Mahasiswa SDJ Nusantara"
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
		margin: 0;
		text-wrap: pretty;
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
	}
</style>
