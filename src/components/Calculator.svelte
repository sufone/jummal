<script>
	import { saved } from '../stores/saved.js';

	import { totalSmallValue } from '../stores/totalSmallValue.js';
	import { totalTrueValue } from '../stores/totalTrueValue.js';
	import { totalMaghribiSmallValue } from '../stores/totalMaghribiSmallValue.js';
	import { totalMaghribiTrueValue } from '../stores/totalMaghribiTrueValue.js';
	import { totalNafasi } from '../stores/totalNafasi.js';

	import Constants from './Constants.svelte';

	// Input cleaning
	let letterInput = '';
	$: letterInputCleaned = letterInput.replace(/[\sًٌٍَُِّْ]+/g, '');

	// Default values, modified when calculating

	// Complete list of values, easy to extend inshaAllah
	const letters = {
		ا: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ى: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		أ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		إ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		آ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ء: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ئ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ؤ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, nafasi: 1 },
		ب: { trueValue: 2, smallValue: 2, maghribiTrue: 2, maghribiSmall: 2, nafasi: 26 },
		ج: { trueValue: 3, smallValue: 3, maghribiTrue: 3, maghribiSmall: 3, nafasi: 9 },
		د: { trueValue: 4, smallValue: 4, maghribiTrue: 4, maghribiSmall: 4, nafasi: 17 },
		ه: { trueValue: 5, smallValue: 5, maghribiTrue: 5, maghribiSmall: 5, nafasi: 2 },
		ة: { trueValue: 5, smallValue: 5, maghribiTrue: 5, maghribiSmall: 5, nafasi: 2 },
		و: { trueValue: 6, smallValue: 6, maghribiTrue: 6, maghribiSmall: 6, nafasi: 28 },
		ز: { trueValue: 7, smallValue: 7, maghribiTrue: 7, maghribiSmall: 7, nafasi: 19 },
		ح: { trueValue: 8, smallValue: 8, maghribiTrue: 8, maghribiSmall: 8, nafasi: 4 },
		ط: { trueValue: 9, smallValue: 9, maghribiTrue: 9, maghribiSmall: 9, nafasi: 16 },
		ي: { trueValue: 10, smallValue: 1, maghribiTrue: 10, maghribiSmall: 1, nafasi: 11 },
		ك: { trueValue: 20, smallValue: 2, maghribiTrue: 20, maghribiSmall: 2, nafasi: 8 },
		ل: { trueValue: 30, smallValue: 3, maghribiTrue: 30, maghribiSmall: 3, nafasi: 13 },
		م: { trueValue: 40, smallValue: 4, maghribiTrue: 40, maghribiSmall: 4, nafasi: 27 },
		ن: { trueValue: 50, smallValue: 5, maghribiTrue: 50, maghribiSmall: 5, nafasi: 14 },
		س: { trueValue: 60, smallValue: 6, maghribiTrue: 300, maghribiSmall: 3, nafasi: 20 },
		ع: { trueValue: 70, smallValue: 7, maghribiTrue: 70, maghribiSmall: 7, nafasi: 3 },
		ف: { trueValue: 80, smallValue: 8, maghribiTrue: 80, maghribiSmall: 8, nafasi: 25 },
		ص: { trueValue: 90, smallValue: 9, maghribiTrue: 60, maghribiSmall: 6, nafasi: 21 },
		ق: { trueValue: 100, smallValue: 1, maghribiTrue: 100, maghribiSmall: 1, nafasi: 7 },
		ر: { trueValue: 200, smallValue: 2, maghribiTrue: 200, maghribiSmall: 2, nafasi: 15 },
		ش: { trueValue: 300, smallValue: 3, maghribiTrue: 1000, maghribiSmall: 1, nafasi: 10 },
		ت: { trueValue: 400, smallValue: 4, maghribiTrue: 400, maghribiSmall: 4, nafasi: 18 },
		ث: { trueValue: 500, smallValue: 5, maghribiTrue: 500, maghribiSmall: 5, nafasi: 23 },
		خ: { trueValue: 600, smallValue: 6, maghribiTrue: 600, maghribiSmall: 6, nafasi: 6 },
		ذ: { trueValue: 700, smallValue: 7, maghribiTrue: 700, maghribiSmall: 7, nafasi: 24 },
		ض: { trueValue: 800, smallValue: 8, maghribiTrue: 90, maghribiSmall: 9, nafasi: 12 },
		ظ: { trueValue: 900, smallValue: 9, maghribiTrue: 800, maghribiSmall: 8, nafasi: 22 },
		غ: { trueValue: 1000, smallValue: 1, maghribiTrue: 900, maghribiSmall: 9, nafasi: 5 }
	};

	// Universal function to handle calculating from any system
	function calc(system) {
		let value = 0;
		for (let i = 0; i < letterInputCleaned.length; i += 1) {
			console.log(letterInputCleaned);
			value += letters[letterInputCleaned.charAt(i)][system];
		}
		let valueString = JSON.stringify(value);

		return [ //need both since for URL
			valueString,
			valueString
				.replace(/0/g, '۰')
				.replace(/1/g, '۱')
				.replace(/2/g, '۲')
				.replace(/3/g, '۳')
				.replace(/4/g, '٤')
				.replace(/5/g, '٥')
				.replace(/6/g, '٦')
				.replace(/7/g, '۷')
				.replace(/8/g, '۸')
				.replace(/9/g, '۹')
		];
	}

	// Function called on input
	function calcHandler() {
		totalTrueValue.set(calc('trueValue'));
		totalSmallValue.set(calc('smallValue'));

		totalMaghribiSmallValue.set(calc('maghribiSmall'));
		totalMaghribiTrueValue.set(calc('maghribiTrue'));

		totalNafasi.set(calc('nafasi'));
	}

	function saveItem(newItem, systemUsed) {
		saved.update((items) => [...items, { name: letterInput, value: newItem, system: systemUsed }]); // deliberately using the uncleaned value
	}
