// Store State Chatbot SDJNusantara (Svelte 5 Runes)
// Mengelola percakapan dwibahasa, riwayat terstruktur, unread counter, dan status jendela

import { chatConfig } from '#lib/config/chat';
import { activeChatService, type StructuredReply } from '#lib/services/chat/chatService';

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

export interface ChatMessage {
	id: string;
	role: 'bot' | 'user';
	text?: string; // Teks asli untuk user (tidak pernah diterjemahkan/diubah) atau teks fallback
	kind?: BotMessageKind; // Jenis pesan bot untuk resolusi bahasa dinamis (ID <-> EN)
	key?: string; // ID topik, ID knowledge base, atau policy key
	params?: Record<string, any>; // Parameter dinamis (candidateTopics, suggestions, dsb.)
	time?: string; // Legacy time string (opsional)
	timestampMs: number; // Timestamp milidetik untuk formatting waktu dinamis per locale
	read: boolean;
}

export function formatCurrentTime(): string {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	return `${hours}:${minutes}`;
}

class ChatStore {
	messages = $state<ChatMessage[]>([]);
	isOpen = $state(false);
	isTyping = $state(false);
	unreadCount = $state(0);
	tooltipDismissed = $state(false);
	showQuickReplies = $state(true);
	hasNewMessageBelow = $state(false);
	lastTopicId = $state<string | null>(null);

	private lastSentTimestamp = 0;
	private initialized = false;

	constructor() {
		if (typeof window !== 'undefined') {
			this.init();
		}
	}

