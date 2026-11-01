<script lang="ts">
	// ContactFaqSection.svelte - Faithful implementation of design/kontak.png FAQ accordion
	
	let openIndices = $state<number[]>([]); // closed by default or open item 0

	const faqList = [
		{
			q: 'Bagaimana cara mengajukan kerja sama?',
			a: 'Anda dapat menghubungi tim kami melalui formulir kontak atau WhatsApp resmi untuk menyampaikan proposal kerja sama, profil institusi, serta tujuan kolaborasi yang diharapkan.'
		},
		{
			q: 'Berapa lama proses respons setelah mengirim pesan?',
			a: 'Tim kami berupaya menanggapi setiap pertanyaan dan pesan konsultasi yang masuk pada hari dan jam kerja operasional (Senin – Jumat, 08.00 – 17.00 WIB).'
		},
		{
			q: 'Apakah layanan SDJNusantara hanya untuk sekolah?',
			a: 'Tidak. Layanan kami terbuka bagi pelajar, mahasiswa, lulusan baru, profesional muda, pendidik, komunitas, hingga institusi pendidikan dan korporasi.'
		},
		{
			q: 'Apakah ada biaya untuk konsultasi awal?',
			a: 'Skema biaya konsultasi dan layanan bergantung pada ruang lingkup kebutuhan serta program yang dipilih. Rincian penawaran resmi akan disampaikan sebelum kesepakatan program.'
		},
		{
			q: 'Apakah tersedia konsultasi online?',
			a: 'Ya, seluruh sesi konsultasi dapat diselenggarakan secara fleksibel, baik secara daring (online) melalui video conference maupun pertemuan langsung (offline) sesuai kesepakatan.'
		},
		{
			q: 'Bagaimana jika ingin mengajukan proposal program?',
			a: 'Proposal program atau permohonan kemitraan strategis dapat dikirimkan langsung ke email resmi kami di info@sdjnusantara.com untuk ditinjau oleh tim terkait.'
		}
	];

	function toggleItem(index: number) {
		if (openIndices.includes(index)) {
			openIndices = openIndices.filter(i => i !== index);
		} else {
			openIndices = [...openIndices, index];
		}
	}
</script>

<section class="contact-faq-section" id="faq">
	<div class="faq-container">
		<!-- Header -->
		<div class="faq-header">
			<div class="faq-header-text">
				<h2 class="faq-title">Pertanyaan Umum</h2>
				<p class="faq-desc">Temukan jawaban dari pertanyaan yang paling sering ditanyakan.</p>
			</div>

			<a href="#faq" class="btn-faq-outline">
				<span>Lihat Semua FAQ</span>
				<span class="btn-arrow">→</span>
			</a>
		</div>

		<!-- 2 Columns x 3 Rows Accordion Grid -->
		<div class="faq-grid">
			{#each faqList as item, index}
				{@const isOpen = openIndices.includes(index)}
				<div class="faq-card {isOpen ? 'is-open' : ''}">
					<button
						type="button"
						class="faq-trigger"
						aria-expanded={isOpen}
						onclick={() => toggleItem(index)}
					>
						<span class="faq-question">{item.q}</span>
						<svg
							class="faq-chevron {isOpen ? 'rotated' : ''}"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#16B6C1"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</button>

					{#if isOpen}
						<div class="faq-answer-wrap">
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
		width: 100%;
		background: #082442;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		padding: 2.5rem 0 3rem;
		box-sizing: border-box;
	}

	.faq-container {
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.faq-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.faq-title {
		font-size: 18px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 4px;
		letter-spacing: -0.01em;
	}

	.faq-desc {
		font-size: 10.5px;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
	}

	.btn-faq-outline {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: transparent;
		color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.35);
		font-size: 10.5px;
		font-weight: 600;
		padding: 6px 14px;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.btn-faq-outline:hover {
		border-color: #16B6C1;
		color: #16B6C1;
	}

	.btn-arrow {
		font-size: 11px;
	}

	.faq-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px 16px;
		align-items: start;
	}

	.faq-card {
		background: rgba(11, 41, 72, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		overflow: hidden;
		transition: all 0.2s;
	}

	.faq-card:hover {
		border-color: rgba(22, 182, 193, 0.4);
		background: rgba(11, 41, 72, 0.9);
	}

	.faq-card.is-open {
		border-color: #16B6C1;
		background: #0B2948;
	}

	.faq-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 12px 14px;
		background: transparent;
		border: none;
		color: #FFFFFF;
		font-family: inherit;
		text-align: left;
		cursor: pointer;
	}

	.faq-question {
		font-size: 11px;
		font-weight: 700;
		color: #FFFFFF;
		line-height: 1.35;
	}

	.faq-chevron {
		flex-shrink: 0;
		transition: transform 0.25s ease;
	}

	.faq-chevron.rotated {
		transform: rotate(180deg);
	}

	.faq-answer-wrap {
		padding: 0 14px 12px;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	.faq-answer {
		font-size: 10px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.8);
		margin: 8px 0 0;
	}

	@media (max-width: 768px) {
		.faq-grid {
			grid-template-columns: 1fr;
		}

		.faq-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}

		.btn-faq-outline {
			width: 100%;
			justify-content: center;
		}
	}
</style>
