// src/lib/data/chatWebsiteIndex.ts
// Indeks Konten Website SDJNusantara Terpusat sebagai Single Source of Truth Chatbot
// Mencakup 10 Topik Utama Website dalam Bahasa Indonesia dan English

import { serviceConfig } from '#lib/config/services';

export interface WebsiteSubpage {
	url: string;
	title: { id: string; en: string };
	desc: { id: string; en: string };
}

export interface WebsiteTopicIndex {
	id: string;
	title: { id: string; en: string };
	url: string;
	subpages: WebsiteSubpage[];
	keywords: string[];
	overview: { id: string; en: string };
	bullets: { id: string[]; en: string[] };
	detailedPoints: { id: string[]; en: string[] };
	relatedTopics: string[]; // Topic IDs for suggestion chips
}

export const websiteTopicIndex: WebsiteTopicIndex[] = [
	// 1. Tentang Kami
	{
		id: 'tentang-kami',
		title: {
			id: 'Tentang Kami (Profil & Pimpinan)',
			en: 'About Us (Profile & Leadership)'
		},
		url: '/tentang-kami',
		subpages: [
			{
				url: '/tentang-kami#visi-misi',
				title: { id: 'Visi & Misi', en: 'Vision & Mission' },
				desc: {
					id: 'Visi menjadi konsultan strategis terpercaya dalam membangun ekosistem talenta unggul dan berdaya saing global.',
					en: 'Vision to become a trusted strategic consultant building a competitive global talent ecosystem.'
				}
			},
			{
				url: '/tentang-kami#pimpinan',
				title: { id: 'Dewan Pimpinan & Penasihat', en: 'Leadership & Senior Advisors' },
				desc: {
					id: 'Profil pimpinan: Muhammad Setiawan S Dj (President Director), Mayjen TNI (Purn) Dr. Dr. Ir. Pujo Widodo, S.E., S.H., S.T., M.A., M.D.S., M.Si., M.Si (Han). (Senior Advisor), Dr. Devi Erna Rachmawati, S.E., M.B.A., Ph.D. (Senior Advisor), dan Hanif Hidayatullah, S.Hum., M.A (Director of Education).',
					en: 'Leadership: Muhammad Setiawan S Dj (President Director), Maj. Gen. (Ret.) Dr. Dr. Ir. Pujo Widodo (Senior Advisor), Dr. Devi Erna Rachmawati (Senior Advisor), and Hanif Hidayatullah (Director of Education).'
				}
			}
		],
		keywords: [
			'tentang', 'kami', 'profil', 'perusahaan', 'lembaga', 'visi', 'misi', 'sejarah',
			'pimpinan', 'direktur', 'founder', 'pendiri', 'advisor', 'penasihat', 'setiawan',
			'pujo', 'widodo', 'devi', 'erna', 'rachmawati', 'hanif', 'hidayatullah', 'legalitas',
			'about', 'us', 'profile', 'company', 'organization', 'vision', 'mission', 'leadership',
			'director', 'president', 'advisors', 'board', 'who'
		],
		overview: {
			id: 'Halaman Tentang Kami memuat profil lengkap PT Sampurna Djaya Nusantara (SDJNusantara), visi, misi, nilai strategis, serta profil dewan pimpinan dan penasihat senior multidisiplin.',
			en: 'The About Us page presents the comprehensive profile of PT Sampurna Djaya Nusantara (SDJNusantara), vision, mission, strategic values, and multidisciplinary senior leadership.'
		},
		bullets: {
			id: [
				'Konsultan pendidikan, persiapan beasiswa, dan pengembangan talenta di Indonesia.',
				'Visi: Menjadi mitra strategis terpercaya dalam akselerasi potensi dan daya saing sumber daya manusia.',
				'Misi: Menghadirkan pendampingan pendidikan berkualitas, membuka akses beasiswa, dan menjembatani kolaborasi institusi.',
				'Dewan Pimpinan: Muhammad Setiawan S Dj (President Director), Mayjen TNI (Purn) Dr. Dr. Ir. Pujo Widodo (Senior Advisor — Strategic Affairs), Dr. Devi Erna Rachmawati (Senior Advisor — Business Development), Hanif Hidayatullah (Director of Education).'
			],
			en: [
				'Education, scholarship preparation, and talent development consultancy based in Indonesia.',
				'Vision: To be a trusted strategic partner accelerating human potential and global competitiveness.',
				'Mission: Delivering high-quality educational mentoring, expanding scholarship pathways, and bridging institutional collaboration.',
				'Leadership Board: Muhammad Setiawan S Dj (President Director), Maj. Gen. (Ret.) Dr. Dr. Ir. Pujo Widodo (Senior Advisor — Strategic Affairs), Dr. Devi Erna Rachmawati (Senior Advisor — Business Development), Hanif Hidayatullah (Director of Education).'
			]
		},
		detailedPoints: {
			id: [
				'Pendekatan multidisiplin menggabungkan kebijakan publik, pendidikan tinggi, psikologi, dan strategi.',
				'Memiliki jejaring kelembagaan kuat di tingkat nasional dan internasional.',
				'Berkomitmen memberikan pendampingan yang beretika, terstruktur, dan berorientasi hasil.'
			],
			en: [
				'Multidisciplinary approach integrating public policy, higher education, psychology, and strategy.',
				'Strong institutional network across national and international educational ecosystems.',
				'Committed to ethical, structured, and results-driven mentoring.'
			]
		},
		relatedTopics: ['layanan', 'program-pendidikan', 'kemitraan', 'kontak']
	},

	// 2. Layanan (Overview)
	{
		id: 'layanan',
		title: {
			id: 'Layanan Utama SDJNusantara',
			en: 'SDJNusantara Core Services'
		},
		url: '/layanan',
		subpages: [
			{
				url: '/layanan/pendidikan',
				title: { id: 'Program Pendidikan & Talenta', en: 'Education & Talent Programs' },
				desc: {
					id: 'Pelatihan intensif, sertifikasi kompetensi, lokakarya AI & produktivitas digital, serta pemetaan potensi talenta.',
					en: 'Intensive training, competency certification, AI & digital productivity workshops, and talent mapping.'
				}
			},
			{
				url: '/layanan/beasiswa',
				title: { id: 'Pendampingan Beasiswa', en: 'Scholarship Mentoring' },
				desc: {
					id: 'Mentoring persiapan beasiswa dalam dan luar negeri (LPDP, BPI, Chevening, Fulbright, dsb.), review esai, dan simulasi wawancara.',
					en: 'Domestic and international scholarship mentoring (LPDP, BPI, Chevening, Fulbright, etc.), essay reviews, and mock interviews.'
				}
			}
		],
		keywords: [
			'layanan', 'fitur', 'produk', 'menu', 'jasa', 'apa saja', 'daftar layanan',
			'services', 'service', 'features', 'offerings', 'overview', 'core', 'what'
		],
		overview: {
			id: 'Halaman Layanan menyajikan gambaran dua pilar utama SDJNusantara saat ini: Program Pendidikan dan Beasiswa, yang dirancang untuk individu, sekolah, perguruan tinggi, dan korporasi.',
			en: 'The Services page provides an overview of SDJNusantara’s two active core pillars: Education Programs and Scholarships, tailored for individuals, schools, universities, and corporations.'
		},
		bullets: {
			id: [
				'Program Pendidikan: Pelatihan intensif, sertifikasi, akselerator talenta, dan lokakarya AI praktis.',
				'Pendampingan Beasiswa: Kurasi dokumen, perbaikan esai/CV, dan simulasi wawancara beasiswa terarah.',
				'Dirancang untuk berbagai segmen: pelajar, mahasiswa, fresh graduate, tenaga pendidik, dan institusi.',
				'Konsultasi kebutuhan awal dapat diajukan secara langsung melalui halaman /kontak.'
			],
			en: [
				'Education Programs: Intensive training, certification, talent acceleration, and practical AI workshops.',
				'Scholarship Mentoring: Document curation, essay/CV refinement, and structured mock interviews.',
				'Tailored for students, fresh graduates, educators, academic institutions, and corporate teams.',
				'Initial consultation requests can be submitted directly via /kontak.'
			]
		},
		detailedPoints: {
			id: [
				'Setiap program dapat disesuaikan dengan kebutuhan individu maupun kurikulum khusus institusi.',
				'Fasilitator dan mentor berpengalaman dengan rekam jejak akademik dan profesional teruji.'
			],
			en: [
				'All programs are adaptable to individual needs or institutional training agendas.',
				'Delivered by experienced mentors with proven academic and professional track records.'
			]
		},
		relatedTopics: ['program-pendidikan', 'beasiswa', 'kemitraan', 'kontak']
	},

	// 3. Program Pendidikan
	{
		id: 'program-pendidikan',
		title: {
			id: 'Program Pendidikan & Akselerasi Talenta',
			en: 'Education & Talent Acceleration Programs'
		},
		url: '/layanan/pendidikan',
		subpages: [
			{
				url: '/layanan/pendidikan/program/talent-accelerator',
				title: { id: 'Talent Accelerator', en: 'Talent Accelerator' },
				desc: {
					id: 'Pemetaan potensi, kesiapan karier profesional, dan penyusunan portofolio unggul.',
					en: 'Potential mapping, career readiness coaching, and competitive portfolio development.'
				}
			},
			{
				url: '/layanan/pendidikan/program/ai-digital-productivity',
				title: { id: 'AI & Digital Productivity', en: 'AI & Digital Productivity' },
				desc: {
					id: 'Pemanfaatan kecerdasan buatan etis dan praktis untuk riset akademik dan produktivitas kerja.',
					en: 'Practical and ethical artificial intelligence workflows for academic research and workplace productivity.'
				}
			},
			{
				url: '/layanan/pendidikan/program/corporate-campus',
				title: { id: 'Corporate & Campus Capacity Building', en: 'Corporate & Campus Capacity Building' },
				desc: {
					id: 'Pelatihan in-house terstruktur untuk peningkatan kapasitas staf institusi dan korporasi.',
					en: 'Structured in-house capacity-building training for institutions and enterprise teams.'
				}
			},
			{
				url: '/layanan/pendidikan/program/partnership-services',
				title: { id: 'Institutional Partnership Services', en: 'Institutional Partnership Services' },
				desc: {
					id: 'Program kolaboratif sosialisasi beasiswa dan klinik akademik bersama sekolah dan kampus.',
					en: 'Collaborative scholarship clinics and academic readiness seminars with partner schools and campuses.'
				}
			}
		],
		keywords: [
			'pendidikan', 'program', 'pelatihan', 'kursus', 'bootcamp', 'workshop', 'seminar',
			'talenta', 'talent', 'accelerator', 'ai', 'digital', 'produktivitas', 'sertifikat',
			'sertifikasi', 'sekolah', 'kampus', 'korporat', 'kapasitas', 'edukasi', 'kurikulum',
			'education', 'programs', 'training', 'courses', 'skills', 'productivity', 'learning'
		],
		overview: {
			id: 'Halaman Program Pendidikan menyediakan rangkaian pelatihan keahlian, akselerasi talenta, lokakarya AI produktif, serta peningkatan kapasitas kelembagaan.',
			en: 'The Education Programs page offers skill training, talent acceleration, practical AI workshops, and institutional capacity-building programs.'
		},
		bullets: {
			id: [
				'Talent Accelerator: Bimbingan karier, pemetaan kompetensi, dan penguatan portofolio profesional.',
				'AI & Digital Productivity: Pemanfaatan AI untuk riset, penulisan akademik, dan otomatisasi kerja.',
				'Corporate & Campus Capacity Building: Pelatihan khusus yang disesuaikan dengan kebutuhan tim/institusi.',
				'Format fleksibel: Tatap muka (luring), interaktif online (daring), maupun hibrida.'
			],
			en: [
				'Talent Accelerator: Career coaching, competency mapping, and professional portfolio building.',
				'AI & Digital Productivity: Leveraging AI for academic research, writing, and workplace automation.',
				'Corporate & Campus Capacity Building: Custom training aligned with organizational development goals.',
				'Flexible formats: In-person offline, interactive online, or hybrid cohorts.'
			]
		},
		detailedPoints: {
			id: [
				'Setiap peserta mendapatkan pendampingan terarah dan evaluasi capaian belajar.',
				'Tersedia sertifikat kelulusan program resmi dari SDJNusantara.'
			],
			en: [
				'Participants receive structured mentorship and practical skill evaluations.',
				'Official completion certificates issued by SDJNusantara upon program requirements.'
			]
		},
		relatedTopics: ['beasiswa', 'layanan', 'kemitraan', 'kontak']
	},

	// 4. Beasiswa
	{
		id: 'beasiswa',
		title: {
			id: 'Pendampingan Persiapan Beasiswa',
			en: 'Scholarship Preparation Mentoring'
		},
		url: '/layanan/beasiswa',
		subpages: [
			{
				url: '/layanan/pendidikan/beasiswa/scholarship-academy',
				title: { id: 'Scholarship Academy', en: 'Scholarship Academy' },
				desc: {
					id: 'Program intensif bimbingan beasiswa dalam dan luar negeri dari pemetaan profil hingga simulasi wawancara.',
					en: 'Intensive scholarship mentoring program from profile mapping to mock interview drills.'
				}
			}
		],
		keywords: [
			'beasiswa', 'scholarship', 'scholarships', 'lpdp', 'bpi', 'chevening', 'fulbright',
			'aas', 'australia', 'awards', 'erasmus', 'studi', 'kuliah', 's1', 's2', 's3',
			'magister', 'doktor', 'sarjana', 'esai', 'essay', 'motivation', 'letter', 'cv',
			'wawancara', 'interview', 'dokumen', 'proposal', 'rekomendasi', 'bimbingan'
		],
		overview: {
			id: 'Halaman Beasiswa menyajikan informasi lengkap pendampingan beasiswa bergengsi dalam dan luar negeri, panduan seleksi, kurasi dokumen, dan simulasi wawancara.',
			en: 'The Scholarships page provides detailed guidance for competitive domestic and international scholarships, document curation, and interview simulations.'
		},
		bullets: {
			id: [
				'Mencakup beasiswa bergengsi: LPDP, BPI, Chevening, Fulbright, Australia Awards (AAS), Erasmus+, dan beasiswa universitas global.',
				'Pemetaan profil kandidat dan rekomendasi program beasiswa yang paling realistis serta sesuai target.',
				'Review intensif substansi CV, personal statement, motivation letter, dan proposal studi/riset.',
				'Simulasi wawancara mendalam dengan umpan balik terstruktur bersama mentor penerima beasiswa.',
				'SDJNusantara mendampingi persiapan teknis dan substansi (tidak menjamin kelulusan mutlak karena wewenang ada pada komite seleksi resmi).'
			],
			en: [
				'Covers prestigious schemes: LPDP, BPI, Chevening, Fulbright, AAS, Erasmus+, and global university grants.',
				'Profile evaluation and curated scholarship targeting matched to academic and career aspirations.',
				'In-depth review of CV, personal statements, motivation letters, and research proposals.',
				'Realistic mock interview drills with structured feedback from experienced scholarship alumni.',
				'Focuses strictly on substantive readiness and high-standard applications (final selection remains with official panels).'
			]
		},
		detailedPoints: {
			id: [
				'Tersedia pendampingan 1-on-1 privat maupun kelas intensif kelompok kecil.',
				'Jadwal konsultasi disesuaikan dengan linimasa pendaftaran beasiswa yang Anda tuju.'
			],
			en: [
				'Available in 1-on-1 private mentoring and small intensive cohort formats.',
				'Schedules are aligned with active scholarship application deadlines.'
			]
		},
		relatedTopics: ['program-pendidikan', 'layanan', 'artikel', 'kontak']
	},

	// 5. Kemitraan
	{
		id: 'kemitraan',
		title: {
			id: 'Kemitraan & Kerja Sama Strategis',
			en: 'Strategic Partnerships & Collaboration'
		},
		url: '/kemitraan',
		subpages: [
			{
				url: '/kemitraan#skema',
				title: { id: 'Skema Kolaborasi', en: 'Collaboration Schemes' },
				desc: {
					id: 'MoU institusi pendidikan, sosialisasi beasiswa bersama, workshop peningkatan kapasitas guru/dosen, dan kemitraan CSR.',
					en: 'Institutional MoUs, joint scholarship clinics, educator capacity workshops, and CSR partnerships.'
				}
			},
			{
				url: '/kemitraan#target',
				title: { id: 'Target Program Tahun 2027', en: 'Year 2027 Program Targets' },
				desc: {
					id: 'Target tahun 2027: 200+ Pemetaan Talenta, 30 Kegiatan Sosialisasi Beasiswa, 100 Peserta Coaching Intensif, dan 50+ Mitra Strategis Dalam & Luar Negeri.',
					en: '2027 targets: 200+ talent mappings, 30 scholarship outreach events, 100 coaching participants, and 50+ domestic & international partners.'
				}
			},
			{
				url: '/kemitraan#alur',
				title: { id: 'Alur Kerja Sama', en: 'Partnership Process' },
				desc: {
					id: '4 tahapan kerja sama: Konsultasi Awal → Penyusunan Kerangka Acuan / MoU → Pelaksanaan Program → Evaluasi & Laporan Dampak.',
					en: '4 collaboration phases: Initial Consultation → Framework/MoU Drafting → Program Execution → Impact Evaluation.'
				}
			}
		],
		keywords: [
			'kemitraan', 'kerja', 'sama', 'kolaborasi', 'mitra', 'mou', 'institusi', 'perusahaan',
			'sekolah', 'universitas', 'kampus', 'target', '2027', '50+', 'alur', 'skema', 'csr',
			'partnership', 'partnerships', 'partner', 'collaboration', 'collaborate', 'institutional'
		],
		overview: {
			id: 'Halaman Kemitraan memuat informasi skema kolaborasi strategis dengan sekolah, perguruan tinggi, korporasi, lembaga donor, serta target capaian program tahun 2027.',
			en: 'The Partnership page details collaboration models with educational institutions, enterprises, and donors, alongside 2027 program targets.'
		},
		bullets: {
			id: [
				'Target Program Tahun 2027: 200+ Pemetaan Talenta, 30 Kegiatan Sosialisasi Beasiswa, 100 Peserta Coaching Intensif, dan 50+ Mitra Strategis dalam dan luar negeri.',
				'Skema Kemitraan: Bimbingan beasiswa bersama, pelatihan guru/dosen, lokakarya AI kelembagaan, dan penyaluran program CSR.',
				'Alur Kerja Sama: Konsultasi Kebutuhan → Pembahasan Kerangka Kerja & MoU → Pelaksanaan → Evaluasi Dampak.',
				'Pengajuan kerja sama dapat dilakukan melalui formulir di /kontak atau email resmi info@sdjnusantara.com.'
			],
			en: [
				'Year 2027 Program Targets: 200+ talent mappings, 30 scholarship socialization sessions, 100 coaching participants, and 50+ domestic and international partners.',
				'Collaboration Schemes: Joint scholarship clinics, educator upskilling, institutional AI workshops, and CSR talent initiatives.',
				'Workflow: Needs Discussion → MoU / Scope Drafting → Program Implementation → Impact Assessment.',
				'Submit inquiries via the /kontak form or direct email to info@sdjnusantara.com.'
			]
		},
		detailedPoints: {
			id: [
				'Tim kemitraan menindaklanjuti permohonan kerja sama dalam 1–2 hari kerja operasional.',
				'Tersedia pendampingan kustomisasi program sesuai kebutuhan spesifik pemangku kepentingan.'
			],
			en: [
				'Our partnerships team responds to proposals within 1–2 business days.',
				'Customized program tailoring available to address institutional objectives.'
			]
		},
		relatedTopics: ['program-pendidikan', 'layanan', 'kontak', 'faq']
	},

	// 6. Artikel & Wawasan
	{
		id: 'artikel',
		title: {
			id: 'Artikel & Wawasan Pendidikan',
			en: 'Articles & Educational Insights'
		},
		url: '/artikel',
		subpages: [
			{
				url: '/artikel?kategori=beasiswa',
				title: { id: 'Artikel Kategori Beasiswa', en: 'Scholarship Articles' },
				desc: {
					id: 'Panduan menulis esai beasiswa, strategi lolos wawancara, dan kurasi dokumen studi.',
					en: 'Scholarship essay guides, interview strategies, and application curation.'
				}
			},
			{
				url: '/artikel?kategori=pendidikan',
				title: { id: 'Artikel Kategori Pendidikan & Karier', en: 'Education & Career Articles' },
				desc: {
					id: 'Wawasan transformasi pendidikan, pengembangan kompetensi talenta muda, dan etika AI.',
					en: 'Educational transformation insights, talent competency trends, and ethical AI in academia.'
				}
			}
		],
		keywords: [
			'artikel', 'wawasan', 'berita', 'tips', 'panduan', 'bacaan', 'tulisan', 'blog',
			'publikasi', 'informasi', 'esai', 'studi', 'literasi',
			'articles', 'article', 'insights', 'blog', 'read', 'guides', 'news', 'publications'
		],
		overview: {
			id: 'Halaman Artikel & Wawasan menyajikan kumpulan panduan praktis, strategi beasiswa, tips pengembangan karier, dan wawasan inovasi pendidikan terkini.',
			en: 'The Articles & Insights page curates practical guides, scholarship blueprints, career development advice, and educational innovation trends.'
		},
		bullets: {
			id: [
				'Ditulis dan dikurasi langsung oleh mentor serta praktisi pendidikan SDJNusantara.',
				'Mencakup topik strategi beasiswa (panduan esai, persiapan wawancara), pengembangan karier, dan pemanfaatan AI produktif.',
				'Dapat diakses secara gratis oleh seluruh pengunjung dan pencari beasiswa.',
				'Diperbarui secara berkala mengikuti perkembangan informasi dan linimasa beasiswa.'
			],
			en: [
				'Authored and curated by SDJNusantara mentors and seasoned education practitioners.',
				'Covers scholarship tactics (essay blueprints, interview mastery), career roadmaps, and practical AI.',
				'Freely accessible to all visitors, students, and scholarship applicants.',
				'Continuously updated with fresh insights and application intake schedules.'
			]
		},
		detailedPoints: {
			id: [
				'Setiap artikel dilengkapi tips terapan yang dapat langsung dipraktikkan.',
				'Tersedia fitur pencarian dan penyaringan berdasarkan topik yang relevan.'
			],
			en: [
				'Every article delivers actionable tips ready for immediate application.',
				'Includes search and category filters for efficient topic browsing.'
			]
		},
		relatedTopics: ['beasiswa', 'program-pendidikan', 'faq', 'kontak']
	},

	// 7. Kontak & Konsultasi
	{
		id: 'kontak',
		title: {
			id: 'Kontak & Layanan Konsultasi',
			en: 'Contact & Consultation Services'
		},
		url: '/kontak',
		subpages: [
			{
				url: '/kontak#form',
				title: { id: 'Formulir Konsultasi', en: 'Consultation Form' },
				desc: {
					id: 'Formulir terpadu untuk pengajuan konsultasi program pendidikan, beasiswa, dan kemitraan.',
					en: 'Integrated form to submit inquiries for education programs, scholarships, and institutional partnerships.'
				}
			},
			{
				url: '/kontak#info',
				title: { id: 'Saluran Resmi & Jam Operasional', en: 'Official Channels & Hours' },
				desc: {
					id: 'WhatsApp +62 858-8072-4733, Email info@sdjnusantara.com, Operasional: Senin – Jumat 08.00 – 17.00 WIB.',
					en: 'WhatsApp +62 858-8072-4733, Email info@sdjnusantara.com, Hours: Monday – Friday 08:00 – 17:00 WIB.'
				}
			}
		],
		keywords: [
			'kontak', 'hubungi', 'konsultasi', 'whatsapp', 'wa', 'nomor', 'telepon', 'email',
			'alamat', 'kantor', 'jam', 'operasional', 'senin', 'jumat', 'tanya', 'diskusi',
			'contact', 'reach', 'consultation', 'phone', 'mail', 'hours', 'office', 'talk'
		],
		overview: {
			id: 'Halaman Kontak memuat formulir konsultasi terpadu, alamat operasional, jam kerja representatif, serta akses langsung WhatsApp dan email resmi SDJNusantara.',
			en: 'The Contact page features our official consultation form, operating hours, office details, and direct access to WhatsApp and email.'
		},
		bullets: {
			id: [
				'WhatsApp Resmi: +62 858-8072-4733 (layanan chat & informasi program).',
				'Email Resmi: info@sdjnusantara.com (administrasi, proposal, & kemitraan).',
				'Jam Operasional: Senin – Jumat, 08.00 – 17.00 WIB (hari kerja).',
				'Formulir konsultasi online tersedia 24 jam untuk pengajuan pesan dan kebutuhan program.'
			],
			en: [
				'Official WhatsApp: +62 858-8072-4733 (chat and program information).',
				'Official Email: info@sdjnusantara.com (administrative inquiries & proposals).',
				'Operating Hours: Monday – Friday, 08:00 – 17:00 WIB (business days).',
				'Online consultation form accessible 24/7 for inquiries and program requests.'
			]
		},
		detailedPoints: {
			id: [
				'Pertanyaan yang masuk melalui formulir dan pesan WhatsApp akan direspons oleh tim konsultan dalam 1 hari kerja.',
				'Konsultasi dapat diselenggarakan secara daring (online meeting) maupun pertemuan langsung dengan perjanjian.'
			],
			en: [
				'Inquiries via form or WhatsApp are addressed by consultants within 1 business day.',
				'Consultations can be conducted via online video calls or scheduled in-person meetings.'
			]
		},
		relatedTopics: ['layanan', 'kemitraan', 'faq', 'tentang-kami']
	},

	// 8. FAQ
	{
		id: 'faq',
		title: {
			id: 'Pertanyaan yang Sering Diajukan (FAQ)',
			en: 'Frequently Asked Questions (FAQ)'
		},
		url: '/faq',
		subpages: [
			{
				url: '/faq#umum',
				title: { id: 'FAQ Umum & Layanan', en: 'General & Service FAQ' },
				desc: {
					id: 'Pertanyaan seputar cakupan layanan, target peserta, dan format pelaksanaan program.',
					en: 'Questions regarding service scope, eligible audiences, and program delivery formats.'
				}
			},
			{
				url: '/faq#beasiswa',
				title: { id: 'FAQ Beasiswa & Kemitraan', en: 'Scholarship & Partnership FAQ' },
				desc: {
					id: 'Informasi kebijakan seleksi beasiswa, tata kelola, dan proses pengajuan kerja sama institusi.',
					en: 'Details on scholarship coaching policies, governance, and institutional collaboration.'
				}
			}
		],
		keywords: [
			'faq', 'tanya', 'jawab', 'pertanyaan', 'sering', 'diajukan', 'bantuan', 'kebijakan',
			'jaminan', 'daring', 'online', 'siapa', 'durasi', 'biaya',
			'questions', 'answers', 'frequently', 'help', 'policy', 'guarantee', 'duration', 'fees'
		],
		overview: {
			id: 'Halaman FAQ mengumpulkan jawaban terstruktur atas pertanyaan umum mengenai layanan pendidikan, pendampingan beasiswa, format online/offline, dan kerja sama.',
			en: 'The FAQ page compiles structured answers to common questions about education programs, scholarship mentoring, delivery formats, and partnerships.'
		},
		bullets: {
			id: [
				'Apakah layanan hanya untuk sekolah? Tidak, kami melayani individu, mahasiswa, profesional, sekolah, kampus, dan korporat.',
				'Apakah tersedia bimbingan online? Ya, seluruh program mentoring dan pelatihan dapat diakses secara online interaktif dari seluruh Indonesia.',
				'Apakah ada jaminan kelulusan beasiswa? Tidak ada jaminan kelulusan mutlak; kami fokus memaksimalkan kualitas aplikasi, dokumen, dan kesiapan wawancara peserta.',
				'Bagaimana cara mengajukan kemitraan? Melalui formulir di halaman /kontak atau email ke info@sdjnusantara.com.'
			],
			en: [
				'Are services only for schools? No, we serve individuals, students, professionals, schools, universities, and enterprise clients.',
				'Is online mentoring available? Yes, all programs and mentoring sessions can be attended via interactive online platforms nationwide.',
				'Is scholarship admission guaranteed? No, decisions rest with official awarding bodies; we focus strictly on optimizing applicant competence and application quality.',
				'How to propose a partnership? Submit your proposal via /kontak or email directly to info@sdjnusantara.com.'
			]
		},
		detailedPoints: {
			id: [
				'Durasi setiap program bervariasi dari 2 minggu (workshop intensif) hingga beberapa bulan (pendampingan beasiswa komprehensif).',
				'Informasi biaya program investasi dihitung berdasarkan modul dan kebutuhan pendampingan yang dipilih.'
			],
			en: [
				'Program durations range from 2 weeks (intensive workshops) to several months (comprehensive scholarship cohorts).',
				'Program fees are calculated transparently based on selected modules and mentoring requirements.'
			]
		},
		relatedTopics: ['layanan', 'beasiswa', 'kemitraan', 'kontak']
	},

	// 9. Kebijakan Privasi
	{
		id: 'kebijakan-privasi',
		title: {
			id: 'Kebijakan Privasi',
			en: 'Privacy Policy'
		},
		url: '/kebijakan-privasi',
		subpages: [],
		keywords: [
			'privasi', 'kebijakan', 'data', 'pribadi', 'keamanan', 'rahasia', 'perlindungan', 'aturan',
			'privacy', 'policy', 'data', 'security', 'protection', 'confidentiality', 'gdpr'
		],
		overview: {
			id: 'Halaman Kebijakan Privasi menguraikan komitmen SDJNusantara dalam melindungi data pribadi pengguna, jenis data yang diproses, tujuan pengumpulan, dan hak-hak privasi Anda.',
			en: 'The Privacy Policy page details SDJNusantara’s commitment to personal data protection, categories of processed data, usage purposes, and user rights.'
		},
		bullets: {
			id: [
				'Berkomitmen melindungi kerahasiaan data pribadi sesuai peraturan perundang-undangan perlindungan data di Indonesia.',
				'Data yang dikumpulkan melalui formulir hanya digunakan untuk komunikasi layanan, evaluasi kebutuhan program, dan administrasi.',
				'SDJNusantara tidak pernah menjual, menyewakan, atau memberikan data pribadi pengguna kepada pihak ketiga tanpa izin sah.',
				'Pengguna berhak memperbarui, memverifikasi, atau meminta penghapusan data kontak sewaktu-waktu.'
			],
			en: [
				'Committed to personal data confidentiality adhering to applicable Indonesian data protection laws.',
				'Information submitted through forms is used solely for service inquiries, program evaluations, and administrative communications.',
				'SDJNusantara never sells, rents, or discloses personal data to unauthorized third parties.',
				'Users retain the right to review, update, or request data deletion at any time.'
			]
		},
		detailedPoints: {
			id: [
				'Sistem kami menerapkan standar keamanan teknis dan prosedural untuk mencegah akses yang tidak berwenang.',
				'Pertanyaan seputar privasi dapat disampaikan ke info@sdjnusantara.com.'
			],
			en: [
				'Technical and organizational security safeguards are maintained to prevent unauthorized access.',
				'Privacy inquiries can be submitted to info@sdjnusantara.com.'
			]
		},
		relatedTopics: ['syarat-ketentuan', 'kontak', 'faq']
	},

	// 10. Syarat & Ketentuan
	{
		id: 'syarat-ketentuan',
		title: {
			id: 'Syarat & Ketentuan Penggunaan',
			en: 'Terms & Conditions'
		},
		url: '/syarat-ketentuan',
		subpages: [],
		keywords: [
			'syarat', 'ketentuan', 'penggunaan', 'hukum', 'aturan', 'hak', 'cipta', 'kewajiban',
			'pembayaran', 'invoice', 'rekening', 'resmi',
			'terms', 'conditions', 'terms of use', 'copyright', 'rules', 'payment', 'invoicing'
		],
		overview: {
			id: 'Halaman Syarat & Ketentuan memuat pedoman penggunaan website, kepemilikan hak cipta materi pelatihan, tata kelola pembayaran resmi, serta batasan tanggung jawab.',
			en: 'The Terms & Conditions page governs website usage, intellectual property ownership of course materials, official payment policies, and liability limits.'
		},
		bullets: {
			id: [
				'Seluruh materi, modul, logo, dan konten website merupakan hak kekayaan intelektual SDJNusantara.',
				'Pembayaran program hanya sah melalui invoice resmi dan rekening institusi perusahaan (bukan rekening pribadi individu).',
				'Peserta wajib memberikan informasi yang akurat dan beritikad baik selama mengikuti seluruh tahapan program.',
				'Ketentuan pembatalan, penggantian sesi, atau penyesuaian jadwal mengacu pada klausul perjanjian layanan resmi.'
			],
			en: [
				'All training materials, modules, logos, and website contents remain the intellectual property of SDJNusantara.',
				'Program payments are strictly valid when transacted via official invoices and corporate accounts (never personal accounts).',
				'Participants agree to provide truthful and accurate information throughout all mentoring stages.',
				'Cancellation, rescheduling, and refund terms are regulated under official service agreements.'
			]
		},
		detailedPoints: {
			id: [
				'SDJNusantara tidak bertanggung jawab atas kerugian akibat transaksi tidak resmi di luar saluran yang tertera di website.',
				'Setiap perubahan syarat dan ketentuan akan diperbarui di halaman ini secara berkala.'
			],
			en: [
				'SDJNusantara is not liable for unauthorized transactions conducted outside our official verified channels.',
				'Terms and conditions may be updated periodically and reflected on this page.'
			]
		},
		relatedTopics: ['kebijakan-privasi', 'kontak', 'layanan']
	}
];

