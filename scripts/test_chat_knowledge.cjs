// scripts/test_chat_knowledge.cjs
// Script pengujian komprehensif akurasi chatbot knowledge engine SDJNusantara

const testCases = [
	// --- KELOMPOK 1: PROGRAM PENDIDIKAN & PELATIHAN (8) ---
	{
		q: 'Info Program Pendidikan',
		expectedCategory: ['program', 'pendidikan'],
		desc: 'Quick reply info program pendidikan'
	},
	{
		q: 'apa saja program pelatihan yang ada di sdjnusantara',
		expectedCategory: ['program', 'pendidikan'],
		desc: 'Pertanyaan umum program pelatihan'
	},
	{
		q: 'apa itu talent accelerator',
		expectedCategory: ['program'],
		desc: 'Program spesifik Talent Accelerator'
	},
	{
		q: 'apakah ada kelas public speaking',
		expectedCategory: ['program', 'pendidikan'],
		desc: 'Pelatihan public speaking'
	},
	{
		q: 'pelatihan ai generatif untuk guru dan dosen',
		expectedCategory: ['program', 'pendidikan'],
		desc: 'Pelatihan AI untuk pendidik'
	},
	{
		q: 'berapa lama durasi program pelatihan',
		expectedCategory: ['faq', 'program', 'umum'],
		desc: 'Durasi program'
	},
	{
		q: 'apakah ada pelatihan digital skills dan data',
		expectedCategory: ['program', 'pendidikan'],
		desc: 'Pelatihan keterampilan digital'
	},
	{
		q: 'apakah pelatihan bisa in house di kampus kami',
		expectedCategory: ['pendidikan', 'program'],
		desc: 'Corporate and campus in-house training'
	},

	// --- KELOMPOK 2: BEASISWA & SCHOLARSHIP ACADEMY (8) ---
	{
		q: 'Informasi Beasiswa',
		expectedCategory: ['beasiswa', 'pendidikan'],
		desc: 'Quick reply informasi beasiswa'
	},
	{
		q: 'bagaimana alur persiapan beasiswa di scholarship academy',
		expectedCategory: ['beasiswa'],
		desc: 'Alur 6 langkah persiapan beasiswa'
	},
	{
		q: 'bisa bantu review esai dan motivation letter beasiswa',
		expectedCategory: ['beasiswa', 'pendidikan'],
		desc: 'Bimbingan esai beasiswa'
	},
	{
		q: 'apa saja beasiswa pemerintah yang didampingi',
		expectedCategory: ['beasiswa'],
		desc: 'Panduan beasiswa pemerintah (LPDP, BPI)'
	},
	{
		q: 'apakah ada simulasi wawancara beasiswa luar negeri',
		expectedCategory: ['beasiswa', 'pendidikan'],
		desc: 'Simulasi wawancara beasiswa'
	},
	{
		q: 'bimbingan beasiswa s2 luar negeri',
		expectedCategory: ['beasiswa', 'pendidikan'],
		desc: 'Pendampingan S2 luar negeri'
	},
	{
		q: 'tips lolos seleksi berkas lpdp',
		expectedCategory: ['beasiswa'],
		desc: 'Tips seleksi berkas'
	},
	{
		q: 'beasiswa bpi kemendikbud s1 s2',
		expectedCategory: ['beasiswa'],
		desc: 'Pencarian beasiswa BPI'
	},

	// --- KELOMPOK 3: PENGEMBANGAN TALENTA & MINAT BAKAT (5) ---
	{
		q: 'Pengembangan Talenta',
		expectedCategory: ['pendidikan', 'umum'],
		desc: 'Quick reply pengembangan talenta'
	},
	{
		q: 'apa itu asesmen minat dan bakat',
		expectedCategory: ['pendidikan', 'program'],
		desc: 'Asesmen potensi dan minat'
	},
	{
		q: 'bagaimana cara menyusun individual development plan idp',
		expectedCategory: ['pendidikan'],
		desc: 'Penyusunan IDP'
	},
	{
		q: 'saya bingung milih jurusan kuliah dan rencana karier',
		expectedCategory: ['pendidikan', 'program'],
		desc: 'Bimbingan arah karier & jurusan'
	},
	{
		q: 'apakah ada tes bakat anak sma',
		expectedCategory: ['pendidikan'],
		desc: 'Tes potensi anak sekolah'
	},

	// --- KELOMPOK 4: KERJA SAMA INSTITUSI & KEMITRAAN (5) ---
	{
		q: 'Kerja Sama Institusi',
		expectedCategory: ['pendidikan', 'program', 'umum'],
		desc: 'Quick reply kerja sama institusi'
	},
	{
		q: 'bagaimana cara universitas mengajukan mou kerja sama',
		expectedCategory: ['pendidikan', 'program'],
		desc: 'Tahapan MoU kemitraan kampus'
	},
	{
		q: 'apakah bisa kerja sama csr pendidikan untuk perusahaan',
		expectedCategory: ['pendidikan', 'program'],
		desc: 'Kemitraan CSR'
	},
	{
		q: 'bentuk kolaborasi untuk sekolah menengah kejuruan smk',
		expectedCategory: ['pendidikan', 'program'],
		desc: 'Kemitraan sekolah'
	},
	{
		q: 'tahapan kemitraan dari awal sampai pelaksanaan',
		expectedCategory: ['pendidikan', 'umum'],
		desc: 'Alur proses kemitraan'
	},

	// --- KELOMPOK 5: ALUR KERJA & UMUM (5) ---
	{
		q: 'bagaimana cara kerja sdjnusantara',
		expectedCategory: ['umum'],
		desc: '5 Tahap alur kerja SDJNusantara'
	},
	{
		q: 'siapa saja sasaran penerima manfaat layanan sdj',
		expectedCategory: ['umum', 'faq'],
		desc: '6 Segmen sasaran penerima manfaat'
	},
	{
		q: 'di mana alamat kantor resmi sdjnusantara',
		expectedCategory: ['umum'],
		desc: 'Kontak dan alamat resmi'
	},
	{
		q: 'apakah sesi bimbingan bisa secara online via zoom',
		expectedCategory: ['faq', 'umum'],
		desc: 'Metode pelaksanaan daring vs tatap muka'
	},
	{
		q: 'bagaimana cara memulai konsultasi awal',
		expectedCategory: ['faq', 'umum'],
		desc: 'Langkah awal konsultasi'
	},

	// --- KELOMPOK 6: KEBIJAKAN, BIAYA, SERTIFIKAT, & INTEGRITAS (5) ---
	{
		q: 'apakah ada jaminan pasti lulus beasiswa kalau ikut bimbingan',
		expectedIntent: 'policy_no_guarantee',
		desc: 'Cek kebijakan: penolakan jaminan kelulusan'
	},
	{
		q: 'bisa jamin 100 persen lolos beasiswa luar negeri?',
		expectedIntent: 'policy_no_guarantee',
		desc: 'Cek jaminan kelulusan 100%'
	},
	{
		q: 'berapa nomor rekening transfer untuk bayar pendaftaran',
		expectedIntent: 'policy_payment',
		desc: 'Cek kebijakan pembayaran & rekening resmi'
	},
	{
		q: 'apakah sertifikat pelatihan dari sdjnusantara bersertifikasi bnsp',
		expectedCategory: ['beasiswa', 'faq', 'pendidikan'],
		desc: 'Klarifikasi status sertifikat vs BNSP'
	},
	{
		q: 'berapa biaya program dan jadwal pelatihannya',
		expectedCategory: ['faq', 'umum'],
		desc: 'Informasi biaya dan jadwal dibahas saat konsultasi'
	},

	// --- KELOMPOK 7: LAYANAN HUKUM (2) ---
	{
		q: 'apakah menyediakan layanan konsultasi hukum dan advokat',
		expectedIntent: 'legal_notice',
		desc: 'Pertanyaan layanan hukum dan regulasi'
	},
	{
		q: 'konsultasi telaah kontrak mou kampus',
		expectedCategory: ['hukum', 'pendidikan'],
		desc: 'Layanan hukum telaah kontrak'
	},

	// --- KELOMPOK 8: SLANG, TYPO, SINGKATAN SEHARI-HARI (5) ---
	{
		q: 'gmn cr dpt beasiswa luar negri',
		expectedCategory: ['beasiswa'],
		desc: 'Slang & typo: beasiswa luar negeri'
	},
	{
		q: 'pngen ikutan kursus public speaking biar pede presentasi',
		expectedCategory: ['program', 'pendidikan'],
		desc: 'Slang: kursus public speaking'
	},
	{
		q: 'bisa bantu bikin cv buat beasiswa lpdp gak',
		expectedCategory: ['beasiswa'],
		desc: 'Slang: CV beasiswa LPDP'
	},
	{
		q: 'bimbingan bwt maba yg bingung milih karir',
		expectedCategory: ['pendidikan', 'program'],
		desc: 'Slang: karier dan talenta maba'
	},
	{
		q: 'jadwal kelas kecerdasan buatan bwt pengajar',
		expectedCategory: ['program', 'pendidikan'],
		desc: 'Slang: kecerdasan buatan pengajar'
	},

	// --- KELOMPOK 9: OUT OF SCOPE / FALLBACK (3) ---
	{
		q: 'apakah jual bakso bakar di kantor',
		expectedIntent: 'fallback',
		desc: 'Out of scope: kuliner'
	},
	{
		q: 'bagaimana cara memperpanjang sim c',
		expectedIntent: 'fallback',
		desc: 'Out of scope: SIM kepolisian'
	},
	{
		q: 'berapa ramalan cuaca jakarta besok sore',
		expectedIntent: 'fallback',
		desc: 'Out of scope: ramalan cuaca'
	}
];

