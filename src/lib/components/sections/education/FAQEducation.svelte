<!-- Section 11: Pertanyaan Umum / FAQ (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	let openFaq = $state<number | null>(0); // First item open by default

	const faqs = [
		{
			q: 'Bagaimana cara mengajukan kerja sama?',
			a: 'Anda dapat mengajukan kerja sama melalui formulir kontak kami di halaman Kemitraan atau menghubungi tim konsultan SDJNusantara via WhatsApp resmi. Tim kami akan segera menjadwalkan diskusi awal untuk memahami kebutuhan institusi Anda.'
		},
		{
			q: 'Apakah layanan SDJNusantara hanya untuk sekolah?',
			a: 'Tidak. Layanan kami mencakup universitas, politeknik, yayasan pendidikan, institusi pemerintah, serta korporasi yang memiliki program pengembangan talenta, beasiswa, maupun kepatuhan regulasi pendidikan.'
		},
		{
			q: 'Apakah tersedia konsultasi online?',
			a: 'Ya, seluruh rangkaian konsultasi, pelatihan, dan pendampingan dapat dilaksanakan secara hybrid maupun full online melalui platform konferensi video resmi SDJNusantara.'
		},
		{
			q: 'Berapa lama proses layanan berlangsung?',
			a: 'Durasi layanan disesuaikan dengan ruang lingkup program, mulai dari konsultasi intensif jangka pendek (1–2 minggu) hingga pendampingan terstruktur jangka panjang (3–12 bulan).'
		}
	];

	function toggle(idx: number) {
		openFaq = openFaq === idx ? null : idx;
	}
</script>

<section class="faq-edu-section" id="faq-pendidikan">
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

		<!-- 2 Columns: Left Photo + Right Accordions -->
		<div class="faq-body-grid">
			<!-- Left: Consultant Photo Frame with ? Question Icon (Mockup SDJNusantara) -->
			<div class="faq-photo-col">
				<div class="faq-photo-card">
					<img
						src="/images/program-featured-hijab.jpg"
						alt="Konsultan Pendidikan SDJNusantara"
						class="faq-img"
						loading="lazy"
					/>
					<!-- Question Bubble ? Icon (Teal circle on top-right) -->
					<div class="faq-q-bubble" aria-hidden="true">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
							<line x1="12" y1="17" x2="12.01" y2="17"/>
						</svg>
					</div>
				</div>
			</div>

			<!-- Right: 4 Accordions -->
			<div class="faq-accordions-col">
				{#each faqs as item, idx}
					<div class="faq-item" class:open={openFaq === idx}>
						<button
							type="button"
							class="faq-btn"
							aria-expanded={openFaq === idx}
							onclick={() => toggle(idx)}
						>
							<span class="faq-q-text">{item.q}</span>
							<span class="faq-chevron" aria-hidden="true">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="6 9 12 15 18 9"/>
								</svg>
							</span>
						</button>

						{#if openFaq === idx}
							<div class="faq-answer-panel">
								<p class="faq-a-text">{item.a}</p>
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
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.faq-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	.faq-header {
		text-align: center;
		margin-bottom: 42px;
	}

	.faq-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2.5px;
		background: #08AEBB;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #08AEBB;
		letter-spacing: 0.04em;
	}

	.faq-title {
		font-size: clamp(24px, 2.2vw, 30px);
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
		line-height: 1.25;
	}

	.faq-sub {
		font-size: 14px;
		color: #64748B;
		margin: 0 auto;
		max-width: 600px;
		line-height: 1.6;
	}

	/* 2 Columns Body */
	.faq-body-grid {
		display: flex;
		align-items: flex-start;
		gap: 48px;
	}

	.faq-photo-col {
		flex: 0 0 340px;
		max-width: 340px;
	}

	.faq-photo-card {
		position: relative;
		width: 100%;
		height: 400px;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 14px 32px rgba(11, 41, 72, 0.08);
		border: 1px solid #E2E8F0;
	}

	.faq-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
		transition: transform 0.4s ease;
	}

	.faq-photo-card:hover .faq-img {
		transform: scale(1.03);
	}

	.faq-q-bubble {
		position: absolute;
		top: 18px;
		right: 18px;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: #08AEBB;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 14px rgba(8, 174, 187, 0.35);
		border: 2px solid #FFFFFF;
	}

	/* Accordions Column */
	.faq-accordions-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.faq-item {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		overflow: hidden;
		transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
	}

	.faq-item:hover {
		background: #FFFFFF;
		border-color: #CBD5E1;
		box-shadow: 0 4px 14px rgba(11, 41, 72, 0.04);
	}

	.faq-item.open {
		background: #FFFFFF;
		border-color: #08AEBB;
		box-shadow: 0 6px 20px rgba(8, 174, 187, 0.08);
	}

	.faq-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 24px;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 16px;
	}

	.faq-q-text {
		font-size: 15px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		transition: color 0.2s;
	}

	.faq-item.open .faq-q-text {
		color: #08AEBB;
	}

	.faq-chevron {
		color: #64748B;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: transform 0.25s ease, color 0.2s;
	}

	.faq-item.open .faq-chevron {
		transform: rotate(180deg);
		color: #08AEBB;
	}

	.faq-answer-panel {
		padding: 0 24px 20px;
	}

	.faq-a-text {
		font-size: 14px;
		line-height: 1.65;
		color: #475569;
		margin: 0;
		border-top: 1px solid #F1F5F9;
		padding-top: 14px;
	}

	@media (max-width: 900px) {
		.faq-body-grid {
			flex-direction: column;
			gap: 32px;
		}

		.faq-photo-col {
			max-width: 100%;
			width: 100%;
		}

		.faq-photo-card {
			height: 320px;
		}
	}

	@media (max-width: 640px) {
		.faq-edu-section {
			padding: 52px 0;
		}

		.faq-edu-container {
			padding: 0 20px;
		}

		.faq-btn {
			padding: 16px 18px;
		}

		.faq-answer-panel {
			padding: 0 18px 16px;
		}
	}
</style>
