export default function reducer(state = {
	cityTab: 0,
	isLoading: false,
	isLoaded: false,
	data: null,
	error: null
}, action)
{
	switch (action.type) {

		case "START_LOADING_DATA":
			return { ...state, isLoading: true };

		case "LOADING_ERROR":
			return { ...state, isLoading: false, isLoaded: false, error: action.payload};

		case "RECEIVE_DATA":
			return { ...state, isLoading: false, isLoaded: true, data: action.payload};

		case "CHANGE_CITY_TAB":
			return {...state, cityTab: action.cityTab};

		default:
			return state;
	}
}
