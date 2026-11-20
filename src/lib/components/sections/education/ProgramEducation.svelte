<!-- Section 02: Program Pendidikan untuk Meningkatkan Daya Saing (Mockup Final SDJ Nusantara) -->
<script lang="ts">
	import { i18n } from '#lib/stores/i18n.svelte';
</script>

<section class="program-edu-section" id="program">
	<span id="program-pendidikan" class="anchor-target" aria-hidden="true"></span>
	<div class="program-edu-container">
		<!-- Left: Text & CTA -->
		<div class="program-edu-left">
			<div class="program-badge">
				<span class="badge-text">{i18n.pick('Program Pendidikan', 'Education Programs')}</span>
			</div>
			<h2 class="program-title">
				{i18n.pick('Program Pendidikan untuk', 'Education Programs to')}<br />
				<span class="highlight-cyan">{i18n.pick('Meningkatkan Daya Saing', 'Boost Competitiveness')}</span>
			</h2>
			<p class="program-desc">
				{i18n.pick(
					'Program unggulan yang dirancang untuk mendukung peningkatan kompetensi, akses pendidikan, dan peluang karier.',
					'Flagship programs designed to elevate competencies, expand education access, and unlock career opportunities.'
				)}
			</p>
			<a href="/program" class="program-btn">
				<span>{i18n.pick('Lihat Program Pendidikan', 'View Education Programs')}</span>
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
		</div>

		<!-- Right: Photo with Floating Book Badge -->
		<div class="program-edu-right">
			<div class="photo-wrapper">
				<!-- Top-Left Floating Book Badge -->
				<div class="floating-badge-wrap" aria-hidden="true">
					<div class="floating-badge-box">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
							<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
						</svg>
					</div>
				</div>

				<!-- Main Study Desk & Laptop Image -->
				<div class="img-frame">
					<img
						src="/images/program-study-desk-laptop.jpg"
						alt="Program Pendidikan SDJ Nusantara - Suasana Belajar & Laptop"
						class="program-img"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.program-edu-section {
		position: relative;
		background: #F8FAFC;
		padding: 76px 0 88px;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}

	.program-edu-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1240px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 60px;
		box-sizing: border-box;
	}

	.program-edu-left {
		flex: 0 0 480px;
		max-width: 480px;
	}

	.program-badge {
		display: inline-flex;
		align-items: center;
		margin-bottom: 14px;
	}

	.badge-text {
		font-size: 15px;
		font-weight: 700;
		color: #00A6B2;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.program-title {
		font-size: clamp(30px, 3.2vw, 42px);
		line-height: 1.22;
		font-weight: 900;
		color: #0B2B50;
		margin: 0 0 16px;
		letter-spacing: -0.02em;
	}

	.highlight-cyan {
		color: #00B8C7;
	}

	.program-desc {
		font-size: clamp(14px, 1.15vw, 15.5px);
		line-height: 1.65;
		color: #71839D;
		margin: 0 0 28px;
		max-width: 480px;
	}

	.program-btn {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: #FFB900;
		color: #081525;
		font-size: 14px;
		font-weight: 800;
		padding: 12px 24px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(255, 185, 0, 0.35);
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.program-btn:hover {
		background: #FFA500;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(255, 165, 0, 0.45);
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
		top: -14px;
		left: -14px;
		z-index: 10;
		display: flex;
		align-items: center;
	}

	.floating-badge-box {
		width: 46px;
		height: 46px;
		border-radius: 12px;
		background: #00B8C7;
		border: 2.5px solid #FFFFFF;
		box-shadow: 0 4px 14px rgba(0, 184, 199, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img-frame {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9.2;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 12px 30px rgba(11, 41, 72, 0.08);
		border: 1px solid #E2E8F0;
		background: #F1F5F9;
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
			font-size: 28px;
		}
	}

	/* Responsive Mobile */
	@media (max-width: 768px) {
		.program-edu-section {
			padding: 56px 0 76px;
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

		.floating-badge-wrap {
			top: -12px;
			left: 4px;
		}

		.floating-badge-box {
			width: 44px;
			height: 44px;
		}
	}
</style>
