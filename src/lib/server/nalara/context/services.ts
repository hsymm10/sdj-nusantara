// src/lib/server/nalara/context/services.ts
// Basis Pengetahuan Resmi: Layanan Utama SDJ Nusantara

import type { KnowledgeEntry } from '../types/knowledge.types';

export const servicesKnowledge: KnowledgeEntry[] = [
	{
		id: 'service-categories-overview',
		title: 'Kategori Layanan Utama SDJ Nusantara',
		category: 'services',
		content:
			'SDJ Nusantara menyediakan dua kategori layanan utama: (1) Layanan Individu dan (2) Solusi Institusi, yang dirancang untuk menjawab kebutuhan pelajar, profesional, maupun organisasi.',
		details: [
			'Layanan Individu: mencakup Program Pendidikan (pemetaan talenta & konsultasi studi) dan Program Beasiswa (pendampingan seleksi & kurasi beasiswa).',
			'Solusi Institusi: mencakup Pengembangan Kompetensi, Pelatihan Organisasi, Perancangan Program, dan Kemitraan Strategis.',
			'Seluruh layanan didampingi oleh mentor, akademisi, dan konsultan berpengalaman di bidangnya.'
		],
		source: 'https://sdjnusantara.com/layanan',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['layanan', 'kategori layanan', 'layanan individu', 'solusi institusi', 'portofolio'],
		relevantUrls: ['/layanan', '/layanan/pendidikan', '/layanan/beasiswa']
	},
	{
		id: 'service-individu-overview',
		title: 'Layanan Individu: Pendidikan & Beasiswa',
		category: 'services',
		content:
			'Layanan Individu SDJ Nusantara mendampingi calon penerima beasiswa dan pelajar dalam mengenali potensi diri, merancang studi lanjut, serta mempersiapkan aplikasi beasiswa secara matang.',
		details: [
			'Program Pendidikan: Pemetaan bakat dan minat, konsultasi karier & studi masa depan, serta penguatan kompetensi digital/AI.',
			'Program Beasiswa: Akses basis data beasiswa terkurasi, pendampingan berkas (CV & essay), serta simulasi wawancara beasiswa.',
			'Fasilitas: Sesi bimbingan 1-on-1, review dokumen intensif, dan panduan langkah demi langkah.'
		],
		source: 'https://sdjnusantara.com/layanan?tab=individu',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['layanan individu', 'individu', 'pelajar', 'mahasiswa', 'persiapan studi', 'bimbingan beasiswa'],
		relevantUrls: ['/layanan?tab=individu', '/layanan/pendidikan', '/layanan/beasiswa']
	},
	{
		id: 'service-institusi-overview',
		title: 'Solusi Institusi: Kolaborasi & Peningkatan Kapasitas',
		category: 'services',
		content:
			'Solusi Institusi SDJ Nusantara dirancang khusus untuk sekolah, perguruan tinggi, yayasan, korporasi, dan lembaga pemerintah guna memperkuat kapasitas SDM dan efektivitas kelembagaan.',
		details: [
			'Pengembangan Kompetensi: Asesmen kebutuhan, pemetaan kompetensi, dan pelatihan upskilling kapabilitas digital & AI.',
			'Pelatihan Organisasi: In-house training kepemimpinan, manajemen kolaborasi, dan penguatan budaya kerja adaptif.',
			'Perancangan Program: Konsultasi kurikulum adaptif, silabus terarah, dan rancang bangun program beasiswa kelembagaan.',
			'Kemitraan Strategis: Konsorsium pendidikan, sosialisasi beasiswa massal, dan fasilitasi kolaborasi kampus-industri.'
		],
		source: 'https://sdjnusantara.com/layanan?tab=institusi',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['solusi institusi', 'institusi', 'korporasi', 'kampus', 'sekolah', 'kemitraan', 'pelatihan sdm'],
		relevantUrls: ['/layanan?tab=institusi', '/kemitraan']
	},
	{
		id: 'service-5-step-methodology',
		title: '5 Tahap Metodologi Pendampingan SDJ Nusantara',
		category: 'services',
		content:
			'SDJ Nusantara menerapkan 5 tahapan kerja sistematis agar pendampingan terarah dan terukur: (1) Kenali, (2) Petakan, (3) Rancang, (4) Dampingi, dan (5) Evaluasi.',
		details: [
			'1. Kenali: Memahami latar belakang, aspirasi, kekuatan, serta tantangan awal peserta atau institusi.',
			'2. Petakan: Menganalisis gap kompetensi, profil akademik, dan peluang beasiswa/karier yang selaras.',
			'3. Rancang: Menyusun rencana aksi, target waktu (timeline), serta kurikulum/strategi yang spesifik.',
			'4. Dampingi: Bimbingan intensif penyusunan berkas, lokakarya aplikatif, serta simulasi bertahap.',
			'5. Evaluasi: Pengukuran capaian, review berkala, dan perbaikan berkelanjutan.'
		],
		source: 'https://sdjnusantara.com/tentang-kami',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['metodologi', 'cara kerja', 'tahapan', 'kenali', 'petakan', 'rancang', 'dampingi', 'evaluasi'],
		relevantUrls: ['/tentang-kami']
	}
];

