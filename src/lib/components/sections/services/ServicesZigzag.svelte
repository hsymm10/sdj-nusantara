<script lang="ts">
	// ServicesZigzag.svelte - Replikasi presisi 5 blok layanan sesuai design/layanan.png
	// Tipe A (01, 03, 05): Teks Kiri, Foto Kanan dengan Kartu Navy di dalam foto
	// Tipe B (02, 04): Foto Kiri Menempel Tepi Layar, Teks Tengah, Kartu Terang di Kanan
</script>

<div class="services-zigzag-wrap" id="daftar-layanan">

	<!-- ==========================================
	     BLOK 01: Talent Management & Development Center (Tipe A)
	     Target tinggi: ±388px pada 1536
	     ========================================== -->
	<section class="zigzag-block block-type-a block-01" id="layanan-1">
		<div class="block-container">
			<div class="grid-type-a">
				<!-- Left: Text -->
				<div class="text-col">
					<div class="title-row">
						<span class="badge-num badge-navy">01</span>
						<h3 class="service-title">
							Talent Management &amp;<br />
							Development Center
						</h3>
					</div>

					<p class="service-desc">
						Program pengembangan talenta yang terstruktur untuk membantu individu mengenali potensi, merencanakan pendidikan, dan mempersiapkan karier yang lebih baik.
					</p>

					<!-- 4 Chips 2x2 -->
					<div class="chips-grid">
						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<circle cx="12" cy="12" r="3"></circle>
								</svg>
							</div>
							<span>Asesmen Potensi Individu</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
									<line x1="16" y1="2" x2="16" y2="6"></line>
									<line x1="8" y1="2" x2="8" y2="6"></line>
								</svg>
							</div>
							<span>Perencanaan Pendidikan &amp; Karier</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
								</svg>
							</div>
							<span>Pendampingan Personal</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
								</svg>
							</div>
							<span>Monitoring Perkembangan</span>
						</div>
					</div>

					<a href="/konsultasi" class="btn-gold">
						<span>Konsultasi Layanan Ini</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>

				<!-- Right: Photo with Floating Navy Card -->
				<div class="photo-col-a">
					<div class="photo-frame-a">
						<img
							src="/images/svc-01-woman-tablet.jpg"
							alt="Talent Management"
							class="photo-img"
							loading="lazy"
						/>
					</div>

					<!-- Floating Navy Card on right side of photo -->
					<div class="card-floating-navy">
						<h4 class="card-float-title">Target Pengguna</h4>
						<ul class="card-float-list">
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
								</span>
								<span>Pelajar</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
								</span>
								<span>Mahasiswa</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
								</span>
								<span>Fresh Graduate</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
								</span>
								<span>Profesional Muda</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ==========================================
	     BLOK 02: Scholarship Academy (Tipe B)
	     Target tinggi: ±367px pada 1536
	     ========================================== -->
	<section class="zigzag-block block-type-b block-02" id="layanan-2">
		<!-- Photo menempel tepi kiri layar (x 0→540) -->
		<div class="fullbleed-photo-left">
			<img
				src="/images/svc-02-graduation-cap.jpg"
				alt="Scholarship Academy"
				class="photo-img-left"
				loading="lazy"
			/>
		</div>

		<div class="block-container">
			<div class="grid-type-b">
				<!-- Spacer for left photo -->
				<div class="photo-spacer-b"></div>

				<!-- Center: Text -->
				<div class="text-col-b">
					<div class="title-row">
						<span class="badge-num badge-teal">02</span>
						<h3 class="service-title">
							Scholarship Academy
						</h3>
					</div>

					<p class="service-desc">
						Layanan pendampingan persiapan beasiswa dalam dan luar negeri dengan pendekatan terarah dan berbasis pengalaman.
					</p>

					<!-- 4 Chips -->
					<div class="chips-grid">
						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<circle cx="12" cy="12" r="6"></circle>
								</svg>
							</div>
							<span>Konsultasi Pemilihan Beasiswa</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							</div>
							<span>Simulasi Wawancara</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
								</svg>
							</div>
							<span>Pendampingan Dokumen</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
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

				<!-- Right: Light Card (#F4F8FB) Output Layanan -->
				<div class="card-col-b">
					<div class="card-light-output">
						<h4 class="card-light-title">Output Layanan</h4>
						<ul class="card-light-list">
							<li>
								<span class="check-mark">✓</span>
								<span>Strategi aplikasi beasiswa</span>
							</li>
							<li>
								<span class="check-mark">✓</span>
								<span>Dokumen siap submit</span>
							</li>
							<li>
								<span class="check-mark">✓</span>
								<span>Peningkatan peluang lolos</span>
							</li>
							<li>
								<span class="check-mark">✓</span>
								<span>Pendampingan hingga tahap akhir</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ==========================================
	     BLOK 03: Skills Development & Certification (Tipe A)
	     Target tinggi: ±401px pada 1536
	     ========================================== -->
	<section class="zigzag-block block-type-a block-03" id="layanan-3">
		<div class="block-container">
			<div class="grid-type-a">
				<!-- Left: Text -->
				<div class="text-col">
					<div class="title-row">
						<span class="badge-num badge-navy">03</span>
						<h3 class="service-title">
							Skills Development &amp;<br />
							Certification
						</h3>
					</div>

					<p class="service-desc">
						Pelatihan dan sertifikasi untuk meningkatkan keterampilan teknis dan non-teknis yang relevan dengan kebutuhan industri dan dunia pendidikan.
					</p>

					<!-- 4 Chips -->
					<div class="chips-grid">
						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								</svg>
							</div>
							<span>Pelatihan Keterampilan Digital</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
								</svg>
							</div>
							<span>Workshop &amp; Bootcamp</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="8" r="7"></circle>
									<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
								</svg>
							</div>
							<span>Sertifikasi Kompetensi</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
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

				<!-- Right: Photo with Floating Navy Card -->
				<div class="photo-col-a">
					<div class="photo-frame-a">
						<img
							src="/images/svc-03-man-laptop.jpg"
							alt="Skills Development"
							class="photo-img"
							loading="lazy"
						/>
					</div>

					<!-- Floating Navy Card on right side of photo -->
					<div class="card-floating-navy">
						<h4 class="card-float-title">Bidang Pelatihan</h4>
						<ul class="card-float-list">
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Teknologi &amp; Digital Skills</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Soft Skills</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Kepemimpinan</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Bahasa &amp; Komunikasi</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Lainnya</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ==========================================
	     BLOK 04: Institutional & Strategic Partnership (Tipe B)
	     Target tinggi: ±377px pada 1536
	     ========================================== -->
	<section class="zigzag-block block-type-b block-04" id="layanan-4">
		<!-- Photo menempel tepi kiri layar (x 0→540) -->
		<div class="fullbleed-photo-left">
			<img
				src="/images/svc-04-handshake.jpg"
				alt="Strategic Partnership"
				class="photo-img-left"
				loading="lazy"
			/>
		</div>

		<div class="block-container">
			<div class="grid-type-b">
				<!-- Spacer for left photo -->
				<div class="photo-spacer-b"></div>

				<!-- Center: Text -->
				<div class="text-col-b">
					<div class="title-row">
						<span class="badge-num badge-teal">04</span>
						<h3 class="service-title">
							Institutional &amp; Strategic<br />
							Partnership
						</h3>
					</div>

					<p class="service-desc">
						Membangun kolaborasi strategis dengan institusi pendidikan, lembaga pemerintah, perusahaan, dan organisasi untuk menciptakan dampak yang lebih luas.
					</p>

					<!-- 4 Chips -->
					<div class="chips-grid">
						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
								</svg>
							</div>
							<span>Kolaborasi Program</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
									<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
								</svg>
							</div>
							<span>Corporate Training</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
									<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
								</svg>
							</div>
							<span>Pengembangan Kurikulum</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="12" y1="8" x2="12" y2="12"></line>
									<line x1="12" y1="16" x2="12.01" y2="16"></line>
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

				<!-- Right: Light Card (#F4F8FB) Bentuk Kerja Sama -->
				<div class="card-col-b">
					<div class="card-light-output">
						<h4 class="card-light-title">Bentuk Kerja Sama</h4>
						<ul class="card-light-list">
							<li>
								<span class="check-mark">✓</span>
								<span>Program pendidikan bersama</span>
							</li>
							<li>
								<span class="check-mark">✓</span>
								<span>Pelatihan dan sertifikasi</span>
							</li>
							<li>
								<span class="check-mark">✓</span>
								<span>Pengembangan talenta</span>
							</li>
							<li>
								<span class="check-mark">✓</span>
								<span>Riset dan inovasi</span>
							</li>
							<li>
								<span class="check-mark">✓</span>
								<span>Kegiatan sosial dan edukatif</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ==========================================
	     BLOK 05: Digital Education & Learning Platform (Tipe A)
	     Target tinggi: ±369px pada 1536
	     ========================================== -->
	<section class="zigzag-block block-type-a block-05" id="layanan-5">
		<div class="block-container">
			<div class="grid-type-a">
				<!-- Left: Text -->
				<div class="text-col">
					<div class="title-row">
						<span class="badge-num badge-teal">05</span>
						<h3 class="service-title">
							Digital Education &amp;<br />
							Learning Platform
						</h3>
					</div>

					<p class="service-desc">
						Solusi pembelajaran digital untuk mendukung proses pendidikan yang lebih inklusif, fleksibel, dan berkelanjutan.
					</p>

					<!-- 4 Chips -->
					<div class="chips-grid">
						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
									<line x1="8" y1="21" x2="16" y2="21"></line>
								</svg>
							</div>
							<span>Pengembangan Platform</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
									<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
								</svg>
							</div>
							<span>Sistem Manajemen Pembelajaran</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<polygon points="23 7 16 12 23 17 23 7"></polygon>
									<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
								</svg>
							</div>
							<span>Konten Pembelajaran Digital</span>
						</div>

						<div class="chip-item">
							<div class="chip-icon">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="18" cy="5" r="3"></circle>
									<circle cx="6" cy="12" r="3"></circle>
									<circle cx="18" cy="19" r="3"></circle>
									<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
									<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
								</svg>
							</div>
							<span>Integrasi dengan Institusi</span>
						</div>
					</div>

					<a href="/konsultasi" class="btn-gold">
						<span>Diskusikan Kebutuhan Anda</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>

				<!-- Right: Photo with Floating Navy Card -->
				<div class="photo-col-a">
					<div class="photo-frame-a">
						<img
							src="/images/svc-05-video-call.jpg"
							alt="Digital Education"
							class="photo-img"
							loading="lazy"
						/>
					</div>

					<!-- Floating Navy Card on right side of photo -->
					<div class="card-floating-navy">
						<h4 class="card-float-title">Keunggulan</h4>
						<ul class="card-float-list">
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Fleksibel &amp; Mudah Diakses</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Konten Berkualitas</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Interaktif &amp; Kolaboratif</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Dapat Disesuaikan</span>
							</li>
							<li>
								<span class="badge-icon-teal">
									<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
								</span>
								<span>Mendukung Pembelajaran Berkelanjutan</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

</div>

<style>
	.services-zigzag-wrap {
		background: #FFFFFF;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 40px;
		padding: 30px 0 47px;
	}

	.zigzag-block {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	.block-01 {
		height: 388px;
	}

	.block-02 {
		height: 367px;
	}

	.block-03 {
		height: 401px;
	}

	.block-04 {
		height: 377px;
	}

	.block-05 {
		height: 369px;
	}

	.block-container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	@media (min-width: 1920px) {
		.block-container {
			max-width: 1500px;
		}
	}

	/* ==================== TIPE A LAYOUT ==================== */
	.grid-type-a {
		display: grid;
		grid-template-columns: 1fr 1.18fr;
		gap: 3rem;
		align-items: center;
	}

	.text-col {
		display: flex;
		flex-direction: column;
		max-width: 530px;
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 0.65rem;
	}

	.badge-num {
		width: 38px;
		height: 38px;
		border-radius: 9px;
		color: #FFFFFF;
		font-size: 15px;
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
		background: #079EAD;
	}

	.service-title {
		font-size: clamp(22px, 2vw, 28px);
		line-height: 1.2;
		font-weight: 800;
		color: #082442;
		margin: 0;
		letter-spacing: -0.015em;
	}

	.service-desc {
		font-size: 13px;
		line-height: 1.55;
		color: #183553;
		margin: 0 0 1.25rem 0;
		max-width: 500px;
		text-wrap: pretty;
	}

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
		font-size: 12px;
		font-weight: 500;
		color: #082442;
		line-height: 1.3;
	}

	.chip-icon {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		box-shadow: 0 2px 6px rgba(0, 166, 178, 0.25);
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #071D36;
		padding: 9px 20px;
		font-size: 12px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		align-self: flex-start;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.28);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 13px;
	}

	/* Photo Column A with Floating Navy Card */
	.photo-col-a {
		position: relative;
		width: 100%;
		max-width: 680px;
		height: 310px;
		display: flex;
		align-items: center;
	}

	.photo-frame-a {
		width: 100%;
		height: 100%;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(11, 39, 71, 0.1);
	}

	.photo-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.card-floating-navy {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		width: 220px;
		background: #0B2948;
		border-radius: 14px;
		padding: 1.25rem 1.15rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
		z-index: 3;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.card-float-title {
		font-size: 13px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 0.85rem 0;
		letter-spacing: -0.01em;
	}

	.card-float-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.card-float-list li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 11.5px;
		color: #FFFFFF;
		line-height: 1.25;
	}

	.badge-icon-teal {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #00A6B2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	/* ==================== TIPE B LAYOUT ==================== */
	/* Fullbleed photo on left touching screen edge */
	.fullbleed-photo-left {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: calc((100% - 1400px) / 2 + 500px);
		min-width: 460px;
		border-top-right-radius: 16px;
		border-bottom-right-radius: 16px;
		overflow: hidden;
		box-shadow: 8px 0 24px rgba(11, 39, 71, 0.08);
		z-index: 1;
	}

	@media (max-width: 1440px) {
		.fullbleed-photo-left {
			width: 480px;
		}
	}

	.photo-img-left {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.grid-type-b {
		display: grid;
		grid-template-columns: 480px 1.22fr 1fr;
		gap: 2.25rem;
		align-items: center;
	}

	.photo-spacer-b {
		width: 100%;
	}

	.text-col-b {
		display: flex;
		flex-direction: column;
		max-width: 490px;
	}

	/* Light Card (#F4F8FB) on far right */
	.card-col-b {
		display: flex;
		justify-content: flex-end;
	}

	.card-light-output {
		background: #F4F8FB;
		border-radius: 14px;
		padding: 1.4rem 1.4rem;
		width: 100%;
		max-width: 250px;
		box-shadow: 0 6px 20px rgba(11, 39, 71, 0.05);
		border: 1px solid rgba(226, 232, 240, 0.7);
		box-sizing: border-box;
	}

	.card-light-title {
		font-size: 13.5px;
		font-weight: 800;
		color: #079EAD;
		margin: 0 0 0.85rem 0;
	}

	.card-light-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.card-light-list li {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 12px;
		color: #082442;
		line-height: 1.35;
	}

	.check-mark {
		color: #00A6B2;
		font-weight: 800;
		font-size: 13px;
		line-height: 1.1;
		flex-shrink: 0;
	}

	/* ==================== RESPONSIVE ==================== */
	@media (max-width: 1024px) {
		.block-01, .block-02, .block-03, .block-04, .block-05 {
			height: auto;
			padding: 2.5rem 0;
		}

		.grid-type-a {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.photo-col-a {
			max-width: 100%;
			height: 280px;
		}

		.fullbleed-photo-left {
			display: none;
		}

		.grid-type-b {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.photo-spacer-b {
			display: none;
		}

		.card-col-b {
			justify-content: flex-start;
		}

		.card-light-output {
			max-width: 100%;
		}
	}

	@media (max-width: 768px) {
		.chips-grid {
			grid-template-columns: 1fr;
			gap: 0.6rem;
		}

		.btn-gold {
			align-self: stretch;
			justify-content: center;
		}

		.card-floating-navy {
			position: static;
			transform: none;
			width: 100%;
			box-sizing: border-box;
			margin-top: 1rem;
		}

		.photo-col-a {
			flex-direction: column;
			height: auto;
		}

		.photo-frame-a {
			height: 220px;
		}
	}
</style>
