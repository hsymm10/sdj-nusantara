export interface ArticleEn {
	judul: string;
	kategori: string;
	tanggal: string;
	updatedAt: string;
	ringkasan: string;
	isi: string;
	penulis: string;
	sumber: string;
	kutipan?: string;
	tags?: string[];
}

export const articlesEnMap: Record<number, ArticleEn> = {
	1: {
		judul: 'Building an Inclusive Learning Environment in Schools',
		kategori: 'Education',
		tanggal: 'Oct 10, 2026',
		updatedAt: 'October 10, 2026',
		ringkasan:
			'An inclusive learning environment gives every individual an equal opportunity to grow to their full potential.',
		isi: `
			<p>Creating classrooms that welcome all learners across diverse backgrounds, strengths, and learning needs is the cornerstone of modern education.</p>
			<h3>Pillars of Inclusive Education</h3>
			<p>Inclusive education is not only about physical facilities, but also adaptive pedagogical approaches, mutual respect for diversity, and fostering empathy among learners.</p>
			<h3>The Role of Educators and Communities</h3>
			<p>Teachers and schools need continuous mentoring to design differentiated curricula that address students' individual needs effectively.</p>
		`,
		penulis: 'SDJNusantara Inclusive Education Consultant',
		sumber: 'Indonesian Journal of Pedagogy & Education Policy',
		kutipan:
			'Inclusive education is not merely about access—it is about giving every child an equal opportunity to thrive according to their potential.',
		tags: ['#InclusiveEducation', '#ChildFriendlySchool', '#StudentDevelopment']
	},
	2: {
		judul: 'Relevant Digital Skills for the Future Workplace',
		kategori: 'Digital Skills',
		tanggal: 'Oct 8, 2026',
		updatedAt: 'October 8, 2026',
		ringkasan:
			'The workplace continues to evolve, making digital skills a decisive factor in strengthening competitiveness.',
		isi: `
			<p>Digital transformation across industries requires graduates and professionals to master digital tools, data literacy, and AI-assisted workflows.</p>
			<h3>Core Digital Competencies</h3>
			<p>Beyond basic software proficiency, modern talent must understand structured prompting, digital collaboration, and ethical data analysis.</p>
		`,
		penulis: 'SDJNusantara Digital Skills Instructor',
		sumber: 'World Economic Forum - Future of Jobs Report'
	},
	3: {
		judul: 'Preparing Yourself for the Workplace After Graduation',
		kategori: 'Career & Professional',
		tanggal: 'Oct 5, 2026',
		updatedAt: 'October 5, 2026',
		ringkasan:
			'Transitioning from education to the workplace requires the right strategy so you can adapt quickly.',
		isi: `
			<p>Fresh graduates often face a gap between academic theory and industry expectations. Early career mapping and portfolio building help bridge this transition smoothly.</p>
			<h3>Practical Steps</h3>
			<p>Document project outcomes, sharpen interview communication, and seek structured mentoring before entering the job market.</p>
		`,
		penulis: 'SDJNusantara Career & Talent Advisor',
		sumber: 'Indonesia Graduate Work Readiness Survey'
	},
	4: {
		judul: 'Understanding Scholarship Types for Indonesian Students',
		kategori: 'Scholarships',
		tanggal: 'Oct 3, 2026',
		updatedAt: 'October 3, 2026',
		ringkasan:
			'Various types of scholarships are available to support education both domestically and abroad.',
		isi: `
			<p>From government-funded schemes like BPI and LPDP to international awards such as Chevening and MEXT, understanding each scheme's criteria helps applicants choose the right fit.</p>
		`,
		penulis: 'SDJNusantara Scholarship Consulting Team',
		sumber: 'Indonesia Open Scholarship Directory'
	},
	5: {
		judul: 'Collaboration Between Educational Institutions and Industry',
		kategori: 'Partnership',
		tanggal: 'Sep 30, 2026',
		updatedAt: 'September 30, 2026',
		ringkasan:
			'Strong collaboration between educational institutions and industry creates a mutually beneficial ecosystem.',
		isi: `
			<p>Strategic alignment between campuses, schools, and industry partners ensures curricula remain relevant and opens real-world talent pipelines.</p>
		`,
		penulis: 'SDJNusantara Partnership Division',
		sumber: 'Education & Industry Partnership Forum Report'
	},
	6: {
		judul: 'The Importance of Mentoring in Young Talent Development',
		kategori: 'Talent Development',
		tanggal: 'Sep 27, 2026',
		updatedAt: 'September 27, 2026',
		ringkasan:
			'Mentoring helps individuals unlock their potential, expand networks, and prepare for a more mature career.',
		isi: `
			<p>Structured mentoring accelerates self-awareness, goal clarity, and professional readiness through direct feedback from experienced practitioners.</p>
		`,
		penulis: 'SDJNusantara Lead Mentor',
		sumber: 'Youth Talent Mentoring Effectiveness Study'
	},
	7: {
		judul: 'Scholarship Preparation Strategies for Studying Abroad',
		kategori: 'Scholarships',
		tanggal: 'Oct 12, 2026',
		updatedAt: 'October 12, 2026',
		ringkasan:
			'Scholarship preparation requires careful planning—from choosing a program and preparing documents to interview practice. This article covers strategic steps to help you seize opportunities at overseas universities.',
		isi: `
			<p>Securing an international scholarship starts 6–12 months before deadlines with clear university shortlisting, language certification, and compelling personal narratives.</p>
			<h3>Key Preparation Pillars</h3>
			<p>Align your academic track record, social impact story, and post-study contribution plan with the sponsor's mission.</p>
		`,
		penulis: 'SDJNusantara Scholarship Consulting Team',
		sumber: 'SDJNusantara Education Research & Insight'
	},
	8: {
		judul: 'A Practical Guide to Acing Prestigious Scholarship Interviews',
		kategori: 'Scholarships',
		tanggal: 'Oct 11, 2026',
		updatedAt: 'October 11, 2026',
		ringkasan:
			'Master effective communication techniques and deliver a convincing contribution vision before international scholarship panels.',
		isi: `
			<p>Scholarship interviews evaluate authenticity, clarity of purpose, leadership resilience, and alignment between your study plan and future impact.</p>
		`,
		penulis: 'SDJNusantara Mentoring Team',
		sumber: 'SDJNusantara Internal Assessment Data'
	},
	9: {
		judul: 'The Future of Adaptive Learning in the Age of Artificial Intelligence',
		kategori: 'Digital Skills',
		tanggal: 'Oct 10, 2026',
		updatedAt: 'October 10, 2026',
		ringkasan:
			'Exploring modern pedagogical methodologies that leverage digital technology to improve knowledge transfer effectiveness.',
		isi: `
			<p>Adaptive learning tools powered by AI enable educators to personalize pacing and feedback while preserving critical thinking and academic integrity.</p>
		`,
		penulis: 'SDJNusantara Education Innovation Division',
		sumber: 'Ministry of Education & World Economic Forum Report'
	},
	10: {
		judul: 'Building a Professional Portfolio During University Years',
		kategori: 'Career & Professional',
		tanggal: 'Oct 9, 2026',
		updatedAt: 'October 9, 2026',
		ringkasan:
			'Strategic steps for students to turn campus organization and internship experiences into competitive advantages in the job market.',
		isi: `
			<p>A well-curated portfolio translates coursework, leadership roles, and internships into measurable proof of capability for employers and selection committees.</p>
		`,
		penulis: 'SDJNusantara Career Development Consultant',
		sumber: 'SDJNusantara Career Development Center'
	},
	11: {
		judul: 'Tips for Building a Strong Scholarship Portfolio',
		kategori: 'Scholarships',
		tanggal: 'Oct 5, 2026',
		updatedAt: 'October 5, 2026',
		ringkasan:
			'A systematic portfolio structure helps reviewers understand a scholarship candidate’s leadership track record and academic dedication.',
		isi: `
			<p>Highlight verified achievements, community impact, and research outputs clearly so reviewers can immediately grasp your readiness.</p>
		`,
		penulis: 'SDJNusantara Scholarship Specialist Team',
		sumber: 'SDJNusantara Scholarship Research Center'
	},
	12: {
		judul: 'The Role of Soft Skills in Modern Education',
		kategori: 'Talent Development',
		tanggal: 'Sep 28, 2026',
		updatedAt: 'September 28, 2026',
		ringkasan:
			'Communication, leadership, and complex problem-solving skills are now primary indicators of young talent success.',
		isi: `
			<p>Technical knowledge alone is no longer sufficient; adaptability, empathy, and teamwork distinguish high-performing learners and professionals.</p>
		`,
		penulis: 'SDJNusantara Talent Consultant',
		sumber: 'OECD Future of Education and Skills'
	},
	13: {
		judul: 'Career Opportunities in the Digital Education Industry',
		kategori: 'Career & Professional',
		tanggal: 'Sep 20, 2026',
		updatedAt: 'September 20, 2026',
		ringkasan:
			'The growth of edtech opens new career paths ranging from instructional designer to online learning consultant.',
		isi: `
			<p>As digital learning expands, educators and tech-savvy graduates can build impactful careers designing curricula, learning platforms, and hybrid training programs.</p>
		`,
		penulis: 'SDJNusantara Career Research',
		sumber: 'EdTech Asia Market Overview'
	},
	14: {
		judul: 'School and Industry Collaboration for Talent Development',
		kategori: 'Partnership',
		tanggal: 'Sep 12, 2026',
		updatedAt: 'September 12, 2026',
		ringkasan:
			'A strategic partnership model bridging vocational and academic curricula with up-to-date industry competency standards.',
		isi: `
			<p>Co-designed workshops, guest practitioner sessions, and competency assessments help schools prepare students for real industry standards.</p>
		`,
		penulis: 'SDJNusantara Partnership Division',
		sumber: 'SDJNusantara Industry Partnerships'
	},
	15: {
		judul: 'Developing Data Literacy for Strategic Decision-Making',
		kategori: 'Digital Skills',
		tanggal: 'Sep 10, 2026',
		updatedAt: 'September 10, 2026',
		ringkasan:
			'Understanding quantitative and qualitative data analysis is now an essential skill across industries and institutions.',
		isi: `
			<p>Data literacy empowers educators, researchers, and managers to interpret evidence accurately and make accountable strategic decisions.</p>
		`,
		penulis: 'SDJNusantara Data & Analytics Instructor',
		sumber: 'Data Literacy Index 2026'
	},
	16: {
		judul: 'The Role of Campus Incubation Ecosystems in Fostering Entrepreneurial Talent',
		kategori: 'Talent Development',
		tanggal: 'Sep 8, 2026',
		updatedAt: 'September 8, 2026',
		ringkasan:
			'Facilities, seed support, and mentor guidance transform innovative student ideas into productive early-stage ventures.',
		isi: `
			<p>Campus incubators connect student innovators with mentors, validation frameworks, and industry partners to turn prototypes into sustainable initiatives.</p>
		`,
		penulis: 'SDJNusantara Talent & Innovation Consultant',
		sumber: 'National Youth Entrepreneurship Report'
	},
	17: {
		judul: 'Winning Strategies to Obtain an Unconditional LoA from Top Global Universities',
		kategori: 'Scholarships',
		tanggal: 'Sep 4, 2026',
		updatedAt: 'September 4, 2026',
		ringkasan:
			'Tactical steps for drafting a study plan, corresponding with prospective supervisors, and meeting top university requirements.',
		isi: `
			<p>Securing an Unconditional Letter of Acceptance requires early preparation of academic transcripts, language scores, and tailored research proposals.</p>
		`,
		penulis: 'SDJNusantara Overseas Study Consulting Team',
		sumber: 'SDJNusantara Global Study & Scholarship Guide'
	},
	18: {
		judul: 'Aligning Vocational Curricula with Industry 4.0 Dynamics',
		kategori: 'Partnership',
		tanggal: 'Sep 1, 2026',
		updatedAt: 'September 1, 2026',
		ringkasan:
			'Synchronizing national occupational competency standards with real market needs ensures graduates are immediately ready to contribute.',
		isi: `
			<p>Continuous curriculum review alongside industry associations ensures vocational graduates possess relevant, certifiable competencies.</p>
		`,
		penulis: 'SDJNusantara Vocational Partnership Division',
		sumber: 'National Vocational Partnership Study'
	},
	19: {
		judul: '5 Tips for Successfully Winning an Overseas Scholarship',
		kategori: 'Scholarships',
		tanggal: 'Jan 20, 2025',
		updatedAt: 'January 20, 2025',
		ringkasan:
			'Winning an overseas scholarship is a dream for many students. Here are 5 essential tips to boost your chances in international selection.',
		isi: `
			<p>Start early, research target programs thoroughly, craft an authentic essay, secure strong recommendation letters, and practice mock interviews consistently.</p>
		`,
		penulis: 'SDJNusantara Scholarship Consulting Team',
		sumber: 'SDJNusantara International Scholarship Preparation Guide'
	},
	20: {
		judul: 'Global Education Trends in 2025',
		kategori: 'Education',
		tanggal: 'Jan 18, 2025',
		updatedAt: 'January 18, 2025',
		ringkasan:
			'The global education sector continues to transform alongside rapid advances in artificial intelligence and interdisciplinary learning.',
		isi: `
			<p>Micro-credentials, AI literacy, and cross-border academic collaboration are reshaping how institutions prepare learners for global challenges.</p>
		`,
		penulis: 'SDJNusantara Education Research & Development Team',
		sumber: 'Global Education Transformation Study 2025'
	},
	21: {
		judul: 'How to Increase Your Competitiveness in the Job Market',
		kategori: 'Career & Professional',
		tanggal: 'Jan 15, 2025',
		updatedAt: 'January 15, 2025',
		ringkasan:
			'Modern labor markets demand professionals with high adaptability and a proven portfolio of competencies.',
		isi: `
			<p>Combine continuous upskilling, recognized certifications, and clear communication of measurable achievements to stand out in competitive hiring.</p>
		`,
		penulis: 'SDJNusantara Career Development Consultant',
		sumber: 'SDJNusantara Talent & Career Observatory'
	},
	22: {
		judul: 'The Importance of Soft Skills in the Digital Era',
		kategori: 'Talent Development',
		tanggal: 'Jan 10, 2025',
		updatedAt: 'January 10, 2025',
		ringkasan:
			'Empathy, leadership, critical thinking, and emotional intelligence remain key differentiators for high-performing talent in the era of automation.',
		isi: `
			<p>As routine tasks become automated, human-centric skills—ethical judgment, collaboration, and persuasive communication—grow even more valuable.</p>
		`,
		penulis: 'SDJNusantara Talent Development Division',
		sumber: 'Indonesia Digital Talent Competency Report'
	}
};

