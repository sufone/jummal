import { writable, derived } from 'svelte/store';
import sumDigitsFromString from '../components/Functions/sumDigitsFromString.js';
import convertToArabicNumbers from '../components/Functions/convertToArabic.js';

export const totalTrueValue = writable(['0', convertToArabicNumbers('0')]);

export const totalTrueValueCombined = derived(
	totalTrueValue,
	($totalTrueValue) => [
		sumDigitsFromString($totalTrueValue[0]),
		convertToArabicNumbers(sumDigitsFromString($totalTrueValue[0]))
	],
	['0', convertToArabicNumbers('0')]
);

export const totalSmallValue = writable(['0', convertToArabicNumbers('0')]);

export const totalSmallValueCombined = derived(
	totalSmallValue,
	($totalSmallValue) => [
		sumDigitsFromString($totalSmallValue[0]),
		convertToArabicNumbers(sumDigitsFromString($totalSmallValue[0]))
	],
	['0', convertToArabicNumbers('0')]
);

export const totalMashriqiDigitsCombined = derived(
	[totalTrueValueCombined, totalSmallValueCombined],
	([$totalTrueValueCombined, $totalSmallValueCombined]) => [
		sumDigitsFromString($totalTrueValueCombined[0].concat($totalSmallValueCombined[0])),
		convertToArabicNumbers(
			sumDigitsFromString($totalTrueValueCombined[0].concat($totalSmallValueCombined[0]))
		)
	],
	['0', convertToArabicNumbers('0')]
);
