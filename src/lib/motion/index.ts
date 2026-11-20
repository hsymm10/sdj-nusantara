import { animate, inView, stagger } from 'motion';

/**
 * SDJ Nusantara Motion Design System
 * Principles: Subtle, smooth, natural, professional, minimalist.
 * Motion enhances UX, never distracts from content.
 */

export const motionTokens = {
	duration: {
		instant: 0,
		fast: 0.2,
		normal: 0.45,
		hero: 0.55,
		page: 0.25
	},
	ease: {
		// Natural ease-out curve: swift initiation, silky deceleration
		natural: [0.22, 1, 0.36, 1] as const,
		// Soft ease for transitions
		soft: [0.25, 0.1, 0.25, 1] as const
	},
	distance: {
		micro: 8,
		subtle: 14,
		cardHover: -3
	},
	stagger: {
		fast: 0.05,
		normal: 0.08,
		hero: 0.09
	}
} as const;

/**
 * Check if the user has requested reduced motion.
 */
export function isReducedMotion(): boolean {
	if (typeof window === 'undefined') return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export interface HeroEntranceOptions {
	delay?: number;
}

/**
 * Svelte Action: Hero Entrance Animation
 * Sequentially reveals:
 * 1. Pill tag / badge
 * 2. Hero title
 * 3. Hero description
 * 4. Hero image / visual
 * 5. Wave / accent SVG decorations
 */
export function heroEntrance(node: HTMLElement, options: HeroEntranceOptions = {}) {
	if (isReducedMotion()) {
		// Immediately guarantee all elements are visible with no transforms
		return;
	}

	const baseDelay = options.delay ?? 0.02;
	const ease = motionTokens.ease.natural;

	// Query key hero children
	const pill = node.querySelector<HTMLElement>('.pill-tag, .section-badge, .tab-btn.active');
	const title = node.querySelector<HTMLElement>('.hero-title, h1');
	const desc = node.querySelector<HTMLElement>('.hero-desc');
	const visual = node.querySelector<HTMLElement>('.hero-img, .hero-bg-wrap picture, .card-media, .hero-right-col');
	const decor = node.querySelectorAll<HTMLElement>('.hero-wave, .hero-bottom-wave, .hero-wave-right, .hero-swoosh-right, .hero-swoosh-br');

	// 1. Pill tag
	if (pill) {
		animate(
			pill,
			{ opacity: [0, 1], y: [motionTokens.distance.micro, 0] },
			{ duration: 0.35, delay: baseDelay, ease }
		);
	}

	// 2. Headline
	if (title) {
		animate(
			title,
			{ opacity: [0, 1], y: [motionTokens.distance.subtle, 0] },
			{ duration: 0.42, delay: baseDelay + 0.06, ease }
		);
	}

	// 3. Description
	if (desc) {
		animate(
			desc,
			{ opacity: [0, 1], y: [motionTokens.distance.subtle, 0] },
			{ duration: 0.42, delay: baseDelay + 0.12, ease }
		);
	}

	// 4. Visual Image
	if (visual) {
		animate(
			visual,
			{ opacity: [0.35, 1] },
			{ duration: 0.48, delay: baseDelay + 0.06, ease }
		);
	}

	// 5. Decorative SVGs
	if (decor.length > 0) {
		animate(
			decor,
			{ opacity: [0.2, 1] },
			{ duration: 0.48, delay: baseDelay + 0.14, ease }
		);
	}

	return {
		destroy() {
			// No ongoing watchers for hero entrance
		}
	};
}

export interface ScrollRevealOptions {
	/**
	 * CSS selector for child items to animate with stagger.
	 * If omitted, animates the node itself.
	 */
	selector?: string;
	/**
	 * Delay between staggered child items in seconds.
	 */
	stagger?: number;
	/**
	 * Initial delay before animation starts.
	 */
	delay?: number;
	/**
	 * Vertical distance to move in pixels (positive = slide up).
	 */
	distance?: number;
	/**
	 * Duration of the animation in seconds.
	 */
	duration?: number;
	/**
	 * Viewport intersection ratio or keyword ('some' | 'all' | number).
	 */
	amount?: 'some' | 'all' | number;
	/**
	 * Optional rootMargin for earlier trigger.
	 */
	margin?: string;
}

/**
 * Svelte Action: Scroll Reveal Animation
 * Executes ONCE when the element enters the viewport.
 * Subsequent scrolling will not re-trigger.
 */
export function scrollReveal(node: HTMLElement, options: ScrollRevealOptions = {}) {
	if (isReducedMotion()) {
		return;
	}

	const distance = options.distance ?? motionTokens.distance.subtle;
	const duration = options.duration ?? motionTokens.duration.normal;
	const delay = options.delay ?? 0;
	const staggerTime = options.stagger ?? motionTokens.stagger.normal;
	const amount = options.amount ?? 0.12;
	const margin = (options.margin ?? '0px 0px -40px 0px') as any;
	const ease = motionTokens.ease.natural;

	const stop = inView(
		node,
		() => {
			if (options.selector) {
				const items = node.querySelectorAll<HTMLElement>(options.selector);
				if (items.length > 0) {
					animate(
						items,
						{ opacity: [0, 1], y: [distance, 0] },
						{
							duration,
							delay: stagger(staggerTime, { startDelay: delay }),
							ease
						}
					);
				}
			} else {
				animate(
					node,
					{ opacity: [0, 1], y: [distance, 0] },
					{
						duration,
						delay,
						ease
					}
				);
			}
			// Notice: We return VOID, not a function.
			// This causes `inView` to unobserve immediately (once = true)!
		},
		{
			amount,
			margin
		}
	);

	return {
		destroy() {
			stop();
		}
	};
}
