<script lang="ts">
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500
		{scrolled
		? 'border-b border-sys-base bg-sys-surface/90 shadow-md backdrop-blur-md'
		: 'bg-sys-surface/40 backdrop-blur-sm'}"
>
	<a
		href="#hero"
		class="text-2xl font-black tracking-widest text-sys-text drop-shadow-sm transition-colors duration-200 hover:text-sys-accent"
	>
		水水 SuiSui
	</a>

	<div class="flex items-center gap-6">
		<!-- Navigation Links -->
		<div class="hidden gap-6 text-lg text-sys-text/80 md:flex">
			<a href="#hero" class="transition-colors duration-200 hover:text-sys-accent">入口</a>
			<a href="#about" class="transition-colors duration-200 hover:text-sys-accent">淵源</a>
		</div>
	</div>
</nav>
