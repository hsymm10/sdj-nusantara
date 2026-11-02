// Konfigurasi Terpusat Floating Chatbot Widget SDJNusantara
// Sesuai Spesifikasi Desain & content-master SDJNusantara

export interface QuickReplyItem {
	id: string;
	label: string;
	icon: string;
	queryText: string;
}

export const chatConfig = {
	title: 'Asisten SDJNusantara',
	subtitle: 'Asisten Virtual • Siap Membantu',
	demoNotice: 'Mode demo: jawaban otomatis sementara.',
	sensitiveWarning: 'Jangan kirim data sensitif (NIK, kata sandi, nomor kartu).',
	inputPlaceholder: 'Ketik pertanyaan Anda...',

	tooltip: {
		title: 'Butuh informasi seputar pendidikan?',
		description: 'Tanyakan langsung kepada asisten SDJNusantara.',
		delayMs: 2000
	},

	welcomeMessage: `Halo! Selamat datang di SDJNusantara. Saya Asisten Virtual SDJNusantara. Ada yang bisa saya bantu hari ini?

• Informasi layanan pendidikan
• Program SDJNusantara
• Beasiswa dan pendidikan
• Kerja sama institusi
• Konsultasi pengembangan talenta

Saya siap membantu Anda.`,

	quickReplies: [
		{
			id: 'program',
			label: 'Info Program Pendidikan',
			icon: 'ri:graduation-cap-line',
			queryText: 'Info Program Pendidikan'
		},
		{
			id: 'beasiswa',
			label: 'Beasiswa',
			icon: 'ri:gift-line',
			queryText: 'Informasi Beasiswa'
		},
		{
			id: 'kemitraan',
			label: 'Kemitraan',
			icon: 'ri:handshake-line',
			queryText: 'Kemitraan dan Kerja Sama'
		},
		{
			id: 'layanan',
			label: 'Layanan & Kontak',
			icon: 'ri:customer-service-2-line',
			queryText: 'Layanan & Kontak'
		}
	] as QuickReplyItem[],

	// Rute yang diizinkan (semua rute publik diizinkan, kecualikan rute privat/admin bila nanti ada)
	excludedRoutes: ['/admin', '/portal'],

	// Batasan pesan & rate limit
	maxMessageLength: 500,
	rateLimitMs: 800,
	storageKey: 'sdj_chat_v1'
};

export function isChatEnabled(pathname: string): boolean {
	return !chatConfig.excludedRoutes.some((route) => pathname.startsWith(route));
}
