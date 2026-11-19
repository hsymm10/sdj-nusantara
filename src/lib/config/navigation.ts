// src/lib/config/navigation.ts
// Sumber konfigurasi navigasi terpusat SDJNusantara
import { serviceConfig, type ServiceModuleKey } from './services';

export interface NavSubItem {
	label: string;
	href: string;
	description: string;
	iconType: 'education' | 'legal';
	serviceKey?: ServiceModuleKey;
	isComingSoon?: boolean;
	badge?: string;
}

export interface NavItem {
	label: string;
	href: string;
	hasDropdown?: boolean;
	children?: NavSubItem[];
}

const allServiceSubItems: NavSubItem[] = [
	{
		label: 'Pendidikan',
		href: '/layanan/pendidikan',
		description: 'Program, beasiswa, dan pengembangan talenta',
		iconType: 'education',
		serviceKey: 'education'
	},
	{
		label: 'Beasiswa',
		href: '/layanan/beasiswa',
		description: 'Akses dan panduan beasiswa terverifikasi',
		iconType: 'education',
		serviceKey: 'scholarship'
	},
	{
		label: 'Hukum',
		href: '/layanan/hukum',
		description: 'Layanan hukum dan pendampingan',
		iconType: 'legal',
		serviceKey: 'legal',
		isComingSoon: true,
		badge: 'Segera hadir'
	}
];

export const navItems: NavItem[] = [
	{ label: 'Beranda', href: '/' },
	{ label: 'Tentang Kami', href: '/tentang-kami' },
	{ label: 'Layanan', href: '/layanan' },
	{ label: 'Kemitraan', href: '/kemitraan' },
	{ label: 'Perspektif', href: '/artikel' },
	{ label: 'Kontak', href: '/kontak' }
];

export const footerNav = {
	navigasiUtama: [
		{ label: 'Beranda', href: '/' },
		{ label: 'Tentang Kami', href: '/tentang-kami' },
		{ label: 'Layanan', href: '/layanan' },
		{ label: 'Kemitraan', href: '/kemitraan' }
	],
	pusatInformasi: [
		{ label: 'Perspektif', href: '/artikel' },
		{ label: 'Kontak', href: '/kontak' }
	]
};
