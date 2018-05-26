import axios from 'axios';
import { apiUrl } from '../config';

export const GET_WEATHER_LOADING = 'GET_WEATHER_LOADING'
export const GET_WEATHER_FAILED = 'GET_WEATHER_FAILED'
export const GET_WEATHER_OK = 'GET_WEATHER_OK'

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};
export const getWeather = (lat, lng) => {
	return dispatch => {
		dispatch({ type: GET_WEATHER_LOADING });
		axios
			.get(
				`${apiUrl}/weather?lat=${lat}&lng=${lng}`,
				{ headers }
			)
			.then(resp => {
				if (resp.status === 200) {
					dispatch({ type: GET_WEATHER_OK, payload: resp.data });
				} else {
					throw new Error('Bad response from API');
				}
			})
			.catch(err => {
				dispatch({ type: GET_WEATHER_FAILED, payload: err });
			})
	}
}