<!-- Section 7: Program Pendidikan — 2-col: left text+button | right photo with decorations -->
<section class="program-section">
	<div class="program-container">
		<!-- Left: Text -->
		<div class="program-left">
			<div class="section-badge">
				<span class="badge-dash"></span>
				<span class="badge-text">Program Pendidikan</span>
			</div>
			<h2 class="program-title">Program Pendidikan untuk Meningkatkan Daya Saing</h2>
			<p class="program-desc">
				Berbagai program pengembangan kompetensi yang dirancang untuk menjawab kebutuhan individu dan industri secara nyata.
			</p>
			<ul class="program-features">
				<li>
					<span class="feature-dot"></span>
					<span>Program dalam negeri & luar negeri</span>
				</li>
				<li>
					<span class="feature-dot"></span>
					<span>Pembimbingan personal oleh mentor berpengalaman</span>
				</li>
				<li>
					<span class="feature-dot"></span>
					<span>Kurikulum terstruktur berbasis kompetensi industri</span>
				</li>
				<li>
					<span class="feature-dot"></span>
					<span>Sertifikasi yang diakui secara nasional & internasional</span>
				</li>
			</ul>
			<a href="/layanan/pendidikan" class="program-cta-btn">
				<span>Lihat Program Pendidikan</span>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>

		<!-- Right: Photo with decorations -->
		<div class="program-right">
			<!-- Decoration circles -->
			<div class="deco-circle deco-circle-teal" aria-hidden="true"></div>
			<div class="deco-circle deco-circle-gold" aria-hidden="true"></div>
			<!-- Main image -->
			<div class="program-img-wrap">
				<img
					src="/images/about-team-4-hd.jpg"
					alt="Program Pendidikan SDJNusantara"
					class="program-img"
					loading="lazy"
				/>
			</div>
			<!-- Floating badge -->
			<div class="floating-badge" aria-hidden="true">
				<div class="floating-badge-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#079EAD" stroke-width="2" fill="none"/>
						<path d="M2 8v6" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
						<path d="M22 8v6" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
						<path d="M6 10.5v5a6 6 0 0 0 12 0v-5" stroke="#079EAD" stroke-width="2" stroke-linecap="round"/>
					</svg>
				</div>
				<div class="floating-badge-text">
					<span class="floating-badge-num">60+</span>
					<span class="floating-badge-label">Program Aktif</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.program-section {
		background: #fff;
		padding: 80px 0;
		width: 100%;
		overflow: hidden;
	}

	.program-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		gap: 72px;
	}

	/* Left */
	.program-left {
		flex: 1;
		max-width: 480px;
	}

	.section-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 16px;
	}

	.badge-dash {
		width: 20px;
		height: 2.5px;
		background: #079EAD;
		border-radius: 2px;
	}

	.badge-text {
		color: #079EAD;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.program-title {
		font-size: clamp(1.5rem, 2.5vw, 2.1rem);
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 16px;
		letter-spacing: -0.02em;
	}

	.program-desc {
		font-size: 15px;
		color: #52647A;
		line-height: 1.65;
		margin: 0 0 24px;
	}

	.program-features {
		list-style: none;
		margin: 0 0 32px;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.program-features li {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		font-size: 14px;
		color: #183553;
		line-height: 1.5;
	}

	.feature-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #079EAD;
		flex-shrink: 0;
		margin-top: 5px;
	}

	.program-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 12px 24px;
		background: #082442;
		color: #fff;
		font-weight: 700;
		font-size: 14px;
		border-radius: 10px;
		text-decoration: none;
		transition: all 0.2s ease;
		box-shadow: 0 4px 16px rgba(8, 36, 66, 0.2);
	}

	.program-cta-btn:hover {
		background: #0d3360;
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.28);
	}

	/* Right */
	.program-right {
		flex: 0 0 500px;
		position: relative;
		height: 420px;
	}

	.deco-circle {
		position: absolute;
		border-radius: 50%;
		z-index: 0;
	}

	.deco-circle-teal {
		width: 180px;
		height: 180px;
		background: rgba(7, 158, 173, 0.1);
		top: -24px;
		right: -24px;
	}

	.deco-circle-gold {
		width: 100px;
		height: 100px;
		background: rgba(245, 179, 49, 0.12);
		bottom: -16px;
		left: 24px;
	}

	.program-img-wrap {
		position: absolute;
		inset: 0;
		border-radius: 24px;
		overflow: hidden;
		z-index: 1;
	}

	.program-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	/* Floating badge */
	.floating-badge {
		position: absolute;
		bottom: 24px;
		left: -24px;
		z-index: 2;
		background: #fff;
		border-radius: 14px;
		padding: 14px 18px;
		display: flex;
		align-items: center;
		gap: 12px;
		box-shadow: 0 8px 32px rgba(8, 36, 66, 0.15);
		border: 1px solid #E8EFF6;
	}

	.floating-badge-icon {
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: linear-gradient(135deg, #EBF9FA 0%, #D6F4F7 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.floating-badge-text {
		display: flex;
		flex-direction: column;
	}

	.floating-badge-num {
		font-size: 1.4rem;
		font-weight: 900;
		color: #082442;
		line-height: 1;
	}

	.floating-badge-label {
		font-size: 11.5px;
		color: #52647A;
		font-weight: 500;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.program-container {
			flex-direction: column;
			gap: 48px;
		}
		.program-left {
			max-width: none;
		}
		.program-right {
			flex: none;
			width: 100%;
			max-width: 560px;
			height: 360px;
			margin: 0 auto;
		}
	}

	@media (max-width: 600px) {
		.program-section {
			padding: 56px 0;
		}
		.program-right {
			height: 280px;
		}
		.floating-badge {
			left: 0;
			bottom: 16px;
		}
	}
</style>

