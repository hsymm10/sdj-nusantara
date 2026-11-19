// src/lib/server/nalara/context/website.ts
// Basis Pengetahuan Resmi: Struktur Halaman & Navigasi Website SDJNusantara

import type { KnowledgeEntry } from '../types/knowledge.types';

export const websiteKnowledge: KnowledgeEntry[] = [
	{
		id: 'website-sitemap-routes',
		title: 'Peta Situs & Halaman Resmi SDJNusantara',
		category: 'website',
		content:
			'Website resmi SDJNusantara (https://sdjnusantara.com) memiliki struktur navigasi publik yang mencakup Beranda, Tentang Kami, Layanan, Kemitraan, Perspektif/Artikel, dan Kontak.',
		details: [
			'/ (Beranda): Ikhtisar profil, keunggulan, layanan unggulan, artikel terkini, dan CTA konsultasi.',
			'/tentang-kami: Visi, misi, nilai perusahaan, tim kepemimpinan, dan metodologi 5 tahap.',
			'/layanan: Hub layanan utama dengan dua tab navigasi: Layanan Individu dan Solusi Institusi.',
			'/layanan/pendidikan: Detail program pendidikan individu, manajemen talenta, dan konsultasi studi.',
			'/layanan/beasiswa: Detail panduan Scholarship Academy, kurasi beasiswa, dan alur pendampingan.',
			'/kemitraan: Informasi program kemitraan strategis, in-house training, dan konsorsium kelembagaan.',
			'/artikel: Artikel edukatif, tips beasiswa, perspektif pendidikan, dan panduan karier.',
			'/kontak: Formulir konsultasi resmi, nomor telepon, WhatsApp, dan peta lokasi kantor Jakarta.',
			'/kebijakan-privasi & /syarat-ketentuan: Dokumen perlindungan data pengguna dan ketentuan program.'
		],
		source: 'https://sdjnusantara.com',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['halaman', 'rute', 'link', 'website', 'navigasi', 'menu', 'sitemap'],
		relevantUrls: ['/', '/tentang-kami', '/layanan', '/kemitraan', '/artikel', '/kontak']
	}
];
