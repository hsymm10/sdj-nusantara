// WAJIB DIGANTI data tim aktual dengan persetujuan publikasi (content-master bagian 2 dan 15: nama, jabatan, foto resmi, biografi). Jangan tayang dengan isPlaceholder true.

/**
 * Catatan: Foto saat ini merupakan potret fiktif profesional & siluet netral sementara untuk keperluan tata letak desain.
 * Dilarang meniru wajah orang sungguhan, seragam kedinasan, jubah/toga hakim, atau atribut kenegaraan.
 */

export const leadersData = [
	{
		id: 'dirut',
		nama: 'Nama Direktur Utama',
		jabatan: 'Direktur Utama',
		jabatanDetail: 'Direktur Utama SDJNusantara',
		foto: '/images/leaders/leader-1.webp',
		fotoAlt: 'Potret Direktur Utama SDJNusantara',
		profilSingkat:
			'Memimpin arah strategis, kemitraan institusional, dan tata kelola terpadu SDJNusantara dalam mewujudkan talenta berdaya saing global.',
		pendidikan: 'Magister Manajemen / Kepemimpinan Strategis',
		pengalaman: [
			'Kepemimpinan strategis organisasi & tata kelola program',
			'Pengembangan jejaring kemitraan dan diplomasi pendidikan global',
			'Inisiasi program akselerasi kapabilitas generasi muda'
		],
		isPlaceholder: true
	},
	{
		id: 'manajer-ops',
		nama: 'Nama Manajer Operasional & Program',
		jabatan: 'Manajer Operasional & Program',
		jabatanDetail: 'Manajer Operasional & Manajemen Program',
		foto: '/images/leaders/leader-2.webp',
		fotoAlt: 'Potret Manajer Operasional & Program SDJNusantara',
		profilSingkat:
			'Mengorkestrasi eksekusi operasional lintas divisi, penjaminan mutu program, serta efisiensi implementasi kegiatan institusi.',
		pendidikan: 'Magister Administrasi Publik / Manajemen Operasional',
		pengalaman: [
			'Manajemen proyek skala nasional dan operasional multi-stakeholder',
			'Pengembangan SOP dan sistem pemantauan mutu layanan',
			'Koordinasi integrasi program pembinaan dan sertifikasi'
		],
		isPlaceholder: true
	},
	{
		id: 'kadiv-talent',
		nama: 'Nama Kepala Divisi Talent Management',
		jabatan: 'Kepala Divisi Talent Management',
		jabatanDetail: 'Kepala Divisi Talent Management & Pengembangan Karir',
		foto: '/images/leaders/leader-3.webp',
		fotoAlt: 'Potret Kepala Divisi Talent Management SDJNusantara',
		profilSingkat:
			'Fokus pada kurasi, pemetaan potensi talenta muda, pemodelan kompetensi masa depan, serta pembinaan karir profesional berkelanjutan.',
		pendidikan: 'Sarjana / Magister Psikologi Industri & SDM',
		pengalaman: [
			'Pemetaan talenta digital dan kompetensi profesional muda',
			'Penyusunan kurikulum mentoring dan coaching eksekutif',
			'Penyaluran dan jejaring alumni program pengembangan'
		],
		isPlaceholder: true
	},
	{
		id: 'kadiv-scholarship',
		nama: 'Nama Kepala Divisi Scholarship',
		jabatan: 'Kepala Divisi Scholarship',
		jabatanDetail: 'Kepala Divisi Scholarship & Edukasi Global',
		foto: '/images/leaders/leader-4.webp?v=2',
		fotoAlt: 'Potret Kepala Divisi Scholarship SDJNusantara',
		profilSingkat:
			'Mengelola program kurasi beasiswa prestisius, bimbingan persiapan studi lanjut, dan kolaborasi dengan penyedia beasiswa global.',
		pendidikan: 'Magister Pendidikan Internasional / Hubungan Internasional',
		pengalaman: [
			'Pengelolaan pendampingan beasiswa LPDP, Chevening, AAS, dan MEXT',
			'Kemitraan institusi universitas top dunia dan konsorsium beasiswa',
			'Penyusunan strategi seleksi dan penguatan proposal studi'
		],
		isPlaceholder: true
	},
	{
		id: 'kadiv-training',
		nama: 'Nama Kepala Divisi Training & Certification',
		jabatan: 'Kepala Divisi Training & Certification',
		jabatanDetail: 'Kepala Divisi Training, Certification & Standarisasi Kompetensi',
		foto: '/images/leaders/leader-5.webp?v=2',
		fotoAlt: 'Potret Kepala Divisi Training & Certification SDJNusantara',
		profilSingkat:
			'Memimpin standarisasi silabus pelatihan profesional, akreditasi sertifikasi kompetensi, serta kesiapan kerja praktis talenta.',
		pendidikan: 'Sarjana / Magister Teknik Informatika / Manajemen Sistem',
		pengalaman: [
			'Pengembangan modul bootcamp dan sertifikasi berstandar industri',
			'Uji kompetensi dan integrasi lembaga sertifikasi profesi',
			'Evaluasi pencapaian kompetensi lulusan pelatihan'
		],
		isPlaceholder: true
	}
];

if (leadersData.some((leader) => leader.isPlaceholder)) {
	console.warn(
		'[SDJNusantara Warning] Data pimpinan masih menggunakan data contoh (isPlaceholder: true). WAJIB diganti dengan data resmi dan persetujuan publikasi sebelum rilis publik (content-master bagian 2 & 15).'
	);
}

export default leadersData;
