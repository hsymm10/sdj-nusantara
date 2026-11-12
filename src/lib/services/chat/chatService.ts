// Antarmuka & Pemandu Layanan Chatbot SDJNusantara

export type BotMessageKind =
	| 'greeting'
	| 'topic_list'
	| 'answer'
	| 'page_overview'
	| 'summary'
	| 'did_you_mean'
	| 'fallback'
	| 'policy'
	| 'text';

export interface StructuredReply {
	kind: BotMessageKind;
	key?: string;
	params?: {
		topicId?: string;
		suggestions?: string[];
		candidateTopics?: string[];
		textFallback?: string;
	};
	text?: string;
}

export interface ChatMessageParam {
	id: string;
	role: 'bot' | 'user';
	text?: string;
	kind?: BotMessageKind;
	key?: string;
	time?: string;
	timestampMs?: number;
}

export interface SendMessageOptions {
	history: ChatMessageParam[];
	text: string;
	sessionId?: string;
	lastTopicId?: string | null;
}

export interface ChatResponse {
	replies: (string | StructuredReply)[];
	suggestions?: string[];
	lastTopicId?: string;
}

export interface IChatService {
	sendMessage(options: SendMessageOptions): Promise<ChatResponse>;
}

// Konfigurasi Mode Layanan: 'mock' | 'api'
export const CHAT_MODE: string = 'mock';

import { mockChatService } from './mockChatService';
import { apiChatService } from './apiChatService';

export const activeChatService: IChatService = CHAT_MODE === 'api' ? apiChatService : mockChatService;
