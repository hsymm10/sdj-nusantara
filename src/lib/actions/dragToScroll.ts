/**
 * Action to enable smooth mouse/pointer drag-to-scroll alongside native touch swipe
 * on horizontally scrolling containers (tabs, navigation pills, categories).
 */
export function dragToScroll(node: HTMLElement) {
	let isDown = false;
	let startX = 0;
	let startY = 0;
	let scrollLeft = 0;
	let hasMoved = false;

	function checkOverflow() {
		if (node.scrollWidth > node.clientWidth + 1) {
			if (!isDown) node.style.cursor = 'grab';
		} else {
			node.style.cursor = '';
		}
	}

	function onPointerDown(e: PointerEvent) {
		// Only primary button for mouse, or touch
		if (e.pointerType === 'mouse' && e.button !== 0) return;
		if (node.scrollWidth <= node.clientWidth + 1) return;

		isDown = true;
		hasMoved = false;
		startX = e.clientX;
		startY = e.clientY;
		scrollLeft = node.scrollLeft;

		if (e.pointerType === 'mouse') {
			node.style.cursor = 'grabbing';
		}
		node.style.userSelect = 'none';
	}

	function onPointerMove(e: PointerEvent) {
		if (!isDown) return;
		const dx = e.clientX - startX;
		const dy = e.clientY - startY;

		// Detect intentional horizontal drag
		if (Math.abs(dx) > 4) {
			hasMoved = true;
			try {
				if (!node.hasPointerCapture(e.pointerId)) {
					node.setPointerCapture(e.pointerId);
				}
			} catch (_) {}
			node.scrollLeft = scrollLeft - dx;
		}
	}

	function onPointerUp(e: PointerEvent) {
		if (!isDown) return;
		isDown = false;
		try {
			if (node.hasPointerCapture(e.pointerId)) {
				node.releasePointerCapture(e.pointerId);
			}
		} catch (_) {}
		checkOverflow();
		node.style.removeProperty('user-select');
		setTimeout(() => {
			hasMoved = false;
		}, 80);
	}

	function onPointerCancel(e: PointerEvent) {
		if (!isDown) return;
		isDown = false;
		try {
			if (node.hasPointerCapture(e.pointerId)) {
				node.releasePointerCapture(e.pointerId);
			}
		} catch (_) {}
		checkOverflow();
		node.style.removeProperty('user-select');
		setTimeout(() => {
			hasMoved = false;
		}, 80);
	}

	function onClickCapture(e: MouseEvent) {
		if (hasMoved) {
			// Prevent accidental link / button navigation when user was dragging
			e.preventDefault();
			e.stopPropagation();
		}
	}

	// Native scroll styling
	node.style.overflowX = 'auto';
	node.style.setProperty('-webkit-overflow-scrolling', 'touch');
	node.style.touchAction = 'pan-y';

	node.addEventListener('mouseenter', checkOverflow);
	node.addEventListener('pointerdown', onPointerDown);
	window.addEventListener('pointermove', onPointerMove);
	window.addEventListener('pointerup', onPointerUp);
	window.addEventListener('pointercancel', onPointerCancel);
	node.addEventListener('click', onClickCapture, true);

	const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => checkOverflow()) : null;
	resizeObserver?.observe(node);

	checkOverflow();

	return {
		destroy() {
			node.removeEventListener('mouseenter', checkOverflow);
			node.removeEventListener('pointerdown', onPointerDown);
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerup', onPointerUp);
			window.removeEventListener('pointercancel', onPointerCancel);
			node.removeEventListener('click', onClickCapture, true);
			resizeObserver?.disconnect();
		}
	};
}
