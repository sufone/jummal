<script>
	import { saved } from '../stores/saved.js';
	import { letterInput } from '../stores/letterInput.js';

	import {
		totalTrueValue,
		totalTrueValueCombined,
		totalSmallValue,
		totalSmallValueCombined,
		totalMashriqiDigitsCombined
	} from '../stores/totalTrueValue.js';
	import {
		totalMaghribiSmallValue,
		totalMaghribiSmallValueCombined,
		totalMaghribiTrueValue,
		totalMaghribiTrueValueCombined
	} from '../stores/totalMaghribiSmallValue.js';
	import { totalNafasi, totalNafasiCombined } from '../stores/totalNafasi.js';

	import convertToArabicNumbers from './Functions/convertToArabic.js';
	function saveItem(newItem, systemUsed) {
		saved.update((items) => [...items, { name: $letterInput, value: newItem, system: systemUsed }]); // deliberately using the uncleaned value
	}

	function sumDigitsFromString(string) {
		string = string.split(''); //split into individual characters
		var sum = 0; //have a storage ready
		for (var i = 0; i < string.length; i++) {
			//iterate through
			sum += parseInt(string[i], 10); //convert from string to int
		}
		return convertToArabicNumbers(JSON.stringify(sum)); //return when done
	}
</script>

<table>
	<tbody>
		<tr>
			<td><strong>النفسي</strong></td>
			<td class="results" colspan="2" on:click={() => saveItem($totalNafasi[1], 'النفسي')}
				>{$totalNafasi[1]} <br /> {$totalNafasiCombined}
			</td>
		</tr>
		<tr>
			<th />

			<th>الصغير</th>
			<th>الكبير</th>

			<th>التفصيل</th>
			<th>البسيط</th>
		</tr>
		<tr>
			<td><strong>المشرقي</strong></td>
			<td class="results" on:click={() => saveItem($totalSmallValue[1], 'الصغير المشرقي')}
				>{$totalSmallValue[1]} <br /> {$totalSmallValueCombined[1]}
			</td>
			<td class="results" on:click={() => saveItem($totalTrueValue[1], 'الكبير المشرقي')}
				>{$totalTrueValue[1]} <br /> {$totalTrueValueCombined[1]}
			</td>
			<td class="results"
				>{sumDigitsFromString($totalSmallValue[0] + $totalTrueValue[0])}
				<br />
				{$totalMashriqiDigitsCombined[1]}
			</td>
			<td class="results"
				>{convertToArabicNumbers(
					JSON.stringify(parseInt($totalSmallValue[0]) + parseInt($totalTrueValue[0]))
				)}</td
			>
		</tr>
		<tr>
			<td><strong>المغربي</strong></td>
			<td class="results" on:click={() => saveItem($totalMaghribiSmallValue[1], 'الصغير المغربي')}
				>{$totalMaghribiSmallValue[1]} <br /> {$totalMaghribiSmallValueCombined[1]}
			</td>
			<td class="results" on:click={() => saveItem($totalMaghribiTrueValue[1], 'الكبير المغربي')}
				>{$totalMaghribiTrueValue[1]} <br /> {$totalMaghribiTrueValueCombined[1]}
			</td>
			<td class="results"
				>{sumDigitsFromString($totalMaghribiSmallValue[0] + $totalMaghribiTrueValue[0])}
				<br />
				{$totalMashriqiDigitsCombined[1]}
			</td>
			<td class="results"
				>{convertToArabicNumbers(
					JSON.stringify(
						parseInt($totalMaghribiSmallValue[0]) + parseInt($totalMaghribiTrueValue[0])
					)
				)}</td
			>
		</tr>
	</tbody>
</table>

<style>
	tbody {
		font-size: 1.15rem;
	}
	td.results {
		background-color: rgb(181, 255, 224);
	}
	td,
	th {
		border: 1px solid #999;
		padding: 0.5rem;
	}
	table {
		border-collapse: collapse;
	}
	@media (max-width: 850px) {
		td,
		th {
			font-size: 1rem !important;
			padding: 0.15rem;
		}
	}
	@media (prefers-color-scheme: dark) {
		td.results {
			background-color: rgb(50, 95, 77);
		}
	}
</style>