// Helper: Ambil topik berdasarkan ID
export function getWebsiteTopicById(id: string): WebsiteTopicIndex | undefined {
	return websiteTopicIndex.find((t) => t.id === id);
}

// Helper: Deteksi intent ringkasan ("malas baca", "singkat saja", "intinya apa", dsb.)
const SUMMARY_TRIGGERS = [
	'ringkas', 'ringkasan', 'rangkum', 'rangkuman', 'singkat saja', 'singkatnya',
	'singkat', 'intinya apa', 'intinya', 'malas baca', 'males baca', 'terlalu panjang',
	'panjang banget', 'kepanjangan', 'poin-poin', 'poin penting', 'garis besar',
	'to the point', 'kesimpulan', 'simpulkan',
	'summary', 'summarize', 'summarise', 'tl;dr', 'tldr', 'short version',
	'in short', 'key points', 'too long', 'briefly', 'bullet points', 'give me the gist',
	'core points', 'quick points'
];

export function isSummaryIntent(query: string): boolean {
	const q = query.toLowerCase();
	return SUMMARY_TRIGGERS.some((trigger) => q.includes(trigger));
}

// Helper: Deteksi intent penjelasan isi halaman / lokasi halaman ("ada apa aja di", "fitur layanan", dsb.)
const PAGE_OVERVIEW_TRIGGERS = [
	'ada apa aja di', 'ada apa saja di', 'apa isi', 'isi dari', 'fitur apa',
	'fitur layanan', 'halaman apa', 'lokasi halaman', 'di mana info', 'dimana info',
	'di mana halaman', 'dimana halaman', 'menu apa saja', 'navigasi', 'ada apa di',
	'isi fitur', 'bagian apa',
	'what is in', 'what are the features', 'where can i find', 'where is',
	'overview of', 'show me page', 'page content', 'what does it contain'
];

