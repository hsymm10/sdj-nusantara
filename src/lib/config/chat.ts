// Konfigurasi Terpusat Floating Chatbot Widget NALARA SDJNusantara
// NALARA — Nusantara AI Learning & Resource Assistant

export interface QuickReplyItem {
	id: string;
	label: string;
	iconType: 'program' | 'beasiswa' | 'talenta' | 'konsultasi' | 'kemitraan' | 'lainnya';
	queryText: string;
}

export const chatConfig = {
	title: 'NALARA',
	fullName: 'Nusantara AI Learning & Resource Assistant',
	subtitle: 'Asisten Virtual Resmi SDJNusantara',
	demoNotice: 'NALARA — Asisten AI Resmi SDJNusantara. Jangan kirimkan data sensitif (NIK, kata sandi, rekening).',
	inputPlaceholder: 'Tanyakan seputar profil, layanan, atau beasiswa...',

	tooltip: {
		title: 'Butuh informasi seputar\nSDJNusantara?',
		description: 'Tanyakan langsung kepada\nNALARA AI Assistant.',
		delayMs: 2000
	},

	welcomeMessage: 'Halo! Saya NALARA, asisten virtual SDJNusantara. Ada yang ingin Anda ketahui?',

	// 4 Suggested Questions Sesuai Spesifikasi NALARA
	quickReplies: [
		{
			id: 'profil',
			label: 'Apa itu SDJNusantara?',
			iconType: 'program',
			queryText: 'Apa itu SDJNusantara?'
		},
		{
			id: 'layanan',
			label: 'Layanan yang tersedia',
			iconType: 'talenta',
			queryText: 'Apa saja layanan yang tersedia?'
		},
		{
			id: 'beasiswa',
			label: 'Informasi Beasiswa',
			iconType: 'beasiswa',
			queryText: 'Bagaimana cara mendapatkan informasi beasiswa?'
		},
		{
			id: 'institusi',
			label: 'Solusi untuk Institusi',
			iconType: 'kemitraan',
			queryText: 'Apa saja solusi untuk institusi?'
		}
	] as QuickReplyItem[],

	// Rute yang diizinkan (semua rute publik diizinkan, kecualikan rute privat/admin bila nanti ada)
	excludedRoutes: ['/admin', '/portal'],

	// Batasan pesan & rate limit
	maxMessageLength: 500,
	rateLimitMs: 800,
	storageKey: 'sdj_nalara_chat_history'
};

export function isChatEnabled(pathname: string): boolean {
	return !chatConfig.excludedRoutes.some((route) => pathname.startsWith(route));
}
