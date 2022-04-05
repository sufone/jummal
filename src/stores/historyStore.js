import storez from 'storez';
import convertToArabicNumbers from '../components/Functions/convertToArabic.js';

export const historyStore = storez(
	{
		text: 'الله',
		nafasiReal: 29,
		nafasiDisplay: convertToArabicNumbers('29'),
		mashriqiSmallReal: 12,
		mashriqiSmallDisplay: convertToArabicNumbers('12'),
		mashriqiTrueReal: 66,
		mashriqiTrueDisplay: convertToArabicNumbers('66'),
		maghribiSmallReal: 12,
		maghribiSmallDisplay: convertToArabicNumbers('12'),
		maghribiTrueReal: 66,
		maghribiTrueDisplay: convertToArabicNumbers('66')
	},
	{
		history: true,
		debounce: 1000
	}
);
