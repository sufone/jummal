<script>
	let valueSystem = 'smallValue'; //also available: "trueValue"

	let letterInput = '';
	let totalSmallValue = 0;
	let totalTrueValue = 0;
	let totalMaghribiSmallValue = 0;
	let totalMaghribiTrueValue = 0;
    

	let letterSystem = 'lettersMashriqi';

	const letters = {
		ا: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, },
		أ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, },
		إ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, },
		آ: { trueValue: 1, smallValue: 1, maghribiTrue: 1, maghribiSmall: 1, },
		ب: { trueValue: 2, smallValue: 2, maghribiTrue: 2, maghribiSmall: 2, },
		ج: { trueValue: 3, smallValue: 3, maghribiTrue: 3, maghribiSmall: 3, },
		د: { trueValue: 4, smallValue: 4, maghribiTrue: 4, maghribiSmall: 4, },
		ه: { trueValue: 5, smallValue: 5, maghribiTrue: 5, maghribiSmall: 5, },
		و: { trueValue: 6, smallValue: 6, maghribiTrue: 6, maghribiSmall: 6, },
		ز: { trueValue: 7, smallValue: 7, maghribiTrue: 7, maghribiSmall: 7, },
		ح: { trueValue: 8, smallValue: 8, maghribiTrue: 8, maghribiSmall: 8, },
		ط: { trueValue: 9, smallValue: 9, maghribiTrue: 9, maghribiSmall: 9, },
		ي: { trueValue: 10, smallValue: 1, maghribiTrue: 10, maghribiSmall: 1, },
		ك: { trueValue: 20, smallValue: 2, maghribiTrue: 20, maghribiSmall: 2, },
		ل: { trueValue: 30, smallValue: 3, maghribiTrue: 30, maghribiSmall: 3, },
		م: { trueValue: 40, smallValue: 4, maghribiTrue: 40, maghribiSmall: 4, },
		ن: { trueValue: 50, smallValue: 5, maghribiTrue: 50, maghribiSmall: 5, },
		س: { trueValue: 60, smallValue: 6, maghribiTrue: 300, maghribiSmall: 3, },
		ع: { trueValue: 70, smallValue: 7, maghribiTrue: 70, maghribiSmall: 7, },
		ف: { trueValue: 80, smallValue: 8, maghribiTrue: 80, maghribiSmall: 8, },
		ص: { trueValue: 90, smallValue: 9, maghribiTrue: 60, maghribiSmall: 6, },
		ق: { trueValue: 100, smallValue: 1, maghribiTrue: 100, maghribiSmall: 1, },
		ر: { trueValue: 200, smallValue: 2, maghribiTrue: 200, maghribiSmall: 2, },
		ش: { trueValue: 300, smallValue: 3, maghribiTrue: 1000, maghribiSmall: 1, },
		ت: { trueValue: 400, smallValue: 4, maghribiTrue: 400, maghribiSmall: 4, },
		ث: { trueValue: 500, smallValue: 5, maghribiTrue: 500, maghribiSmall: 5, },
		خ: { trueValue: 600, smallValue: 6, maghribiTrue: 600, maghribiSmall: 6, },
		ذ: { trueValue: 700, smallValue: 7, maghribiTrue: 700, maghribiSmall: 7, },
		ض: { trueValue: 800, smallValue: 8, maghribiTrue: 90, maghribiSmall: 9, },
		ظ: { trueValue: 900, smallValue: 9, maghribiTrue: 800, maghribiSmall: 8, },
		غ: { trueValue: 1000, smallValue: 1, maghribiTrue: 900, maghribiSmall: 9, }
	};

	function calc(system) {
		let value = 0;
		for (let i = 0; i < letterInput.length; i += 1) {
			console.log(letterInput);
			value += letters[letterInput.charAt(i)][system];
		}
		return value;
	}
	function calcHandler() {
		totalTrueValue = calc('trueValue');
		totalSmallValue = calc('smallValue');

        totalMaghribiSmallValue = calc('maghribiSmall');
        totalMaghribiTrueValue = calc('maghribiTrue');
	}
</script>

<textarea bind:value={letterInput} on:input={() => calcHandler()} />

<p>المدخول: {letterInput}</p>
<h2>النظام المشرقي</h2>
<p>الجمل الصغير: {JSON.stringify(totalSmallValue)}</p>
<p>الجمل الكبير: {JSON.stringify(totalTrueValue)}</p>


<h2>النظام المغربي</h2>
<p>الجمل الصغير: {JSON.stringify(totalMaghribiSmallValue)}</p>
<p>الجمل الكبير: {JSON.stringify(totalMaghribiTrueValue)}</p>

<style>
	textArea {
		font-size: 2rem;
		text-align: center;
	}
</style>
