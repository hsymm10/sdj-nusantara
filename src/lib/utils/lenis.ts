import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
	lenisInstance = instance;
}

export function getLenis(): Lenis | null {
	return lenisInstance;
}

export interface ScrollToOptions {
	offset?: number;
	immediate?: boolean;
	lock?: boolean;
	duration?: number;
	easing?: (t: number) => number;
	lerp?: number;
	onStart?: () => void;
	onComplete?: () => void;
	force?: boolean;
	programmatic?: boolean;
	userData?: Record<string, unknown>;
}

/**
 * Smoothly scrolls to target using Lenis if available,
 * with graceful fallback to native scroll.
 */
export function scrollTo(
	target: number | string | HTMLElement,
	options: ScrollToOptions = {}
) {
	if (lenisInstance) {
		lenisInstance.scrollTo(target, options);
		return;
	}

	if (typeof window === 'undefined') return;

	if (typeof target === 'number') {
		window.scrollTo({
			top: target + (options.offset ?? 0),
			behavior: options.immediate ? 'auto' : 'smooth'
		});
	} else if (typeof target === 'string') {
		const el = document.querySelector(target);
		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY + (options.offset ?? 0);
			window.scrollTo({
				top,
				behavior: options.immediate ? 'auto' : 'smooth'
			});
		}
	} else if (target instanceof HTMLElement) {
		const top = target.getBoundingClientRect().top + window.scrollY + (options.offset ?? 0);
		window.scrollTo({
			top,
			behavior: options.immediate ? 'auto' : 'smooth'
		});
	}
}

