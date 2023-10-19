import axios from "axios";
import { SEAT_BASE_URL } from "../configService";

const createSeatLayoutAPI = (
  maPhim,
  maHeThongRap,
  maCumRap,
  ngay,
  gio,
  maSuatChieu
) => {
  return axios.post(SEAT_BASE_URL, {
    maPhim,
    maHeThongRap,
    maCumRap,
    ngay,
    gio,
    maSuatChieu,
  });
};

export default createSeatLayoutAPI;
