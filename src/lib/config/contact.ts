// Konfigurasi Terpusat Kontak & Informasi SDJNusantara
// Sesuai Bagian 9 & 15 content-master SDJNusantara

export interface ContactSocials {
	instagram: string;
	tiktok: string;
	email: string;
	linkedin: string;
	youtube: string;
}

export interface ContactConfig {
	email: string;
	phone: string;
	whatsappNumber: string;
	whatsappUrl: string;
	address: string;
	addressDetail: string;
	mapsUrl: string;
	jamOperasional: string;
	socials: ContactSocials;
}

export const contactConfig: ContactConfig = {
	email: 'info@sdjnusantara.com',
	phone: '+62 858-8072-4733',
	whatsappNumber: '6285880724733',
	whatsappUrl: 'https://wa.me/6285880724733',
	
	// Alamat Kantor Resmi (Sesuai Kartu Nama Perusahaan)
	address: 'Gedung Graha Aktiva, Jakarta Selatan',
	addressDetail: 'Gedung Graha Aktiva Lt. GF (suite B3A), Jl. H. R. Rasuna Said No.6, Kuningan Tim., Jakarta Selatan 12950',
	mapsUrl: 'https://maps.google.com/?q=Graha+Aktiva+Rasuna+Said+Jakarta+Selatan',
	
	// Jam Operasional
	jamOperasional: 'Senin – Jumat, 08.00 – 17.00 WIB',
	
	socials: {
		instagram: 'https://instagram.com/sdjnusantara',
		tiktok: 'https://tiktok.com/@sdjnusantara',
		email: 'mailto:info@sdjnusantara.com',
		linkedin: 'https://linkedin.com/company/sdjnusantara',
		youtube: 'https://youtube.com/@sdjnusantara'
	}
};
