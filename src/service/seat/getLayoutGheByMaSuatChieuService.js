import axios from "axios";
import { SEAT_BASE_URL } from "../configService";

const getLayoutGheByMaSuatChieuAPI = (maSuatChieu) => {
  return axios.get(`${SEAT_BASE_URL}/${maSuatChieu}`);
};

export default getLayoutGheByMaSuatChieuAPI;
