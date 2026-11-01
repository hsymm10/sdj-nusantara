<script lang="ts">
	// PartnerCollaborationForms.svelte - Faithful to design/kemitraan.png (1536px Primary)
	const forms = [
		{
			title: 'Penyelenggaraan Program Bersama',
			icon: 'program'
		},
		{
			title: 'Pertukaran Peserta & Dosen',
			icon: 'exchange'
		},
		{
			title: 'Pengembangan Kurikulum',
			icon: 'curriculum'
		},
		{
			title: 'Riset & Inovasi',
			icon: 'research'
		},
		{
			title: 'Dukungan Beasiswa dan Pendanaan',
			icon: 'scholarship'
		},
		{
			title: 'Pemanfaatan Fasilitas',
			icon: 'facility'
		}
	];
</script>

<section id="bentuk-kerja-sama" class="collab-forms-section">
	<!-- Photo flush left screen edge (x 0→652 on 1536) -->
	<div class="collab-photo-wrap" aria-hidden="true">
		<img
			src="/images/partner-handshake-wide.jpg"
			alt="Bentuk Kerja Sama SDJNusantara"
			class="collab-photo"
			loading="lazy"
		/>
		<svg class="photo-edge-svg" viewBox="0 0 100 315" preserveAspectRatio="none">
			<path d="M0,0 L100,0 C75,100 50,220 30,315 L0,315 Z" fill="#082442" opacity="0.05" />
		</svg>
	</div>

	<div class="sch-partner-container">
		<div class="collab-content-wrap">
			<!-- Section Header -->
			<div class="collab-header">
				<div class="section-label">
					<span class="label-dash">—</span>
					<span class="label-text">Bentuk Kerja Sama</span>
				</div>

				<h2 class="section-title">
					Beragam Bentuk Kolaborasi<br />
					yang Dapat Disesuaikan dengan Kebutuhan.
				</h2>

				<p class="section-desc">
					Kami menyediakan berbagai bentuk kerja sama yang fleksibel dan saling menguntungkan, baik dalam jangka pendek maupun jangka panjang.
				</p>
			</div>

			<!-- 3x2 Grid of Collaboration Forms -->
			<div class="forms-3x2-grid">
				{#each forms as item}
					<div class="form-grid-item">
						<div class="form-icon-wrap">
							{#if item.icon === 'program'}
								<!-- Penyelenggaraan Program Bersama -->
								<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
									<line x1="8" y1="21" x2="16" y2="21"></line>
									<line x1="12" y1="17" x2="12" y2="21"></line>
								</svg>
							{:else if item.icon === 'exchange'}
								<!-- Pertukaran Peserta & Dosen -->
								<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							{:else if item.icon === 'curriculum'}
								<!-- Pengembangan Kurikulum -->
								<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
									<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
								</svg>
							{:else if item.icon === 'research'}
								<!-- Riset & Inovasi -->
								<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="2" y1="12" x2="22" y2="12"></line>
									<ellipse cx="12" cy="12" rx="4.5" ry="10"></ellipse>
								</svg>
							{:else if item.icon === 'scholarship'}
								<!-- Dukungan Beasiswa dan Pendanaan -->
								<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									<polyline points="9 12 11 14 15 10"></polyline>
								</svg>
							{:else}
								<!-- Pemanfaatan Fasilitas -->
								<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
									<line x1="16" y1="13" x2="8" y2="13"></line>
									<line x1="16" y1="17" x2="8" y2="17"></line>
								</svg>
							{/if}
						</div>
						<div class="form-text">
							<h4 class="form-title">{item.title}</h4>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.collab-forms-section {
		position: relative;
		background: #FFFFFF;
		height: 315px;
		width: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* Photo flush left edge: x 0→652 on 1536, right side angled/curved */
	.collab-photo-wrap {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 42.5%;
		max-width: 652px;
		z-index: 1;
		clip-path: polygon(0 0, 100% 0, 86% 100%, 0 100%);
		overflow: hidden;
	}

	.collab-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.photo-edge-svg {
		position: absolute;
		top: 0;
		right: 0;
		width: 60px;
		height: 100%;
		pointer-events: none;
	}

	/* Scoped Container: x 78→1458 on 1536px, max-width 1380px, 1500px on >=1920px */
	.sch-partner-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1380px;
		margin: 0 auto;
		padding: 0 54px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.sch-partner-container {
			max-width: 1500px;
		}
	}

	.collab-content-wrap {
		margin-left: 42%;
		max-width: 780px;
		box-sizing: border-box;
	}

	.collab-header {
		margin-bottom: 1.25rem;
	}

	.section-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 0.35rem;
	}

	.label-dash {
		font-weight: 800;
	}

	.section-title {
		font-size: clamp(20px, 1.75vw, 27px);
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 0.5rem 0;
	}

	.section-desc {
		font-size: 14px;
		line-height: 1.5;
		color: #475569;
		margin: 0;
		text-wrap: pretty;
	}

	/* 3x2 Grid */
	.forms-3x2-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.15rem 1.25rem;
		width: 100%;
	}

	.form-grid-item {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.form-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 44px;
		height: 44px;
	}

	.form-text {
		flex: 1;
		min-width: 0;
	}

	.form-title {
		font-size: 13.5px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0;
	}

	@media (max-width: 1100px) {
		.collab-forms-section {
			height: auto;
			padding: 2.5rem 0;
		}
		.collab-photo-wrap {
			position: relative;
			width: 100%;
			max-width: 100%;
			height: 220px;
			clip-path: none;
			margin-bottom: 1.5rem;
		}
		.collab-content-wrap {
			margin-left: 0;
			max-width: 100%;
		}
		.forms-3x2-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.forms-3x2-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
