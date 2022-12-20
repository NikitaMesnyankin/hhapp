import { getCountData, getVacanciesPerArea } from "./src/charts/countChart.js";

const companyIds = [1304, 733, 7944, 665467, 6041, 1025275, 67611, 15478, 78638, 2180, 1740, 2733062, 3945, 41862, 3529, 4649269, 3127, 80, 3776];

var chartInstance = {
	chart: {
		caption: "Количество вакансий на данный момент",
		subcaption: "Для компаний из ТОП-15 работодателей Хабра",
		showpercentvalues: "1",
		defaultcenterlabel: "Вакансий",
		aligncaptionwithcanvas: "0",
		captionpadding: "0",
		decimals: "1",
		plottooltext:
			"<b>$percentValue</b> ($value вакансий) - <b>$label</b>",
		centerlabel: "# Users: $value",
		theme: "fusion"
	}
};

var chartInstance2 = {
	chart: {
		caption: "Распределение вакансий по городам",
		subcaption: "Для компаний из ТОП-15 работодателей Хабра",
		showpercentvalues: "1",
		defaultcenterlabel: "Вакансий",
		aligncaptionwithcanvas: "0",
		captionpadding: "0",
		decimals: "1",
		plottooltext:
			"<b>$percentValue</b> ($value вакансий) - <b>$label</b>",
		centerlabel: "В городе: $value",
		theme: "fusion"
	}
};


FusionCharts.ready(async function () {
	chartInstance.data = await getCountData(companyIds);
	var myChart = new FusionCharts({
		type: "doughnut2d",
		renderAt: "count-report",
		width: "100%",
		height: "100%",
		dataFormat: "json",
		dataSource: chartInstance
	});

	chartInstance2.data = await getVacanciesPerArea(companyIds);
	var myChart2 = new FusionCharts({
		type: "doughnut2d",
		renderAt: "city-report",
		width: "100%",
		height: "100%",
		dataFormat: "json",
		dataSource: chartInstance2
	});

	myChart.render();
	myChart2.render();
});