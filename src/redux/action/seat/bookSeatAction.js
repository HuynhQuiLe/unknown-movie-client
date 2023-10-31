import { message } from "antd";
import {
  BOOK_SEAT_FAILURE,
  BOOK_SEAT_REQUEST,
  BOOK_SEAT_SUCCESS,
} from "../../constant/seat/bookSeatConstants";
import bookSeatAPI from "../../../service/seat/bookSeatService";
import { getLayoutGheByMaSuatChieu } from "./getLayoutGheByMaSuatChieuAction";

export const bookSeat = (seatMap, maSuatChieu) => {
  return async (dispatch, getState) => {
    dispatch({
      type: BOOK_SEAT_REQUEST,
    });
    try {
      const { data } = await bookSeatAPI(seatMap, maSuatChieu);
      console.log(data.booked);
      dispatch({
        type: BOOK_SEAT_SUCCESS,
        payload: data.message,
      });
      message.success(data.message);
      getLayoutGheByMaSuatChieu(maSuatChieu);
      return true;
    } catch (error) {
      dispatch({
        type: BOOK_SEAT_FAILURE,
        payload: error.response.data.message,
      });
      message.error(error.response.data.message);
      return false;
    }
  };
};
