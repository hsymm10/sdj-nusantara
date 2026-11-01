export interface ProgramItem {
	slug: string;
	category: string;
	title: string;
	desc: string;
	duration: string;
	target: string;
	image: string;
	features?: string[];
}

export const programsData: ProgramItem[] = [
	{
		slug: 'persiapan-beasiswa-dalam-negeri',
		category: 'Persiapan Beasiswa',
		title: 'Program Persiapan Beasiswa Dalam Negeri',
		desc: 'Pendampingan lengkap mulai dari pemilihan beasiswa, penyusunan dokumen, hingga simulasi wawancara.',
		duration: '8–12 Minggu',
		target: 'Siswa & Mahasiswa',
		image: '/images/prog-card-1.jpg',
		features: [
			'Pemetaan peluang beasiswa dalam negeri (BPI, LPDP, Unggulan, dll.)',
			'Penyusunan dan review berkas aplikasi, esai, dan CV',
			'Simulasi wawancara terstruktur bersama reviewer berpengalaman',
			'Pendampingan penyusunan rencana studi dan target pendidikan'
		]
	},
	{
		slug: 'persiapan-beasiswa-luar-negeri',
		category: 'Persiapan Beasiswa',
		title: 'Program Persiapan Beasiswa Luar Negeri',
		desc: 'Bimbingan intensif untuk pendaftaran beasiswa ke berbagai negara dengan pendekatan strategis dan terarah.',
		duration: '12–16 Minggu',
		target: 'Siswa, Mahasiswa, Fresh Graduate',
		image: '/images/prog-card-2.jpg',
		features: [
			'Strategi pendaftaran beasiswa internasional (AAS, Chevening, MEXT, dll.)',
			'Bimbingan penulisan motivation letter dan proposal riset',
			'Review dokumen bahasa dan sertifikasi pendukung',
			'Simulasi wawancara bilingual dan persiapan mental'
		]
	},
	{
		slug: 'pelatihan-keterampilan-digital',
		category: 'Keterampilan Digital',
		title: 'Program Pelatihan Keterampilan Digital',
		desc: 'Pelatihan keterampilan digital yang relevan dengan industri dan kebutuhan dunia kerja.',
		duration: '4–12 Minggu',
		target: 'Pelajar, Mahasiswa, Profesional Muda',
		image: '/images/prog-card-3.jpg',
		features: [
			'Pemanfaatan AI untuk produktivitas pendidikan dan karier',
			'Literasi data dan analisis informasi digital',
			'Pembuatan portofolio berbasis proyek nyata',
			'Penguatan kolaborasi kerja berbasis platform digital'
		]
	},
	{
		slug: 'pengembangan-talenta',
		category: 'Manajemen Talenta',
		title: 'Program Pengembangan Talenta',
		desc: 'Pengembangan potensi individu melalui asesmen, mentoring, dan perencanaan karier.',
		duration: '8–12 Minggu',
		target: 'Pelajar & Mahasiswa',
		image: '/images/prog-card-4.jpg',
		features: [
			'Asesmen minat, bakat, dan kekuatan kompetensi personal',
			'Penyusunan Individual Development Plan (IDP)',
			'Sesi mentoring berkala bersama praktisi profesional',
			'Perencanaan jalur karier dan studi masa depan'
		]
	},
	{
		slug: 'pelatihan-khusus',
		category: 'Pelatihan Khusus',
		title: 'Program Pelatihan Khusus',
		desc: 'Program tematik sesuai kebutuhan instansi, sekolah, atau organisasi dengan materi yang dapat disesuaikan.',
		duration: '4–8 Minggu',
		target: 'Institusi & Organisasi',
		image: '/images/prog-card-5.jpg',
		features: [
			'Kurikulum modular yang disesuaikan dengan kebutuhan mitra',
			'Pelatihan in-house, daring, maupun kombinasi hybrid',
			'Evaluasi kompetensi sebelum dan sesudah program',
			'Laporan hasil evaluasi program dan rekomendasi kelanjutan'
		]
	}
];
