import {
  GET_ALL_CUM_RAPS_FAILURE,
  GET_ALL_CUM_RAPS_REQUEST,
  GET_ALL_CUM_RAPS_SUCCESS,
} from "../../constant/branch/getAllCumRapsConstants";

const initialState = {
  isLoading: false,
  branches: null,
  error: null,
};

export const getAllCumRapsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_CUM_RAPS_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_CUM_RAPS_SUCCESS:
      return { ...state, isLoading: false, branches: payload, error: null };

    case GET_ALL_CUM_RAPS_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
