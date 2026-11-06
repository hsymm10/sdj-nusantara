// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/beasiswa.js

/** @typedef {import('./index.js').KnowledgeEntry} KnowledgeEntry */

/** @type {KnowledgeEntry[]} */
export const beasiswaKnowledge = [
	{
		id: 'beasiswa-scholarship-academy-detail',
		kategori: 'beasiswa',
		judul: 'Alur dan Ruang Lingkup Pendampingan Beasiswa',
		pertanyaan: [
			'bagaimana alur pendampingan beasiswa di sdjnusantara',
			'apa saja yang dibimbing saat daftar beasiswa',
			'tahapan persiapan beasiswa s2 luar negeri',
			'apakah dibantu bikin esai dan motivation letter',
			'apakah ada simulasi wawancara beasiswa'
		],
		kataKunci: [
			'alur beasiswa',
			'tahapan beasiswa',
			'persiapan beasiswa',
			'esai',
			'motivation letter',
			'simulasi wawancara',
			's1',
			's2',
			's3'
		],
		ringkas:
			'Pendampingan beasiswa SDJNusantara dirancang melalui 6 langkah berurutan agar berkas dan kesiapan mental Anda matang sebelum batas waktu pendaftaran tiba.',
		detail: [
			'Langkah 1 (Konsultasi Awal): Mengidentifikasi latar belakang pendidikan, target studi, dan preferensi negara tujuan Anda.',
			'Langkah 2 (Pemetaan Peluang): Menganalisis skema beasiswa dalam dan luar negeri yang paling cocok dengan profil akademik Anda.',
			'Langkah 3 (Strategi Aplikasi): Menyusun linimasa persiapan, rencana tes bahasa, dan pemilihan program studi yang tepat.',
			'Langkah 4 (Penguatan Dokumen): Bimbingan intensif menulis curriculum vitae akademik, motivation letter, esai personal, dan proposal riset.',
			'Langkah 5 (Persiapan Seleksi): Latihan simulasi wawancara dengan format tanya-jawab mendalam untuk melatih ketenangan dan argumentasi.',
			'Langkah 6 (Final Review): Pemeriksaan akhir seluruh kelengkapan berkas administrasi sebelum diunggah ke portal resmi beasiswa.'
		],
		cocokUntuk: [
			'Pendaftar beasiswa S1, S2, maupun S3 jenjang dalam negeri dan luar negeri yang ingin persiapan terarah'
		],
		langkahBerikut: [
			{ label: 'Lihat Direktori Beasiswa', href: '/layanan/pendidikan#beasiswa' },
			{ label: 'Konsultasi Beasiswa Sekarang', href: '/kontak' }
		],
		tindakLanjutChip: ['Beasiswa', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §3 Pilar 2',
		updatedAt: '2026-11-05'
	},
	{
		id: 'beasiswa-catatan-layanan',
		kategori: 'beasiswa',
		judul: 'Catatan Layanan dan Batas Wewenang Beasiswa',
		pertanyaan: [
			'apakah dijamin lolos beasiswa',
			'apakah ada jaminan diterima',
			'apakah pasti dapat beasiswa',
			'apakah sdjnusantara bisa meloloskan beasiswa',
			'garansi lolos beasiswa'
		],
		kataKunci: [
			'jaminan',
			'pasti lolos',
			'jaminan diterima',
			'garansi beasiswa',
			'kewenangan beasiswa',
			'kebijakan seleksi'
		],
		ringkas:
			'Keputusan penerimaan dan pemberian beasiswa sepenuhnya merupakan kewenangan pihak penyelenggara beasiswa atau perguruan tinggi terkait.',
		detail: [
			'SDJNusantara memberikan konsultasi, pembimbingan strategi, dan pendampingan dokumen, bukan perantara atau jaminan kelulusan.',
			'Kami tidak menjual janji penerimaan Letter of Acceptance (LoA) maupun kepastian lolos seleksi beasiswa.',
			'Tujuan kami adalah meningkatkan kelayakan dan mutu aplikasi peserta agar dapat bersaing secara sehat dan terhormat.',
			'Seluruh proses seleksi resmi dinilai secara independen oleh komite beasiswa masing-masing lembaga.'
		],
		cocokUntuk: [
			'Seluruh calon peserta yang mencari informasi pendampingan beasiswa yang jujur dan transparan'
		],
		langkahBerikut: [
			{ label: 'Pelajari Pendekatan Layanan', href: '/tentang-kami' },
			{ label: 'Konsultasi Persiapan Beasiswa', href: '/kontak' }
		],
		tindakLanjutChip: ['Beasiswa', 'Konsultasi', 'Info Program Pendidikan'],
		status: 'terverifikasi',
		sumber: 'naskah §3 Pilar 2 (Komitmen Layanan)',
		updatedAt: '2026-11-05'
	},
	{
		id: 'beasiswa-spesifik',
		kategori: 'beasiswa',
		judul: 'Panduan Beasiswa Populer (BPI, LPDP, Chevening, MEXT)',
		pertanyaan: [
			'bagaimana cara daftar lpdp',
			'info beasiswa bpi',
			'syarat beasiswa chevening',
			'beasiswa jepang mext',
			'beasiswa kuliah ke luar negeri',
			'pilihan beasiswa pemerintah'
		],
		kataKunci: [
			'lpdp',
			'bpi',
			'chevening',
			'mext',
			'aas',
			'beasiswa luar negeri',
			'beasiswa dalam negeri',
			'beasiswa pemerintah'
		],
		ringkas:
			'Informasi jadwal, kuota, dan persyaratan teknis beasiswa dapat berubah sewaktu-waktu sesuai kebijakan resmi masing-masing penyelenggara.',
		detail: [
			'Pastikan selalu memverifikasi informasi dan tanggal tenggat langsung di situs resmi penyelenggara (misalnya situs LPDP, Kemendikbudristek untuk BPI, Kedutaan Inggris untuk Chevening, atau Kedutaan Jepang untuk MEXT).',
			'SDJNusantara membantu Anda mempersiapkan syarat-syarat umum: esai kontribusi, rencana studi, motivation letter, dan simulasi wawancara.',
			'Kami mendampingi proses kurasi beasiswa yang paling pas dengan bidang ilmu dan rencana masa depan Anda.'
		],
		cocokUntuk: [
			'Calon pendaftar beasiswa pemerintah dalam negeri maupun beasiswa internasional bergengsi'
		],
		langkahBerikut: [
			{ label: 'Lihat Direktori Beasiswa', href: '/layanan/pendidikan#beasiswa' },
			{ label: 'Konsultasi Strategi Beasiswa', href: '/kontak' }
		],
		tindakLanjutChip: ['Beasiswa', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §5',
		updatedAt: '2026-11-05'
	},
	{
		id: 'beasiswa-sertifikat',
		kategori: 'beasiswa',
		judul: 'Ketentuan Sertifikat dan Informasi BNSP',
		pertanyaan: [
			'apakah dapat sertifikat bnsp',
			'apakah pelatihannya resmi bnsp',
			'sertifikat apa yang didapat',
			'apakah ada sertifikat kompetensi',
			'kerja sama bnsp'
		],
		kataKunci: [
			'bnsp',
			'sertifikat kompetensi',
			'sertifikasi resmi',
			'sertifikat pelatihan',
			'uji kompetensi',
			'lsp'
		],
		ringkas:
			'Sertifikat keikutsertaan pelatihan internal berbeda dari sertifikat kompetensi resmi yang diterbitkan oleh badan sertifikasi berwenang.',
		detail: [
			'Setiap peserta pelatihan di SDJNusantara memperoleh sertifikat keikutsertaan pelatihan resmi dari lembaga kami.',
			'Sertifikat kompetensi profesi hanya diterbitkan oleh lembaga yang berwenang (seperti BNSP melalui LSP terkait) sesuai skema uji kompetensi yang berlaku.',
			'SDJNusantara merencanakan kerja sama dengan lembaga sertifikasi berwenang; nama skema dan status kemitraan resmi akan diumumkan secara terbuka setelah proses verifikasi selesai.',
			'Kami tidak mencantumkan atau mengklaim kemitraan sebelum adanya perjanjian kerja sama formal yang terverifikasi.'
		],
		cocokUntuk: [
			'Peserta pelatihan dan pimpinan institusi yang membutuhkan kepastian legalitas sertifikat'
		],
		langkahBerikut: [
			{ label: 'Konsultasi Pelatihan', href: '/kontak' },
			{ label: 'Jelajahi Program', href: '/layanan/pendidikan#program' }
		],
		tindakLanjutChip: ['Info Program Pendidikan', 'Konsultasi'],
		status: 'perlu-verifikasi',
		sumber: 'naskah §3 Pilar 3 (Ketentuan Sertifikasi)',
		updatedAt: '2026-11-05'
	}
];

