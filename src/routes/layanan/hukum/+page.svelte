<!--
	WAJIB DIISI/DIVERIFIKASI pemilik: ruang lingkup layanan hukum, izin/legalitas praktik (advokat/konsultan hukum/badan hukum), identitas penanggung jawab. Content-master tidak memuat layanan hukum.
-->
<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import Icon from '@iconify/svelte';
	import {
		legalFeaturesData,
		legalScopeData,
		legalAdvantagesData,
		legalProcessSteps,
		legalDisclaimerText
	} from '#lib/data/legal-services';
</script>

<svelte:head>
	<title>Layanan Hukum & Konsultasi Regulasi — SDJNusantara</title>
	<meta
		name="description"
		content="Pendampingan hukum yang terarah dan selaras dengan regulasi di bidang pendidikan bagi institusi, organisasi, maupun korporasi."
	/>
	<!-- Meta robots noindex selama flag legal belum disahkan oleh pemilik -->
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="legal-page">
	<!-- 1. HERO SECTION -->
	<section class="legal-hero">
		<div class="legal-hero-bg">
			<picture>
				<source srcset="/images/layanan-hukum-hero.webp" type="image/webp" />
				<img
					src="/images/layanan-hukum-hero.jpg"
					alt="Layanan Hukum dan Regulasi Pendidikan SDJNusantara"
					class="hero-img"
					loading="eager"
					decoding="async"
				/>
			</picture>
			<div class="hero-overlay"></div>
		</div>

		<div class="legal-container hero-content-wrapper">
			<div class="hero-left-col">
				<div class="hero-breadcrumb-pill">
					<span class="pill-dot"></span>
					<span class="pill-text">Layanan &rsaquo; Layanan Hukum</span>
				</div>

				<h1 class="hero-heading">
					<span>Layanan Hukum &</span>
					<span class="text-gold">Konsultasi Regulasi</span>
				</h1>

				<p class="hero-lead">
					Pendampingan hukum yang terarah dan selaras dengan regulasi di bidang pendidikan bagi institusi, organisasi, maupun korporasi.
				</p>

				<div class="hero-cta-group">
					<a href="/konsultasi" class="btn-hero-gold">
						<span>Ajukan Konsultasi</span>
						<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</a>
					<a href="#ruang-lingkup" class="btn-hero-outline">
						<span>Lihat Paket Layanan</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Decorative bottom wave transition -->
		<div class="hero-wave-wrap" aria-hidden="true">
			<svg viewBox="0 0 1536 80" fill="none" preserveAspectRatio="none" class="hero-wave-svg">
				<path
					d="M0,45 C320,80 580,20 920,50 C1200,75 1400,30 1536,45 L1536,80 L0,80 Z"
					fill="#16B6C1"
					fill-opacity="0.25"
				/>
				<path
					d="M0,55 C380,85 700,35 1060,65 C1320,85 1460,45 1536,55 L1536,80 L0,80 Z"
					fill="#F4F8FB"
				/>
			</svg>
		</div>
	</section>

	<!-- 2. TAB BAR NAVIGATION -->
	<div class="legal-container tabs-wrapper">
		<nav class="services-tab-bar" aria-label="Navigasi Portofolio Layanan">
			<a href="/layanan" class="tab-item">
				<Icon icon="heroicons:squares-2x2-20-solid" width="18" height="18" />
				<span>Semua Layanan</span>
			</a>
			<span class="tab-divider" aria-hidden="true"></span>
			<a href="/layanan/pendidikan#program" class="tab-item">
				<Icon icon="fluent:hat-graduation-24-filled" width="18" height="18" />
				<span>Program Pendidikan</span>
			</a>
			<span class="tab-divider" aria-hidden="true"></span>
			<a href="/layanan/pendidikan#beasiswa" class="tab-item">
				<Icon icon="fluent:ribbon-24-filled" width="18" height="18" />
				<span>Beasiswa</span>
			</a>
			<span class="tab-divider" aria-hidden="true"></span>
			<a href="/layanan/hukum" class="tab-item active" aria-current="page">
				<Icon icon="fluent:scales-24-filled" width="18" height="18" />
				<span>Layanan Hukum</span>
			</a>
		</nav>
	</div>

	<!-- 3. SECTION TENTANG LAYANAN -->
	<section class="section-about">
		<div class="legal-container about-grid">
			<div class="about-left">
				<span class="section-badge">&mdash; TENTANG LAYANAN</span>
				<h2 class="section-title">Layanan Hukum SDJNusantara</h2>
				<p class="section-paragraph">
					Layanan konsultasi regulasi, telaah kepatuhan, serta pendampingan tata kelola hukum bagi institusi pendidikan, organisasi, maupun korporasi di bidang pendidikan.
				</p>
				<div class="legal-disclaimer-box">
					<Icon icon="heroicons:information-circle-20-solid" width="18" height="18" class="disclaimer-icon" />
					<p class="disclaimer-text">{legalDisclaimerText}</p>
				</div>
			</div>

			<div class="about-right">
				<div class="about-features-panel">
					{#each legalFeaturesData as feat}
						<div class="feature-card">
							<div class="feature-icon-box">
								<Icon icon={feat.icon} width="26" height="26" />
							</div>
							<h3 class="feature-title">{feat.title}</h3>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- 4. SECTION RUANG LINGKUP LAYANAN -->
	<section id="ruang-lingkup" class="section-scope">
		<div class="legal-container">
			<div class="scope-header">
				<span class="section-badge">&mdash; RUANG LINGKUP LAYANAN</span>
				<h2 class="section-title">Ruang Lingkup Layanan Hukum</h2>
				<p class="section-subtitle">
					Berbagai layanan pendampingan hukum yang dirancang untuk memenuhi kebutuhan institusi pendidikan Anda.
				</p>
			</div>

			<div class="scope-grid">
				{#each legalScopeData as item}
					<div class="scope-card">
						<div class="scope-top">
							<div class="scope-icon-box">
								<Icon icon={item.icon} width="24" height="24" />
							</div>
							<h3 class="scope-card-title">{item.title}</h3>
							<p class="scope-card-desc">{item.description}</p>
						</div>
						<div class="scope-bottom">
							<a href="/konsultasi" class="scope-arrow-btn" aria-label="Konsultasi {item.title}">
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- 5. SECTION KEUNGGULAN -->
	<section class="section-advantages">
		<div class="legal-container advantages-grid">
			<div class="advantages-left">
				<span class="section-badge">&mdash; KEUNGGULAN</span>
				<h2 class="section-title">Mengapa Memilih Layanan Hukum Kami?</h2>
				<p class="section-paragraph">
					Pendampingan hukum yang tidak hanya menyelesaikan permasalahan, tetapi juga memberikan kejelasan tata kelola dan kepatuhan bagi institusi Anda.
				</p>
			</div>

			<div class="advantages-right">
				<div class="advantages-2x2">
					{#each legalAdvantagesData as adv}
						<div class="adv-card">
							<div class="adv-icon-box">
								<Icon icon={adv.icon} width="22" height="22" />
							</div>
							<div class="adv-content">
								<h3 class="adv-title">{adv.title}</h3>
								<p class="adv-desc">{adv.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- 6. SECTION ALUR LAYANAN -->
	<section class="section-process">
		<div class="legal-container">
			<div class="process-panel">
				<div class="process-header">
					<span class="section-badge">&mdash; ALUR LAYANAN</span>
					<h2 class="section-title">Proses Layanan yang Jelas</h2>
					<p class="section-subtitle">
						Dapatkan pendampingan hukum secara terstruktur dan transparan.
					</p>
				</div>

				<div class="process-steps-row">
					{#each legalProcessSteps as st, idx}
						<div class="step-card">
							<div class="step-icon-circle">
								<Icon icon={st.icon} width="24" height="24" />
								<span class="step-badge">{st.step}</span>
							</div>
							<h3 class="step-title">{st.title}</h3>
							<p class="step-desc">{st.description}</p>
						</div>

						{#if idx < legalProcessSteps.length - 1}
							<div class="step-arrow-connector" aria-hidden="true">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B6C1" stroke-width="2.5">
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- 7. SECTION CTA BANNER -->
	<section class="section-cta">
		<div class="legal-container">
			<div class="cta-banner-box">
				<div class="cta-bg-shapes" aria-hidden="true">
					<div class="shape-cyan"></div>
					<div class="shape-gold"></div>
				</div>

				<div class="cta-col-left">
					<h2 class="cta-title">
						<span>Konsultasikan Kebutuhan</span>
						<span class="text-gold">Hukum Institusi Anda</span>
					</h2>
				</div>

				<div class="cta-col-right">
					<p class="cta-lead">
						Dapatkan solusi hukum yang terarah dan sesuai dengan regulasi pendidikan.
					</p>
					<div class="cta-action-wrap">
						<a href="/konsultasi" class="btn-cta-gold">
							<span>Ajukan Konsultasi</span>
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</a>
					</div>
					<p class="cta-disclaimer-note">
						{legalDisclaimerText}
					</p>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer variant="layanan" />

<style>
	/* === GLOBAL LAYOUT FOR LEGAL PAGE === */
	.legal-page {
		padding-top: 48px;
		background: #F4F8FB;
		color: #183553;
		overflow-x: hidden;
	}

	.legal-container {
		width: 93%;
		max-width: 1480px;
		margin-left: auto;
		margin-right: auto;
	}

	/* === 1. HERO SECTION === */
	.legal-hero {
		position: relative;
		background: linear-gradient(135deg, #082442 0%, #0B2948 100%);
		min-height: 380px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		padding: 48px 0 72px;
	}

	.legal-hero-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.hero-img {
		position: absolute;
		top: 0;
		right: 0;
		width: 62%;
		height: 100%;
		object-fit: cover;
		object-position: center right;
		opacity: 0.92;
		filter: saturate(1.05);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			90deg,
			#082442 0%,
			#082442 42%,
			rgba(8, 36, 66, 0.85) 60%,
			rgba(8, 36, 66, 0.4) 100%
		);
	}

	.hero-content-wrapper {
		position: relative;
		z-index: 2;
	}

	.hero-left-col {
		max-width: 580px;
	}

	.hero-breadcrumb-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 14px;
		background: rgba(22, 182, 193, 0.15);
		border: 1px solid rgba(22, 182, 193, 0.35);
		border-radius: 999px;
		margin-bottom: 18px;
	}

	.pill-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #16B6C1;
	}

	.pill-text {
		font-size: 12px;
		font-weight: 600;
		color: #E0F2FE;
		letter-spacing: 0.02em;
	}

	.hero-heading {
		font-size: 40px;
		font-weight: 800;
		line-height: 1.2;
		color: #FFFFFF;
		margin: 0 0 16px;
		display: flex;
		flex-direction: column;
	}

	.text-gold {
		color: #F5B331;
	}

	.hero-lead {
		font-size: 14.5px;
		line-height: 1.65;
		color: #C3D4E6;
		margin: 0 0 28px;
		max-width: 520px;
	}

	.hero-cta-group {
		display: flex;
		align-items: center;
		gap: 14px;
		flex-wrap: wrap;
	}

	.btn-hero-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		padding: 11px 22px;
		border-radius: 8px;
		text-decoration: none;
		transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.28);
	}

	.btn-hero-gold:hover {
		background: #E5A320;
		transform: translateY(-1px);
	}

	.btn-hero-outline {
		display: inline-flex;
		align-items: center;
		background: transparent;
		color: #FFFFFF;
		font-size: 13.5px;
		font-weight: 600;
		padding: 10px 20px;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.4);
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s;
	}

	.btn-hero-outline:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: #FFFFFF;
	}

	.hero-wave-wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		line-height: 0;
		pointer-events: none;
	}

	.hero-wave-svg {
		width: 100%;
		height: 48px;
		display: block;
	}

	/* === 2. TABS SECTION === */
	.tabs-wrapper {
		margin-top: -26px;
		position: relative;
		z-index: 10;
		margin-bottom: 48px;
	}

	.services-tab-bar {
		background: #FFFFFF;
		border-radius: 16px;
		border: 1px solid #E5EFF5;
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.06);
		padding: 10px 18px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tab-item {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		font-size: 13.5px;
		font-weight: 600;
		color: #334E68;
		text-decoration: none;
		padding: 10px 18px;
		border-radius: 999px;
		transition: all 0.2s ease;
	}

	.tab-item:hover:not(.active) {
		color: #079EAD;
		background: #F0F9FA;
	}

	.tab-item.active {
		background: linear-gradient(135deg, #079EAD 0%, #16B6C1 100%);
		color: #FFFFFF;
		font-weight: 700;
		box-shadow: 0 4px 14px rgba(7, 158, 173, 0.32);
	}

	.tab-divider {
		width: 1px;
		height: 24px;
		background: #E2E8F0;
	}

	/* === COMMON SECTION ELEMENTS === */
	.section-badge {
		display: inline-block;
		font-size: 12px;
		font-weight: 800;
		color: #079EAD;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.section-title {
		font-size: 28px;
		font-weight: 800;
		color: #082442;
		line-height: 1.25;
		margin: 0 0 14px;
		letter-spacing: -0.01em;
	}

	.section-subtitle {
		font-size: 14.5px;
		line-height: 1.6;
		color: #4A5D73;
		margin: 0;
	}

	.section-paragraph {
		font-size: 14.5px;
		line-height: 1.65;
		color: #4A5D73;
		margin: 0 0 20px;
	}

	/* === 3. SECTION TENTANG LAYANAN === */
	.section-about {
		padding: 24px 0 64px;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1.05fr 1.15fr;
		gap: 36px;
		align-items: center;
	}

	.about-left {
		max-width: 580px;
	}

	.legal-disclaimer-box {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		padding: 12px 16px;
		background: #F0F7FB;
		border-left: 3px solid #079EAD;
		border-radius: 0 8px 8px 0;
	}

	:global(.disclaimer-icon) {
		color: #079EAD;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.disclaimer-text {
		font-size: 12.5px;
		line-height: 1.5;
		color: #4A5D73;
		margin: 0;
	}

	.about-features-panel {
		background: #EAF7F9;
		border-radius: 20px;
		padding: 24px 20px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 14px;
		border: 1px solid rgba(7, 158, 173, 0.12);
	}

	.feature-card {
		background: #FFFFFF;
		border-radius: 14px;
		padding: 20px 14px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 12px;
		box-shadow: 0 2px 10px rgba(7, 158, 173, 0.05);
	}

	.feature-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		background: #EAF7F9;
		color: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.feature-title {
		font-size: 13px;
		font-weight: 700;
		color: #082442;
		line-height: 1.35;
		margin: 0;
	}

	/* === 4. SECTION RUANG LINGKUP LAYANAN === */
	.section-scope {
		padding: 16px 0 64px;
	}

	.scope-header {
		text-align: left;
		margin-bottom: 28px;
	}

	.scope-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 22px;
	}

	.scope-card {
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 18px;
		padding: 28px 24px 22px;
		box-shadow: 0 4px 16px rgba(8, 36, 66, 0.04);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 200px;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.scope-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(8, 36, 66, 0.08);
	}

	.scope-icon-box {
		width: 46px;
		height: 46px;
		border-radius: 12px;
		background: #EAF7F9;
		color: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 16px;
	}

	.scope-card-title {
		font-size: 16.5px;
		font-weight: 800;
		color: #082442;
		line-height: 1.3;
		margin: 0 0 10px;
	}

	.scope-card-desc {
		font-size: 13.5px;
		line-height: 1.6;
		color: #4A5D73;
		margin: 0;
	}

	.scope-bottom {
		display: flex;
		justify-content: flex-end;
		margin-top: 18px;
	}

	.scope-arrow-btn {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: #F1F5F9;
		color: #082442;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: background 0.15s, color 0.15s, transform 0.15s;
	}

	.scope-arrow-btn:hover {
		background: #079EAD;
		color: #FFFFFF;
		transform: translateX(2px);
	}

	/* === 5. SECTION KEUNGGULAN === */
	.section-advantages {
		padding: 16px 0 64px;
	}

	.advantages-grid {
		display: grid;
		grid-template-columns: 0.95fr 1.25fr;
		gap: 36px;
		align-items: center;
	}

	.advantages-left {
		max-width: 520px;
	}

	.advantages-2x2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 22px 20px;
	}

	.adv-card {
		display: flex;
		gap: 14px;
		align-items: flex-start;
	}

	.adv-icon-box {
		width: 42px;
		height: 42px;
		border-radius: 12px;
		background: #EAF7F9;
		color: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.adv-title {
		font-size: 15px;
		font-weight: 700;
		color: #082442;
		line-height: 1.3;
		margin: 0 0 4px;
	}

	.adv-desc {
		font-size: 13px;
		line-height: 1.5;
		color: #4A5D73;
		margin: 0;
	}

	/* === 6. SECTION ALUR LAYANAN === */
	.section-process {
		padding: 16px 0 64px;
	}

	.process-panel {
		background: #EAF7F9;
		border-radius: 22px;
		padding: 44px 40px;
		border: 1px solid rgba(7, 158, 173, 0.12);
	}

	.process-header {
		text-align: left;
		margin-bottom: 36px;
	}

	.process-steps-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
	}

	.step-card {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.step-icon-circle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: #FFFFFF;
		color: #079EAD;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 14px rgba(7, 158, 173, 0.12);
		position: relative;
		margin-bottom: 16px;
	}

	.step-badge {
		position: absolute;
		bottom: -6px;
		background: #079EAD;
		color: #FFFFFF;
		font-size: 10px;
		font-weight: 800;
		padding: 2px 7px;
		border-radius: 999px;
		box-shadow: 0 2px 6px rgba(7, 158, 173, 0.25);
	}

	.step-title {
		font-size: 14.5px;
		font-weight: 700;
		color: #082442;
		margin: 0 0 6px;
	}

	.step-desc {
		font-size: 12.5px;
		line-height: 1.5;
		color: #4A5D73;
		margin: 0;
		max-width: 190px;
	}

	.step-arrow-connector {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 19px;
		flex-shrink: 0;
	}

	/* === 7. SECTION CTA BANNER === */
	.section-cta {
		padding: 16px 0 64px;
	}

	.cta-banner-box {
		background: linear-gradient(135deg, #082442 0%, #0B2948 100%);
		border-radius: 22px;
		padding: 44px 48px;
		color: #FFFFFF;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
	}

	.cta-bg-shapes {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
	}

	.shape-cyan {
		position: absolute;
		bottom: -60px;
		right: -40px;
		width: 320px;
		height: 320px;
		background: radial-gradient(circle, rgba(22, 182, 193, 0.2) 0%, transparent 70%);
	}

	.shape-gold {
		position: absolute;
		top: -40px;
		right: 20%;
		width: 240px;
		height: 240px;
		background: radial-gradient(circle, rgba(245, 179, 49, 0.12) 0%, transparent 70%);
	}

	.cta-col-left {
		max-width: 440px;
		position: relative;
		z-index: 2;
	}

	.cta-title {
		font-size: 28px;
		font-weight: 800;
		line-height: 1.25;
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	.cta-col-right {
		max-width: 500px;
		position: relative;
		z-index: 2;
	}

	.cta-lead {
		font-size: 14.5px;
		line-height: 1.6;
		color: #C3D4E6;
		margin: 0 0 16px;
	}

	.cta-action-wrap {
		margin-bottom: 12px;
	}

	.btn-cta-gold {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #F5B331;
		color: #082442;
		font-size: 13.5px;
		font-weight: 700;
		padding: 11px 24px;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 4px 14px rgba(245, 179, 49, 0.28);
		transition: background 0.2s, transform 0.15s;
	}

	.btn-cta-gold:hover {
		background: #E5A320;
		transform: translateY(-1px);
	}

	.cta-disclaimer-note {
		font-size: 11.5px;
		line-height: 1.5;
		color: #8CA0B8;
		margin: 0;
	}

	/* === RESPONSIVE STYLES === */
	@media (max-width: 1024px) {
		.hero-img {
			width: 50%;
			opacity: 0.6;
		}

		.about-grid,
		.advantages-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.about-features-panel {
			grid-template-columns: repeat(3, 1fr);
		}

		.scope-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.cta-banner-box {
			flex-direction: column;
			align-items: flex-start;
			padding: 36px 32px;
		}
	}

	@media (max-width: 768px) {
		.legal-hero {
			padding: 36px 0 56px;
			min-height: auto;
		}

		.hero-img {
			width: 100%;
			opacity: 0.35;
		}

		.hero-overlay {
			background: linear-gradient(
				180deg,
				rgba(8, 36, 66, 0.85) 0%,
				#082442 80%
			);
		}

		.hero-heading {
			font-size: 28px;
		}

		.tabs-wrapper {
			margin-top: -16px;
			overflow-x: auto;
			padding-bottom: 8px;
		}

		.services-tab-bar {
			width: max-content;
			min-width: 100%;
			gap: 8px;
		}

		.about-features-panel {
			grid-template-columns: 1fr;
		}

		.scope-grid {
			grid-template-columns: 1fr;
		}

		.advantages-2x2 {
			grid-template-columns: 1fr;
		}

		.process-panel {
			padding: 32px 20px;
		}

		.process-steps-row {
			flex-direction: column;
			gap: 24px;
		}

		.step-arrow-connector {
			transform: rotate(90deg);
			margin: 0 auto;
		}

		.step-desc {
			max-width: none;
		}
	}
</style>
