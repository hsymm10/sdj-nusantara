// Layanan Mock Chatbot SDJNusantara
// Menjawab berbasis kata kunci sesuai content-master tanpa klaim berlebihan

import type { IChatService, SendMessageOptions, ChatResponse } from './chatService';

function normalizeText(text: string): string {
	return text.toLowerCase().trim();
}

export const mockChatService: IChatService = {
	async sendMessage(options: SendMessageOptions): Promise<ChatResponse> {
		const q = normalizeText(options.text);

		// Delay simulasi acak 700 - 1400 ms
		const delay = Math.floor(Math.random() * (1400 - 700 + 1)) + 700;
		await new Promise((resolve) => setTimeout(resolve, delay));

		// 1. Topik Program
		if (q.includes('program') || q.includes('talent') || q.includes('academy') || q.includes('kursus') || q.includes('pelatihan')) {
			return {
				replies: [
					`Program unggulan SDJNusantara mencakup:
1. Scholarship Academy (durasi indikatif 4–12 minggu)
2. Talent Accelerator (durasi indikatif 1–3 bulan)
3. AI & Digital Skills Academy (durasi indikatif 1–8 sesi)
4. Institutional Partnership Services (sesuai kontrak)
5. Corporate & Campus Training (sesuai kebutuhan)
Durasi bersifat indikatif. Pelajari selengkapnya di /program.`
				],
				suggestions: ['Beasiswa', 'Kemitraan', 'Layanan & Kontak']
			};
		}

		// 2. Topik Beasiswa
		if (q.includes('beasiswa') || q.includes('scholarship') || q.includes('mentoring beasiswa') || q.includes('studi lanjut')) {
			return {
				replies: [
					`SDJNusantara mendampingi persiapan beasiswa melalui pemetaan strategi, review dokumen esai/CV, dan simulasi wawancara.
SDJNusantara tidak menjanjikan kelulusan, LoA, atau penerimaan beasiswa. Informasi beasiswa resmi harus diverifikasi langsung ke situs penyelenggara terkait.
Kunjungi halaman /beasiswa untuk panduan dan daftar peluang beasiswa.`
				],
				suggestions: ['Info Program Pendidikan', 'Layanan & Kontak']
			};
		}

		// 3. Topik Kemitraan / Kerjasama
		if (q.includes('mitra') || q.includes('kemitraan') || q.includes('kolaborasi') || q.includes('sekolah') || q.includes('kampus') || q.includes('perusahaan') || q.includes('institusi')) {
			return {
				replies: [
					`SDJNusantara membuka kemitraan dengan universitas, sekolah, instansi pemerintah, dan dunia usaha.
Tahapan kolaborasi meliputi inisiasi awal, perancangan ruang lingkup program terukur, pelaksanaan, dan evaluasi berkala.
Pelajari alur kerja sama selengkapnya di halaman /kemitraan.`
				],
				suggestions: ['Layanan & Kontak', 'Info Program Pendidikan']
			};
		}

		// 4. Topik Biaya / Tarif / Harga
		if (q.includes('biaya') || q.includes('harga') || q.includes('tarif') || q.includes('bayar') || q.includes('fee')) {
			return {
				replies: [
					`Biaya bergantung ruang lingkup, durasi, format, dan jumlah peserta; penawaran resmi diberikan sebelum program disepakati.
Untuk konsultasi kebutuhan spesifik Anda, silakan ajukan di halaman /konsultasi atau hubungi tim kami melalui WhatsApp https://wa.me/6285880724733.`
				],
				suggestions: ['Layanan & Kontak', 'Info Program Pendidikan']
			};
		}

		// 5. Topik Layanan & Kontak
		if (q.includes('layanan') || q.includes('kontak') || q.includes('hubungi') || q.includes('wa') || q.includes('whatsapp') || q.includes('email') || q.includes('alamat') || q.includes('telepon')) {
			return {
				replies: [
					`Layanan kami mencakup Konsultasi Pendidikan, Persiapan Beasiswa, Pelatihan Keterampilan, Kemitraan, dan Platform Edukasi.
WhatsApp: https://wa.me/6285880724733
Email: info@sdjnusantara.com
Kantor: Gedung Graha Aktiva, Jakarta Selatan
Kunjungi halaman /kontak untuk informasi saluran lengkap.`
				],
				suggestions: ['Info Program Pendidikan', 'Beasiswa', 'Kemitraan']
			};
		}

		// 6. Topik Konsultasi
		if (q.includes('konsultasi') || q.includes('daftar') || q.includes('tanya')) {
			return {
				replies: [
					`Anda dapat mengajukan konsultasi terarah bersama tim konsultan kami di halaman /konsultasi.
Tim kami siap membantu merencanakan arahan pendidikan dan pengembangan talenta Anda secara personal dan objektif.`
				],
				suggestions: ['Layanan & Kontak', 'Beasiswa', 'Info Program Pendidikan']
			};
		}

		// Fallback cerdas & sopan
		return {
			replies: [
				`Terima kasih atas pertanyaannya. Agar kami dapat memberikan informasi yang lebih tepat, silakan sampaikan rincian kebutuhan Anda.
Tim kami juga dapat membantu lebih lanjut secara langsung melalui WhatsApp https://wa.me/6285880724733 atau halaman /kontak.`
			],
			suggestions: ['Info Program Pendidikan', 'Beasiswa', 'Kemitraan', 'Layanan & Kontak']
		};
	}
};
