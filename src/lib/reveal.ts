/**
 * Scroll-reveal Svelte action. Elements below the viewport are hidden
 * initially and animate into view when scrolled to. Above-fold elements
 * are left untouched to avoid SSR flash.
 */
export function reveal(node: HTMLElement, options: { delay?: number; threshold?: number } = {}) {
	const { delay = 0, threshold = 0.1 } = options;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return { destroy() {} };
	}

	const rect = node.getBoundingClientRect();
	if (rect.top < window.innerHeight && rect.bottom > 0) {
		return { destroy() {} };
	}

	node.style.opacity = '0';
	node.style.transform = 'translateY(20px)';

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const animate = () => {
						node.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
						node.style.opacity = '1';
						node.style.transform = 'translateY(0)';
					};
					delay ? setTimeout(animate, delay) : animate();
					observer.unobserve(node);
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}
