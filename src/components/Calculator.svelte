<script>
	import { letterInput, letterInputCleaned } from '../stores/letterInput.js';

	import { totalTrueValue, totalSmallValue } from '../stores/totalTrueValue.js';
	import {
		totalMaghribiSmallValue,
		totalMaghribiTrueValue
	} from '../stores/totalMaghribiSmallValue.js';
	import { totalNafasi } from '../stores/totalNafasi.js';
	import { historyStore } from '../stores/historyStore.js';

	import Results from './Results.svelte';
	import Constants from './Constants.svelte';
	import convertToArabicNumbers from './Functions/convertToArabic.js';

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
		for (let i = 0; i < $letterInputCleaned.length; i += 1) {
			value += letters[$letterInputCleaned.charAt(i)][system];
		}
		let valueString = JSON.stringify(value);

		return [
			//need both since for URL
			valueString,
			convertToArabicNumbers(valueString)
		];
	}

	// Function called on input
	function calcHandler() {
		totalTrueValue.set(calc('trueValue'));
		totalSmallValue.set(calc('smallValue'));

		totalMaghribiSmallValue.set(calc('maghribiSmall'));
		totalMaghribiTrueValue.set(calc('maghribiTrue'));

		totalNafasi.set(calc('nafasi'));

		if ($letterInputCleaned != '') {
			historyStore.set({
				text: $letterInputCleaned,
				nafasiReal: $totalNafasi[0],
				nafasiDisplay: $totalNafasi[1],
				mashriqiSmallReal: $totalSmallValue[0],
				mashriqiSmallDisplay: $totalSmallValue[1],
				mashriqiTrueReal: $totalTrueValue[0],
				mashriqiTrueDisplay: $totalTrueValue[1],
				maghribiSmallReal: $totalMaghribiSmallValue[0],
				maghribiSmallDisplay: $totalMaghribiSmallValue[1],
				maghribiTrueReal: $totalMaghribiTrueValue[0],
				maghribiTrueDisplay: $totalMaghribiTrueValue[1]
			});
		}
	}
</script>

<div id="main">
	<div id="side-constants">
		<Constants />
	</div>
	<div id="side-results">
		<div id="results">
			<Results />
		</div>

		<div class="text-box-holder">
			<textarea
				placeholder="حساب الجمل"
				cols="80"
				bind:value={$letterInput}
				on:input={() => calcHandler()}
				autofocus
			/>
			<div class="details-below-textbox">
				<button
					on:click={() => {
						$letterInput = '';
						calcHandler();
					}}>تفريغ</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	textArea {
		font-size: 2rem;
		text-align: center;
		max-width: 400px;
		border: solid 1px rgb(180, 216, 202);
		border-radius: 8px;
		background-color: rgb(240, 255, 249);
		box-shadow: rgba(93, 122, 111, 0.15) 0px 5px 15px 0px;
	}
	button {
		text-align: center;
	}
	div#side-results {
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
		background-color: #fffafb;
		border-radius: 8px;
		border: 1px solid gray;
		font-size: 0.75rem;
		padding: 0 2px;
		max-width: 200px;
		margin: 0 auto;
		padding: 0 10px;
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

	div#main {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}
	div#side-constants {
		min-width: 50%;
	}
	@media (max-width: 850px) {
		div#main {
			display: flex;
			flex-direction: column-reverse;
		}
		div.details-below-textbox {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0px;
		}
		textArea {
			font-size: 1.1rem;
			max-width: 350px;
		}
	}
	@media (max-width: 600px) {
		textarea {
			font-size: 1.2rem;
			max-width: 255px;
			border: solid 1px gray;
		}
		div.text-box-holder {
			position: fixed;
			bottom: 10px;
			background-color: rgba(240, 255, 249, 0.965);
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			border-radius: 8px;
			z-index: 10;
		}
	}
	@media (max-width: 400px) {
		textarea {
			font-size: 0.9rem;
			max-width: 250px;
		}
	}
	@media (prefers-color-scheme: dark) {
		textarea {
			background-color: white;
			border: dashed 2px rgb(54, 54, 54);
			color: black;
		}
		button {
			background-color: rgb(31, 46, 40);
		}
		button:hover,
		button:focus {
			background-color: rgb(70, 70, 70);
		}
		div.text-box-holder {
			background-color: rgb(31, 46, 40);
		}
	}
</style>
