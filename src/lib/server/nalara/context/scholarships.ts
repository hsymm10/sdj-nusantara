// src/lib/server/nalara/context/scholarships.ts
// Basis Pengetahuan Resmi: Beasiswa & Kebijakan Beasiswa SDJ Nusantara

import type { KnowledgeEntry } from '../types/knowledge.types';

export const scholarshipsKnowledge: KnowledgeEntry[] = [
	{
		id: 'scholarship-academy-overview',
		title: 'Program Scholarship Academy SDJ Nusantara',
		category: 'scholarships',
		content:
			'Scholarship Academy adalah program bimbingan komprehensif dari SDJ Nusantara yang mendampingi calon pendaftar beasiswa jenjang S1, S2, dan S3, baik untuk skema dalam negeri maupun luar negeri.',
		details: [
			'Kurasi beasiswa yang cocok berdasarkan latar belakang profil, IPK, riset, dan target karier.',
			'Bimbingan penulisan Curriculum Vitae (CV) berstandar akademik internasional.',
			'Review dan penyempurnaan esai / motivation letter / study plan secara mendalam.',
			'Simulasi wawancara beasiswa (mock interview) dengan umpan balik terstruktur.'
		],
		source: 'https://sdjnusantara.com/layanan/beasiswa',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['beasiswa', 'scholarship academy', 'bimbingan beasiswa', 'lpdp', 'beasiswa s2', 'beasiswa luar negeri'],
		relevantUrls: ['/layanan/beasiswa']
	},
	{
		id: 'scholarship-6-step-roadmap',
		title: '6 Langkah Alur Pendampingan Beasiswa',
		category: 'scholarships',
		content:
			'Pendampingan beasiswa SDJ Nusantara dijalankan melalui 6 langkah berurutan agar berkas dan kesiapan mental matang sebelum deadline pendaftaran tiba.',
		details: [
			'Langkah 1: Profiling & Assessment (analisis rekam jejak, prestasi, dan preferensi negara tujuan).',
			'Langkah 2: Kurasi Target Beasiswa & Universitas (pemilihan skema beasiswa yang paling realistis).',
			'Langkah 3: Penguatan Berkas & Esai (bimbingan menulis motivation statement dan personal statement).',
			'Langkah 4: Strategi Surat Rekomendasi (pedoman memilih pemberi rekomendasi dan substansi surat).',
			'Langkah 5: Simulasi Wawancara & Kesiapan Mental (latihan tanya jawab dengan kriteria penilai).',
			'Langkah 6: Final Review & Submit (pemeriksaan kelengkapan berkas sebelum pengiriman aplikasi).'
		],
		source: 'https://sdjnusantara.com/layanan/beasiswa',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['tahapan beasiswa', 'alur beasiswa', 'langkah persiapan', 'wawancara beasiswa', 'esai beasiswa'],
		relevantUrls: ['/layanan/beasiswa']
	},
	{
		id: 'scholarship-policy-guarantee',
		title: 'Kebijakan Resmi: Tidak Ada Jaminan Kelulusan Beasiswa',
		category: 'scholarships',
		content:
			'SDJ Nusantara secara tegas TIDAK PERNAH menjanjikan atau memberikan jaminan kelulusan maupun perolehan beasiswa kepada peserta mana pun.',
		details: [
			'Keputusan akhir kelulusan dan pemberian beasiswa sepenuhnya merupakan hak prerogatif institusi donor atau universitas penyelenggara beasiswa terkait.',
			'Peran SDJ Nusantara adalah sebagai pendamping profesional dalam mempersiapkan dokumen, profil, esai, dan kapasitas diri agar berdaya saing optimal.',
			'Peringatan ini tercantum resmi di seluruh materi program dan situs web SDJ Nusantara.'
		],
		source: 'https://sdjnusantara.com/syarat-ketentuan',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['jaminan beasiswa', 'garansi beasiswa', 'kebijakan', 'lulus beasiswa', 'aturan resmi'],
		relevantUrls: ['/syarat-ketentuan', '/layanan/beasiswa']
	},
	{
		id: 'scholarship-target-types',
		title: 'Cakupan Skema Beasiswa yang Didampingi',
		category: 'scholarships',
		content:
			'SDJ Nusantara mendampingi persiapan berbagai skema beasiswa bergengsi, baik beasiswa penuh (fully funded) maupun beasiswa parsial (partial funding).',
		details: [
			'Beasiswa Pemerintah RI: LPDP (Reguler, Afirmasi, Targeted), Beasiswa Pendidikan Indonesia (BPI), Beasiswa Kominfo.',
			'Beasiswa Pemerintah Asing: Australia Awards Scholarships (AAS), Chevening (UK), Fulbright (USA), MEXT (Jepang), KGSP/GKS (Korea Selatan), Stipendium Hungaricum, Turkiye Burslari.',
			'Beasiswa Universitas & Yayasan Swasta: Beasiswa Djarum Plus, Yayasan Beasiswa Pendidikan, serta skema tuition waiver universitas terkemuka.'
		],
		source: 'https://sdjnusantara.com/layanan/beasiswa',
		verificationStatus: 'verified',
		updatedAt: '2026-11-20',
		tags: ['skema beasiswa', 'daftar beasiswa', 'lpdp', 'aas', 'chevening', 'fulbright', 'mext', 'beasiswa luar negeri'],
		relevantUrls: ['/layanan/beasiswa']
	}
];

