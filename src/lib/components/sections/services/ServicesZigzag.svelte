<script lang="ts">
	// ServicesZigzag.svelte - Faithful to design/layanan.png
</script>

<div class="services-zigzag-wrap" id="daftar-layanan">
	<div class="zigzag-container">

		<!-- 01 Talent Management & Development Center (Text Left, Photo Right) -->
		<div class="zigzag-block">
			<!-- Text Left -->
			<div class="block-content">
				<div class="block-header">
					<span class="block-badge badge-navy">01</span>
					<h3 class="block-title">Talent Management &amp; Development Center</h3>
				</div>

				<p class="block-desc">
					Program pengembangan talenta yang terstruktur untuk membantu individu mengenali potensi, merencanakan pendidikan, dan mempersiapkan karier yang lebih baik.
				</p>

				<!-- 4 Chips 2x2 -->
				<div class="chips-grid">
					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<circle cx="12" cy="12" r="3"></circle>
							</svg>
						</div>
						<span>Asesmen Potensi Individu</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="16" y1="2" x2="16" y2="6"></line>
								<line x1="8" y1="2" x2="8" y2="6"></line>
							</svg>
						</div>
						<span>Perencanaan Pendidikan &amp; Karier</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
							</svg>
						</div>
						<span>Pendampingan Personal</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
							</svg>
						</div>
						<span>Monitoring Perkembangan</span>
					</div>
				</div>

				<a href="/kontak" class="btn-gold">
					<span>Konsultasi Layanan Ini</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Photo Right with floating Navy Card -->
			<div class="block-photo-wrap">
				<div class="photo-box">
					<img src="/images/svc-01-woman-tablet.jpg" alt="Talent Management" class="service-photo" loading="lazy" />
				</div>
				<!-- Floating Navy Card -->
				<div class="floating-card card-navy">
					<h4 class="float-title">Target Pengguna</h4>
					<ul class="float-list">
						<li>
							<span class="float-dot"></span>
							<span>Pelajar</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Mahasiswa</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Fresh Graduate</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Profesional Muda</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 02 Scholarship Academy (Photo Left, Text Right) -->
		<div class="zigzag-block reverse">
			<!-- Photo Left with floating White Card -->
			<div class="block-photo-wrap">
				<div class="photo-box">
					<img src="/images/svc-02-graduation-cap.jpg" alt="Scholarship Academy" class="service-photo" loading="lazy" />
				</div>
				<!-- Floating White Card -->
				<div class="floating-card card-white">
					<h4 class="float-title title-teal">Output Layanan</h4>
					<ul class="float-list list-dark">
						<li>
							<span class="check-icon">✓</span>
							<span>Strategi aplikasi beasiswa</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Dokumen siap submit</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Peningkatan peluang lolos</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Pendampingan hingga tahap akhir</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Text Right -->
			<div class="block-content">
				<div class="block-header">
					<span class="block-badge badge-teal">02</span>
					<h3 class="block-title">Scholarship Academy</h3>
				</div>

				<p class="block-desc">
					Layanan pendampingan persiapan beasiswa dalam dan luar negeri dengan pendekatan terarah dan berbasis pengalaman.
				</p>

				<!-- 4 Chips -->
				<div class="chips-grid">
					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<circle cx="12" cy="12" r="6"></circle>
							</svg>
						</div>
						<span>Konsultasi Pemilihan Beasiswa</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
							</svg>
						</div>
						<span>Simulasi Wawancara</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
							</svg>
						</div>
						<span>Pendampingan Dokumen</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
							</svg>
						</div>
						<span>Strategi Persiapan Personal</span>
					</div>
				</div>

				<a href="/beasiswa" class="btn-gold">
					<span>Pelajari Lebih Lanjut</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>
		</div>

		<!-- 03 Skills Development & Certification (Text Left, Photo Right) -->
		<div class="zigzag-block">
			<!-- Text Left -->
			<div class="block-content">
				<div class="block-header">
					<span class="block-badge badge-navy">03</span>
					<h3 class="block-title">Skills Development &amp; Certification</h3>
				</div>

				<p class="block-desc">
					Pelatihan dan sertifikasi untuk meningkatkan keterampilan teknis dan non-teknis yang relevan dengan kebutuhan industri dan dunia pendidikan.
				</p>

				<!-- 4 Chips -->
				<div class="chips-grid">
					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
							</svg>
						</div>
						<span>Pelatihan Keterampilan Digital</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
							</svg>
						</div>
						<span>Workshop &amp; Bootcamp</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="8" r="7"></circle>
								<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
							</svg>
						</div>
						<span>Sertifikasi Kompetensi</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="16 3 21 3 21 8"></polyline>
								<line x1="4" y1="20" x2="21" y2="3"></line>
							</svg>
						</div>
						<span>Program Upskilling &amp; Reskilling</span>
					</div>
				</div>

				<a href="/program" class="btn-gold">
					<span>Lihat Program Pelatihan</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Photo Right with floating Navy Card -->
			<div class="block-photo-wrap">
				<div class="photo-box">
					<img src="/images/svc-03-man-laptop.jpg" alt="Skills Development" class="service-photo" loading="lazy" />
				</div>
				<!-- Floating Navy Card -->
				<div class="floating-card card-navy">
					<h4 class="float-title">Bidang Pelatihan</h4>
					<ul class="float-list">
						<li>
							<span class="float-dot"></span>
							<span>Teknologi &amp; Digital Skills</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Soft Skills</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Kepemimpinan</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Bahasa &amp; Komunikasi</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Lainnya</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 04 Institutional & Strategic Partnership (Photo Left, Text Right) -->
		<div class="zigzag-block reverse">
			<!-- Photo Left with floating Card -->
			<div class="block-photo-wrap">
				<div class="photo-box">
					<img src="/images/svc-04-handshake.jpg" alt="Institutional Partnership" class="service-photo" loading="lazy" />
				</div>
				<!-- Floating Light Card -->
				<div class="floating-card card-white">
					<h4 class="float-title title-teal">Bentuk Kerja Sama</h4>
					<ul class="float-list list-dark">
						<li>
							<span class="check-icon">✓</span>
							<span>Program pendidikan bersama</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Pelatihan dan sertifikasi</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Pengembangan talenta</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Riset dan inovasi</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Kegiatan sosial dan edukatif</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Text Right -->
			<div class="block-content">
				<div class="block-header">
					<span class="block-badge badge-teal">04</span>
					<h3 class="block-title">Institutional &amp; Strategic Partnership</h3>
				</div>

				<p class="block-desc">
					Membangun kolaborasi strategis dengan institusi pendidikan, lembaga pemerintah, perusahaan, dan organisasi untuk menciptakan dampak yang lebih luas.
				</p>

				<!-- 4 Chips -->
				<div class="chips-grid">
					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
							</svg>
						</div>
						<span>Kolaborasi Program</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
							</svg>
						</div>
						<span>Corporate Training</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
								<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
							</svg>
						</div>
						<span>Pengembangan Kurikulum</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="12" y1="2" x2="12" y2="6"></line>
								<circle cx="12" cy="12" r="5"></circle>
							</svg>
						</div>
						<span>Riset &amp; Inovasi Pendidikan</span>
					</div>
				</div>

				<a href="/kemitraan" class="btn-gold">
					<span>Ajukan Kerja Sama</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>
		</div>

		<!-- 05 Digital Education & Learning Platform (Text Left, Photo Right) -->
		<div class="zigzag-block">
			<!-- Text Left -->
			<div class="block-content">
				<div class="block-header">
					<span class="block-badge badge-teal">05</span>
					<h3 class="block-title">Digital Education &amp; Learning Platform</h3>
				</div>

				<p class="block-desc">
					Solusi pembelajaran digital untuk mendukung proses pendidikan yang lebih inklusif, fleksibel, dan berkelanjutan.
				</p>

				<!-- 4 Chips -->
				<div class="chips-grid">
					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
							</svg>
						</div>
						<span>Pengembangan Platform</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
							</svg>
						</div>
						<span>Sistem Manajemen Pembelajaran</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<polygon points="10 8 16 12 10 16 10 8"></polygon>
							</svg>
						</div>
						<span>Konten Pembelajaran Digital</span>
					</div>

					<div class="chip-item">
						<div class="chip-icon">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
							</svg>
						</div>
						<span>Integrasi dengan Institusi</span>
					</div>
				</div>

				<a href="/kontak" class="btn-gold">
					<span>Diskusikan Kebutuhan Anda</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Photo Right with floating Navy Card -->
			<div class="block-photo-wrap">
				<div class="photo-box">
					<img src="/images/svc-05-video-call.jpg" alt="Digital Education" class="service-photo" loading="lazy" />
				</div>
				<!-- Floating Navy Card -->
				<div class="floating-card card-navy">
					<h4 class="float-title">Keunggulan</h4>
					<ul class="float-list">
						<li>
							<span class="float-dot"></span>
							<span>Fleksibel &amp; Mudah Diakses</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Konten Berkualitas</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Interaktif &amp; Kolaboratif</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Dapat Disesuaikan</span>
						</li>
						<li>
							<span class="float-dot"></span>
							<span>Mendukung Pembelajaran Berkelanjutan</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</div>

