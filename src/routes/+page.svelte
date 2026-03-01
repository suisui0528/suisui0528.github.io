<script lang="ts">
	import Navigator from '$lib/components/Navigator.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="font-sans text-sys-text antialiased selection:bg-sys-accent/30 selection:text-sys-text">
	<a
		href="#main-content"
		class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-sys-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
	>
		跳至主要內容
	</a>

	<Navigator />

	<main id="main-content" class="w-full flex-col">
		<Hero />
		<AboutMe />
	</main>

	<Footer />
</div>