</script>

<div id="main">
	<div id="side-constants">
		<Constants />
	</div>
	<div id="side-results">
		<div id="results">
			<table>
				<thead>
					<th />
					<th colspan="2">الحساب</th>
				</thead>
				<tbody>
					<tr>
						<td><strong>النفسي</strong></td>
						<td colspan="2" on:click={() => saveItem($totalNafasi[1], 'النفسي')}>{$totalNafasi[1]} </td>
					</tr>
					<tr>
						<th />
						<th>الصغير</th>
						<th>الكبير</th>
					</tr>
					<tr>
						<td><strong>المشرقي</strong></td>
						<td on:click={() => saveItem($totalSmallValue[1], 'الصغير المشرقي')}
							>{$totalSmallValue[1]}
						</td>
						<td on:click={() => saveItem($totalTrueValue[1], 'الكبير المشرقي')}>{$totalTrueValue[1]} </td>
					</tr>
					<tr>
						<td><strong>المغربي</strong></td>
						<td on:click={() => saveItem($totalMaghribiSmallValue[1], 'الصغير المغربي')}
							>{$totalMaghribiSmallValue[1]}
						</td>
						<td on:click={() => saveItem($totalMaghribiTrueValue[1], 'الكبير المغربي')}
							>{$totalMaghribiTrueValue[1]}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<div>
	<textarea
		placeholder="حساب الجمل"
		cols="120"
		bind:value={letterInput}
		on:input={() => calcHandler()}
	/>
</div>

<div class="details-below-textbox">
	<button
		on:click={() => {
			letterInput = '';
			letterInputCleaned = '';
			calcHandler();
		}}>تفريغ</button
	>
</div>

<style>
	textArea {
		font-size: 2rem;
		text-align: center;
		max-width: 800px;
		background-color: aliceblue;
		border-radius: 4px;
	}
	button {
		text-align: center;
	}
	div#side-results {
		margin-right: 100px;
		background-color: #f1fffd;
		padding: 10px;
		border-radius: 8px;
	}
	div#results {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 10px 0;
		gap: 20px;
	}
	button {
		background-color: #fdd5db;
		border-radius: 8px;
		border: 1px solid gray;
		font-size: 0.75rem;
		padding: 0 2px;
	}
	button:hover,
	button:focus {
		background-color: #fcb1bd;
	}
	div.details-below-textbox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}

	thead > th {
		font-weight: bold;
		font-size: 1.25rem;
	}
	thead,
	tbody {
		font-size: 1.25rem;
	}
	td,
	th {
		border: 1px solid #999;
		padding: 0.5rem;
	}
	table {
		border-collapse: collapse;
	}
	div#main {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	div#side-constants {
		min-width: 50%;
	}
	@media (max-width: 360px) {
		div#main {
			display: flex;
			flex-direction: column;
		}
		div.details-below-textbox {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0px;
		}
	}
</style>
