// src/lib/services/chat/apiChatService.ts
// Layanan Chatbot Produksi yang Menghubungkan ke Endpoint /api/chat NALARA

import type { IChatService, SendMessageOptions, ChatResponse } from './chatService';

export const apiChatService: IChatService = {
	async sendMessage(options: SendMessageOptions): Promise<ChatResponse> {
		try {
			// Saring riwayat obrolan: kirim teks pesan pengguna dan bot
			const filteredHistory = options.history
				.filter((msg) => msg && typeof msg.text === 'string' && msg.text.trim())
				.map((msg) => ({
					role: msg.role === 'user' ? 'user' : 'assistant',
					text: msg.text || ''
				}))
				.slice(-6);

			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					message: options.text,
					history: filteredHistory,
					sessionId: options.sessionId
				})
			});

			if (!res.ok) {
				const errorData = await res.json().catch(() => ({}));
				if (res.status === 429) {
					return {
						replies: [
							errorData.reply ||
								'Anda telah mengirim terlalu banyak pesan dalam waktu singkat. Mohon tunggu 1 menit sebelum mengirim pertanyaan kembali.'
						]
					};
				}
				throw new Error(`HTTP error ${res.status}`);
			}

			const data = await res.json();
			const replyText = typeof data.reply === 'string' ? data.reply : '';

			return {
				replies: [replyText],
				suggestions: Array.isArray(data.suggestions) ? data.suggestions : []
			};
		} catch (error) {
			console.error('[NALARA Client API Error]:', error);
			return {
				replies: [
					'Mohon maaf, layanan asisten NALARA sementara tidak dapat terhubung ke server. Silakan hubungi tim kami via WhatsApp di https://wa.me/6285880724733 atau halaman /kontak.'
				]
			};
		}
	}
};
