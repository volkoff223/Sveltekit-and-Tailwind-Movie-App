<script>
	export let movie;
</script>

<a href={'/movie/' + movie.id} class="group">
	<div
		class="aspect-w-1 aspect-h-1 w-full overflow-hidden aspect-[7/11] border-4 border-slate-900 rounded-[30px]"
	>
		<img
			src="http://image.tmdb.org/t/p/w500{movie.poster_path}"
			alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
			class="h-full w-full object-cover object-center group-hover:opacity-75 "
		/>
	</div>
	<p class="mt-1 text-lg font-medium text-gray-900 text-center">{movie.title}</p>
	<h3 class="mt-4 text-sm text-gray-700 text-center">{movie.vote_average}</h3>
</a>
