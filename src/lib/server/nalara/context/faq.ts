// src/lib/server/nalara/context/faq.ts
// Basis Pengetahuan Resmi: FAQ (Pertanyaan yang Sering Diajukan)

import type { KnowledgeEntry } from '../types/knowledge.types';

export const faqKnowledge: KnowledgeEntry[] = [
	{
		id: 'faq-consultation-process',
		title: 'Bagaimana Cara Memulai Konsultasi di SDJNusantara?',
		category: 'faq',
		content:
			'Konsultasi dapat dimulai dengan mengajukan formulir di halaman /kontak atau mengirim pesan langsung ke WhatsApp resmi SDJNusantara di +62 858-8072-4733.',
		details: [
			'Langkah 1: Hubungi tim kami via WhatsApp atau form kontak di website.',
			'Langkah 2: Sampaikan profil singkat, jenjang studi, atau kebutuhan institusi Anda.',
			'Langkah 3: Tim konsultan SDJNusantara akan menjadwalkan sesi konsultasi awal.',
			'Langkah 4: Anda akan mendapatkan rekomendasi program atau rencana aksi yang sesuai.'
		],
		source: 'https://sdjnusantara.com/kontak',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['cara konsultasi', 'mulai bimbingan', 'daftar program', 'alur konsultasi', 'tanya konsultan'],
		relevantUrls: ['/kontak']
	},
	{
		id: 'faq-program-cost',
		title: 'Berapa Biaya Program dan Layanan di SDJNusantara?',
		category: 'faq',
		content:
			'Biaya program pendampingan di SDJNusantara bersifat transparan dan disesuaikan dengan paket layanan yang dipilih (bimbingan individu, kurasi esai, mock interview, atau in-house training institusi).',
		details: [
			'Konsultasi awal untuk mengetahui kebutuhan program dapat dilakukan secara gratis melalui WhatsApp resmi.',
			'Rincian biaya paket pendampingan resmi akan disampaikan secara tertulis bersama silabus dan ruang lingkup program.',
			'Pembayaran hanya dilakukan via invoice resmi atas nama PT SDJ Nusantara.'
		],
		source: 'https://sdjnusantara.com/kontak',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['biaya', 'harga', 'tarif', 'paket', 'biaya pendampingan', 'gratis'],
		relevantUrls: ['/kontak']
	},
	{
		id: 'faq-target-participants',
		title: 'Siapa Saja yang Bisa Mengikuti Program SDJNusantara?',
		category: 'faq',
		content:
			'Program SDJNusantara terbuka untuk berbagai kalangan: pelajar SMA/SMK, mahasiswa aktif, fresh graduate, pencari beasiswa S1/S2/S3, profesional, hingga institusi pendidikan dan perusahaan.',
		details: [
			'Pelajar & Mahasiswa: Perencanaan studi lanjut dan persiapan aplikasi beasiswa.',
			'Pencari Beasiswa: Pendampingan intensif CV, motivation letter, dan wawancara.',
			'Profesional: Peningkatan kapasitas digital/AI dan manajemen karier.',
			'Sekolah, Kampus & Perusahaan: Lokakarya kepemimpinan, upskilling staf, dan kurikulum khusus.'
		],
		source: 'https://sdjnusantara.com/tentang-kami',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['target peserta', 'siapa saja', 'syarat peserta', 'kalangan', 'mahasiswa', 'profesional'],
		relevantUrls: ['/tentang-kami', '/layanan']
	},
	{
		id: 'faq-online-offline',
		title: 'Apakah Pendampingan Dilakukan Secara Online atau Offline?',
		category: 'faq',
		content:
			'Layanan pendampingan SDJNusantara diselenggarakan secara fleksibel: (1) Online melalui platform video conference untuk peserta dari seluruh Indonesia & luar negeri, dan (2) Offline/In-house untuk kemitraan institusi.',
		details: [
			'Bimbingan online 1-on-1 memudahkan peserta dari berbagai kota berkonsultasi secara fleksibel.',
			'Untuk institusi mitra (kampus/sekolah/perusahaan), pelatihan dapat dilaksanakan langsung di lokasi mitra (in-house) atau di kantor SDJNusantara Jakarta.'
		],
		source: 'https://sdjnusantara.com/tentang-kami',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['online', 'offline', 'lokasi bimbingan', 'tatap muka', 'zoom'],
		relevantUrls: ['/kontak']
	}
];

