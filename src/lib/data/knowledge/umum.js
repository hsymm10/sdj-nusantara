// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/umum.js

/** @typedef {import('./index.js').KnowledgeEntry} KnowledgeEntry */

/** @type {KnowledgeEntry[]} */
export const umumKnowledge = [
	{
		id: 'umum-profil',
		kategori: 'umum',
		judul: 'Mengenal SDJNusantara',
		pertanyaan: [
			'info program pendidikan',
			'informasi program pendidikan',
			'program pendidikan',
			'apa itu sdjnusantara',
			'sdjnusantara itu lembaga apa',
			'profil sdjnusantara',
			'apa fungsi sdjnusantara',
			'siapa itu sdjnusantara',
			'sdj nusantara bergerak di bidang apa'
		],
		kataKunci: ['sdjnusantara', 'profil', 'konsultan pendidikan', 'pengembangan talenta', 'tentang kami'],
		ringkas:
			'SDJNusantara adalah konsultan pendidikan dan pengembangan talenta yang mendampingi individu serta institusi dalam merencanakan masa depan pendidikan yang terarah.',
		detail: [
			'Fokus pada pendampingan persiapan beasiswa S1, S2, dan S3 dalam dan luar negeri.',
			'Layanan pemetaan bakat, minat, dan rencana pengembangan diri terstruktur.',
			'Pelatihan keterampilan praktis, komunikasi, dan kecerdasan buatan (AI).',
			'Kemitraan strategis dengan kampus, sekolah, pemerintah, dan perusahaan.'
		],
		cocokUntuk: [
			'Pelajar SMA/SMK yang merencanakan studi lanjut',
			'Mahasiswa dan fresh graduate pemburu beasiswa',
			'Profesional yang ingin meningkatkan kompetensi',
			'Institusi pendidikan dan perusahaan yang ingin melatih tim'
		],
		langkahBerikut: [
			{ label: 'Pelajari Profil Lengkap', href: '/tentang-kami' },
			{ label: 'Lihat Layanan Pendidikan', href: '/layanan/pendidikan' }
		],
		tindakLanjutChip: ['Info Program Pendidikan', 'Beasiswa', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §2',
		updatedAt: '2026-11-05'
	},
	{
		id: 'umum-cara-kerja',
		kategori: 'umum',
		judul: '5 Tahap Cara Kerja Pendampingan',
		pertanyaan: [
			'bagaimana cara kerja sdjnusantara',
			'metode pendampingan sdj',
			'tahapan layanan sdjnusantara',
			'alur pembimbingan di sdj',
			'bagaimana proses belajarnya'
		],
		kataKunci: ['cara kerja', 'tahapan', 'metode', 'kenali', 'petakan', 'rancang', 'dampingi', 'evaluasi'],
		ringkas:
			'Pendampingan kami menerapkan 5 langkah terstruktur agar setiap peserta mencapai target belajar secara optimal dan terarah.',
		detail: [
			'1. Kenali: Memahami minat, bakat, karakter, serta tujuan belajar Anda.',
			'2. Petakan: Menyusun profil kompetensi dan peluang yang paling sesuai.',
			'3. Rancang: Membuat rencana aksi personal dan kurikulum belajar yang jelas.',
			'4. Dampingi: Membimbing pembuatan dokumen, latihan wawancara, dan mentoring berkala.',
			'5. Evaluasi: Mengukur perkembangan hasil belajar dan memberikan rekomendasi lanjutan.'
		],
		cocokUntuk: [
			'Semua peserta individu maupun institusi yang menginginkan pendampingan sistematis'
		],
		langkahBerikut: [
			{ label: 'Konsultasi Awal Sekarang', href: '/kontak' },
			{ label: 'Jelajahi Program', href: '/layanan/pendidikan#program' }
		],
		tindakLanjutChip: ['Pengembangan Talenta', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §2',
		updatedAt: '2026-11-05'
	},
	{
		id: 'umum-sasaran',
		kategori: 'umum',
		judul: 'Sasaran Penerima Manfaat Layanan',
		pertanyaan: [
			'siapa saja yang bisa ikut',
			'layanan ini untuk siapa',
			'apakah anak sma bisa ikut',
			'apakah hanya untuk mahasiswa',
			'apakah profesional bisa daftar',
			'apakah menerima sekolah dan kampus'
		],
		kataKunci: ['sasaran', 'siapa yang bisa ikut', 'peserta', 'pelajar', 'mahasiswa', 'profesional', 'institusi'],
		ringkas:
			'Layanan SDJNusantara terbuka untuk berbagai kalangan, mulai dari pelajar sekolah menengah, mahasiswa, profesional, hingga institusi pendidikan dan korporasi.',
		detail: [
			'Pelajar SMA/SMK: Pemetaan minat jurusan, persiapan beasiswa S1, dan keterampilan digital dasar.',
			'Mahasiswa S1/S2: Bimbingan beasiswa master/doktor, publikasi, dan persiapan karier.',
			'Lulusan Baru: Penguatan CV, portofolio, dan strategi memasuki dunia kerja.',
			'Profesional & Pendidik: Peningkatan keterampilan komunikasi, AI, kepemimpinan, dan sertifikasi.',
			'Sekolah & Perguruan Tinggi: Pelatihan dosen/guru, program karier siswa, dan akreditasi tata kelola.',
			'Perusahaan & Mitra CSR: Pelatihan karyawan dan penyaluran program sosial pendidikan.'
		],
		cocokUntuk: [
			'Pelajar, mahasiswa, pencari kerja, praktisi, dan pimpinan lembaga'
		],
		langkahBerikut: [
			{ label: 'Lihat Layanan Pendidikan', href: '/layanan/pendidikan' },
			{ label: 'Kemitraan Institusi', href: '/kemitraan' }
		],
		tindakLanjutChip: ['Info Program Pendidikan', 'Beasiswa', 'Kerja Sama Institusi'],
		status: 'terverifikasi',
		sumber: 'naskah §5',
		updatedAt: '2026-11-05'
	},
	{
		id: 'umum-alur-layanan',
		kategori: 'umum',
		judul: 'Alur Mengakses Layanan',
		pertanyaan: [
			'bagaimana cara ikut layanan',
			'alur pendaftaran',
			'tahap memulai bimbingan',
			'langkah memesan bimbingan',
			'proses registrasi konsultasi'
		],
		kataKunci: ['alur', 'cara daftar', 'proses', 'tahapan layanan', 'pendaftaran'],
		ringkas:
			'Mengakses layanan di SDJNusantara sangat mudah melalui 4 langkah praktis dari konsultasi awal hingga pelaksanaan.',
		detail: [
			'Langkah 1 (Pilih Layanan): Tentukan bidang yang Anda minati di situs web.',
			'Langkah 2 (Konsultasi Awal): Hubungi kami melalui formulir kontak atau WhatsApp resmi.',
			'Langkah 3 (Rekomendasi Program): Tim kami menganalisis kebutuhan Anda dan menyarankan paket atau jadwal yang relevan.',
			'Langkah 4 (Pelaksanaan & Evaluasi): Pendampingan berjalan sesuai rencana aksi bersama mentor pembimbing.'
		],
		cocokUntuk: [
			'Calon peserta individu maupun narahubung lembaga mitra'
		],
		langkahBerikut: [
			{ label: 'Mulai Konsultasi Awal', href: '/kontak' },
			{ label: 'Chat via WhatsApp', href: 'https://wa.me/6285880724733' }
		],
		tindakLanjutChip: ['Konsultasi', 'Info Program Pendidikan', 'Kerja Sama Institusi'],
		status: 'terverifikasi',
		sumber: 'naskah §6',
		updatedAt: '2026-11-05'
	},
	{
		id: 'umum-kontak',
		kategori: 'umum',
		judul: 'Kontak Resmi dan Lokasi Kantor',
		pertanyaan: [
			'di mana kantor sdjnusantara',
			'nomor whatsapp sdjnusantara',
			'alamat sdjnusantara',
			'email sdjnusantara',
			'jam operasional kantor',
			'bagaimana cara menghubungi sdj'
		],
		kataKunci: ['kontak', 'alamat', 'whatsapp', 'nomor telepon', 'lokasi', 'email', 'graha aktiva'],
		ringkas:
			'Anda dapat menghubungi tim SDJNusantara melalui WhatsApp resmi, email, atau mengunjungi kantor operasional kami di Jakarta Selatan.',
		detail: [
			'WhatsApp Layanan: +62 858-8072-4733',
			'Email Resmi: info@sdjnusantara.com',
			'Alamat Kantor: Gedung Graha Aktiva Lt. GF (suite B3A), Jl. H. R. Rasuna Said No.6, Kuningan Timur, Jakarta Selatan 12950',
			'Jam Operasional: Senin – Jumat, 08.00 – 17.00 WIB'
		],
		cocokUntuk: [
			'Masyarakat umum, calon peserta, dan lembaga yang ingin berkunjung atau berkonsultasi'
		],
		langkahBerikut: [
			{ label: 'Buka Halaman Kontak', href: '/kontak' },
			{ label: 'Hubungi via WhatsApp', href: 'https://wa.me/6285880724733' }
		],
		tindakLanjutChip: ['Konsultasi', 'Topik Lainnya'],
		status: 'terverifikasi',
		sumber: 'src/lib/config/contact.js',
		updatedAt: '2026-11-05'
	},
	{
		id: 'umum-biaya-jadwal',
		kategori: 'umum',
		judul: 'Informasi Biaya dan Jadwal Program',
		pertanyaan: [
			'berapa biaya bimbingan di sdjnusantara',
			'harga paket beasiswa',
			'biaya kursus di sdj',
			'jadwal kelas kapan mulai',
			'apakah ada pricelist',
			'berapa tarif layanannya'
		],
		kataKunci: ['biaya', 'harga', 'jadwal', 'tarif', 'pricelist', 'kapan mulai', 'biayanya'],
		ringkas:
			'Biaya dan jadwal program belum dipublikasikan secara umum karena disesuaikan dengan kebutuhan, durasi, format bimbingan, dan jumlah peserta.',
		detail: [
			'Penetapan biaya bersifat transparan dan disampaikan saat sesi konsultasi awal.',
			'Tersedia format pembimbingan personal (1-on-1), kelompok belajar, maupun kelas institusi.',
			'Jadwal fleksibel dapat disepakati bersama mentor setelah rencana aksi tersusun.',
			'Tidak ada pungutan tersembunyi selama masa pendampingan disepakati.'
		],
		cocokUntuk: [
			'Peserta individu atau institusi yang ingin mendapatkan estimasi penawaran resmi'
		],
		langkahBerikut: [
			{ label: 'Konsultasikan Kebutuhan & Biaya', href: '/kontak' }
		],
		tindakLanjutChip: ['Konsultasi', 'Info Program Pendidikan', 'Kerja Sama Institusi'],
		status: 'perlu-verifikasi',
		sumber: 'naskah §6',
		updatedAt: '2026-11-05'
	}
];
