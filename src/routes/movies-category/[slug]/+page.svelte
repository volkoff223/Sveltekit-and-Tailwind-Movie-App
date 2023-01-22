<script>
	import CatagoryDropdown from '../../../components/CatagoryDropdown.svelte';
	import Popular from '../../../components/Popular.svelte';
	export let data;
</script>

<div class="text-6xl font-bold text-center pt-9">Movie App</div>

<div class="text-2xl font-medium text-center">Check out some movies.</div>
<CatagoryDropdown />

<Popular movies={data} />
