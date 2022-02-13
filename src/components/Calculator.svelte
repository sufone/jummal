<script>
	let valueSystem = 'smallValue'; //also available: "trueValue"

	let letterInput = '';
	let totalSmallValue = 0;
	let totalTrueValue = 0;
	let totalMaghribiSmallValue = 0;
	let totalMaghribiTrueValue = 0;
    

	let letterSystem = 'lettersMashriqi';

	const letters = {
		ا: { trueValue: 1, smallValue: 1 },
		أ: { trueValue: 1, smallValue: 1 },
        إ: { trueValue: 1, smallValue: 1 },
        آ: { trueValue: 1, smallValue: 1 },
        ب: { trueValue: 2, smallValue: 2 },
        ج: { trueValue: 3, smallValue: 3 },
        د: { trueValue: 4, smallValue: 4 },
        ه: { trueValue: 5, smallValue: 5 },
        و: { trueValue: 6, smallValue: 6 },
        ز: { trueValue: 7, smallValue: 7 },
        ح: { trueValue: 8, smallValue: 8 },
        ط: { trueValue: 9, smallValue: 9 },
        ي: { trueValue: 10, smallValue: 1 },
        ك: { trueValue: 20, smallValue: 2 },
        ل: { trueValue: 30, smallValue: 3 },
        م: { trueValue: 40, smallValue: 4 },
        ن: { trueValue: 50, smallValue: 5 },
        س: { trueValue: 60, smallValue: 6 },
        ع: { trueValue: 70, smallValue: 7 },
        ف: { trueValue: 80, smallValue: 8 },
        س: { trueValue: 90, smallValue: 9 },
        ق: { trueValue: 100, smallValue: 1 },
        ر: { trueValue: 200, smallValue: 2 },
        ش: { trueValue: 300, smallValue: 3 },
        ت: { trueValue: 400, smallValue: 4 },
        ث: { trueValue: 500, smallValue: 5 },
        خ: { trueValue: 600, smallValue: 6 },
        ذ: { trueValue: 700, smallValue: 7 },
        ض: { trueValue: 800, smallValue: 8 },
        ظ: { trueValue: 900, smallValue: 9 },
        غ: { trueValue: 1000, smallValue: 1 },
	};

	function calc(system) {
		let value = 0;
		for (let i = 0; i < letterInput.length; i += 1) {
			console.log(letterInput);
			value += letters[letterInput.charAt(i)][system];
		}
        return value
	}
    function calcHandler() {
        totalTrueValue = calc('trueValue');
        totalSmallValue = calc('smallValue');
    }
</script>

<textarea bind:value={letterInput} on:input={() => calcHandler()} />

<p>المدخول: {letterInput}</p>
<p>الجمل الصغير: {JSON.stringify(totalSmallValue)}</p>
<p>الجمل الكبير: {JSON.stringify(totalTrueValue)}</p>


<style>
	textArea {
		font-size: 2rem;
		text-align: center;
	}
</style>
