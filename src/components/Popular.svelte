<script>
	export let movies;
	import Card from './Card.svelte';
	const category = movies.props.category;
</script>

<div>
	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div
			class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{#each category as movie}
				<Card {movie} />
			{/each}
		</div>
	</div>
</div>
