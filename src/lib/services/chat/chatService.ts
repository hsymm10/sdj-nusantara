// Antarmuka & Pemandu Layanan Chatbot SDJNusantara

export interface ChatMessageParam {
	id: string;
	role: 'bot' | 'user';
	text: string;
	time: string;
}

export interface SendMessageOptions {
	history: ChatMessageParam[];
	text: string;
	sessionId?: string;
}

export interface ChatResponse {
	replies: string[];
	suggestions?: string[];
}

export interface IChatService {
	sendMessage(options: SendMessageOptions): Promise<ChatResponse>;
}

// Konfigurasi Mode Layanan: 'mock' | 'api'
export const CHAT_MODE: string = 'mock';

import { mockChatService } from './mockChatService';
import { apiChatService } from './apiChatService';

export const activeChatService: IChatService = CHAT_MODE === 'api' ? apiChatService : mockChatService;
