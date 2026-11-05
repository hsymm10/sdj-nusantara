// src/lib/data/programs.ts
// Membaca langsung dari Basis Pengetahuan Tunggal (src/lib/data/knowledge/)

import { programKnowledge } from './knowledge/index.js';

export interface ProgramItem {
	slug: string;
	category: string;
	title: string;
	desc: string;
	duration: string;
	target: string;
	image: string;
	features?: string[];
	format?: string[];
	biaya?: string;
	langkahBerikut?: { label: string; href: string }[];
}

export const programsData: ProgramItem[] = programKnowledge.map((item) => ({
	slug: item.slug,
	category: item.filterTab,
	title: item.judul,
	desc: item.ringkas,
	duration: item.durasi,
	target: item.cocokUntuk.join(' • '),
	image: item.image,
	features: item.detail,
	format: item.format,
	biaya: item.biaya,
	langkahBerikut: item.langkahBerikut
}));