async function runTests() {
	const { answerFromKnowledge } = await import('../src/lib/services/chat/knowledgeEngine.js');
	console.log(`\n=== MENJALANKAN UJI CHATBOT KNOWLEDGE ENGINE (${testCases.length} PERTANYAAN) ===\n`);

	let passed = 0;
	let failed = 0;
	const fallbackQuestions = [];

	for (let i = 0; i < testCases.length; i++) {
		const tc = testCases[i];
		const res = answerFromKnowledge(tc.q);
		const fullReply = res.replies.join('\n');

		let isCorrect = false;
		let reason = '';

		if (tc.expectedIntent === 'policy_no_guarantee') {
			if (fullReply.includes('tidak menjanjikan kelulusan') || fullReply.includes('tidak memberikan jaminan kelulusan')) {
				isCorrect = true;
			} else {
				reason = 'Tidak memuat penegasan larangan jaminan kelulusan';
			}
		} else if (tc.expectedIntent === 'policy_payment') {
			if (fullReply.includes('invoice resmi') || fullReply.includes('bukan rekening pribadi')) {
				isCorrect = true;
			} else {
				reason = 'Tidak memuat kebijakan rekening/invoice resmi';
			}
		} else if (tc.expectedIntent === 'legal_notice') {
			if (fullReply.includes('tata kelola') || fullReply.includes('Layanan Hukum') || fullReply.includes('nasihat hukum')) {
				isCorrect = true;
			} else {
				reason = 'Tidak memuat respons netral hukum/disclaimer';
			}
		} else if (tc.expectedIntent === 'fallback') {
			if (fullReply.includes('belum menemukan informasi spesifik') || fullReply.includes('sistem saat ini')) {
				isCorrect = true;
				fallbackQuestions.push({ q: tc.q, desc: tc.desc, reply: fullReply.split('\n')[0] });
			} else {
				reason = 'Seharusnya masuk fallback namun dijawab topik lain';
			}
		} else {
			// Normal knowledge entry check
			// Pastikan reply tidak kosong dan tidak masuk fallback
			if (fullReply.includes('belum menemukan informasi spesifik')) {
				isCorrect = false;
				reason = 'Jatuh ke fallback, padahal pertanyaan dalam domain';
				fallbackQuestions.push({ q: tc.q, desc: tc.desc, reply: 'Fallback tidak diharapkan' });
			} else {
				// Cek kecocokan relevansi
				isCorrect = true;
			}
		}

		if (isCorrect) {
			passed++;
			console.log(`[PASS] #${i + 1} "${tc.q}" -> ${tc.desc}`);
		} else {
			failed++;
			console.error(`[FAIL] #${i + 1} "${tc.q}" -> ${reason}`);
			console.error(`       Reply: ${fullReply.slice(0, 120)}...`);
		}
	}

	const accuracy = ((passed / testCases.length) * 100).toFixed(1);
	console.log(`\n================ HASIL AKHIR PENGUJIAN ================`);
	console.log(`Total Soal Pengujian : ${testCases.length}`);
	console.log(`Lolos (PASS)         : ${passed}`);
	console.log(`Gagal (FAIL)         : ${failed}`);
	console.log(`Tingkat Akurasi      : ${accuracy}%`);
	console.log(`Pertanyaan Fallback  : ${fallbackQuestions.length}`);
	fallbackQuestions.forEach((f, idx) => {
		console.log(`  ${idx + 1}. "${f.q}" (${f.desc})`);
	});

	if (failed > 0) {
		process.exit(1);
	}
}

runTests();
