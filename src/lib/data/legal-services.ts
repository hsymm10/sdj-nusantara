// src/lib/data/legal-services.ts
/**
 * WAJIB DIISI/DIVERIFIKASI pemilik: ruang lingkup layanan hukum, izin/legalitas praktik (advokat/konsultan hukum/badan hukum), identitas penanggung jawab. Content-master tidak memuat layanan hukum.
 *
 * Catatan Kepatuhan:
 * - Tidak menggunakan klaim mutu/superlatif tanpa bukti (mis. terbaik, pasti, jaminan, terpercaya, aman, berpengalaman).
 * - Menggunakan terminologi netral, objektif, dan faktual.
 * - Informasi bersifat umum dan bukan merupakan nasihat hukum formal sampai adanya perjanjian tertulis.
 */

export interface LegalFeatureItem {
	id: string;
	title: string;
	description?: string;
	icon: string;
}

export interface LegalScopeItem {
	id: string;
	title: string;
	description: string;
	icon: string;
	points?: string[];
}

export interface LegalAdvantageItem {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export interface LegalProcessStep {
	step: string;
	title: string;
	description: string;
	icon: string;
}

// 3 Pilar Fitur di Section "Tentang Layanan"
export const legalFeaturesData: LegalFeatureItem[] = [
	{
		id: 'feat-1',
		title: 'Pendampingan Terarah',
		icon: 'heroicons:shield-check-20-solid'
	},
	{
		id: 'feat-2',
		title: 'Pendekatan Berbasis Kebutuhan',
		icon: 'heroicons:user-group-20-solid'
	},
	{
		id: 'feat-3',
		title: 'Sesuai Regulasi Pendidikan',
		icon: 'heroicons:check-badge-20-solid'
	}
];

// 3 Kartu Ruang Lingkup Layanan Hukum
export const legalScopeData: LegalScopeItem[] = [
	{
		id: 'scope-1',
		title: 'Penyusunan & Penelaahan Kontrak/MOU',
		description: 'Pembuatan, peninjauan, dan optimalisasi perjanjian kerja sama institusi secara cermat.',
		icon: 'heroicons:document-text-20-solid'
	},
	{
		id: 'scope-2',
		title: 'Kepatuhan Regulasi & Kebijakan Kampus',
		description: 'Pendampingan pemenuhan regulasi pendidikan nasional dan tata kelola institusi.',
		icon: 'fluent:gavel-24-filled'
	},
	{
		id: 'scope-3',
		title: 'Pendampingan Hukum Terstruktur',
		description: 'Konsultasi dan pendampingan hukum berkelanjutan sesuai kebutuhan institusi.',
		icon: 'fluent:scales-24-filled'
	}
];

// 4 Keunggulan di Section "Keunggulan"
export const legalAdvantagesData: LegalAdvantageItem[] = [
	{
		id: 'adv-1',
		title: 'Pendekatan Terstruktur',
		description: 'Didukung alur kerja terstruktur di bidang hukum pendidikan.',
		icon: 'heroicons:check-badge-20-solid'
	},
	{
		id: 'adv-2',
		title: 'Solusi Komprehensif',
		description: 'Mencakup konsultasi, penyusunan dokumen, hingga implementasi.',
		icon: 'heroicons:squares-2x2-20-solid'
	},
	{
		id: 'adv-3',
		title: 'Berbasis Regulasi',
		description: 'Berlandaskan peraturan dan kebijakan pendidikan yang berlaku.',
		icon: 'heroicons:shield-check-20-solid'
	},
	{
		id: 'adv-4',
		title: 'Pendampingan Berkelanjutan',
		description: 'Dukungan jangka panjang sesuai kebutuhan institusi.',
		icon: 'heroicons:user-group-20-solid'
	}
];

// 4 Alur Proses Layanan
export const legalProcessSteps: LegalProcessStep[] = [
	{
		step: '01',
		title: 'Konsultasi Awal',
		description: 'Sampaikan kebutuhan hukum institusi Anda.',
		icon: 'heroicons:chat-bubble-bottom-center-text-20-solid'
	},
	{
		step: '02',
		title: 'Analisis & Rekomendasi',
		description: 'Tim kami melakukan kajian dan telaah kebutuhan.',
		icon: 'heroicons:calendar-days-20-solid'
	},
	{
		step: '03',
		title: 'Penyusunan Dokumen',
		description: 'Pembuatan atau penelaahan dokumen sesuai kebutuhan.',
		icon: 'heroicons:document-text-20-solid'
	},
	{
		step: '04',
		title: 'Pendampingan & Finalisasi',
		description: 'Implementasi dan tindak lanjut layanan.',
		icon: 'heroicons:check-circle-20-solid'
	}
];

export const legalDisclaimerText =
	'Informasi pada halaman ini bersifat umum dan bukan nasihat hukum. Hubungan penasihat-klien baru terbentuk setelah ada kesepakatan tertulis.';
