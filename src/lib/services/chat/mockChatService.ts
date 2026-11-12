// Layanan Mock Chatbot SDJNusantara
// Membaca langsung dari Indeks Website & Basis Pengetahuan Tunggal via chatEngine

import type { IChatService, SendMessageOptions, ChatResponse } from './chatService';
import { processUserQuery } from './chatEngine';

export const mockChatService: IChatService = {
	async sendMessage(options: SendMessageOptions): Promise<ChatResponse> {
		// Delay simulasi pengetikan asisten 300 - 600 ms
		const delay = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
		await new Promise((resolve) => setTimeout(resolve, delay));

		// Delegasikan pemrosesan ke Chat Engine terpusat berbasis data website
		return processUserQuery(options.text, options.lastTopicId);
	}
};
