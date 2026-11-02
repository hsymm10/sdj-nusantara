// Konfigurasi Terpusat Floating Chatbot Widget SDJNusantara
// Sesuai Spesifikasi Desain Mockup design/chatbot-mockup.png & content-master SDJNusantara

export interface QuickReplyItem {
	id: string;
	label: string;
	iconType: 'program' | 'beasiswa' | 'talenta' | 'konsultasi' | 'kemitraan' | 'lainnya';
	queryText: string;
}

export const chatConfig = {
	title: 'Asisten SDJNusantara',
	subtitle: 'Asisten Virtual • Siap Membantu',
	demoNotice: 'Mode demo: jawaban otomatis sementara. Jangan kirim data sensitif (NIK, kata sandi, nomor kartu).',
	inputPlaceholder: 'Ketik pertanyaan Anda...',

	tooltip: {
		title: 'Butuh informasi seputar\npendidikan?',
		description: 'Tanyakan langsung kepada\nAsisten SDJNusantara.',
		delayMs: 2000
	},

	welcomeMessage: `Halo! Selamat datang di SDJNusantara
Saya Asisten Virtual SDJNusantara. Ada yang bisa saya bantu hari ini?
Silakan pilih topik berikut atau ketik pertanyaan Anda.`,

	// 6 Quick Reply Chips (Grid 2 Kolom x 3 Baris sesuai mockup)
	quickReplies: [
		{
			id: 'program',
			label: 'Info Program Pendidikan',
			iconType: 'program',
			queryText: 'Info Program Pendidikan'
		},
		{
			id: 'beasiswa',
			label: 'Beasiswa',
			iconType: 'beasiswa',
			queryText: 'Informasi Beasiswa'
		},
		{
			id: 'talenta',
			label: 'Pengembangan Talenta',
			iconType: 'talenta',
			queryText: 'Pengembangan Talenta'
		},
		{
			id: 'konsultasi',
			label: 'Konsultasi',
			iconType: 'konsultasi',
			queryText: 'Konsultasi Pendidikan'
		},
		{
			id: 'kemitraan',
			label: 'Kerja Sama Institusi',
			iconType: 'kemitraan',
			queryText: 'Kerja Sama Institusi'
		},
		{
			id: 'lainnya',
			label: 'Topik Lainnya',
			iconType: 'lainnya',
			queryText: 'Topik Lainnya'
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
