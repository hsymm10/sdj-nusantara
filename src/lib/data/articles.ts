// Dataset Artikel & Wawasan SDJNusantara
// WAJIB DIISI/DIVERIFIKASI: penulis, sumber tepercaya, tanggal publikasi/pembaruan (content-master bagian 6)

export interface Article {
	id: number;
	slug: string;
	judul: string;
	kategori: 'Pendidikan' | 'Beasiswa' | 'Pengembangan Talenta' | 'Keterampilan Digital' | 'Kemitraan' | 'Karier & Profesional';
	tanggal: string; // Contoh: '12 Okt 2026'
	updatedAt: string;
	ringkasan: string;
	isi: string;
	penulis: string; // WAJIB DIVERIFIKASI
	sumber: string; // WAJIB DIVERIFIKASI
	gambar: string;
	kutipan?: string;
	tags?: string[];
	isFeatured?: boolean;
	populerRank?: number; // 1, 2, 3, 4 jika artikel terpopuler
	isLatestPrimary?: boolean; // 6 artikel utama di grid halaman 1 sesuai mockup
}

export const articlesData: Article[] = [
	// 1–6: Grid 6 Artikel Terbaru Mockup (3 kolom x 2 baris persis seperti di mockup)
	{
		id: 1,
		slug: 'membangun-lingkungan-belajar-yang-inklusif-di-sekolah',
		judul: 'Membangun Lingkungan Belajar yang Inklusif di Sekolah',
		kategori: 'Pendidikan',
		tanggal: '10 Okt 2026',
		updatedAt: '10 Oktober 2026',
		ringkasan: 'Lingkungan belajar yang inklusif memberikan kesempatan yang sama bagi setiap individu untuk berkembang secara optimal.',
		isi: `
			<p>Menciptakan ruang kelas yang ramah bagi semua peserta didik dengan keberagaman latar belakang, potensi, dan kebutuhan belajar merupakan fondasi terpenting dalam pendidikan modern.</p>
			<h3>Pilar Pendidikan Inklusif</h3>
			<p>Pendidikan inklusif tidak hanya berbicara mengenai fasilitas fisik, tetapi juga pendekatan pedagogis yang adaptif, saling menghargai keberagaman, dan menumbuhkan empati antar peserta didik.</p>
			<h3>Peran Tenaga Pendidik dan Komunitas</h3>
			<p>Guru dan pihak sekolah memerlukan pendampingan berkelanjutan agar mampu merancang kurikulum berdiferensiasi yang menjawab kebutuhan individual siswa secara efektif.</p>
		`,
		penulis: 'Konsultan Pendidikan Inklusif SDJNusantara',
		sumber: 'Jurnal Pedagogi & Kebijakan Pendidikan Indonesia',
		gambar: '/images/article-card-1.jpg',
		kutipan:
			'Pendidikan yang inklusif bukan hanya tentang akses, tetapi tentang memberikan kesempatan yang setara bagi setiap anak untuk berkembang sesuai potensinya.',
		tags: ['#PendidikanInklusif', '#SekolahRamahAnak', '#PengembanganSiswa'],
		isLatestPrimary: true
	},
	{
		id: 2,
		slug: 'keterampilan-digital-yang-relevan-di-dunia-kerja-masa-depan',
		judul: 'Keterampilan Digital yang Relevan di Dunia Kerja Masa Depan',
		kategori: 'Keterampilan Digital',
		tanggal: '8 Okt 2026',
		updatedAt: '8 Oktober 2026',
		ringkasan: 'Dunia kerja terus berkembang, dan keterampilan digital menjadi salah satu faktor penting untuk meningkatkan daya saing.',
		isi: `
			<p>Dinamika revolusi industri 4.0 dan kecerdasan buatan menuntut talenta muda memiliki penguasaan teknologi terapan yang relevan dengan kebutuhan industri saat ini.</p>
			<h3>Kombinasi Hard Skill dan Soft Skill</h3>
			<p>Selain keahlian teknis seperti analisis data, pemrograman, atau desain digital, kemampuan berpikir kritis dan pemecahan masalah kompleks tetap menjadi kunci utama.</p>
		`,
		penulis: 'Instruktur Keterampilan Digital SDJNusantara',
		sumber: 'World Economic Forum - Future of Jobs Report',
		gambar: '/images/article-card-2.jpg',
		isLatestPrimary: true
	},
	{
		id: 3,
		slug: 'mempersiapkan-diri-menghadapi-dunia-kerja-setelah-lulus',
		judul: 'Mempersiapkan Diri Menghadapi Dunia Kerja Setelah Lulus',
		kategori: 'Karier & Profesional',
		tanggal: '5 Okt 2026',
		updatedAt: '5 Oktober 2026',
		ringkasan: 'Transisi dari dunia pendidikan ke dunia kerja membutuhkan strategi yang tepat agar dapat beradaptasi dengan cepat.',
		isi: `
			<p>Fase peralihan dari bangku kuliah menuju lingkungan kerja profesional seringkali menjadi tantangan tersendiri bagi lulusan baru.</p>
			<h3>Persiapan Karier Strategis</h3>
			<p>Mulai dari pemetaan kompetensi, penyusunan portofolio profesional berbasis hasil nyata, hingga pemahaman etika kerja dan komunikasi lintas generasi.</p>
		`,
		penulis: 'Penasihat Karier & Talenta SDJNusantara',
		sumber: 'Survei Kesiapan Kerja Lulusan Indonesia',
		gambar: '/images/article-card-3.jpg',
		isLatestPrimary: true
	},
	{
		id: 4,
		slug: 'mengenal-jenis-beasiswa-untuk-pelajar-indonesia',
		judul: 'Mengenal Jenis Beasiswa untuk Pelajar Indonesia',
		kategori: 'Beasiswa',
		tanggal: '3 Okt 2026',
		updatedAt: '3 Oktober 2026',
		ringkasan: 'Berbagai jenis beasiswa tersedia untuk mendukung pendidikan, baik di dalam negeri maupun luar negeri.',
		isi: `
			<p>Akses informasi pembiayaan pendidikan kini terbuka luas melalui skema beasiswa pemerintah, institusi swasta, maupun yayasan filantropi internasional.</p>
			<h3>Kategori dan Persyaratan Beasiswa</h3>
			<p>Pahami perbedaan antara beasiswa prestasi akademis, afirmasi daerah, riset terapan, dan kemitraan bilateral untuk memilih program yang paling sesuai.</p>
		`,
		penulis: 'Tim Konsultan Beasiswa SDJNusantara',
		sumber: 'Direktori Beasiswa Terbuka Indonesia',
		gambar: '/images/article-card-4.jpg',
		isLatestPrimary: true
	},
	{
		id: 5,
		slug: 'kolaborasi-institusi-pendidikan-dengan-dunia-industri',
		judul: 'Kolaborasi Institusi Pendidikan dengan Dunia Industri',
		kategori: 'Kemitraan',
		tanggal: '30 Sep 2026',
		updatedAt: '30 September 2026',
		ringkasan: 'Kolaborasi yang kuat antara institusi pendidikan dan industri dapat menciptakan ekosistem yang saling menguntungkan.',
		isi: `
			<p>Menyelaraskan kurikulum pendidikan dengan standar kompetensi industri menjembatani kesenjangan keterampilan yang dihadapi lulusan baru.</p>
			<h3>Bentuk Kemitraan Strategis</h3>
			<p>Program magang industri terstruktur, pengajar praktisi, dan riset bersama terbukti meningkatkan relevansi lulusan secara signifikan.</p>
		`,
		penulis: 'Divisi Kemitraan SDJNusantara',
		sumber: 'Laporan Forum Kemitraan Pendidikan & Industri',
		gambar: '/images/article-card-5.jpg',
		isLatestPrimary: true
	},
	{
		id: 6,
		slug: 'pentingnya-mentoring-dalam-pengembangan-talenta-muda',
		judul: 'Pentingnya Mentoring dalam Pengembangan Talenta Muda',
		kategori: 'Pengembangan Talenta',
		tanggal: '27 Sep 2026',
		updatedAt: '27 September 2026',
		ringkasan: 'Mentoring membantu individu mengembangkan potensi, memperluas jaringan, dan mempersiapkan karier yang lebih matang.',
		isi: `
			<p>Bimbingan dari praktisi dan profesional berpengalaman memberikan arah yang jelas dan mempercepat proses belajar talenta muda.</p>
			<h3>Dampak Positif Mentoring</h3>
			<p>Melalui sesi konsultasi dan refleksi terarah, mentee dapat mengenali kekuatan diri, memetakan peluang, serta menghindari kesalahan umum dalam perencanaan karier.</p>
		`,
		penulis: 'Lead Mentor SDJNusantara',
		sumber: 'Studi Efektivitas Mentoring Talenta Muda',
		gambar: '/images/article-card-6.jpg',
		isLatestPrimary: true
	},

	// 7–10: Featured Carousel Slides (Top-Left Slider)
	{
		id: 7,
		slug: 'strategi-persiapan-beasiswa-kuliah-luar-negeri',
		judul: 'Strategi Persiapan Beasiswa Untuk Kuliah di Luar Negeri',
		kategori: 'Beasiswa',
		tanggal: '12 Okt 2026',
		updatedAt: '12 Oktober 2026',
		ringkasan: 'Persiapan beasiswa membutuhkan perencanaan yang matang, mulai dari pemilihan program, penyusunan dokumen, hingga latihan wawancara. Artikel ini membahas langkah-langkah strategis yang dapat membantu Anda meraih peluang di universitas luar negeri.',
		isi: `
			<p>Meraih beasiswa untuk melanjutkan studi ke luar negeri merupakan impian banyak talenta muda Indonesia. Namun, proses seleksi yang kompetitif menuntut persiapan terencana dan berorientasi jangka panjang.</p>
			<h3>1. Pemilihan Program yang Tepat</h3>
			<p>Langkah awal yang sangat krusial adalah memahami kesesuaian antara latar belakang akademis, rencana karier, dan persyaratan khusus dari universitas maupun lembaga donor beasiswa.</p>
			<h3>2. Penyusunan Dokumen Berkualitas</h3>
			<p>Curriculum Vitae (CV), motivation letter, dan rencana studi bukan sekadar syarat administratif, melainkan media refleksi pencapaian dan visi kontribusi Anda di masa depan.</p>
			<h3>3. Penguatan Bahasa dan Wawancara</h3>
			<p>Sertifikasi kemampuan bahasa asing dan latihan wawancara berbasis simulasi terbukti efektif membangun kepercayaan diri peserta seleksi beasiswa internasional.</p>
		`,
		penulis: 'Tim Konsultan Beasiswa SDJNusantara',
		sumber: 'SDJNusantara Education Research & Insight',
		gambar: '/images/article-featured-grad.jpg',
		isFeatured: true
	},
	{
		id: 8,
		slug: 'panduan-sukses-wawancara-beasiswa-internasional',
		judul: 'Panduan Praktis Menghadapi Wawancara Beasiswa Bergengsi',
		kategori: 'Beasiswa',
		tanggal: '11 Okt 2026',
		updatedAt: '11 Oktober 2026',
		ringkasan: 'Kuasai teknik komunikasi efektif dan penyampaian visi kontribusi yang meyakinkan di hadapan dewan juri beasiswa internasional.',
		isi: '<p>Wawancara merupakan fase penentu dalam proses seleksi beasiswa. Pelajari bagaimana memformulasikan jawaban berbasis bukti dan pengalaman nyata.</p>',
		penulis: 'Tim Mentor SDJNusantara',
		sumber: 'Internal Assessment Data SDJNusantara',
		gambar: '/images/article-featured-grad.jpg',
		isFeatured: true
	},
	{
		id: 9,
		slug: 'transformasi-pendidikan-digital-indonesia',
		judul: 'Masa Depan Pembelajaran Adaptif di Era Kecerdasan Buatan',
		kategori: 'Keterampilan Digital',
		tanggal: '10 Okt 2026',
		updatedAt: '10 Oktober 2026',
		ringkasan: 'Eksplorasi metodologi pedagogi modern yang memanfaatkan teknologi digital untuk meningkatkan efektivitas transfer ilmu.',
		isi: '<p>Integrasi teknologi dalam kurikulum sekolah dan universitas menuntut adaptasi berkelanjutan dari pengajar maupun siswa.</p>',
		penulis: 'Divisi Inovasi Pendidikan SDJNusantara',
		sumber: 'Kementerian Pendidikan & World Economic Forum Report',
		gambar: '/images/article-card-2.jpg',
		isFeatured: true
	},
	{
		id: 10,
		slug: 'membangun-jejaring-karier-global',
		judul: 'Membangun Portofolio Profesional Sejak Masa Perkuliahan',
		kategori: 'Karier & Profesional',
		tanggal: '9 Okt 2026',
		updatedAt: '9 Oktober 2026',
		ringkasan: 'Langkah strategis mahasiswa untuk mengonversi pengalaman organisasi dan magang menjadi nilai tambah kompetitif di pasar kerja.',
		isi: '<p>Portofolio komprehensif membedakan lulusan baru di tengah persaingan bursa kerja nasional dan multinasional.</p>',
		penulis: 'Konsultan Pengembangan Karier SDJNusantara',
		sumber: 'SDJNusantara Career Development Center',
		gambar: '/images/article-card-3.jpg',
		isFeatured: true
	},

	// 11–14: Artikel Terpopuler (Sidebar Kanan Mockup)
	{
		id: 11,
		slug: 'tips-membangun-portofolio-untuk-beasiswa',
		judul: 'Tips Membangun Portofolio untuk Beasiswa',
		kategori: 'Beasiswa',
		tanggal: '5 Okt 2026',
		updatedAt: '5 Oktober 2026',
		ringkasan: 'Struktur portofolio yang sistematis membantu penilai memahami rekam jejak kepemimpinan dan dedikasi akademis calon penerima beasiswa.',
		isi: '<p>Portofolio beasiswa harus menonjolkan dampak sosial, prestasi terverifikasi, dan relevansi terhadap program studi tujuan.</p>',
		penulis: 'Tim Ahli Beasiswa SDJNusantara',
		sumber: 'Pusat Riset Beasiswa SDJNusantara',
		gambar: '/images/article-pop-1.jpg',
		populerRank: 1
	},
	{
		id: 12,
		slug: 'peran-soft-skill-dalam-dunia-pendidikan-modern',
		judul: 'Peran Soft Skill dalam Dunia Pendidikan Modern',
		kategori: 'Pengembangan Talenta',
		tanggal: '28 Sep 2026',
		updatedAt: '28 September 2026',
		ringkasan: 'Kecakapan komunikasi, kepemimpinan, dan pemecahan masalah kompleks kini menjadi parameter utama kesuksesan talenta muda.',
		isi: '<p>Pendidikan abad 21 menitikberatkan pada pengembangan holistik karakter serta kecerdasan emosional siswa.</p>',
		penulis: 'Konsultan Talenta SDJNusantara',
		sumber: 'OECD Future of Education and Skills',
		gambar: '/images/article-pop-2.jpg',
		populerRank: 2
	},
	{
		id: 13,
		slug: 'peluang-karier-di-industri-pendidikan-digital',
		judul: 'Peluang Karier di Industri Pendidikan Digital',
		kategori: 'Karier & Profesional',
		tanggal: '20 Sep 2026',
		updatedAt: '20 September 2026',
		ringkasan: 'Perkembangan edtech membuka peluang profesi baru mulai dari instructional designer hingga konsultan pembelajaran daring.',
		isi: '<p>Industri pendidikan berkembang pesat dengan munculnya berbagai platform teknologi yang membutuhkan talenta multidisiplin.</p>',
		penulis: 'Riset Karier SDJNusantara',
		sumber: 'EdTech Asia Market Overview',
		gambar: '/images/article-pop-3.jpg',
		populerRank: 3
	},
	{
		id: 14,
		slug: 'kolaborasi-sekolah-dan-industri-untuk-pengembangan-talenta',
		judul: 'Kolaborasi Sekolah dan Industri untuk Pengembangan Talenta',
		kategori: 'Kemitraan',
		tanggal: '12 Sep 2026',
		updatedAt: '12 September 2026',
		ringkasan: 'Model kemitraan strategis yang menjembatani kurikulum vokasi dan akademik dengan standar kompetensi industri terkini.',
		isi: '<p>Link and match antara institusi pendidikan dan pelaku usaha menjamin relevansi kompetensi lulusan.</p>',
		penulis: 'Divisi Kemitraan SDJNusantara',
		sumber: 'Kemitraan Industri SDJNusantara',
		gambar: '/images/article-pop-4.jpg',
		populerRank: 4
	},
	{
		id: 15,
		slug: 'mengembangkan-literasi-data-untuk-pengambilan-keputusan-strategis',
		judul: 'Mengembangkan Literasi Data untuk Pengambilan Keputusan Strategis',
		kategori: 'Keterampilan Digital',
		tanggal: '10 Sep 2026',
		updatedAt: '10 September 2026',
		ringkasan: 'Pemahaman analisis data kuantitatif dan kualitatif kini menjadi keahlian penting di berbagai lini industri dan institusi.',
		isi: '<p>Literasi data memungkinkan individu dan institusi menyusun proyeksi serta keputusan berbasis bukti nyata yang akurat.</p>',
		penulis: 'Instruktur Data & Analitik SDJNusantara',
		sumber: 'Data Literacy Index 2026',
		gambar: '/images/article-card-2.jpg'
	},
	{
		id: 16,
		slug: 'peran-ekosistem-inkubasi-kampus-mendorong-wirausaha',
		judul: 'Peran Ekosistem Inkubasi Kampus dalam Mendorong Talenta Wirausaha',
		kategori: 'Pengembangan Talenta',
		tanggal: '8 Sep 2026',
		updatedAt: '8 September 2026',
		ringkasan: 'Dukungan fasilitas, pendanaan awal, dan pendampingan mentor mengubah ide inovatif mahasiswa menjadi rintisan usaha produktif.',
		isi: '<p>Perguruan tinggi bertransformasi menjadi katalisator penciptaan lapangan kerja melalui program inkubasi terstruktur.</p>',
		penulis: 'Konsultan Talenta & Inovasi SDJNusantara',
		sumber: 'Laporan Kewirausahaan Pemuda Nasional',
		gambar: '/images/article-card-4.jpg'
	},
	{
		id: 17,
		slug: 'strategi-sukses-memperoleh-loa-unconditional-kampus-dunia',
		judul: 'Strategi Sukses Memperoleh LoA Unconditional dari Kampus Ternama Dunia',
		kategori: 'Beasiswa',
		tanggal: '4 Sep 2026',
		updatedAt: '4 September 2026',
		ringkasan: 'Langkah taktis menyusun rencana studi, menjalin korespondensi dengan calon supervisor, dan memenuhi kualifikasi ketat universitas top.',
		isi: '<p>Letter of Acceptance (LoA) tanpa syarat merupakan tiket utama untuk mengunci peluang beasiswa bergengsi luar negeri.</p>',
		penulis: 'Tim Konsultan Studi Luar Negeri SDJNusantara',
		sumber: 'Panduan Beasiswa & Studi Global SDJNusantara',
		gambar: '/images/article-card-5.jpg'
	},
	{
		id: 18,
		slug: 'pentingnya-keselarasan-kurikulum-vokasi-dengan-industri',
		judul: 'Pentingnya Keselarasan Kurikulum Vokasi dengan Dinamika Industri 4.0',
		kategori: 'Kemitraan',
		tanggal: '1 Sep 2026',
		updatedAt: '1 September 2026',
		ringkasan: 'Sinkronisasi standar kompetensi kerja nasional dengan kebutuhan riil pasar memastikan lulusan langsung siap berkarya.',
		isi: '<p>Kolaborasi kurikulum terintegrasi dan program magang bersertifikat menjadi jembatan kokoh antara SMK/Politeknik dan industri modern.</p>',
		penulis: 'Divisi Kemitraan Vokasi SDJNusantara',
		sumber: 'Kajian Kemitraan Vokasi Nasional',
		gambar: '/images/article-card-6.jpg'
	},
	{
		id: 19,
		slug: '5-tips-sukses-mendapatkan-beasiswa-luar-negeri',
		judul: '5 Tips Sukses Mendapatkan Beasiswa Luar Negeri',
		kategori: 'Beasiswa',
		tanggal: '20 Jan 2025',
		updatedAt: '20 Januari 2025',
		ringkasan:
			'Mendapatkan beasiswa luar negeri adalah impian banyak pelajar. Berikut 5 tips penting yang dapat meningkatkan peluang Anda lolos seleksi internasional.',
		isi: `
			<p>Mendapatkan beasiswa luar negeri adalah impian banyak pelajar. Namun, prosesnya sering kali penuh persaingan ketat sehingga membutuhkan perencanaan matang sejak jauh hari.</p>
			<h2>Strategi Utama Persiapan Beasiswa</h2>
			<p>Persiapan yang terstruktur membantu kandidat menunjukkan kesiapan akademik, kepemimpinan, serta kontribusi nyata kepada panitia seleksi.</p>
			<ul>
				<li><strong>Tentukan tujuan dan jenis beasiswa yang sesuai:</strong> Pelajari prioritas bidang studi, kriteria kelayakan, serta nilai utama penyelenggara beasiswa.</li>
				<li><strong>Siapkan dokumen akademik dengan matang:</strong> Pastikan transkrip, sertifikat kemampuan bahasa, dan surat rekomendasi tersusun rapi sebelum tenggat waktu.</li>
				<li><strong>Tulis esai yang kuat dan personal:</strong> Sampaikan motivasi studi, rekam jejak kontribusi, serta rencana dampak pasca-studi secara autentik.</li>
				<li><strong>Tingkatkan pengalaman organisasi atau sosial:</strong> Keterlibatan aktif di komunitas menunjukkan karakter kepemimpinan dan kolaborasi.</li>
				<li><strong>Persiapkan wawancara dengan percaya diri:</strong> Latih artikulasi jawaban secara terstruktur, jujur, dan relevan dengan tujuan studi.</li>
			</ul>
			<h3>Konsistensi dan Evaluasi Berkala</h3>
			<p>Lakukan peninjauan ulang setiap berkas bersama mentor atau konsultan pendidikan agar tidak ada detail persyaratan yang terlewat sebelum pengajuan akhir.</p>
		`,
		penulis: 'Tim Konsultan Beasiswa SDJNusantara',
		sumber: 'Panduan Persiapan Beasiswa Internasional SDJNusantara',
		gambar: '/images/article-card-1.jpg'
	},
	{
		id: 20,
		slug: 'tren-pendidikan-global-di-tahun-2025',
		judul: 'Tren Pendidikan Global di Tahun 2025',
		kategori: 'Pendidikan',
		tanggal: '18 Jan 2025',
		updatedAt: '18 Januari 2025',
		ringkasan:
			'Sektor pendidikan dunia terus bertransformasi seiring pesatnya perkembangan kecerdasan buatan dan metode pembelajaran interdisipliner.',
		isi: `
			<p>Sektor pendidikan dunia terus bertransformasi seiring pesatnya perkembangan kecerdasan buatan dan metode pembelajaran interdisipliner yang menuntut adaptasi cepat dari lembaga pendidikan.</p>
			<h2>Transformasi Kurikulum dan Pembelajaran Adaptif</h2>
			<p>Institusi pendidikan terkemuka kini memadukan pembelajaran berbasis proyek dengan analitik pembelajaran untuk menyesuaikan materi sesuai potensi masing-masing peserta didik.</p>
			<h3>Fokus Utama Pergeseran Pendidikan</h3>
			<ul>
				<li>Integrasi teknologi adaptif dan literasi kecerdasan buatan secara etis di kelas.</li>
				<li>Pendekatan riset lintas disiplin untuk memecahkan tantangan sosial dan industri nyata.</li>
				<li>Asesmen kompetensi berbasis portofolio karya dibandingkan hafalan semata.</li>
				<li>Perluasan jejaring pertukaran pelajar serta kolaborasi riset antarnegara.</li>
			</ul>
		`,
		penulis: 'Tim Riset & Pengembangan Pendidikan SDJNusantara',
		sumber: 'Kajian Transformasi Pendidikan Global 2025',
		gambar: '/images/article-card-2.jpg'
	},
	{
		id: 21,
		slug: 'cara-meningkatkan-daya-saing-di-dunia-kerja',
		judul: 'Cara Meningkatkan Daya Saing di Dunia Kerja',
		kategori: 'Karier & Profesional',
		tanggal: '15 Jan 2025',
		updatedAt: '15 Januari 2025',
		ringkasan:
			'Pasar tenaga kerja modern menuntut para profesional memiliki fleksibilitas tinggi serta portofolio kompetensi yang teruji.',
		isi: `
			<p>Pasar tenaga kerja modern menuntut para profesional untuk memiliki fleksibilitas tinggi, pemahaman konteks industri, serta portofolio kompetensi yang teruji secara praktis.</p>
			<h2>Langkah Strategis Penguatan Profil Profesional</h2>
			<p>Meningkatkan daya saing karier bukan hanya soal menambah sertifikat, melainkan memastikan keahlian yang dikuasai selaras dengan kebutuhan organisasi.</p>
			<ul>
				<li>Petakan keahlian inti dan kompetensi pelengkap yang paling dibutuhkan di bidang Anda.</li>
				<li>Bangun rekam jejak proyek dengan dampak terukur yang dapat diverifikasi.</li>
				<li>Perkuat kemampuan komunikasi persuasif, negosiasi, dan kolaborasi lintas tim.</li>
				<li>Pelihara jejaring profesional serta pola pikir belajar berkelanjutan.</li>
			</ul>
		`,
		penulis: 'Konsultan Pengembangan Karier SDJNusantara',
		sumber: 'Observatorium Talenta & Karier SDJNusantara',
		gambar: '/images/article-card-3.jpg'
	},
	{
		id: 22,
		slug: 'pentingnya-soft-skill-di-era-digital',
		judul: 'Pentingnya Soft Skill di Era Digital',
		kategori: 'Pengembangan Talenta',
		tanggal: '10 Jan 2025',
		updatedAt: '10 Januari 2025',
		ringkasan:
			'Empati, kepemimpinan, berpikir kritis, dan kecerdasan emosional tetap menjadi pembeda utama talenta berkinerja tinggi di era otomasi.',
		isi: `
			<p>Meskipun otomatisasi dan kecerdasan buatan mengambil alih banyak pekerjaan rutin, kualitas manusiawi seperti empati, kepemimpinan, dan penilaian etis tetap tak tergantikan.</p>
			<h2>Kompetensi Kemanusiaan Penentu Keunggulan</h2>
			<p>Organisasi modern mencari talenta yang tidak hanya fasih menggunakan perangkat digital, tetapi juga mampu menyatukan berbagai perspektif untuk mengambil keputusan tepat.</p>
			<ul>
				<li><strong>Berpikir kritis & analisis mendalam:</strong> Memvalidasi informasi dan merumuskan solusi atas isu kompleks.</li>
				<li><strong>Kolaborasi lintas budaya:</strong> Bekerja efektif dalam tim hibrida maupun lingkungan global.</li>
				<li><strong>Ketahanan adaptif:</strong> Menjaga performa dan ketenangan di tengah perubahan cepat.</li>
			</ul>
		`,
		penulis: 'Divisi Pengembangan Talenta SDJNusantara',
		sumber: 'Laporan Kompetensi Talenta Digital Indonesia',
		gambar: '/images/article-card-4.jpg'
	}
];
