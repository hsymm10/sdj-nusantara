export interface EnglishKnowledgeEntry {
	ringkas: string;
	detail: string[];
	suggestions?: string[];
}

export const knowledgeEnMap: Record<string, EnglishKnowledgeEntry> = {
	'program-scholarship-academy': {
		ringkas:
			'Scholarship Academy is SDJNusantara’s intensive mentoring program for domestic and international scholarship preparation (LPDP, BPI, Chevening, Fulbright, Erasmus+, and more).',
		detail: [
			'Profile mapping and curated scholarship target selection.',
			'In-depth review of CV, essays, motivation letters, and study/research proposals.',
			'Structured interview simulation and evaluation with experienced mentors.',
			'Available in online and hybrid formats tailored to your timeline.'
		],
		suggestions: ['Education Programs', 'Scholarships', 'Consultation']
	},
	'program-talent-accelerator': {
		ringkas:
			'Talent Accelerator helps students, fresh graduates, and professionals map their potential, sharpen career readiness, and build competitive portfolios.',
		detail: [
			'Personal strengths, career direction, and competency mapping.',
			'CV, LinkedIn, and professional portfolio refinement.',
			'Communication, leadership, and workplace readiness coaching.'
		],
		suggestions: ['Education Programs', 'Talent Development', 'Consultation']
	},
	'program-ai-digital': {
		ringkas:
			'AI & Digital Productivity equips educators, students, and institutions with practical artificial intelligence workflows for research, teaching, and office productivity.',
		detail: [
			'Practical AI tools for academic research, writing, and data organization.',
			'Ethical and responsible AI usage in education and organizations.',
			'Customizable workshops for schools, universities, and corporate teams.'
		],
		suggestions: ['Education Programs', 'Partnership', 'Consultation']
	},
	'program-partnership-services': {
		ringkas:
			'SDJNusantara Partnership Services connect schools, universities, and institutions with collaborative education, scholarship socialization, and capacity-building programs.',
		detail: [
			'Joint scholarship clinics and academic readiness seminars.',
			'Institutional capacity building and educator training.',
			'Custom MoU-based collaboration tailored to institutional goals.'
		],
		suggestions: ['Partnership', 'Education Programs', 'Consultation']
	},
	'program-corporate-campus': {
		ringkas:
			'Corporate & Campus Capacity Building delivers tailored training programs for organizations, universities, and professional teams.',
		detail: [
			'Needs assessment and custom curriculum design.',
			'Leadership, communication, and digital productivity modules.',
			'Flexible delivery: on-site, online, or hybrid.'
		],
		suggestions: ['Partnership', 'Consultation', 'Other Topics']
	},
	'pendidikan-talent-management': {
		ringkas:
			'Our Talent Management pillar guides individuals in discovering their potential, planning academic pathways, and preparing for career advancement.',
		detail: [
			'Academic & career pathway mapping for high school, university, and professional stages.',
			'1-on-1 mentoring and competency development.',
			'Portfolio and personal branding readiness.'
		]
	},
	'pendidikan-scholarship-academy': {
		ringkas:
			'Scholarship Academy provides end-to-end preparation from scholarship selection and document review to interview simulation.',
		detail: [
			'Scholarship matching based on academic background and goals.',
			'Essay, motivation letter, and research proposal feedback.',
			'Mock interviews with constructive evaluation.'
		]
	},
	'pendidikan-skills-certification': {
		ringkas:
			'Skills & Certification programs focus on practical competencies such as public speaking, AI productivity, and preparation toward recognized competency schemes.',
		detail: [
			'Hands-on workshops with real-world case studies.',
			'Official training completion certificates from SDJNusantara.',
			'Guidance toward accredited competency certification (such as BNSP) where applicable.'
		]
	},
	'pendidikan-partnership': {
		ringkas:
			'We collaborate with schools, campuses, communities, and organizations to expand access to quality education and talent development.',
		detail: [
			'Scholarship socialization & info sessions.',
			'Co-hosted workshops, bootcamps, and mentoring.',
			'Institutional collaboration via /kemitraan or /kontak.'
		]
	},
	'umum-profil': {
		ringkas:
			'SDJNusantara is an education consultancy and talent development partner helping individuals and institutions plan education, prepare for scholarships, build skills, and grow collaborative networks.',
		detail: [
			'Focus areas: Education Programs, Scholarship Academy, Talent Development, and Institutional Partnerships.',
			'Office: Gedung Graha Aktiva Lt. GF (suite B3A), Jl. H. R. Rasuna Said No.6, South Jakarta.',
			'Contact us via /kontak or WhatsApp +62 858-8072-4733.'
		]
	},
	'umum-cara-kerja': {
		ringkas:
			'Our mentoring process starts with an initial needs consultation, followed by profile mapping, a tailored preparation roadmap, and hands-on execution.',
		detail: [
			'Step 1: Initial consultation & goal assessment.',
			'Step 2: Personalized program or scholarship roadmap.',
			'Step 3: Intensive mentoring, document review, or training.',
			'Step 4: Evaluation & readiness review.'
		]
	},
	'umum-sasaran': {
		ringkas:
			'SDJNusantara serves high school students, university students (S1/S2/S3), fresh graduates, professionals, educators, communities, and partner institutions.',
		detail: [
			'High school students: Major mapping & undergraduate scholarship prep.',
			'University students & graduates: Postgraduate scholarships, publications, & career readiness.',
			'Professionals & institutions: Communication, AI productivity, & custom partnerships.'
		]
	},
	'umum-alur-layanan': {
		ringkas:
			'You can start by exploring our services at /layanan or scheduling an initial consultation via /kontak or WhatsApp +62 858-8072-4733.',
		detail: [
			'1. Choose a service or consultation topic.',
			'2. Submit your inquiry via the contact form or WhatsApp.',
			'3. Our consultant schedules a discovery session.',
			'4. Receive a tailored mentoring or collaboration plan.'
		]
	},
	'umum-kontak': {
		ringkas:
			'You can reach the SDJNusantara team through our contact page, email, or official consultant WhatsApp.',
		detail: [
			'Contact page: /kontak',
			'WhatsApp +62 858-8072-4733 (Mon–Fri, 08:00–17:00 WIB)',
			'Email: info@sdjnusantara.com',
			'Office: Gedung Graha Aktiva Lt. GF (suite B3A), Kuningan, South Jakarta 12950'
		]
	},
	'umum-biaya-jadwal': {
		ringkas:
			'Program fees and schedules are tailored to your specific needs, mentoring format, and scope of support.',
		detail: [
			'Detailed fee options and timelines are shared during the initial consultation.',
			'Flexible online and hybrid schedules available.',
			'Reach out via /kontak or WhatsApp +62 858-8072-4733 for a tailored quote.'
		]
	},
	'beasiswa-scholarship-academy-detail': {
		ringkas:
			'Our Scholarship Mentoring covers curated scholarship matching, document strengthening (CV, essays, proposals), and realistic interview simulations.',
		detail: [
			'Supports major domestic & international scholarships (LPDP, BPI, Chevening, Fulbright, Australia Awards, MEXT, Erasmus+, etc.).',
			'Structured timeline tracking from preparation to submission.',
			'Note: Final selection decisions rest solely with the scholarship provider.'
		]
	},
	'beasiswa-catatan-layanan': {
		ringkas:
			'SDJNusantara provides structured preparation and strategic mentoring, not scholarship funding or guaranteed admission.',
		detail: [
			'We help maximize your readiness and application quality.',
			'Always verify official deadlines and requirements on the provider’s official website.'
		]
	},
	'beasiswa-spesifik': {
		ringkas:
			'We provide curated reference guides and preparation mentoring for various government, university, and international scholarships.',
		detail: [
			'Browse active scholarship references at /layanan/beasiswa.',
			'Get 1-on-1 guidance on choosing scholarships that best fit your profile.'
		]
	},
	'beasiswa-sertifikat': {
		ringkas:
			'Participants receive an SDJNusantara training certificate, while accredited competency certificates are issued by authorized bodies such as BNSP.',
		detail: [
			'Internal training certificates document program completion.',
			'Official competency certification follows verified national assessment schemes.'
		]
	},
	'faq-sasaran-peserta': {
		ringkas:
			'No—SDJNusantara is not limited to university students. Our services are open to high schoolers, university students, fresh graduates, professionals, educators, and institutions.',
		detail: [
			'High schoolers: Major mapping & undergraduate scholarship prep.',
			'Students & graduates: Postgraduate scholarships & career readiness.',
			'Professionals & institutions: AI productivity, communication, & institutional partnerships.'
		]
	},
	'faq-penyedia-beasiswa': {
		ringkas:
			'SDJNusantara does not disburse scholarship funds directly; we act as a preparation, mentoring, and strategy partner to help you apply to official scholarship providers.',
		detail: [
			'We guide you on LPDP, BPI, Chevening, Fulbright, MEXT, Erasmus+, and other official schemes.'
		]
	},
	'faq-jaminan-lolos': {
		ringkas:
			'No consultant can ethically guarantee scholarship acceptance. Final selection is the sole authority of the scholarship provider or university.',
		detail: [
			'Our role is to help you build the strongest possible application documents and interview readiness.'
		]
	},
	'faq-layanan-daring': {
		ringkas:
			'Yes! Consultations, mentoring sessions, and workshops can be conducted fully online (via video conference) or in a hybrid format.',
		detail: [
			'Accessible across all regions in Indonesia and abroad.',
			'Schedule your session via /kontak or WhatsApp +62 858-8072-4733.'
		]
	},
	'faq-sertifikat': {
		ringkas:
			'Training participants receive a certificate of completion from SDJNusantara, and selected competency tracks prepare participants for official BNSP-accredited schemes.',
		detail: [
			'Official BNSP competency certificates are issued by authorized LSPs upon passing assessment.'
		]
	},
	'faq-cara-daftar': {
		ringkas:
			'You can register or request a consultation by filling out the form on /kontak or messaging our consultant directly on WhatsApp +62 858-8072-4733.',
		detail: [
			'Our team will respond to schedule an initial discussion and recommend the best-fit program.'
		]
	},
	'faq-layanan-institusi': {
		ringkas:
			'Yes, all training, socialization, and mentoring modules can be customized for schools, universities, communities, and corporate partners.',
		detail: [
			'Explore partnership models at /kemitraan or contact us via /kontak.'
		]
	}
};

