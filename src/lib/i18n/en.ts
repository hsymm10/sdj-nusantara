import type { TranslationDict } from './id';

export const enDict: TranslationDict = {
	nav: {
		home: 'Home',
		about: 'About Us',
		services: 'Services',
		partnership: 'Partnership',
		articles: 'Articles & Insights',
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
			articles: 'Articles & Insights',
			contact: 'Contact',
			faq: 'FAQ',
			education: 'Education Programs',
			scholarship: 'Scholarships',
			allServices: 'All Services'
		}
	},
	chat: {
		title: 'SDJNusantara Assistant',
		subtitleRole: 'Virtual Assistant',
		subtitleStatus: 'Ready to Help',
		minimizeLabel: 'Minimize',
		closeLabel: 'Close assistant',
		launcherOpenLabel: 'Open SDJNusantara Assistant',
		launcherCloseLabel: 'Close SDJNusantara Assistant',
		tooltipTitleLine1: 'Need information about',
		tooltipTitleLine2: 'education?',
		tooltipDescLine1: 'Ask directly to the',
		tooltipDescLine2: 'SDJNusantara Assistant.',
		tooltipDismiss: 'Dismiss message',
		tooltipAria: 'Assistant Notification',
		inputPlaceholder: 'Type your question...',
		inputAria: 'Type a question for the assistant',
		sendLabel: 'Send message',
		demoNote: 'Demo mode: automated temporary responses. Do not send sensitive data (ID number, passwords, card numbers).',
		clearChat: 'Clear chat',
		clearConfirm: 'Clear the entire conversation history and start over?',
		quickRepliesAria: 'Quick topic choices',
		welcomeMessage:
			'Hello! Welcome to SDJNusantara\nI am the SDJNusantara Virtual Assistant. How can I help you today? Please choose a topic below or type your question.',
		quickReplies: [
			{ id: 'program', label: 'Education Programs', iconType: 'program', queryText: 'Explain education programs at SDJNusantara' },
			{ id: 'beasiswa', label: 'Scholarships', iconType: 'beasiswa', queryText: 'How can I get scholarship information and mentoring?' },
			{ id: 'talenta', label: 'Talent Development', iconType: 'talenta', queryText: 'What talent and career development services does SDJNusantara offer?' },
			{ id: 'konsultasi', label: 'Consultation', iconType: 'konsultasi', queryText: 'How do I contact or request a consultation?' },
			{ id: 'kemitraan', label: 'Partnership', iconType: 'kemitraan', queryText: 'How does the institutional partnership process work?' },
			{ id: 'lainnya', label: 'Other Topics', iconType: 'lainnya', queryText: 'Show frequently asked questions or main services' }
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

