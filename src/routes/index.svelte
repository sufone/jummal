<script>
    	import SavedValues from '../components/SavedValues.svelte';

    	import { onMount } from 'svelte';

        onMount(() => {
		mounted = true;
	});
	let mounted = false;
    import Calculator from '../components/Calculator.svelte'

</script>

<index>

    <h1>حساب الجمل</h1>
<Calculator />


{#if mounted}
<SavedValues />

{/if}

</index>


<style>
index {
    text-align: center;
}
</style>