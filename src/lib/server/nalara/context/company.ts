// src/lib/server/nalara/context/company.ts
// Basis Pengetahuan Resmi: Profil & Identitas Perusahaan SDJNusantara

import type { KnowledgeEntry } from '../types/knowledge.types';

export const companyKnowledge: KnowledgeEntry[] = [
	{
		id: 'company-profile',
		title: 'Profil Resmi SDJNusantara',
		category: 'company',
		content:
			'SDJNusantara (PT SDJ Nusantara) adalah konsultan pendidikan dan pengembangan talenta dengan tagline "Your Strategic Partner". SDJNusantara berfokus mendampingi pelajar, mahasiswa, profesional, serta institusi dalam merencanakan masa depan pendidikan dan karier yang terarah.',
		details: [
			'Lembaga konsultasi resmi di bidang pendidikan, kurasi beasiswa, dan pengembangan kapasitas sumber daya manusia.',
			'Menghubungkan individu dan lembaga dengan peluang beasiswa serta ekosistem pendidikan tinggi nasional dan global.',
			'Berfokus pada pendekatan terstruktur, transparan, terukur, dan berorientasi pada kebutuhan nyata mitra.'
		],
		source: 'https://sdjnusantara.com/tentang-kami',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['sdjnusantara', 'profil', 'tentang kami', 'konsultan pendidikan', 'identitas', 'perusahaan'],
		relevantUrls: ['/tentang-kami', '/layanan']
	},
	{
		id: 'company-vision-mission',
		title: 'Visi dan Misi SDJNusantara',
		category: 'company',
		content:
			'Visi SDJNusantara adalah menjadi mitra strategis terdepan dalam membangun ekosistem pendidikan dan pengembangan talenta yang inklusif, adaptif, dan berdaya saing global.',
		details: [
			'Misi 1: Memberikan pendampingan pendidikan dan beasiswa yang terarah, transparan, dan terukur bagi generasi muda Indonesia.',
			'Misi 2: Mengembangkan kurikulum pelatihan aplikatif guna meningkatkan kapabilitas digital dan kepemimpinan SDM.',
			'Misi 3: Membangun kemitraan strategis yang berkelanjutan antara institusi pendidikan, industri, dan lembaga donor.'
		],
		source: 'https://sdjnusantara.com/tentang-kami',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['visi', 'misi', 'tujuan', 'arah', 'komitmen', 'tentang kami'],
		relevantUrls: ['/tentang-kami']
	},
	{
		id: 'company-contact-location',
		title: 'Alamat Kantor & Kontak Resmi SDJNusantara',
		category: 'company',
		content:
			'Kantor resmi SDJNusantara berlokasi di Gedung Graha Aktiva Lt. GF (Suite B3A), Jl. H. R. Rasuna Said No. 6, Kuningan Timur, Setiabudi, Jakarta Selatan 12950.',
		details: [
			'Nomor Telepon / WhatsApp: +62 858-8072-4733',
			'Email Resmi: info@sdjnusantara.com',
			'Hari & Jam Operasional Konsultasi: Senin - Jumat, 09.00 - 17.00 WIB',
			'Media Sosial Resmi: Instagram @sdjnusantara, TikTok @sdjnusantara'
		],
		source: 'https://sdjnusantara.com/kontak',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['kontak', 'alamat', 'lokasi', 'kantor', 'whatsapp', 'email', 'telepon', 'jam kerja'],
		relevantUrls: ['/kontak']
	},
	{
		id: 'company-legal-payment-policy',
		title: 'Kebijakan Pembayaran & Rekening Resmi',
		category: 'company',
		content:
			'Seluruh transaksi dan pembayaran program SDJNusantara hanya diterbitkan melalui invoice resmi dan rekening bank institusi atas nama perusahaan (PT SDJ Nusantara), bukan rekening pribadi.',
		details: [
			'SDJNusantara tidak pernah meminta transfer dana ke rekening pribadi atas nama perorangan atau staf.',
			'Konfirmasi pembayaran resmi dapat diverifikasi langsung melalui WhatsApp +62 858-8072-4733 atau email info@sdjnusantara.com.',
			'Kebijakan privasi dan syarat ketentuan program diatur secara transparan pada dokumen hukum resmi website.'
		],
		source: 'https://sdjnusantara.com/syarat-ketentuan',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['pembayaran', 'invoice', 'rekening', 'transaksi', 'biaya', 'keamanan', 'legal'],
		relevantUrls: ['/syarat-ketentuan', '/kebijakan-privasi']
	}
];

