import { message } from "antd";
import {
  cumRapLocalStorage,
  gioLocalStorage,
  heThongRapLocalStorage,
  ngayLocalStorage,
  phimLocalStorage,
  userLocalStorage,
} from "../../../service/localService";
import {
  SELECTED_SEAT,
  SET_CUM_RAP,
  SET_GIO,
  SET_HE_THONG_RAP,
  SET_NGAY,
  SET_PHIM,
} from "../../constant/booking/bookingConstants";

const initialState = {
  phim: phimLocalStorage.get("phim") || null,
  heThongRap: heThongRapLocalStorage.get("heThongRap") || null,
  cumRap: cumRapLocalStorage.get("cumRap") || null,
  selectedSeats: [],
  ngay: ngayLocalStorage.get("ngay") || null,
  gio: gioLocalStorage.get("gio") || null,
};

export const bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PHIM:
      phimLocalStorage.set(payload);
      return { ...state, phim: payload };

    case SET_HE_THONG_RAP:
      heThongRapLocalStorage.set(payload);
      return { ...state, heThongRap: payload };

    case SET_CUM_RAP:
      cumRapLocalStorage.set(payload);
      return { ...state, cumRap: payload };

    case SET_NGAY:
      ngayLocalStorage.set(payload);
      return { ...state, ngay: payload };

    case SET_GIO:
      gioLocalStorage.set(payload);
      return { ...state, gio: payload };

    case SELECTED_SEAT:
      const clone = [...state.selectedSeats];

      const index = clone.findIndex((item) => item.soGhe === payload.soGhe);

      index !== -1 ? clone.splice(index, 1) : clone.push(payload);

      let total = 0;
      const { tinhAnh } = userLocalStorage.get("user");

      if (clone.length) {
        clone.map((seat) => {
          total += seat.gia;
        });
      }

      if (total > tinhAnh) {
        message.error("Bạn không đủ TINH ANH để thực hiện giao dịch.");
        clone.pop();
      }

      return { ...state, selectedSeats: clone };

    default:
      return { ...state };
  }
};
