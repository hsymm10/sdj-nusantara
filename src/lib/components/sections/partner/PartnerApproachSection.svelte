<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const approaches = $derived(
		i18n.lang === 'en'
			? [
					{
						title: 'Solution-Oriented',
						desc: 'Focused on real institutional needs and measurable outcomes.',
						icon: 'handshake',
						theme: 'cyan',
						sparkles: true
					},
					{
						title: 'Long-Term Collaboration',
						desc: 'Building sustainable relationships for greater collective impact.',
						icon: 'users',
						theme: 'gold',
						sparkles: false
					},
					{
						title: 'Joint Innovation',
						desc: 'Delivering relevant programs aligned with modern developments.',
						icon: 'lightbulb',
						theme: 'cyan',
						sparkles: false
					},
					{
						title: 'Transparency & Accountability',
						desc: 'Upholding trust through professional governance.',
						icon: 'shield',
						theme: 'gold',
						sparkles: false
					}
				]
			: [
					{
						title: 'Berorientasi pada Solusi',
						desc: 'Fokus pada kebutuhan nyata dan hasil yang terukur.',
						icon: 'handshake',
						theme: 'cyan',
						sparkles: true
					},
					{
						title: 'Kolaborasi Jangka Panjang',
						desc: 'Membangun hubungan berkelanjutan untuk dampak lebih besar.',
						icon: 'users',
						theme: 'gold',
						sparkles: false
					},
					{
						title: 'Inovasi Bersama',
						desc: 'Menghadirkan program yang relevan dengan perkembangan zaman.',
						icon: 'lightbulb',
						theme: 'cyan',
						sparkles: false
					},
					{
						title: 'Transparansi dan Akuntabilitas',
						desc: 'Menjaga kepercayaan melalui tata kelola yang profesional.',
						icon: 'shield',
						theme: 'gold',
						sparkles: false
					}
				]
	);
</script>

