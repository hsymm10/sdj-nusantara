// src/lib/server/nalara/config/ai.config.ts
// Konfigurasi Gemini API & Parameter Eksekusi NALARA AI Assistant

declare const process: {
	env: Record<string, string | undefined>;
};

export const aiConfig = {
	/** API Key Google Gemini (diambil dari process.env.GEMINI_API_KEY) */
	get apiKey(): string {
		return (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : '') || '';
	},

	/** Model Gemini yang digunakan (default: gemini-2.5-flash) */
	get model(): string {
		return (typeof process !== 'undefined' ? process.env?.GEMINI_MODEL : '') || 'gemini-2.5-flash';
	},

	/** Base URL REST API Google Gemini */
	baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',

	/** Parameter Generasi Jawaban AI */
	generation: {
		/** Suhu rendah untuk jawaban faktual, konsisten, dan minim halusinasi */
		temperature: 0.2,
		topP: 0.8,
		topK: 40,
		/** Batas token output ringkas dan langsung ke inti (±250-350 kata) */
		maxOutputTokens: 450
	},

	/** Timeout pemanggilan Gemini API dalam milidetik */
	timeoutMs: 12000,

	/** Konfigurasi Rate Limiter Server (In-Memory) */
	rateLimit: {
		/** Maksimal request per IP dalam satu jendela waktu */
		maxRequests: 15,
		/** Jendela waktu (1 menit = 60000ms) */
		windowMs: 60 * 1000
	},

	/** Batasan Input Pengguna */
	input: {
		minChars: 1,
		maxChars: 500,
		maxHistoryTurns: 4
	}
};
