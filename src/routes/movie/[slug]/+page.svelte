<script>
	import BgImage from '../../../components/BGImage.svelte';

	export let data;
	let movieDetails = data.props.movieDetails;
</script>

<div class="container w-full">
	<div class=" -z-50 w-4/5 mx-auto">
		<BgImage src={`https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`} />
		<div class="text-6xl font-bold text-center">{movieDetails.title}</div>
		<div class="text-3xl font-bold text-center">"{movieDetails.tagline}"</div>
		<div class="text-lg">{movieDetails.overview}</div>
		<div class="text-md">{movieDetails.vote_average}</div>
	</div>
</div>
