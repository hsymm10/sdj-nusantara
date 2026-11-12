import { contactConfig } from '#lib/config/contact';
import type { Locale } from '#lib/stores/i18n.svelte';

/**
 * Membangun URL WhatsApp dengan pesan pre-filled dinamis berdasarkan pertanyaan terakhir user.
 * Tidak mengirim otomatis; pengguna tetap menekan tombol kirim secara manual di WhatsApp.
 */
export function buildWhatsAppUrl(lastUserQuestion?: string | null, lang: Locale = 'id'): string {
	const cleaned = (lastUserQuestion ?? '').trim();

	let message: string;
	if (cleaned) {
		message =
			lang === 'en'
				? `Hello SDJNusantara Consultant, I would like to ask further about: "${cleaned}"`
				: `Halo Konsultan SDJNusantara, saya ingin bertanya lebih lanjut mengenai: "${cleaned}"`;
	} else {
		message =
			lang === 'en'
				? 'Hello SDJNusantara Consultant, I would like to consult regarding SDJNusantara education programs and services.'
				: 'Halo Konsultan SDJNusantara, saya ingin berkonsultasi mengenai program dan layanan SDJNusantara.';
	}

	return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

