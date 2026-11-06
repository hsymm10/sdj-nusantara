<!-- Section 07: Program Pendidikan untuk Meningkatkan Daya Saing (Sesuai Mockup GAMBAR 2) -->
<script lang="ts">
	// Props or static data
</script>

<section class="program-edu-section">
	<div class="program-edu-container">
		<!-- Left: Text & CTA -->
		<div class="program-edu-left">
			<div class="program-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Program Pendidikan</span>
			</div>
			<h2 class="program-title">
				Program Pendidikan untuk<br />
				Meningkatkan Daya Saing
			</h2>
			<p class="program-desc">
				Beragam program pengembangan kompetensi yang relevan dengan kebutuhan dunia pendidikan dan industri.
			</p>
			<a href="/program" class="program-btn">
				<span>Lihat Program Pendidikan</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Right: Photo with rounded corners and decorative ribbons at bottom-right corner -->
		<div class="program-edu-right">
			<div class="photo-wrapper">
				<img
					src="/images/program-hero-3.jpg"
					alt="Mahasiswa Program Pendidikan SDJNusantara"
					class="program-img"
				/>
				<!-- Decorative curve ribbons on bottom-right (Mockup Gambar 2) -->
				<svg class="deco-corner-ribbon" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<!-- Gold curve -->
					<path d="M40 80C75 75 105 55 120 20V80H40Z" fill="#F5B331"/>
					<!-- Teal curve -->
					<path d="M70 80C92 78 110 65 120 45V80H70Z" fill="#079EAD"/>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	.program-edu-section {
		background: #ffffff;
		padding: 38px 0 46px;
	}

	.program-edu-container {
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
	}

	.program-edu-left {
		flex: 1;
		max-width: 460px;
	}

	.program-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 10px;
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

	.program-title {
		font-size: 24px;
		line-height: 1.25;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
		letter-spacing: -0.3px;
	}

	.program-desc {
		font-size: 12px;
		line-height: 1.6;
		color: #64748b;
		margin: 0 0 22px;
	}

	.program-btn {
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

	.program-btn:hover {
		background: #e09f22;
		transform: translateY(-1px);
	}

	/* Right Photo Frame */
	.program-edu-right {
		flex: 1;
		max-width: 520px;
	}

	.photo-wrapper {
		position: relative;
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
		aspect-ratio: 16 / 9;
	}

	.program-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.deco-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 110px;
		height: 70px;
		pointer-events: none;
	}

	@media (max-width: 868px) {
		.program-edu-container {
			flex-direction: column;
			align-items: flex-start;
		}

		.program-edu-left,
		.program-edu-right {
			max-width: 100%;
			width: 100%;
		}
	}
</style>
