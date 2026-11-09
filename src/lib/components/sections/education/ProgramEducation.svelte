<!-- Section 02: Program Pendidikan untuk Meningkatkan Daya Saing (Mockup Final SDJNusantara) -->
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
				<span class="highlight-gold">Meningkatkan Daya Saing</span>
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

		<!-- Right: Photo with Floating Badge & Decorative Corner Ribbons -->
		<div class="program-edu-right">
			<div class="photo-wrapper">
				<!-- Top-Left Floating Graduation Badge with Golden Rays -->
				<div class="floating-badge-wrap" aria-hidden="true">
					<!-- 3 Sparkle rays above badge -->
					<svg class="sparkle-rays" viewBox="0 0 32 18" fill="none">
						<line x1="8" y1="14" x2="3" y2="4" stroke="#FFB928" stroke-width="2.5" stroke-linecap="round"/>
						<line x1="16" y1="12" x2="16" y2="2" stroke="#FFB928" stroke-width="2.5" stroke-linecap="round"/>
						<line x1="24" y1="14" x2="29" y2="4" stroke="#FFB928" stroke-width="2.5" stroke-linecap="round"/>
					</svg>
					<!-- Turquoise Badge Icon Box -->
					<div class="floating-badge-box">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
							<path d="M6 12v5c3 3 9 3 12 0v-5"/>
						</svg>
					</div>
				</div>

				<!-- Main Study Desk & Laptop Image -->
				<div class="img-frame">
					<img
						src="/images/program-study-desk-laptop.jpg"
						alt="Program Pendidikan SDJNusantara - Suasana Belajar & Laptop"
						class="program-img"
						loading="lazy"
					/>
					<!-- Decorative curve ribbons on bottom-right (Mockup SDJNusantara) -->
					<svg class="deco-corner-ribbon" viewBox="0 0 150 96" fill="none" preserveAspectRatio="none" aria-hidden="true">
						<!-- Yellow Outer Ribbon -->
						<path d="M0 96 C48 92 102 72 150 24 V96 H0 Z" fill="#FFB928"/>
						<!-- Turquoise Inner Ribbon -->
						<path d="M38 96 C80 93 122 76 150 50 V96 H38 Z" fill="#08A6B5"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.program-edu-section {
		background: #FFFFFF;
		padding: 68px 0 80px;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}

	.program-edu-container {
		width: 100%;
		max-width: 1320px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 64px;
		box-sizing: border-box;
	}

	.program-edu-left {
		flex: 0 0 480px;
		max-width: 480px;
	}

	.program-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.badge-dash {
		display: inline-block;
		width: 18px;
		height: 3px;
		background: #08A6B5;
		border-radius: 2px;
	}

	.badge-text {
		font-size: 13px;
		font-weight: 700;
		color: #08A6B5;
		letter-spacing: 0.02em;
	}

	.program-title {
		font-size: clamp(28px, 2.5vw, 34px);
		line-height: 1.25;
		font-weight: 800;
		color: #0B2948;
		margin: 0 0 18px;
		letter-spacing: -0.015em;
	}

	.highlight-gold {
		color: #FFB928;
	}

	.program-desc {
		font-size: 14.5px;
		line-height: 1.65;
		color: #64748B;
		margin: 0 0 28px;
		max-width: 460px;
	}

	.program-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #FFB928;
		color: #0B2948;
		font-size: 14px;
		font-weight: 700;
		padding: 13px 26px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 185, 40, 0.3);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.program-btn:hover {
		background: #e6a51d;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 185, 40, 0.42);
	}

	/* Right Column: Photo with Floating Badge */
	.program-edu-right {
		flex: 1;
		min-width: 0;
		position: relative;
	}

	.photo-wrapper {
		position: relative;
		width: 100%;
	}

	/* Floating badge top-left */
	.floating-badge-wrap {
		position: absolute;
		top: -16px;
		left: -16px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sparkle-rays {
		width: 32px;
		height: 18px;
		margin-bottom: -4px;
	}

	.floating-badge-box {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		background: #08A6B5;
		border: 3px solid #FFFFFF;
		box-shadow: 0 6px 18px rgba(8, 166, 181, 0.38);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img-frame {
		position: relative;
		width: 100%;
		height: 380px;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 14px 36px rgba(11, 41, 72, 0.09);
		border: 1px solid #DCE7EF;
	}

	.program-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
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
		width: 150px;
		height: 96px;
		pointer-events: none;
		z-index: 2;
	}

	/* Responsive Tablet */
	@media (max-width: 1024px) {
		.program-edu-container {
			gap: 36px;
			padding: 0 24px;
		}

		.program-edu-left {
			flex: 0 0 380px;
			max-width: 380px;
		}

		.program-title {
			font-size: 24px;
		}

		.img-frame {
			height: 290px;
		}
	}

	/* Responsive Mobile */
	@media (max-width: 768px) {
		.program-edu-section {
			padding: 48px 0;
		}

		.program-edu-container {
			flex-direction: column;
			text-align: center;
			gap: 36px;
			padding: 0 20px;
		}

		.program-edu-left {
			max-width: 100%;
			flex: 1 1 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.program-desc {
			max-width: 100%;
		}

		.program-edu-right {
			width: 100%;
		}

		.img-frame {
			height: 230px;
			border-radius: 18px;
		}

		.floating-badge-wrap {
			top: -12px;
			left: 4px;
		}

		.floating-badge-box {
			width: 40px;
			height: 40px;
		}
	}
</style>
