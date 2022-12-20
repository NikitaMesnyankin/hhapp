//import axios from "../../../node_modules/axios/index.js";
//
// type requestConfig = {
// 	url: string;
// 	method: string;
// 	baseURL: string;
// 	headers?: Record<string, string>;
// data?: object;
// params?: object;
// };

const request = async (params) => {
	try {
		const response = await axios.request(params);
		return {
			data: response.data,
			status: response.status,
		};
	} catch (error) {
		return {
			data: error.response.data,
			status: error.response.status,
		};
	}
};

export { request };