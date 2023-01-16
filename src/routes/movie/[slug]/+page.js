/** @type {import('./$types').PageLoad} */
const key = '13358bece0fed45e9bea84641025ff00';
export async function load({ fetch, params }) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${params.slug}?api_key=${key}`);
	const data = await res.json();

	if (res.ok) {
		return {
			props: { movieDetails: data }
		};
	}
}
