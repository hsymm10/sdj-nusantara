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
		alt="Logo SDJNusantara"
		class="logo-icon-img"
	/>

	<div class="logo-text">
		<span class="brand-name {isLight ? 'text-white' : 'text-[#0B2747]'}">
			SDJNusantara
		</span>
		{#if showTagline}
			<span class="brand-tagline {isLight ? 'text-gray-300' : 'text-[#64748B]'}">
				{taglineText}
			</span>
		{/if}
	</div>
</div>

<style>
	.logo-wrapper {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		text-decoration: none;
		user-select: none;
	}

	.logo-icon-img {
		width: 38px;
		height: 38px;
		object-fit: contain;
		flex-shrink: 0;
		border-radius: 6px;
	}

	.logo-wrapper.light .logo-icon-img {
		background: #FFFFFF;
		padding: 2px;
	}

	.logo-wrapper.sm .logo-icon-img {
		width: 30px;
		height: 30px;
	}

	.logo-wrapper.lg .logo-icon-img {
		width: 44px;
		height: 44px;
	}

	.logo-text {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.brand-name {
		font-size: 1.15rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.15;
	}

	.logo-wrapper.sm .brand-name {
		font-size: 1rem;
	}

	.logo-wrapper.lg .brand-name {
		font-size: 1.3rem;
	}

	.brand-tagline {
		font-size: 0.52rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-top: 2px;
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
