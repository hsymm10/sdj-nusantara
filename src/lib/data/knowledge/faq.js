// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/faq.js

/** @typedef {import('./index.js').KnowledgeEntry} KnowledgeEntry */

/** @type {KnowledgeEntry[]} */
export const faqKnowledge = [
	{
		id: 'faq-sasaran-peserta',
		kategori: 'faq',
		judul: 'Apakah SDJNusantara hanya melayani mahasiswa?',
		pertanyaan: [
			'apakah sdjnusantara hanya untuk mahasiswa',
			'apakah anak sekolah bisa ikut',
			'apakah terbuka untuk umum',
			'siapa yang boleh ikut program sdj',
			'apakah orang yang sudah kerja bisa ikut'
		],
		kataKunci: ['hanya mahasiswa', 'pelajar', 'peserta umum', 'siapa yang boleh ikut', 'kategori peserta'],
		ringkas:
			'Tidak. Layanan kami terbuka untuk pelajar sekolah menengah, mahasiswa, lulusan baru, profesional, pendidik, komunitas, hingga institusi.',
		detail: [
			'Pelajar SMA/SMK: Pemetaan minat jurusan dan persiapan beasiswa sarjana.',
			'Mahasiswa S1/S2/S3: Bimbingan beasiswa pascasarjana, publikasi, dan persiapan karier.',
			'Profesional & Lembaga: Pelatihan komunikasi, AI produktivitas, serta kemitraan institusi.'
		],
		cocokUntuk: [
			'Pelajar, mahasiswa, pencari kerja, praktisi, dan pimpinan lembaga'
		],
		langkahBerikut: [
			{ label: 'Lihat Layanan Pendidikan', href: '/layanan/pendidikan' },
			{ label: 'Konsultasi Program', href: '/kontak' }
		],
		tindakLanjutChip: ['Info Program Pendidikan', 'Beasiswa', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §8 FAQ 1',
		updatedAt: '2026-11-05'
	},
	{
		id: 'faq-penyedia-beasiswa',
		kategori: 'faq',
		judul: 'Apakah SDJNusantara menyediakan beasiswa sendiri?',
		pertanyaan: [
			'apakah sdjnusantara pemberi beasiswa',
			'apakah sdj bagi-bagi beasiswa',
			'apakah ada beasiswa langsung dari sdjnusantara',
			'apakah sdjnusantara lembaga donor',
			'apakah sdj mendanai kuliah'
		],
		kataKunci: ['menyediakan beasiswa', 'pemberi beasiswa', 'dana beasiswa', 'donor beasiswa', 'sumber pendanaan'],
		ringkas:
			'SDJNusantara berfokus pada kurasi informasi dan pendampingan persiapan aplikasi beasiswa, bukan sebagai lembaga penyandang dana beasiswa langsung.',
		detail: [
			'Ketersediaan dana dan penetapan beasiswa sepenuhnya ditentukan oleh masing-masing lembaga penyedia (pemerintah, universitas, yayasan, atau lembaga donor internasional).',
			'Kami membimbing Anda memilih beasiswa yang sesuai serta mendampingi penguatan berkas agar peluang bersaing Anda optimal.'
		],
		cocokUntuk: [
			'Pendaftar beasiswa yang mencari kejelasan peran lembaga pendamping'
		],
		langkahBerikut: [
			{ label: 'Cari Informasi Beasiswa', href: '/layanan/pendidikan#beasiswa' },
			{ label: 'Konsultasi Persiapan', href: '/kontak' }
		],
		tindakLanjutChip: ['Beasiswa', 'Info Program Pendidikan', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §8 FAQ 2',
		updatedAt: '2026-11-05'
	},
	{
		id: 'faq-jaminan-lolos',
		kategori: 'faq',
		judul: 'Apakah peserta dijamin lolos beasiswa?',
		pertanyaan: [
			'apakah pasti lolos beasiswa',
			'apakah dijamin diterima beasiswa',
			'ada garansi uang kembali kalau tidak lolos',
			'apakah dijamin dapat loa kampus',
			'apakah 100 persen pasti lulus'
		],
		kataKunci: ['dijamin lolos', 'garansi lolos', 'pasti diterima', 'jaminan beasiswa', 'garansi kelulusan'],
		ringkas:
			'Tidak. Kami tidak menjanjikan kelulusan, penerbitan LoA, maupun perolehan beasiswa karena keputusan akhir sepenuhnya berada pada komite seleksi resmi.',
		detail: [
			'Komitmen kami adalah membantu Anda mempersiapkan aplikasi secara terarah, meningkatkan mutu esai dan CV, serta melatih kesiapan wawancara secara maksimal.',
			'Pendampingan kami mengutamakan proses belajar yang etis, terstruktur, dan objektif tanpa klaim instan.'
		],
		cocokUntuk: [
			'Calon pelamar beasiswa yang menghargai proses bimbingan yang kredibel dan etis'
		],
		langkahBerikut: [
			{ label: 'Pelajari Komitmen Layanan Kami', href: '/tentang-kami' },
			{ label: 'Konsultasikan Kesiapan Anda', href: '/kontak' }
		],
		tindakLanjutChip: ['Beasiswa', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §8 FAQ 3',
		updatedAt: '2026-11-05'
	},
	{
		id: 'faq-layanan-daring',
		kategori: 'faq',
		judul: 'Apakah konsultasi dan bimbingan bisa dilakukan secara daring (online)?',
		pertanyaan: [
			'apakah bisa bimbingan online',
			'apakah konsultasi bisa lewat zoom',
			'apakah harus datang ke kantor jakarta',
			'bisa jarak jauh tidak',
			'apakah melayani peserta dari luar pulau jawa'
		],
		kataKunci: ['daring', 'online', 'zoom', 'jarak jauh', 'luar kota', 'tatap muka'],
		ringkas:
			'Ya. Layanan konsultasi, mentoring, dan kelas pelatihan dapat diselenggarakan secara daring melalui ruang virtual interaktif maupun tatap muka langsung.',
		detail: [
			'Peserta dari seluruh Indonesia dan luar negeri dapat mengikuti bimbingan daring secara fleksibel.',
			'Tersedia jadwal yang disesuaikan dengan kesepakatan antara peserta dan mentor pendamping.'
		],
		cocokUntuk: [
			'Peserta di luar wilayah Jabodetabek atau yang memiliki keterbatasan waktu mobilitas'
		],
		langkahBerikut: [
			{ label: 'Jadwalkan Konsultasi Daring', href: '/kontak' }
		],
		tindakLanjutChip: ['Konsultasi', 'Info Program Pendidikan'],
		status: 'terverifikasi',
		sumber: 'naskah §8 FAQ 4',
		updatedAt: '2026-11-05'
	},
	{
		id: 'faq-sertifikat',
		kategori: 'faq',
		judul: 'Apakah peserta pelatihan memperoleh sertifikat (termasuk BNSP)?',
		pertanyaan: [
			'apakah dapat sertifikat setelah ikut kelas',
			'apakah ada sertifikat bnsp',
			'apakah sertifikatnya resmi',
			'sertifikat apa yang diberikan',
			'apakah diakui kerja'
		],
		kataKunci: ['sertifikat', 'bnsp', 'sertifikat pelatihan', 'sertifikat kompetensi', 'ijazah kursus'],
		ringkas:
			'Peserta memperoleh sertifikat keikutsertaan pelatihan resmi dari SDJNusantara; sertifikat kompetensi profesi hanya diterbitkan oleh lembaga berwenang (seperti BNSP).',
		detail: [
			'Sertifikat keikutsertaan pelatihan diberikan sebagai bukti telah menyelesaikan kurikulum kelas di SDJNusantara.',
			'Sertifikat kompetensi profesi diterbitkan tersendiri oleh badan sertifikasi berwenang sesuai skema uji kompetensi.',
			'Kerja sama resmi dengan lembaga sertifikasi dan skema terkait akan diumumkan secara terbuka setelah proses verifikasi selesai.'
		],
		cocokUntuk: [
			'Peserta kelas pelatihan yang membutuhkan kejelasan jenis sertifikat untuk portofolio'
		],
		langkahBerikut: [
			{ label: 'Lihat Info Pelatihan Keterampilan', href: '/layanan/pendidikan#program' }
		],
		tindakLanjutChip: ['Info Program Pendidikan', 'Konsultasi'],
		status: 'perlu-verifikasi',
		sumber: 'naskah §8 FAQ 5',
		updatedAt: '2026-11-05'
	},
	{
		id: 'faq-cara-daftar',
		kategori: 'faq',
		judul: 'Bagaimana cara mendaftar program atau bimbingan?',
		pertanyaan: [
			'bagaimana cara mendaftar',
			'cara ikut bimbingan beasiswa',
			'cara pesan konsultasi',
			'link pendaftaran kelas',
			'tahap awal pendaftaran'
		],
		kataKunci: ['cara mendaftar', 'cara ikut', 'daftar kelas', 'registrasi', 'formulir pendaftaran'],
		ringkas:
			'Pilih program yang Anda minati di situs web, lalu isi formulir kontak atau hubungi WhatsApp resmi kami untuk memulai konsultasi awal.',
		detail: [
			'Kunjungi menu Layanan atau Program di website SDJNusantara.',
			'Klik tombol "Ajukan Konsultasi" atau isi formulir di halaman Kontak.',
			'Tim narahubung kami akan segera merespons untuk memetakan kebutuhan dan mengarahkan paket yang paling sesuai.'
		],
		cocokUntuk: [
			'Semua calon peserta individu maupun perwakilan lembaga'
		],
		langkahBerikut: [
			{ label: 'Isi Formulir Konsultasi', href: '/kontak' },
			{ label: 'Chat WhatsApp Layanan', href: 'https://wa.me/6285880724733' }
		],
		tindakLanjutChip: ['Konsultasi', 'Info Program Pendidikan'],
		status: 'terverifikasi',
		sumber: 'naskah §8 FAQ 6',
		updatedAt: '2026-11-05'
	},
	{
		id: 'faq-layanan-institusi',
		kategori: 'faq',
		judul: 'Apakah materi dan layanan dapat disesuaikan untuk institusi atau perusahaan?',
		pertanyaan: [
			'apakah bisa custom materi pelatihan kampus',
			'pelatihan khusus guru dan staf',
			'kerja sama in house training sekolah',
			'apakah kurikulum bisa sesuai kebutuhan kantor',
			'layanan kustom institusi'
		],
		kataKunci: ['kustom materi', 'layanan institusi', 'in-house training', 'pelatihan khusus', 'kerja sama sekolah'],
		ringkas:
			'Ya. Kami dapat merancang program, silabus, dan jadwal pelatihan khusus yang disesuaikan dengan tujuan serta anggaran lembaga mitra.',
		detail: [
			'Penyusunan kurikulum modular bersama pimpinan instansi.',
			'Dapat diselenggarakan secara in-house di kantor mitra maupun daring terpadu.',
			'Dilengkapi dengan laporan evaluasi ketercapaian kompetensi peserta.'
		],
		cocokUntuk: [
			'Pimpinan perguruan tinggi, kepala sekolah, dinas, dan manajer HRD perusahaan'
		],
		langkahBerikut: [
			{ label: 'Lihat Info Kemitraan', href: '/kemitraan' },
			{ label: 'Hubungi Tim Kerja Sama', href: '/kontak' }
		],
		tindakLanjutChip: ['Kerja Sama Institusi', 'Konsultasi'],
		status: 'terverifikasi',
		sumber: 'naskah §8 FAQ 7',
		updatedAt: '2026-11-05'
	}
];
