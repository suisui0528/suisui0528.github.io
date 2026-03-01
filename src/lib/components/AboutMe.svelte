<script lang="ts">
	import { character, content, socialLinks } from '$lib/data';
	import { reveal } from '$lib/reveal';
	import artistImg from '$lib/assets/artist.webp';
	import l2dArtistImg from '$lib/assets/l2d-artist.webp';

	const iconModules: Record<string, { default: string }> = import.meta.glob('$lib/assets/*.svg', {
		eager: true,
		query: '?url'
	});

	function getIconUrl(iconName: string): string {
		const path = `/src/lib/assets/${iconName}.svg`;
		return iconModules[path]?.default || '';
	}

	const artistImageMap: Record<string, string> = {
		artist: artistImg,
		'l2d-artist': l2dArtistImg
	};

	const stats = [
		{ label: '性別', value: character.gender },
		{ label: '年齡', value: `${character.age} 歲` },
		{ label: '生日', value: character.birthday },
		{ label: '身高', value: character.height },
		{ label: '體重', value: character.weight },
		{ label: '粉絲名', value: character.fanName }
	];

	const artists = [
		{ role: '繪師', ...character.artist },
		{ role: 'Live2D', ...character.l2dArtist }
	];
</script>

<section
	id="about"
	class="relative flex min-h-screen w-full snap-start items-center justify-center bg-sys-base py-10"
>
	<!-- Decorative background elements -->
	<div
		class="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-sys-accent/30 to-transparent"
	></div>
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-sys-surface)_0%,transparent_70%)] opacity-40 select-none"
	></div>

	<div class="relative z-10 container mx-auto max-w-4xl px-6">
		<div class="mb-16 text-center" use:reveal>
			<h2 class="mb-4 text-3xl font-black tracking-widest text-sys-text drop-shadow-sm md:text-5xl">
				{content.about.title}
			</h2>
		</div>

		<!-- Character Stats Grid -->
		<div class="mb-10 grid grid-cols-3 gap-3 md:grid-cols-6" use:reveal={{ delay: 100 }}>
			{#each stats as stat (stat.label)}
				<div
					class="rounded-xl border border-sys-surface bg-sys-surface/60 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-sys-accent/30 hover:shadow-md"
				>
					<div class="text-[11px] font-bold tracking-widest text-sys-text/45 uppercase">
						{stat.label}
					</div>
					<div class="mt-1 text-base font-black text-sys-text md:text-lg">{stat.value}</div>
				</div>
			{/each}
		</div>

		<!-- Personality & Hobbies Tags -->
		<div class="mb-12 flex flex-col gap-6 sm:flex-row sm:gap-10" use:reveal={{ delay: 200 }}>
			<div>
				<h3 class="mb-3 text-xs font-bold tracking-widest text-sys-text/50 uppercase">性格</h3>
				<div class="flex flex-wrap gap-2">
					{#each character.personalities as p}
						<span
							class="rounded-full border border-sys-accent/20 bg-sys-accent/10 px-4 py-1.5 text-sm font-bold text-sys-accent"
						>
							{p}
						</span>
					{/each}
				</div>
			</div>
			<div>
				<h3 class="mb-3 text-xs font-bold tracking-widest text-sys-text/50 uppercase">興趣</h3>
				<div class="flex flex-wrap gap-2">
					{#each character.hobbies as h}
						<span
							class="rounded-full border border-sys-text/10 bg-sys-text/5 px-4 py-1.5 text-sm font-bold text-sys-text/70"
						>
							{h}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- Artist Credits -->
		<div class="mt-14" use:reveal={{ delay: 400 }}>
			<h3
				class="mb-6 text-center text-xs font-bold tracking-widest text-sys-text/40 uppercase"
			>
				賦形之手
			</h3>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each artists as artist (artist.role)}
					<div
						class="flex items-center gap-5 rounded-2xl border border-sys-surface bg-sys-surface/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-sys-accent/30 hover:shadow-lg"
					>
						{#if artist.image}
							<img
								src={artistImageMap[artist.image]}
								alt={artist.name}
								class="h-16 w-16 shrink-0 rounded-full border-2 border-sys-accent/20 object-cover"
							/>
						{/if}
						<div class="min-w-0">
							<div class="text-[11px] font-bold tracking-widest text-sys-text/45 uppercase">
								{artist.role}
							</div>
							{#if artist.url}
								<a
									href={artist.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-lg font-black text-sys-text transition-colors hover:text-sys-accent"
								>
									{artist.name}
								</a>
							{:else}
								<span class="text-lg font-black text-sys-text">{artist.name}</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Social Links -->
		<div class="mt-14 flex flex-col items-center gap-5" use:reveal={{ delay: 500 }}>
			<h3 class="text-xs font-bold tracking-widest text-sys-text/40 uppercase">交流管道</h3>
			<div class="flex flex-wrap items-center justify-center gap-4">
				{#each socialLinks as link (link.name)}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 rounded-full border border-sys-surface bg-sys-surface/60 px-5 py-2.5 text-sm font-bold text-sys-text/70 backdrop-blur-md transition-all duration-200 hover:border-sys-accent/30 hover:text-sys-accent hover:shadow-md"
						aria-label={link.name}
					>
						<img
							src={getIconUrl(link.icon)}
							alt=""
							class="h-4 w-4 object-contain"
							aria-hidden="true"
						/>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
