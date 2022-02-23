<script context="module">
	import './Constants/tabStyle.css';
</script>

<script>
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';
	import Surahs from './Constants/Surahs.svelte';
	import Asma from './Constants/Asma.svelte';
	import Maratib from './Constants/Maratib.svelte';
</script>

<Tabs>
	<Tab label="السور" />
	<Tab label="الأسماء الحسناء" />
	<Tab label="مراتب الوجود" />
	<svelte:fragment slot="content">
		<TabContent><Surahs /></TabContent>
		<TabContent><Asma /></TabContent>
		<TabContent><Maratib /></TabContent>
	</svelte:fragment>
</Tabs>

<style>
    #content {
        
		max-height: 400px;
		overflow:auto;
    }
</style>