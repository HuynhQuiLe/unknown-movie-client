import createSeatLayoutAPI from "../../../service/seat/createSeatLayoutService";
import {
  CREATE_SEAT_LAYOUT_FAILURE,
  CREATE_SEAT_LAYOUT_REQUEST,
  CREATE_SEAT_LAYOUT_SUCCESS,
} from "../../constant/seat/createSeatLayoutConstants";

export const createSeatLayout = (
  maPhim,
  maHeThongRap,
  maCumRap,
  ngay,
  gio,
  maSuatChieu
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CREATE_SEAT_LAYOUT_REQUEST,
    });
    try {
      const { data } = await createSeatLayoutAPI(
        maPhim,
        maHeThongRap,
        maCumRap,
        ngay,
        gio,
        maSuatChieu
      );
      dispatch({
        type: CREATE_SEAT_LAYOUT_SUCCESS,
        payload: data.message,
      });
      return true;
    } catch (error) {
      dispatch({
        type: CREATE_SEAT_LAYOUT_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
