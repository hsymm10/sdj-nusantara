<script lang="ts">
	import { i18n } from "#lib/stores/i18n.svelte";
</script>

<section class="nilai-section" id="nilai">
	<!-- Background image overlay (foto tangan kolaborasi + navy 0.85) -->
	<div class="nilai-bg-wrap">
		<img
			src="/images/about-hands-network.jpg"
			alt="Kolaborasi Nilai SDJ Nusantara"
			class="nilai-bg-img"
			loading="lazy"
		/>
		<div class="nilai-overlay"></div>
	</div>

	<!-- Swoosh teal bottom-right (lebih tebal seperti mockup) -->
	<svg
		class="nilai-swoosh-br"
		viewBox="0 0 260 120"
		fill="none"
		preserveAspectRatio="none"
	>
		<path
			d="M0 120 C90 70 170 30 260 0 V120 H0 Z"
			fill="#00A6B2"
			fill-opacity="0.45"
		/>
		<path
			d="M70 120 C130 85 190 55 260 30 V120 H70 Z"
			fill="#16B6C1"
			fill-opacity="0.55"
		/>
	</svg>

	<div class="nilai-container">
		<div class="nilai-grid">
			<!-- Left Column: Title & CTA -->
			<div class="nilai-left">
				<div class="section-label">
					{i18n.pick("Nilai-Nilai Luhur", "Core Values")}
				</div>

				<h2 class="nilai-title">
					{i18n.pick(
						"Integritas, Profesionalitas,",
						"Integrity, Professionalism,",
					)}<br />
					{i18n.pick(
						"Kolaborasi, dan Dampak Nyata",
						"Collaboration, and Real Impact",
					)}
				</h2>

				<p class="nilai-desc">
					{i18n.pick(
						"Nilai-nilai ini menjadi landasan dalam setiap langkah kami",
						"These values guide every step we take",
					)}<br />
					{i18n.pick(
						"untuk menghadirkan solusi pendidikan terbaik.",
						"to deliver the finest education solutions.",
					)}
				</p>
			</div>

			<!-- Right Columns: 4 Value Items with Thin Vertical Dividers -->
			<div class="nilai-items">
				<!-- Item 1: Integritas (Perisai dengan centang) -->
				<div class="nilai-col">
					<div class="nilai-icon-box">
						<svg
							width="26"
							height="26"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
							></path>
							<polyline points="9 12 11 14 15 10"></polyline>
						</svg>
					</div>
					<h3 class="nilai-item-title">
						{i18n.pick("Integritas", "Integrity")}
					</h3>
					<p class="nilai-item-desc">
						{i18n.pick(
							"Menjunjung tinggi kejujuran dan etika.",
							"Upholding honesty and strong ethics.",
						)}
					</p>
				</div>

				<div class="nilai-vdivider"></div>

				<!-- Item 2: Profesionalitas (Kelompok 3 orang) -->
				<div class="nilai-col">
					<div class="nilai-icon-box">
						<svg
							width="26"
							height="26"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
							></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					</div>
					<h3 class="nilai-item-title">
						{i18n.pick("Profesionalitas", "Professionalism")}
					</h3>
					<p class="nilai-item-desc">
						{i18n.pick(
							"Memberikan layanan dengan standar terbaik.",
							"Delivering service at the highest standard.",
						)}
					</p>
				</div>

				<div class="nilai-vdivider"></div>

				<!-- Item 3: Kolaborasi (JABAT TANGAN - Handshake, BUKAN hati) -->
				<div class="nilai-col">
					<div class="nilai-icon-box">
						<svg
							width="26"
							height="26"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L13 11.6"
							></path>
							<path
								d="m13 11.6-2-2a1 1 0 0 0-1.4 0L3 16.2a2 2 0 0 0 0 2.8l1.6 1.6a2 2 0 0 0 2.8 0l3.6-3.6"
							></path>
							<path
								d="m17 7 2-2a2 2 0 0 1 2.8 0v0a2 2 0 0 1 0 2.8L20 9.6"
							></path>
							<path
								d="m7 17-2 2a2 2 0 0 1-2.8 0v0a2 2 0 0 1 0-2.8L4 14.4"
							></path>
						</svg>
					</div>
					<h3 class="nilai-item-title">
						{i18n.pick("Kolaborasi", "Collaboration")}
					</h3>
					<p class="nilai-item-desc">
						{i18n.pick(
							"Bersinergi untuk mencapai tujuan bersama.",
							"Working together to achieve shared goals.",
						)}
					</p>
				</div>

				<div class="nilai-vdivider"></div>

				<!-- Item 4: Dampak Nyata (GRAFIK BATANG dengan panah naik) -->
				<div class="nilai-col">
					<div class="nilai-icon-box">
						<svg
							width="26"
							height="26"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#00A6B2"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="18" y1="20" x2="18" y2="10"></line>
							<line x1="12" y1="20" x2="12" y2="4"></line>
							<line x1="6" y1="20" x2="6" y2="14"></line>
							<polyline points="4 9 9 4 14 7 20 1"></polyline>
							<polyline points="15 1 20 1 20 6"></polyline>
						</svg>
					</div>
					<h3 class="nilai-item-title">
						{i18n.pick("Dampak Nyata", "Real Impact")}
					</h3>
					<p class="nilai-item-desc">
						{i18n.pick(
							"Berorientasi pada hasil yang berkelanjutan.",
							"Focused on sustainable, measurable results.",
						)}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.nilai-section {
		position: relative;
		background: #082442;
		min-height: 300px;
		height: auto;
		padding: 52px 0;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	.nilai-bg-wrap {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}

	.nilai-bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		opacity: 0.22;
	}

	.nilai-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(8, 36, 66, 0.85);
	}

	.nilai-swoosh-br {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 320px;
		height: 110px;
		z-index: 2;
		pointer-events: none;
	}

	.nilai-container {
		position: relative;
		z-index: 3;
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.nilai-container {
			max-width: 1500px;
		}
	}

	.nilai-grid {
		display: grid;
		grid-template-columns: 1fr 1.65fr;
		gap: 3.5rem;
		align-items: center;
	}

	/* Left Column */
	.nilai-left {
		display: flex;
		flex-direction: column;
	}

	.section-label {
		font-size: 14px;
		font-weight: 700;
		color: #00a6b2;
		margin-bottom: 0.5rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.nilai-title {
		font-size: clamp(21px, 2vw, 27px);
		line-height: 1.25;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 0.75rem 0;
		letter-spacing: -0.01em;
	}

	.nilai-desc {
		font-size: 13.5px;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.88);
		margin: 0 0 1.25rem 0;
		max-width: 440px;
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
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.3);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		white-space: nowrap;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(245, 179, 49, 0.42);
	}

	.btn-arrow {
		font-size: 14px;
		transition: transform 0.2s ease;
	}

	.btn-gold:hover .btn-arrow {
		transform: translateX(3px);
	}

	/* Right 4 Columns with Thin Vertical Dividers */
	.nilai-items {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.nilai-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		transition: transform 0.2s ease;
	}

	.nilai-icon-box {
		width: 44px;
		height: 44px;
		border-radius: 11px;
		background: rgba(0, 166, 178, 0.15);
		border: 1px solid rgba(0, 166, 178, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.85rem;
		transition: all 0.25s ease;
		flex-shrink: 0;
	}

	.nilai-col:hover .nilai-icon-box {
		background: rgba(0, 166, 178, 0.28);
		border-color: #00a6b2;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 166, 178, 0.25);
	}

	.nilai-item-title {
		font-size: 15.5px;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 0.35rem 0;
		letter-spacing: -0.01em;
	}

	.nilai-item-desc {
		font-size: 12.5px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.82);
		margin: 0;
	}

	.nilai-vdivider {
		width: 1px;
		height: 85px;
		background: rgba(255, 255, 255, 0.18);
		align-self: center;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.nilai-section {
			height: auto;
			min-height: auto;
			padding: 44px 0;
		}

		.nilai-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.nilai-items {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1.75rem 2rem;
		}

		.nilai-vdivider {
			display: none;
		}

		.nilai-desc {
			max-width: 100%;
		}
	}

	@media (max-width: 640px) {
		.nilai-section {
			padding: 38px 0;
		}

		.nilai-items {
			grid-template-columns: 1fr;
			gap: 1.35rem;
		}
	}
</style>
