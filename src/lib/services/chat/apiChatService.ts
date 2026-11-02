// Layanan Chatbot Produksi / Backend API (Kerangka Kerja)
// TODO: sambungkan ke endpoint backend (Laravel) — kirim sessionId, tangani error/timeout/rate limit

import type { IChatService, SendMessageOptions, ChatResponse } from './chatService';

export const apiChatService: IChatService = {
	async sendMessage(options: SendMessageOptions): Promise<ChatResponse> {
		// Placeholder integrasi backend mendatang
		// Endpoint Laravel target: /api/v1/chat/message
		try {
			const res = await fetch('/api/v1/chat/message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					message: options.text,
					sessionId: options.sessionId,
					history: options.history.slice(-10)
				})
			});

			if (!res.ok) {
				throw new Error(`HTTP error ${res.status}`);
			}

			const data = await res.json();
			return {
				replies: Array.isArray(data.replies) ? data.replies : [data.reply],
				suggestions: data.suggestions
			};
		} catch (error) {
			console.error('[ChatAPI] Gagal menghubungi server chat:', error);
			return {
				replies: [
					'Mohon maaf, layanan chatbot sementara tidak dapat terhubung ke server. Silakan hubungi tim kami via WhatsApp di https://wa.me/6285880724733 atau halaman /kontak.'
				]
			};
		}
	}
};
