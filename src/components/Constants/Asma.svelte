<script>
	let names = [
    {
        "number": "١",
        "name": "الله"
    },
    {
        "number": "٢",
        "name": "الرحمن"
    },
    {
        "number": "٣",
        "name": "الرحيم"
    },
    {
        "number": "٤",
        "name": "الملك"
    },
    {
        "number": "٥",
        "name": "القدّوس"
    },
    {
        "number": "٦",
        "name": "السلام"
    },
    {
        "number": "٧",
        "name": "المؤمن"
    },
    {
        "number": "٨",
        "name": "المهيمن"
    },
    {
        "number": "٩",
        "name": "العزيز"
    },
    {
        "number": "١٠",
        "name": "الجبار"
    },
    {
        "number": "١١",
        "name": "المتكبّر"
    },
    {
        "number": "١٢",
        "name": "الخالق"
    },
    {
        "number": "١٣",
        "name": "البارئ"
    },
    {
        "number": "١٤",
        "name": "المصور"
    },
    {
        "number": "١٥",
        "name": "الغفار"
    },
    {
        "number": "١٦",
        "name": "القهّار"
    },
    {
        "number": "١٧",
        "name": "الوهّاب"
    },
    {
        "number": "١٨",
        "name": "الرزاق"
    },
    {
        "number": "١٩",
        "name": "الفتاح"
    },
    {
        "number": "٢٠",
        "name": "العليم"
    },
    {
        "number": "٢١",
        "name": "القابض"
    },
    {
        "number": "٢٢",
        "name": "الباسط"
    },
    {
        "number": "٢٣",
        "name": "الخافض"
    },
    {
        "number": "٢٤",
        "name": "الرافع"
    },
    {
        "number": "٢٥",
        "name": "المعز"
    },
    {
        "number": "٢٦",
        "name": "المذل"
    },
    {
        "number": "٢٧",
        "name": "السميع"
    },
    {
        "number": "٢٨",
        "name": "البصير"
    },
    {
        "number": "٢٩",
        "name": "الحكم"
    },
    {
        "number": "٣٠",
        "name": "العدل"
    },
    {
        "number": "٣١",
        "name": "اللطيف"
    },
    {
        "number": "٣٢",
        "name": "الخبير"
    },
    {
        "number": "٣٣",
        "name": "الحليم"
    },
    {
        "number": "٣٤",
        "name": "العظيم"
    },
    {
        "number": "٣٥",
        "name": "الغفور"
    },
    {
        "number": "٣٦",
        "name": "الشكور"
    },
    {
        "number": "٣٧",
        "name": "العلي"
    },
    {
        "number": "٣٨",
        "name": "الكبير"
    },
    {
        "number": "٣٩",
        "name": "الحفيظ"
    },
    {
        "number": "٤٠",
        "name": "المُقيت"
    },
    {
        "number": "٤١",
        "name": "الحسيب"
    },
    {
        "number": "٤٢",
        "name": "الجليل"
    },
    {
        "number": "٤٣",
        "name": "الكريم"
    },
    {
        "number": "٤٤",
        "name": "الرقيب"
    },
    {
        "number": "٤٥",
        "name": "المجيب"
    },
    {
        "number": "٤٦",
        "name": "الواسع"
    },
    {
        "number": "٤٧",
        "name": "الحكيم"
    },
    {
        "number": "٤٨",
        "name": "الودود"
    },
    {
        "number": "٤٩",
        "name": "المجيد"
    },
    {
        "number": "٥٠",
        "name": "الباعث"
    },
    {
        "number": "٥١",
        "name": "الشهيد"
    },
    {
        "number": "٥٢",
        "name": "الحق"
    },
    {
        "number": "٥٣",
        "name": "الوكيل"
    },
    {
        "number": "٥٤",
        "name": "القوي"
    },
    {
        "number": "٥٥",
        "name": "المتين"
    },
    {
        "number": "٥٦",
        "name": "الولي"
    },
    {
        "number": "٥٧",
        "name": "الحميد"
    },
    {
        "number": "٥٨",
        "name": "المحصي"
    },
    {
        "number": "٥٩",
        "name": "المبدئ"
    },
    {
        "number": "٦٠",
        "name": "المعيد"
    },
    {
        "number": "٦١",
        "name": "المحيي"
    },
    {
        "number": "٦٢",
        "name": "المميت"
    },
    {
        "number": "٦٣",
        "name": "الحي"
    },
    {
        "number": "٦٤",
        "name": "القيوم"
    },
    {
        "number": "٦٥",
        "name": "الواجد"
    },
    {
        "number": "٦٦",
        "name": "الماجد"
    },
    {
        "number": "٦٧",
        "name": "الواحد"
    },
    {
        "number": "٦٨",
        "name": "الصمد"
    },
    {
        "number": "٦٩",
        "name": "القادر"
    },
    {
        "number": "٧٠",
        "name": "المقتدر"
    },
    {
        "number": "٧١",
        "name": "المقدم"
    },
    {
        "number": "٧٢",
        "name": "المؤخر"
    },
    {
        "number": "٧٣",
        "name": "الأول"
    },
    {
        "number": "٧٤",
        "name": "الآخر"
    },
    {
        "number": "٧٥",
        "name": "الظاهر"
    },
    {
        "number": "٧٦",
        "name": "الباطن"
    },
    {
        "number": "٧٧",
        "name": "الوالي"
    },
    {
        "number": "٧٨",
        "name": "المتعالِ"
    },
    {
        "number": "٧٩",
        "name": "البر"
    },
    {
        "number": "٨٠",
        "name": "التواب"
    },
    {
        "number": "٨١",
        "name": "المنتقم"
    },
    {
        "number": "٨٢",
        "name": "العفو"
    },
    {
        "number": "٨٣",
        "name": "الرؤوف"
    },
    {
        "number": "٨٤",
        "name": "مالك الملك"
    },
    {
        "number": "٨٥",
        "name": "ذو الجلال والإكرام"
    },
    {
        "number": "٨٦",
        "name": "المقسط"
    },
    {
        "number": "٨٧",
        "name": "الجامع"
    },
    {
        "number": "٨٨",
        "name": "الغني"
    },
    {
        "number": "٨٩",
        "name": "المغني"
    },
    {
        "number": "٩٠",
        "name": "المانع"
    },
    {
        "number": "٩١",
        "name": "الضار"
    },
    {
        "number": "٩٢",
        "name": "النافع"
    },
    {
        "number": "٩٣",
        "name": "النور"
    },
    {
        "number": "٩٤",
        "name": "الهادي"
    },
    {
        "number": "٩٥",
        "name": "البديع"
    },
    {
        "number": "٩٦",
        "name": "الباقي"
    },
    {
        "number": "٩٧",
        "name": "الوارث"
    },
    {
        "number": "٩٨",
        "name": "الرشيد"
    },
    {
        "number": "٩٩",
        "name": "الصبور"
    },
    {
        "number": "١٠٠",
        "name": "الجميل"
    },
    {
        "number": "١٠١",
        "name": "القاهر"
    },
    {
        "number": "١٠٢",
        "name": "القريب"
    },
    {
        "number": "١٠٣",
        "name": "الراشد"
    },
    {
        "number": "١٠٤",
        "name": "الرب"
    },
    {
        "number": "١٠٥",
        "name": "المبين"
    },
    {
        "number": "١٠٦",
        "name": "البرهان"
    },
    {
        "number": "١٠٧",
        "name": "الشديد"
    },
    {
        "number": "١٠٨",
        "name": "الواقي"
    },
    {
        "number": "١٠٩",
        "name": "البار"
    },
    {
        "number": "١١٠",
        "name": "ذو القوة"
    },
    {
        "number": "١١١",
        "name": "القائم"
    },
    {
        "number": "١١٢",
        "name": "الدائم"
    },
    {
        "number": "١١٣",
        "name": "الحافظ"
    },
    {
        "number": "١١٤",
        "name": "الفاطر"
    },
    {
        "number": "١١٥",
        "name": "السامع"
    },
    {
        "number": "١١٦",
        "name": "المعطي"
    },
    {
        "number": "١١٧",
        "name": "الكافي"
    },
    {
        "number": "١١٨",
        "name": "الأبد"
    },
    {
        "number": "١١٩",
        "name": "العالم"
    },
    {
        "number": "١٢٠",
        "name": "الصادق"
    },
    {
        "number": "١٢١",
        "name": "القديم"
    },
    {
        "number": "١٢٢",
        "name": "الوتر"
    },
    {
        "number": "١٢٣",
        "name": "الأحد"
    },
    {
        "number": "١٢٤",
        "name": "المالك"
    },
    {
        "number": "١٢٥",
        "name": "المليك"
    },
    {
        "number": "١٢٦",
        "name": "الجواد"
    },
    {
        "number": "١٢٧",
        "name": "الخلاق"
    },
    {
        "number": "١٢٨",
        "name": "الديان"
    },
    {
        "number": "١٢٩",
        "name": "الرازق"
    },
    {
        "number": "١٢٩",
        "name": "الرفيق"
    },
    {
        "number": "١٣٠",
        "name": "السيد"
    },
    {
        "number": "١٣١",
        "name": "السبوح"
    },
    {
        "number": "١٣٢",
        "name": "السريع"
    },
    {
        "number": "١٣٣",
        "name": "الستار"
    },
    {
        "number": "١٣٤",
        "name": "الشافي"
    },
    {
        "number": "١٣٥",
        "name": "الشاكر"
    },
    {
        "number": "١٣٦",
        "name": "الطيب"
    },
    {
        "number": "١٣٧",
        "name": "الأعلى"
    },
    {
        "number": "١٣٨",
        "name": "العلام"
    },
    {
        "number": "١٣٩",
        "name": "الغافر"
    },
    {
        "number": "١٤٠",
        "name": "الفاتح"
    },
    {
        "number": "١٤١",
        "name": "القدير"
    },
    {
        "number": "١٤٢",
        "name": "الكفيل"
    },
    {
        "number": "١٤٣",
        "name": "المعين"
    },
    {
        "number": "١٤٤",
        "name": "المنان"
    },
    {
        "number": "١٤٥",
        "name": "الموسع"
    },
    {
        "number": "١٤٦",
        "name": "المنعم"
    },
    {
        "number": "١٤٧",
        "name": "المفرج"
    },
    {
        "number": "١٤٨",
        "name": "المعافي"
    },
    {
        "number": "١٤٩",
        "name": "المُطعم"
    },
    {
        "number": "١٥٠",
        "name": "الناصر"
    },
    {
        "number": "١٥١",
        "name": "النذير"
    },
    {
        "number": "١٥٢",
        "name": "الوافي"
    },
    {
        "number": "١٥٣",
        "name": "عالم الغيب والشهادة"
    },
    {
        "number": "١٥٤",
        "name": "ذو الفضل العظيم"
    },
    {
        "number": "١٥٥",
        "name": "ذو العرش المجيد"
    },
    {
        "number": "١٥٦",
        "name": "ذو الطول والإحسان"
    },
    {
        "number": "١٥٧",
        "name": "ذو الرحمة الواسعة"
    },
    {
        "number": "١٥٨",
        "name": "ذو الجبروت والملكوت"
    },
    {
        "number": "١٥٩",
        "name": "فاطر السموات والأرض"
    },
    {
        "number": "١٦٠",
        "name": "فالق الحب والنوى"
    },
    {
        "number": "١٦١",
        "name": "منزل الكتاب"
    },
    {
        "number": "١٦٢",
        "name": "سريع الحساب"
    },
    {
        "number": "١٦٣",
        "name": "علام الغيوب"
    },
    {
        "number": "١٦٤",
        "name": "غافر الذنب"
    },
    {
        "number": "١٦٥",
        "name": "قابل التوب"
    },
    {
        "number": "١٦٦",
        "name": "فارج الهم"
    },
    {
        "number": "١٦٧",
        "name": "كاشف الكرب"
    },
    {
        "number": "١٦٨",
        "name": "مقلب القلوب"
    },
    {
        "number": "١٦٩",
        "name": "خير الفاصلين"
    },
    {
        "number": "١٧٠",
        "name": "ذو المعارج"
    },
    {
        "number": "١٧١",
        "name": "خير الناصرين"
    },
    {
        "number": "١٧٢",
        "name": "خير الفاتحين"
    },
    {
        "number": "١٧٣",
        "name": "خير الراحمين"
    },
    {
        "number": "١٧٤",
        "name": "خير الغافرين"
    },
    {
        "number": "١٧٥",
        "name": "أرحم الراحمين"
    },
    {
        "number": "١٧٦",
        "name": "المحيط"
    },
    {
        "number": "١٧٧",
        "name": "الحنان"
    },
    {
        "number": "١٧٨",
        "name": "الأكرم"
    },
    {
        "number": "١٧٩",
        "name": "الإله"
    },
    {
        "number": "١٨٠",
        "name": "المسعَّر"
    },
    {
        "number": "١٨١",
        "name": "الدهر"
    },
    {
        "number": "١٨٢",
        "name": "رفيع الدرجات"
    },
    {
        "number": "١٨٣",
        "name": "شديد المحال"
    },
    {
        "number": "١٨٤",
        "name": "عدو الكافرين"
    },
    {
        "number": "١٨٥",
        "name": "الحفي"
    },
    {
        "number": "١٨٦",
        "name": "نور السماوات والأرض"
    },
    {
        "number": "١٨٧",
        "name": "الغيور"
    },
    {
        "number": "١٨٨",
        "name": "المنذر"
    },
    {
        "number": "١٨٩",
        "name": "المدبر"
    },
    {
        "number": "١٩٠",
        "name": "مخزي الكافرين"
    },
    {
        "number": "١٩١",
        "name": "النصير"
    },
    {
        "number": "١٩٢",
        "name": "خير المنزلين"
    },
    {
        "number": "١٩٣",
        "name": "خير الماكرين"
    },
    {
        "number": "١٩٤",
        "name": "متم نوره"
    },
    {
        "number": "١٩٥",
        "name": "المستعان"
    },
    {
        "number": "١٩٦",
        "name": "المعبود"
    },
    {
        "number": "١٩٧",
        "name": "أهل التقوى"
    },
    {
        "number": "١٩٨",
        "name": "أهل المغفرة"
    },
    {
        "number": "١٩٩",
        "name": "واسع المغفرة"
    },
    {
        "number": "٢٠٠",
        "name": "أحكم الحاكمين"
    },
    {
        "number": "٢٠١",
        "name": "خير الحاكمين"
    },
    {
        "number": "٢٠٢",
        "name": "خير الرازقين"
    },
    {
        "number": "٢٠٣",
        "name": "أحسن الخالقين"
    },
    {
        "number": "٢٠٤",
        "name": "خير الحافظين"
    },
    {
        "number": "٢٠٥",
        "name": "الفعال لما يريد"
    },
    {
        "number": "٢٠٦",
        "name": "خير الوارثين"
    },
    {
        "number": "٢٠٧",
        "name": "فالق الإصباح"
    },
    {
        "number": "٢٠٨",
        "name": "نعم المولى"
    },
    {
        "number": "٢٠٩",
        "name": "كاشف الضر"
    },
    {
        "number": "٢١٠",
        "name": "مخرج الحي من الميت"
    },
    {
        "number": "٢١١",
        "name": "مخرج الميت من الحي"
    },
    {
        "number": "٢١٢",
        "name": "جاعل الليل سكناً"
    },
    {
        "number": "٢١٣",
        "name": "أسرع الحاسبين"
    },
    {
        "number": "٢١٤",
        "name": "ولي المؤمنين"
    },
    {
        "number": "٢١٥",
        "name": "الغالب على أمره"
    },
    {
        "number": "٢١٦",
        "name": "البالغ أمره"
    },
    {
        "number": "٢١٧",
        "name": "ذو الانتقام"
    },
    {
        "number": "٢١٨",
        "name": "المغيث"
    },
    {
        "number": "٢١٩",
        "name": "المولى"
    },
    {
        "number": "٢٢٠",
        "name": "الحييّ"
    },
    {
        "number": "٢٢١",
        "name": "المحسن"
    },
    {
        "number": "٢٢٢",
        "name": "الفرد"
    }
]
</script>

<div>
	<h4>الأسماء الحسنى</h4>

	<table>
		{#each names as name}
		<tr>
			<td>{name.number}</td>
			<td>{name.name}</td>
		</tr>
		{/each}
	</table>

</div>

<style>
	div {
		max-height: 400px;
		overflow: auto;
	}
	td {
		text-align: right;
		padding: 2px;
	}
	table {
		border-collapse: collapse;
	}
	td {
		border: 1px solid #999;
	}
</style>
