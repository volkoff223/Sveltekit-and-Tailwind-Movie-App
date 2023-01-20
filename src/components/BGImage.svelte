<script>
	import { onMount } from 'svelte';
	export let src;

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loaded}
	<img {src} class="mx-auto rounded-[30px] my-5 border-4 border-slate-900" alt="Movie Background" />
{:else if failed}
	<img
		class="mx-auto h-96"
		src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg"
		alt="Not Found"
	/>
{:else if loading}
	<img
		class="mx-auto h-96"
		src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
		alt="Loading..."
	/>
{/if}
