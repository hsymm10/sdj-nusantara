<script lang="ts">
	interface Props {
		title: string;
		description: string;
		bgImage?: string;
		primaryText: string;
		primaryHref: string;
		secondaryText?: string;
		secondaryHref?: string;
		secondaryIcon?: 'whatsapp' | 'none';
		secondaryTarget?: string;
		variant?: 'default' | 'tentang-kami' | 'layanan' | 'program' | 'beasiswa' | 'kemitraan' | 'artikel';
	}

	let {
		title,
		description,
		bgImage = '/images/cta-bg-clean.jpg',
		primaryText,
		primaryHref,
		secondaryText,
		secondaryHref,
		secondaryIcon = 'none',
		secondaryTarget = '_self',
		variant = 'default'
	}: Props = $props();

	let effectiveBgImage = $derived(
		bgImage !== '/images/cta-bg-clean.jpg'
			? bgImage
			: variant === 'kemitraan'
				? '/images/cta-building-glass-left.jpg'
				: variant === 'artikel' || variant === 'tentang-kami'
					? '/images/cta-building-glass.jpg'
					: variant === 'layanan'
						? '/images/home-cta-academic-bg.jpg'
						: '/images/cta-bg-clean.jpg'
	);
</script>

<section class="cta-banner variant-{variant}">
	<div class="cta-bg-wrap">
		<img src={effectiveBgImage} alt="" class="cta-bg-img" loading="lazy" />
		<div class="cta-overlay"></div>
	</div>

	<div class="cta-container">
		<div class="cta-content">
			<div class="cta-text">
				<h2 class="cta-title">{title}</h2>
				<p class="cta-desc">{description}</p>
			</div>

			<div class="cta-actions">
				<a href={primaryHref} class="btn-gold">
					<span>{primaryText}</span>
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-left: 5px;">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
				{#if secondaryText && secondaryHref}
					<a
						href={secondaryHref}
						class="btn-outline"
						target={secondaryTarget}
						rel={secondaryTarget === '_blank' ? 'noopener noreferrer' : undefined}
					>
						{#if secondaryIcon === 'whatsapp'}
							<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 5px;">
								<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.122-.51-1.819-.751-2.99-2.6-3.08-2.72-.091-.121-.734-.977-.734-1.861 0-.885.464-1.32.629-1.498.165-.178.36-.223.48-.223.12 0 .241.002.346.007.11.005.257-.042.402.308.149.362.51 1.246.555 1.337.045.09.075.196.015.316-.06.12-.09.196-.18.301-.091.106-.191.236-.273.316-.091.091-.186.19-.08.372.105.181.468.772 1.005 1.25.69.615 1.272.806 1.453.896.18.09.285.076.39-.045.106-.12.451-.526.571-.707.12-.18.24-.15.405-.09.166.06 1.053.497 1.234.587.18.09.3.136.345.211.046.075.046.436-.098.841z"/>
							</svg>
						{/if}
						<span>{secondaryText}</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.cta-banner {
		position: relative;
		width: 100%;
		height: 83px;
		background: #0B2948;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.cta-bg-wrap {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}

	.cta-bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		opacity: 0.25;
	}

	.cta-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			rgba(11, 41, 72, 0.95) 0%,
			rgba(16, 44, 80, 0.9) 50%,
			rgba(11, 41, 72, 0.95) 100%
		);
	}

	.cta-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1086px;
		margin: 0 auto;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.cta-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.cta-text {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.cta-title {
		font-size: 15px;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.cta-desc {
		font-size: 10.5px;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
		letter-spacing: 0;
	}

	.cta-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		background: #F4B334;
		color: #071D36;
		padding: 0.45rem 1.15rem;
		font-size: 11px;
		font-weight: 700;
		border-radius: 8px;
		text-decoration: none;
		box-shadow: 0 2px 8px rgba(244, 179, 52, 0.25);
		transition: all 0.2s;
		white-space: nowrap;
	}

	.btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		background: transparent;
		color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.35);
		padding: 0.45rem 1.15rem;
		font-size: 11px;
		font-weight: 600;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
		white-space: nowrap;
	}

	.btn-outline:hover {
		border-color: #00A6B2;
		color: #00A6B2;
	}

	@media (max-width: 768px) {
		.cta-banner {
			height: auto;
			padding: 1.5rem 0;
		}
		.cta-content {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}
		.cta-actions {
			width: 100%;
			flex-direction: column;
		}
		.btn-gold, .btn-outline {
			width: 100%;
			justify-content: center;
		}
	}

	/* Variant Tentang Kami & Artikel (Sleek professional banner matching Gambar 2) */
	.cta-banner.variant-tentang-kami,
	.cta-banner.variant-artikel {
		height: 96px;
	}

	.cta-banner.variant-tentang-kami .cta-container,
	.cta-banner.variant-artikel .cta-container {
		max-width: 1312px;
		padding: 0 1.5rem;
	}

	@media (min-width: 1920px) {
		.cta-banner.variant-tentang-kami .cta-container,
		.cta-banner.variant-artikel .cta-container {
			max-width: 1500px;
		}
	}

	.cta-banner.variant-tentang-kami .cta-title,
	.cta-banner.variant-artikel .cta-title {
		font-size: clamp(17px, 1.45vw, 21px);
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 3px 0;
		letter-spacing: -0.01em;
	}

	.cta-banner.variant-tentang-kami .cta-desc,
	.cta-banner.variant-artikel .cta-desc {
		font-size: clamp(11.5px, 0.9vw, 12.5px);
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.cta-banner.variant-tentang-kami .btn-gold,
	.cta-banner.variant-artikel .btn-gold {
		padding: 0 1.25rem;
		height: 36px;
		font-size: 11.5px;
		font-weight: 700;
		background: #F9B52B;
		color: #082442;
		border-radius: 7px;
		box-shadow: 0 3px 8px rgba(249, 181, 43, 0.28);
	}

	.cta-banner.variant-tentang-kami .btn-outline,
	.cta-banner.variant-artikel .btn-outline {
		padding: 0 1.25rem;
		height: 36px;
		font-size: 11.5px;
		font-weight: 700;
		background: rgba(255, 255, 255, 0.04);
		border: 1.5px solid rgba(255, 255, 255, 0.75);
		color: #FFFFFF;
		border-radius: 7px;
	}

	.cta-banner.variant-tentang-kami .btn-outline:hover,
	.cta-banner.variant-artikel .btn-outline:hover {
		background: rgba(255, 255, 255, 0.16);
		border-color: #FFFFFF;
		color: #FFFFFF;
	}

	.cta-banner.variant-tentang-kami .cta-bg-img,
	.cta-banner.variant-artikel .cta-bg-img {
		opacity: 0.95;
		width: 100%;
		object-position: center 38%;
	}

	.cta-banner.variant-tentang-kami .cta-overlay,
	.cta-banner.variant-artikel .cta-overlay {
		background: linear-gradient(
			90deg,
			rgba(11, 41, 72, 0.97) 0%,
			rgba(11, 41, 72, 0.92) 28%,
			rgba(11, 41, 72, 0.65) 50%,
			rgba(11, 41, 72, 0.28) 75%,
			rgba(11, 41, 72, 0.15) 100%
		);
	}

	@media (max-width: 768px) {
		.cta-banner.variant-tentang-kami,
		.cta-banner.variant-artikel {
			height: auto;
			padding: 1.5rem 0;
		}
	}

	/* Variant Layanan (Sesuai Mockup Referensi GAMBAR: Full Background Image, Navy Overlay, 96px Height) */
	.cta-banner.variant-layanan {
		height: 96px;
		background: #0B2948;
	}

	.cta-banner.variant-layanan .cta-container {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.cta-banner.variant-layanan .cta-container {
			max-width: 1500px;
		}
	}

	.cta-banner.variant-layanan .cta-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.cta-banner.variant-layanan .cta-text {
		max-width: 720px;
		margin-left: 0;
	}

	.cta-banner.variant-layanan .cta-title {
		font-size: clamp(17px, 1.45vw, 21px);
		line-height: 1.25;
		font-weight: 800;
		color: #FFFFFF;
		margin: 0 0 3px 0;
		letter-spacing: -0.01em;
	}

	.cta-banner.variant-layanan .cta-desc {
		font-size: clamp(11.5px, 0.9vw, 12.5px);
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.cta-banner.variant-layanan .cta-actions {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-shrink: 0;
	}

	.cta-banner.variant-layanan .btn-gold {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 0 1.25rem;
		height: 36px;
		font-size: 11.5px;
		font-weight: 700;
		background: #F9B52B;
		color: #082442;
		border-radius: 7px;
		box-shadow: 0 3px 8px rgba(249, 181, 43, 0.28);
		white-space: nowrap;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.cta-banner.variant-layanan .btn-gold:hover {
		background: #e6a528;
		transform: translateY(-1px);
		box-shadow: 0 5px 12px rgba(249, 181, 43, 0.38);
	}

	.cta-banner.variant-layanan .btn-outline {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 0 1.25rem;
		height: 36px;
		font-size: 11.5px;
		font-weight: 700;
		background: rgba(255, 255, 255, 0.04);
		border: 1.5px solid rgba(255, 255, 255, 0.75);
		color: #FFFFFF;
		border-radius: 7px;
		white-space: nowrap;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.cta-banner.variant-layanan .btn-outline:hover {
		background: rgba(255, 255, 255, 0.16);
		border-color: #FFFFFF;
		color: #FFFFFF;
		transform: translateY(-1px);
	}

	.cta-banner.variant-layanan .cta-bg-img {
		opacity: 0.95;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		filter: saturate(0.9) brightness(0.95);
	}

	.cta-banner.variant-layanan .cta-overlay {
		background: linear-gradient(
			90deg,
			rgba(11, 41, 72, 0.42) 0%,
			rgba(11, 41, 72, 0.65) 24%,
			rgba(11, 41, 72, 0.88) 46%,
			#0B2948 68%,
			#0B2948 100%
		);
	}

	@media (max-width: 768px) {
		.cta-banner.variant-layanan {
			height: auto;
			padding: 1.5rem 0;
		}

		.cta-banner.variant-layanan .cta-content {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.cta-banner.variant-layanan .cta-actions {
			width: 100%;
			flex-wrap: wrap;
		}

		.cta-banner.variant-layanan .btn-gold,
		.cta-banner.variant-layanan .btn-outline {
			flex: 1;
			justify-content: center;
			min-width: 140px;
		}
	}

	/* Variant Program (131px height, wide container, toga silhouette on left) */
	.cta-banner.variant-program {
		height: 131px;
	}

	.cta-banner.variant-program .cta-container {
		max-width: 1440px;
		padding: 0 1.5rem;
	}

	@media (min-width: 1920px) {
		.cta-banner.variant-program .cta-container {
			max-width: 1500px;
		}
	}

	.cta-banner.variant-program .cta-content {
		align-items: center;
	}

	.cta-banner.variant-program .cta-text {
		max-width: 580px;
		margin-left: 270px; /* offset to give room for student silhouette on left */
	}

	@media (max-width: 1200px) {
		.cta-banner.variant-program .cta-text {
			margin-left: 0;
		}
	}

	.cta-banner.variant-program .cta-title {
		font-size: clamp(18px, 1.6vw, 22px);
		line-height: 1.2;
		font-weight: 800;
		color: #FFFFFF;
		margin-bottom: 0.35rem;
	}

	.cta-banner.variant-program .cta-desc {
		font-size: 12px;
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.88);
		text-wrap: pretty;
	}

	.cta-banner.variant-program .btn-gold {
		padding: 8px 20px;
		font-size: 12.5px;
		font-weight: 700;
		background: #F5B331;
		color: #082442;
		border-radius: 8px;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.28);
	}

	.cta-banner.variant-program .btn-outline {
		padding: 8px 18px;
		font-size: 12.5px;
		font-weight: 600;
		border-color: rgba(255, 255, 255, 0.6);
		border-radius: 8px;
	}

	.cta-banner.variant-program .cta-bg-img {
		opacity: 0.25;
		object-position: left center;
	}

	/* Variant Beasiswa */
	.cta-banner.variant-beasiswa {
		height: 120px;
		background: #082442;
	}

	.cta-banner.variant-beasiswa .cta-container {
		width: 100%;
		max-width: 1425px;
		margin: 0 auto;
		padding: 0 57px;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.cta-banner.variant-beasiswa .cta-container {
			max-width: 1500px;
		}
	}

	.cta-banner.variant-beasiswa .cta-content {
		align-items: center;
		justify-content: space-between;
	}

	.cta-banner.variant-beasiswa .cta-text {
		max-width: 620px;
		margin-left: 350px;
	}

	@media (max-width: 1200px) {
		.cta-banner.variant-beasiswa .cta-text {
			margin-left: 0;
		}
	}

	.cta-banner.variant-beasiswa .cta-title {
		font-size: clamp(20px, 1.8vw, 24px);
		line-height: 1.2;
		font-weight: 800;
		color: #FFFFFF;
		margin-bottom: 0.35rem;
	}

	.cta-banner.variant-beasiswa .cta-desc {
		font-size: 13.5px;
		line-height: 19px;
		color: rgba(255, 255, 255, 0.88);
	}

	.cta-banner.variant-beasiswa .btn-gold {
		padding: 9px 22px;
		font-size: 13px;
		font-weight: 700;
		background: #F5B331;
		color: #082442;
		border-radius: 8px;
		box-shadow: 0 3px 10px rgba(245, 179, 49, 0.28);
	}

	.cta-banner.variant-beasiswa .btn-outline {
		padding: 9px 20px;
		font-size: 13px;
		font-weight: 600;
		border: 1.5px solid rgba(255, 255, 255, 0.65);
		border-radius: 8px;
	}

	.cta-banner.variant-beasiswa .cta-bg-img {
		opacity: 0.75;
		width: 440px;
		object-position: left center;
	}

	.cta-banner.variant-beasiswa .cta-overlay {
		background: linear-gradient(
			90deg,
			rgba(8, 36, 66, 0.45) 0%,
			rgba(8, 36, 66, 0.82) 28%,
			#082442 42%,
			#082442 100%
		);
	}

	/* Variant Kemitraan (Konsep Gambar 2: Gambar gedung kaca di KIRI, teks tetap di kanan) */
	.cta-banner.variant-kemitraan {
		height: 100px;
		background: #082442;
	}

	.cta-banner.variant-kemitraan .cta-container {
		width: 100%;
		max-width: 1312px;
		margin: 0 auto;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	@media (min-width: 1920px) {
		.cta-banner.variant-kemitraan .cta-container {
			max-width: 1500px;
		}
	}

	.cta-banner.variant-kemitraan .cta-content {
		align-items: center;
		justify-content: space-between;
	}

	.cta-banner.variant-kemitraan .cta-text {
		max-width: 650px;
		margin-left: 360px;
	}

	@media (max-width: 1200px) {
		.cta-banner.variant-kemitraan .cta-text {
			margin-left: 0;
		}
	}

	.cta-banner.variant-kemitraan .cta-title {
		font-size: clamp(17px, 1.45vw, 21px);
		line-height: 1.25;
		font-weight: 800;
		color: #FFFFFF;
		margin-bottom: 3px;
		letter-spacing: -0.01em;
	}

	.cta-banner.variant-kemitraan .cta-desc {
		font-size: clamp(11.5px, 0.9vw, 12.5px);
		line-height: 1.45;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.cta-banner.variant-kemitraan .btn-gold {
		padding: 0 1.25rem;
		height: 36px;
		font-size: 11.5px;
		font-weight: 700;
		background: #F9B52B;
		color: #082442;
		border-radius: 7px;
		box-shadow: 0 3px 8px rgba(249, 181, 43, 0.28);
	}

	.cta-banner.variant-kemitraan .btn-outline {
		padding: 0 1.25rem;
		height: 36px;
		font-size: 11.5px;
		font-weight: 700;
		background: rgba(255, 255, 255, 0.04);
		border: 1.5px solid rgba(255, 255, 255, 0.75);
		color: #FFFFFF;
		border-radius: 7px;
	}

	.cta-banner.variant-kemitraan .btn-outline:hover {
		background: rgba(255, 255, 255, 0.16);
		border-color: #FFFFFF;
		color: #FFFFFF;
	}

	.cta-banner.variant-kemitraan .cta-bg-img {
		opacity: 0.95;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
	}

	.cta-banner.variant-kemitraan .cta-overlay {
		background: linear-gradient(
			90deg,
			rgba(11, 41, 72, 0.15) 0%,
			rgba(11, 41, 72, 0.28) 22%,
			rgba(11, 41, 72, 0.65) 36%,
			rgba(11, 41, 72, 0.92) 50%,
			rgba(11, 41, 72, 0.97) 65%,
			rgba(11, 41, 72, 0.98) 100%
		);
	}

	@media (max-width: 768px) {
		.cta-banner.variant-kemitraan {
			height: auto;
			padding: 1.5rem 0;
		}
	}
</style>
