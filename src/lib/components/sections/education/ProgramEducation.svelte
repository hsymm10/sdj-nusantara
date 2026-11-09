<!-- Section 07: Program Pendidikan untuk Meningkatkan Daya Saing (Mockup Resmi SDJNusantara) -->
<script lang="ts">
</script>

<section class="program-edu-section" id="program-pendidikan">
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
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Right: Photo with rounded corners and decorative ribbons at bottom-right corner -->
		<div class="program-edu-right">
			<div class="photo-wrapper">
				<img
					src="/images/program-custom-laptop.jpg"
					alt="Mahasiswa Program Pendidikan SDJNusantara"
					class="program-img"
					loading="lazy"
				/>
				<!-- Decorative curve ribbons on bottom-right (Mockup SDJNusantara) -->
				<svg class="deco-corner-ribbon" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<!-- Gold curve -->
					<path d="M40 80C75 75 105 55 120 20V80H40Z" fill="#F9B52B"/>
					<!-- Teal curve -->
					<path d="M70 80C92 78 110 65 120 45V80H70Z" fill="#08AEBB"/>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	.program-edu-section {
		background: #FFFFFF;
		padding: 76px 0;
		width: 100%;
		box-sizing: border-box;
	}

	.program-edu-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 56px;
		box-sizing: border-box;
	}

	.program-edu-left {
		flex: 1;
		max-width: 520px;
	}

	.program-badge {
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

	.program-title {
		font-size: clamp(26px, 2.4vw, 32px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 14px;
		letter-spacing: -0.015em;
	}

	.program-desc {
		font-size: 14.5px;
		line-height: 1.6;
		color: #475569;
		margin: 0 0 26px;
	}

	.program-btn {
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

	.program-btn:hover {
		background: #e6a528;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(249, 181, 43, 0.38);
	}

	/* Right Photo Frame */
	.program-edu-right {
		flex: 1;
		max-width: 560px;
	}

	.photo-wrapper {
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 14px 32px rgba(11, 41, 72, 0.1);
		aspect-ratio: 16 / 10;
		border: 1px solid #E2E8F0;
	}

	.program-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.photo-wrapper:hover .program-img {
		transform: scale(1.02);
	}

	.deco-corner-ribbon {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 120px;
		height: 80px;
		pointer-events: none;
	}

	@media (max-width: 900px) {
		.program-edu-section {
			padding: 52px 0;
		}

		.program-edu-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 36px;
			padding: 0 20px;
		}

		.program-edu-left,
		.program-edu-right {
			max-width: 100%;
			width: 100%;
		}
	}
</style>
