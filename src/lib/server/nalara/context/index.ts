// src/lib/server/nalara/context/index.ts
// Pusat Ekspor & Helper Basis Pengetahuan NALARA SDJ Nusantara

import type { KnowledgeEntry, KnowledgeCategory } from '../types/knowledge.types';
import { companyKnowledge } from './company';
import { servicesKnowledge } from './services';
import { programsKnowledge } from './programs';
import { scholarshipsKnowledge } from './scholarships';
import { faqKnowledge } from './faq';
import { websiteKnowledge } from './website';

export const allNalaraKnowledge: KnowledgeEntry[] = [
	...companyKnowledge,
	...servicesKnowledge,
	...programsKnowledge,
	...scholarshipsKnowledge,
	...faqKnowledge,
	...websiteKnowledge
];

/**
 * Mengambil semua entri yang berstatus 'verified'.
 * HANYA entri verified yang boleh dijadikan fakta dalam jawaban NALARA.
 */
export function getVerifiedKnowledge(): KnowledgeEntry[] {
	return allNalaraKnowledge.filter((item) => item.verificationStatus === 'verified');
}

/**
 * Mengambil entri pengetahuan berdasarkan ID spesifik
 */
export function getKnowledgeById(id: string): KnowledgeEntry | undefined {
	return allNalaraKnowledge.find((item) => item.id === id);
}

/**
 * Mengambil entri pengetahuan berdasarkan kategori tertentu
 */
export function getKnowledgeByCategory(category: KnowledgeCategory): KnowledgeEntry[] {
	return allNalaraKnowledge.filter((item) => item.category === category);
}

export {
	companyKnowledge,
	servicesKnowledge,
	programsKnowledge,
	scholarshipsKnowledge,
	faqKnowledge,
	websiteKnowledge
};

