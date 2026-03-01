<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import icon from '$lib/assets/icon.webp';
	import { character } from '$lib/data';
	import '@fontsource/wdxl-lubrifont-tc/chinese-traditional-400';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="author" content="水水" />
	<meta name="description" content={character.about} />
	<meta property="og:title" content="水水 | VTuber" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={icon} />
	<meta property="og:image:type" content="image/webp" />
	<meta
		property="og:image:alt"
		content="A stylized icon on a black background featuring a light blue bubble containing the Chinese character '水'. The character's strokes are colored blue, white, and red. The bubble is flanked by two teal-colored teardrop shapes."
	/>
	<meta property="og:url" content="https://suisui0528.github.io/" />
	<meta property="og:description" content={character.about} />
	<meta property="og:locale" content="zh_TW" />
	<meta property="og:site_name" content="水水 | VTuber" />
	<title>水水 | VTuber</title>
	<link rel="icon" href={favicon} type="image/x-icon" />
	<link rel="canonical" href="https://suisui0528.github.io/" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "WebSite",
			"name": "水水 | VTuber",
			"url": "https://suisui0528.github.io/"
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "Person",
			"name": "水水",
			"url": "https://suisui0528.github.io/",
			"sameAs": [
				"https://www.twitch.tv/suisui_0528",
				"https://x.com/SuiSui_0528",
				"https://www.youtube.com/channel/UC2DtaRTn3egC3h67zrBemCA",
				"https://www.instagram.com/suisui_0528/"
			],
			"jobTitle": "VTuber"
		}
	</script>
</svelte:head>

{@render children()}
