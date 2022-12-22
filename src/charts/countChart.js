import { HHController } from "../api/controllers/hh.js";

const apiController = new HHController();
const companyIds = [1304, 733, 7944, 665467, 6041, 1025275, 67611, 15478, 78638, 2180, 1740, 2733062, 3945, 41862, 3529, 4649269, 3127, 80, 3776];

const getCountData = async (companyIds) => {
	const dataChunks = [];
	for (const company of companyIds) {
		const response = await apiController.getEmployer(company);
		console.log(response.data);
		if (response.data.open_vacancies) {
			dataChunks.push({
				label: response.data.name,
				value: response.data.open_vacancies
			});
		}
	}
	return dataChunks;
};

const checkArrayForExistingLabel = (arr, name) => {
	for (const element of arr) {
		if (element.label === name) {
			return true;
		}
	}
	return false;
};

const getVacanciesPerArea = async (companyIds) => {
	const dataChunks = [];
	for (const company of companyIds) {
		const response = await apiController.getEmployer(company);
		if (!(checkArrayForExistingLabel(dataChunks, response.data.area.name))) {
			dataChunks.push({
				label: response.data.area.name,
				value: response.data.open_vacancies
			});
		} else {
			dataChunks[dataChunks.indexOf(dataChunks.find((item) => {
				return item.label === response.data.area.name;
			}))].value += response.data.open_vacancies;
		}
	}
	console.log(dataChunks);
	return dataChunks;
};

const getVacanciesPerIndustry = async (companyIds) => {
	const dataTree = {
		label: "Индустрии",
		value: "40992",
		data: []
	};
	for (const company of companyIds) {
		const response = await apiController.getEmployer(company);
		for (const industry of response.data.industries) {
			if (!(industry.id[0] in dataTree.data)) {
				dataTree.data.push({
					label: ""
				})
			}
		}
	}
}

export { getCountData, getVacanciesPerArea };

