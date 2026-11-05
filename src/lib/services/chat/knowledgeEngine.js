// src/lib/services/chat/knowledgeEngine.js
// Mesin Pemrosesan Pertanyaan Chatbot berbasis Basis Pengetahuan Tunggal SDJNusantara

import { allKnowledge } from '../../data/knowledge/index.js';
import { expandSynonyms } from '../../data/knowledge/synonyms.js';
import { CHATBOT_POLICIES, FORBIDDEN_WORDS } from '../../data/knowledge/policies.js';

/**
 * Normalisasi string: huruf kecil, hapus karakter khusus selain spasi dan alfanumerik
 * @param {string} text
 * @returns {string}
 */
export function normalizeQuery(text) {
	if (!text) return '';
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * Tokenisasi teks menjadi kata-kata unik (minimal 2 huruf)
 * @param {string} text
 * @returns {string[]}
 */
export function tokenize(text) {
	const normalized = normalizeQuery(text);
	if (!normalized) return [];
	const stopwords = new Set([
		'yang', 'untuk', 'pada', 'ke', 'di', 'dari', 'dan', 'atau', 'ini', 'itu',
		'dengan', 'adalah', 'yaitu', 'seperti', 'saya', 'kami', 'anda', 'kamu',
		'mau', 'ingin', 'bisa', 'apakah', 'bagaimana', 'apa', 'siapa', 'dimana',
		'kapan', 'kenapa', 'mengapa', 'berapa', 'dong', 'sih', 'ya', 'kah',
		'cara', 'buat', 'bikin', 'perpanjang', 'jual', 'ada'
	]);
	return normalized
		.split(/\s+/)
		.filter((word) => word.length >= 2 && !stopwords.has(word));
}

/**
 * Cek intent khusus kebijakan sebelum pencarian umum
 * @param {string} query
 * @returns {{ replies: string[], suggestions: string[] } | null}
 */
function checkSpecialPolicyIntents(query) {
	const q = normalizeQuery(query);

	// 1. Deteksi pertanyaan jaminan kelulusan beasiswa
	if (
		q.includes('pasti lulus') ||
		q.includes('pasti lolos') ||
		q.includes('jaminan lolos') ||
		q.includes('jaminan lulus') ||
		q.includes('bisa jamin') ||
		q.includes('jamin dapat beasiswa') ||
		q.includes('100 lulus') ||
		q.includes('100 persen') ||
		q.includes('pasti diterima')
	) {
		return {
			replies: [
				`SDJNusantara tidak memberikan jaminan kelulusan atau perolehan beasiswa. Keputusan akhir sepenuhnya merupakan wewenang pihak universitas atau lembaga penyelenggara beasiswa terkait.\n\nLayanan Scholarship Academy SDJNusantara berfokus pada pendampingan terarah, pemetaan profil, penguatan dokumen aplikasi (CV dan esai/motivation letter), serta simulasi wawancara agar persiapan Anda lebih matang.`
			],
			suggestions: ['Info Program Pendidikan', 'Beasiswa', 'Konsultasi']
		};
	}

	// 2. Deteksi pertanyaan nomor rekening / transfer pribadi / transaksi tidak resmi
	if (
		q.includes('nomor rekening') ||
		q.includes('no rekening') ||
		q.includes('transfer ke mana') ||
		q.includes('bayar ke siapa') ||
		q.includes('rekening pribadi')
	) {
		return {
			replies: [
				`Seluruh transaksi dan pembayaran resmi program SDJNusantara hanya diterbitkan melalui invoice resmi dan rekening institusi atas nama lembaga/perusahaan, bukan rekening pribadi individu mana pun.\n\nUntuk konfirmasi administrasi resmi, silakan hubungi saluran representatif kami di WhatsApp +62 858-8072-4733 atau email info@sdjnusantara.com.`
			],
			suggestions: ['Kontak Resmi', 'Konsultasi', 'Info Program Pendidikan']
		};
	}

	// 3. Deteksi pertanyaan layanan hukum
	if (
		q.includes('layanan hukum') ||
		q.includes('konsultasi hukum') ||
		q.includes('bantuan hukum') ||
		q.includes('advokat') ||
		q.includes('pengacara') ||
		q.includes('kasus hukum') ||
		q.includes('perkara hukum')
	) {
		const hukumEntry = allKnowledge.find((k) => k.id === 'hukum-layanan-regulasi');
		if (hukumEntry) {
			return {
				replies: [
					`${hukumEntry.ringkas}\n\n${hukumEntry.detail.join('\n')}\n\n*Catatan Kepatuhan: Informasi pada situs ini bersifat edukasi umum dan bukan nasihat hukum formal.`
				],
				suggestions: hukumEntry.tindakLanjutChip
			};
		}
	}

	return null;
}

/**
 * Cari entri terbaik dari Basis Pengetahuan
 * @param {string} rawQuery
 * @returns {{ entry: import('#lib/data/knowledge/index').KnowledgeEntry | null, score: number }}
 */
export function findBestKnowledgeEntry(rawQuery) {
	const normalized = normalizeQuery(rawQuery);
	if (!normalized) return { entry: null, score: 0 };

	const expanded = expandSynonyms(normalized);
	const queryTokens = tokenize(expanded);

	let bestEntry = null;
	let highestScore = 0;

	for (const entry of allKnowledge) {
		let score = 0;
		let hasDirectMatch = false;
		const matchedTokens = new Set();

		// A. Direct check: apakah ada pertanyaan contoh yang sangat mirip
		for (const p of entry.pertanyaan) {
			const normP = normalizeQuery(p);
			if (normP === normalized) {
				score += 100;
				hasDirectMatch = true;
				break;
			}
			if (normalized.includes(normP) || normP.includes(normalized)) {
				score += 45;
				hasDirectMatch = true;
			}
		}

		// B. Keyword overlap
		for (const kw of entry.kataKunci) {
			const normKw = normalizeQuery(kw);
			if (normalized.includes(normKw)) {
				score += 30;
				for (const qt of queryTokens) {
					if (normKw.includes(qt)) matchedTokens.add(qt);
				}
			} else {
				const kwTokens = tokenize(normKw);
				for (const qt of queryTokens) {
					if (kwTokens.includes(qt)) {
						score += 15;
						matchedTokens.add(qt);
					}
				}
			}
		}

		// C. Judul overlap
		const titleTokens = tokenize(entry.judul);
		for (const qt of queryTokens) {
			if (titleTokens.includes(qt)) {
				score += 18;
				matchedTokens.add(qt);
			}
		}

		// D. Ringkasan overlap
		const descTokens = tokenize(entry.ringkas);
		for (const qt of queryTokens) {
			if (descTokens.includes(qt)) {
				score += 5;
				matchedTokens.add(qt);
			}
		}

		// Coverage penalty: Jika pertanyaan memiliki beberapa kata (>=2),
		// namun tidak ada direct match dan token query yang cocok < 40%, abaikan
		const coverage = queryTokens.length > 0 ? (matchedTokens.size / queryTokens.length) : 0;
		if (!hasDirectMatch && queryTokens.length >= 2 && coverage < 0.34) {
			score = 0;
		}

		if (score > highestScore) {
			highestScore = score;
			bestEntry = entry;
		}
	}

	return { entry: bestEntry, score: highestScore };
}

/**
 * Format respon chatbot dari entri pengetahuan
 * @param {import('#lib/data/knowledge/index').KnowledgeEntry} entry
 * @returns {{ replies: string[], suggestions: string[] }}
 */
export function formatKnowledgeResponse(entry) {
	const parts = [];

	// 1. Ringkasan utama (≤ 2-3 kalimat)
	parts.push(entry.ringkas);

	// 2. Poin penting dari detail (ambil max 4 poin teratas)
	if (entry.detail && entry.detail.length > 0) {
		const bulletPoints = entry.detail
			.slice(0, 4)
			.map((item) => (item.startsWith('•') || item.match(/^\d+\./) ? item : `• ${item}`))
			.join('\n');
		parts.push(bulletPoints);
	}

	// 3. Rekomendasi langkah berikutnya
	if (entry.langkahBerikut && entry.langkahBerikut.length > 0) {
		const next = entry.langkahBerikut[0];
		parts.push(`Pelajari lebih lanjut atau jadwalkan sesi: ${next.label} (${next.href})`);
	}

	return {
		replies: [parts.join('\n\n')],
		suggestions: entry.tindakLanjutChip || ['Info Program Pendidikan', 'Beasiswa', 'Konsultasi']
	};
}

/**
 * Handle query lengkap dengan integrasi mesin kebijakan dan basis pengetahuan
 * @param {string} userQuery
 * @returns {{ replies: string[], suggestions: string[] }}
 */
export function answerFromKnowledge(userQuery) {
	if (!userQuery || userQuery.trim() === '') {
		return {
			replies: [
				'Halo! Ada yang bisa kami bantu seputar program pendidikan, persiapan beasiswa, atau rencana pengembangan talenta Anda?'
			],
			suggestions: ['Info Program Pendidikan', 'Beasiswa', 'Pengembangan Talenta', 'Konsultasi']
		};
	}

	// 1. Cek kebijakan khusus
	const specialResponse = checkSpecialPolicyIntents(userQuery);
	if (specialResponse) {
		return specialResponse;
	}

	// 2. Pencarian entri basis pengetahuan
	const { entry, score } = findBestKnowledgeEntry(userQuery);

	// Ambang batas kecocokan (confidence threshold)
	const CONFIDENCE_THRESHOLD = 15;

	if (entry && score >= CONFIDENCE_THRESHOLD) {
		return formatKnowledgeResponse(entry);
	}

	// 3. Fallback jika tidak menemukan kecocokan yang memadai
	return {
		replies: [
			'Terima kasih atas pertanyaan Anda. Kami belum menemukan informasi spesifik untuk topik tersebut di sistem saat ini.\n\nAnda dapat menanyakan hal lain seputar program pendidikan, persiapan beasiswa, pemetaan talenta, atau langsung berdiskusi dengan konsultan pendidikan kami melalui halaman /kontak atau WhatsApp +62 858-8072-4733.'
		],
		suggestions: ['Info Program Pendidikan', 'Beasiswa', 'Pengembangan Talenta', 'Konsultasi']
	};
}
