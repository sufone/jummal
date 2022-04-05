<script context="module">
	import './Constants/tabStyle.css';
</script>

<script>
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';
	import History from './Constants/History.svelte';
	import CalculatorView from './Constants/CalculatorView.svelte';
	import TableValues from './Constants/TableValues.svelte';
	import Surahs from './Constants/Surahs.svelte';
	import AyahSearch from './Constants/AyahSearch.svelte';
	import Ayat from './Constants/Ayat.svelte';
	import Asma from './Constants/Asma.svelte';
	import Maratib from './Constants/Maratib.svelte';
	import Dictionary from './Constants/Dictionary.svelte';
	import { letterInput } from '../stores/letterInput.js';

	export let selectedTab;
</script>

<div>
	<Tabs autoWidth="true" selected={selectedTab}>
		<Tab label="التاريخ" />
		<Tab label="الحاسبة" />
		<Tab label="جدول الأعداد" />
		<Tab label="أسماء السور" />
		<Tab label="السور" />
		<Tab label="بحث في القرآن" />
		<Tab label="الأسماء الحسنى" />
		<Tab label="مراتب الوجود" />
		<Tab label="المعجم" />

		<svelte:fragment slot="content">
			<TabContent><History /></TabContent>
			<TabContent><CalculatorView /></TabContent>
			<TabContent><TableValues /></TabContent>
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
