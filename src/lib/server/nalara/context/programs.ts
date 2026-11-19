// src/lib/server/nalara/context/programs.ts
// Basis Pengetahuan Resmi: Program Pendidikan & Pelatihan SDJNusantara

import type { KnowledgeEntry } from '../types/knowledge.types';

export const programsKnowledge: KnowledgeEntry[] = [
	{
		id: 'program-talent-management',
		title: 'Konsultasi & Manajemen Talenta',
		category: 'programs',
		content:
			'Layanan pemetaan bakat dan minat terpadu untuk membantu pelajar dan profesional mengenali kelebihan diri serta merancang rencana pengembangan karier dan studi masa depan secara konkret.',
		details: [
			'Asesmen kepribadian, gaya belajar, dan kecocokan bidang keilmuan berbasis instrumen valid.',
			'Konsultasi 1-on-1 bersama konsultan talenta berpengalaman.',
			'Penyusunan Personalized Development Plan (PDP) yang aplikatif untuk target jangka pendek dan panjang.'
		],
		source: 'https://sdjnusantara.com/layanan/pendidikan',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['manajemen talenta', 'pemetaan bakat', 'tes minat bakat', 'konsultasi karier', 'perencanaan studi'],
		relevantUrls: ['/layanan/pendidikan']
	},
	{
		id: 'program-ai-digital-skills',
		title: 'AI & Digital Skills Academy',
		category: 'programs',
		content:
			'Program akselerasi kompetensi digital dan pemanfaatan Artificial Intelligence (AI) terapan untuk menunjang produktivitas akademik, riset, dan profesionalisme kerja modern.',
		details: [
			'Pelatihan prompt engineering dan integrasi AI generatif untuk riset dan produktivitas.',
			'Peningkatan kecakapan analisis data, komunikasi digital, dan literasi teknologi terkini.',
			'Kurikulum berbasis proyek riil (hands-on) yang relevan dengan standar industri masa kini.'
		],
		source: 'https://sdjnusantara.com/layanan/pendidikan',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['ai skills', 'digital academy', 'pelatihan ai', 'upskilling', 'teknologi'],
		relevantUrls: ['/layanan/pendidikan']
	},
	{
		id: 'program-corporate-campus-training',
		title: 'Corporate & Campus Training',
		category: 'programs',
		content:
			'Program in-house training dan lokakarya terarah untuk staf, dosen, guru, dan tim organisasi guna meningkatkan kepemimpinan, efektivitas kerja, serta sinergi tim.',
		details: [
			'Modul disesuaikan dengan tantangan spesifik institusi mitra (customized syllabus).',
			'Fokus pada kepemimpinan adaptif, komunikasi kerja produktif, dan manajemen inovasi.',
			'Didampingi fasilitator praktisi serta instrumen evaluasi dampak pelatihan.'
		],
		source: 'https://sdjnusantara.com/kemitraan',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['in house training', 'campus training', 'pelatihan korporasi', 'workshop guru', 'pelatihan dosen'],
		relevantUrls: ['/kemitraan', '/layanan']
	},
	{
		id: 'program-institutional-partnership',
		title: 'Layanan Perancangan Program & Kemitraan',
		category: 'programs',
		content:
			'Layanan konsultasi strategis dalam mendesain kurikulum, program pembinaan talenta berprestasi, dan pengelolaan program beasiswa institusional.',
		details: [
			'Desain silabus dan panduan operasional program pendidikan berkelanjutan.',
			'Perancangan kriteria seleksi dan modul pengayaan bagi awardee beasiswa institusi.',
			'Fasilitasi kerja sama lintas kampus, industri, dan lembaga donor nasional/internasional.'
		],
		source: 'https://sdjnusantara.com/kemitraan',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['perancangan program', 'desain kurikulum', 'kemitraan institusi', 'program beasiswa'],
		relevantUrls: ['/kemitraan']
	}
];
