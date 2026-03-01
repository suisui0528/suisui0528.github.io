<script lang="ts">
	import { Sun, Moon, Sunset, Compass } from 'lucide-svelte';
	import { content, character } from '$lib/data';
	import bgDay from '$lib/assets/bg-day.webp';
	import bgEvening from '$lib/assets/bg-evening.webp';
	import bgNight from '$lib/assets/bg-night.webp';
	import characterImg from '$lib/assets/suisui.webp';

	type TimeMode = 'day' | 'evening' | 'night';

	const modes: TimeMode[] = ['day', 'evening', 'night'];
	const backgroundMap: Record<TimeMode, string> = {
		day: bgDay,
		evening: bgEvening,
		night: bgNight
	};

	let mode = $state<TimeMode>('day');
	let override = $state(false);
	let showControl = $state(false);

	const getCurrentMode = (): TimeMode => {
		const hour = new Date().getHours();
		if (hour >= 6 && hour < 17) return 'day';
		if (hour >= 17 && hour < 20) return 'evening';
		return 'night';
	};

	$effect(() => {
		if (!override) {
			mode = getCurrentMode();
			const interval = setInterval(() => {
				mode = getCurrentMode();
			}, 60000);
			return () => clearInterval(interval);
		}
	});

	const setMode = (m: TimeMode) => {
		mode = m;
		override = true;
		showControl = false;
	};
</script>

<section
	id="hero"
	class="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden pt-16"
>
	<!-- Background Images (cross-fade transition) -->
	<div class="absolute inset-0 z-0 overflow-hidden">
		{#each modes as m (m)}
			<img
				src={backgroundMap[m]}
				alt=""
				class="absolute inset-0 h-full w-full scale-110 object-cover blur-md transition-opacity duration-1000
					{mode === m ? 'opacity-100' : 'opacity-0'}"
				aria-hidden="true"
				decoding="async"
			/>
		{/each}
	</div>

	<!-- Foggy overlay -->
	<div
		class="absolute inset-0 z-[1] bg-linear-to-b from-sys-base/5 via-sys-base/25 to-sys-base/80"
	></div>

	<!-- Astrolabe Time Control -->
	<div class="group absolute top-24 right-6 z-40">
		<button
			class="rounded-full border-2 border-sys-surface bg-sys-surface/80 p-3 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-sys-accent hover:shadow-[0_0_15px_rgba(204,0,34,0.3)]"
			onclick={() => (showControl = !showControl)}
			aria-label="Toggle Time Astrolabe"
		>
			<Compass class="h-6 w-6 animate-astrolabe-spin text-sys-accent group-hover:animate-none" />
		</button>

		{#if showControl}
			<div
				class="absolute top-16 right-0 flex flex-col gap-1 rounded-xl border border-sys-text/10 bg-sys-surface/95 p-2 shadow-xl backdrop-blur-md"
			>
				<button
					class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-sys-accent hover:text-white {mode ===
					'day'
						? 'bg-sys-accent/10 font-bold text-sys-accent'
						: 'text-sys-text'}"
					onclick={() => setMode('day')}
				>
					<Sun class="h-4 w-4" /> 晨星
				</button>
				<button
					class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-sys-accent hover:text-white {mode ===
					'evening'
						? 'bg-sys-accent/10 font-bold text-sys-accent'
						: 'text-sys-text'}"
					onclick={() => setMode('evening')}
				>
					<Sunset class="h-4 w-4" /> 昏靄
				</button>
				<button
					class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-sys-accent hover:text-white {mode ===
					'night'
						? 'bg-sys-accent/10 font-bold text-sys-accent'
						: 'text-sys-text'}"
					onclick={() => setMode('night')}
				>
					<Moon class="h-4 w-4" /> 夜幕
				</button>
			</div>
		{/if}
	</div>

	<!-- Main Content -->
	<div
		class="relative z-20 container mx-auto flex h-full flex-col items-center justify-center gap-12 px-6 pt-16 md:flex-row"
	>
		<!-- Text Card -->
		<div
			class="order-2 flex flex-1 animate-fade-in-up flex-col items-center rounded-3xl border border-sys-surface/80 bg-sys-surface/60 p-8 text-center shadow-2xl backdrop-blur-lg md:order-1 md:items-start md:p-12 md:text-left"
		>
			<h1
				class="mb-6 text-4xl leading-tight font-black text-sys-accent drop-shadow-sm md:text-5xl lg:text-6xl"
			>
				{content.hero.greeting}
			</h1>
			<p class="mb-10 max-w-lg text-lg leading-relaxed font-bold text-sys-text/80 md:text-xl">
				{content.hero.subtitle}
			</p>
			<div class="flex flex-wrap items-center gap-4">
				<a
					href="https://www.twitch.tv/suisui_0528"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative overflow-hidden rounded-full bg-sys-accent px-8 py-4 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-sys-accent-hover hover:shadow-[0_0_20px_rgba(204,0,34,0.4)] active:scale-95"
				>
					進入直播間
					<span
						class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
					></span>
				</a>
				<a
					href="#about"
					class="rounded-full border-2 border-sys-accent/40 px-8 py-4 font-bold text-sys-accent transition-all duration-300 hover:-translate-y-1 hover:border-sys-accent hover:bg-sys-accent/10 active:scale-95"
				>
					聽聞預言
				</a>
			</div>
		</div>

		<!-- Character Image -->
		<div
			class="group relative order-1 mt-10 w-full max-w-md flex-1 animate-float will-change-transform md:order-2 md:mt-0 md:max-w-xl"
		>
			<img
				src={characterImg}
				alt={character.name}
				class="relative z-20 h-auto w-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
				fetchpriority="high"
			/>
		</div>
	</div>
</section>
