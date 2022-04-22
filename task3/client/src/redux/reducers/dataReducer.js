import {
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
} from "../constants/constants";

const initialState = {
  folderData: [],
  loading: false,
  error: "",
};

export const dataReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        folderData: payload,
        loading: false,
      };
    case GET_DATA_FAILURE:
        return {
            ...state,
            error: error,
            loading: false
        }
    default:
      return state;
  }
};
