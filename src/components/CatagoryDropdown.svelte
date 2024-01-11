<script>
	let selected;
	let category = ['popular', 'now_playing', 'top_rated', 'upcoming'];
	function handleClick() {
		window.location.href = `/movies-category/${selected}`;
	}
</script>

<label for="catagory" class="block mb-2 text-sm font-medium">What are you looking for?</label>
<select
	id="catagory"
	class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	bind:value={selected}
>
	<option disabled>Select a category</option>
	{#each category as value}
		<option id={value} on:click={handleClick} {value}>
			{value}
		</option>
	{/each}
</select>
