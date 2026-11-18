/**
 * Action to enable smooth mouse drag-to-scroll alongside native touch swipe
 * on horizontally scrolling containers (tabs, navigation pills, categories).
 */
export function dragToScroll(node: HTMLElement) {
	let isDown = false;
	let startX = 0;
	let scrollLeft = 0;
	let hasMoved = false;

	function checkOverflow() {
		if (node.scrollWidth > node.clientWidth + 2) {
			if (!isDown) node.style.cursor = 'grab';
		} else {
			node.style.cursor = '';
		}
	}

	function onMouseDown(e: MouseEvent) {
		// Only primary left mouse button
		if (e.button !== 0) return;
		if (node.scrollWidth <= node.clientWidth + 2) return;

		isDown = true;
		hasMoved = false;
		startX = e.pageX - node.offsetLeft;
		scrollLeft = node.scrollLeft;
		node.style.cursor = 'grabbing';
		node.style.userSelect = 'none';
	}

	function onMouseMove(e: MouseEvent) {
		if (!isDown) return;
		const x = e.pageX - node.offsetLeft;
		const diff = x - startX;
		if (Math.abs(diff) > 4) {
			hasMoved = true;
			e.preventDefault();
			node.scrollLeft = scrollLeft - diff * 1.25;
		}
	}

	function onMouseUp() {
		if (!isDown) return;
		isDown = false;
		checkOverflow();
		node.style.removeProperty('user-select');
		// Reset hasMoved on next microtask so click capture can intercept if moved
		setTimeout(() => {
			hasMoved = false;
		}, 50);
	}

	function onMouseLeave() {
		if (!isDown) return;
		isDown = false;
		checkOverflow();
		node.style.removeProperty('user-select');
		setTimeout(() => {
			hasMoved = false;
		}, 50);
	}

	function onClickCapture(e: MouseEvent) {
		if (hasMoved) {
			// Prevent accidental link / button navigation when user was dragging
			e.preventDefault();
			e.stopPropagation();
		}
	}

	node.addEventListener('mouseenter', checkOverflow);
	node.addEventListener('mousedown', onMouseDown);
	window.addEventListener('mousemove', onMouseMove);
	window.addEventListener('mouseup', onMouseUp);
	node.addEventListener('mouseleave', onMouseLeave);
	node.addEventListener('click', onClickCapture, true);

	const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => checkOverflow()) : null;
	resizeObserver?.observe(node);

	checkOverflow();

	return {
		destroy() {
			node.removeEventListener('mouseenter', checkOverflow);
			node.removeEventListener('mousedown', onMouseDown);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
			node.removeEventListener('mouseleave', onMouseLeave);
			node.removeEventListener('click', onClickCapture, true);
			resizeObserver?.disconnect();
		}
	};
}