	init() {
		if (this.initialized) return;
		this.initialized = true;

		// 1. Pulihkan Tooltip Status
		try {
			const tt = sessionStorage.getItem('sdj_chat_tooltip_dismissed');
			if (tt === 'true') {
				this.tooltipDismissed = true;
			}
		} catch (e) {
			console.warn('[ChatStore] sessionStorage not available', e);
		}

		// 2. Pulihkan Riwayat Pesan dengan migrasi aman ke format terstruktur (v2)
		try {
			const raw = sessionStorage.getItem(chatConfig.storageKey);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed.messages) && parsed.messages.length > 0) {
					// Migrasi aman bila masih format lama (v1)
					const now = Date.now();
					this.messages = parsed.messages.map((m: any, idx: number) => {
						const timestampMs = typeof m.timestampMs === 'number' ? m.timestampMs : now - (parsed.messages.length - idx) * 1000;
						if (m.role === 'user') {
							return {
								id: m.id || `user_${timestampMs}`,
								role: 'user' as const,
								text: m.text || '',
								timestampMs,
								read: true
							};
						}
						// Bot message
						if (m.id === 'msg_welcome') {
							return {
								id: 'msg_welcome',
								role: 'bot' as const,
								kind: 'greeting' as const,
								key: 'welcome',
								timestampMs,
								read: true
							};
						}
						return {
							id: m.id || `bot_${timestampMs}`,
							role: 'bot' as const,
							kind: (m.kind as BotMessageKind) || 'text',
							key: m.key,
							params: m.params,
							text: m.text,
							timestampMs,
							read: m.read ?? true
						};
					});

					this.lastTopicId = parsed.lastTopicId ?? null;
					this.unreadCount = typeof parsed.unreadCount === 'number' ? parsed.unreadCount : 0;
					this.showQuickReplies = parsed.showQuickReplies ?? false;
					return;
				}
			}
		} catch (e) {
			console.warn('[ChatStore] Failed to restore chat history', e);
		}

		// Default: Pesan Sambutan Awal terstruktur
		this.resetToWelcome();
	}

	private resetToWelcome() {
		this.messages = [
			{
				id: 'msg_welcome',
				role: 'bot',
				kind: 'greeting',
				key: 'welcome',
				timestampMs: Date.now(),
				read: true
			}
		];
		this.lastTopicId = null;
		this.unreadCount = 0;
		this.showQuickReplies = true;
		this.saveToStorage();
	}

	get lastUserQuestion(): string | null {
		for (let i = this.messages.length - 1; i >= 0; i--) {
			if (this.messages[i].role === 'user') {
				return this.messages[i].text || null;
			}
		}
		return null;
	}

	getQuestionBeforeMessage(messageId: string): string | null {
		const idx = this.messages.findIndex((m) => m.id === messageId);
		const start = idx === -1 ? this.messages.length - 1 : idx - 1;
		for (let i = start; i >= 0; i--) {
			if (this.messages[i].role === 'user') {
				return this.messages[i].text || null;
			}
		}
		return this.lastUserQuestion;
	}

	private saveToStorage() {
		if (typeof window === 'undefined') return;
		try {
			// Simpan maksimal 100 pesan terakhir
			const payload = {
				version: 2,
				messages: this.messages.slice(-100),
				lastTopicId: this.lastTopicId,
				unreadCount: this.unreadCount,
				showQuickReplies: this.showQuickReplies
			};
			sessionStorage.setItem(chatConfig.storageKey, JSON.stringify(payload));
		} catch (e) {
			console.warn('[ChatStore] Storage save failed', e);
		}
	}

	open() {
		this.isOpen = true;
		this.dismissTooltip();
		this.markAllRead();
		this.hasNewMessageBelow = false;
		this.saveToStorage();
	}

	close() {
		this.isOpen = false;
		this.hasNewMessageBelow = false;
		this.saveToStorage();
	}

	toggle() {
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	dismissTooltip() {
		this.tooltipDismissed = true;
		try {
			sessionStorage.setItem('sdj_chat_tooltip_dismissed', 'true');
		} catch (e) {
			// ignore
		}
	}

	markAllRead() {
		for (const m of this.messages) {
			m.read = true;
		}
		this.unreadCount = 0;
		this.saveToStorage();
	}

	clearConversation() {
		this.resetToWelcome();
	}

	async sendUserMessage(text: string): Promise<boolean> {
		const trimmed = text.trim();
		if (!trimmed) return false;

		// Validasi panjang
		if (trimmed.length > chatConfig.maxMessageLength) {
			return false;
		}

		// Rate limit check
		const now = Date.now();
		if (now - this.lastSentTimestamp < chatConfig.rateLimitMs) {
			return false;
		}
		this.lastSentTimestamp = now;

		// Tambahkan pesan pengguna (Teks asli selalu dipertahankan tanpa perubahan)
		const userMsg: ChatMessage = {
			id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
			role: 'user',
			text: trimmed,
			timestampMs: Date.now(),
			read: true
		};

		this.messages.push(userMsg);
		this.showQuickReplies = false;
		this.isTyping = true;
		this.saveToStorage();

		try {
			const res = await activeChatService.sendMessage({
				history: this.messages,
				text: trimmed,
				lastTopicId: this.lastTopicId
			});

			this.isTyping = false;

			if (res.lastTopicId) {
				this.lastTopicId = res.lastTopicId;
			}

			if (res && Array.isArray(res.replies)) {
				for (const reply of res.replies) {
					this.receiveBotMessage(reply);
				}
			}
		} catch (err) {
			this.isTyping = false;
			this.receiveBotMessage({
				kind: 'fallback',
				key: 'error_fallback'
			});
		}

		return true;
	}

	receiveBotMessage(reply: string | StructuredReply) {
		const isRead = this.isOpen;
		const timestampMs = Date.now();
		let botMsg: ChatMessage;

		if (typeof reply === 'string') {
			botMsg = {
				id: `bot_${timestampMs}_${Math.random().toString(36).substring(2, 6)}`,
				role: 'bot',
				kind: 'text',
				text: reply,
				timestampMs,
				read: isRead
			};
		} else {
			botMsg = {
				id: `bot_${timestampMs}_${Math.random().toString(36).substring(2, 6)}`,
				role: 'bot',
				kind: reply.kind,
				key: reply.key,
				params: reply.params,
				text: reply.text,
				timestampMs,
				read: isRead
			};
		}

		this.messages.push(botMsg);

		if (!isRead) {
			this.unreadCount++;
		}

		this.saveToStorage();
	}
}

export const chatStore = new ChatStore();

// DEV-ONLY DEBUG UTILITY: Tereliminasi otomatis di produksi
if (import.meta.env.DEV && typeof window !== 'undefined') {
	(window as any).__chatDebug = {
		simulateBotMessage: (reply: string | StructuredReply) => {
			chatStore.receiveBotMessage(reply);
		},
		setUnread: (count: number) => {
			chatStore.unreadCount = count;
		},
		clear: () => {
			chatStore.clearConversation();
		},
		getState: () => ({
			isOpen: chatStore.isOpen,
			unreadCount: chatStore.unreadCount,
			messagesCount: chatStore.messages.length,
			lastTopicId: chatStore.lastTopicId
		})
	};
}
