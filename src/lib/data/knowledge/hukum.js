// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/hukum.js

/** @typedef {import('./index.js').KnowledgeEntry} KnowledgeEntry */

/** @type {KnowledgeEntry[]} */
export const hukumKnowledge = [
	{
		id: 'hukum-placeholder',
		kategori: 'hukum',
		judul: 'Layanan Hukum dan Konsultasi Regulasi',
		pertanyaan: [
			'apakah ada layanan hukum',
			'konsultasi hukum pendidikan',
			'bantuan hukum kampus dan sekolah',
			'telaah mou dan kontrak institusi',
			'layanan kepatuhan regulasi'
		],
		kataKunci: ['hukum', 'regulasi', 'mou', 'kontrak', 'kebijakan kampus', 'konsultasi hukum'],
		ringkas:
			'Layanan hukum dan pendampingan regulasi saat ini sedang dalam tahap persiapan resmi oleh tim SDJNusantara.',
		detail: [
			'Informasi mengenai ruang lingkup, izin praktik, dan identitas penanggung jawab hukum sedang diverifikasi.',
			'Untuk kebutuhan konsultasi dan koordinasi terkait regulasi pendidikan, Anda dapat menghubungi perwakilan tim kami secara langsung.',
			'Informasi pada situs web bersifat umum dan bukan merupakan nasihat hukum formal.'
		],
		cocokUntuk: [
			'Pimpinan institusi pendidikan, yayasan, dan organisasi mitra'
		],
		langkahBerikut: [
			{ label: 'Kunjungi Halaman Layanan Hukum', href: '/layanan/hukum' },
			{ label: 'Hubungi Tim Representatif', href: '/kontak' }
		],
		tindakLanjutChip: ['Konsultasi', 'Topik Lainnya'],
		status: 'perlu-verifikasi',
		sumber: 'placeholder kepatuhan hukum',
		updatedAt: '2026-11-05'
	}
];
