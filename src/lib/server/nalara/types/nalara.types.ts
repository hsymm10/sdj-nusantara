// src/lib/server/nalara/types/nalara.types.ts
// Tipe Request, Response, dan Guardrails NALARA Assistant

export interface ChatMessageParam {
	role: 'user' | 'assistant' | 'bot' | 'model';
	text: string;
}

export interface ChatApiRequest {
	message: string;
	history?: ChatMessageParam[];
	sessionId?: string;
}

export interface ChatApiResponse {
	reply: string;
	suggestions?: string[];
	source: 'gemini' | 'guardrail' | 'fallback';
	contextIds?: string[];
}

export interface GuardrailResult {
	isAllowed: boolean;
	reason?: 'out_of_context' | 'jailbreak' | 'empty' | 'too_long';
	customReply?: string;
}

