// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/index.js

import { umumKnowledge } from './umum.js';
import { pendidikanKnowledge, showDigitalEducation } from './pendidikan.js';
import { beasiswaKnowledge } from './beasiswa.js';
import { programKnowledge } from './program.js';
import { faqKnowledge } from './faq.js';
import { hukumKnowledge } from './hukum.js';
import { serviceConfig } from '../../config/services.ts';
import { FORBIDDEN_WORDS, CHATBOT_POLICIES, validateContentPolicy } from './policies.js';
import { SYNONYMS_MAP, expandSynonyms } from './synonyms.js';

/**
 * @typedef {Object} KnowledgeStepLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} KnowledgeEntry
 * @property {string} id
 * @property {'pendidikan'|'beasiswa'|'program'|'faq'|'umum'|'hukum'} kategori
 * @property {string} judul
 * @property {string[]} pertanyaan
 * @property {string[]} kataKunci
 * @property {string} ringkas
 * @property {string[]} detail
 * @property {string[]} cocokUntuk
 * @property {KnowledgeStepLink[]} langkahBerikut
 * @property {string[]} tindakLanjutChip
 * @property {'terverifikasi'|'perlu-verifikasi'} status
 * @property {string} sumber
 * @property {string} updatedAt
 */

/**
 * Basis Pengetahuan Tunggal SDJNusantara (Pendidikan & Beasiswa)
 * @type {KnowledgeEntry[]}
 */
export const knowledgeEntries = [
	...umumKnowledge,
	...pendidikanKnowledge,
	...beasiswaKnowledge,
	...programKnowledge,
	...faqKnowledge,
	...(serviceConfig.legal ? hukumKnowledge : [])
];

export const allKnowledge = knowledgeEntries;

/**
 * Ambil entri berdasarkan ID unik
 * @param {string} id
 * @returns {KnowledgeEntry | undefined}
 */
export function getKnowledgeById(id) {
	return knowledgeEntries.find((entry) => entry.id === id);
}

/**
 * Ambil daftar entri berdasarkan kategori
 * @param {'pendidikan'|'beasiswa'|'program'|'faq'|'umum'|'hukum'} kategori
 * @returns {KnowledgeEntry[]}
 */
export function getKnowledgeByCategory(kategori) {
	return knowledgeEntries.filter((entry) => entry.kategori === kategori);
}

export {
	umumKnowledge,
	pendidikanKnowledge,
	showDigitalEducation,
	beasiswaKnowledge,
	programKnowledge,
	faqKnowledge,
	hukumKnowledge,
	FORBIDDEN_WORDS,
	CHATBOT_POLICIES,
	validateContentPolicy,
	SYNONYMS_MAP,
	expandSynonyms
};
