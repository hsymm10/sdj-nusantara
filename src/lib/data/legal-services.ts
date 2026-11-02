// src/lib/data/legal-services.ts
/**
 * WAJIB DIISI oleh pemilik:
 * - Ruang lingkup layanan hukum
 * - Izin dan legalitas praktik hukum resmi
 * - Disclaimer hukum (content-master saat ini belum memuat data layanan hukum)
 * 
 * File ini disediakan sebagai struktur awal (placeholder) agar mudah dilengkapi di masa mendatang.
 */

export interface LegalServiceItem {
	id: string;
	title: string;
	slug: string;
	description: string;
	scope: string[];
	isAvailable: boolean;
}

export const legalServicesData: LegalServiceItem[] = [
	/*
	Contoh struktur:
	{
		id: 'legal-1',
		title: 'Konsultasi & Kepatuhan Hukum Pendidikan',
		slug: 'kepatuhan-hukum-pendidikan',
		description: 'Pendampingan regulasi dan kepatuhan hukum untuk institusi pendidikan.',
		scope: ['Review MOU & Kontrak', 'Audit Kepatuhan Regulasi', 'Pendampingan Perizinan'],
		isAvailable: false
	}
	*/
];
