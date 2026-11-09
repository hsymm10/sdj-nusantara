<!-- Section 09: Persiapkan Diri untuk Meraih Beasiswa Impian — 3 Kolom (Mockup Resmi SDJNusantara) -->
<script lang="ts">
	const checklist = [
		'Pemetaan profil & target beasiswa',
		'Persiapan dokumen akademik & CV',
		'Bimbingan esai & motivation letter',
		'Simulasi wawancara terarah',
		'Pemeriksaan kelengkapan berkas'
	];
</script>

<section class="prep-edu-section" id="persiapan-beasiswa">
	<div class="prep-edu-container">
		<!-- Col 1: Photo in library with curved bottom corner accent -->
		<div class="prep-col-photo">
			<div class="photo-card">
				<img
					src="/images/services-library-crop.jpg"
					alt="Persiapan Beasiswa SDJNusantara"
					class="prep-img"
					loading="lazy"
				/>
				<!-- Decorative curve badge on bottom-left -->
				<svg class="photo-curve-deco" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M0 70C25 70 45 55 50 30L0 0V70Z" fill="#08AEBB" fill-opacity="0.4"/>
					<path d="M0 70C15 70 30 60 35 45L0 20V70Z" fill="#F9B52B" fill-opacity="0.8"/>
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
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08AEBB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.prep-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
		box-sizing: border-box;
	}

	/* Col 1: Photo */
	.prep-col-photo {
		flex: 0 0 340px;
		max-width: 340px;
	}

	.photo-card {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 12px 28px rgba(11, 41, 72, 0.08);
		aspect-ratio: 4 / 3;
		border: 1px solid #E2E8F0;
	}

	.prep-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.photo-card:hover .prep-img {
		transform: scale(1.03);
	}

	.photo-curve-deco {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 90px;
		height: 60px;
		pointer-events: none;
	}

	/* Col 2: Text */
	.prep-col-text {
		flex: 1;
		max-width: 420px;
	}

	.prep-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		display: inline-block;
		width: 16px;
		height: 2.5px;
		background: #08AEBB;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 12px;
		font-weight: 700;
		color: #08AEBB;
		letter-spacing: 0.04em;
	}

	.prep-title {
		font-size: clamp(24px, 2.2vw, 30px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 14px;
		letter-spacing: -0.015em;
	}

	.prep-desc {
		font-size: 14px;
		line-height: 1.6;
		color: #475569;
		margin: 0 0 24px;
	}

	.prep-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F9B52B;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		padding: 12px 24px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(249, 181, 43, 0.28);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.prep-btn:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(249, 181, 43, 0.38);
	}

	/* Col 3: Checklist */
	.prep-col-checklist {
		flex: 0 0 350px;
		max-width: 350px;
	}

	.checklist-items {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.check-item {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 12px 16px;
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		transition: transform 0.2s, border-color 0.2s, background 0.2s;
	}

	.check-item:hover {
		transform: translateX(3px);
		background: #FFFFFF;
		border-color: #08AEBB;
		box-shadow: 0 4px 12px rgba(11, 41, 72, 0.04);
	}

	.check-icon {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: #EBF8FA;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.check-text {
		font-size: 13.5px;
		font-weight: 600;
		color: #0B2948;
		line-height: 1.35;
	}

	@media (max-width: 1024px) {
		.prep-edu-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 36px;
		}

		.prep-col-photo,
		.prep-col-text,
		.prep-col-checklist {
			max-width: 100%;
			width: 100%;
		}

		.photo-card {
			aspect-ratio: 16 / 9;
		}
	}

	@media (max-width: 640px) {
		.prep-edu-section {
			padding: 52px 0;
		}

		.prep-edu-container {
			padding: 0 20px;
		}
	}
</style>
