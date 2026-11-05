<script lang="ts">
	// ScholarshipPrepGuide.svelte - Pendampingan terarah persiapan beasiswa dari Basis Pengetahuan SDJNusantara
	const checklist = [
		'Pemetaan profil & target beasiswa',
		'Persiapan dokumen akademik & CV',
		'Bimbingan esai & motivation letter',
		'Simulasi wawancara terarah',
		'Pemeriksaan kelengkapan berkas'
	];
</script>

<section id="panduan-persiapan" class="prep-guide-section">
	<!-- Left Photo flush to left edge (x 0→592) with right curved arc & gold border -->
	<div class="photo-side-wrap">
		<img
			src="/images/sch-guide-writing.jpg"
			alt="Panduan Persiapan Beasiswa"
			class="prep-guide-img"
			loading="lazy"
		/>
		<!-- S-curve mask / decoration with gold #F5B331 stroke -->
		<svg class="s-curve-svg" viewBox="0 0 160 220" fill="none" preserveAspectRatio="none" aria-hidden="true">
			<!-- White mask to cut the right edge of image -->
			<path
				d="M160,0 C100,25 40,85 10,140 C-10,180 5,210 20,220 L160,220 Z"
				fill="#FFFFFF"
			/>
			<!-- Teal accent curve -->
			<path
				d="M160,0 C100,25 40,85 10,140 C-10,180 5,210 20,220"
				stroke="#00A6B2"
				stroke-width="5"
				fill="none"
			/>
			<!-- Thin gold #F5B331 curve along the arc -->
			<path
				d="M160,10 C105,35 48,95 20,150 C5,188 18,215 32,220"
				stroke="#F5B331"
				stroke-width="4"
				fill="none"
			/>
		</svg>
	</div>

	<!-- Center Content: Label, Title, Desc, Gold Button -->
	<div class="prep-center-content">
		<div class="section-label">
			<span class="label-dash">—</span>
			<span class="label-text">Panduan Persiapan</span>
		</div>

		<h2 class="prep-title">Persiapkan Diri untuk Meraih Beasiswa Impian</h2>

		<p class="prep-desc">
			Dapatkan panduan, strategi dokumen, dan simulasi wawancara terarah dari konsultan<br />
			pendidikan SDJNusantara untuk mendukung persiapan studi Anda.
		</p>

		<a href="/kontak" class="btn-gold-guide">
			<span>Konsultasi Persiapan Beasiswa</span>
			<span class="arrow-glyph" aria-hidden="true">→</span>
		</a>
	</div>

	<!-- Right White Card flush with right edge (x 1168→1509) with 5 turquoise checkmarks -->
	<div class="prep-right-card">
		<ul class="checklist-items">
			{#each checklist as item}
				<li class="check-item">
					<div class="check-icon-teal" aria-hidden="true">
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</div>
					<span class="check-label">{item}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.prep-guide-section {
		position: relative;
		width: 100%;
		height: 220px;
		background: #FFFFFF;
		overflow: hidden;
		border-top: 1px solid #F1F5F9;
		border-bottom: 1px solid #F1F5F9;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	/* Left photo flush with left screen edge (x 0→592) */
	.photo-side-wrap {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 592px;
		height: 100%;
		overflow: hidden;
		z-index: 1;
	}

	.prep-guide-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
		display: block;
	}

	/* S-curve with gold line */
	.s-curve-svg {
		position: absolute;
		top: 0;
		right: -1px;
		bottom: 0;
		width: 160px;
		height: 100%;
		pointer-events: none;
		z-index: 2;
	}

	/* Center content */
	.prep-center-content {
		position: relative;
		z-index: 3;
		margin-left: 540px;
		max-width: 610px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 1rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 6px;
	}

	.label-dash {
		font-weight: 800;
	}

	.prep-title {
		font-size: clamp(22px, 1.85vw, 28px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 8px 0;
		white-space: nowrap;
	}

	.prep-desc {
		font-size: 13.5px;
		line-height: 19px;
		color: #475569;
		margin: 0 0 16px 0;
	}

	.btn-gold-guide {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		width: fit-content;
		height: 42px;
		padding: 0 20px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.25);
		transition: all 0.2s ease;
	}

	.btn-gold-guide:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.arrow-glyph {
		font-size: 15px;
		transition: transform 0.2s ease;
	}

	.btn-gold-guide:hover .arrow-glyph {
		transform: translateX(3px);
	}

	/* Right White Card flush with right edge (x 1168→1509) */
	.prep-right-card {
		position: absolute;
		right: 0;
		top: 14px;
		bottom: 14px;
		width: 345px;
		background: #FFFFFF;
		border-radius: 18px 0 0 18px;
		box-shadow: -6px 6px 22px rgba(11, 39, 71, 0.08);
		border: 1px solid #E2E8F0;
		border-right: none;
		padding: 16px 24px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 3;
		box-sizing: border-box;
	}

	.checklist-items {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.check-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.check-icon-teal {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.check-label {
		font-size: 12.5px;
		font-weight: 600;
		color: #334155;
		white-space: nowrap;
	}

	@media (max-width: 1360px) {
		.prep-title {
			white-space: normal;
		}
		.prep-center-content {
			margin-left: 480px;
			max-width: 500px;
		}
		.photo-side-wrap {
			width: 500px;
		}
	}

	@media (max-width: 1024px) {
		.prep-guide-section {
			height: auto;
			padding: 2.5rem 1.5rem;
			flex-direction: column;
			align-items: stretch;
			gap: 1.5rem;
		}
		.photo-side-wrap {
			position: relative;
			width: 100%;
			height: 200px;
			border-radius: 14px;
		}
		.s-curve-svg {
			display: none;
		}
		.prep-center-content {
			margin-left: 0;
			max-width: 100%;
			padding: 0;
		}
		.prep-right-card {
			position: relative;
			right: auto;
			top: auto;
			bottom: auto;
			width: 100%;
			border-radius: 14px;
			border-right: 1px solid #E2E8F0;
			box-shadow: 0 4px 16px rgba(11, 39, 71, 0.06);
		}
		.check-label {
			white-space: normal;
		}
	}
</style>
