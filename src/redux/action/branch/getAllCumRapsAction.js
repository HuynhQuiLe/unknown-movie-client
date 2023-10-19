import getAllCumRapsAPI from "../../../service/branch/getAllCumRapsSrevice";
import {
  GET_ALL_CUM_RAPS_FAILURE,
  GET_ALL_CUM_RAPS_REQUEST,
  GET_ALL_CUM_RAPS_SUCCESS,
} from "../../constant/branch/getAllCumRapsConstants";

export const getAllCumRaps = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_CUM_RAPS_REQUEST });

    try {
      const { data } = await getAllCumRapsAPI();
      dispatch({
        type: GET_ALL_CUM_RAPS_SUCCESS,
        payload: data.branches,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CUM_RAPS_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};

export default getAllCumRaps;
