// src/lib/data/faq.ts
// Data resmi Pertanyaan yang Sering Diajukan (FAQ) SDJNusantara
// Mendukung kategorisasi, status aktif, status populer, urutan, dan pencarian interaktif

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
	categories: ('program' | 'beasiswa' | 'kemitraan' | 'hukum')[];
	isActive: boolean;
	isPopular: boolean;
	order: number;
}

export interface FaqCategory {
	id: 'program' | 'beasiswa' | 'kemitraan' | 'hukum';
	name: string;
	icon: string;
	count: number;
}

export const FAQ_CATEGORIES: FaqCategory[] = [
	{ id: 'program', name: 'Program Pendidikan', icon: 'ph:student-bold', count: 8 },
	{ id: 'beasiswa', name: 'Beasiswa', icon: 'ph:gift-bold', count: 6 },
	{ id: 'kemitraan', name: 'Kemitraan', icon: 'ph:handshake-bold', count: 5 },
	{ id: 'hukum', name: 'Layanan Hukum', icon: 'ph:scales-bold', count: 5 }
];

export const faqData: FaqItem[] = [
	// --- KATEGORI: PROGRAM PENDIDIKAN (7 Pertanyaan Utama Sesuai Mockup) ---
	{
		id: 'faq-01',
		question: 'Apakah SDJNusantara hanya melayani mahasiswa?',
		answer:
			'Tidak. SDJNusantara melayani mahasiswa, pelajar, tenaga pendidik, institusi pendidikan, organisasi, maupun perusahaan yang membutuhkan layanan pendidikan, pelatihan, beasiswa, kemitraan, dan konsultasi regulasi.',
		categories: ['program'],
		isActive: true,
		isPopular: true,
		order: 1
	},
	{
		id: 'faq-02',
		question: 'Apakah SDJNusantara menyediakan beasiswa sendiri?',
		answer:
			'SDJNusantara berfokus pada kurasi informasi dan pendampingan persiapan aplikasi beasiswa, bukan sebagai lembaga penyandang dana beasiswa langsung.',
		categories: ['program', 'beasiswa'],
		isActive: true,
		isPopular: true,
		order: 2
	},
	{
		id: 'faq-03',
		question: 'Apakah peserta dijamin lolos beasiswa?',
		answer:
			'Tidak. Kami tidak menjanjikan kelulusan, penerbitan LoA, maupun perolehan beasiswa karena keputusan akhir sepenuhnya berada pada komite seleksi resmi masing-masing penyelenggara beasiswa.',
		categories: ['program', 'beasiswa'],
		isActive: true,
		isPopular: true,
		order: 3
	},
	{
		id: 'faq-04',
		question: 'Apakah konsultasi dan bimbingan bisa dilakukan secara daring (online)?',
		answer:
			'Ya. Seluruh sesi konsultasi, bimbingan, dan pelatihan dapat diselenggarakan secara daring melalui video conference interaktif maupun tatap muka langsung sesuai kesepakatan.',
		categories: ['program'],
		isActive: true,
		isPopular: true,
		order: 4
	},
	{
		id: 'faq-05',
		question: 'Apakah peserta pelatihan memperoleh sertifikat (termasuk BNSP)?',
		answer:
			'Peserta memperoleh sertifikat keikutsertaan pelatihan resmi dari SDJNusantara. Untuk sertifikat kompetensi profesi, penerbitan dilakukan oleh badan sertifikasi berwenang (seperti BNSP) sesuai skema uji kompetensi yang terdaftar.',
		categories: ['program'],
		isActive: true,
		isPopular: true,
		order: 5
	},
	{
		id: 'faq-06',
		question: 'Bagaimana cara mendaftar program atau bimbingan?',
		answer:
			'Pilih program yang Anda minati di website SDJNusantara, lalu isi formulir kontak atau hubungi WhatsApp resmi kami untuk memulai konsultasi awal pemetaan kebutuhan.',
		categories: ['program'],
		isActive: true,
		isPopular: true,
		order: 6
	},
	{
		id: 'faq-07',
		question: 'Apakah materi dan layanan dapat disesuaikan untuk institusi atau perusahaan?',
		answer:
			'Ya. Kami dapat merancang program, silabus, dan jadwal pelatihan khusus yang disesuaikan dengan kebutuhan, sasaran kompetensi, dan anggaran lembaga mitra.',
		categories: ['program', 'kemitraan'],
		isActive: true,
		isPopular: true,
		order: 7
	},

	// --- KATEGORI: BEASISWA (4 Pertanyaan Tambahan untuk melengkapi 6 Beasiswa) ---
	{
		id: 'faq-sch-08',
		question: 'Apa saja beasiswa yang didampingi dalam Scholarship Academy?',
		answer:
			'Kami mendampingi persiapan beasiswa dalam dan luar negeri, termasuk BPI (Kemdikbudristek), LPDP (Kemenkeu), Chevening (Inggris), MEXT (Jepang), AAS (Australia), serta beasiswa universitas dunia.',
		categories: ['beasiswa'],
		isActive: true,
		isPopular: false,
		order: 8
	},
	{
		id: 'faq-sch-09',
		question: 'Kapan waktu terbaik untuk memulai persiapan aplikasi beasiswa?',
		answer:
			'Waktu persiapan ideal adalah 6 hingga 12 bulan sebelum jadwal pendaftaran resmi dibuka, agar Anda memiliki waktu matang untuk sertifikasi bahasa, penulisan esai, dan penyusunan portofolio.',
		categories: ['beasiswa'],
		isActive: true,
		isPopular: false,
		order: 9
	},
	{
		id: 'faq-sch-10',
		question: 'Apakah ada bimbingan khusus untuk penulisan esai dan motivation letter?',
		answer:
			'Ya, pendampingan mencakup pembedahan ide otentik, penataan kerangka narasi akademis, telaah tata bahasa, serta revisi bertahap agar pesan Anda kuat dan persuasif.',
		categories: ['beasiswa'],
		isActive: true,
		isPopular: false,
		order: 10
	},
	{
		id: 'faq-sch-11',
		question: 'Bagaimana simulasi wawancara beasiswa dilaksanakan?',
		answer:
			'Simulasi diadakan secara privat tatap muka atau video call interaktif dengan skenario pertanyaan nyata komite seleksi, disertai evaluasi langsung mengenai kejelasan argumen dan bahasa tubuh.',
		categories: ['beasiswa'],
		isActive: true,
		isPopular: false,
		order: 11
	},

	// --- KATEGORI: KEMITRAAN (4 Pertanyaan Tambahan untuk melengkapi 5 Kemitraan) ---
	{
		id: 'faq-part-12',
		question: 'Bagaimana cara mengajukan kerja sama kemitraan institusi?',
		answer:
			'Institusi dapat mengisi formulir kemitraan di halaman Kontak atau menghubungi kami via WhatsApp/email. Tim kami akan menjadwalkan sesi audiensi awal untuk merumuskan kerangka kerja sama (TOR).',
		categories: ['kemitraan'],
		isActive: true,
		isPopular: false,
		order: 12
	},
	{
		id: 'faq-part-13',
		question: 'Berapa lama proses respons setelah instansi mengirimkan permohonan kemitraan?',
		answer:
			'Tim kemitraan kami akan menindaklanjuti permohonan dalam waktu 1–2 hari kerja operasional (Senin – Jumat, 08.00 – 17.00 WIB) untuk koordinasi pertemuan lanjutan.',
		categories: ['kemitraan'],
		isActive: true,
		isPopular: false,
		order: 13
	},
	{
		id: 'faq-part-14',
		question: 'Apakah program kemitraan bisa diadakan langsung (on-site) di kampus atau kantor mitra?',
		answer:
			'Ya. Kami melayani penyelenggaraan in-house training on-site di kampus, sekolah, kantor perusahaan mitra, maupun kombinasi terpadu secara hybrid.',
		categories: ['kemitraan'],
		isActive: true,
		isPopular: false,
		order: 14
	},
	{
		id: 'faq-part-15',
		question: 'Bagaimana jika institusi ingin mengajukan proposal kegiatan kolaboratif?',
		answer:
			'Silakan kirimkan dokumen proposal atau kerangka acuan kerja sama ke alamat email info@sdjnusantara.com untuk ditelaah oleh tim pimpinan dan kemitraan strategis kami.',
		categories: ['kemitraan'],
		isActive: true,
		isPopular: false,
		order: 15
	},

	// --- KATEGORI: LAYANAN HUKUM (5 Pertanyaan Hukum) ---
	{
		id: 'faq-leg-16',
		question: 'Apa saja ruang lingkup layanan hukum dan konsultasi regulasi di SDJNusantara?',
		answer:
			'Ruang lingkup meliputi telaah kepatuhan regulasi pendidikan, penyusunan dan penelaahan kontrak kerja sama (MoU/PKS), serta konsultasi tata kelola kelembagaan pendidikan.',
		categories: ['hukum'],
		isActive: true,
		isPopular: false,
		order: 16
	},
	{
		id: 'faq-leg-17',
		question: 'Apakah SDJNusantara menangani sengketa perdata atau pidana di pengadilan?',
		answer:
			'Tidak. Layanan hukum SDJNusantara bersifat preventif dan konsultatif tata kelola non-litigasi. Kami tidak menyediakan jasa advokat litigasi di ruang peradilan.',
		categories: ['hukum'],
		isActive: true,
		isPopular: false,
		order: 17
	},
	{
		id: 'faq-leg-18',
		question: 'Bagaimana proses penelaahan kontrak kerja sama (MoU/PKS) antar lembaga?',
		answer:
			'Tim hukum melakukan kajian mendalam terhadap hak dan kewajiban para pihak, mengidentifikasi potensi risiko hukum, serta memastikan keselarasan dokumen dengan regulasi perundang-undangan pendidikan nasional.',
		categories: ['hukum'],
		isActive: true,
		isPopular: false,
		order: 18
	},
	{
		id: 'faq-leg-19',
		question: 'Kapan hubungan formal penasihat-klien resmi terbentuk?',
		answer:
			'Hubungan penasihat-klien baru resmi terbentuk setelah disepakatinya surat perikatan kerja sama (engagement letter) tertulis dan verifikasi ruang lingkup layanan.',
		categories: ['hukum'],
		isActive: true,
		isPopular: false,
		order: 19
	},
	{
		id: 'faq-leg-20',
		question: 'Bagaimana skema pendampingan hukum terstruktur untuk institusi pendidikan?',
		answer:
			'Pendampingan dilakukan secara berkala mencakup audit kepatuhan kebijakan kampus, pembaruan regulasi pendidikan tinggi/vokasi, serta asistensi penyusunan dokumen hukum formal institusi.',
		categories: ['hukum'],
		isActive: true,
		isPopular: false,
		order: 20
	}
];
