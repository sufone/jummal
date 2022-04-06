<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalTrueValue, totalSmallValue } from '../../stores/totalTrueValue.js';
	import {
		totalMaghribiSmallValue,
		totalMaghribiTrueValue
	} from '../../stores/totalMaghribiSmallValue.js';

	import { historyStore } from '../../stores/historyStore.js';
	const history = historyStore.z.history; // needed for the store thing

</script>

<div>
	<h1>تاريخ الحسابات</h1>

	<table>
		<thead>
			<tr>
				<th>الكلمة</th>
				<th>نفسي</th>
				<th>مشرقي صغير</th>
				<th>مشرقي كبير</th>
				<th>مغربي صغير</th>
				<th>مغربي كبير</th>
			</tr>
		</thead>
		{#each $history as item, i}
			<tr>
				<td>{item.text}</td>
				{#if parseInt(item.nafasiReal) == parseInt($totalNafasi[0]) || parseInt(item.nafasiReal) == parseInt($totalSmallValue[0]) || parseInt(item.nafasiReal) == parseInt($totalTrueValue[0]) || parseInt(item.nafasiReal) == parseInt($totalMaghribiSmallValue[0]) || parseInt(item.nafasiReal) == parseInt($totalMaghribiTrueValue[0])}
					<td class="highlight">{item.nafasiDisplay}</td>
				{:else}
					<td>{item.nafasiDisplay}</td>
				{/if}
				{#if parseInt(item.mashriqiSmallReal) == parseInt($totalNafasi[0]) || parseInt(item.mashriqiSmallReal) == parseInt($totalSmallValue[0]) || parseInt(item.mashriqiSmallReal) == parseInt($totalTrueValue[0]) || parseInt(item.mashriqiSmallReal) == parseInt($totalMaghribiSmallValue[0]) || parseInt(item.mashriqiSmallReal) == parseInt($totalMaghribiTrueValue[0])}
					<td class="highlight">{item.mashriqiSmallDisplay}</td>
				{:else}
					<td>{item.mashriqiSmallDisplay}</td>
				{/if}
				{#if parseInt(item.mashriqiTrueReal) == parseInt($totalNafasi[0]) || parseInt(item.mashriqiTrueReal) == parseInt($totalSmallValue[0]) || parseInt(item.mashriqiTrueReal) == parseInt($totalTrueValue[0]) || parseInt(item.mashriqiTrueReal) == parseInt($totalMaghribiSmallValue[0]) || parseInt(item.mashriqiTrueReal) == parseInt($totalMaghribiTrueValue[0])}
					<td class="highlight">{item.mashriqiTrueDisplay}</td>
				{:else}
					<td>{item.mashriqiTrueDisplay}</td>
				{/if}
				{#if parseInt(item.maghribiSmallReal) == parseInt($totalNafasi[0]) || parseInt(item.maghribiSmallReal) == parseInt($totalSmallValue[0]) || parseInt(item.maghribiSmallReal) == parseInt($totalTrueValue[0]) || parseInt(item.maghribiSmallReal) == parseInt($totalMaghribiSmallValue[0]) || parseInt(item.maghribiSmallReal) == parseInt($totalMaghribiTrueValue[0])}
					<td class="highlight">{item.maghribiSmallDisplay}</td>
				{:else}
					<td>{item.maghribiSmallDisplay}</td>
				{/if}
				{#if parseInt(item.maghribiTrueReal) == parseInt($totalNafasi[0]) || parseInt(item.maghribiTrueReal) == parseInt($totalSmallValue[0]) || parseInt(item.maghribiTrueReal) == parseInt($totalTrueValue[0]) || parseInt(item.maghribiTrueReal) == parseInt($totalMaghribiSmallValue[0]) || parseInt(item.maghribiTrueReal) == parseInt($totalMaghribiTrueValue[0])}
					<td class="highlight">{item.maghribiTrueDisplay}</td>
				{:else}
					<td>{item.maghribiTrueDisplay}</td>
				{/if}
			</tr>
		{/each}
	</table>
</div>

<style>
	div {
		max-height: 600px;
		overflow: auto;
	}
	td,
	th {
		text-align: right;
		padding: 2px;
		border: 1px solid #999;
	}
	table {
		border-collapse: collapse;
	}
	a {
		text-decoration: none;
		padding: 3px;
		border-radius: 100px;
		color: black;
	}
	th {
		background: rgb(240, 255, 249);
		position: sticky;
		top: 0;
		box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
		padding-bottom: 7px;
	}
	td.highlight {
		font-weight: bold;
		background-color: rgb(181, 255, 224);
	}
	@media (max-width: 600px) {
		div {
			margin-bottom: 120px;
		}
	}
	@media (prefers-color-scheme: dark) {
		td.highlight {
			background-color: rgb(50, 95, 77);
			color: white;
		}
		th {
			background: rgb(31, 46, 40);
		}
		td,
		th {
			border: 1px solid rgb(70, 70, 70);
		}
		a {
			color: white;
		}
	}
</style>
