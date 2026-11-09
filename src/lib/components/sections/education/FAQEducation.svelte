<!-- Section 11: Pertanyaan Umum / FAQ (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	let openFaq = $state<number | null>(0); // Pertanyaan pertama aktif secara default sesuai mockup

	const faqs = [
		{
			id: 'kerjasama',
			icon: 'help',
			q: 'Bagaimana cara mengajukan kerja sama?',
			a: 'Anda dapat mengajukan kerja sama melalui formulir kontak kami di halaman Kontak. Tim kami akan menghubungi Anda untuk mendiskusikan kebutuhan, ruang lingkup kerja sama, dan langkah selanjutnya.'
		},
		{
			id: 'sekolah',
			icon: 'handshake',
			q: 'Apakah layanan SDJNusantara hanya untuk sekolah?',
			a: 'Tidak. Layanan kami mencakup universitas, politeknik, yayasan pendidikan, institusi pemerintah, serta korporasi yang memiliki program pengembangan talenta, beasiswa, maupun kepatuhan regulasi pendidikan.'
		},
		{
			id: 'online',
			icon: 'users',
			q: 'Apakah tersedia konsultasi online?',
			a: 'Ya, seluruh rangkaian konsultasi, pelatihan, dan pendampingan dapat dilaksanakan secara hybrid maupun full online melalui platform konferensi video resmi SDJNusantara.'
		},
		{
			id: 'proses',
			icon: 'layers',
			q: 'Berapa lama proses layanan berlangsung?',
			a: 'Durasi layanan disesuaikan dengan ruang lingkup program, mulai dari konsultasi intensif jangka pendek (1–2 minggu) hingga pendampingan terstruktur jangka panjang (3–12 bulan).'
		}
	];

	function toggle(idx: number) {
		openFaq = openFaq === idx ? null : idx;
	}
</script>

<section class="faq-edu-section" id="faq-pendidikan">
	<!-- Atmospheric background geometric curves from Mockup SDJNusantara -->
	<div class="faq-bg-decor" aria-hidden="true">
		<!-- Top-left geometric cyan/teal swoosh curve -->
		<svg class="decor-swoosh-left" viewBox="0 0 340 240" fill="none" preserveAspectRatio="none">
			<path d="M0 0 L240 0 C180 60 100 130 0 180 Z" fill="url(#teal-pale-layer-faq)" />
			<path d="M280 0 C200 55 120 120 0 155 L0 220 C105 165 200 95 240 0 Z" fill="url(#teal-main-ribbon-faq)" />
			<path d="M280 0 C200 55 120 120 0 155" stroke="url(#teal-crest-stroke-faq)" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
			<defs>
				<linearGradient id="teal-pale-layer-faq" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#C2F1F5" stop-opacity="0.55"/>
					<stop offset="60%" stop-color="#E2FAF8" stop-opacity="0.25"/>
					<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
				</linearGradient>
				<linearGradient id="teal-main-ribbon-faq" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#00B3C1" stop-opacity="0.55"/>
					<stop offset="50%" stop-color="#08C2D1" stop-opacity="0.30"/>
					<stop offset="100%" stop-color="#73E3EC" stop-opacity="0.05"/>
				</linearGradient>
				<linearGradient id="teal-crest-stroke-faq" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#00B3C1" stop-opacity="0.7"/>
					<stop offset="100%" stop-color="#08AEBB" stop-opacity="0.1"/>
				</linearGradient>
			</defs>
		</svg>

		<!-- Bottom-right geometric golden yellow swoosh curve -->
		<svg class="decor-swoosh-right" viewBox="0 0 340 200" fill="none" preserveAspectRatio="none">
			<path d="M0 200 C110 180 200 135 340 95 L340 200 Z" fill="url(#gold-pale-layer-faq)" />
			<path d="M40 200 C140 185 230 145 340 120 L340 200 Z" fill="url(#gold-main-ribbon-faq)" />
			<path d="M0 200 C110 180 200 135 340 95" stroke="url(#gold-crest-stroke-faq)" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
			<defs>
				<linearGradient id="gold-pale-layer-faq" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFCE52" stop-opacity="0.45"/>
					<stop offset="60%" stop-color="#FFE399" stop-opacity="0.22"/>
					<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
				</linearGradient>
				<linearGradient id="gold-main-ribbon-faq" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFB928" stop-opacity="0.75"/>
					<stop offset="50%" stop-color="#FFC84C" stop-opacity="0.50"/>
					<stop offset="100%" stop-color="#FFEBB8" stop-opacity="0.10"/>
				</linearGradient>
				<linearGradient id="gold-crest-stroke-faq" x1="1" y1="1" x2="0" y2="0">
					<stop offset="0%" stop-color="#FFB928" stop-opacity="0.6"/>
					<stop offset="100%" stop-color="#FFE399" stop-opacity="0.1"/>
				</linearGradient>
			</defs>
		</svg>
	</div>

	<div class="faq-edu-container">
		<!-- Section Header -->
		<div class="faq-header">
			<span class="faq-badge" aria-label="Pertanyaan Umum">
				<span class="badge-line" aria-hidden="true"></span>
				Pertanyaan Umum
				<span class="badge-line" aria-hidden="true"></span>
			</span>

			<h2 class="faq-title">
				Temukan Jawaban dari Pertanyaan yang <span class="highlight-gold">Sering Diajukan</span>
			</h2>

			<p class="faq-sub">
				Informasi lengkap seputar layanan, program, dan proses pendampingan di SDJNusantara.
			</p>
		</div>

		<!-- 2 Columns: Left Photo Card + Right Accordions -->
		<div class="faq-body-grid">
			<!-- Left: Consultant Photo Card with Corner Swoosh, Dark Support Pill & Question Bubble -->
			<div class="faq-photo-col">
				<div class="faq-photo-card">
					<img
						src="/images/faq-consultant-card-hd.png"
						alt="Pusat Bantuan & FAQ Layanan SDJNusantara"
						class="faq-card-img"
						width="637"
						height="787"
					/>
				</div>
			</div>

			<!-- Right: 4 Accordions with Category Icons -->
			<div class="faq-accordions-col">
				{#each faqs as item, idx}
					<div class="faq-item" class:open={openFaq === idx}>
						<button
							type="button"
							class="faq-btn"
							aria-expanded={openFaq === idx}
							onclick={() => toggle(idx)}
						>
							<div class="faq-btn-left">
								<div class="faq-icon-box" aria-hidden="true">
									{#if item.icon === 'help'}
										<!-- Question Bubble Icon -->
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
											<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
											<line x1="12" y1="17" x2="12.01" y2="17"/>
										</svg>
									{:else if item.icon === 'handshake'}
										<!-- Handshake Icon -->
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M11 17l-5-5a3.5 3.5 0 0 1 5-5l1 1 1-1a3.5 3.5 0 0 1 5 5l-5 5"/>
											<path d="M18 11l2 2a2 2 0 0 1 0 2.83l-3 3a2 2 0 0 1-2.83 0l-1.5-1.5"/>
											<path d="M6 13l-2 2a2 2 0 0 0 0 2.83l3 3a2 2 0 0 0 2.83 0l1.5-1.5"/>
										</svg>
									{:else if item.icon === 'users'}
										<!-- Users Icon -->
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
											<circle cx="9" cy="7" r="4"/>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
										</svg>
									{:else if item.icon === 'layers'}
										<!-- Stacked Layers Icon -->
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
											<polygon points="12 2 2 7 12 12 22 7 12 2"/>
											<polyline points="2 17 12 22 22 17"/>
											<polyline points="2 12 12 17 22 12"/>
										</svg>
									{/if}
								</div>

								<span class="faq-q-text">{item.q}</span>
							</div>

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
		position: relative;
		background: #FFFFFF;
		padding: 68px 0;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Atmospheric background geometric curves */
	.faq-bg-decor {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}

	.decor-swoosh-left {
		position: absolute;
		top: 0;
		left: 0;
		width: clamp(200px, 24vw, 380px);
		height: clamp(140px, 18vw, 240px);
		z-index: 1;
	}

	.decor-swoosh-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: clamp(220px, 25vw, 400px);
		height: clamp(130px, 15vw, 210px);
		z-index: 1;
	}

	/* Unified 78% Container for SDJNusantara Education Page */
	.faq-edu-container {
		position: relative;
		z-index: 2;
		width: 78%;
		max-width: 1240px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* Section Header */
	.faq-header {
		text-align: center;
		margin-bottom: 38px;
	}

	.faq-badge {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
		font-size: 13px;
		font-weight: 700;
		color: #00B3C1;
		letter-spacing: 0.02em;
	}

	.badge-line {
		display: inline-block;
		width: 22px;
		height: 2px;
		background: #00B3C1;
		border-radius: 2px;
	}

	.faq-title {
		font-size: clamp(23px, 2.2vw, 29px);
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 10px;
		letter-spacing: -0.015em;
		line-height: 1.25;
	}

	.highlight-gold {
		color: #FFB323;
	}

	.faq-sub {
		font-size: 13.5px;
		color: #5A6A80;
		margin: 0 auto;
		max-width: 620px;
		line-height: 1.6;
	}

	/* 2 Columns Body */
	.faq-body-grid {
		display: flex;
		align-items: flex-start;
		gap: 36px;
	}

	/* Left Photo Column */
	.faq-photo-col {
		flex: 0 0 310px;
		max-width: 310px;
		position: relative;
	}

	.faq-photo-card {
		position: relative;
		width: 100%;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 14px 34px rgba(11, 41, 72, 0.09);
		background: #FFFFFF;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.faq-photo-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 18px 40px rgba(11, 41, 72, 0.13);
	}

	.faq-card-img {
		width: 100%;
		height: auto;
		aspect-ratio: 637 / 787;
		display: block;
		object-fit: contain;
	}

	/* Accordions Column */
	.faq-accordions-col {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.faq-item {
		background: #F7F9FC;
		border: 1px solid #DFE7F0;
		border-radius: 16px;
		overflow: hidden;
		transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
	}

	.faq-item:hover {
		border-color: #B2DDE3;
		box-shadow: 0 4px 14px rgba(11, 41, 72, 0.04);
	}

	/* Active / Expanded State */
	.faq-item.open {
		background: #FFFFFF;
		border: 1.5px solid #00B3C1;
		box-shadow: 0 6px 20px rgba(0, 179, 193, 0.10);
	}

	.faq-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px 18px;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 14px;
		box-sizing: border-box;
	}

	.faq-btn-left {
		display: flex;
		align-items: center;
		gap: 14px;
		flex: 1;
		min-width: 0;
	}

	.faq-icon-box {
		width: 36px;
		height: 36px;
		border-radius: 10px;
		background: #E8F8F9;
		color: #00B3C1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.faq-item.open .faq-icon-box {
		background: #E0F7F9;
		color: #00B3C1;
	}

	.faq-q-text {
		font-size: 14.5px;
		font-weight: 700;
		color: #0B2948;
		line-height: 1.35;
		transition: color 0.2s;
	}

	.faq-item.open .faq-q-text {
		color: #00B3C1;
	}

	.faq-chevron {
		color: #0B2948;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: transform 0.25s ease, color 0.2s;
	}

	.faq-item.open .faq-chevron {
		transform: rotate(180deg);
		color: #00B3C1;
	}

	.faq-answer-panel {
		padding: 0 18px 18px 20px;
		box-sizing: border-box;
	}

	.faq-a-text {
		font-size: 13.5px;
		line-height: 1.65;
		color: #5A6A80;
		margin: 0;
	}

	/* Responsive Breakpoints */
	@media (max-width: 960px) {
		.faq-edu-container {
			width: 86%;
		}

		.faq-body-grid {
			gap: 28px;
		}

		.faq-photo-col {
			flex: 0 0 280px;
			max-width: 280px;
		}
	}

	@media (max-width: 768px) {
		.faq-edu-section {
			padding: 48px 0;
		}

		.faq-edu-container {
			width: 90%;
		}

		.faq-body-grid {
			flex-direction: column;
			align-items: center;
			gap: 32px;
		}

		.faq-photo-col {
			flex: 0 0 auto;
			max-width: 280px;
			width: 100%;
		}

		.faq-accordions-col {
			width: 100%;
		}

		.faq-btn {
			padding: 14px 16px;
		}

		.faq-answer-panel {
			padding: 0 16px 16px 16px;
		}
	}

	@media (max-width: 500px) {
		.faq-edu-container {
			width: 92%;
		}

		.faq-photo-col {
			max-width: 260px;
		}

		.faq-q-text {
			font-size: 13.5px;
		}

		.faq-icon-box {
			width: 32px;
			height: 32px;
		}
	}
</style>
