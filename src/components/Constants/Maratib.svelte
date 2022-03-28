<script>
	import { totalNafasi } from '../../stores/totalNafasi.js';
	import { totalTrueValue, totalSmallValue } from '../../stores/totalTrueValue.js';
	import {
		totalMaghribiSmallValue,
		totalMaghribiTrueValue
	} from '../../stores/totalMaghribiSmallValue.js';

	import convertToArabicNumbers from '../Functions/convertToArabic.js';

	let maratib = [
		{
			number: '1',
			rank: ' الأحدية'
		},
		{
			number: '2',
			rank: 'الحقيقة المحمدية (الوحدة)'
		},
		{
			number: '3',
			rank: 'الواحدية (تجلي الأسماء والصفات)، وفيها: الكثرة، الخلق، الفتح'
		},
		{
			number: '4',
			rank: 'النبوة'
		},
		{
			number: '5',
			rank: 'الرسالة (يتفرع منها النصر)'
		},
		{
			number: '6',
			rank: 'الجمع أوالقرآن'
		},
		{
			number: '7',
			rank: 'الغنى'
		},
		{
			number: '8',
			rank: 'إحكام الدنيا (كمال الاستقرار والثبات) والسورة الثامنة الأنفال'
		},
		{
			number: '9',
			rank: 'الملك'
		},
		{
			number: '10',
			rank: 'الولاية (يتفرع منها البشرى)'
		},
		{
			number: '11',
			rank: 'الخلق الجديد'
		},
		{
			number: '12',
			rank: 'الكمال'
		}
	];
</script>

<div>
	<h4>مراتب الوجود</h4>
	<table>
		{#each maratib as martaba}
			<tr>
				{#if parseInt(martaba.number) == parseInt($totalNafasi[0]) || parseInt(martaba.number) == parseInt($totalSmallValue[0]) || parseInt(martaba.number) == parseInt($totalTrueValue[0]) || parseInt(martaba.number) == parseInt($totalMaghribiSmallValue[0]) || parseInt(martaba.number) == parseInt($totalMaghribiTrueValue[0])}
					<td class="highlight">{convertToArabicNumbers(martaba.number)}</td>
					<td class="highlight">{martaba.rank}</td>
				{:else}
					<td>{convertToArabicNumbers(martaba.number)}</td>
					<td>{martaba.rank}</td>
				{/if}
			</tr>
		{/each}
	</table>
</div>

<style>
	div {
		min-height: 600px;
		max-height: 600px;
		overflow: auto;
	}
	td {
		text-align: right;
		padding: 2px;
	}
	table {
		border-collapse: collapse;
	}
	@media (max-width: 600px) {
		div {
			margin-bottom: 120px;
		}
	}
	@media (prefers-color-scheme: dark) {
		td.highlight {
			font-weight: bold;
			background-color: rgb(50, 95, 77);
		}
	}
</style>
