// src/lib/services/chat/chatEngine.ts
// Mesin Pemrosesan Pertanyaan Terpusat Berbasis Data Website & Knowledge Base SDJNusantara

import { allKnowledge } from '#lib/data/knowledge/index.js';
import { serviceConfig } from '#lib/config/services';
import {
	websiteTopicIndex,
	getWebsiteTopicById,
	isSummaryIntent,
	isPageOverviewIntent,
	searchWebsiteIndex
} from '#lib/data/chatWebsiteIndex';
import {
	normalizeQuery,
	findBestKnowledgeEntry,
	enrichEnglishQueryPublic
} from './knowledgeEngine.js';
import type { ChatResponse, StructuredReply } from './chatService';

function mapKnowledgeToTopicId(kategori: string, entryId: string): string {
	if (kategori === 'beasiswa') return 'beasiswa';
	if (kategori === 'program' || kategori === 'pendidikan') return 'program-pendidikan';
	if (kategori === 'faq') return 'faq';
	if (entryId.includes('kemitraan') || entryId.includes('kerjasama')) return 'kemitraan';
	if (entryId.includes('kontak') || entryId.includes('konsultasi')) return 'kontak';
	if (entryId.includes('profil') || entryId.includes('tentang') || entryId.includes('pimpinan')) {
		return 'tentang-kami';
	}
	return 'layanan';
}

function detectSpecialPolicyKey(query: string): string | null {
	const q = normalizeQuery(query);

	// 1. Jaminan kelulusan beasiswa
	if (
		q.includes('pasti lulus') ||
		q.includes('pasti lolos') ||
		q.includes('jaminan lolos') ||
		q.includes('jaminan lulus') ||
		q.includes('bisa jamin') ||
		q.includes('jamin dapat beasiswa') ||
		q.includes('100 lulus') ||
		q.includes('100 persen') ||
		q.includes('pasti diterima') ||
		q.includes('guarantee') ||
		q.includes('guaranteed')
	) {
		return 'guarantee';
	}

	// 2. Nomor rekening / transfer pribadi
	if (
		q.includes('nomor rekening') ||
		q.includes('no rekening') ||
		q.includes('transfer ke mana') ||
		q.includes('bayar ke siapa') ||
		q.includes('rekening pribadi') ||
		q.includes('bank account') ||
		q.includes('payment account')
	) {
		return 'payment_account';
	}

	// 3. Layanan hukum (jika dinonaktifkan di serviceConfig)
	if (
		!serviceConfig.legal &&
		(q.includes('layanan hukum') ||
			q.includes('konsultasi hukum') ||
			q.includes('bantuan hukum') ||
			q.includes('advokat') ||
			q.includes('pengacara') ||
			q.includes('legal service'))
	) {
		return 'legal_unavailable';
	}

	return null;
}

