// src/lib/server/nalara/services/context.service.ts
// Layanan Penyaringan Konteks & Pencocokan Pengetahuan Cepat untuk NALARA

import { getVerifiedKnowledge } from '../context';
import type { KnowledgeEntry } from '../types/knowledge.types';

export const contextService = {
	/**
	 * Memeriksa apakah ada entri pengetahuan yang cocok secara relevan dengan pertanyaan
	 */
	hasRelevantMatch(query: string): boolean {
		if (!query.trim()) return false;
		const verified = getVerifiedKnowledge();
		const lowerQuery = query.toLowerCase();
		const tokens = lowerQuery
			.replace(/[^\w\s]/g, ' ')
			.split(/\s+/)
			.filter((t) => t.length > 2);

		for (const entry of verified) {
			if (entry.title.toLowerCase().includes(lowerQuery)) return true;
			for (const tag of entry.tags) {
				if (lowerQuery.includes(tag.toLowerCase())) return true;
			}
			for (const token of tokens) {
				if (entry.title.toLowerCase().includes(token)) return true;
				for (const tag of entry.tags) {
					if (tag.toLowerCase().includes(token)) return true;
				}
			}
		}
		return false;
	},

	/**
	 * Mengambil entri pengetahuan terverifikasi yang paling relevan dengan pertanyaan pengguna.
	 * Menghindari pengiriman seluruh knowledge base ke LLM (Fast Response & Token Optimization).
	 */
	getRelevantContext(query: string, maxEntries = 4): KnowledgeEntry[] {
		const verified = getVerifiedKnowledge();
		if (!query.trim()) {
			return verified.slice(0, maxEntries);
		}

		const lowerQuery = query.toLowerCase();
		const tokens = lowerQuery
			.replace(/[^\w\s]/g, ' ')
			.split(/\s+/)
			.filter((t) => t.length > 2);

		// Pembobotan relevansi per entri
		const scored = verified.map((entry) => {
			let score = 0;

			// 1. Pencocokan judul (+5 poin)
			const lowerTitle = entry.title.toLowerCase();
			if (lowerTitle.includes(lowerQuery)) {
				score += 15;
			}
			for (const token of tokens) {
				if (lowerTitle.includes(token)) score += 5;
			}

			// 2. Pencocokan tag (+3 poin per tag)
			for (const tag of entry.tags) {
				const lowerTag = tag.toLowerCase();
				if (lowerQuery.includes(lowerTag)) {
					score += 8;
				}
				for (const token of tokens) {
					if (lowerTag.includes(token)) score += 3;
				}
			}

			// 3. Pencocokan konten & details (+1 poin)
			const lowerContent = entry.content.toLowerCase();
			for (const token of tokens) {
				if (lowerContent.includes(token)) score += 1;
				for (const d of entry.details) {
					if (d.toLowerCase().includes(token)) score += 1;
				}
			}

			return { entry, score };
		});

		// Urutkan dari skor tertinggi
		scored.sort((a, b) => b.score - a.score);

		// Jika ada skor > 0, ambil yang relevan saja
		const filtered = scored.filter((item) => item.score > 0).map((item) => item.entry);

		// Jika tidak ada kata kunci yang cocok sama sekali, sertakan profil & kategori layanan dasar
		if (filtered.length === 0) {
			const fallbackEntries = verified.filter(
				(e) => e.id === 'company-profile' || e.id === 'service-categories-overview'
			);
			return fallbackEntries.slice(0, maxEntries);
		}

		return filtered.slice(0, maxEntries);
	},

	/**
	 * Memformat entri pengetahuan menjadi blok teks ringkas untuk diinjeksikan ke System Prompt
	 */
	formatContextForPrompt(entries: KnowledgeEntry[]): string {
		if (entries.length === 0) return 'Tidak ada data spesifik.';

		return entries
			.map((entry, idx) => {
				const detailList = entry.details.map((d) => `  - ${d}`).join('\n');
				const urls = entry.relevantUrls ? ` (Rute terkait: ${entry.relevantUrls.join(', ')})` : '';
				return `[FAKTA ${idx + 1}: ${entry.title}]\nKategori: ${entry.category}\nRingkasan: ${entry.content}\nDetail:\n${detailList}${urls}`;
			})
			.join('\n\n');
	}
};
