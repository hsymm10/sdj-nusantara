export interface FaqEn {
	question: string;
	answer: string;
	detail?: string[];
}

export const faqEnMap: Record<string, FaqEn> = {
	'faq-01': {
		question: 'Does SDJNusantara only serve university students?',
		answer:
			'No. Our services are open to high school students, university students, fresh graduates, professionals, educators, communities, and institutions.',
		detail: [
			'High School / Vocational Students: Major interest mapping and undergraduate scholarship preparation.',
			'Undergraduate / Master’s / Doctoral Students: Postgraduate scholarship mentoring, academic publication, and career readiness.',
			'Professionals & Institutions: Communication training, AI productivity, and institutional partnerships.'
		]
	},
	'faq-02': {
		question: 'Does SDJNusantara provide its own scholarships?',
		answer:
			'SDJNusantara focuses on information curation and scholarship application preparation mentoring, rather than acting as a direct scholarship funding provider.',
		detail: [
			'Funding availability and scholarship awards are determined solely by each official provider (governments, universities, foundations, or international donor agencies).',
			'We guide you in selecting suitable scholarships and strengthen your application documents to maximize your competitiveness.'
		]
	},
	'faq-03': {
		question: 'Are participants guaranteed to win a scholarship?',
		answer:
			'No. We do not guarantee admission, Letter of Acceptance (LoA) issuance, or scholarship awards, as final decisions rest solely with the official selection committees.',
		detail: [
			'Our commitment is to help you prepare your application systematically, elevate your essays and CV, and sharpen your interview readiness.',
			'Our mentoring prioritizes an ethical, structured, and objective learning process without unrealistic promises.'
		]
	},
	'faq-04': {
		question: 'Can consultations and mentoring be conducted online?',
		answer:
			'Yes, all consultation, mentoring, and training sessions can be conducted online via interactive video conferencing or in person by mutual agreement.',
		detail: [
			'Private Online Consultation: Flexible scheduling via video meeting platforms with collaborative document review.',
			'In-Person Sessions: Available for institutional training, group workshops, or scheduled appointments at our office.'
		]
	},
	'faq-05': {
		question: 'Do training participants receive certificates (including BNSP)?',
		answer:
			'Participants receive an official training certificate of participation from SDJNusantara. Professional competency certificates are issued by authorized certification bodies (such as BNSP) according to registered competency schemes.',
		detail: [
			'SDJNusantara Training Certificate: Official proof of attendance and completion of professional training hours.',
			'Professional / BNSP Certification: Official competency assessment through our licensed partner Professional Certification Bodies (LSP).'
		]
	},
	'faq-06': {
		question: 'How do I register for a program or mentoring session?',
		answer:
			'Select the program you are interested in on the SDJNusantara website, then fill out the contact form or reach our official WhatsApp to begin an initial needs-assessment consultation.',
		detail: [
			'Needs Consultation: We map your learning goals or institutional training requirements.',
			'Plan & Proposal: Transparent sharing of syllabus, schedule, and fee structure.',
			'Start Mentoring: Sessions begin according to the agreed schedule.'
		]
	},
	'faq-07': {
		question: 'Can materials and services be customized for institutions or companies?',
		answer:
			'Yes. We can design tailored programs, syllabi, and training schedules aligned with your partner institution’s needs, competency goals, and budget.',
		detail: [
			'In-House Training: Exclusive training for staff, educators, or students at partner campuses.',
			'Program Collaboration: Joint talent curriculum development with industry and higher education institutions.'
		]
	},
	'faq-sch-08': {
		question: 'Which scholarships are supported in Scholarship Academy?',
		answer:
			'We support preparation for domestic and international scholarships, including BPI (Kemdikbudristek), LPDP (Ministry of Finance), Chevening (UK), MEXT (Japan), AAS (Australia), and global university scholarships.',
		detail: [
			'Government Scholarships: BPI, LPDP, IISMA, and regional affirmative programs.',
			'International Scholarships: Chevening, MEXT, Fulbright, DAAD, and Eiffel Excellence.'
		]
	},
	'faq-sch-09': {
		question: 'When is the best time to start preparing a scholarship application?',
		answer:
			'The ideal preparation window is 6 to 12 months before official registration opens, giving you ample time for language certification, essay writing, and portfolio building.'
	},
	'faq-sch-10': {
		question: 'Is there dedicated mentoring for writing essays and motivation letters?',
		answer:
			'Yes, mentoring covers authentic idea exploration, academic narrative structuring, grammar review, and iterative revisions so your message is clear and persuasive.'
	},
	'faq-sch-11': {
		question: 'How are scholarship interview simulations conducted?',
		answer:
			'Simulations are held privately in person or via interactive video call using realistic selection-committee question scenarios, followed by immediate feedback on argument clarity and delivery.'
	},
	'faq-part-12': {
		question: 'How can an institution propose a partnership?',
		answer:
			'Institutions can submit the partnership form on the Contact page or reach us via WhatsApp/email. Our team will schedule an initial audience session to formulate the Terms of Reference (TOR).'
	},
	'faq-part-13': {
		question: 'How long does it take to receive a response after submitting a partnership request?',
		answer:
			'Our partnership team follows up on requests within 1–2 business days (Monday – Friday, 08:00 – 17:00 WIB) to coordinate a follow-up meeting.'
	},
	'faq-part-14': {
		question: 'Can partnership programs be delivered on-site at a partner campus or office?',
		answer:
			'Yes. We deliver on-site in-house training at partner campuses, schools, corporate offices, or in an integrated hybrid format.'
	},
	'faq-part-15': {
		question: 'How can an institution submit a collaborative activity proposal?',
		answer:
			'Please send your proposal document or Terms of Reference to info@sdjnusantara.com for review by our leadership and strategic partnerships team.'
	}
};

