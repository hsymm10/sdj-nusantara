<script lang="ts">
	// PartnerCollaborationForms.svelte - Faithful to design/kemitraan.png
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
	<div class="collab-layout-row">
		<!-- Left: Wide Handshake Photo flush left -->
		<div class="photo-side">
			<img
				src="/images/partner-handshake-wide.jpg"
				alt="Bentuk Kerja Sama SDJNusantara"
				class="collab-photo"
				loading="lazy"
			/>
			<!-- S-curve on right edge of photo -->
			<svg class="photo-edge-curve" viewBox="0 0 80 300" fill="none" preserveAspectRatio="none">
				<path d="M80 0 C20 70 20 230 80 300 L80 0 Z" fill="#FFFFFF" />
			</svg>
		</div>

		<!-- Right: Text & 3x2 Grid -->
		<div class="content-side">
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

			<!-- 3x2 Grid of Collaboration Forms -->
			<div class="forms-grid">
				{#each forms as item}
					<div class="form-item">
						<div class="form-icon">
							{#if item.icon === 'program'}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
									<line x1="8" y1="21" x2="16" y2="21"></line>
									<line x1="12" y1="17" x2="12" y2="21"></line>
								</svg>
							{:else if item.icon === 'exchange'}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							{:else if item.icon === 'curriculum'}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
									<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
								</svg>
							{:else if item.icon === 'research'}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="2" y1="12" x2="22" y2="12"></line>
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
								</svg>
							{:else if item.icon === 'scholarship'}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
							{:else}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A6B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
									<line x1="16" y1="13" x2="8" y2="13"></line>
									<line x1="16" y1="17" x2="8" y2="17"></line>
								</svg>
							{/if}
						</div>
						<span class="form-title">{item.title}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.collab-forms-section {
		background: #FFFFFF;
		padding: 3rem 0;
		overflow: hidden;
	}

	.collab-layout-row {
		display: flex;
		align-items: center;
		width: 100%;
	}

	/* Photo Side flush left */
	.photo-side {
		position: relative;
		width: 38%;
		min-width: 360px;
		height: 280px;
		flex-shrink: 0;
	}

	.collab-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.photo-edge-curve {
		position: absolute;
		top: 0;
		right: -1px;
		bottom: 0;
		width: 60px;
		height: 100%;
		pointer-events: none;
	}

	/* Content Side */
	.content-side {
		flex: 1;
		max-width: 720px;
		padding: 0 2rem 0 1rem;
		box-sizing: border-box;
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
		margin: 0 0 0.55rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-size: 11px;
		line-height: 17px;
		color: #556B82;
		margin: 0 0 1.5rem 0;
	}

	.forms-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem 1rem;
	}

	.form-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.form-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.form-title {
		font-size: 10.5px;
		font-weight: 700;
		color: #082442;
		line-height: 14px;
	}

	@media (max-width: 900px) {
		.collab-layout-row {
			flex-direction: column;
		}
		.photo-side {
			width: 100%;
			height: 220px;
		}
		.content-side {
			padding: 1.5rem 1rem;
		}
		.forms-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		.forms-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
