<script lang="ts">
	// ContactFaqSection.svelte - Pertanyaan Umum (FAQ)
	// Sesuai content-master bagian 8–9 & aturan: tanpa janji konsultasi gratis atau SLA respons kaku
	
	let openIndices = $state<number[]>([]); // closed by default

	const faqList = [
		{
			id: 'faq-0',
			q: 'Bagaimana cara mengajukan kerja sama?',
			a: 'Anda dapat mengisi formulir kontak atau menghubungi tim kami melalui WhatsApp resmi. Tim kami akan segera menghubungi Anda untuk pemetaan kebutuhan, penyusunan TOR, jadwal, serta penyesuaian anggaran program.'
		},
		{
			id: 'faq-1',
			q: 'Berapa lama proses respons setelah mengirim pesan?',
			a: 'Tim kami berupaya merespons setiap pesan dan permohonan konsultasi pada hari dan jam kerja operasional (Senin – Jumat, 08.00 – 17.00 WIB) secara terstruktur sesuai antrean yang masuk.'
		},
		{
			id: 'faq-2',
			q: 'Apakah layanan SDJNusantara hanya untuk sekolah?',
			a: 'Tidak. Program dan layanan SDJNusantara dirancang terbuka untuk pelajar, mahasiswa, lulusan baru, profesional muda, pendidik, komunitas, hingga institusi pendidikan dan mitra korporasi.'
		},
		{
			id: 'faq-3',
			q: 'Apakah ada biaya untuk konsultasi awal?',
			a: 'Skema biaya layanan bergantung pada ruang lingkup, durasi, dan format program yang dibutuhkan. Penawaran dan rincian resmi akan disampaikan secara terbuka sebelum program disepakati.'
		},
		{
			id: 'faq-4',
			q: 'Apakah tersedia konsultasi online?',
			a: 'Ya, seluruh sesi konsultasi dapat diselenggarakan secara fleksibel, baik secara daring (online) melalui video conference interaktif maupun pertemuan langsung (offline) sesuai kesepakatan.'
		},
		{
			id: 'faq-5',
			q: 'Bagaimana jika ingin mengajukan proposal program?',
			a: 'Silakan sampaikan ringkasan kebutuhan atau kirimkan berkas proposal melalui email resmi kami di info@sdjnusantara.com untuk ditinjau secara komprehensif oleh tim kemitraan kami.'
		}
	];

	function toggleItem(index: number) {
		if (openIndices.includes(index)) {
			openIndices = openIndices.filter(i => i !== index);
		} else {
			openIndices = [...openIndices, index];
		}
	}

	function handleSeeAllFaq(e: MouseEvent) {
		e.preventDefault();
		if (openIndices.length === faqList.length) {
			openIndices = [];
		} else {
			openIndices = [0, 1, 2, 3, 4, 5];
		}
	}
</script>

<section class="contact-faq-section" id="faq">
	<div class="faq-texture-overlay" aria-hidden="true"></div>

	<div class="faq-container">
		<!-- Header FAQ -->
		<div class="faq-header">
			<div class="faq-header-text">
				<h2 class="faq-title">Pertanyaan Umum</h2>
				<p class="faq-desc">Temukan jawaban dari pertanyaan yang paling sering ditanyakan.</p>
			</div>

			<a
				href="#faq"
				class="btn-faq-outline"
				onclick={handleSeeAllFaq}
				aria-label="Buka semua FAQ"
			>
				<span>{openIndices.length === faqList.length ? 'Tutup Semua FAQ' : 'Lihat Semua FAQ'}</span>
				<span class="btn-arrow">→</span>
			</a>
		</div>

		<!-- Grid Akordeon 2 Kolom x 3 Baris -->
		<div class="faq-grid">
			{#each faqList as item, index}
				{@const isOpen = openIndices.includes(index)}
				<div class="faq-card {isOpen ? 'is-open' : ''}">
					<button
						type="button"
						class="faq-trigger"
						aria-expanded={isOpen}
						aria-controls={item.id}
						onclick={() => toggleItem(index)}
					>
						<span class="faq-question">{item.q}</span>
						<svg
							class="faq-chevron {isOpen ? 'rotated' : ''}"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#FFFFFF"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</button>

					{#if isOpen}
						<div class="faq-answer-wrap" id={item.id}>
							<p class="faq-answer">{item.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.contact-faq-section {
		position: relative;
		width: 100%;
		background: #0B2948;
		padding: 14px 0 16px;
		box-sizing: border-box;
		overflow: hidden;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	/* Tekstur Halus Samar Opacity 0.06 */
	.faq-texture-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0.06;
		background-image: radial-gradient(circle at 10% 20%, #16B6C1 1px, transparent 1px),
			radial-gradient(circle at 90% 80%, #FFFFFF 1px, transparent 1px);
		background-size: 36px 36px;
	}

	.faq-container {
		position: relative;
		width: 100%;
		max-width: 1352px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.faq-container {
			max-width: 1500px;
		}
	}

	.faq-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 12px;
	}

	.faq-title {
		font-size: 26px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 4px;
		letter-spacing: -0.01em;
		line-height: 1.2;
	}

	.faq-desc {
		font-size: 14.5px;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
	}

	.btn-faq-outline {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: transparent;
		color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.35);
		font-size: 13px;
		font-weight: 600;
		padding: 7px 16px;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.btn-faq-outline:hover {
		border-color: #16B6C1;
		color: #16B6C1;
		background: rgba(22, 182, 193, 0.08);
	}

	.btn-arrow {
		font-size: 13px;
	}

	/* 2 Kolom x 3 Baris Grid */
	.faq-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px 24px;
		align-items: start;
	}

	.faq-card {
		background: rgba(18, 55, 92, 0.65);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 10px;
		overflow: hidden;
		transition: all 0.2s ease;
	}

	.faq-card:hover {
		border-color: rgba(22, 182, 193, 0.5);
		background: rgba(18, 55, 92, 0.85);
	}

	.faq-card.is-open {
		border-color: #16B6C1;
		background: #0D3256;
	}

	.faq-trigger {
		width: 100%;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 0 16px;
		background: transparent;
		border: none;
		color: #FFFFFF;
		font-family: inherit;
		text-align: left;
		cursor: pointer;
		box-sizing: border-box;
	}

	.faq-question {
		font-size: 14.5px;
		font-weight: 600;
		color: #FFFFFF;
		line-height: 1.3;
	}

	.faq-chevron {
		flex-shrink: 0;
		transition: transform 0.25s ease;
	}

	.faq-chevron.rotated {
		transform: rotate(180deg);
	}

	.faq-answer-wrap {
		padding: 4px 16px 14px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.faq-answer {
		font-size: 13.5px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.85);
		margin: 8px 0 0;
		text-wrap: pretty;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.faq-grid {
			grid-template-columns: 1fr;
			gap: 10px;
		}

		.faq-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}

		.faq-title {
			font-size: 22px;
		}

		.faq-desc {
			font-size: 13.5px;
		}

		.btn-faq-outline {
			width: 100%;
			justify-content: center;
		}

		.faq-trigger {
			height: auto;
			min-height: 48px;
			padding: 10px 14px;
		}

		.faq-question {
			font-size: 13.5px;
		}
	}
</style>
