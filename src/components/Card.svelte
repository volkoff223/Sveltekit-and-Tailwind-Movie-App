<script>
	export let movie;
</script>

<a href={'/movie/' + movie.id} class="group">
	<div
		class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-11"
	>
		<img
			src="http://image.tmdb.org/t/p/w500{movie.poster_path}"
			alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
			class="h-full w-full object-cover object-center group-hover:opacity-75"
		/>
	</div>
	<p class="mt-1 text-lg font-medium text-gray-900">{movie.title}</p>
	<h3 class="mt-4 text-sm text-gray-700">{movie.vote_average}</h3>
</a>