export function processUserQuery(userQuery: string, lastTopicId?: string | null): ChatResponse {
	const trimmed = (userQuery || '').trim();

	// 0. Query kosong -> sapaan
	if (!trimmed) {
		const reply: StructuredReply = {
			kind: 'greeting',
			key: 'welcome'
		};
		return {
			replies: [reply],
			suggestions: ['program-pendidikan', 'beasiswa', 'layanan', 'kontak'],
			lastTopicId: lastTopicId ?? undefined
		};
	}

	// 1. Cek kebijakan khusus
	const policyKey = detectSpecialPolicyKey(trimmed);
	if (policyKey) {
		const suggestionsByPolicy: Record<string, string[]> = {
			guarantee: ['beasiswa', 'program-pendidikan', 'kontak'],
			payment_account: ['syarat-ketentuan', 'kontak', 'layanan'],
			legal_unavailable: ['layanan', 'program-pendidikan', 'beasiswa']
		};
		const reply: StructuredReply = {
			kind: 'policy',
			key: policyKey,
			params: {
				suggestions: suggestionsByPolicy[policyKey] || ['layanan', 'kontak']
			}
		};
		return {
			replies: [reply],
			suggestions: reply.params?.suggestions,
			lastTopicId: lastTopicId ?? undefined
		};
	}

	// 2. Deteksi intent ringkasan ("malas baca", "ringkas", "tl;dr", dsb.)
	if (isSummaryIntent(trimmed)) {
		const topicMatches = searchWebsiteIndex(trimmed);
		const matchedTopic = topicMatches.length > 0 && topicMatches[0].score >= 25 ? topicMatches[0].topic : null;
		const resolvedTopicId = matchedTopic ? matchedTopic.id : lastTopicId || null;

		if (resolvedTopicId) {
			const topic = getWebsiteTopicById(resolvedTopicId);
			if (topic) {
				const reply: StructuredReply = {
					kind: 'summary',
					key: topic.id,
					params: {
						topicId: topic.id,
						suggestions: topic.relatedTopics
					}
				};
				return {
					replies: [reply],
					suggestions: topic.relatedTopics,
					lastTopicId: topic.id
				};
			}
		}

		// Tidak ada topik yang disebutkan dan tidak ada konteks sebelumnya
		const candidates = ['tentang-kami', 'layanan', 'program-pendidikan', 'beasiswa', 'kemitraan', 'kontak'];
		const reply: StructuredReply = {
			kind: 'did_you_mean',
			key: 'choose_summary_topic',
			params: {
				candidateTopics: candidates
			}
		};
		return {
			replies: [reply],
			suggestions: candidates,
			lastTopicId: lastTopicId ?? undefined
		};
	}

	// 3. Deteksi intent lokasi halaman / isi halaman ("ada apa aja di...", "fitur layanan", dsb.)
	if (isPageOverviewIntent(trimmed)) {
		const topicMatches = searchWebsiteIndex(trimmed);
		const matchedTopic = topicMatches.length > 0 && topicMatches[0].score >= 20 ? topicMatches[0].topic : null;
		const resolvedTopicId = matchedTopic ? matchedTopic.id : lastTopicId || null;

		if (resolvedTopicId) {
			const topic = getWebsiteTopicById(resolvedTopicId);
			if (topic) {
				const reply: StructuredReply = {
					kind: 'page_overview',
					key: topic.id,
					params: {
						topicId: topic.id,
						suggestions: topic.relatedTopics
					}
				};
				return {
					replies: [reply],
					suggestions: topic.relatedTopics,
					lastTopicId: topic.id
				};
			}
		}

		const candidates = ['layanan', 'program-pendidikan', 'beasiswa', 'kemitraan', 'tentang-kami', 'kontak'];
		const reply: StructuredReply = {
			kind: 'did_you_mean',
			key: 'choose_page_topic',
			params: {
				candidateTopics: candidates
			}
		};
		return {
			replies: [reply],
			suggestions: candidates,
			lastTopicId: lastTopicId ?? undefined
		};
	}

	// 4. Pencarian pada Website Index & Knowledge Base
	const searchableQuery = enrichEnglishQueryPublic(trimmed);
	const kbResult = findBestKnowledgeEntry(searchableQuery);
	const indexResults = searchWebsiteIndex(trimmed);
	const topIndex = indexResults.length > 0 ? indexResults[0] : null;

	// Prioritas 4A: Kecocokan kuat di Website Index (>= 45) jika user bertanya topik umum/halaman (mis. "Kebijakan Privasi", "Pimpinan", "Syarat Ketentuan")
	if (topIndex && topIndex.score >= 45 && (!kbResult.entry || topIndex.score > kbResult.score)) {
		const topic = topIndex.topic;
		const reply: StructuredReply = {
			kind: 'answer',
			key: `topic:${topic.id}`,
			params: {
				topicId: topic.id,
				suggestions: topic.relatedTopics
			}
		};
		return {
			replies: [reply],
			suggestions: topic.relatedTopics,
			lastTopicId: topic.id
		};
	}

	// Prioritas 4B: Kecocokan di Knowledge Base (>= 15)
	if (kbResult.entry && kbResult.score >= 15) {
		const entry = kbResult.entry;
		const mappedTopicId = mapKnowledgeToTopicId(entry.kategori, entry.id);
		const topicObj = getWebsiteTopicById(mappedTopicId);
		const suggestions = topicObj ? topicObj.relatedTopics : ['layanan', 'beasiswa', 'kontak'];

		const reply: StructuredReply = {
			kind: 'answer',
			key: entry.id,
			params: {
				topicId: mappedTopicId,
				suggestions
			}
		};
		return {
			replies: [reply],
			suggestions,
			lastTopicId: mappedTopicId
		};
	}

	// Prioritas 4C: Kecocokan di Website Index (>= 25)
	if (topIndex && topIndex.score >= 25) {
		const topic = topIndex.topic;
		const reply: StructuredReply = {
			kind: 'answer',
			key: `topic:${topic.id}`,
			params: {
				topicId: topic.id,
				suggestions: topic.relatedTopics
			}
		};
		return {
			replies: [reply],
			suggestions: topic.relatedTopics,
			lastTopicId: topic.id
		};
	}

	// Prioritas 4D: Kecocokan sebagian (partial match >= 12) -> Tawarkan topik terdekat ("Apakah maksud Anda: ...?")
	if (topIndex && topIndex.score >= 12) {
		const candidateTopics = indexResults.slice(0, 3).map((r) => r.topic.id);
		const reply: StructuredReply = {
			kind: 'did_you_mean',
			key: 'partial_match',
			params: {
				candidateTopics
			}
		};
		return {
			replies: [reply],
			suggestions: candidateTopics,
			lastTopicId: lastTopicId ?? undefined
		};
	}

	// 5. Fallback hanya jika benar-benar tidak ada di data website
	const fallbackSuggestions = ['layanan', 'program-pendidikan', 'beasiswa', 'kontak'];
	const fallbackReply: StructuredReply = {
		kind: 'fallback',
		key: 'no_match',
		params: {
			suggestions: fallbackSuggestions
		}
	};

	return {
		replies: [fallbackReply],
		suggestions: fallbackSuggestions,
		lastTopicId: lastTopicId ?? undefined
	};
}
