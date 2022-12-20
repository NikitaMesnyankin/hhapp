import { request } from "/src/api/controllers/general.js";
import { config } from "/src/configs/configs.js";
import { parseParams } from "/src/utils/utils.js";

class HHController {
	async getArea(id) {
		try {
			return await request({
				baseURL: config.HH_HOST,
				method: "get",
				url: `/areas/${id}`
			});
		} catch (error) {
			return error.response;
		}
	}

	async getIndustries(locale) {
		try {
			return await request({
				baseURL: config.HH_HOST,
				method: "get",
				url: "/industries",
				params: {
					locale: locale
				}
			});
		} catch (error) {
			return error.response;
		}
	}

	async getEmployers(isHiring, locales, areas, types) {
		let parsedUrl = "/employers";
		parsedUrl = parseParams(parsedUrl, locales, "locale");
		parsedUrl = parseParams(parsedUrl, areas, "area");
		parsedUrl = parseParams(parsedUrl, types, "type");

		try {
			return await request({
				baseURL: config.HH_HOST,
				method: "get",
				url: parsedUrl,
				params: {
					isHiring: true
				}
			});
		} catch (error) {
			return error.response;
		}
	}

	async getEmployer(id) {
		try {
			const response = await request({
				baseURL: config.HH_HOST,
				method: "get",
				url: `/employers/${id}`
			});
			//console.log(response);
			return response;
		} catch (error) {
			return error.response;
		}
	}
}

export { HHController };