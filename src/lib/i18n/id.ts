export const idDict = {
	nav: {
		home: 'Beranda',
		about: 'Tentang Kami',
		services: 'Layanan',
		partnership: 'Kemitraan',
		articles: 'Perspektif',
		contact: 'Kontak',
		viewAllServices: 'Lihat semua layanan',
		servicesMenu: {
			educationTitle: 'Program Pendidikan',
			educationDesc: 'Pelatihan, pendampingan akademik, dan pengembangan karier serta talenta.',
			scholarshipTitle: 'Beasiswa',
			scholarshipBadge: 'Unggulan',
			scholarshipDesc: 'Informasi dan pendampingan pendaftaran beasiswa dalam dan luar negeri.',
			legalTitle: 'Layanan Hukum',
			legalDesc: 'Konsultasi, pendampingan kontrak, dan tata kelola lembaga.'
		},
		ariaMainNav: 'Navigasi Utama Situs',
		ariaMobileToggle: 'Toggle navigasi',
		ariaLangSwitcher: 'Pilih bahasa',
		langLabel: 'Bahasa'
	},
	footer: {
		phoneLabel: 'No. HP:',
		colNav: 'Navigasi',
		colServices: 'Layanan',
		colNewsletter: 'Buletin',
		newsletterDesc: 'Dapatkan pembaruan beasiswa dan program pendidikan terbaru langsung di email Anda.',
		newsletterPlaceholder: 'Alamat email Anda',
		newsletterSuccess: 'Terima kasih! Anda telah terdaftar dalam buletin SDJ Nusantara.',
		newsletterInvalid: 'Masukkan alamat email yang valid.',
		copyright: '© 2026 SDJ Nusantara. Hak cipta dilindungi undang-undang.',
		privacyPolicy: 'Kebijakan Privasi',
		terms: 'Syarat & Ketentuan',
		links: {
			home: 'Beranda',
			about: 'Tentang Kami',
			partnership: 'Kemitraan',
			articles: 'Perspektif',
			contact: 'Kontak',
			faq: 'FAQ',
			education: 'Program Pendidikan',
			scholarship: 'Beasiswa',
			allServices: 'Semua Layanan'
		}
	},
	chat: {
		title: 'NALARA',
		subtitleRole: 'Nusantara AI Assistant',
		subtitleStatus: 'Online',
		minimizeLabel: 'Perkecil',
		closeLabel: 'Tutup NALARA',
		launcherOpenLabel: 'Buka NALARA AI Assistant',
		launcherCloseLabel: 'Tutup NALARA AI Assistant',
		tooltipTitleLine1: 'Butuh informasi seputar',
		tooltipTitleLine2: 'SDJ Nusantara?',
		tooltipDescLine1: 'Tanyakan langsung kepada',
		tooltipDescLine2: 'NALARA AI Assistant.',
		tooltipDismiss: 'Tutup pesan',
		tooltipAria: 'Pemberitahuan Asisten',
		inputPlaceholder: 'Tanyakan seputar profil, layanan, beasiswa...',
		inputAria: 'Ketik pertanyaan untuk NALARA',
		sendLabel: 'Kirim pesan',
		demoNote: 'NALARA — Asisten AI Resmi SDJ Nusantara. Jangan kirimkan data sensitif.',
		clearChat: 'Percakapan Baru',
		clearConfirm: 'Mulai percakapan baru dan hapus riwayat saat ini?',
		quickRepliesAria: 'Pilihan topik cepat',
		welcomeMessage: 'Halo! Saya NALARA, asisten virtual SDJ Nusantara. Ada yang ingin Anda ketahui?',
		quickReplies: [
			{ id: 'profil', label: 'Apa itu SDJ Nusantara?', iconType: 'program', queryText: 'Apa itu SDJ Nusantara?' },
			{ id: 'layanan', label: 'Layanan yang tersedia', iconType: 'talenta', queryText: 'Apa saja layanan yang tersedia?' },
			{ id: 'beasiswa', label: 'Informasi Beasiswa', iconType: 'beasiswa', queryText: 'Bagaimana cara mendapatkan informasi beasiswa?' },
			{ id: 'institusi', label: 'Solusi untuk Institusi', iconType: 'kemitraan', queryText: 'Apa saja solusi untuk institusi?' }
		],
		routeLabels: {
			'/kontak': 'Kontak',
			'/layanan': 'Layanan',
			'/layanan/pendidikan': 'Program Pendidikan',
			'/layanan/beasiswa': 'Beasiswa',
			'/layanan/pendidikan/program/talent-accelerator': 'Talent Accelerator',
			'/layanan/pendidikan/program/ai-digital-productivity': 'AI & Digital Productivity',
			'/layanan/pendidikan/program/corporate-campus': 'Corporate & Campus Capacity Building',
			'/layanan/pendidikan/program/partnership-services': 'Layanan Kemitraan Institusi',
			'/layanan/pendidikan/beasiswa/scholarship-academy': 'Scholarship Academy',
			'/artikel': 'Artikel',
			'/tentang-kami': 'Tentang Kami',
			'/kemitraan': 'Kemitraan',
			'/konsultasi': 'Konsultasi',
			'/program': 'Program',
			'/beasiswa': 'Beasiswa',
			'/faq': 'FAQ',
			'/kebijakan-privasi': 'Kebijakan Privasi',
			'/syarat-ketentuan': 'Syarat & Ketentuan'
		} as Record<string, string>,
		whatsappLabel: 'WhatsApp +62 858-8072-4733'
	},
	common: {
		readMore: 'Selengkapnya',
		learnMore: 'Pelajari Lebih Lanjut',
		consultNow: 'Konsultasikan Kebutuhan Anda',
		contactUs: 'Hubungi Kami',
		close: 'Tutup',
		previous: 'Sebelumnya',
		next: 'Berikutnya',
		back: 'Kembali',
		askAssistant: 'Tanya Asisten',
		openFullPage: 'Buka halaman penuh'
	}
};

export type TranslationDict = typeof idDict;

