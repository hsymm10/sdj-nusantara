// src/lib/data/faq.ts
// Data resmi Pertanyaan yang Sering Diajukan (FAQ) SDJNusantara
// Mendukung kategorisasi, status aktif, status populer, urutan, dan pencarian interaktif

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
	category: 'program' | 'beasiswa' | 'kemitraan' | 'hukum';
	isActive: boolean;
	isPopular: boolean;
	order: number;
}

export interface FaqCategory {
	id: 'program' | 'beasiswa' | 'kemitraan' | 'hukum';
	name: string;
	icon: string;
}

export const FAQ_CATEGORIES: FaqCategory[] = [
	{ id: 'program', name: 'Program Pendidikan', icon: 'ph:student-bold' },
	{ id: 'beasiswa', name: 'Beasiswa', icon: 'ph:gift-bold' },
	{ id: 'kemitraan', name: 'Kemitraan', icon: 'ph:handshake-bold' },
	{ id: 'hukum', name: 'Layanan Hukum', icon: 'ph:scales-bold' }
];

export const faqData: FaqItem[] = [
	// --- POPULER / UTAMA (Sesuai Mockup Referensi) ---
	{
		id: 'faq-01',
		question: 'Apakah SDJNusantara hanya melayani mahasiswa?',
		answer:
			'Tidak. SDJNusantara melayani mahasiswa, pelajar, tenaga pendidik, institusi pendidikan, organisasi, maupun perusahaan yang membutuhkan layanan pendidikan, pelatihan, beasiswa, kemitraan, dan konsultasi regulasi.',
		category: 'program',
		isActive: true,
		isPopular: true,
		order: 1
	},
	{
		id: 'faq-02',
		question: 'Apakah SDJNusantara menyediakan beasiswa sendiri?',
		answer:
			'SDJNusantara berfokus pada kurasi informasi dan pendampingan persiapan aplikasi beasiswa, bukan sebagai lembaga penyandang dana beasiswa langsung.',
		category: 'beasiswa',
		isActive: true,
		isPopular: true,
		order: 2
	},
	{
		id: 'faq-03',
		question: 'Apakah peserta dijamin lolos beasiswa?',
		answer:
			'Tidak. Kami tidak menjanjikan kelulusan, penerbitan LoA, maupun perolehan beasiswa karena keputusan akhir sepenuhnya berada pada komite seleksi resmi masing-masing penyelenggara beasiswa.',
		category: 'beasiswa',
		isActive: true,
		isPopular: true,
		order: 3
	},
	{
		id: 'faq-04',
		question: 'Apakah konsultasi dan bimbingan bisa dilakukan secara daring (online)?',
		answer:
			'Ya. Seluruh sesi konsultasi, bimbingan, dan pelatihan dapat diselenggarakan secara daring melalui video conference interaktif maupun tatap muka langsung sesuai kesepakatan.',
		category: 'program',
		isActive: true,
		isPopular: true,
		order: 4
	},
	{
		id: 'faq-05',
		question: 'Apakah peserta pelatihan memperoleh sertifikat (termasuk BNSP)?',
		answer:
			'Peserta memperoleh sertifikat keikutsertaan pelatihan resmi dari SDJNusantara. Untuk sertifikat kompetensi profesi, penerbitan dilakukan oleh badan sertifikasi berwenang (seperti BNSP) sesuai skema uji kompetensi yang terdaftar.',
		category: 'program',
		isActive: true,
		isPopular: true,
		order: 5
	},
	{
		id: 'faq-06',
		question: 'Bagaimana cara mendaftar program atau bimbingan?',
		answer:
			'Pilih program yang Anda minati di website SDJNusantara, lalu isi formulir kontak atau hubungi WhatsApp resmi kami untuk memulai konsultasi awal pemetaan kebutuhan.',
		category: 'program',
		isActive: true,
		isPopular: true,
		order: 6
	},
	{
		id: 'faq-07',
		question: 'Apakah materi dan layanan dapat disesuaikan untuk institusi atau perusahaan?',
		answer:
			'Ya. Kami dapat merancang program, silabus, dan jadwal pelatihan khusus yang disesuaikan dengan kebutuhan, sasaran kompetensi, dan anggaran lembaga mitra.',
		category: 'kemitraan',
		isActive: true,
		isPopular: true,
		order: 7
	},

	// --- KATEGORI: PROGRAM PENDIDIKAN (Tambahan hingga 8 pertanyaan) ---
	{
		id: 'faq-prog-08',
		question: 'Berapa lama durasi program pelatihan yang diselenggarakan?',
		answer:
			'Durasi bervariasi sesuai program, mulai dari workshop intensif 1–2 hari, program akselerator talenta 1–3 bulan, hingga program kemitraan jangka panjang multi-semester.',
		category: 'program',
		isActive: true,
		isPopular: false,
		order: 8
	},
	{
		id: 'faq-prog-09',
		question: 'Siapa mentor dan praktisi yang mendampingi dalam pelatihan?',
		answer:
			'Mentor dan narasumber kami merupakan praktisi profesional di bidang manajemen talenta, akademisi perguruan tinggi, serta konsultan kelembagaan yang memiliki rekam jejak relevan.',
		category: 'program',
		isActive: true,
		isPopular: false,
		order: 9
	},
	{
		id: 'faq-prog-10',
		question: 'Apakah SDJNusantara menyediakan program pelatihan khusus guru atau dosen?',
		answer:
			'Ya, kami menyediakan modul penguatan kompetensi pedagogik modern, pemanfaatan alat AI produktivitas untuk pengajaran, serta bimbingan metodologi riset dan penulisan ilmiah.',
		category: 'program',
		isActive: true,
		isPopular: false,
		order: 10
	},
	{
		id: 'faq-prog-11',
		question: 'Bagaimana metode evaluasi hasil belajar dalam pelatihan?',
		answer:
			'Evaluasi dilakukan melalui pengerjaan proyek riil, studi kasus, penilaian portofolio kompetensi, dan laporan kemajuan belajar yang transparan.',
		category: 'program',
		isActive: true,
		isPopular: false,
		order: 11
	},

	// --- KATEGORI: BEASISWA (Tambahan hingga 6 pertanyaan) ---
	{
		id: 'faq-sch-12',
		question: 'Apa saja beasiswa yang didampingi dalam Scholarship Academy?',
		answer:
			'Kami mendampingi persiapan beasiswa dalam dan luar negeri, termasuk BPI (Kemdikbudristek), LPDP (Kemenkeu), Chevening (Inggris), MEXT (Jepang), AAS (Australia), serta beasiswa universitas dunia.',
		category: 'beasiswa',
		isActive: true,
		isPopular: false,
		order: 12
	},
	{
		id: 'faq-sch-13',
		question: 'Kapan waktu terbaik untuk memulai persiapan aplikasi beasiswa?',
		answer:
			'Waktu persiapan ideal adalah 6 hingga 12 bulan sebelum jadwal pendaftaran resmi dibuka, agar Anda memiliki waktu matang untuk sertifikasi bahasa, penulisan esai, dan penyusunan portofolio.',
		category: 'beasiswa',
		isActive: true,
		isPopular: false,
		order: 13
	},
	{
		id: 'faq-sch-14',
		question: 'Apakah ada bimbingan khusus untuk penulisan esai dan motivation letter?',
		answer:
			'Ya, pendampingan mencakup pembedahan ide otentik, penataan kerangka narasi akademis, telaah tata bahasa, serta revisi bertahap agar pesan Anda kuat dan persuasif.',
		category: 'beasiswa',
		isActive: true,
		isPopular: false,
		order: 14
	},
	{
		id: 'faq-sch-15',
		question: 'Bagaimana simulasi wawancara beasiswa dilaksanakan?',
		answer:
			'Simulasi diadakan secara privat tatap muka atau video call interaktif dengan skenario pertanyaan nyata komite seleksi, disertai evaluasi langsung mengenai kejelasan argumen dan bahasa tubuh.',
		category: 'beasiswa',
		isActive: true,
		isPopular: false,
		order: 15
	},

	// --- KATEGORI: KEMITRAAN (Tambahan hingga 5 pertanyaan) ---
	{
		id: 'faq-part-16',
		question: 'Bagaimana cara mengajukan kerja sama kemitraan institusi?',
		answer:
			'Institusi dapat mengisi formulir kemitraan di halaman Kontak atau menghubungi kami via WhatsApp/email. Tim kami akan menjadwalkan sesi audiensi awal untuk merumuskan kerangka kerja sama (TOR).',
		category: 'kemitraan',
		isActive: true,
		isPopular: false,
		order: 16
	},
	{
		id: 'faq-part-17',
		question: 'Berapa lama proses respons setelah instansi mengirimkan permohonan kemitraan?',
		answer:
			'Tim kemitraan kami akan menindaklanjuti permohonan dalam waktu 1–2 hari kerja operasional (Senin – Jumat, 08.00 – 17.00 WIB) untuk koordinasi pertemuan lanjutan.',
		category: 'kemitraan',
		isActive: true,
		isPopular: false,
		order: 17
	},
	{
		id: 'faq-part-18',
		question: 'Apakah program kemitraan bisa diadakan langsung (on-site) di kampus atau kantor mitra?',
		answer:
			'Ya. Kami melayani penyelenggaraan in-house training on-site di kampus, sekolah, kantor perusahaan mitra, maupun kombinasi terpadu secara hybrid.',
		category: 'kemitraan',
		isActive: true,
		isPopular: false,
		order: 18
	},
	{
		id: 'faq-part-19',
		question: 'Bagaimana jika institusi ingin mengajukan proposal kegiatan kolaboratif?',
		answer:
			'Silakan kirimkan dokumen proposal atau kerangka acuan kerja sama ke alamat email info@sdjnusantara.com untuk ditelaah oleh tim pimpinan dan kemitraan strategis kami.',
		category: 'kemitraan',
		isActive: true,
		isPopular: false,
		order: 19
	},

	// --- KATEGORI: LAYANAN HUKUM (5 pertanyaan) ---
	{
		id: 'faq-leg-20',
		question: 'Apa saja ruang lingkup layanan hukum dan konsultasi regulasi di SDJNusantara?',
		answer:
			'Ruang lingkup meliputi telaah kepatuhan regulasi pendidikan, penyusunan dan penelaahan kontrak kerja sama (MoU/PKS), serta konsultasi tata kelola kelembagaan pendidikan.',
		category: 'hukum',
		isActive: true,
		isPopular: false,
		order: 20
	},
	{
		id: 'faq-leg-21',
		question: 'Apakah SDJNusantara menangani sengketa perdata atau pidana di pengadilan?',
		answer:
			'Tidak. Layanan hukum SDJNusantara bersifat preventif dan konsultatif tata kelola non-litigasi. Kami tidak menyediakan jasa advokat litigasi di ruang peradilan.',
		category: 'hukum',
		isActive: true,
		isPopular: false,
		order: 21
	},
	{
		id: 'faq-leg-22',
		question: 'Bagaimana proses penelaahan kontrak kerja sama (MoU/PKS) antar lembaga?',
		answer:
			'Tim hukum melakukan kajian mendalam terhadap hak dan kewajiban para pihak, mengidentifikasi potensi risiko hukum, serta memastikan keselarasan dokumen dengan regulasi perundang-undangan pendidikan nasional.',
		category: 'hukum',
		isActive: true,
		isPopular: false,
		order: 22
	},
	{
		id: 'faq-leg-23',
		question: 'Kapan hubungan formal penasihat-klien resmi terbentuk?',
		answer:
			'Informasi pada situs web bersifat edukasi umum. Hubungan penasihat-klien resmi baru sah terbentuk setelah tercapainya kesepakatan tertulis dan penandatanganan surat perikatan kerja sama.',
		category: 'hukum',
		isActive: true,
		isPopular: false,
		order: 23
	},
	{
		id: 'faq-leg-24',
		question: 'Apakah layanan konsultasi regulasi terbuka untuk yayasan pendidikan swasta?',
		answer:
			'Ya, layanan kami terbuka bagi yayasan pendidikan, sekolah swasta, universitas, dan badan penyelenggara pendidikan yang ingin memperkuat kepatuhan regulasi dan tata kelola lembaganya.',
		category: 'hukum',
		isActive: true,
		isPopular: false,
		order: 24
	}
];

