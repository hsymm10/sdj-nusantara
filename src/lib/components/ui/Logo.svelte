<script lang="ts">
	import logoSdj from '#lib/assets/logo_sdj.png';
	import { i18n } from '#lib/stores/i18n.svelte';

	interface Props {
		variant?: 'dark' | 'light' | 'plain';
		size?: 'sm' | 'md' | 'lg' | 'nav' | 'footer' | 'plaque';
	}

	let { variant = 'plain', size = 'md' }: Props = $props();
</script>

<div class="logo-wrapper {size} {variant}">
	<img
		src={logoSdj}
		alt={i18n.pick('Logo SDJNusantara - Your Strategic Partner', 'SDJNusantara Logo - Your Strategic Partner')}
		class="logo-icon-img"
		width="1410"
		height="320"
		decoding="async"
	/>
</div>

<style>
	.logo-wrapper {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		user-select: none;
		flex-shrink: 0;
	}

	.logo-icon-img {
		height: 38px;
		width: auto;
		max-width: 100%;
		object-fit: contain;
		flex-shrink: 0;
		display: block;
	}

	.logo-wrapper.light {
		background: #FFFFFF;
		padding: 6px 12px;
		border-radius: 8px;
	}

	.logo-wrapper.sm .logo-icon-img {
		height: 30px;
	}

	.logo-wrapper.lg .logo-icon-img {
		height: 46px;
	}

	.logo-wrapper.nav .logo-icon-img {
		height: 40px;
	}

	.logo-wrapper.footer .logo-icon-img {
		height: 36px;
	}

	.logo-wrapper.plaque .logo-icon-img {
		height: 30px;
	}

	@media (max-width: 640px) {
		.logo-wrapper.nav .logo-icon-img {
			height: 32px;
		}
	}
</style>
