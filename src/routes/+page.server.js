/** @type {import('./$types').PageServerLoad} */
import { MOVIE_DB } from '$env/static/private';
export async function load({ fetch }) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB}`);
	const data = await res.json();

	if (res.ok) {
		return {
			props: { popular: data.results }
		};
	}
	// Need to check for errors
}
