<script lang="ts">
	// ProgramFeaturedCard.svelte - Replikasi presisi sesuai design/program.png
</script>

<section class="featured-program-section">
	<!-- Outer decorative swooshes outside the card -->
	<div class="outer-decor-layer">
		<!-- Gold swoosh left (x 0→68, y 780→900) -->
		<svg class="swoosh-gold-left" viewBox="0 0 70 120" fill="none" preserveAspectRatio="none">
			<path d="M0 0 C35 30 65 70 70 120 H0 Z" fill="#F5B331" />
		</svg>

		<!-- Turquoise swoosh bottom-left (x 0→98, y 900→998) -->
		<svg class="swoosh-teal-left" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
			<path d="M0 0 C45 25 80 60 100 100 H0 Z" fill="#00A6B2" />
		</svg>

		<!-- Pale turquoise + gold line top-right (x 1425→1536, y 567→645) -->
		<svg class="swoosh-right-top" viewBox="0 0 120 80" fill="none" preserveAspectRatio="none">
			<path d="M120 0 C80 15 40 45 0 80 H120 Z" fill="#E0F7F9" />
			<path d="M120 8 C85 22 45 52 10 80" stroke="#F5B331" stroke-width="2.5" />
		</svg>
	</div>

	<div class="featured-container">
		<div class="featured-navy-card">
			<!-- Background Image in Center-Right -->
			<div class="card-bg-wrap">
				<img
					src="/images/program-featured-hijab.jpg"
					alt="Program Unggulan Persiapan Beasiswa"
					class="card-bg-photo"
					loading="lazy"
				/>
				<!-- Navy overlay fading from left -->
				<div class="card-photo-overlay"></div>
			</div>

			<!-- Left Column: Content -->
			<div class="card-left-col">
				<!-- Pill -->
				<div class="pill-tag">
					<span class="pill-dot"></span>
					<span class="pill-label">Program Unggulan</span>
				</div>

				<!-- Title -->
				<h2 class="card-title">
					Program Persiapan Beasiswa<br />
					Dalam dan Luar Negeri
				</h2>

				<!-- Description -->
				<p class="card-desc">
					Pendampingan komprehensif untuk membantu peserta<br />
					menempuh pendidikan di perguruan tinggi terbaik<br />
					melalui jalur beasiswa.
				</p>

				<!-- 3 Meta Items -->
				<div class="meta-row">
					<!-- Item 1 -->
					<div class="meta-item">
						<div class="meta-icon-teal">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<polyline points="12 6 12 12 16 14"></polyline>
							</svg>
						</div>
						<div class="meta-text">
							<span class="meta-line-1">12 Minggu</span>
							<span class="meta-line-2">Durasi Program</span>
						</div>
					</div>

					<!-- Item 2 -->
					<div class="meta-item">
						<div class="meta-icon-teal">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
							</svg>
						</div>
						<div class="meta-text">
							<span class="meta-line-1">Siswa, Mahasiswa</span>
							<span class="meta-line-2">dan Fresh Graduate</span>
						</div>
					</div>

					<!-- Item 3 -->
					<div class="meta-item">
						<div class="meta-icon-teal">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								<line x1="8" y1="21" x2="16" y2="21"></line>
								<line x1="12" y1="17" x2="12" y2="21"></line>
							</svg>
						</div>
						<div class="meta-text">
							<span class="meta-line-1">Online &amp; Offline</span>
							<span class="meta-line-2">Flexibel</span>
						</div>
					</div>
				</div>

				<!-- Button -->
				<div class="btn-row">
					<a href="/layanan/pendidikan/program/persiapan-beasiswa-dalam-negeri" class="btn-gold">
						<span>Lihat Detail Program</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>
			</div>

			<!-- Right Column: Translucent Glass Card -->
			<div class="card-right-col">
				<div class="glass-keunggulan-card">
					<h3 class="glass-title">Keunggulan Program</h3>
					<ul class="glass-list">
						<li>
							<div class="glass-icon-teal">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<span class="glass-item-text">Pendampingan personal</span>
						</li>

						<li>
							<div class="glass-icon-teal">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							</div>
							<span class="glass-item-text">Simulasi wawancara</span>
						</li>

						<li>
							<div class="glass-icon-teal">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
								</svg>
							</div>
							<span class="glass-item-text">Review dokumen aplikasi</span>
						</li>

						<li>
							<div class="glass-icon-teal">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="2" y1="12" x2="22" y2="12"></line>
								</svg>
							</div>
							<span class="glass-item-text">Strategi pemilihan beasiswa</span>
						</li>

						<li>
							<div class="glass-icon-teal">
								<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
								</svg>
							</div>
							<span class="glass-item-text">Mentor berpengalaman</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.featured-program-section {
		position: relative;
		background: #FFFFFF;
		width: 100%;
		padding: 10px 0 14px;
		box-sizing: border-box;
	}

	.outer-decor-layer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	.swoosh-gold-left {
		position: absolute;
		top: 25%;
		left: 0;
		width: 68px;
		height: 120px;
	}

	.swoosh-teal-left {
		position: absolute;
		bottom: 15px;
		left: 0;
		width: 98px;
		height: 100px;
	}

	.swoosh-right-top {
		position: absolute;
		top: 8px;
		right: 0;
		width: 110px;
		height: 80px;
	}

	.featured-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.featured-container {
			max-width: 1500px;
		}
	}

	.featured-navy-card {
		position: relative;
		width: 100%;
		height: 390px;
		background: linear-gradient(135deg, #0B2948 0%, #082442 100%);
		border-radius: 27px;
		overflow: hidden;
		box-shadow: 0 12px 36px rgba(11, 41, 72, 0.22);
		display: grid;
		grid-template-columns: 1.45fr 1fr;
		align-items: center;
		padding: 0 42px 0 54px;
		box-sizing: border-box;
	}

	.card-bg-wrap {
		position: absolute;
		top: 0;
		right: 280px;
		bottom: 0;
		width: 580px;
		z-index: 1;
		overflow: hidden;
	}

	.card-bg-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.card-photo-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			#0B2948 0%,
			rgba(11, 41, 72, 0.94) 30%,
			rgba(11, 41, 72, 0.55) 60%,
			rgba(11, 41, 72, 0.15) 100%
		);
	}

	.card-left-col {
		position: relative;
		z-index: 3;
		max-width: 560px;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 3px 12px;
		background: rgba(0, 166, 178, 0.2);
		border: 1px solid rgba(0, 166, 178, 0.4);
		border-radius: 20px;
		margin-bottom: 0.65rem;
	}

	.pill-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #00A6B2;
	}

	.pill-label {
		font-size: 11px;
		font-weight: 700;
		color: #FFFFFF;
	}

	.card-title {
		font-size: clamp(24px, 2.1vw, 32px);
		line-height: 1.15;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 0.75rem 0;
		letter-spacing: -0.015em;
	}

	.card-desc {
		font-size: 13.5px;
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.88);
		margin: 0 0 1.25rem 0;
	}

	.meta-row {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-bottom: 1.5rem;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.meta-icon-teal {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 3px 10px rgba(0, 166, 178, 0.3);
	}

	.meta-text {
		display: flex;
		flex-direction: column;
	}

	.meta-line-1 {
		font-size: 12.5px;
		font-weight: 700;
		color: #FFFFFF;
		line-height: 1.25;
	}

	.meta-line-2 {
		font-size: 11px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.25;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background: #F5B331;
		color: #071D36;
		width: 228px;
		height: 44px;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.3);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 14px;
	}

	/* Right Glass Card */
	.card-right-col {
		position: relative;
		z-index: 3;
		display: flex;
		justify-content: flex-end;
	}

	.glass-keunggulan-card {
		background: rgba(11, 41, 72, 0.65);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 21px;
		padding: 22px 26px;
		width: 100%;
		max-width: 290px;
		box-sizing: border-box;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
	}

	.glass-title {
		font-size: 14px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 1rem 0;
		letter-spacing: -0.01em;
	}

	.glass-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.glass-list li {
		display: flex;
		align-items: center;
		gap: 10px;
		white-space: nowrap;
	}

	.glass-icon-teal {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.glass-item-text {
		font-size: 12.5px;
		font-weight: 500;
		color: #FFFFFF;
		white-space: nowrap;
	}

	@media (max-width: 1099px) {
		.featured-navy-card {
			height: auto;
			grid-template-columns: 1fr;
			padding: 2rem 1.5rem;
			gap: 2rem;
		}

		.card-bg-wrap {
			display: none;
		}

		.card-right-col {
			justify-content: flex-start;
		}

		.glass-keunggulan-card {
			max-width: 100%;
		}
	}

	@media (max-width: 767px) {
		.meta-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}

		.btn-gold {
			width: 100%;
		}
	}
</style>
