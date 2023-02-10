<script>
	let selected;
	let category = ['popular', 'now_playing', 'top_rated', 'upcoming'];
	function handleClick() {
		window.location.href = `/movies-category/${selected}`;
	}
</script>

<label>
	<select bind:value={selected}>
		<option disabled>Select a category</option>
		{#each category as value}
			<option id={value} on:click={handleClick} {value}>
				{value}
			</option>
		{/each}
	</select>
</label>
