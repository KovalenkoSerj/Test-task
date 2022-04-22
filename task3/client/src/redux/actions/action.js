import axios from 'axios'
import { GET_DATA_SUCCESS, GET_DATA_REQUEST, GET_DATA_FAILURE} from '../constants/constants'

export const request_data = () => dispatch => {
	dispatch({ type: GET_DATA_REQUEST});
	return axios('http://localhost:8080/data')
		.then(response => response.data)
		.then(response => dispatch({ type: GET_DATA_SUCCESS, payload: response }))
		.catch(error => dispatch({ type: GET_DATA_FAILURE, error: error }))
};