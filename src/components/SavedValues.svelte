<script>
	import { saved } from '../stores/saved.js';
	console.log($saved[0]);

    let savedList = []

    function removeItem(index) {
        savedList = [...$saved.splice(index, 1)]
    }
</script>

<h2>قائمة المحفوظات</h2>
{#each $saved as savedItem, index (savedItem.name)}
	<div>
		<span>{savedItem.name}: </span>
		<span>{savedItem.value}: </span>
        <span>{savedItem.system}</span>
        <button on:click={() => saved.update(n => {n.splice(index, 1); return n})} >احذف</button>
	</div>
{/each}

<style>
</style>
