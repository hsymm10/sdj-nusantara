<script lang="ts">
	// ProgramFeaturedCard.svelte - Faithful to design/program.png
</script>

<section class="featured-program-section">
	<div class="featured-container">
		<!-- Outer gold/teal decorative accents -->
		<div class="card-outer-wrap">
			<!-- Gold accent left -->
			<div class="deco-accent deco-gold-left"></div>
			<!-- Teal accent bottom-left -->
			<div class="deco-accent deco-teal-left"></div>

			<!-- Main Big Navy Card -->
			<div class="featured-navy-card">
				<!-- Left Text Column -->
				<div class="card-left-col">
					<div class="pill-tag">
						<span class="pill-dot"></span>
						<span class="pill-label">Program Unggulan</span>
					</div>

					<h2 class="card-title">
						Program Persiapan Beasiswa Dalam dan Luar Negeri
					</h2>

					<p class="card-desc">
						Pendampingan komprehensif untuk membantu peserta menempuh pendidikan di perguruan tinggi terbaik melalui jalur beasiswa.
					</p>

					<!-- 3 Meta Badges -->
					<div class="meta-row">
						<div class="meta-item">
							<div class="meta-icon">
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
									<line x1="16" y1="2" x2="16" y2="6"></line>
									<line x1="8" y1="2" x2="8" y2="6"></line>
								</svg>
							</div>
							<div class="meta-text">
								<span class="meta-val">12 Minggu</span>
								<span class="meta-lbl">Durasi Program</span>
							</div>
						</div>

						<div class="meta-item">
							<div class="meta-icon">
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
								</svg>
							</div>
							<div class="meta-text">
								<span class="meta-val">Siswa, Mahasiswa</span>
								<span class="meta-lbl">dan Fresh Graduate</span>
							</div>
						</div>

						<div class="meta-item">
							<div class="meta-icon">
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
									<line x1="8" y1="21" x2="16" y2="21"></line>
									<line x1="12" y1="17" x2="12" y2="21"></line>
								</svg>
							</div>
							<div class="meta-text">
								<span class="meta-val">Online &amp; Offline</span>
								<span class="meta-lbl">Flexibel</span>
							</div>
						</div>
					</div>

					<!-- Button -->
					<div class="btn-wrap">
						<a href="#daftar-program" class="btn-gold">
							<span>Lihat Detail Program</span>
							<span class="btn-arrow">→</span>
						</a>
					</div>
				</div>

				<!-- Right Photo & Glass Feature Card -->
				<div class="card-right-col">
					<div class="featured-photo-box">
						<img
							src="/images/program-featured-hijab.jpg"
							alt="Program Persiapan Beasiswa"
							class="featured-photo"
							loading="lazy"
						/>
					</div>

					<!-- Glass Card: Keunggulan Program -->
					<div class="glass-keunggulan-card">
						<h4 class="keunggulan-title">Keunggulan Program</h4>
						<ul class="keunggulan-list">
							<li>
								<div class="k-icon">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<span>Pendampingan personal</span>
							</li>
							<li>
								<div class="k-icon">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
									</svg>
								</div>
								<span>Simulasi wawancara</span>
							</li>
							<li>
								<div class="k-icon">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									</svg>
								</div>
								<span>Review dokumen aplikasi</span>
							</li>
							<li>
								<div class="k-icon">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10"></circle>
										<line x1="2" y1="12" x2="22" y2="12"></line>
									</svg>
								</div>
								<span>Strategi pemilihan beasiswa</span>
							</li>
							<li>
								<div class="k-icon">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
									</svg>
								</div>
								<span>Mentor berpengalaman</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.featured-program-section {
		background: #FFFFFF;
		padding: 1.5rem 0 3.5rem;
	}

	.featured-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 1.25rem;
		box-sizing: border-box;
	}

	.card-outer-wrap {
		position: relative;
		width: 100%;
	}

	.deco-accent {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
		z-index: 1;
	}

	.deco-gold-left {
		top: -15px;
		left: -20px;
		width: 90px;
		height: 90px;
		background: #F4B334;
		opacity: 0.85;
	}

	.deco-teal-left {
		bottom: -15px;
		left: -15px;
		width: 70px;
		height: 70px;
		background: #00A6B2;
		opacity: 0.85;
	}

	.featured-navy-card {
		position: relative;
		z-index: 2;
		background: #082442;
		border-radius: 18px;
		overflow: hidden;
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		align-items: center;
		box-shadow: 0 12px 35px rgba(8, 36, 66, 0.2);
	}

	/* Left Col */
	.card-left-col {
		padding: 2.5rem 2.2rem;
		display: flex;
		flex-direction: column;
	}

	.pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 3px 10px;
		background: rgba(0, 166, 178, 0.2);
		border: 1px solid rgba(0, 166, 178, 0.4);
		border-radius: 20px;
		margin-bottom: 0.85rem;
		align-self: flex-start;
	}

	.pill-dot {
		width: 5px;
		height: 5px;
		background: #00A6B2;
		border-radius: 50%;
	}

	.pill-label {
		font-size: 10.5px;
		font-weight: 600;
		color: #FFFFFF;
		letter-spacing: 0.02em;
	}

	.card-title {
		font-size: 23px;
		font-weight: 800;
		color: #FFFFFF;
		line-height: 30px;
		margin: 0 0 0.65rem 0;
		letter-spacing: -0.01em;
	}

	.card-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 1.5rem 0;
	}

	/* Meta Badges */
	.meta-row {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		margin-bottom: 1.75rem;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.meta-icon {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.15);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.meta-text {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.meta-val {
		font-size: 10.5px;
		font-weight: 700;
		color: #FFFFFF;
		margin-bottom: 2px;
	}

	.meta-lbl {
		font-size: 9px;
		color: rgba(255, 255, 255, 0.65);
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F4B334;
		color: #071D36;
		padding: 7px 18px;
		font-size: 11px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		align-self: flex-start;
		box-shadow: 0 2px 8px rgba(244, 179, 52, 0.25);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
	}

	/* Right Col */
	.card-right-col {
		position: relative;
		width: 100%;
		height: 320px;
	}

	.featured-photo-box {
		width: 100%;
		height: 100%;
	}

	.featured-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		display: block;
	}

	/* Floating Glass Card */
	.glass-keunggulan-card {
		position: absolute;
		right: 1.5rem;
		top: 50%;
		transform: translateY(-50%);
		width: 185px;
		background: rgba(11, 41, 72, 0.75);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 14px;
		padding: 1.15rem 1rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
		z-index: 3;
	}

	.keunggulan-title {
		font-size: 11px;
		font-weight: 700;
		color: #FFFFFF;
		margin: 0 0 0.75rem 0;
	}

	.keunggulan-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.keunggulan-list li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 9.5px;
		color: rgba(255, 255, 255, 0.9);
	}

	.k-icon {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.featured-navy-card {
			grid-template-columns: 1fr;
		}
		.card-right-col {
			height: 260px;
		}
		.glass-keunggulan-card {
			position: static;
			transform: none;
			width: 100%;
			border-radius: 0;
		}
	}
</style>
