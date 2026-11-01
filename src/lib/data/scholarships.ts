// CONTOH DATA: WAJIB DIVERIFIKASI ke sumber resmi sebelum publikasi
// Sesuai Bagian 5 & 15 content-master SDJNusantara

export interface Scholarship {
	id: string;
	nama: string;
	penyelenggara: string;
	jenjang: string;
	negara: string;
	pendanaan: string;
	kategori: 'Pemerintah' | 'Universitas' | 'Lembaga Internasional' | 'Swasta' | 'Daerah';
	cakupan: 'Dalam Negeri' | 'Luar Negeri';
	jenisPendanaan: 'Fully Funded' | 'Partial Funded';
	status: 'Buka' | 'Segera Dibuka' | 'Ditutup';
	deadline: string;
	sourceUrl: string;
	updatedAt: string;
	image: string;
}

export const scholarshipsData: Scholarship[] = [
	{
		id: 'bpi',
		nama: 'Beasiswa Pendidikan Indonesia (BPI)',
		penyelenggara: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
		jenjang: 'S1, S2, S3',
		negara: 'Seluruh Indonesia',
		pendanaan: 'Biaya pendidikan, biaya hidup, dukungan penelitian',
		kategori: 'Pemerintah',
		cakupan: 'Dalam Negeri',
		jenisPendanaan: 'Fully Funded',
		status: 'Buka',
		deadline: '30 November 2026',
		sourceUrl: 'https://beasiswa.kemdikbud.go.id',
		updatedAt: 'Diperbarui 12 Okt 2026',
		image: '/images/sch-card-1.jpg'
	},
	{
		id: 'chevening',
		nama: 'Chevening Scholarship',
		penyelenggara: 'UK Government',
		jenjang: 'S2 (Master)',
		negara: 'Inggris',
		pendanaan: 'Biaya kuliah, biaya hidup, tiket pesawat, tunjangan lain',
		kategori: 'Pemerintah',
		cakupan: 'Luar Negeri',
		jenisPendanaan: 'Fully Funded',
		status: 'Buka',
		deadline: '15 Desember 2026',
		sourceUrl: 'https://www.chevening.org',
		updatedAt: 'Diperbarui 10 Okt 2026',
		image: '/images/sch-card-2.jpg'
	},
	{
		id: 'mext',
		nama: 'MEXT Scholarship',
		penyelenggara: 'Government of Japan',
		jenjang: 'S1, S2, S3',
		negara: 'Jepang',
		pendanaan: 'Biaya kuliah, biaya hidup, tiket pesawat',
		kategori: 'Pemerintah',
		cakupan: 'Luar Negeri',
		jenisPendanaan: 'Fully Funded',
		status: 'Segera Dibuka',
		deadline: '10 Januari 2027',
		sourceUrl: 'https://www.id.emb-japan.go.jp',
		updatedAt: 'Diperbarui 8 Okt 2026',
		image: '/images/sch-card-3.jpg'
	},
	{
		id: 'lpdp',
		nama: 'Beasiswa LPDP',
		penyelenggara: 'Kementerian Keuangan Republik Indonesia',
		jenjang: 'S2, S3',
		negara: 'Dalam & Luar Negeri',
		pendanaan: 'Biaya pendidikan, biaya hidup, tunjangan penelitian',
		kategori: 'Pemerintah',
		cakupan: 'Dalam Negeri',
		jenisPendanaan: 'Fully Funded',
		status: 'Buka',
		deadline: '28 Februari 2027',
		sourceUrl: 'https://lpdp.kemenkeu.go.id',
		updatedAt: 'Diperbarui 5 Okt 2026',
		image: '/images/sch-card-4.jpg'
	}
];

export const scholarshipDisclaimer =
	'Informasi beasiswa yang tercantum dapat berubah sewaktu-waktu sesuai kebijakan masing-masing penyelenggara. Pastikan untuk selalu memverifikasi informasi terbaru melalui situs resmi penyelenggara beasiswa terkait.';
