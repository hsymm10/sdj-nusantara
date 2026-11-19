// src/routes/api/chat/+server.ts
// Server-Side Endpoint SvelteKit untuk NALARA AI Assistant

import { json, type RequestHandler } from '@sveltejs/kit';
import { aiConfig } from '#lib/server/nalara/config/ai.config';
import { contextGuard } from '#lib/server/nalara/guards/context-guard';
import { geminiService } from '#lib/server/nalara/services/gemini.service';
import type { ChatApiRequest, ChatMessageParam } from '#lib/server/nalara/types/nalara.types';

// In-Memory Rate Limiter Map: IP -> { count: number, resetTime: number }
interface RateLimitRecord {
	count: number;
	resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

// Bersihkan record kadaluarsa setiap 5 menit agar tidak terjadi memory leak
setInterval(() => {
	const now = Date.now();
	for (const [ip, record] of rateLimitMap.entries()) {
		if (now > record.resetTime) {
			rateLimitMap.delete(ip);
		}
	}
}, 5 * 60 * 1000);

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const record = rateLimitMap.get(ip);

	if (!record || now > record.resetTime) {
		rateLimitMap.set(ip, {
			count: 1,
			resetTime: now + aiConfig.rateLimit.windowMs
		});
		return true;
	}

	if (record.count >= aiConfig.rateLimit.maxRequests) {
		return false;
	}

	record.count++;
	return true;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	// 1. Dapatkan IP klien untuk rate limiting
	let clientIp = '127.0.0.1';
	try {
		clientIp = getClientAddress() || request.headers.get('x-forwarded-for') || '127.0.0.1';
	} catch {
		clientIp = request.headers.get('x-forwarded-for') || '127.0.0.1';
	}

	// 2. Evaluasi Rate Limiter Server
	if (!checkRateLimit(clientIp)) {
		return json(
			{
				error: 'rate_limit_exceeded',
				reply: 'Anda telah mengirim terlalu banyak pesan dalam waktu singkat. Mohon tunggu 1 menit sebelum mengirim pertanyaan kembali.',
				source: 'guardrail'
			},
			{ status: 429 }
		);
	}

	// 3. Validasi JSON & Payload
	let body: ChatApiRequest;
	try {
		body = await request.json();
	} catch {
		return json(
			{
				error: 'invalid_json',
				reply: 'Format permintaan tidak valid.'
			},
			{ status: 400 }
		);
	}

	const rawMessage = typeof body.message === 'string' ? body.message : '';
	const trimmedMessage = rawMessage.trim();

	// 4. Validasi Guardrails Sisi Server (Panjang, Kosong, Jailbreak, & Out-of-bounds)
	const guardResult = contextGuard.validate(trimmedMessage);
	if (!guardResult.isAllowed) {
		return json({
			reply: guardResult.customReply,
			source: 'guardrail'
		});
	}

	// 5. Validasi Riwayat Percakapan
	const history: ChatMessageParam[] = Array.isArray(body.history)
		? (body.history as Array<{ role?: unknown; text?: unknown }>)
				.filter((h) => h && typeof h.text === 'string' && h.text.trim().length > 0)
				.map((h) => ({
					role: (h.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
					text: (h.text as string).slice(0, 500)
				}))
		: [];

	// 6. Eksekusi Jawaban NALARA via Gemini Service
	try {
		const result = await geminiService.generateReply(trimmedMessage, history);
		return json(result);
	} catch (err: any) {
		console.error('[API /api/chat Server Error]:', err);
		return json(
			{
				reply: 'Mohon maaf, terjadi kesalahan pada server saat memproses jawaban. Silakan hubungi tim kami via WhatsApp di +62 858-8072-4733.',
				source: 'fallback'
			},
			{ status: 500 }
		);
	}
};
