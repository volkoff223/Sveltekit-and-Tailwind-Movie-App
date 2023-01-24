<script>
	let selected;
	let category = ['Select a category', 'popular', 'now_playing', 'top_rated', 'upcoming'];
	function handleClick() {
		window.location.href = `/movies-category/${selected}`;
	}
</script>

<label>
	<select bind:value={selected}>
		{#each category as value}
			<option id={value} on:click={handleClick} {value}>
				{value}
			</option>
		{/each}
	</select>
</label>
