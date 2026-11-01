<script lang="ts">
	// ScholarshipPrepGuide.svelte - Faithful to design/beasiswa.png
	const checklist = [
		'Strategi memilih beasiswa',
		'Persiapan dokumen',
		'Tips menulis esai dan motivation letter',
		'Persiapan wawancara',
		'Simulasi dan mentoring'
	];
</script>

<section id="panduan-persiapan" class="prep-guide-section">
	<div class="prep-layout-row">
		<!-- Left: Photo flush with left edge + S-curve -->
		<div class="photo-side">
			<img
				src="/images/sch-guide-writing.jpg"
				alt="Panduan Persiapan Beasiswa"
				class="prep-photo"
				loading="lazy"
			/>
			<!-- S-curve SVG on right edge of photo -->
			<svg class="s-curve" viewBox="0 0 100 280" fill="none" preserveAspectRatio="none">
				<path
					d="M100 0 C40 40 10 120 70 200 C95 235 100 260 100 280 L100 0 Z"
					fill="#FFFFFF"
				/>
				<path
					d="M100 0 C40 40 10 120 70 200 C95 235 100 260 100 280"
					stroke="#00A6B2"
					stroke-width="5"
					fill="none"
				/>
				<path
					d="M100 160 C75 190 70 220 100 280"
					stroke="#F4B334"
					stroke-width="6"
					fill="none"
				/>
			</svg>
		</div>

		<!-- Right Content Container -->
		<div class="content-container">
			<div class="content-grid">
				<!-- Center: Text & CTA -->
				<div class="text-col">
					<div class="section-label">
						<span class="label-dash">—</span>
						<span class="label-text">Panduan Persiapan</span>
					</div>

					<h2 class="section-title">
						Persiapkan Diri untuk<br />
						Meraih Beasiswa Impian
					</h2>

					<p class="section-desc">
						Dapatkan panduan, tips, dan strategi persiapan beasiswa dari tim profesional SDJNusantara agar peluang Anda semakin besar.
					</p>

					<a href="#kontak" class="btn-gold">
						<span>Lihat Panduan Lengkap</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>

				<!-- Right: Checklist Card -->
				<div class="card-col">
					<div class="guide-checklist-card">
						<ul class="checklist-items">
							{#each checklist as item}
								<li>
									<div class="check-icon">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</div>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.prep-guide-section {
		background: #FFFFFF;
		padding: 2.5rem 0 3.5rem;
		overflow: hidden;
		border-top: 1px solid #F1F5F9;
	}

	.prep-layout-row {
		display: flex;
		align-items: center;
		width: 100%;
	}

	/* Photo flush left */
	.photo-side {
		position: relative;
		width: 32%;
		min-width: 320px;
		height: 250px;
		flex-shrink: 0;
	}

	.prep-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.s-curve {
		position: absolute;
		top: 0;
		right: -1px;
		bottom: 0;
		width: 80px;
		height: 100%;
		pointer-events: none;
	}

	/* Content Container */
	.content-container {
		flex: 1;
		max-width: 850px;
		padding-right: 2rem;
		box-sizing: border-box;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1.25fr 1fr;
		align-items: center;
		gap: 2rem;
	}

	/* Text Col */
	.text-col {
		padding: 0 0.5rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 11px;
		font-weight: 700;
		margin-bottom: 0.4rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: 21px;
		line-height: 27px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.65rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11.5px;
		line-height: 18px;
		color: #556B82;
		margin: 0 0 1.25rem 0;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #F4B334;
		color: #071D36;
		padding: 7px 18px;
		font-size: 11px;
		font-weight: 700;
		border-radius: 7px;
		text-decoration: none;
		box-shadow: 0 2px 8px rgba(244, 179, 52, 0.25);
		transition: all 0.2s ease;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-arrow {
		font-size: 12px;
	}

	/* Card Col */
	.guide-checklist-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 14px;
		padding: 1.5rem 1.35rem;
		box-shadow: 0 6px 20px rgba(8, 36, 66, 0.06);
	}

	.checklist-items {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.checklist-items li {
		display: flex;
		align-items: center;
		gap: 9px;
		font-size: 10.5px;
		color: #334155;
		font-weight: 600;
	}

	.check-icon {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: rgba(0, 166, 178, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.prep-layout-row {
			flex-direction: column;
		}
		.photo-side {
			width: 100%;
			height: 220px;
		}
		.content-grid {
			grid-template-columns: 1fr;
		}
		.content-container {
			padding: 1.5rem 1rem;
		}
	}
</style>
