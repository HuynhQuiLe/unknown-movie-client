import {
  SET_CUM_RAP,
  SET_HE_THONG_RAP,
  SET_PHIM,
} from "../../constant/booking/bookingConstants";

export const setPhim = (phim) => ({
  type: SET_PHIM,
  payload: phim,
});

export const setHeThongRap = (heThongRap) => ({
  type: SET_HE_THONG_RAP,
  payload: heThongRap,
});

export const setCumRap = (cumRap) => ({
  type: SET_CUM_RAP,
  payload: cumRap,
});
