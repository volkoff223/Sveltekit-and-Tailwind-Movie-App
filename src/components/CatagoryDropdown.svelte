<script>
	let selected = '';
	let category = ['popular', 'now_playing', 'top_rated', 'upcoming'];
	function handleClick() {
		window.location.href = `/movies-category/${selected}`;
	}
</script>

<label
	>Select an category:
	<select bind:value={selected}>
		{#each category as value}
			<option on:click={handleClick} {value}>
				{value}
			</option>
		{/each}
	</select>
</label>
