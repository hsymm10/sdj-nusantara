<script lang="ts">
	import logoSdj from '#lib/assets/logo_sdj.png';

	interface Props {
		variant?: 'dark' | 'light';
		size?: 'sm' | 'md' | 'lg';
		showTagline?: boolean;
		taglineText?: string;
	}

	let {
		variant = 'dark',
		size = 'md',
		showTagline = true,
		taglineText = 'Strategic Your Partner'
	}: Props = $props();

	const isLight = $derived(variant === 'light');
</script>

<div class="logo-wrapper {size} {variant}">
	<img
		src={logoSdj}
		alt="Logo SDJNusantara - Your Strategic Partner"
		class="logo-icon-img"
	/>
</div>

<style>
	.logo-wrapper {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		user-select: none;
	}

	.logo-icon-img {
		height: 38px;
		width: auto;
		max-width: 165px;
		object-fit: contain;
		flex-shrink: 0;
		display: block;
	}

	.logo-wrapper.light {
		background: #FFFFFF;
		padding: 5px 9px;
		border-radius: 8px;
	}

	.logo-wrapper.sm .logo-icon-img {
		height: 30px;
	}

	.logo-wrapper.lg .logo-icon-img {
		height: 46px;
		max-width: 200px;
	}

	.text-white {
		color: #FFFFFF;
	}

	.text-gray-300 {
		color: rgba(255, 255, 255, 0.7);
	}

	.text-\[\#0B2747\] {
		color: #0B2747;
	}

	.text-\[\#64748B\] {
		color: #64748B;
	}
</style>
