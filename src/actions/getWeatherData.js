import axios from "axios"
import startLoadingData from "../actions/startLoadingData"
import receiveData from "../actions/receiveData"
import loadingError from "../actions/loadingError"

const cities = {
	omsk: 1496153,
	moscow: 5202009,
	newYork: 5128638
};

const API_KEY = "553baeedbafd8c0df291c4dad4e03fc1";
const query = `http://api.openweathermap.org/data/2.5/group?id=${cities.omsk},${cities.moscow},${cities.newYork}&units=metric`;

export function getWeatherData() {

	return function (dispatch)	{

		dispatch(startLoadingData());

		axios.get(query,
			{
				params: {
					appid: API_KEY,
					lang: "ru",
					units: "metric"
				}
			})
			.then(({data}) => {
				dispatch(receiveData(data.list));
			})
			.catch((error) => {
				dispatch(loadingError(error))
			});
	}
}