// src/lib/server/nalara/services/gemini.service.ts
// Layanan Integrasi Google Gemini API Sisi Server untuk NALARA

import { aiConfig } from '../config/ai.config';
import { buildSystemPrompt } from '../prompts/system-prompt';
import { contextService } from './context.service';
import { OUT_OF_CONTEXT_REPLY } from '../guards/context-guard';
import type { ChatMessageParam, ChatApiResponse } from '../types/nalara.types';

export const geminiService = {
	/**
	 * Menghasilkan jawaban AI menggunakan Google Gemini REST API
	 */
	async generateReply(
		userMessage: string,
		history: ChatMessageParam[] = []
	): Promise<ChatApiResponse> {
		const apiKey = aiConfig.apiKey;
		const model = aiConfig.model;

		// 1. Ambil konteks terverifikasi yang relevan
		const relevantEntries = contextService.getRelevantContext(userMessage);
		const contextText = contextService.formatContextForPrompt(relevantEntries);
		const systemPrompt = buildSystemPrompt(contextText);
		const contextIds = relevantEntries.map((e) => e.id);

		// 2. Tangani bila GEMINI_API_KEY belum dikonfigurasi di .env
		if (!apiKey) {
			console.warn('[NALARA] GEMINI_API_KEY belum dikonfigurasi di file .env server.');

			const hasMatch = contextService.hasRelevantMatch(userMessage);
			if (!hasMatch) {
				return {
					reply: OUT_OF_CONTEXT_REPLY,
					suggestions: ['Apa itu SDJ Nusantara?', 'Apa saja layanan yang tersedia?'],
					source: 'guardrail',
					contextIds: []
				};
			}

			// Fallback cerdas berbasis knowledge base lokal terverifikasi
			const primaryEntry = relevantEntries[0];
			const fallbackReply = primaryEntry
				? `${primaryEntry.content}\n\n• ${primaryEntry.details.join('\n• ')}\n\n(Informasi lebih lanjut dapat Anda pelajari di ${primaryEntry.source})`
				: OUT_OF_CONTEXT_REPLY;

			return {
				reply: fallbackReply,
				suggestions: ['Apa saja layanan yang tersedia?', 'Bagaimana cara mendapatkan beasiswa?'],
				source: 'fallback',
				contextIds
			};
		}

		// 3. Bangun payload riwayat percakapan (maksimal 4 turn terakhir)
		const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

		const recentHistory = history.slice(-aiConfig.input.maxHistoryTurns);
		for (const turn of recentHistory) {
			const role = turn.role === 'user' ? 'user' : 'model';
			if (turn.text && turn.text.trim()) {
				contents.push({
					role,
					parts: [{ text: turn.text.trim() }]
				});
			}
		}

		// Masukkan pesan terbaru pengguna
		contents.push({
			role: 'user',
			parts: [{ text: userMessage.trim() }]
		});

		const endpointUrl = `${aiConfig.baseUrl}/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;

		const requestBody = {
			systemInstruction: {
				parts: [{ text: systemPrompt }]
			},
			contents,
			generationConfig: {
				temperature: aiConfig.generation.temperature,
				topP: aiConfig.generation.topP,
				topK: aiConfig.generation.topK,
				maxOutputTokens: aiConfig.generation.maxOutputTokens
			}
		};

		try {
			const response = await fetch(endpointUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody),
				signal: AbortSignal.timeout(aiConfig.timeoutMs)
			});

			if (!response.ok) {
				const errText = await response.text();
				console.error(`[NALARA Gemini Error ${response.status}]:`, errText);

				if (response.status === 429) {
					return {
						reply: 'Mohon maaf, sistem AI sedang mengalami lonjakan antrean pertanyaan. Mohon tunggu beberapa saat lalu coba kirimkan kembali pertanyaan Anda.',
						source: 'fallback'
					};
				}

				if (response.status === 400 || response.status === 403 || response.status === 404) {
					return {
						reply: 'Mohon maaf, konfigurasi model AI saat ini sedang diperbarui oleh administrator. Anda dapat langsung berkonsultasi via WhatsApp di +62 858-8072-4733.',
						source: 'fallback'
					};
				}

				throw new Error(`Gemini API HTTP ${response.status}`);
			}

			const data = await response.json();
			const textResponse =
				data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
				'Mohon maaf, saya belum dapat menghasilkan jawaban yang sesuai. Silakan ulangi pertanyaan Anda.';

			// Saran pertanyaan lanjutan yang relevan
			const suggestions: string[] = [];
			if (lowerIncludesAny(userMessage, ['beasiswa', 'lpdp', 'aas', 'kuliah'])) {
				suggestions.push('Bagaimana alur pendampingan beasiswa?', 'Apa saja skema beasiswa yang didampingi?');
			} else if (lowerIncludesAny(userMessage, ['institusi', 'perusahaan', 'kampus', 'sekolah'])) {
				suggestions.push('Apa saja program Solusi Institusi?', 'Bagaimana cara menjalin kemitraan?');
			} else {
				suggestions.push('Apa saja layanan yang tersedia?', 'Bagaimana cara berkonsultasi?');
			}

			return {
				reply: textResponse,
				suggestions,
				source: 'gemini',
				contextIds
			};
		} catch (error: any) {
			console.error('[NALARA Gemini Exception]:', error?.message || error);
			const isTimeout = error?.name === 'TimeoutError' || error?.message?.includes('timeout');

			return {
				reply: isTimeout
					? 'Mohon maaf, pemrosesan jawaban membutuhkan waktu lebih lama dari biasanya. Silakan coba kembali pertanyaan Anda atau hubungi kami langsung di /kontak.'
					: 'Mohon maaf, terjadi kendala teknis saat menghubungkan ke server AI. Silakan hubungi tim SDJ Nusantara via WhatsApp di +62 858-8072-4733.',
				source: 'fallback'
			};
		}
	}
};

function lowerIncludesAny(text: string, keywords: string[]): boolean {
	const lower = text.toLowerCase();
	return keywords.some((kw) => lower.includes(kw));
}
