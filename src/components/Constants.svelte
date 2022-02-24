<script context="module">
	import './Constants/tabStyle.css';
</script>

<script>
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';
	import Surahs from './Constants/Surahs.svelte';
	import Asma from './Constants/Asma.svelte';
	import Maratib from './Constants/Maratib.svelte';
</script>

<div>
	<Tabs>
		<Tab label="السور" />
		<Tab label="الأسماء الحسنى" />
		<Tab label="مراتب الوجود" />
		<svelte:fragment slot="content">
			<TabContent><Surahs /></TabContent>
			<TabContent><Asma /></TabContent>
			<TabContent><Maratib /></TabContent>
		</svelte:fragment>
	</Tabs>
</div>

<style>
	div {
		background-color: rgb(255, 246, 246);
		border-radius: 8px;
	}
</style>
