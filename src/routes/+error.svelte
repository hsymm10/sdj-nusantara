<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { i18n } from '#lib/stores/i18n.svelte';

	let status = $derived(page.status || 404);
	let isNotFound = $derived(status === 404);
</script>

<svelte:head>
	<title>
		{isNotFound
			? i18n.pick('Halaman Tidak Ditemukan — SDJNusantara', 'Page Not Found — SDJNusantara')
			: i18n.pick('Terjadi Kesalahan — SDJNusantara', 'Something Went Wrong — SDJNusantara')}
	</title>
</svelte:head>

<Navbar />

<main class="error-page">
	<div class="error-card">
		<span class="error-code">{status}</span>
		<h1 class="error-title">
			{isNotFound
				? i18n.pick('Halaman Tidak Ditemukan', 'Page Not Found')
				: i18n.pick('Terjadi Kesalahan', 'An Error Occurred')}
		</h1>
		<p class="error-desc">
			{isNotFound
				? i18n.pick(
						'Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.',
						'Sorry, the page you are looking for is unavailable or has been moved.'
					)
				: i18n.pick(
						'Terjadi kendala saat memuat halaman. Silakan coba kembali atau hubungi tim kami.',
						'An issue occurred while loading this page. Please try again or contact our team.'
					)}
		</p>
		<div class="error-actions">
			<a href="/" class="btn-primary">
				{i18n.pick('Kembali ke Beranda', 'Back to Home')}
			</a>
			<a href="/kontak" class="btn-secondary">
				{i18n.pick('Hubungi Kami', 'Contact Us')}
			</a>
		</div>
	</div>
</main>

<Footer compact={true} />

<style>
	.error-page {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 120px 20px 80px;
		background: #F4F7FA;
	}

	.error-card {
		max-width: 520px;
		width: 100%;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		border-radius: 20px;
		padding: 40px 32px;
		text-align: center;
		box-shadow: 0 12px 32px rgba(8, 36, 66, 0.08);
	}

	.error-code {
		display: inline-block;
		font-size: 48px;
		font-weight: 800;
		color: #079EAD;
		line-height: 1;
		margin-bottom: 12px;
	}

	.error-title {
		font-size: 24px;
		font-weight: 800;
		color: #082442;
		margin: 0 0 10px;
	}

	.error-desc {
		font-size: 14.5px;
		line-height: 1.65;
		color: #475569;
		margin: 0 0 24px;
	}

	.error-actions {
		display: flex;
		justify-content: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.btn-primary {
		background: #F5B418;
		color: #082442;
		font-weight: 700;
		font-size: 14px;
		padding: 11px 22px;
		border-radius: 999px;
		text-decoration: none;
	}

	.btn-secondary {
		border: 1.5px solid #082442;
		color: #082442;
		font-weight: 700;
		font-size: 14px;
		padding: 10px 20px;
		border-radius: 999px;
		text-decoration: none;
	}
</style>

