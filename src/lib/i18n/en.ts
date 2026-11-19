import type { TranslationDict } from './id';

export const enDict: TranslationDict = {
	nav: {
		home: 'Home',
		about: 'About Us',
		services: 'Services',
		partnership: 'Partnership',
		articles: 'Perspectives',
		contact: 'Contact',
		viewAllServices: 'View all services',
		servicesMenu: {
			educationTitle: 'Education Programs',
			educationDesc: 'Training, academic mentoring, and career & talent development.',
			scholarshipTitle: 'Scholarships',
			scholarshipBadge: 'Featured',
			scholarshipDesc: 'Information and application mentoring for domestic & international scholarships.',
			legalTitle: 'Legal Services',
			legalDesc: 'Consultation, contract assistance, and institutional governance.'
		},
		ariaMainNav: 'Main Site Navigation',
		ariaMobileToggle: 'Toggle navigation',
		ariaLangSwitcher: 'Select language',
		langLabel: 'Language'
	},
	footer: {
		phoneLabel: 'Phone:',
		colNav: 'Navigation',
		colServices: 'Services',
		colNewsletter: 'Newsletter',
		newsletterDesc: 'Get the latest scholarship and education program updates directly in your inbox.',
		newsletterPlaceholder: 'Your email address',
		newsletterSuccess: 'Thank you! You are now subscribed to the SDJNusantara newsletter.',
		newsletterInvalid: 'Please enter a valid email address.',
		copyright: '© 2026 SDJNusantara. All rights reserved.',
		privacyPolicy: 'Privacy Policy',
		terms: 'Terms & Conditions',
		links: {
			home: 'Home',
			about: 'About Us',
			partnership: 'Partnership',
			articles: 'Perspectives',
			contact: 'Contact',
			faq: 'FAQ',
			education: 'Education Programs',
			scholarship: 'Scholarships',
			allServices: 'All Services'
		}
	},
	chat: {
		title: 'NALARA',
		subtitleRole: 'Nusantara AI Assistant',
		subtitleStatus: 'Online',
		minimizeLabel: 'Minimize',
		closeLabel: 'Close NALARA',
		launcherOpenLabel: 'Open NALARA AI Assistant',
		launcherCloseLabel: 'Close NALARA AI Assistant',
		tooltipTitleLine1: 'Need information about',
		tooltipTitleLine2: 'SDJNusantara?',
		tooltipDescLine1: 'Ask directly to',
		tooltipDescLine2: 'NALARA AI Assistant.',
		tooltipDismiss: 'Dismiss message',
		tooltipAria: 'NALARA Notification',
		inputPlaceholder: 'Ask about profile, services, scholarships...',
		inputAria: 'Type a question for NALARA',
		sendLabel: 'Send message',
		demoNote: 'NALARA — Official AI Assistant of SDJNusantara. Do not send sensitive data.',
		clearChat: 'New conversation',
		clearConfirm: 'Start a new conversation and clear current history?',
		quickRepliesAria: 'Suggested questions',
		welcomeMessage:
			'Hello! I am NALARA, official virtual assistant of SDJNusantara. How can I help you today?',
		quickReplies: [
			{ id: 'profil', label: 'About SDJNusantara', iconType: 'program', queryText: 'What is SDJNusantara?' },
			{ id: 'layanan', label: 'Available Services', iconType: 'talenta', queryText: 'What services are available?' },
			{ id: 'beasiswa', label: 'Scholarship Info', iconType: 'beasiswa', queryText: 'How can I get scholarship information?' },
			{ id: 'institusi', label: 'Institutional Solutions', iconType: 'kemitraan', queryText: 'What solutions are available for institutions?' }
		],
		routeLabels: {
			'/kontak': 'Contact',
			'/layanan': 'Services',
			'/layanan/pendidikan': 'Education Programs',
			'/layanan/beasiswa': 'Scholarships',
			'/layanan/pendidikan/program/talent-accelerator': 'Talent Accelerator',
			'/layanan/pendidikan/program/ai-digital-productivity': 'AI & Digital Productivity',
			'/layanan/pendidikan/program/corporate-campus': 'Corporate & Campus Capacity Building',
			'/layanan/pendidikan/program/partnership-services': 'Institutional Partnership Services',
			'/layanan/pendidikan/beasiswa/scholarship-academy': 'Scholarship Academy',
			'/artikel': 'Articles',
			'/tentang-kami': 'About Us',
			'/kemitraan': 'Partnership',
			'/konsultasi': 'Consultation',
			'/program': 'Programs',
			'/beasiswa': 'Scholarships',
			'/faq': 'FAQ',
			'/kebijakan-privasi': 'Privacy Policy',
			'/syarat-ketentuan': 'Terms & Conditions'
		} as Record<string, string>,
		whatsappLabel: 'WhatsApp +62 858-8072-4733'
	},
	common: {
		readMore: 'Read More',
		learnMore: 'Learn More',
		consultNow: 'Consult Your Needs',
		contactUs: 'Contact Us',
		close: 'Close',
		previous: 'Previous',
		next: 'Next',
		back: 'Back',
		askAssistant: 'Ask Assistant',
		openFullPage: 'Open full page'
	}
};