<section id="pendekatan-kami" class="partner-approach-section">
	<!-- Dekorasi Sisi Kiri Soft Turquoise -->
	<div class="bg-soft-left" aria-hidden="true"></div>

	<!-- Dekorasi Lengkungan Turquoise & Kuning di Pojok Kanan Atas -->
	<div class="bg-wave-top-right" aria-hidden="true">
		<svg viewBox="0 0 440 220" fill="none" preserveAspectRatio="none">
			<path d="M60,0 C130,90 270,130 440,145 L440,0 Z" fill="#E3F9FB" opacity="0.7" />
			<path d="M160,0 C225,70 330,105 440,118 L440,0 Z" fill="#7DE1EB" opacity="0.45" />
			<path d="M230,0 C285,55 360,82 440,92 L440,0 Z" fill="#009AA6" />
			<path d="M295,0 C335,45 385,68 440,75 L440,0 Z" fill="#FFAD16" />
		</svg>
	</div>

	<div class="approach-container">
		<div class="approach-grid">
			<!-- Kolom Kiri (~33%): Label, Heading + Garis Bawah Kuning, Deskripsi & Tombol CTA -->
			<div class="text-col">
				<div class="approach-label">
					<span class="label-dash"></span>
					<span class="label-text">{i18n.pick('PENDEKATAN KAMI', 'OUR APPROACH')}</span>
				</div>

				<h2 class="section-title">
					{i18n.pick('Kolaborasi yang', 'Collaboration Driven by')}<br />
					{i18n.pick('Berorientasi pada', 'Meaningful and')}<br />
					<span class="highlight-wrap">
						<span class="highlight-orange">{i18n.pick('Dampak Nyata.', 'Measurable Impact.')}</span>
						<svg class="title-underline-svg" viewBox="0 0 210 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
							<path d="M2,9 Q105,1 208,6" stroke="#FFAD16" stroke-width="3.2" stroke-linecap="round" />
						</svg>
					</span>
				</h2>

				<p class="section-desc">
					{i18n.pick(
						'Kami percaya bahwa kemitraan yang kuat lahir dari kesamaan visi dan tujuan. SDJNusantara hadir sebagai penghubung antara berbagai pihak untuk menciptakan program pendidikan yang inovatif, inklusif, dan berkelanjutan.',
						'We believe strong partnerships are born from shared vision and purpose. SDJNusantara serves as a bridge connecting stakeholders to create innovative, inclusive, and sustainable education programs.'
					)}
				</p>

				<a href="/tentang-kami" class="btn-orange-approach">
					<span>{i18n.pick('Tentang Pendekatan Kami', 'About Our Approach')}</span>
					<svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			</div>

			<!-- Kolom Kanan (~67%): Container Utama Membungkus 4 Card Prinsip Kemitraan -->
			<div class="card-col">
				<div class="approach-outer-container">
					<div class="pillars-4-grid">
						{#each approaches as item}
							<div class="pillar-subcard {item.theme === 'gold' ? 'card-gold' : 'card-cyan'}">
								<!-- Dekorasi Gelombang Bawah Masing-Masing Card -->
								<div class="subcard-wave" aria-hidden="true">
									{#if item.theme === 'gold'}
										<svg viewBox="0 0 240 56" fill="none" preserveAspectRatio="none">
											<path d="M0,32 C65,48 150,14 240,20 L240,56 L0,56 Z" fill="#FEF08A" opacity="0.65" />
											<path d="M0,44 C85,52 165,24 240,28 L240,56 L0,56 Z" fill="#FFD147" opacity="0.75" />
										</svg>
									{:else}
										<svg viewBox="0 0 240 56" fill="none" preserveAspectRatio="none">
											<path d="M0,32 C65,48 150,14 240,20 L240,56 L0,56 Z" fill="#B7EEF3" opacity="0.6" />
											<path d="M0,44 C85,52 165,24 240,28 L240,56 L0,56 Z" fill="#5ADCE5" opacity="0.75" />
										</svg>
									{/if}
								</div>

								<div class="subcard-body">
									<!-- Icon Box dengan Latar Gradasi Turquoise + Sparkle Rays di Card 1 -->
									<div class="icon-wrap-outer">
										<div class="pillar-icon-gradient">
											{#if item.icon === 'handshake'}
												<!-- Handshake Putih -->
												<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
													<path d="m11 17 2 2a1 1 0 1 0 3-3" />
													<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
													<path d="m21 3 1 11h-2" />
													<path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
													<path d="M3 4h8" />
												</svg>
											{:else if item.icon === 'users'}
												<!-- Users Putih -->
												<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
													<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
													<circle cx="9" cy="7" r="4" />
													<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
													<path d="M16 3.13a4 4 0 0 1 0 7.75" />
												</svg>
											{:else if item.icon === 'lightbulb'}
												<!-- Lightbulb Putih -->
												<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
													<path d="M9 18h6" />
													<path d="M10 22h4" />
													<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
													<line x1="12" y1="2" x2="12" y2="3" />
													<line x1="4.22" y1="4.22" x2="5" y2="5" />
													<line x1="19.78" y1="4.22" x2="19" y2="5" />
												</svg>
											{:else}
												<!-- Shield Check Putih -->
												<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
													<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
													<polyline points="9 12 11 14 15 10" />
												</svg>
											{/if}
										</div>

										{#if item.sparkles}
											<svg class="icon-sparkles" width="22" height="20" viewBox="0 0 24 22" fill="none" aria-hidden="true">
												<path d="M6 2L4 8M15 6L10 10M18 15L11 15" stroke="#FFB923" stroke-width="2.2" stroke-linecap="round" />
											</svg>
										{/if}
									</div>

									<h3 class="pillar-title">{item.title}</h3>
									<p class="pillar-desc">{item.desc}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.partner-approach-section {
		position: relative;
		background: #FFFFFF;
		padding: 64px 0 56px;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Dekorasi Sisi Kiri Soft Turquoise */
	.bg-soft-left {
		position: absolute;
		top: 15%;
		left: -120px;
		width: 340px;
		height: 340px;
		background: radial-gradient(circle, rgba(213, 244, 247, 0.55) 0%, rgba(255, 255, 255, 0) 70%);
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
	}

	/* Dekorasi Lengkungan Turquoise & Kuning di Pojok Kanan Atas */
	.bg-wave-top-right {
		position: absolute;
		top: 0;
		right: 0;
		width: clamp(260px, 24vw, 440px);
		height: clamp(130px, 12vw, 220px);
		pointer-events: none;
		z-index: 0;
	}

	.bg-wave-top-right svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Container Desktop Proporsional (1480-1520px pada 1920px) */
	.approach-container {
		position: relative;
		z-index: 2;
		width: min(1500px, calc(100% - 80px));
		margin-inline: auto;
		box-sizing: border-box;
	}

	/* Grid Dua Kolom: ~33% Kiri | ~67% Kanan */
	.approach-grid {
		display: grid;
		grid-template-columns: 33% 1fr;
		align-items: center;
		gap: 48px;
	}

	/* Kolom Kiri */
	.text-col {
		width: 100%;
		box-sizing: border-box;
	}

	.approach-label {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
	}

	.label-dash {
		width: 22px;
		height: 2.5px;
		background: #00A6B2;
		border-radius: 2px;
	}

	.label-text {
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.section-title {
		font-size: clamp(26px, 2.2vw, 36px);
		line-height: 1.22;
		font-weight: 800;
		color: #0B1B45;
		margin: 0 0 18px 0;
		letter-spacing: -0.015em;
	}

	.highlight-wrap {
		position: relative;
		display: inline-block;
	}

	.highlight-orange {
		color: #FFAD16;
	}

	.title-underline-svg {
		position: absolute;
		left: 0;
		bottom: -7px;
		width: 100%;
		height: 10px;
		pointer-events: none;
	}

	.section-desc {
		font-size: clamp(14px, 0.98vw, 15.5px);
		line-height: 1.62;
		color: #556980;
		margin: 0 0 26px 0;
		max-width: 450px;
	}

	.btn-orange-approach {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 12px 26px;
		background: #FFB51B;
		color: #0B1B45;
		font-size: 14.5px;
		font-weight: 700;
		border-radius: 9px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 181, 27, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		width: fit-content;
	}

	.btn-orange-approach:hover {
		background: #e6a215;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 181, 27, 0.4);
	}

	.btn-arrow {
		transition: transform 0.2s ease;
	}

	.btn-orange-approach:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Kolom Kanan: Outer White Container dengan 4 Card Horizontal */
	.card-col {
		width: 100%;
		min-width: 0;
	}

	.approach-outer-container {
		background: rgba(255, 255, 255, 0.92);
		border: 1.5px solid #E2ECF5;
		border-radius: 26px;
		padding: 16px;
		box-shadow: 0 12px 36px rgba(11, 27, 69, 0.05);
		box-sizing: border-box;
		width: 100%;
	}

	.pillars-4-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 14px;
		width: 100%;
		align-items: stretch;
	}

	.pillar-subcard {
		position: relative;
		border-radius: 18px;
		padding: 24px 18px 46px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		transition: transform 0.22s ease, box-shadow 0.22s ease;
	}

	.pillar-subcard.card-cyan {
		background: linear-gradient(180deg, #FFFFFF 0%, #F4FCFD 100%);
		border: 1px solid #E3F5F7;
	}

	.pillar-subcard.card-gold {
		background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 100%);
		border: 1px solid #FEF3C7;
	}

	.pillar-subcard:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 22px rgba(11, 27, 69, 0.06);
	}

	/* Gelombang Dekoratif Bawah Subcard */
	.subcard-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 52px;
		pointer-events: none;
		z-index: 1;
	}

	.subcard-wave svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.subcard-body {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	/* Icon Box dengan Gradasi Turquoise */
	.icon-wrap-outer {
		position: relative;
		width: fit-content;
		margin-bottom: 18px;
	}

	.pillar-icon-gradient {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		background: linear-gradient(135deg, #27D0DC 0%, #009AA6 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 6px 14px rgba(0, 154, 166, 0.25);
	}

	.icon-sparkles {
		position: absolute;
		top: -12px;
		right: -18px;
		pointer-events: none;
	}

	.pillar-title {
		font-size: 16px;
		font-weight: 800;
		color: #0B1B45;
		line-height: 1.3;
		margin: 0 0 10px 0;
		min-height: 42px;
	}

	.pillar-desc {
		font-size: 13.5px;
		line-height: 1.52;
		color: #556980;
		margin: 0;
	}

	/* Tablet */
	@media (max-width: 1200px) {
		.approach-container {
			width: calc(100% - 56px);
		}

		.approach-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.section-desc {
			max-width: 100%;
		}

		.pillars-4-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 16px;
		}
	}

	/* Mobile */
	@media (max-width: 640px) {
		.partner-approach-section {
			padding: 40px 0 40px;
		}

		.approach-container {
			width: calc(100% - 40px);
		}

		.approach-outer-container {
			padding: 12px;
			border-radius: 20px;
		}

		.pillars-4-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
		}

		.pillar-subcard {
			padding: 18px 14px 40px;
			border-radius: 14px;
		}

		.pillar-icon-gradient {
			width: 44px;
			height: 44px;
			border-radius: 12px;
		}

		.pillar-icon-gradient svg {
			width: 22px;
			height: 22px;
		}

		.pillar-title {
			font-size: 14px;
			min-height: auto;
		}

		.pillar-desc {
			font-size: 12.5px;
		}
	}
</style>
