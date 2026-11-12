<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';

	const services = [
		{
			num: '01',
			title: 'Talent Management &',
			subtitle: 'Development Center',
			href: '/layanan#talent-management'
		},
		{
			num: '02',
			title: 'Scholarship Academy',
			subtitle: '',
			href: '/layanan#scholarship-academy'
		},
		{
			num: '03',
			title: 'Skills Development &',
			subtitle: 'Certification',
			href: '/layanan#skills-development'
		},
		{
			num: '04',
			title: 'Institutional Partnership',
			subtitle: '',
			href: '/layanan#institutional-partnership'
		},
		{
			num: '05',
			title: 'Digital Education',
			subtitle: '',
			href: '/layanan#digital-education'
		}
	];
</script>

<section class="services-section">
	<div class="services-full-row">
		<!-- Left: Library desk image touching left screen edge (x=0 to 460px) -->
		<div class="services-left-img-wrap">
			<img
				src="/images/services-library-crop.jpg"
				alt="Meja belajar, laptop dan buku"
				class="library-desk-img"
			/>
			<div class="img-fade-overlay"></div>
		</div>

		<!-- Right: Header + 5 Horizontal Services -->
		<div class="services-right-content">
			<!-- Centered Header Area -->
			<div class="services-header-box">
				<div class="section-badge">
					<span class="badge-dash"></span>
					<span class="badge-text">{i18n.pick('Layanan Kami', 'Our Services')}</span>
				</div>
				<h2 class="services-title">{i18n.pick('Solusi Pendidikan & Pengembangan Talenta', 'Education & Talent Development Solutions')}</h2>
				<p class="services-subtitle">
					{i18n.pick(
						'Lima layanan utama untuk mendukung perjalanan pendidikan dan pengembangan diri Anda.',
						'Five core services to support your educational journey and personal growth.'
					)}
				</p>
			</div>

			<!-- 5 Horizontal Services Row -->
			<div class="services-flow-row">
				{#each services as svc}
					<a href={svc.href} class="service-pill-item">
						<div class="svc-text-wrap">
							<span class="svc-num">{svc.num}</span>
							<div class="svc-title-wrap">
								<span class="svc-title-line">{svc.title}</span>
								{#if svc.subtitle}
									<span class="svc-title-line">{svc.subtitle}</span>
								{/if}
							</div>
						</div>
						<div class="svc-arrow-indicator">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Background mendekati putih (#F6F9FC), bukan biru muda */
	.services-section {
		background: #F6F9FC;
		height: 159px;
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.services-full-row {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	/* Left Image Band touching left edge (x 0→460) memudar halus ke kanan */
	.services-left-img-wrap {
		position: relative;
		width: 460px;
		height: 100%;
		flex-shrink: 0;
		overflow: hidden;
	}

	.library-desk-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
		display: block;
	}

	.img-fade-overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 110px;
		background: linear-gradient(to right, transparent 15%, #F6F9FC 100%);
	}

	/* Right Content */
	.services-right-content {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 1.5rem;
		padding-right: max(1.5rem, calc((100vw - 1086px) / 2));
	}

	.services-header-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-bottom: 0.65rem;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-bottom: 0.2rem;
	}

	.badge-dash {
		width: 16px;
		height: 2px;
		background: #00A6B2;
		border-radius: 2px;
	}

	.badge-text {
		color: #00A6B2;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.services-title {
		font-size: 20px;
		font-weight: 800;
		color: #0B2747;
		line-height: 1.2;
		letter-spacing: -0.01em;
		margin-bottom: 0.2rem;
	}

	.services-subtitle {
		font-size: 11px;
		color: #52647A;
		margin: 0;
		letter-spacing: 0;
	}

	/* 5 Services in 1 Line */
	.services-flow-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		width: 100%;
	}

	.service-pill-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.45rem;
		text-decoration: none;
		flex: 1;
		padding: 0.2rem 0;
		transition: transform 0.2s ease;
	}

	.service-pill-item:hover {
		transform: translateY(-1px);
	}

	.service-pill-item:hover .svc-title-line {
		color: #00A6B2;
	}

	.svc-text-wrap {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.12rem;
	}

	.svc-num {
		font-size: 12px;
		font-weight: 800;
		color: #00A6B2;
		line-height: 1.1;
		letter-spacing: 0;
	}

	.svc-title-wrap {
		display: flex;
		flex-direction: column;
	}

	.svc-title-line {
		font-size: 10.5px;
		font-weight: 700;
		color: #0B2747;
		line-height: 1.25;
		white-space: nowrap;
		letter-spacing: 0;
		transition: color 0.2s ease;
	}

	.svc-arrow-indicator {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: transform 0.2s ease;
	}

	.service-pill-item:hover .svc-arrow-indicator {
		transform: translateX(2px);
	}

	@media (max-width: 1199px) {
		.services-section {
			height: auto;
			padding: 2.5rem 1.5rem;
		}
		.services-full-row {
			flex-direction: column;
		}
		.services-left-img-wrap {
			width: 100%;
			max-width: 100%;
			height: 180px;
		}
		.img-fade-overlay {
			top: auto;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 60px;
			background: linear-gradient(to bottom, transparent 0%, #F6F9FC 100%);
		}
		.services-right-content {
			padding: 1.5rem 0 0;
		}
		.services-flow-row {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1.25rem;
		}
	}

	@media (max-width: 767px) {
		.services-section {
			padding: 1.5rem 1.25rem 2.5rem;
		}
		.services-left-img-wrap {
			height: 160px;
		}
		.services-title {
			font-size: 1.35rem;
		}
		.services-subtitle {
			font-size: 13px;
			line-height: 1.5;
		}
		.services-flow-row {
			display: flex;
			flex-direction: column;
			gap: 0;
			width: 100%;
			margin-top: 1rem;
		}
		.service-pill-item {
			width: 100%;
			min-height: 56px;
			padding: 0.85rem 0.5rem;
			border-bottom: 1px solid #E2E8F0;
		}
		.svc-text-wrap {
			flex-direction: row;
			align-items: center;
			gap: 0.85rem;
		}
		.svc-num {
			font-size: 15px;
		}
		.svc-title-line {
			font-size: 13.5px;
			white-space: normal;
		}
	}
</style>
