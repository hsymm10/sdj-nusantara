<script lang="ts">
	interface Props {
		title: string;
		description: string;
		bgImage?: string;
		primaryText: string;
		primaryHref: string;
		secondaryText?: string;
		secondaryHref?: string;
	}

	let {
		title,
		description,
		bgImage = '/images/cta-bg-clean.jpg',
		primaryText,
		primaryHref,
		secondaryText,
		secondaryHref
	}: Props = $props();
</script>

<section class="cta-banner">
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
					<a href={secondaryHref} class="btn-outline">
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
</style>
