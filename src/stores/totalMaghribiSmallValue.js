import { writable, derived } from 'svelte/store';
import sumDigitsFromString from '../components/Functions/sumDigitsFromString.js';
import convertToArabicNumbers from '../components/Functions/convertToArabic.js';

export const totalMaghribiSmallValue = writable(['0', convertToArabicNumbers('0')]);

export const totalMaghribiSmallValueCombined = derived(
	totalMaghribiSmallValue,
	($totalMaghribiSmallValue) => [
		sumDigitsFromString($totalMaghribiSmallValue[0]),
		convertToArabicNumbers(sumDigitsFromString($totalMaghribiSmallValue[0]))
	],
	['0', convertToArabicNumbers('0')]
);

export const totalMaghribiTrueValue = writable(['0', convertToArabicNumbers('0')]);

export const totalMaghribiTrueValueCombined = derived(
	totalMaghribiTrueValue,
	($totalMaghribiTrueValue) => [
		sumDigitsFromString($totalMaghribiTrueValue[0]),
		convertToArabicNumbers(sumDigitsFromString($totalMaghribiTrueValue[0]))
	],
	['0', convertToArabicNumbers('0')]
);

export const totalMashriqiDigitsCombined = derived(
	[totalMaghribiTrueValueCombined, totalMaghribiSmallValueCombined],
	([$totalMaghribiTrueValueCombined, $totalMaghribiSmallValueCombined]) => [
		sumDigitsFromString(
			$totalMaghribiTrueValueCombined[0].concat($totalMaghribiSmallValueCombined[0])
		),
		convertToArabicNumbers(
			sumDigitsFromString(
				$totalMaghribiTrueValueCombined[0].concat($totalMaghribiSmallValueCombined[0])
			)
		)
	],
	['0', convertToArabicNumbers('0')]
);
