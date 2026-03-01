<script lang="ts">
	import Navigator from '$lib/components/Navigator.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="font-sans text-sys-text antialiased selection:bg-sys-accent/30 selection:text-sys-text">
	<Navigator />

	<main class="w-full flex-col">
		<Hero />
		<AboutMe />
	</main>

	<Footer />
</div>