export interface LeaderEn {
	fotoAlt: string;
	profilSingkat: string;
	pendidikan: string;
	pengalaman: string[];
}

export const leadersEnMap: Record<string, LeaderEn> = {
	dirut: {
		fotoAlt: 'Portrait of Muhammad Setiawan S Dj, President Director of SDJNusantara',
		profilSingkat:
			'Muhammad Setiawan S Dj is a professional with over a decade of experience in public policy, higher education, human capital development, innovation, and strategic program management.\n\nBacked by a multidisciplinary background in psychology, social sciences, strategic intelligence studies, and law, he brings an analytical, adaptive leadership approach focused on problem-solving and measurable outcomes.\n\nHis professional experience spans government, the private sector, and legislative institutions. This cross-sector exposure has shaped a strong understanding of policy dynamics, organizational governance, talent development, and effective multi-stakeholder collaboration.\n\nThroughout his career, he has been actively involved in initiatives across education, innovation, human resource development, institutional capacity building, and strategic development agendas.\n\nAs Founder and President Director, he leads the company’s strategic direction with a focus on strategy, human development, education, and institutional strengthening. He believes sustainable growth stems from combining sound strategy, capable people, good governance, and collaboration that turns ideas into real impact.',
		pendidikan: 'B.A., S.Psi., S.H., M.Si., M.H.',
		pengalaman: [
			'Over a decade in public policy, higher education, HR development, innovation, and strategic program management',
			'Cross-sector experience across government, private sector, and legislative institutions',
			'Founder and President Director focusing on strategy, human development, education, and institutional capacity'
		]
	},
	'senior-advisor-strategic': {
		fotoAlt: 'Portrait of Mayjen TNI (Purn) Dr. Dr. Ir. Pujo Widodo, Senior Advisor at SDJNusantara',
		profilSingkat:
			'Mayjen TNI (Purn) Dr. Dr. Ir. Pujo Widodo, S.E., S.H., S.T., M.A., M.D.S., M.Si., M.Si (Han). is a senior professional with extensive experience in strategy, leadership, defense, intelligence, institutional development, and higher education.\n\nThroughout his career, he has undertaken strategic domestic and international assignments across operations, intelligence, organizational development, education, and international cooperation. This experience has forged a sharp perspective in reading strategic environments, managing risk, building institutional networks, and formulating measured approaches to organizational challenges.\n\nHe also holds a broad multidisciplinary academic background spanning economics, law, industrial engineering, defense, strategic intelligence, international law, and global strategy.\n\nAs Senior Advisor for Strategic Affairs & Institutional Relations at PT Sampurna Djaya Nusantara, he provides strategic counsel to company leadership on organizational direction, institutional relations, risk management, leadership, and sustainable partnerships.',
		pendidikan:
			'S.E., S.H., S.T., Ir., M.A., M.D.S., M.Si., M.Si (Han)., Dr., Dr. — Economics, Law, Industrial Engineering, Defense, Strategic Intelligence, International Law & Global Strategy',
		pengalaman: [
			'Strategic domestic and international assignments in operations, intelligence, organizational development, education, and global cooperation',
			'Strategy, leadership, defense, intelligence, institutional development, and higher education',
			'Senior Advisor for Strategic Affairs & Institutional Relations at PT Sampurna Djaya Nusantara'
		]
	},
	'senior-advisor-business': {
		fotoAlt: 'Portrait of Dr. Devi Erna Rachmawati, Senior Advisor at SDJNusantara',
		profilSingkat:
			'Dr. Devi Erna Rachmawati is a professional and entrepreneur with broad experience in business development, strategic partnerships, trade, industry networks, and organizational growth.\n\nShe holds academic credentials in economics, business management, and East Asian economic studies, earning her doctoral degree from Yamaguchi University, Japan, with outstanding academic distinction.\n\nThroughout her career, she has built and led diverse business initiatives and actively participated in national and international business organizations and trade networks—covering enterprise growth, entrepreneurship, trade and investment, industry networking, and stakeholder relations.\n\nShe also brings experience across government and education sectors, enriching her perspective on the intersection of business, public policy, human capital development, and market needs.\n\nAs Senior Advisor for Business Development & Strategic Partnerships, she provides strategic insights on business opportunities, network expansion, partnership building, and collaborative initiatives that drive sustainable growth.\n\nShe believes strong business growth is built on spotting opportunities, fostering trust, expanding networks, and creating shared value for all partners.',
		pendidikan:
			'S.E., M.B.A., Ph.D. — Economics, Business Management & East Asian Economic Studies (Yamaguchi University, Japan)',
		pengalaman: [
			'Business development, entrepreneurship, trade, investment, and national/international business networks',
			'Government and education sector experience in policy, HR development, and market alignment',
			'Senior Advisor for Business Development & Strategic Partnerships'
		]
	},
	'director-education': {
		fotoAlt: 'Portrait of Hanif Hidayatullah, Director of Education at SDJNusantara',
		profilSingkat:
			'Hanif Hidayatullah is a researcher and educator across universities, Islamic boarding schools (pesantren), and educational institutions. He serves as Director of Education at SDJNusantara.\n\nHe is actively engaged in issues surrounding Political Economy, Leadership, and Organizational Development.',
		pendidikan: 'S.Hum., M.A.',
		pengalaman: [
			'Researcher and educator across universities, pesantren, and educational institutions',
			'Director of Education at SDJNusantara',
			'Active in Political Economy, Leadership, and Organizational Studies'
		]
	}
};

