import * as actions from '../actions';

const initialState = {
	isFetching: true,
	weather: null
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_WEATHER_LOADING:
			return {
				...state,
				isFetching: true,
			};
		case actions.GET_WEATHER_FAILED:
			return {
				...state,
				isFetching: false,
				weather: null
			};
		case actions.GET_WEATHER_OK:
			return {
				...state,
				isFetching: false,
				weather: action.payload
			};
		default:
			return state;
	}
};