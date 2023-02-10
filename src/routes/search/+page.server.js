import { MOVIE_DB } from '$env/static/private';
/** @type {import('./$types').Actions} */
/** @type {import('./$types').PageServerLoad} */

export const actions = {
	default: async ({ request, fetch }) => {
		const movieTitle = await request.formData();
		const slug = movieTitle.get('search');
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB}&language=en&query=${slug}&page=1`
		);
		const data = await res.json();
		return data;
	}
};
