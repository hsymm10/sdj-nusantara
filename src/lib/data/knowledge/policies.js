// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/policies.js

/**
 * Aturan respons dan kebijakan konten chatbot SDJNusantara.
 * Menjamin kepatuhan etika layanan, akurasi informasi, dan perlindungan privasi.
 */

export const FORBIDDEN_WORDS = [
	'terbaik',
	'pasti',
	'pasti lolos',
	'pasti diterima',
	'jaminan',
	'jaminan lolos',
	'terpercaya',
	'aman',
	'berpengalaman',
	'gratis',
	'murah',
	'100% lulus',
	'pasti lulus'
];

export const SENSITIVE_DATA_PATTERNS = [
	/\b\d{16}\b/, // Nomor NIK KTP / Kartu Kredit
	/\b(?:password|kata sandi|pin)\b/i
];

export const CHATBOT_POLICIES = {
	noGuarantee:
		'Keputusan akhir beasiswa dan pendaftaran sepenuhnya merupakan wewenang pihak universitas atau penyelenggara beasiswa. SDJNusantara mendampingi persiapan dokumen dan strategi, bukan menjamin kelulusan.',
	noFixedPricing:
		'Biaya dan jadwal program disesuaikan dengan kebutuhan serta ruang lingkup pendampingan. Rincian ini dijelaskan langsung saat sesi konsultasi awal.',
	bnspStatusNotice:
		'Sertifikat pelatihan internal berbeda dari sertifikat kompetensi resmi. Sertifikat kompetensi hanya diterbitkan oleh lembaga berwenang (seperti BNSP) sesuai skema resmi yang terverifikasi.',
	legalStatusNotice:
		'Layanan hukum dan regulasi sedang dalam tahap persiapan. Informasi pada situs web bersifat edukasi umum dan bukan nasihat hukum formal.',
	privacyNotice:
		'Kami tidak meminta dan tidak menyimpan data sensitif seperti NIK, kata sandi, atau nomor rekening bank melalui percakapan ini.',
	unsupportedTopicFallback:
		'Topik ini di luar cakupan layanan SDJNusantara. Kami berfokus pada pendampingan pendidikan, beasiswa, pelatihan keterampilan, dan pengembangan talenta.'
};

/**
 * Memeriksa apakah teks melanggar kebijakan kata terlarang
 * @param {string} text
 * @returns {{ valid: boolean, matchedWord?: string }}
 */
export function validateContentPolicy(text) {
	if (!text || typeof text !== 'string') return { valid: true };
	const lower = text.toLowerCase();

	for (const word of FORBIDDEN_WORDS) {
		const regex = new RegExp(`\\b${word}\\b`, 'i');
		if (regex.test(lower)) {
			return { valid: false, matchedWord: word };
		}
	}
	return { valid: true };
}
