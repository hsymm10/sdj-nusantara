<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="visi-misi-section" id="visi-misi">
	<div class="visi-misi-container">
		<div class="visi-misi-grid">
			<!-- Left: Intro & Heading -->
			<div class="visi-misi-left">
				<div class="section-label">{i18n.pick('— Visi & Misi', '— Vision & Mission')}</div>

				<h2 class="section-heading">
					{i18n.pick('Menjadi mitra terpercaya dalam', 'Becoming a trusted partner in')}<br />
					{i18n.pick('pengembangan talenta anak bangsa', 'developing the nation’s talent')}<br />
					{i18n.pick('untuk masa depan yang lebih baik.', 'for a brighter future.')}
				</h2>

				<p class="section-desc">
					{i18n.pick(
						'Kami berkomitmen untuk terus berinovasi dan memberikan solusi pendidikan terbaik bagi individu, institusi, dan masyarakat.',
						'We are committed to continuous innovation and delivering the best education solutions for individuals, institutions, and society.'
					)}
				</p>

				<a href="#nilai" class="btn-gold">
					<span>{i18n.pick('Pelajari Visi Misi Kami', 'Explore Our Vision & Mission')}</span>
					<span class="btn-arrow">→</span>
				</a>
			</div>

			<!-- Right: 2 White Cards equal height -->
			<div class="visi-misi-cards">
				<!-- Visi Card -->
				<div class="vm-card">
					<div class="vm-icon-circle">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
							<circle cx="12" cy="12" r="3"></circle>
						</svg>
					</div>

					<h3 class="vm-card-title">{i18n.pick('Visi', 'Vision')}</h3>

					<p class="vm-card-text">
						{i18n.pick(
							'Menjadi mitra terpercaya dalam pengembangan talenta anak bangsa untuk pendidikan yang lebih inklusif, adaptif, dan berkelanjutan.',
							'To be a trusted partner in developing Indonesia’s talent for more inclusive, adaptive, and sustainable education.'
						)}
					</p>
				</div>

				<!-- Misi Card -->
				<div class="vm-card">
					<div class="vm-icon-circle">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="6"></circle>
							<circle cx="12" cy="12" r="2"></circle>
						</svg>
					</div>

					<h3 class="vm-card-title">{i18n.pick('Misi', 'Mission')}</h3>

					<ul class="misi-list">
						<li>
							<span class="misi-num">1</span>
							<span>{i18n.pick('Menyediakan layanan pendidikan yang inovatif dan berkualitas.', 'Deliver innovative, high-quality education services.')}</span>
						</li>
						<li>
							<span class="misi-num">2</span>
							<span>{i18n.pick('Membangun kolaborasi strategis dengan berbagai pihak.', 'Build strategic collaborations across institutions and communities.')}</span>
						</li>
						<li>
							<span class="misi-num">3</span>
							<span>{i18n.pick('Memberikan dampak positif bagi individu, institusi, dan masyarakat.', 'Create lasting positive impact for individuals, institutions, and society.')}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.visi-misi-section {
		background: #F4F8FB;
		height: 310px;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		border-top: 1px solid #EAF0F6;
		border-bottom: 1px solid #EAF0F6;
	}

	.visi-misi-container {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.visi-misi-container {
			max-width: 1500px;
		}
	}

	.visi-misi-grid {
		display: grid;
		grid-template-columns: 1fr 1.35fr;
		gap: 3.5rem;
		align-items: center;
	}

	/* Left */
	.visi-misi-left {
		display: flex;
		flex-direction: column;
	}

	.section-label {
		font-size: 13px;
		font-weight: 600;
		color: #00A6B2;
		margin-bottom: 0.35rem;
		letter-spacing: 0;
	}

	.section-heading {
		font-size: clamp(20px, 1.7vw, 25px);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 0.65rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 12px;
		line-height: 1.5;
		color: #475569;
		margin: 0 0 1.15rem 0;
		max-width: 480px;
		text-wrap: pretty;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F5B331;
		color: #071D36;
		padding: 7px 18px;
		font-size: 11.5px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		align-self: flex-start;
		box-shadow: 0 2px 8px rgba(245, 179, 49, 0.25);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
	}

	/* Right Cards: 2 kartu putih berdampingan sama tinggi */
	.visi-misi-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		align-items: stretch;
	}

	.vm-card {
		background: #FFFFFF;
		border-radius: 14px;
		padding: 1.25rem 1.25rem 1.35rem;
		box-shadow: 0 4px 16px rgba(11, 39, 71, 0.05);
		border: 1px solid rgba(226, 232, 240, 0.8);
		display: flex;
		flex-direction: column;
		height: 100%;
		box-sizing: border-box;
	}

	/* Lingkaran outline turquoise ±34px (bukan lingkaran terisi pucat) */
	.vm-icon-circle {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 1.5px solid #00A6B2;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.65rem;
	}

	.vm-card-title {
		font-size: 15px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.4rem 0;
	}

	.vm-card-text {
		font-size: 11px;
		line-height: 1.5;
		color: #475569;
		margin: 0;
	}

	.misi-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.misi-list li {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 10.5px;
		line-height: 1.45;
		color: #475569;
	}

	/* Nomor Misi dalam lingkaran turquoise terisi */
	.misi-num {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #00A6B2;
		color: #FFFFFF;
		font-size: 9px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}

	@media (max-width: 900px) {
		.visi-misi-section {
			height: auto;
			padding: 3rem 0;
		}
		.visi-misi-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 600px) {
		.visi-misi-cards {
			grid-template-columns: 1fr;
		}
	}
</style>
