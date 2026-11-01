<script lang="ts">
	// ProfileSection.svelte - Faithful to design/tentang-kami.png
</script>

<section class="profile-section" id="profil">
	<!-- Subtle line art illustration on right background -->
	<img src="/images/tentang-line-art.png" alt="" class="bg-line-art" />

	<div class="profile-container">
		<div class="profile-grid">
			<!-- Left: Image with 2 overlapping rounded color blocks -->
			<div class="image-wrapper">
				<!-- Turquoise and Gold rounded decorative blocks popping from bottom-left -->
				<div class="deco-block deco-turquoise"></div>
				<div class="deco-block deco-gold"></div>

				<div class="image-box">
					<img
						src="/images/about-team-4.jpg"
						alt="Tim dan Mahasiswa SDJNusantara"
						class="profile-img"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Right: Content & Stats -->
			<div class="content-wrapper">
				<div class="section-label">
					<span class="label-line"></span>
					<span class="label-text">Profil Perusahaan</span>
				</div>

				<h2 class="company-title">SDJNusantara</h2>
				<h3 class="company-subtitle">
					Konsultan Pendidikan dan Pengembangan Talenta<br />
					untuk Masa Depan Indonesia
				</h3>

				<p class="company-desc">
					SDJNusantara adalah lembaga konsultan pendidikan yang berfokus pada pengembangan potensi individu dan institusi melalui program yang inovatif, terstruktur, dan berorientasi pada hasil. Kami percaya bahwa pendidikan adalah kunci utama untuk menciptakan generasi unggul dan berdaya saing global.
				</p>

				<!-- 3 Stats with vertical dividers -->
				<div class="stats-row">
					<div class="stat-item">
						<span class="stat-number">200+</span>
						<span class="stat-label">Target Pemetaan Talenta</span>
					</div>

					<div class="stat-vdivider"></div>

					<div class="stat-item">
						<span class="stat-number">12</span>
						<span class="stat-label">Target Sosialisasi Beasiswa</span>
					</div>

					<div class="stat-vdivider"></div>

					<div class="stat-item">
						<span class="stat-number">60+</span>
						<span class="stat-label">Target Peserta Coaching</span>
					</div>
				</div>
				<p class="stat-note">*Target indikatif program tahun pertama</p>
			</div>
		</div>
	</div>
</section>

<style>
	.profile-section {
		position: relative;
		background: #FFFFFF;
		padding: 3.5rem 0 3rem;
		overflow: hidden;
	}

	.bg-line-art {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 320px;
		opacity: 0.05;
		pointer-events: none;
		z-index: 1;
	}

	.profile-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
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
		max-width: 440px;
	}

	.deco-block {
		position: absolute;
		border-radius: 14px;
		z-index: 1;
	}

	.deco-turquoise {
		bottom: -14px;
		left: -14px;
		width: 90px;
		height: 90px;
		background: #00A6B2;
	}

	.deco-gold {
		bottom: -22px;
		left: 20px;
		width: 75px;
		height: 75px;
		background: #F4B334;
	}

	.image-box {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 290px;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(11, 39, 71, 0.1);
	}

	.profile-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 25%;
		display: block;
	}

	/* Content */
	.content-wrapper {
		display: flex;
		flex-direction: column;
	}

	.section-label {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 0.5rem;
	}

	.label-line {
		width: 16px;
		height: 2px;
		background: #00A6B2;
	}

	.label-text {
		font-size: 11px;
		font-weight: 700;
		color: #00A6B2;
	}

	.company-title {
		font-size: 26px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.35rem 0;
		letter-spacing: -0.015em;
	}

	.company-subtitle {
		font-size: 13.5px;
		font-weight: 700;
		color: #0B2747;
		line-height: 19px;
		margin: 0 0 0.85rem 0;
	}

	.company-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #475569;
		margin: 0 0 1.5rem 0;
	}

	/* Stats Row */
	.stats-row {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding-top: 1rem;
		border-top: 1px solid #E2E8F0;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.stat-number {
		font-size: 24px;
		font-weight: 800;
		color: #082442;
		line-height: 1;
	}

	.stat-label {
		font-size: 10.5px;
		font-weight: 500;
		color: #64748B;
		white-space: nowrap;
	}

	.stat-vdivider {
		width: 1px;
		height: 38px;
		background: #CBD5E1;
	}

	.stat-note {
		font-size: 9px;
		color: #94A3B8;
		font-style: italic;
		margin: 0.5rem 0 0 0;
	}

	@media (max-width: 900px) {
		.profile-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.image-wrapper {
			margin: 0 auto;
		}
	}
</style>
