<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Pilih Layanan — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="Pilih portofolio layanan profesional SDJNusantara: Layanan Pendidikan terintegrasi dan Layanan Hukum terpercaya."
	/>
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="services-hub-page">
	<!-- Hero Section -->
	<header class="hub-hero">
		<div class="hub-hero-container">
			<div class="hub-pill">
				<span class="pill-dot"></span>
				<span class="pill-text">Portofolio Layanan</span>
			</div>
			<h1 class="hub-title">Pilih Layanan yang Anda Butuhkan</h1>
			<p class="hub-desc">
				SDJNusantara menyediakan pendampingan strategis terpercaya di bidang pendidikan dan konsultasi regulasi untuk mendukung keberlanjutan institusi serta individu.
			</p>
		</div>
	</header>

	<!-- Cards Selection Section -->
	<section class="hub-cards-section">
		<div class="hub-cards-container">
			<!-- Kartu 1: Pendidikan -->
			<a href="/layanan/pendidikan" class="hub-service-card card-education">
				<div class="card-glow glow-teal"></div>
				<div class="card-icon-box box-teal">
					<Icon icon="fluent:hat-graduation-24-filled" width="36" height="36" />
				</div>
				<div class="card-content">
					<div class="card-header-row">
						<h2 class="card-title">Layanan Pendidikan</h2>
						<span class="card-badge badge-active">Tersedia Lengkap</span>
					</div>
					<p class="card-description">
						Ekosistem terpadu program persiapan beasiswa, pelatihan keterampilan digital, dan akselerasi talenta masa depan.
					</p>
					<ul class="card-highlights">
						<li>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.5">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							<span>Konsultasi & Manajemen Talenta</span>
						</li>
						<li>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.5">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							<span>Scholarship Academy & Kurasi Beasiswa</span>
						</li>
						<li>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#079EAD" stroke-width="2.5">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							<span>Pelatihan Khusus & Kemitraan Kampus</span>
						</li>
					</ul>
				</div>
				<div class="card-footer-cta">
					<span class="cta-label">Jelajahi Layanan Pendidikan</span>
					<div class="cta-arrow-circle">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</div>
			</a>

			<!-- Kartu 2: Hukum -->
			<a href="/layanan/hukum" class="hub-service-card card-legal">
				<div class="card-glow glow-gold"></div>
				<div class="card-icon-box box-gold">
					<Icon icon="fluent:scales-24-filled" width="36" height="36" />
				</div>
				<div class="card-content">
					<div class="card-header-row">
						<h2 class="card-title">Layanan Hukum</h2>
						<span class="card-badge badge-pending">Segera Hadir</span>
					</div>
					<p class="card-description">
						Layanan konsultasi regulasi, telaah kepatuhan, dan pendampingan tata kelola hukum bagi instansi pendidikan serta korporasi.
					</p>
					<ul class="card-highlights">
						<li>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B7791F" stroke-width="2.5">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							<span>Penyusunan & Penelaahan Kontrak/MOU</span>
						</li>
						<li>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B7791F" stroke-width="2.5">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							<span>Kepatuhan Regulasi & Kebijakan Kampus</span>
						</li>
						<li>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B7791F" stroke-width="2.5">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							<span>Pendampingan Hukum Terstruktur</span>
						</li>
					</ul>
				</div>
				<div class="card-footer-cta">
					<span class="cta-label">Pelajari Layanan Hukum</span>
					<div class="cta-arrow-circle">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</div>
			</a>
		</div>
	</section>
</main>

<Footer variant="layanan" />

