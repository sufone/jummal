import { writable, derived } from 'svelte/store';
import sumDigitsFromString from '../components/Functions/sumDigitsFromString.js';
import convertToArabicNumbers from '../components/Functions/convertToArabic.js';

export const totalNafasi = writable(['0', convertToArabicNumbers('0')]);

export const totalNafasiCombined = derived(
	totalNafasi,
	($totalNafasi) => convertToArabicNumbers(sumDigitsFromString($totalNafasi[0])),
	convertToArabicNumbers('0')
);
