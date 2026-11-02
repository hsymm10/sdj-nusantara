// Layanan Mock Chatbot SDJNusantara
// Menjawab berbasis kata kunci sesuai content-master tanpa klaim berlebihan atau emoji

import type { IChatService, SendMessageOptions, ChatResponse } from './chatService';

function normalizeText(text: string): string {
	return text.toLowerCase().trim();
}

export const mockChatService: IChatService = {
	async sendMessage(options: SendMessageOptions): Promise<ChatResponse> {
		const q = normalizeText(options.text);

		// Delay simulasi acak 600 - 1100 ms
		const delay = Math.floor(Math.random() * (1100 - 600 + 1)) + 600;
		await new Promise((resolve) => setTimeout(resolve, delay));

		// 1. Topik Pengembangan Talenta (asesmen minat-bakat, IDP, coaching; tanpa janji hasil)
		if (q.includes('talenta') || q.includes('pengembangan talenta') || q.includes('minat-bakat') || q.includes('coaching') || q.includes('idp')) {
			return {
				replies: [
					`Program Pengembangan Talenta SDJNusantara dirancang melalui:
1. Asesmen Minat dan Bakat: Pemetaan potensi personal, profil kompetensi, dan orientasi karier.
2. Individual Development Plan (IDP): Penyusunan rencana aksi dan target belajar yang terstruktur.
3. Mentoring & Coaching Berkala: Pendampingan bersama mentor dan praktisi profesional di bidangnya.

Program ini berfokus pada proses pendampingan terarah tanpa janji hasil instan. Pelajari detailnya di /layanan/pendidikan#program.`
				],
				suggestions: ['Info Program Pendidikan', 'Konsultasi Pendidikan']
			};
		}

		// 2. Topik Konsultasi (dimulai lewat WhatsApp/halaman Kontak, tanpa menjanjikan gratis atau SLA waktu respons)
		if (q.includes('konsultasi') || q.includes('konsul') || q.includes('tanya konsultan')) {
			return {
				replies: [
					`Konsultasi pendidikan dan program bersama tim ahli SDJNusantara dapat dimulai melalui saluran resmi:
• WhatsApp: https://wa.me/6285880724733
• Halaman Kontak: /kontak
• Kantor: Gedung Graha Aktiva Lt. GF (suite B3A), Jl. H. R. Rasuna Said No.6, Jakarta Selatan.

Sampaikan gambaran kebutuhan Anda agar tim kami dapat mengarahkan opsi program yang paling relevan.`
				],
				suggestions: ['Info Program Pendidikan', 'Beasiswa', 'Kerja Sama Institusi']
			};
		}

		// 3. Topik Kerja Sama Institusi / Kemitraan (jenis mitra dan tahapan singkat, tautan ke /kemitraan)
		if (q.includes('kerja sama') || q.includes('institusi') || q.includes('mitra') || q.includes('kemitraan') || q.includes('kolaborasi')) {
			return {
				replies: [
					`SDJNusantara menjalin kerja sama strategis dengan universitas, sekolah, instansi pemerintah, dan korporasi.

Tahapan kolaborasi:
1. Inisiasi & Diskusi Kebutuhan
2. Perancangan Ruang Lingkup Program
3. Kesepakatan Kerangka Kerja Sama
4. Implementasi & Evaluasi Berkala

Informasi lengkap jenis kemitraan dan proposal dapat diakses di halaman /kemitraan.`
				],
				suggestions: ['Konsultasi Pendidikan', 'Info Program Pendidikan']
			};
		}

		// 4. Topik Lainnya (minta pengguna menuliskan pertanyaan + tautan Kontak)
		if (q.includes('topik lainnya') || q.includes('lainnya') || q.includes('tanya lain') || q.includes('hal lain')) {
			return {
				replies: [
					`Silakan ketik pertanyaan spesifik Anda langsung di kolom pesan di bawah ini.

Anda juga dapat menghubungi tim representatif kami melalui halaman /kontak atau WhatsApp https://wa.me/6285880724733 untuk pertanyaan administratif, jadwal pertemuan, atau kebutuhan khusus.`
				],
				suggestions: ['Info Program Pendidikan', 'Beasiswa', 'Konsultasi Pendidikan']
			};
		}

		// 5. Topik Program
		if (q.includes('program') || q.includes('academy') || q.includes('kursus') || q.includes('pelatihan')) {
			return {
				replies: [
					`Program unggulan SDJNusantara mencakup:
1. Scholarship Academy (durasi indikatif 4–12 minggu)
2. Talent Accelerator (durasi indikatif 1–3 bulan)
3. AI & Digital Skills Academy (durasi indikatif 1–8 sesi)
4. Institutional Partnership Services (sesuai kontrak)
5. Corporate & Campus Training (sesuai kebutuhan)

Durasi bersifat indikatif. Pelajari selengkapnya di /layanan/pendidikan#program.`
				],
				suggestions: ['Informasi Beasiswa', 'Pengembangan Talenta', 'Konsultasi Pendidikan']
			};
		}

		// 6. Topik Beasiswa
		if (q.includes('beasiswa') || q.includes('scholarship') || q.includes('studi lanjut')) {
			return {
				replies: [
					`SDJNusantara mendampingi persiapan beasiswa melalui pemetaan strategi, review dokumen esai/CV, dan simulasi wawancara.

SDJNusantara tidak menjanjikan kelulusan, LoA, atau penerimaan beasiswa. Informasi beasiswa resmi harus diverifikasi langsung ke situs penyelenggara terkait. Kunjungi halaman /layanan/pendidikan#beasiswa untuk panduan dan kurasi informasi.`
				],
				suggestions: ['Info Program Pendidikan', 'Konsultasi Pendidikan']
			};
		}

		// 7. Topik Biaya / Tarif
		if (q.includes('biaya') || q.includes('harga') || q.includes('tarif') || q.includes('bayar') || q.includes('fee')) {
			return {
				replies: [
					`Biaya program disesuaikan dengan ruang lingkup pendampingan, durasi, format, dan jumlah peserta. Penawaran resmi diberikan sebelum program disepakati.

Silakan konsultasikan rencana kebutuhan Anda melalui WhatsApp https://wa.me/6285880724733 atau halaman /kontak.`
				],
				suggestions: ['Konsultasi Pendidikan', 'Info Program Pendidikan']
			};
		}

		// 8. Topik Kontak & Alamat
		if (q.includes('alamat') || q.includes('lokasi') || q.includes('kantor') || q.includes('email') || q.includes('telepon') || q.includes('wa') || q.includes('whatsapp')) {
			return {
				replies: [
					`Informasi Kontak Resmi SDJNusantara:
• Kantor: Gedung Graha Aktiva Lt. GF (suite B3A), Jl. H. R. Rasuna Said No.6, Kuningan Tim., Jakarta Selatan 12950
• WhatsApp: https://wa.me/6285880724733
• Email: info@sdjnusantara.com
• Jam Operasional: Senin – Jumat, 08.00 – 17.00 WIB

Kunjungi halaman /kontak untuk rincian kanal komunikasi kami.`
				],
				suggestions: ['Info Program Pendidikan', 'Konsultasi Pendidikan']
			};
		}

		// Fallback sopan & profesional
		return {
			replies: [
				`Terima kasih atas pesan Anda. Untuk membantu memberikan jawaban yang paling akurat, silakan sampaikan detail pertanyaan Anda atau pilih salah satu topik yang tersedia.

Anda juga dapat terhubung langsung dengan konsultan kami melalui WhatsApp https://wa.me/6285880724733 atau halaman /kontak.`
			],
			suggestions: ['Info Program Pendidikan', 'Informasi Beasiswa', 'Pengembangan Talenta', 'Konsultasi Pendidikan']
		};
	}
};
