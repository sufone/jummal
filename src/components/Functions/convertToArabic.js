export default function convertToArabicNumbers(input) {
	// input MUST be string
	return input
		.replace(/0/g, '۰')
		.replace(/1/g, '۱')
		.replace(/2/g, '۲')
		.replace(/3/g, '۳')
		.replace(/4/g, '٤')
		.replace(/5/g, '٥')
		.replace(/6/g, '٦')
		.replace(/7/g, '۷')
		.replace(/8/g, '۸')
		.replace(/9/g, '۹');
}
