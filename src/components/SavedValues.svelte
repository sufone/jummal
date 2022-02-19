<script>
	import { onMount } from 'svelte';
	import { saved } from '../stores/saved.js';
	import { Datatable } from 'svelte-simple-datatables';

	let rows;
	const settings = {
		sortable: true,
		pagination: false,
		scrollY: false,
		columnFilter: true,
		css: true,
		labels: {
			search: 'بحث', // search input placeholer
			filter: 'Filter', // filter inputs placeholder
			noRows: 'No entries to found',
			info: 'Showing {start} to {end} of {rows} entries',
			previous: 'Previous',
			next: 'Next'
		},
		blocks: {
			searchInput: true,
			paginationButtons: true,
			paginationRowCount: true
		}
	};

	console.log($saved[0]);

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<h2>قائمة المحفوظات</h2>
{#if mounted}
	<div>
		<Datatable {settings} data={$saved} bind:dataRows={rows}>
			<thead>
				<th data-key="name">الكلمة</th>
				<th data-key="value">الحساب</th>
				<th data-key="system">نظام الجمل</th>
			</thead>
			<tbody>
				{#if rows}
					{#each $rows as row, index}
						<tr>
							<td>{row.name}</td>
							<td>{row.value}</td>
							<td>{row.system}</td>
							<!-- <td><button on:click={saved.update((n) => {n.splice(index, 1) ; return n})}>احذف</button></td> -->
						</tr>
					{/each}
				{/if}
			</tbody>
		</Datatable>
	</div>
{/if}

<style>
	td {
		text-align: center;
		padding: 4px 0;
	}
</style>
