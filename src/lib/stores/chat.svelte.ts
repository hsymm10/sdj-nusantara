// Store State Chatbot SDJNusantara (Svelte 5 Runes)
// Mengelola percakapan, riwayat sessionStorage, unread counter, dan status jendela

import { chatConfig } from '#lib/config/chat';
import { activeChatService } from '#lib/services/chat/chatService';

export interface ChatMessage {
	id: string;
	role: 'bot' | 'user';
	text: string;
	time: string;
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

	private lastSentTimestamp = 0;
	private initialized = false;

	constructor() {
		// Dijalankan di browser
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

		// 2. Pulihkan Riwayat Pesan
		try {
			const raw = sessionStorage.getItem(chatConfig.storageKey);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed.messages) && parsed.messages.length > 0) {
					this.messages = parsed.messages;
					this.unreadCount = typeof parsed.unreadCount === 'number' ? parsed.unreadCount : 0;
					this.showQuickReplies = parsed.showQuickReplies ?? false;
					return;
				}
			}
		} catch (e) {
			console.warn('[ChatStore] Failed to restore chat history', e);
		}

		// Default: Pesan Sambutan Awal (read: true, unreadCount: 0)
		this.resetToWelcome();
	}

	private resetToWelcome() {
		this.messages = [
			{
				id: 'msg_welcome',
				role: 'bot',
				text: chatConfig.welcomeMessage,
				time: formatCurrentTime(),
				read: true
			}
		];
		this.unreadCount = 0;
		this.showQuickReplies = true;
		this.saveToStorage();
	}

	private saveToStorage() {
		if (typeof window === 'undefined') return;
		try {
			// Simpan maksimal 100 pesan terakhir
			const payload = {
				version: 1,
				messages: this.messages.slice(-100),
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

		// Tambahkan pesan pengguna
		const userMsg: ChatMessage = {
			id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
			role: 'user',
			text: trimmed,
			time: formatCurrentTime(),
			read: true
		};

		this.messages.push(userMsg);
		this.showQuickReplies = false;
		this.isTyping = true;
		this.saveToStorage();

		try {
			const res = await activeChatService.sendMessage({
				history: this.messages,
				text: trimmed
			});

			this.isTyping = false;

			if (res && Array.isArray(res.replies)) {
				for (const reply of res.replies) {
					this.receiveBotMessage(reply);
				}
			}
		} catch (err) {
			this.isTyping = false;
			this.receiveBotMessage(
				'Mohon maaf, terjadi kendala saat memproses jawaban. Silakan hubungi tim kami via WhatsApp https://wa.me/6285880724733.'
			);
		}

		return true;
	}

	receiveBotMessage(text: string) {
		const isRead = this.isOpen;
		const botMsg: ChatMessage = {
			id: `bot_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
			role: 'bot',
			text,
			time: formatCurrentTime(),
			read: isRead
		};

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
		simulateBotMessage: (text: string) => {
			chatStore.receiveBotMessage(text);
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
			messagesCount: chatStore.messages.length
		})
	};
}
