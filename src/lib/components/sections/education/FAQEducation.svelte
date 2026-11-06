<!-- Section 11: Pertanyaan Umum / FAQ (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	const faqs = [
		{
			q: 'Bagaimana cara mengajukan kerja sama?',
			a: 'Anda dapat mengajukan kerja sama dengan mengisi formulir konsultasi kemitraan di website kami atau langsung menghubungi tim kami melalui WhatsApp dan email resmi.'
		},
		{
			q: 'Apakah layanan SDJNusantara hanya untuk sekolah?',
			a: 'Tidak. Layanan kami mencakup individu, sekolah, madrasah, perguruan tinggi, lembaga pemerintah, yayasan, hingga korporasi yang ingin mengembangkan program pendidikan.'
		},
		{
			q: 'Apakah tersedia konsultasi online?',
			a: 'Ya, seluruh tahapan konsultasi awal dan pendampingan intensif dapat dilakukan secara daring (online) fleksibel sesuai jadwal Anda.'
		},
		{
			q: 'Berapa lama proses layanan berlangsung?',
			a: 'Durasi layanan disesuaikan dengan jenis kebutuhan, mulai dari sesi konsultasi 1 hari, pendampingan beasiswa 1-3 bulan, hingga program kemitraan tahunan.'
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(idx: number) {
		openIndex = openIndex === idx ? null : idx;
	}
</script>

<section class="faq-edu-section">
	<div class="faq-edu-container">
		<!-- Section Header -->
		<div class="faq-header">
			<div class="faq-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Pertanyaan Umum</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="faq-title">Temukan Jawaban dari Pertanyaan yang Sering Diajukan</h2>
			<p class="faq-sub">
				Informasi cepat seputar layanan, program, dan proses pendampingan di SDJNusantara.
			</p>
		</div>

		<!-- 2 Columns: Left Photo with Question Bubble, Right 4 Accordions -->
		<div class="faq-body-grid">
			<!-- Left: Consultant photo with floating '?' turquoise badge -->
			<div class="faq-col-photo">
				<div class="faq-photo-box">
					<img
						src="/images/faq-assistant-woman.jpg"
						alt="Konsultan Pendidikan SDJNusantara"
						class="faq-img"
					/>
					<!-- Floating turquoise '?' badge on top-right shoulder (GAMBAR 2) -->
					<div class="faq-floating-badge" aria-hidden="true">?</div>
				</div>
			</div>

			<!-- Right: 4 Accordions -->
			<div class="faq-col-accordions">
				{#each faqs as item, idx}
					<div class="faq-card" class:is-open={openIndex === idx}>
						<button
							type="button"
							class="faq-toggle"
							onclick={() => toggle(idx)}
							aria-expanded={openIndex === idx}
						>
							<span class="faq-q-text">{item.q}</span>
							<span class="faq-chevron" class:rotated={openIndex === idx}>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="6 9 12 15 18 9"/>
								</svg>
							</span>
						</button>
						{#if openIndex === idx}
							<div class="faq-answer">
								<p>{item.a}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.faq-edu-section {
		background: #ffffff;
		padding: 38px 0 46px;
	}

	.faq-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.faq-header {
		text-align: center;
		margin-bottom: 30px;
	}

	.faq-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #079ead;
	}

	.faq-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 6px;
		letter-spacing: -0.2px;
	}

	.faq-sub {
		font-size: 12px;
		color: #64748b;
		margin: 0;
	}

	/* 2 Columns Body */
	.faq-body-grid {
		display: flex;
		align-items: center;
		gap: 40px;
	}

	.faq-col-photo {
		flex: 0 0 240px;
		max-width: 240px;
		display: flex;
		justify-content: center;
	}

	.faq-photo-box {
		position: relative;
		width: 190px;
		height: 230px;
	}

	.faq-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 14px;
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
	}

	.faq-floating-badge {
		position: absolute;
		top: -12px;
		right: -12px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #16b6c1;
		color: #ffffff;
		font-size: 20px;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(22, 182, 193, 0.4);
		border: 3px solid #ffffff;
	}

	/* Right: 4 Accordions */
	.faq-col-accordions {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.faq-card {
		background: #f4f8fb;
		border-radius: 8px;
		overflow: hidden;
		transition: background 0.2s, box-shadow 0.2s;
	}

	.faq-card.is-open {
		background: #ffffff;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
		border: 1px solid #e2e8f0;
	}

	.faq-toggle {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 13px 18px;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.faq-q-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #082442;
	}

	.faq-chevron {
		color: #94a3b8;
		transition: transform 0.2s;
		display: flex;
		align-items: center;
	}

	.faq-chevron.rotated {
		transform: rotate(180deg);
		color: #079ead;
	}

	.faq-answer {
		padding: 0 18px 14px;
	}

	.faq-answer p {
		margin: 0;
		font-size: 11px;
		line-height: 1.55;
		color: #64748b;
	}

	@media (max-width: 768px) {
		.faq-body-grid {
			flex-direction: column;
			align-items: center;
		}

		.faq-col-photo {
			max-width: 100%;
		}

		.faq-col-accordions {
			width: 100%;
		}
	}
</style>
