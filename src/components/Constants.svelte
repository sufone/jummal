<script context="module">
	import './Constants/tabStyle.css';
</script>

<script>
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';

	import Surahs from './Constants/Surahs.svelte';
	import Asma from './Constants/Asma.svelte';
	import Maratib from './Constants/Maratib.svelte';
	import Dictionary from './Constants/Dictionary.svelte';
	import { letterInput } from '../stores/letterInput.js';

	let dictionary = false;

	$: if ($letterInput) {
		dictionary = true;
	} else { 
		dictionary = false;
	}
</script>

<div>

	{#if dictionary}
		<Tabs autoWidth="true">
			<Tab label="السور" />
			<Tab label="الأسماء الحسنى" />
			<Tab label="مراتب الوجود" />
			<Tab label="المعجم" />
			<svelte:fragment slot="content">
				<TabContent><Surahs /></TabContent>
				<TabContent><Asma /></TabContent>
				<TabContent><Maratib /></TabContent>
				<TabContent><Dictionary /></TabContent>
			</svelte:fragment>
		</Tabs>
	{:else}
		<Tabs autoWidth="true">
			<Tab label="السور" />
			<Tab label="الأسماء الحسنى" />
			<Tab label="مراتب الوجود" />
			<Tab disabled="true" label="المعجم" />
			<svelte:fragment slot="content">
				<TabContent><Surahs /></TabContent>
				<TabContent><Asma /></TabContent>
				<TabContent><Maratib /></TabContent>
				<TabContent><Dictionary /></TabContent>
			</svelte:fragment>
		</Tabs>
	{/if}
</div>

<style>
	div {
		background-color: rgb(255, 246, 246);
		border-radius: 8px;
	}
</style>
