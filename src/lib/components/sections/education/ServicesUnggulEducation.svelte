<!-- Section 04: Solusi Terintegrasi untuk Pengembangan Potensi (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	import ServiceDetailModal from './ServiceDetailModal.svelte';

	interface ServiceItem {
		id: string;
		title: string;
		shortTitle: string;
		desc: string;
		cardDesc: string;
		icon: string;
		accent: 'cyan' | 'gold';
		active?: boolean;
		img: string;
		benefits: string[];
	}

	const services: ServiceItem[] = [
		{
			id: 'talent-management',
			title: 'Talent Management & Development Center',
			shortTitle: 'Talent Management &\nDevelopment Center',
			desc: 'Program pengelolaan, pemetaan, dan pengembangan talenta terpadu yang dirancang untuk mengidentifikasi potensi unik setiap individu serta memetakan jalur karier dan studi yang paling relevan dengan kebutuhan industri.',
			cardDesc: 'Pengelolaan potensi talenta dan pengembangan kompetensi secara berkelanjutan.',
			icon: 'users',
			accent: 'cyan',
			img: '/images/svc-01-woman-tablet.jpg',
			benefits: [
				'Pemetaan minat, bakat, dan potensi akademik secara komprehensif',
				'Penyusunan Individual Development Plan (IDP) yang terarah',
				'Konseling karier dan persiapan masuk dunia profesional terstruktur'
			]
		},
		{
			id: 'scholarship-academy',
			title: 'Scholarship Academy',
			shortTitle: 'Scholarship\nAcademy',
			desc: 'Pusat program dan pendampingan beasiswa untuk membuka akses pendidikan yang lebih luas, baik di dalam maupun luar negeri.',
			cardDesc: 'Pusat program dan pendampingan beasiswa untuk membuka akses pendidikan yang lebih luas.',
			icon: 'grad',
			accent: 'gold',
			img: '/images/svc-02-graduation-cap.jpg',
			benefits: [
				'Pendampingan persiapan dan seleksi beasiswa',
				'Akses informasi beasiswa terkini dan terpercaya',
				'Dukungan penyusunan dokumen dan strategi aplikasi'
			]
		},
		{
			id: 'skills-development',
			title: 'Skills Development & Certification',
			shortTitle: 'Skills Development &\nCertification',
			desc: 'Peningkatan keterampilan melalui pelatihan terstruktur dan sertifikasi berstandar industri untuk membangun daya saing profesional di era digital.',
			cardDesc: 'Peningkatan keterampilan melalui pelatihan terstruktur dan sertifikasi berstandar industri.',
			icon: 'star',
			accent: 'cyan',
			img: '/images/svc-03-man-laptop.jpg',
			benefits: [
				'Pelatihan intensif bersama mentor praktisi industri berpengalaman',
				'Kurikulum aplikatif berbasis proyek nyata (project-based learning)',
				'Sertifikasi kompetensi berstandar nasional dan internasional'
			]
		},
		{
			id: 'institutional-partnership',
			title: 'Institutional & Strategic Partnership',
			shortTitle: 'Institutional &\nStrategic Partnership',
			desc: 'Kolaborasi strategis dengan berbagai institusi dan lembaga untuk memperluas dampak pendidikan, program beasiswa, dan pengembangan talenta.',
			cardDesc: 'Kolaborasi strategis untuk memperluas dampak pendidikan dan pengembangan karier.',
			icon: 'briefcase',
			accent: 'cyan',
			active: true,
			img: '/images/svc-04-handshake.jpg',
			benefits: [
				'Perluasan jaringan kemitraan institusi pendidikan dan industri',
				'Penyelenggaraan program beasiswa dan pengembangan bersama mitra',
				'Peluang kolaborasi riset, magang, dan penyerapan talenta'
			]
		}
	];

	let isModalOpen = $state(false);
	let selectedService = $state<ServiceItem | null>(null);

	function openModal(item: ServiceItem) {
		selectedService = item;
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
		selectedService = null;
	}
</script>

<section class="layanan-section" id="solusi-terintegrasi">
	<div class="layanan-container">
		<!-- Header -->
		<div class="layanan-header">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Layanan Unggulan</span>
				<span class="badge-dash"></span>
			</div>
			<h2 class="layanan-title">
				Solusi Terintegrasi untuk <span class="highlight-cyan">Pengembangan Potensi</span>
			</h2>
			<p class="layanan-desc">
				Berbagai layanan profesional yang dirancang untuk mendukung perjalanan pendidikan dan karier Anda.
			</p>
		</div>

		<!-- 4 Cards Grid -->
		<div class="layanan-grid">
			{#each services as item}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div
					class="layanan-card {item.accent === 'gold' ? 'card-gold' : ''} {item.active ? 'card-active' : ''}"
					role="button"
					tabindex="0"
					onclick={() => openModal(item)}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							openModal(item);
						}
					}}
				>
					<!-- Inner Bottom Wave Decoration -->
					<div class="card-wave-bg" aria-hidden="true">
						{#if item.accent === 'gold'}
							<svg viewBox="0 0 280 48" fill="none" preserveAspectRatio="none">
								<path d="M0 20 C70 40, 170 10, 280 26 V48 H0 Z" fill="#FEF08A" opacity="0.65" />
								<path d="M0 32 C80 44, 180 20, 280 34 V48 H0 Z" fill="#FDE047" opacity="0.45" />
							</svg>
						{:else}
							<svg viewBox="0 0 280 48" fill="none" preserveAspectRatio="none">
								<path d="M0 20 C70 40, 170 10, 280 26 V48 H0 Z" fill="#D3F6F8" opacity="0.75" />
								<path d="M0 32 C80 44, 180 20, 280 34 V48 H0 Z" fill="#B7EEF3" opacity="0.5" />
							</svg>
						{/if}
					</div>

					<div class="card-body">
						<div class="card-icon-wrap {item.accent === 'gold' ? 'icon-gold' : 'icon-cyan'}">
							{#if item.icon === 'users'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							{:else if item.icon === 'grad'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<path d="M12 3L2 8l10 5 10-5-10-5z" />
									<path d="M2 8v6" />
									<path d="M6 10.5v5a6 6 0 0 0 12 0v-5" />
								</svg>
							{:else if item.icon === 'star'}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
								</svg>
							{:else}
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<rect x="2" y="7" width="20" height="14" rx="2" />
									<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
									<line x1="12" y1="12" x2="12" y2="12" />
								</svg>
							{/if}
						</div>

						<div class="card-content-wrap">
							<h3 class="card-title">{item.shortTitle}</h3>
							<p class="card-desc">{item.cardDesc}</p>
						</div>

						<div class="card-arrow-wrap">
							<button
								type="button"
								class="card-arrow {item.accent === 'gold' ? 'arrow-gold' : 'arrow-cyan'}"
								onclick={(e) => {
									e.stopPropagation();
									openModal(item);
								}}
								aria-label="Buka detail layanan {item.title}"
							>
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
									<line x1="5" y1="12" x2="19" y2="12" />
									<polyline points="12 5 19 12 12 19" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Modal Detail Layanan Unggulan -->
	<ServiceDetailModal
		isOpen={isModalOpen}
		service={selectedService}
		onclose={closeModal}
	/>
</section>

<style>
	.layanan-section {
		background: #FFFFFF;
		padding: 72px 0 84px;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	.layanan-container {
		width: 100%;
		max-width: 1220px;
		margin: 0 auto;
		padding: 0 32px;
		box-sizing: border-box;
	}

	/* Header */
	.layanan-header {
		text-align: center;
		margin-bottom: 40px;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		width: 16px;
		height: 2.5px;
		background: #00AAB5;
		border-radius: 2px;
	}

	.badge-text {
		color: #00AAB5;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.03em;
	}

	.layanan-title {
		font-size: clamp(24px, 2.25vw, 31px);
		font-weight: 800;
		color: #0B2948;
		line-height: 1.25;
		margin: 0 0 12px;
		letter-spacing: -0.015em;
	}

	.highlight-cyan {
		color: #00AAB5;
	}

	.layanan-desc {
		font-size: 13.5px;
		color: #64748B;
		margin: 0 auto;
		max-width: 620px;
		line-height: 1.6;
	}

	/* 4 Cards Grid */
	.layanan-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
	}

	.layanan-card {
		position: relative;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 22px;
		padding: 26px 22px 22px;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		min-height: 254px;
		overflow: hidden;
		box-shadow: 0 4px 18px rgba(11, 41, 72, 0.04);
		transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s;
		box-sizing: border-box;
		cursor: pointer;
		text-align: left;
	}

	.layanan-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 14px 30px rgba(11, 41, 72, 0.09);
		border-color: #00AAB5;
	}

	/* Card 2 Accent (Gold / Cream) */
	.layanan-card.card-gold {
		background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF7 55%, #FEF8E7 100%);
		border: 1.5px solid #FDE68A;
		box-shadow: 0 4px 18px rgba(255, 185, 35, 0.08);
	}

	.layanan-card.card-gold:hover {
		border-color: #FFB923;
		box-shadow: 0 14px 30px rgba(255, 185, 35, 0.16);
	}

	/* Card 4 Active / Highlight */
	.layanan-card.card-active {
		background: linear-gradient(180deg, #FFFFFF 0%, #F3FCFD 100%);
		border: 2px solid #00AAB5;
		box-shadow: 0 6px 24px rgba(0, 170, 181, 0.14);
	}

	.layanan-card.card-active:hover {
		box-shadow: 0 14px 32px rgba(0, 170, 181, 0.22);
	}

	/* Bottom Wave inside Card */
	.card-wave-bg {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 48px;
		pointer-events: none;
		z-index: 1;
	}

	.card-wave-bg svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* Card Body */
	.card-body {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		height: 100%;
		flex: 1;
	}

	.card-icon-wrap {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		transition: transform 0.2s;
		color: #FFFFFF;
		box-shadow: 0 4px 12px rgba(11, 41, 72, 0.08);
	}

	.card-icon-wrap.icon-cyan {
		background: #00AAB5;
	}

	.card-icon-wrap.icon-gold {
		background: #FFB923;
	}

	.layanan-card:hover .card-icon-wrap {
		transform: scale(1.05);
	}

	.card-content-wrap {
		flex: 1;
		margin-bottom: 16px;
	}

	.card-title {
		font-size: 15.5px;
		font-weight: 800;
		color: #0B2948;
		line-height: 1.35;
		margin: 0 0 9px;
		white-space: pre-line;
	}

	.card-desc {
		font-size: 12.8px;
		line-height: 1.55;
		color: #556980;
		margin: 0;
	}

	.card-arrow-wrap {
		display: flex;
		justify-content: flex-end;
		margin-top: auto;
	}

	.card-arrow {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #FFFFFF;
		box-shadow: 0 3px 10px rgba(11, 41, 72, 0.09);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		cursor: pointer;
		padding: 0;
	}

	.card-arrow.arrow-cyan {
		color: #00AAB5;
		border: 1px solid #D6EFF2;
	}

	.card-arrow.arrow-gold {
		color: #FFB923;
		border: 1px solid #FDE68A;
	}

	.card-arrow:hover,
	.layanan-card:hover .card-arrow.arrow-cyan {
		background: #00AAB5;
		color: #FFFFFF;
		border-color: #00AAB5;
		transform: scale(1.08);
	}

	.layanan-card.card-gold:hover .card-arrow.arrow-gold {
		background: #FFB923;
		color: #FFFFFF;
		border-color: #FFB923;
		transform: scale(1.08);
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.layanan-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}

		.layanan-card {
			min-height: 240px;
		}
	}

	/* Mobile */
	@media (max-width: 640px) {
		.layanan-section {
			padding: 50px 0 60px;
		}

		.layanan-container {
			padding: 0 20px;
		}

		.layanan-grid {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.layanan-card {
			min-height: auto;
		}
	}
</style>
