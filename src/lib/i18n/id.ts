export const idDict = {
	nav: {
		home: 'Beranda',
		about: 'Tentang Kami',
		services: 'Layanan',
		partnership: 'Kemitraan',
		articles: 'Artikel & Wawasan',
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
		newsletterSuccess: 'Terima kasih! Anda telah terdaftar dalam buletin SDJNusantara.',
		newsletterInvalid: 'Masukkan alamat email yang valid.',
		copyright: '© 2026 SDJNusantara. Hak cipta dilindungi undang-undang.',
		privacyPolicy: 'Kebijakan Privasi',
		terms: 'Syarat & Ketentuan',
		links: {
			home: 'Beranda',
			about: 'Tentang Kami',
			partnership: 'Kemitraan',
			articles: 'Artikel & Wawasan',
			contact: 'Kontak',
			faq: 'FAQ',
			education: 'Program Pendidikan',
			scholarship: 'Beasiswa',
			allServices: 'Semua Layanan'
		}
	},
	chat: {
		title: 'Asisten SDJNusantara',
		subtitleRole: 'Asisten Virtual',
		subtitleStatus: 'Siap Membantu',
		minimizeLabel: 'Perkecil',
		closeLabel: 'Tutup asisten',
		launcherOpenLabel: 'Buka Asisten SDJNusantara',
		launcherCloseLabel: 'Tutup Asisten SDJNusantara',
		tooltipTitleLine1: 'Butuh informasi seputar',
		tooltipTitleLine2: 'pendidikan?',
		tooltipDescLine1: 'Tanyakan langsung kepada',
		tooltipDescLine2: 'Asisten SDJNusantara.',
		tooltipDismiss: 'Tutup pesan',
		tooltipAria: 'Pemberitahuan Asisten',
		inputPlaceholder: 'Ketik pertanyaan Anda...',
		inputAria: 'Ketik pertanyaan untuk asisten',
		sendLabel: 'Kirim pesan',
		demoNote: 'Mode demo: jawaban otomatis sementara. Jangan kirim data sensitif (NIK, kata sandi, nomor kartu).',
		clearChat: 'Hapus percakapan',
		clearConfirm: 'Hapus seluruh riwayat percakapan dan mulai dari awal?',
		quickRepliesAria: 'Pilihan topik cepat',
		welcomeMessage:
			'Halo! Selamat datang di SDJNusantara\nSaya Asisten Virtual SDJNusantara. Ada yang bisa saya bantu hari ini? Silakan pilih topik berikut atau ketik pertanyaan Anda.',
		quickReplies: [
			{ id: 'program', label: 'Info Program Pendidikan', iconType: 'program', queryText: 'Jelaskan program pendidikan di SDJNusantara' },
			{ id: 'beasiswa', label: 'Beasiswa', iconType: 'beasiswa', queryText: 'Bagaimana cara mendapatkan informasi dan bimbingan beasiswa?' },
			{ id: 'talenta', label: 'Pengembangan Talenta', iconType: 'talenta', queryText: 'Apa saja layanan pengembangan talenta dan karier di SDJNusantara?' },
			{ id: 'konsultasi', label: 'Konsultasi', iconType: 'konsultasi', queryText: 'Bagaimana cara menghubungi atau mengajukan konsultasi?' },
			{ id: 'kemitraan', label: 'Kerja Sama', iconType: 'kemitraan', queryText: 'Bagaimana proses pengajuan kerja sama atau kemitraan institusi?' },
			{ id: 'lainnya', label: 'Topik Lainnya', iconType: 'lainnya', queryText: 'Tunjukkan pertanyaan yang sering diajukan atau layanan utama' }
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

