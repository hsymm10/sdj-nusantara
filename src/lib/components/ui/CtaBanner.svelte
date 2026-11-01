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
		variant?: 'default' | 'tentang-kami' | 'layanan';
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
</script>

<section class="cta-banner variant-{variant}">
	<div class="cta-bg-wrap">
		<img src={bgImage} alt="" class="cta-bg-img" loading="lazy" />
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

	/* Variant Tentang Kami (117px height, wide container, crisp typography) */
	.cta-banner.variant-tentang-kami {
		height: 117px;
	}

	.cta-banner.variant-tentang-kami .cta-container {
		max-width: 1312px;
		padding: 0 1rem;
	}

	@media (min-width: 1920px) {
		.cta-banner.variant-tentang-kami .cta-container {
			max-width: 1500px;
		}
	}

	.cta-banner.variant-tentang-kami .cta-title {
		font-size: clamp(19px, 1.6vw, 24px);
		font-weight: 800;
	}

	.cta-banner.variant-tentang-kami .cta-desc {
		font-size: 11.5px;
		color: rgba(255, 255, 255, 0.85);
	}

	.cta-banner.variant-tentang-kami .btn-gold {
		padding: 8px 22px;
		font-size: 12px;
		background: #F5B331;
		color: #082442;
	}

	.cta-banner.variant-tentang-kami .btn-outline {
		padding: 8px 20px;
		font-size: 12px;
		border-color: rgba(255, 255, 255, 0.6);
	}

	.cta-banner.variant-tentang-kami .cta-bg-img {
		opacity: 0.35;
		object-position: right 40%;
	}

	.cta-banner.variant-tentang-kami .cta-overlay {
		background: linear-gradient(
			90deg,
			#0B2948 0%,
			rgba(11, 41, 72, 0.9) 45%,
			rgba(11, 41, 72, 0.72) 100%
		);
	}

	/* Variant Layanan (193px height, wide container, toga silhouette on left) */
	.cta-banner.variant-layanan {
		height: 193px;
	}

	.cta-banner.variant-layanan .cta-container {
		max-width: 1400px;
		padding: 0 1rem;
	}

	@media (min-width: 1920px) {
		.cta-banner.variant-layanan .cta-container {
			max-width: 1500px;
		}
	}

	.cta-banner.variant-layanan .cta-content {
		align-items: center;
	}

	.cta-banner.variant-layanan .cta-text {
		max-width: 620px;
		margin-left: 240px; /* offset to give room for student silhouette on left */
	}

	@media (max-width: 1200px) {
		.cta-banner.variant-layanan .cta-text {
			margin-left: 0;
		}
	}

	.cta-banner.variant-layanan .cta-title {
		font-size: clamp(20px, 1.9vw, 28px);
		line-height: 1.25;
		font-weight: 800;
		color: #FFFFFF;
		margin-bottom: 0.5rem;
	}

	.cta-banner.variant-layanan .cta-desc {
		font-size: 13px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.88);
		text-wrap: pretty;
	}

	.cta-banner.variant-layanan .btn-gold {
		padding: 10px 24px;
		font-size: 13px;
		font-weight: 700;
		background: #F5B331;
		color: #082442;
		border-radius: 8px;
		box-shadow: 0 3px 12px rgba(245, 179, 49, 0.3);
	}

	.cta-banner.variant-layanan .btn-outline {
		padding: 10px 22px;
		font-size: 13px;
		font-weight: 600;
		border-color: rgba(255, 255, 255, 0.6);
		border-radius: 8px;
	}

	.cta-banner.variant-layanan .cta-bg-img {
		opacity: 0.25;
		object-position: left center;
	}

	.cta-banner.variant-layanan .cta-overlay {
		background: linear-gradient(
			90deg,
			rgba(8, 36, 66, 0.72) 0%,
			rgba(8, 36, 66, 0.88) 35%,
			rgba(8, 36, 66, 0.96) 65%,
			#082442 100%
		);
	}
</style>
