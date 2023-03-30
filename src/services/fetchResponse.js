import axios from "axios";

const API_KEY = "33587663-9f49167c56a6d2d024abb7fb5";
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchResponse = async (value, per_page) => {
	const response = await axios.get(`?q=${value}`, {
		params: {
			key: API_KEY,
			page: 1,
			image_type: "photo",
			orientation: "horizontal",
			per_page
		}
	});

	return response.data.hits;
}