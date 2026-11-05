// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/program.js

/** @typedef {import('./index.js').KnowledgeEntry} KnowledgeEntry */

/**
 * @typedef {Object} ProgramKnowledgeEntry
 * @property {string} id
 * @property {string} slug
 * @property {'program'} kategori
 * @property {'Persiapan Beasiswa' | 'Manajemen Talenta' | 'Keterampilan Digital' | 'Kolaborasi Kelembagaan' | 'Pelatihan Khusus'} filterTab
 * @property {string} judul
 * @property {string[]} pertanyaan
 * @property {string[]} kataKunci
 * @property {string} ringkas
 * @property {string[]} detail
 * @property {string[]} format
 * @property {string} durasi
 * @property {string} biaya
 * @property {string[]} cocokUntuk
 * @property {{ label: string, href: string }[]} langkahBerikut
 * @property {string[]} tindakLanjutChip
 * @property {'terverifikasi' | 'perlu-verifikasi'} status
 * @property {string} sumber
 * @property {string} updatedAt
 * @property {string} image
 */

/** @type {ProgramKnowledgeEntry[]} */
export const programKnowledge = [
	{
		id: 'program-scholarship-academy',
		slug: 'scholarship-academy',
		kategori: 'program',
		filterTab: 'Persiapan Beasiswa',
		judul: 'Scholarship Academy',
		pertanyaan: [
			'apa itu program scholarship academy',
			'program bimbingan beasiswa angkatan',
			'jadwal bootcamp beasiswa',
			'kelas persiapan beasiswa',
			'pendampingan beasiswa intensif'
		],
		kataKunci: [
			'scholarship academy',
			'bootcamp beasiswa',
			'kelas beasiswa',
			'bimbingan beasiswa angkatan',
			'persiapan beasiswa'
		],
		ringkas:
			'Program pendampingan aplikasi beasiswa intensif berbasis kelompok atau angkatan, mulai dari pemetaan profil, penguatan esai, hingga simulasi wawancara.',
		detail: [
			'Kelas intensif bedah syarat beasiswa dalam negeri dan internasional.',
			'Coaching kelompok dan bedah berkas motivation letter secara interaktif.',
			'Sesi konsultasi personal untuk mempertajam keunikan profil pendaftar.',
			'Latihan simulasi wawancara untuk membangun rasa percaya diri di hadapan penguji.'
		],
		format: ['Kelas intensif daring', 'Coaching kelompok kecil', 'Konsultasi personal 1-on-1'],
		durasi: 'Dibahas saat konsultasi awal',
		biaya: 'Dibahas saat konsultasi awal',
		cocokUntuk: [
			'Mahasiswa S1/S2 yang sedang menyiapkan berkas beasiswa',
			'Pelajar SMA yang mengincar beasiswa perguruan tinggi',
			'Lulusan baru dan praktisi yang merencanakan studi lanjut'
		],
		langkahBerikut: [
			{ label: 'Lihat Detail Program', href: '/layanan/pendidikan/program/scholarship-academy' },
			{ label: 'Konsultasi Program Ini', href: '/kontak' }
		],
		tindakLanjutChip: ['Beasiswa', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §4 Program 1',
		updatedAt: '2026-11-05',
		image: '/images/prog-card-1.jpg'
	},
	{
		id: 'program-talent-accelerator',
		slug: 'talent-accelerator',
		kategori: 'program',
		filterTab: 'Manajemen Talenta',
		judul: 'Talent Accelerator',
		pertanyaan: [
			'apa itu program talent accelerator',
			'program pengembangan diri mahasiswa',
			'akselerasi bakat dan karier',
			'mentoring talenta muda',
			'pelatihan pengembangan talenta 1 sampai 3 bulan'
		],
		kataKunci: [
			'talent accelerator',
			'manajemen talenta',
			'pengembangan talenta',
			'akselerasi karier',
			'asesmen bakat',
			'idp'
		],
		ringkas:
			'Program akselerasi pengembangan potensi individu selama 1–3 bulan melalui asesmen bakat, penyusunan rencana aksi personal, dan sesi pembimbingan intensif.',
		detail: [
			'Asesmen komprehensif untuk memetakan kekuatan akademik, minat profesi, dan karakter.',
			'Pembuatan Individual Development Plan (IDP) yang terukur dan aplikatif.',
			'Sesi mentoring berkala bersama praktisi industri dan akademisi.',
			'Peningkatan keterampilan kepemimpinan dan kesiapan memasuki dunia profesional.'
		],
		format: ['Program terstruktur berdurasi 1–3 bulan dengan target pencapaian individu'],
		durasi: '1–3 bulan',
		biaya: 'Dibahas saat konsultasi awal',
		cocokUntuk: [
			'Pelajar dan mahasiswa yang ingin memiliki arah masa depan yang jelas',
			'Fresh graduate yang ingin memperkuat portofolio dan kesiapan kerja',
			'Pemuda yang ingin membangun karakter kepemimpinan tangguh'
		],
		langkahBerikut: [
			{ label: 'Lihat Detail Program', href: '/layanan/pendidikan/program/talent-accelerator' },
			{ label: 'Daftar Pemetaan Talenta', href: '/kontak' }
		],
		tindakLanjutChip: ['Pengembangan Talenta', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §4 Program 2',
		updatedAt: '2026-11-05',
		image: '/images/prog-card-4.jpg'
	},
	{
		id: 'program-ai-digital',
		slug: 'ai-digital-skills-academy',
		kategori: 'program',
		filterTab: 'Keterampilan Digital',
		judul: 'AI & Digital Skills Academy',
		pertanyaan: [
			'apa itu ai and digital skills academy',
			'pelatihan ai untuk pelajar',
			'belajar ai generatif untuk penelitian',
			'kelas keterampilan digital praktis',
			'workshop kecerdasan buatan'
		],
		kataKunci: [
			'ai',
			'digital skills',
			'ai generatif',
			'prompt design',
			'keterampilan digital',
			'pelatihan ai',
			'literasi data'
		],
		ringkas:
			'Kelas praktis pemanfaatan kecerdasan buatan (AI) dan keterampilan digital mutakhir untuk menunjang produktivitas pendidikan, riset ilmiah, dan pekerjaan modern.',
		detail: [
			'Pengenalan fondasi AI generatif dan teknik prompt engineering yang efektif.',
			'Riset berbantuan AI dengan tetap menjaga integritas akademik dan etika orisinalitas.',
			'Optimalisasi perangkat digital untuk pengolahan data, kolaborasi tim, dan pembuatan portofolio.',
			'Praktik studi kasus langsung untuk menghasilkan karya nyata.'
		],
		format: ['Workshop interaktif', 'Kelas singkat bersertifikat', 'Pelatihan in-house institusi'],
		durasi: 'Dibahas saat konsultasi awal',
		biaya: 'Dibahas saat konsultasi awal',
		cocokUntuk: [
			'Pendidik, dosen, dan guru yang ingin memperkaya metode ajar berbasis AI',
			'Mahasiswa yang ingin menuntaskan tugas akhir dan riset secara efisien dan etis',
			'Karyawan yang ingin mendongkrak produktivitas kerja harian'
		],
		langkahBerikut: [
			{ label: 'Lihat Detail Program', href: '/layanan/pendidikan/program/ai-digital-skills-academy' },
			{ label: 'Konsultasi Kelas AI', href: '/kontak' }
		],
		tindakLanjutChip: ['Info Program Pendidikan', 'Konsultasi', 'Kerja Sama Institusi'],
		status: 'terverifikasi',
		sumber: 'naskah §4 Program 3',
		updatedAt: '2026-11-05',
		image: '/images/prog-card-3.jpg'
	},
	{
		id: 'program-partnership-services',
		slug: 'institutional-partnership-services',
		kategori: 'program',
		filterTab: 'Kolaborasi Kelembagaan',
		judul: 'Institutional Partnership Services',
		pertanyaan: [
			'apa itu institutional partnership services',
			'layanan kerja sama program kampus',
			'pengembangan sdm sekolah dan dinas',
			'jasa desain program pendidikan institusi',
			'kemitraan pelatihan lembaga'
		],
		kataKunci: [
			'institutional partnership',
			'kemitraan institusi',
			'kerja sama kampus',
			'program sdm',
			'pelatihan lembaga',
			'tor program'
		],
		ringkas:
			'Layanan perancangan dan pelaksanaan program pengembangan sumber daya manusia yang disesuaikan secara khusus dengan target strategis institusi mitra.',
		detail: [
			'Analisis kebutuhan pelatihan dan profil kompetensi warga kampus/sekolah/instansi.',
			'Penyusunan kurikulum modular, Term of Reference (TOR), dan instrumen asesmen.',
			'Penyediaan mentor, narasumber ahli, dan fasilitator kompeten.',
			'Laporan evaluasi program berbasis data untuk tindak lanjut mutu kelembagaan.'
		],
		format: ['Sesuai kesepakatan kontrak kerja sama dan dokumen MoU/PKS resmi'],
		durasi: 'Dibahas saat konsultasi awal',
		biaya: 'Dibahas saat konsultasi awal',
		cocokUntuk: [
			'Perguruan tinggi yang ingin menyelenggarakan pembekalan beasiswa dan karier mahasiswa',
			'Sekolah dan dinas pendidikan yang merancang peningkatan mutu guru/siswa',
			'Lembaga non-profit dan pengelola beasiswa daerah'
		],
		langkahBerikut: [
			{ label: 'Lihat Detail Program', href: '/layanan/pendidikan/program/institutional-partnership-services' },
			{ label: 'Ajukan Kolaborasi', href: '/kontak' }
		],
		tindakLanjutChip: ['Kerja Sama Institusi', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §4 Program 4',
		updatedAt: '2026-11-05',
		image: '/images/svc-04-handshake.jpg'
	},
	{
		id: 'program-corporate-campus',
		slug: 'corporate-campus-training',
		kategori: 'program',
		filterTab: 'Pelatihan Khusus',
		judul: 'Corporate & Campus Training',
		pertanyaan: [
			'apa itu corporate and campus training',
			'pelatihan in house perusahaan',
			'training public speaking untuk staf',
			'seminar dan lokakarya kampus',
			'pelatihan karyawan bertema kepemimpinan'
		],
		kataKunci: [
			'corporate training',
			'campus training',
			'in-house training',
			'pelatihan karyawan',
			'lokakarya',
			'seminar kampus'
		],
		ringkas:
			'Pelatihan khusus bagi korporasi, perguruan tinggi, sekolah, dan organisasi dengan kurikulum yang dirancang fleksibel sesuai kebutuhan spesifik mitra.',
		detail: [
			'Pilihan topik: Public speaking, AI produktivitas, kepemimpinan tim, atau etika kerja.',
			'Dapat diselenggarakan secara luring di lokasi mitra (in-house) maupun daring.',
			'Metode interaktif mencakup studi kasus nyata, simulasi kelompok, dan latihan praktik langsung.',
			'Dilengkapi dengan asesmen awal dan laporan pencapaian hasil pelatihan.'
		],
		format: ['In-house training', 'Seminar eksekutif', 'Lokakarya praktis modular'],
		durasi: 'Dibahas saat konsultasi awal',
		biaya: 'Dibahas saat konsultasi awal',
		cocokUntuk: [
			'Perusahaan yang ingin mengasah kemampuan komunikasi dan adopsi AI para karyawan',
			'Organisasi mahasiswa dan unit kegiatan kampus yang menyelenggarakan pelatihan kepemimpinan',
			'Yayasan dan perkumpulan profesi'
		],
		langkahBerikut: [
			{ label: 'Lihat Detail Program', href: '/layanan/pendidikan/program/corporate-campus-training' },
			{ label: 'Diskusikan Kebutuhan Pelatihan', href: '/kontak' }
		],
		tindakLanjutChip: ['Kerja Sama Institusi', 'Konsultasi', 'Info Program Pendidikan'],
		status: 'terverifikasi',
		sumber: 'naskah §4 Program 5',
		updatedAt: '2026-11-05',
		image: '/images/prog-card-5.jpg'
	}
];