export interface ScholarshipEn {
	nama: string;
	penyelenggara: string;
	jenjang: string;
	negara: string;
	pendanaan: string;
	kategori: string;
	cakupan: string;
	status: string;
	deadline: string;
	updatedAt: string;
}

export const scholarshipsEnMap: Record<string, ScholarshipEn> = {
	bpi: {
		nama: 'Beasiswa Pendidikan Indonesia (BPI)',
		penyelenggara: 'Ministry of Education, Culture, Research, and Technology (Indonesia)',
		jenjang: 'Bachelor’s (S1), Master’s (S2), Doctoral (S3)',
		negara: 'Across Indonesia',
		pendanaan: 'Tuition fees, living allowance, research support',
		kategori: 'Government',
		cakupan: 'Domestic',
		status: 'Open',
		deadline: 'November 30, 2026',
		updatedAt: 'Updated Oct 12, 2026'
	},
	chevening: {
		nama: 'Chevening Scholarship',
		penyelenggara: 'UK Government',
		jenjang: 'Master’s (S2)',
		negara: 'United Kingdom',
		pendanaan: 'Tuition fees, living stipend, airfare, additional allowances',
		kategori: 'Government',
		cakupan: 'International',
		status: 'Open',
		deadline: 'December 15, 2026',
		updatedAt: 'Updated Oct 10, 2026'
	},
	mext: {
		nama: 'MEXT Scholarship',
		penyelenggara: 'Government of Japan',
		jenjang: 'Bachelor’s (S1), Master’s (S2), Doctoral (S3)',
		negara: 'Japan',
		pendanaan: 'Tuition fees, monthly living allowance, round-trip airfare',
		kategori: 'Government',
		cakupan: 'International',
		status: 'Opening Soon',
		deadline: 'January 10, 2027',
		updatedAt: 'Updated Oct 8, 2026'
	},
	lpdp: {
		nama: 'LPDP Scholarship',
		penyelenggara: 'Ministry of Finance of the Republic of Indonesia',
		jenjang: 'Master’s (S2), Doctoral (S3)',
		negara: 'Domestic & International',
		pendanaan: 'Tuition fees, living allowance, research allowance',
		kategori: 'Government',
		cakupan: 'Domestic',
		status: 'Open',
		deadline: 'February 28, 2027',
		updatedAt: 'Updated Oct 5, 2026'
	}
};

