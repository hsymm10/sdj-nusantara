// src/lib/server/nalara/guards/context-guard.ts
// AI Guardrails Sisi Server untuk NALARA SDJ Nusantara

import type { GuardrailResult } from '../types/nalara.types';

export const OUT_OF_CONTEXT_REPLY = `Maaf, saya NALARA, asisten virtual SDJ Nusantara yang berfokus pada informasi profil, layanan, program, dan beasiswa SDJ Nusantara.

Apakah ada hal seputar SDJ Nusantara yang ingin Anda tanyakan?`;

export const INFO_NOT_AVAILABLE_REPLY = `Maaf, informasi tersebut belum tersedia dalam basis pengetahuan saya. Silakan hubungi tim SDJ Nusantara untuk informasi lebih lanjut.`;

/** Pola prompt injection atau manipulasi instruksi sistem */
const INJECTION_PATTERNS = [
	/ignore\s+(all\s+)?(previous|prior)\s+instructions/i,
	/abaikan\s+(semua\s+)?instruksi/i,
	/system\s+prompt/i,
	/reveal\s+(the\s+)?prompt/i,
	/tampilkan\s+prompt/i,
	/api[_\s]?key/i,
	/act\s+as\s+dan/i,
	/developer\s+mode/i,
	/jailbreak/i,
	/pretend\s+you\s+are/i,
	/pura-pura\s+menjadi/i,
	/you\s+are\s+now\s+an\s+unfiltered/i
];

/** Pola pertanyaan umum yang jelas di luar ranah SDJ Nusantara */
const OUT_OF_BOUNDS_PATTERNS = [
	/resep|memasak|cara\s+masak|bumbu\s+dapur|kuliner/i,
	/cara\s+membuat\s+(kue|nasi|kopi|masakan|makanan|sayur|rendang|bakso)/i,
	/coding|javascript|python|php|html|css|sql|function|react|svelte|bug|error\s+code|program\s+c\+\+/i,
	/presiden\s+(amerika|prancis|rusia|cina|korea|jerman)|pemilu|perang\s+dunia/i,
	/ramalan\s+cuaca|prediksi\s+cuaca/i,
	/harga\s+bitcoin|crypto|ethereum|saham\s+ihsg|trading\s+forex/i,
	/cheat\s+game|mobile\s+legends|free\s+fire|pubg|roblox/i,
	/chord\s+gitar|lirik\s+lagu|sinopsis\s+film|nonton\s+film/i,
	/skor\s+sepak\s+bola|hasil\s+pertandingan|liga\s+inggris|liga\s+champions/i
];

/** Kata kunci / topik yang selalu diizinkan dan relevan dengan SDJ Nusantara */
const RELEVANT_TOPIC_KEYWORDS = [
	'sdj',
	'sdjnusantara',
	'nusantara',
	'nalara',
	'beasiswa',
	'scholarship',
	'pendidikan',
	'program',
	'layanan',
	'konsultasi',
	'bimbingan',
	'institusi',
	'mitra',
	'kemitraan',
	'talenta',
	'pelatihan',
	'kursus',
	'training',
	'kampus',
	'sekolah',
	'universitas',
	'lpdp',
	'aas',
	'chevening',
	'fulbright',
	'esai',
	'essay',
	'cv',
	'curriculum vitae',
	'wawancara',
	'interview',
	'biaya',
	'harga',
	'kantor',
	'alamat',
	'lokasi',
	'kontak',
	'whatsapp',
	'telepon',
	'email',
	'visi',
	'misi',
	'cara kerja',
	'siapa kamu',
	'kamu siapa',
	'halo',
	'hai',
	'pagi',
	'siang',
	'sore',
	'malam',
	'assalamualaikum',
	'bantuan',
	'tanya'
];

export const contextGuard = {
	/**
	 * Memvalidasi apakah pesan aman dan relevan dengan ranah SDJ Nusantara
	 */
	validate(message: string): GuardrailResult {
		const trimmed = message.trim();

		// 1. Validasi pesan kosong
		if (!trimmed) {
			return {
				isAllowed: false,
				reason: 'empty',
				customReply: 'Silakan ketik pertanyaan Anda seputar layanan atau program SDJ Nusantara.'
			};
		}

		// 2. Validasi panjang pesan maksimal 500 karakter
		if (trimmed.length > 500) {
			return {
				isAllowed: false,
				reason: 'too_long',
				customReply: 'Pesan terlalu panjang. Mohon sampaikan pertanyaan Anda secara lebih ringkas (maksimal 500 karakter).'
			};
		}

		// 3. Deteksi Prompt Injection / Jailbreak
		for (const pattern of INJECTION_PATTERNS) {
			if (pattern.test(trimmed)) {
				return {
					isAllowed: false,
					reason: 'jailbreak',
					customReply: OUT_OF_CONTEXT_REPLY
				};
			}
		}

		// 4. Deteksi Pertanyaan Jelas di Luar Konteks (resep, coding, dsb.)
		const lower = trimmed.toLowerCase();
		const hasRelevantKeyword = RELEVANT_TOPIC_KEYWORDS.some((kw) => lower.includes(kw));

		for (const pattern of OUT_OF_BOUNDS_PATTERNS) {
			if (pattern.test(trimmed) && !hasRelevantKeyword) {
				return {
					isAllowed: false,
					reason: 'out_of_context',
					customReply: OUT_OF_CONTEXT_REPLY
				};
			}
		}

		return { isAllowed: true };
	}
};
