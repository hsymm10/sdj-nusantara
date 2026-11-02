<!--
	WAJIB DIISI oleh pemilik:
	- Ruang lingkup layanan hukum
	- Izin / legalitas praktik resmi
	- Disclaimer hukum (content-master tidak memuat layanan hukum)
-->
<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import Icon from '@iconify/svelte';
	import { legalServicesData } from '#lib/data/legal-services';
</script>

<svelte:head>
	<title>Layanan Hukum — SDJNusantara Strategic Your Partner</title>
	<meta
		name="description"
		content="Informasi resmi mengenai pengembangan layanan konsultasi hukum dan kepatuhan regulasi institusi dari SDJNusantara."
	/>
	<!-- Meta robots noindex selama halaman masih berupa kerangka persiapan -->
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="legal-service-page">
	<header class="legal-hero">
		<div class="legal-hero-container">
			<div class="legal-pill">
				<span class="pill-dot"></span>
				<span class="pill-text">Layanan Hukum</span>
			</div>
			<h1 class="legal-title">Layanan Hukum & Regulasi</h1>
			<p class="legal-desc">
				Informasi layanan hukum sedang disiapkan.
			</p>
		</div>
	</header>

	<section class="legal-notice-section">
		<div class="notice-card">
			<div class="notice-icon-box">
				<Icon icon="fluent:scales-24-filled" width="38" height="38" />
			</div>
			<h2 class="notice-heading">Sedang Dalam Tahap Finalisasi</h2>
			<p class="notice-text">
				Kami berkomitmen menghadirkan layanan hukum yang kredibel, akuntabel, dan selaras dengan regulasi yang berlaku. Rincian ruang lingkup konsultasi, izin praktik, serta kerangka kolaborasi akan segera dipublikasikan di laman ini.
			</p>

			<div class="notice-action-row">
				<a href="/kontak" class="btn-contact-primary">
					<span>Hubungi Kami</span>
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
				<a href="/layanan/pendidikan" class="btn-back-outline">
					<span>Lihat Layanan Pendidikan</span>
				</a>
			</div>
		</div>
	</section>
</main>

<Footer variant="layanan" />

<style>
	.legal-service-page {
		padding-top: 48px;
		min-height: 80vh;
		background: #F8FAFC;
		display: flex;
		flex-direction: column;
	}

	.legal-hero {
		background: linear-gradient(180deg, #082442 0%, #0B2948 100%);
		padding: 72px 24px 60px;
		text-align: center;
		color: #FFFFFF;
	}

	.legal-hero-container {
		max-width: 680px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.legal-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 16px;
		background: rgba(245, 179, 49, 0.16);
		border: 1px solid rgba(245, 179, 49, 0.35);
		border-radius: 999px;
		margin-bottom: 20px;
	}

	.pill-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #F5B331;
	}

	.pill-text {
		font-size: 13px;
		font-weight: 600;
		color: #F5B331;
		letter-spacing: 0.04em;
	}

	.legal-title {
		font-size: 36px;
		font-weight: 800;
		line-height: 1.25;
		color: #FFFFFF;
		margin: 0 0 16px;
		letter-spacing: -0.02em;
	}

	.legal-desc {
		font-size: 16px;
		line-height: 1.6;
		color: #C3D4E6;
		margin: 0;
	}

	.legal-notice-section {
		padding: 64px 24px 80px;
		display: flex;
		justify-content: center;
		flex: 1;
	}

	.notice-card {
		max-width: 620px;
		width: 100%;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 20px;
		padding: 48px 40px;
		box-shadow: 0 4px 20px rgba(8, 36, 66, 0.06);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.notice-icon-box {
		width: 72px;
		height: 72px;
		border-radius: 20px;
		background: #FEF7E6;
		color: #B7791F;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;
	}

	.notice-heading {
		font-size: 22px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 12px;
	}

	.notice-text {
		font-size: 14.5px;
		line-height: 1.65;
		color: #4A5D73;
		margin: 0 0 32px;
	}

	.notice-action-row {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.btn-contact-primary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 24px;
		background: #079EAD;
		color: #FFFFFF;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 700;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
	}

	.btn-contact-primary:hover {
		background: #057A86;
		transform: translateY(-1px);
	}

	.btn-back-outline {
		display: inline-flex;
		align-items: center;
		padding: 12px 22px;
		background: transparent;
		color: #082442;
		border: 1px solid #CBD5E1;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
		transition: background 0.2s, border-color 0.2s;
	}

	.btn-back-outline:hover {
		background: #F1F5F9;
		border-color: #94A3B8;
	}

	@media (max-width: 640px) {
		.legal-hero {
			padding: 48px 20px 40px;
		}

		.legal-title {
			font-size: 28px;
		}

		.notice-card {
			padding: 32px 20px;
		}

		.notice-action-row {
			flex-direction: column;
			width: 100%;
		}

		.btn-contact-primary,
		.btn-back-outline {
			width: 100%;
			justify-content: center;
		}
	}
</style>
