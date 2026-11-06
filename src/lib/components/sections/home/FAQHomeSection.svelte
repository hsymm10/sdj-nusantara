<script lang="ts">
	import { faqData } from '#lib/data/faq.js';

	// 4 FAQ items for home preview — take first 4 popular items
	const homeFaqs = faqData.filter(f => f.isActive).slice(0, 4);

	let openIndex: number | null = $state(0);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<!-- Section 11: FAQ — 2-col: left woman photo + bubble | right label+heading+accordion -->
<section class="faq-home-section">
	<div class="faq-home-container">
		<!-- Left: Photo + bubble -->
		<div class="faq-photo-col">
			<div class="faq-photo-wrap">
				<img
					src="/images/faq-assistant-woman.jpg"
					alt="Konsultan SDJNusantara siap membantu"
					class="faq-photo"
					loading="lazy"
				/>
				<!-- Chat bubble decoration -->
				<div class="faq-bubble faq-bubble-1" aria-hidden="true">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#079EAD" stroke-width="2.5" stroke-linecap="round"/>
						<polyline points="22 4 12 14.01 9 11.01" stroke="#079EAD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>Siap membantu Anda!</span>
				</div>
				<div class="faq-bubble faq-bubble-2" aria-hidden="true">
					<span class="faq-bubble-num">24/7</span>
					<span class="faq-bubble-label">Layanan Konsultasi</span>
				</div>
			</div>
		</div>

		<!-- Right: FAQ Accordion -->
		<div class="faq-content-col">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Pertanyaan Umum</span>
			</div>
			<h2 class="faq-home-title">Temukan Jawaban dari Pertanyaan yang Sering Diajukan</h2>
			<p class="faq-home-desc">Kami siap menjawab semua pertanyaan Anda seputar layanan, beasiswa, program, dan lebih banyak lagi.</p>

			<div class="faq-accordion" role="list">
				{#each homeFaqs as faq, i}
					<div class="faq-item" role="listitem">
						<button
							class="faq-trigger"
							class:faq-trigger-open={openIndex === i}
							onclick={() => toggle(i)}
							aria-expanded={openIndex === i}
							aria-controls="faq-answer-{i}"
						>
							<span class="faq-question">{faq.question}</span>
							<div class="faq-chevron" class:faq-chevron-open={openIndex === i}>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<polyline points="6 9 12 15 18 9"/>
								</svg>
							</div>
						</button>
						{#if openIndex === i}
							<div class="faq-answer" id="faq-answer-{i}" role="region">
								<p>{faq.answer}</p>
								{#if faq.detail && faq.detail.length > 0}
									<ul class="faq-detail-list">
										{#each faq.detail as detail}
											<li>{detail}</li>
										{/each}
									</ul>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<a href="/faq" class="faq-all-link">
				<span>Lihat Semua Pertanyaan</span>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.faq-home-section {
		background: #fff;
		padding: 72px 0 80px;
		width: 100%;
		overflow: hidden;
	}

	.faq-home-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		gap: 72px;
	}

	/* Left: photo */
	.faq-photo-col {
		flex: 0 0 380px;
		position: relative;
	}

	.faq-photo-wrap {
		position: relative;
		border-radius: 24px;
		overflow: visible;
	}

	.faq-photo {
		width: 100%;
		height: 460px;
		object-fit: cover;
		border-radius: 24px;
		display: block;
	}

	/* Bubbles */
	.faq-bubble {
		position: absolute;
		background: #fff;
		border-radius: 14px;
		box-shadow: 0 8px 32px rgba(8, 36, 66, 0.12);
		border: 1px solid #E8EFF6;
	}

	.faq-bubble-1 {
		top: 32px;
		right: -32px;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 16px;
		font-size: 13px;
		font-weight: 700;
		color: #082442;
		white-space: nowrap;
	}

	.faq-bubble-2 {
		bottom: 32px;
		left: -24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 14px 20px;
		text-align: center;
	}

	.faq-bubble-num {
		font-size: 1.5rem;
		font-weight: 900;
		color: #082442;
		line-height: 1;
	}

	.faq-bubble-label {
		font-size: 11px;
		color: #52647A;
		font-weight: 500;
		margin-top: 2px;
	}

	/* Right: FAQ content */
	.faq-content-col {
		flex: 1;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 12px;
	}

	.badge-dash {
		width: 20px;
		height: 2.5px;
		background: #079EAD;
		border-radius: 2px;
	}

	.badge-text {
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.faq-home-title {
		font-size: clamp(1.4rem, 2.2vw, 1.9rem);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 12px;
		letter-spacing: -0.02em;
	}

	.faq-home-desc {
		font-size: 15px;
		color: #52647A;
		margin: 0 0 32px;
		line-height: 1.6;
	}

	/* Accordion */
	.faq-accordion {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 28px;
	}

	.faq-item {
		border: 1.5px solid #E8EFF6;
		border-radius: 12px;
		overflow: hidden;
		transition: border-color 0.2s ease;
	}

	.faq-item:has(.faq-trigger-open) {
		border-color: #079EAD;
	}

	.faq-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 16px 20px;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.faq-trigger:hover {
		background: #F4F8FB;
	}

	.faq-trigger-open {
		background: #EBF9FA;
	}

	.faq-question {
		font-size: 14px;
		font-weight: 600;
		color: #082442;
		line-height: 1.4;
	}

	.faq-trigger-open .faq-question {
		color: #079EAD;
	}

	.faq-chevron {
		color: #52647A;
		transition: transform 0.25s ease;
		flex-shrink: 0;
	}

	.faq-chevron-open {
		transform: rotate(180deg);
		color: #079EAD;
	}

	.faq-answer {
		padding: 0 20px 16px;
		background: #F4F8FB;
	}

	.faq-answer p {
		font-size: 13.5px;
		color: #52647A;
		line-height: 1.65;
		margin: 0 0 8px;
	}

	.faq-detail-list {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.faq-detail-list li {
		font-size: 13px;
		color: #52647A;
		line-height: 1.55;
	}

	/* All FAQs link */
	.faq-all-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: #079EAD;
		font-size: 13.5px;
		font-weight: 700;
		text-decoration: none;
		padding: 10px 20px;
		border: 1.5px solid #079EAD;
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.faq-all-link:hover {
		background: #079EAD;
		color: #fff;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.faq-home-container {
			flex-direction: column-reverse;
			gap: 48px;
		}
		.faq-photo-col {
			flex: none;
			width: 100%;
			max-width: 420px;
			margin: 0 auto;
		}
		.faq-photo {
			height: 360px;
		}
	}

	@media (max-width: 600px) {
		.faq-home-section {
			padding: 48px 0 56px;
		}
		.faq-photo {
			height: 280px;
		}
		.faq-bubble-1 {
			right: -8px;
		}
		.faq-bubble-2 {
			left: -8px;
		}
	}
</style>