<style>
	.services-zigzag-wrap {
		background: #FFFFFF;
		padding: 3rem 0 4rem;
	}

	.zigzag-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.zigzag-block {
		display: grid;
		grid-template-columns: 1fr 1.05fr;
		gap: 3.5rem;
		align-items: center;
	}

	.zigzag-block.reverse {
		grid-template-columns: 1.15fr 1fr;
	}

	.zigzag-block.reverse .block-photo-wrap {
		margin-left: -2rem;
		width: calc(100% + 2rem);
	}

	.zigzag-block.reverse .photo-box {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	/* Text Column */
	.block-content {
		display: flex;
		flex-direction: column;
	}

	.block-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 0.65rem;
	}

	.block-badge {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		color: #FFFFFF;
		font-size: 13px;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.badge-navy {
		background: #0B2948;
	}

	.badge-teal {
		background: #00A6B2;
	}

	.block-title {
		font-size: 19px;
		font-weight: 800;
		color: #082442;
		line-height: 25px;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.block-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #475569;
		margin: 0 0 1.25rem 0;
	}

	/* Chips 2x2 */
	.chips-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem 1rem;
		margin-bottom: 1.5rem;
	}

	.chip-item {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 10.5px;
		font-weight: 600;
		color: #1E293B;
		line-height: 14px;
	}

	.chip-icon {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
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

	/* Photo Column with floating Card */
	.block-photo-wrap {
		position: relative;
		width: 100%;
	}

	.photo-box {
		width: 100%;
		height: 260px;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 8px 30px rgba(11, 39, 71, 0.08);
	}

	.service-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	/* Floating Cards */
	.floating-card {
		position: absolute;
		right: -15px;
		top: 50%;
		transform: translateY(-50%);
		width: 190px;
		border-radius: 14px;
		padding: 1.15rem 1.1rem;
		box-shadow: 0 10px 30px rgba(11, 39, 71, 0.15);
		z-index: 3;
	}

	.zigzag-block.reverse .floating-card {
		right: -15px;
	}

	.card-navy {
		background: #0B2948;
		color: #FFFFFF;
	}

	.card-white {
		background: #FFFFFF;
		color: #1E293B;
		border: 1px solid #E2E8F0;
	}

	.float-title {
		font-size: 11px;
		font-weight: 700;
		margin: 0 0 0.65rem 0;
		color: #FFFFFF;
	}

	.title-teal {
		color: #00A6B2;
	}

	.float-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.float-list li {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 9.5px;
		line-height: 13px;
		color: rgba(255, 255, 255, 0.85);
	}

	.list-dark li {
		color: #475569;
	}

	.float-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #00A6B2;
		flex-shrink: 0;
	}

	.check-icon {
		font-size: 11px;
		font-weight: 800;
		color: #00A6B2;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.zigzag-block,
		.zigzag-block.reverse {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.floating-card {
			position: static;
			transform: none;
			width: 100%;
			margin-top: 1rem;
		}
	}
</style>
