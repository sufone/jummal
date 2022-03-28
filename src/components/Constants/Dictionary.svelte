<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalTrueValue, totalSmallValue } from '../../stores/totalTrueValue.js';
	import {
		totalMaghribiSmallValue,
		totalMaghribiTrueValue
	} from '../../stores/totalMaghribiSmallValue.js';

	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	import words from '../Functions/words';

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
	function calc(system, input) {
		let value = 0;
		for (let i = 0; i < input.length; i += 1) {
			value += letters[input.charAt(i)][system];
		}
		let valueString = JSON.stringify(value);

		return valueString;
	}

	let activateDictionary = false;
</script>

<div>
	<h4>كلمات المعجم</h4>

	{#if activateDictionary}
		<table>
			<tr>
				<th>الفعل</th>
				<th>نفسي</th>
				<th>مشرقي صغير</th>
				<th>مشرقي كبير</th>
				<th>مغربي صغير</th>
				<th>مغربي كبير</th>
			</tr>
			{#each words as word}
				<!--the monster below is a combo of all below filters. the goal: any match found-->
				{#if parseInt(word.jummalNafasi) == parseInt($totalNafasi[0]) || parseInt(word.jummalNafasi) == parseInt($totalSmallValue[0]) || parseInt(word.jummalNafasi) == parseInt($totalTrueValue[0]) || parseInt(word.jummalNafasi) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalNafasi) == parseInt($totalMaghribiTrueValue[0]) || parseInt(word.jummalSmall) == parseInt($totalNafasi[0]) || parseInt(word.jummalSmall) == parseInt($totalSmallValue[0]) || parseInt(word.jummalSmall) == parseInt($totalTrueValue[0]) || parseInt(word.jummalSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalSmall) == parseInt($totalMaghribiTrueValue[0]) || parseInt(word.jummalTrue) == parseInt($totalNafasi[0]) || parseInt(word.jummalTrue) == parseInt($totalSmallValue[0]) || parseInt(word.jummalTrue) == parseInt($totalTrueValue[0]) || parseInt(word.jummalTrue) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalTrue) == parseInt($totalMaghribiTrueValue[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalNafasi[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalSmallValue[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalTrueValue[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalMaghribiTrueValue[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalNafasi[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalSmallValue[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalTrueValue[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalMaghribiTrueValue[0])}
					<tr>
						<td>{word.verb}</td>

						{#if parseInt(word.jummalNafasi) == parseInt($totalNafasi[0]) || parseInt(word.jummalNafasi) == parseInt($totalSmallValue[0]) || parseInt(word.jummalNafasi) == parseInt($totalTrueValue[0]) || parseInt(word.jummalNafasi) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalNafasi) == parseInt($totalMaghribiTrueValue[0])}
							<td class="highlight">{convertToArabicNumbers(word.jummalNafasi)}</td>
						{:else}
							<td>{convertToArabicNumbers(word.jummalNafasi)}</td>
						{/if}

						{#if parseInt(word.jummalSmall) == parseInt($totalNafasi[0]) || parseInt(word.jummalSmall) == parseInt($totalSmallValue[0]) || parseInt(word.jummalSmall) == parseInt($totalTrueValue[0]) || parseInt(word.jummalSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalSmall) == parseInt($totalMaghribiTrueValue[0])}
							<td class="highlight">{convertToArabicNumbers(word.jummalSmall)}</td>
						{:else}
							<td>{convertToArabicNumbers(word.jummalSmall)}</td>
						{/if}

						{#if parseInt(word.jummalTrue) == parseInt($totalNafasi[0]) || parseInt(word.jummalTrue) == parseInt($totalSmallValue[0]) || parseInt(word.jummalTrue) == parseInt($totalTrueValue[0]) || parseInt(word.jummalTrue) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalTrue) == parseInt($totalMaghribiTrueValue[0])}
							<td class="highlight">{convertToArabicNumbers(word.jummalTrue)}</td>
						{:else}
							<td>{convertToArabicNumbers(word.jummalTrue)}</td>
						{/if}

						{#if parseInt(word.jummalMaghribiSmall) == parseInt($totalNafasi[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalSmallValue[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalTrueValue[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalMaghribiSmall) == parseInt($totalMaghribiTrueValue[0])}
							<td class="highlight">{convertToArabicNumbers(word.jummalMaghribiSmall)}</td>
						{:else}
							<td>{convertToArabicNumbers(word.jummalMaghribiSmall)}</td>
						{/if}

						{#if parseInt(word.jummalMaghribiTrue) == parseInt($totalNafasi[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalSmallValue[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalTrueValue[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalMaghribiSmallValue[0]) || parseInt(word.jummalMaghribiTrue) == parseInt($totalMaghribiTrueValue[0])}
							<td class="highlight">{convertToArabicNumbers(word.jummalMaghribiTrue)}</td>
						{:else}
							<td>{convertToArabicNumbers(word.jummalMaghribiTrue)}</td>
						{/if}
					</tr>
				{/if}
			{/each}
		</table>
	{:else}
		<label>
			<input type="checkbox" bind:checked={activateDictionary} />
			أتريدين تفعيل المعجم؟ قد يؤدي إلى بطء في التطبيق، خاصة في الهواتف
		</label>
	{/if}
</div>

<style>
	div {
		min-height: 600px;
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
		background-color: rgb(255, 255, 202);
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
		td, th {
			border: 1px solid rgb(70, 70, 70);
		}
		a {
			color: white;
		}
	}
</style>
