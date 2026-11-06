// scripts/validate_knowledge.cjs
// Skrip validasi basis pengetahuan SDJNusantara (tanpa dependency eksternal)

const path = require('path');

async function runValidation() {
	console.log('=== MEMULAI VALIDASI BASIS PENGETAHUAN SDJNUSANTARA ===\n');

	// Import module knowledge
	const knowledgeModule = await import('../src/lib/data/knowledge/index.js');
	const { knowledgeEntries, FORBIDDEN_WORDS } = knowledgeModule;

	console.log(`Total entri terdaftar: ${knowledgeEntries.length}\n`);

	const requiredFields = [
		'id',
		'kategori',
		'judul',
		'pertanyaan',
		'kataKunci',
		'ringkas',
		'detail',
		'cocokUntuk',
		'langkahBerikut',
		'tindakLanjutChip',
		'status',
		'sumber',
		'updatedAt'
	];

	const validCategories = ['pendidikan', 'beasiswa', 'program', 'faq', 'umum', 'hukum'];
	const validStatuses = ['terverifikasi', 'perlu-verifikasi'];

	const categoryCounts = {};
	let errors = 0;
	let warnings = 0;

	knowledgeEntries.forEach((entry, idx) => {
		const prefix = `[#${idx + 1} ID: ${entry.id || 'N/A'}]`;

		// 1. Cek Kategori
		categoryCounts[entry.kategori] = (categoryCounts[entry.kategori] || 0) + 1;
		if (!validCategories.includes(entry.kategori)) {
			console.error(`${prefix} Kategori '${entry.kategori}' tidak valid!`);
			errors++;
		}

		// 2. Cek Field Wajib
		for (const f of requiredFields) {
			if (entry[f] === undefined || entry[f] === null || entry[f] === '') {
				console.error(`${prefix} Field wajib '${f}' tidak boleh kosong!`);
				errors++;
			}
		}

		// 3. Cek Status
		if (!validStatuses.includes(entry.status)) {
			console.error(`${prefix} Status '${entry.status}' tidak valid!`);
			errors++;
		}

		// 4. Cek Pertanyaan (4-8 variasi)
		if (!Array.isArray(entry.pertanyaan) || entry.pertanyaan.length < 4) {
			console.error(`${prefix} Variasi pertanyaan kurang dari 4 (saat ini: ${entry.pertanyaan?.length || 0})`);
			errors++;
		}

		// 5. Cek Ringkas (maksimal 2 kalimat)
		if (typeof entry.ringkas === 'string') {
			const sentenceCount = entry.ringkas.split(/[.!?]+\s/).filter(Boolean).length;
			if (sentenceCount > 2) {
				console.warn(`${prefix} Peringatan: Ringkas memiliki ${sentenceCount} kalimat (disarankan <= 2 kalimat)`);
				warnings++;
			}
		}

		// 6. Cek Kata Terlarang di Seluruh Nilai Teks
		const allText = JSON.stringify(entry).toLowerCase();
		for (const word of FORBIDDEN_WORDS) {
			// Periksa word boundary
			const regex = new RegExp(`\\b${word}\\b`, 'i');
			if (regex.test(allText)) {
				// Abaikan jika entri faq-jaminan-lolos atau beasiswa-catatan-layanan yang memang menyangkal kata tersebut
				const isDisclaimerEntry = entry.id === 'beasiswa-catatan-layanan' || entry.id === 'faq-jaminan-lolos';
				if (!isDisclaimerEntry) {
					console.error(`${prefix} Terdeteksi kata terlarang '${word}'!`);
					errors++;
				}
			}
		}

		// 7. Cek Validitas Href Langkah Berikut
		if (Array.isArray(entry.langkahBerikut)) {
			entry.langkahBerikut.forEach((step, sIdx) => {
				if (!step.href || typeof step.href !== 'string') {
					console.error(`${prefix} LangkahBerikut[${sIdx}] href tidak valid!`);
					errors++;
				} else if (
					!step.href.startsWith('/') &&
					!step.href.startsWith('https://wa.me/') &&
					!step.href.startsWith('mailto:')
				) {
					console.error(`${prefix} LangkahBerikut[${sIdx}] URL tidak dikenal: '${step.href}'`);
					errors++;
				}
			});
		}
	});

	console.log('--- REKAPITULASI JUMLAH ENTRI PER KATEGORI ---');
	for (const [cat, count] of Object.entries(categoryCounts)) {
		console.log(`• ${cat.padEnd(12)}: ${count} entri`);
	}
	console.log(`• Total       : ${knowledgeEntries.length} entri\n`);

	if (errors === 0) {
		console.log('✓ SEMUA ENTRI LOLOS VALIDASI STRUKTUR DAN ATURAN KEBIJAKAN!');
		process.exit(0);
	} else {
		console.error(`✗ TERDAPAT ${errors} ERROR DALAM BASIS PENGETAHUAN.`);
		process.exit(1);
	}
}

runValidation();

