// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/pendidikan.js

/** @typedef {import('./index.js').KnowledgeEntry} KnowledgeEntry */

/** Flag konfigurasi: pilar Digital Education tidak dimasukkan ke dalam daftar aktif */
export const showDigitalEducation = false;

/** @type {KnowledgeEntry[]} */
export const pendidikanKnowledge = [
	{
		id: 'pendidikan-talent-management',
		kategori: 'pendidikan',
		judul: 'Talent Management & Development Center',
		pertanyaan: [
			'apa itu talent management',
			'layanan pemetaan bakat dan minat',
			'bimbingan arah karier',
			'bimbingan bwt maba yg bingung milih karir',
			'bimbingan mahasiswa baru yang bingung karier',
			'cara membuat rencana pengembangan diri idp',
			'tes bakat dan minat anak'
		],
		kataKunci: [
			'talent management',
			'manajemen talenta',
			'minat bakat',
			'idp',
			'pengembangan diri',
			'coaching karier',
			'asesmen'
		],
		ringkas:
			'Layanan pemetaan bakat dan minat terpadu untuk membantu Anda mengenali kelebihan diri serta menyusun rencana pengembangan studi dan karier masa depan.',
		detail: [
			'Asesmen awal untuk mengenali minat, kekuatan akademik, dan gaya belajar.',
			'Penyusunan profil potensi dan rekomendasi arah profesi masa depan.',
			'Pembuatan rencana pengembangan diri (IDP) dengan linimasa yang jelas.',
			'Sesi pendampingan tatap muka atau daring bersama konsultan pendidikan.'
		],
		cocokUntuk: [
			'Pelajar atau mahasiswa yang masih bingung menentukan jurusan dan rencana masa depan',
			'Lulusan baru yang ingin memetakan arah karier dan kelebihan diri sebelum melamar kerja',
			'Institusi sekolah yang ingin mengenali potensi murid secara menyeluruh'
		],
		langkahBerikut: [
			{ label: 'Jadwalkan Pemetaan Talenta', href: '/kontak' },
			{ label: 'Lihat Program Terkait', href: '/layanan/pendidikan#program' }
		],
		tindakLanjutChip: ['Pengembangan Talenta', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §3 Pilar 1',
		updatedAt: '2026-11-05'
	},
	{
		id: 'pendidikan-scholarship-academy',
		kategori: 'pendidikan',
		judul: 'Scholarship Academy — Pendampingan Beasiswa',
		pertanyaan: [
			'apa itu scholarship academy',
			'layanan persiapan beasiswa',
			'bimbingan beasiswa s1 s2 s3',
			'coaching beasiswa dalam negeri dan luar negeri',
			'bantu persiapan beasiswa'
		],
		kataKunci: [
			'scholarship academy',
			'beasiswa s1',
			'beasiswa s2',
			'beasiswa s3',
			'coaching beasiswa',
			'pendampingan beasiswa'
		],
		ringkas:
			'Program pendampingan komprehensif bagi calon mahasiswa S1, S2, dan S3 untuk memilih beasiswa yang tepat, menguatkan dokumen aplikasi, serta berlatih seleksi wawancara.',
		detail: [
			'Pemetaan peluang beasiswa yang selaras dengan latar belakang akademik Anda.',
			'Bimbingan penyusunan curriculum vitae akademik, motivation letter, dan proposal riset.',
			'Simulasi wawancara terarah untuk melatih kemampuan presentasi dan kepercayaan diri.',
			'Pemeriksaan kelengkapan berkas agar dokumen memenuhi standar pendaftaran.'
		],
		cocokUntuk: [
			'Mahasiswa tingkat akhir atau fresh graduate yang membidik beasiswa magister/doktor',
			'Pelajar SMA/SMK yang menargetkan beasiswa sarjana berprestasi',
			'Profesional muda yang berencana melanjutkan studi ke luar negeri'
		],
		langkahBerikut: [
			{ label: 'Lihat Direktori Beasiswa', href: '/layanan/pendidikan#beasiswa' },
			{ label: 'Konsultasi Beasiswa', href: '/kontak' }
		],
		tindakLanjutChip: ['Beasiswa', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §3 Pilar 2',
		updatedAt: '2026-11-05'
	},
	{
		id: 'pendidikan-skills-certification',
		kategori: 'pendidikan',
		judul: 'Skills Development & Sertifikasi',
		pertanyaan: [
			'apa saja pelatihan keterampilan di sdjnusantara',
			'kursus public speaking',
			'pelatihan ai untuk guru dan dosen',
			'kelas keterampilan digital dan data',
			'pelatihan kepemimpinan dan karier',
			'info sertifikat pelatihan'
		],
		kataKunci: [
			'skills development',
			'pelatihan',
			'sertifikasi',
			'public speaking',
			'ai',
			'digital skills',
			'leadership',
			'career readiness'
		],
		ringkas:
			'Pelatihan keterampilan praktis dan bersertifikat untuk meningkatkan kesiapan kerja, kemampuan komunikasi, produktivitas berbasis kecerdasan buatan, dan kepemimpinan.',
		detail: [
			'1. Public Speaking & Komunikasi: Latihan presentasi terstruktur, teknik berbicara percaya diri, dan negosiasi.',
			'2. AI untuk Pendidikan & Produktivitas: Pemanfaatan AI generatif untuk riset, administrasi bahan ajar, dan etika pemanfaatan teknologi.',
			'3. Keterampilan Digital: Pengolahan data, pembuatan portofolio digital, dan kolaborasi daring.',
			'4. Kepemimpinan & Organisasi: Perencanaan program kerja, manajemen tim, dan penyelesaian masalah kerja.',
			'5. Kesiapan Karier: Optimalisasi profil LinkedIn, bedah CV, dan simulasi tes wawancara kerja.'
		],
		cocokUntuk: [
			'Peserta yang ingin meningkatkan rasa percaya diri saat presentasi atau berbicara di depan umum',
			'Pendidik, dosen, dan staf yang ingin memanfaatkan AI secara etis dan efisien',
			'Institusi yang membutuhkan pelatihan in-house untuk meningkatkan kualitas kerja SDM'
		],
		langkahBerikut: [
			{ label: 'Konsultasikan Pelatihan', href: '/kontak' },
			{ label: 'Lihat Jadwal Pelatihan', href: '/layanan/pendidikan#program' }
		],
		tindakLanjutChip: ['Info Program Pendidikan', 'Konsultasi', 'Kerja Sama Institusi'],
		status: 'terverifikasi',
		sumber: 'naskah §3 Pilar 3',
		updatedAt: '2026-11-05'
	},
	{
		id: 'pendidikan-partnership',
		kategori: 'pendidikan',
		judul: 'Institutional & Strategic Partnership',
		pertanyaan: [
			'bagaimana kerja sama institusi dengan sdjnusantara',
			'kolaborasi kampus dan sekolah',
			'program csr pendidikan',
			'kemitraan pelatihan perusahaan',
			'ajukan mou kerja sama pendidikan'
		],
		kataKunci: [
			'partnership',
			'kerja sama',
			'kemitraan',
			'kampus',
			'sekolah',
			'csr',
			'mou',
			'kolaborasi institusi'
		],
		ringkas:
			'Kemitraan strategis bersama universitas, sekolah, instansi pemerintah, dan perusahaan untuk menyelenggarakan program pengembangan SDM yang berkelanjutan.',
		detail: [
			'Mitra Potensial: Perguruan tinggi, sekolah menengah, pesantren, pemerintah daerah, korporasi, serta yayasan sosial.',
			'6 Tahap Kolaborasi: 1. Identifikasi kebutuhan, 2. Diskusi awal, 3. Penyusunan proposal & TOR, 4. Penandatanganan MoU/PKS, 5. Pelaksanaan kegiatan, 6. Evaluasi dan laporan dampak.',
			'Bentuk Kegiatan: Pelatihan in-house, bootcamp beasiswa kampus, webinar vokasi, hingga program CSR pendidikan.',
			'Dikelola dengan transparansi anggaran dan pelaporan berkala.'
		],
		cocokUntuk: [
			'Pimpinan universitas, dekan, dan pengelola pusat karier kampus',
			'Kepala sekolah dan guru bimbingan konseling (BK)',
			'Manajer HRD perusahaan atau pengelola dana tanggung jawab sosial (CSR)'
		],
		langkahBerikut: [
			{ label: 'Pelajari Skema Kemitraan', href: '/kemitraan' },
			{ label: 'Diskusikan Rencana Kolaborasi', href: '/kontak' }
		],
		tindakLanjutChip: ['Kerja Sama Institusi', 'Konsultasi', 'Info Program Pendidikan'],
		status: 'terverifikasi',
		sumber: 'naskah §3 Pilar 4',
		updatedAt: '2026-11-05'
	}
];
