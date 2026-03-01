<script lang="ts">
	import { content } from '$lib/data';
</script>

<footer class="relative w-full bg-sys-surface py-12">
	<div
		class="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-sys-accent/20 to-transparent"
	></div>

	<div class="container mx-auto flex flex-col items-center justify-center gap-6 px-6">
		<!-- Copyright & Author -->
		<div
			class="flex flex-col items-center gap-2 text-xs tracking-wider text-sys-text/50 md:flex-row md:gap-3 md:text-sm"
		>
			<span class="font-medium">
				© {new Date().getFullYear()} SuiSui. All rights reserved.
			</span>
			<span class="hidden text-sys-text/20 md:inline">|</span>
			<span class="font-medium">
				網頁製作：
				<a
					href={content.footer.authorUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-sys-text/70 underline decoration-sys-accent/30 underline-offset-4 transition-colors duration-300 hover:text-sys-accent hover:decoration-sys-accent"
				>
					{content.footer.authorName}
				</a>
			</span>
		</div>
	</div>
</footer>