export function isPageOverviewIntent(query: string): boolean {
	const q = query.toLowerCase();
	return PAGE_OVERVIEW_TRIGGERS.some((trigger) => q.includes(trigger));
}

// Helper: Normalisasi query untuk pencarian indeks
function normalize(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^\w\s-]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

// Helper: Pencarian kecocokan topik dalam website index
export interface TopicSearchResult {
	topic: WebsiteTopicIndex;
	score: number;
}

export function searchWebsiteIndex(query: string): TopicSearchResult[] {
	const norm = normalize(query);
	if (!norm) return [];

	const tokens = norm.split(/\s+/).filter((t) => t.length >= 2);
	const results: TopicSearchResult[] = [];

	for (const topic of websiteTopicIndex) {
		let score = 0;

		// 1. Direct match with topic ID or URL
		if (norm.includes(topic.id) || norm.includes(topic.url.replace(/^\//, ''))) {
			score += 60;
		}

		// 2. Direct match with title
		const titleId = normalize(topic.title.id);
		const titleEn = normalize(topic.title.en);
		if (norm.includes(titleId) || titleId.includes(norm)) {
			score += 50;
		}
		if (norm.includes(titleEn) || titleEn.includes(norm)) {
			score += 50;
		}

		// 3. Keyword matches
		for (const kw of topic.keywords) {
			const nkw = normalize(kw);
			if (norm === nkw || norm.includes(` ${nkw} `) || norm.startsWith(`${nkw} `) || norm.endsWith(` ${nkw}`)) {
				score += 35;
			} else {
				for (const qt of tokens) {
					if (qt === nkw) {
						score += 20;
					} else if (qt.length >= 4 && nkw.length >= 4 && (qt.startsWith(nkw) || nkw.startsWith(qt))) {
						score += 10;
					}
				}
			}
		}

		// 4. Subpage match
		for (const sub of topic.subpages) {
			const sTitleId = normalize(sub.title.id);
			const sTitleEn = normalize(sub.title.en);
			if (norm.includes(sTitleId) || norm.includes(sTitleEn)) {
				score += 30;
			}
		}

		if (score > 0) {
			results.push({ topic, score });
		}
	}

	return results.sort((a, b) => b.score - a.score);
}
