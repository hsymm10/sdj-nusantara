<script lang="ts">
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
		taglineText = 'KONSULTAN PENDIDIKAN'
	}: Props = $props();

	const isLight = $derived(variant === 'light');
</script>

<div class="logo-wrapper {size}">
	<!-- 3-layer logo mark -->
	<svg
		class="logo-icon-svg"
		viewBox="0 0 36 36"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Layer 1: Top (Teal) -->
		<path
			d="M18 3L32 10.5L18 18L4 10.5L18 3Z"
			fill="#00A6B2"
		/>
		<!-- Layer 2: Middle (Navy) -->
		<path
			d="M4 14.5L18 22L32 14.5L32 17.5L18 25L4 17.5V14.5Z"
			fill={isLight ? '#4176A8' : '#0B2747'}
		/>
		<!-- Layer 3: Bottom (Gold) -->
		<path
			d="M4 21.5L18 29L32 21.5L32 24.5L18 32L4 24.5V21.5Z"
			fill="#F4B334"
		/>
	</svg>

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

	.logo-icon-svg {
		width: 38px;
		height: 38px;
		flex-shrink: 0;
	}

	.logo-wrapper.sm .logo-icon-svg {
		width: 30px;
		height: 30px;
	}

	.logo-wrapper.lg .logo-icon-svg {
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
