<script context="module">
	import './Constants/tabStyle.css';
</script>

<script>
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';

	import Surahs from './Constants/Surahs.svelte';
	import AyahSearch from './Constants/AyahSearch.svelte';
	import Ayat from './Constants/Ayat.svelte';
	import Asma from './Constants/Asma.svelte';
	import Maratib from './Constants/Maratib.svelte';
	import Dictionary from './Constants/Dictionary.svelte';
	import { letterInput } from '../stores/letterInput.js';
</script>

<div>
	<Tabs autoWidth="true">
		<Tab label="السور" />
		<Tab label="الآيات" />
		<Tab label="بحث الآيات" />
		<Tab label="الأسماء الحسنى" />
		<Tab label="مراتب الوجود" />
		<Tab label="المعجم" />

		<svelte:fragment slot="content">
			<TabContent><Surahs /></TabContent>
			<TabContent><Ayat /></TabContent>
			<TabContent><AyahSearch /></TabContent>
			<TabContent><Asma /></TabContent>
			<TabContent><Maratib /></TabContent>
				<TabContent><Dictionary /></TabContent>
		</svelte:fragment>
	</Tabs>
</div>

<style>
	div {
		background-color: rgb(255, 255, 255);
		border-radius: 8px;
	}
	@media (prefers-color-scheme: dark) {
		div {
			background-color: rgb(28, 29, 28);
		}
	}
</style>
