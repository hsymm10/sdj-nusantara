<script lang="ts">
	import { i18n } from "#lib/stores/i18n.svelte";
	import { scrollReveal } from "#lib/motion";
</script>

<section class="visi-misi-section" id="visi-misi">
	<div class="visi-misi-container">
		<div class="visi-misi-grid" use:scrollReveal={{ selector: '.visi-misi-left, .vm-card', stagger: 0.08 }}>
			<!-- Left: Intro & Heading -->
			<div class="visi-misi-left">
				<div class="section-label">
					{i18n.pick("Visi & Misi", "Vision & Mission")}
				</div>

				<h2 class="section-heading">
					{i18n.pick(
						"Menjadi mitra terpercaya dalam",
						"Becoming a trusted partner in",
					)}<br />
					{i18n.pick(
						"pengembangan talenta anak bangsa",
						"developing the nation’s talent",
					)}<br />
					{i18n.pick(
						"untuk masa depan yang lebih baik.",
						"for a brighter future.",
					)}
				</h2>

				<p class="section-desc">
					{i18n.pick(
						"Kami berkomitmen untuk terus berinovasi dan memberikan solusi pendidikan terbaik bagi individu, institusi, dan masyarakat.",
						"We are committed to continuous innovation and delivering the best education solutions for individuals, institutions, and society.",
					)}
				</p>
			</div>

			<!-- Right: 2 White Cards equal height -->
			<div class="visi-misi-cards">
				<!-- Visi Card -->
				<div class="vm-card">
					<div class="vm-icon-circle">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
							></path>
							<circle cx="12" cy="12" r="3"></circle>
						</svg>
					</div>

					<h3 class="vm-card-title">{i18n.pick("Visi", "Vision")}</h3>

					<p class="vm-card-text">
						{i18n.pick(
							"Menjadi mitra terpercaya dalam pengembangan talenta anak bangsa untuk pendidikan yang lebih inklusif, adaptif, dan berkelanjutan.",
							"To be a trusted partner in developing Indonesia’s talent for more inclusive, adaptive, and sustainable education.",
						)}
					</p>
				</div>

				<!-- Misi Card -->
				<div class="vm-card">
					<div class="vm-icon-circle">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="6"></circle>
							<circle cx="12" cy="12" r="2"></circle>
						</svg>
					</div>

					<h3 class="vm-card-title">
						{i18n.pick("Misi", "Mission")}
					</h3>

					<ul class="misi-list">
						<li>
							<span class="misi-num">1</span>
							<span
								>{i18n.pick(
									"Menyediakan layanan pendidikan yang inovatif dan berkualitas.",
									"Deliver innovative, high-quality education services.",
								)}</span
							>
						</li>
						<li>
							<span class="misi-num">2</span>
							<span
								>{i18n.pick(
									"Membangun kolaborasi strategis dengan berbagai pihak.",
									"Build strategic collaborations across institutions and communities.",
								)}</span
							>
						</li>
						<li>
							<span class="misi-num">3</span>
							<span
								>{i18n.pick(
									"Memberikan dampak positif bagi individu, institusi, dan masyarakat.",
									"Create lasting positive impact for individuals, institutions, and society.",
								)}</span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.visi-misi-section {
		background: #f4f8fb;
		height: auto;
		min-height: 310px;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
		border-top: 1px solid #eaf0f6;
		border-bottom: 1px solid #eaf0f6;
		padding: 44px 0;
	}

	.visi-misi-container {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 24px;
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
		font-size: 15px;
		font-weight: 700;
		color: #00a6b2;
		margin-bottom: 0.5rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.section-heading {
		font-size: clamp(22px, 2.2vw, 28px);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 0.85rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 14px;
		line-height: 1.6;
		color: #475569;
		margin: 0 0 1.35rem 0;
		max-width: 540px;
		text-wrap: pretty;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #f5b331;
		color: #071d36;
		padding: 10px 22px;
		font-size: 13px;
		font-weight: 700;
		border-radius: 8px;
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
		font-size: 13px;
	}

	/* Right Cards: 2 kartu putih berdampingan sama tinggi */
	.visi-misi-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		align-items: stretch;
	}

	.vm-card {
		background: #ffffff;
		border-radius: 16px;
		padding: 1.5rem 1.4rem;
		box-shadow: 0 4px 16px rgba(11, 39, 71, 0.05);
		border: 1px solid rgba(226, 232, 240, 0.85);
		display: flex;
		flex-direction: column;
		height: 100%;
		box-sizing: border-box;
	}

	/* Lingkaran outline turquoise ±38px */
	.vm-icon-circle {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		border: 1.5px solid #00a6b2;
		background: rgba(0, 166, 178, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.75rem;
	}

	.vm-card-title {
		font-size: 16px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.5rem 0;
	}

	.vm-card-text {
		font-size: 13px;
		line-height: 1.55;
		color: #475569;
		margin: 0;
	}

	.misi-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.misi-list li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 12.5px;
		line-height: 1.5;
		color: #475569;
	}

	/* Nomor Misi dalam lingkaran turquoise terisi */
	.misi-num {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #00a6b2;
		color: #ffffff;
		font-size: 10px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}

	@media (max-width: 1024px) {
		.visi-misi-section {
			height: auto;
			padding: 40px 0;
		}
		.visi-misi-grid {
			grid-template-columns: 1fr;
			gap: 2.25rem;
		}
		.section-desc {
			max-width: 100%;
			font-size: 14px;
		}
	}

	@media (max-width: 640px) {
		.visi-misi-cards {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
