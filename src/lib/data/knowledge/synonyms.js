// Sumber: naskah konten bidang pendidikan. Nanti dipindah ke database dan dikelola Super Admin (CMS).
// src/lib/data/knowledge/synonyms.js

/**
 * Kamus padanan kata bahasa Indonesia sehari-hari untuk normalisasi pencarian pengetahuan chatbot.
 */
export const SYNONYMS_MAP = {
	kuliah: ['studi', 'belajar', 'perkuliahan', 'sekolah', 'kuliah tinggi'],
	'studi lanjut': ['s2', 's3', 'master', 'doktor', 'pascasarjana', 'magister', 'lanjut studi', 'sekolah lagi'],
	s2: ['magister', 'master', 'pascasarjana', 's-2'],
	s3: ['doktor', 'phd', 'doctoral', 's-3'],
	loa: ['letter of acceptance', 'surat penerimaan', 'surat diterima', 'bukti diterima', 'acceptance letter'],
	esai: ['essay', 'motivation letter', 'personal statement', 'surat motivasi', 'surat lamaran beasiswa', 'statement of purpose', 'sop'],
	wawancara: ['interview', 'tanya jawab', 'tes wawancara', 'interview beasiswa'],
	pelatihan: ['kursus', 'training', 'kelas', 'workshop', 'bootcamp', 'lokakarya', 'webinar', 'bimbingan', 'belajar', 'les'],
	sertifikat: ['sertifikasi', 'ijazah', 'surat kelulusan', 'sertif', 'bnsp', 'lisensi'],
	daring: ['online', 'jarak jauh', 'zoom', 'virtual', 'remote'],
	biaya: ['harga', 'tarif', 'ongkos', 'fee', 'bayar', 'biayanya', 'pricelist', 'paket biaya'],
	daftar: ['ikut', 'gabung', 'join', 'registrasi', 'mendaftar', 'ikutan', 'cara gabung', 'mau ikutan'],
	kampus: ['universitas', 'perguruan tinggi', 'univ', 'kampusku', 'politeknik', 'ptn', 'pts'],
	'luar negeri': ['abroad', 'overseas', 'inter', 'luar', 'ln', 'eropa', 'jepang', 'inggris', 'australia'],
	'dalam negeri': ['dn', 'domestik', 'indonesia', 'lokal'],
	'kerja sama': ['kemitraan', 'kolaborasi', 'partnership', 'mou', 'pks', 'kerjasama institusi', 'ajukan kerja sama'],
	beasiswa: ['scholarship', 'bantuan dana', 'pendanaan studi', 'beasiswa penuh', 'fully funded'],
	talenta: ['bakat', 'minat', 'potensi', 'talent', 'pengembangan diri', 'arah karier', 'jurusan'],
	konsultasi: ['konsul', 'tanya konsultan', 'diskusi', 'ngobrol', 'tanya jawab', 'bimbingan']
};

/**
 * Menormalkan teks dengan mengganti variasi sinonim ke bentuk standar
 * @param {string} text
 * @returns {string}
 */
export function expandSynonyms(text) {
	if (!text) return '';
	let normalized = text.toLowerCase();
	for (const [canonical, variants] of Object.entries(SYNONYMS_MAP)) {
		for (const variant of variants) {
			const reg = new RegExp(`\\b${variant}\\b`, 'g');
			normalized = normalized.replace(reg, `${canonical} ${variant}`);
		}
	}
	return normalized;
}