export const scholarshipDisclaimerEn =
	'Scholarship information listed here is subject to change at any time according to each provider’s policy. Always verify the latest official details directly on the respective scholarship provider’s website.';

export interface ProgramEn {
	category: string;
	title: string;
	desc: string;
	duration: string;
	target: string;
	features: string[];
	format: string[];
	biaya: string;
	langkahBerikut: { label: string; href: string }[];
}

export const programsEnMap: Record<string, ProgramEn> = {
	'scholarship-academy': {
		category: 'Scholarship Preparation',
		title: 'Scholarship Academy',
		desc: 'An intensive cohort-based scholarship application mentoring program covering profile mapping, essay strengthening, and interview simulations.',
		duration: 'Discussed during initial consultation',
		target:
			'Undergraduate/Master’s students preparing scholarship applications • High school students targeting university scholarships • Fresh graduates and practitioners planning further study',
		features: [
			'Intensive classes dissecting domestic and international scholarship requirements.',
			'Group coaching and interactive motivation letter & document review.',
			'Personal consultation sessions to sharpen each applicant’s unique profile.',
			'Mock interview practice to build confidence in front of selection panels.'
		],
		format: ['Interactive online intensive classes', 'Small-group coaching', '1-on-1 personal consultation'],
		biaya: 'Discussed during initial consultation',
		langkahBerikut: [
			{ label: 'View Program Details', href: '/layanan/pendidikan/program/scholarship-academy' },
			{ label: 'Consult on This Program', href: '/kontak' }
		]
	},
	'talent-accelerator': {
		category: 'Talent Management',
		title: 'Talent Accelerator',
		desc: 'A 1–3 month individual potential acceleration program featuring talent assessment, personal action planning, and intensive mentoring.',
		duration: '1–3 months',
		target:
			'Students seeking clear future direction • Fresh graduates strengthening portfolios and job readiness • Young talents building resilient leadership character',
		features: [
			'Comprehensive assessment mapping academic strengths, career interests, and character.',
			'Creation of a measurable, actionable Individual Development Plan (IDP).',
			'Regular mentoring sessions with industry practitioners and academics.',
			'Leadership skill enhancement and professional career readiness.'
		],
		format: ['Structured 1–3 month program with individual milestone targets'],
		biaya: 'Discussed during initial consultation',
		langkahBerikut: [
			{ label: 'View Program Details', href: '/layanan/pendidikan/program/talent-accelerator' },
			{ label: 'Register for Talent Mapping', href: '/kontak' }
		]
	},
	'ai-digital-skills-academy': {
		category: 'Digital Skills',
		title: 'AI & Digital Skills Academy',
		desc: 'Practical classes on leveraging Artificial Intelligence (AI) and modern digital skills to boost productivity in education, research, and work.',
		duration: 'Discussed during initial consultation',
		target:
			'Educators, lecturers, and teachers enriching AI-assisted teaching • Students completing theses and research ethically and efficiently • Professionals boosting daily workplace productivity',
		features: [
			'Introduction to generative AI foundations and effective prompt engineering.',
			'AI-assisted research while upholding academic integrity and originality ethics.',
			'Optimizing digital tools for data processing, team collaboration, and portfolio building.',
			'Hands-on case study practice to produce tangible outputs.'
		],
		format: ['Interactive workshops', 'Certified short courses', 'Institutional in-house training'],
		biaya: 'Discussed during initial consultation',
		langkahBerikut: [
			{ label: 'View Program Details', href: '/layanan/pendidikan/program/ai-digital-skills-academy' },
			{ label: 'Consult on AI Classes', href: '/kontak' }
		]
	},
	'institutional-partnership-services': {
		category: 'Institutional Collaboration',
		title: 'Institutional Partnership Services',
		desc: 'Custom-designed human capital development programs tailored specifically to the strategic targets of partner institutions.',
		duration: 'Discussed during initial consultation',
		target:
			'Universities hosting student scholarship and career readiness programs • Schools and education offices elevating teacher/student quality • Non-profits and regional scholarship bodies',
		features: [
			'Training needs analysis and competency profiling for campus/school/agency members.',
			'Development of modular curricula, Terms of Reference (TOR), and assessment tools.',
			'Provision of competent mentors, expert speakers, and facilitators.',
			'Data-driven program evaluation reports for institutional quality follow-up.'
		],
		format: ['Customized to partnership contract and official MoU/PKS agreements'],
		biaya: 'Discussed during initial consultation',
		langkahBerikut: [
			{
				label: 'View Program Details',
				href: '/layanan/pendidikan/program/institutional-partnership-services'
			},
			{ label: 'Propose Collaboration', href: '/kontak' }
		]
	},
	'corporate-campus-training': {
		category: 'Custom Training',
		title: 'Corporate & Campus Training',
		desc: 'Specialized training for corporations, universities, schools, and organizations with flexible curricula tailored to partner needs.',
		duration: 'Discussed during initial consultation',
		target:
			'Companies sharpening employee communication and AI adoption • Student organizations running leadership training • Foundations and professional associations',
		features: [
			'Topic options: Public speaking, AI productivity, team leadership, or workplace ethics.',
			'Available on-site at partner locations (in-house) or online.',
			'Interactive methods combining real case studies, group simulations, and hands-on practice.',
			'Includes baseline assessment and post-training achievement reports.'
		],
		format: ['In-house training', 'Executive seminars', 'Modular practical workshops'],
		biaya: 'Discussed during initial consultation',
		langkahBerikut: [
			{ label: 'View Program Details', href: '/layanan/pendidikan/program/corporate-campus-training' },
			{ label: 'Discuss Training Needs', href: '/kontak' }
		]
	}
};

