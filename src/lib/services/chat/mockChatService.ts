// Layanan Mock Chatbot SDJNusantara
// Membaca langsung dari Basis Pengetahuan Tunggal (Knowledge Base) via knowledgeEngine

import type { IChatService, SendMessageOptions, ChatResponse } from './chatService';
import { answerFromKnowledge } from './knowledgeEngine';

export const mockChatService: IChatService = {
	async sendMessage(options: SendMessageOptions): Promise<ChatResponse> {
		// Delay simulasi pengetikan asisten 400 - 800 ms
		const delay = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
		await new Promise((resolve) => setTimeout(resolve, delay));

		// Delegasikan pemrosesan ke Knowledge Engine terpusat
		return answerFromKnowledge(options.text);
	}
};
