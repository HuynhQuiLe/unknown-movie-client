import getAllCarouselsAPI from "../../../service/carousel/carouselService";
import {
  GET_ALL_CAROUSELS_FAILURE,
  GET_ALL_CAROUSELS_REQUEST,
  GET_ALL_CAROUSELS_SUCCESS,
} from "../../constant/carousel/carouselConstants";

export const getAllCarousels = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_CAROUSELS_REQUEST });
    try {
      const { data } = await getAllCarouselsAPI();
      dispatch({
        type: GET_ALL_CAROUSELS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_CAROUSELS_FAILURE });
    }
  };
};
