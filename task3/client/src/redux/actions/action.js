import axios from "axios";
import {
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
  GET_DATA_FAILURE,
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAILURE,
} from "../constants/constants";

export const request_data = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios("http://localhost:8080/data")
    .then((response) => response.data)
    .then((response) => dispatch({ type: GET_DATA_SUCCESS, payload: response }))
    .catch((error) => dispatch({ type: GET_DATA_FAILURE, error: error }));
};

export const search_data = (searchText) => (dispatch) => {
  dispatch({ type: SEARCH_DATA_REQUEST });
  return axios
    .post("http://localhost:8080/search", {
      searchText
    })
    .then((response) => response)
    .then((response) =>
      dispatch({ type: SEARCH_DATA_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: SEARCH_DATA_FAILURE, error: error }));
};
