<!-- Section 09: Persiapkan Diri untuk Meraih Beasiswa Impian — 3 Kolom (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	const checklist = [
		'Pemetaan profil & target beasiswa',
		'Persiapan dokumen akademik & CV',
		'Bimbingan esai & motivation letter',
		'Simulasi wawancara terarah',
		'Pemeriksaan kelengkapan berkas'
	];
</script>

<section class="prep-edu-section">
	<div class="prep-edu-container">
		<!-- Col 1: Photo in library with curved bottom corner accent -->
		<div class="prep-col-photo">
			<div class="photo-card">
				<img
					src="/images/services-library-crop.jpg"
					alt="Persiapan Beasiswa SDJNusantara"
					class="prep-img"
				/>
				<!-- Decorative curve badge on bottom-left -->
				<svg class="photo-curve-deco" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 70C25 70 45 55 50 30L0 0V70Z" fill="#079EAD" fill-opacity="0.3"/>
					<path d="M0 70C15 70 30 60 35 45L0 20V70Z" fill="#F5B331" fill-opacity="0.6"/>
				</svg>
			</div>
		</div>

		<!-- Col 2: Heading, Description, CTA -->
		<div class="prep-col-text">
			<div class="prep-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Program Beasiswa</span>
			</div>
			<h2 class="prep-title">
				Persiapkan Diri untuk Meraih<br />
				Beasiswa Impian
			</h2>
			<p class="prep-desc">
				Dapatkan pendampingan, informasi lengkap, dan strategi terbaik untuk meraih beasiswa bersama SDJNusantara.
			</p>
			<a href="/beasiswa" class="prep-btn">
				<span>Mulai Persiapan Beasiswa</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Col 3: Checklist (5 items) -->
		<div class="prep-col-checklist">
			<ul class="checklist-items">
				{#each checklist as item}
					<li class="check-item">
						<span class="check-icon">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="20 6 9 17 4 12"/>
							</svg>
						</span>
						<span class="check-text">{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.prep-edu-section {
		background: #ffffff;
		padding: 38px 0 46px;
	}

	.prep-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
	}

	/* Col 1: Photo */
	.prep-col-photo {
		flex: 0 0 280px;
		max-width: 280px;
	}

	.photo-card {
		position: relative;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
		aspect-ratio: 4 / 3;
	}

	.prep-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.photo-curve-deco {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 80px;
		height: 50px;
		pointer-events: none;
	}

	/* Col 2: Text */
	.prep-col-text {
		flex: 1;
		max-width: 380px;
	}

	.prep-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 8px;
	}

	.badge-dash {
		display: inline-block;
		width: 14px;
		height: 2px;
		background: #079ead;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 11.5px;
		font-weight: 700;
		color: #079ead;
	}

	.prep-title {
		font-size: 22px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px;
		letter-spacing: -0.2px;
	}

	.prep-desc {
		font-size: 11.5px;
		line-height: 1.55;
		color: #64748b;
		margin: 0 0 18px;
	}

	.prep-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #f5b331;
		color: #082442;
		font-size: 11.5px;
		font-weight: 700;
		padding: 8px 16px;
		border-radius: 6px;
		text-decoration: none;
		transition: transform 0.2s, background 0.2s;
	}

	.prep-btn:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	/* Col 3: Checklist */
	.prep-col-checklist {
		flex: 0 0 320px;
		max-width: 320px;
	}

	.checklist-items {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.check-item {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.check-icon {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: #e6f6f8;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.check-text {
		font-size: 11.5px;
		font-weight: 600;
		color: #082442;
		line-height: 1.35;
	}

	@media (max-width: 992px) {
		.prep-edu-container {
			flex-direction: column;
			align-items: flex-start;
		}

		.prep-col-photo,
		.prep-col-text,
		.prep-col-checklist {
			max-width: 100%;
			width: 100%;
		}
	}
</style>
