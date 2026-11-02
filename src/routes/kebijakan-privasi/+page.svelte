<script lang="ts">
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
</script>

<svelte:head>
	<title>Kebijakan Privasi - SDJNusantara</title>
	<meta name="description" content="Kebijakan Privasi SDJNusantara" />
</svelte:head>

<Navbar compact={true} wide={true} />

<main class="legal-page">
	<div class="legal-container">
		<div class="section-label">
			<span class="label-dash">—</span>
			<span class="label-text">Kebijakan Privasi</span>
		</div>
		<h1 class="legal-title">Kebijakan Privasi SDJNusantara</h1>
		<div class="legal-card">
			<p class="status-note">Dokumen ini sedang dalam tahap penyusunan dan verifikasi legal formal sesuai regulasi yang berlaku di Republik Indonesia.</p>
			<p class="legal-desc">
				SDJNusantara berkomitmen menjaga dan melindungi kerahasiaan data pribadi seluruh pengguna, klien, dan mitra kami. Informasi yang dikumpulkan melalui formulir konsultasi, pendaftaran program, maupun komunikasi langsung hanya digunakan untuk keperluan layanan pendidikan dan pengembangan talenta.
			</p>
			<div class="back-wrap">
				<a href="/" class="btn-back">← Kembali ke Beranda</a>
			</div>
		</div>
	</div>
</main>

<Footer variant="home" />

<style>
	.legal-page {
		padding: 5rem 1rem;
		min-height: 60vh;
		background: #F8FAFC;
	}
	.legal-container {
		max-width: 800px;
		margin: 0 auto;
	}
	.section-label {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #00A6B2;
		font-size: 13px;
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}
	.legal-title {
		font-size: 2rem;
		font-weight: 800;
		color: #082442;
		margin-bottom: 1.5rem;
	}
	.legal-card {
		background: #FFFFFF;
		padding: 2.5rem;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(8, 36, 66, 0.06);
		border: 1px solid #E2E8F0;
	}
	.status-note {
		background: #F0FDFA;
		border-left: 4px solid #00A6B2;
		padding: 0.75rem 1rem;
		border-radius: 4px;
		color: #065F67;
		font-weight: 600;
		font-size: 14px;
		margin-bottom: 1.25rem;
	}
	.legal-desc {
		color: #475569;
		line-height: 1.7;
		font-size: 15px;
		margin-bottom: 2rem;
	}
	.btn-back {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.25rem;
		background: #0B2948;
		color: #FFFFFF;
		text-decoration: none;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 600;
		transition: background 0.2s;
	}
	.btn-back:hover {
		background: #00A6B2;
	}
</style>
