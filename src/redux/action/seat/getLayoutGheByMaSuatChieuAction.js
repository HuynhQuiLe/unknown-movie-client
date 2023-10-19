import getLayoutGheByMaSuatChieuAPI from "../../../service/seat/getLayoutGheByMaSuatChieuService";
import {
  GET_SEAT_LAYOUT_BY_MSC_FAILURE,
  GET_SEAT_LAYOUT_BY_MSC_REQUEST,
  GET_SEAT_LAYOUT_BY_MSC_SUCCESS,
} from "../../constant/seat/getLayoutGheByMaSuatChieuConstants";

export const getLayoutGheByMaSuatChieu = (maSuatChieu) => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_SEAT_LAYOUT_BY_MSC_REQUEST,
    });
    try {
      const { data } = await getLayoutGheByMaSuatChieuAPI(maSuatChieu);
      dispatch({
        type: GET_SEAT_LAYOUT_BY_MSC_SUCCESS,
        payload: data.seat,
      });
    } catch (error) {
      dispatch({
        type: GET_SEAT_LAYOUT_BY_MSC_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
