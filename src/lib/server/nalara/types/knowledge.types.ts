// src/lib/server/nalara/types/knowledge.types.ts
// Arsitektur Tipe Basis Pengetahuan NALARA SDJNusantara

export type VerificationStatus = 'verified' | 'draft' | 'archived';

export type KnowledgeCategory =
	| 'company'
	| 'services'
	| 'programs'
	| 'scholarships'
	| 'faq'
	| 'website';

export interface KnowledgeEntry {
	/** ID unik untuk entri pengetahuan (misal: "company-profile", "scholarship-lpdp") */
	id: string;
	/** Judul ringkas entri pengetahuan */
	title: string;
	/** Kategori utama informasi */
	category: KnowledgeCategory;
	/** Ringkasan fakta utama yang padat dan jelas */
	content: string;
	/** Poin-poin spesifik atau cakupan informasi */
	details: string[];
	/** Tautan rute atau sumber resmi website SDJNusantara */
	source: string;
	/** Status verifikasi: hanya 'verified' yang dijadikan fakta oleh AI */
	verificationStatus: VerificationStatus;
	/** Tanggal pembaruan terakhir (ISO YYYY-MM-DD) */
	updatedAt: string;
	/** Tag/kata kunci pencarian untuk pencocokan relevansi cepat */
	tags: string[];
	/** Tautan rute internal yang relevan untuk direkomendasikan */
	relevantUrls?: string[];
}