<style>
	.services-hub-page {
		padding-top: 48px;
		min-height: 85vh;
		background: #F8FAFC;
		display: flex;
		flex-direction: column;
	}

	.hub-hero {
		background: linear-gradient(180deg, #082442 0%, #0B2948 100%);
		padding: 72px 24px 64px;
		text-align: center;
		color: #FFFFFF;
		position: relative;
		overflow: hidden;
	}

	.hub-hero::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 24px;
		background: linear-gradient(180deg, transparent, rgba(248, 250, 252, 0.08));
	}

	.hub-hero-container {
		max-width: 780px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hub-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 16px;
		background: rgba(7, 158, 173, 0.18);
		border: 1px solid rgba(7, 158, 173, 0.4);
		border-radius: 999px;
		margin-bottom: 20px;
	}

	.pill-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #16B6C1;
	}

	.pill-text {
		font-size: 13px;
		font-weight: 600;
		color: #55E6EF;
		letter-spacing: 0.04em;
	}

	.hub-title {
		font-size: 36px;
		font-weight: 800;
		line-height: 1.25;
		color: #FFFFFF;
		margin: 0 0 16px;
		letter-spacing: -0.02em;
	}

	.hub-desc {
		font-size: 15.5px;
		line-height: 1.6;
		color: #C3D4E6;
		margin: 0;
	}

	.hub-cards-section {
		padding: 56px 24px 80px;
		flex: 1;
	}

	.hub-cards-container {
		max-width: 1040px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
	}

	.hub-service-card {
		position: relative;
		background: #FFFFFF;
		border-radius: 20px;
		border: 1px solid #E2E8F0;
		padding: 36px 32px 28px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 4px 20px rgba(8, 36, 66, 0.05);
		transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
		overflow: hidden;
	}

	.hub-service-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 16px 36px rgba(8, 36, 66, 0.12);
	}

	.card-education:hover {
		border-color: #079EAD;
	}

	.card-legal:hover {
		border-color: #F5B331;
	}

	.card-icon-box {
		width: 64px;
		height: 64px;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;
		transition: transform 0.2s ease;
	}

	.hub-service-card:hover .card-icon-box {
		transform: scale(1.05);
	}

	.box-teal {
		background: #E6F7F9;
		color: #079EAD;
	}

	.box-gold {
		background: #FEF7E6;
		color: #B7791F;
	}

	.card-header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-bottom: 12px;
	}

	.card-title {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0;
		letter-spacing: -0.015em;
	}

	.card-badge {
		font-size: 11.5px;
		font-weight: 700;
		padding: 4px 10px;
		border-radius: 999px;
		white-space: nowrap;
	}

	.badge-active {
		background: #E6F7F9;
		color: #057A86;
	}

	.badge-pending {
		background: #F1F5F9;
		color: #64748B;
	}

	.card-description {
		font-size: 14.5px;
		line-height: 1.6;
		color: #4A5D73;
		margin: 0 0 20px;
	}

	.card-highlights {
		list-style: none;
		padding: 0;
		margin: 0 0 32px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.card-highlights li {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 13.5px;
		font-weight: 500;
		color: #1E293B;
	}

	.card-footer-cta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 20px;
		border-top: 1px solid #EDF2F7;
		margin-top: auto;
	}

	.cta-label {
		font-size: 14px;
		font-weight: 700;
		color: #079EAD;
		transition: color 0.2s;
	}

	.card-legal .cta-label {
		color: #B7791F;
	}

	.cta-arrow-circle {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: #F1F5F9;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #082442;
		transition: transform 0.2s, background 0.2s, color 0.2s;
	}

	.hub-service-card:hover .cta-arrow-circle {
		transform: translateX(4px);
		background: #079EAD;
		color: #FFFFFF;
	}

	.card-legal:hover .cta-arrow-circle {
		background: #B7791F;
		color: #FFFFFF;
	}

	@media (max-width: 800px) {
		.hub-cards-container {
			grid-template-columns: 1fr;
			max-width: 520px;
		}

		.hub-hero {
			padding: 48px 20px 40px;
		}

		.hub-title {
			font-size: 28px;
		}

		.hub-cards-section {
			padding: 36px 16px 56px;
		}
	}
</style>
