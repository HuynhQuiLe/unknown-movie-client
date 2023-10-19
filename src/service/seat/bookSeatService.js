import axios from "axios";
import { SEAT_BASE_URL } from "../configService";

const bookSeatAPI = (seatMap, maSuatChieu) => {
  return axios.post(`${SEAT_BASE_URL}/${maSuatChieu}`, seatMap);
};

export default bookSeatAPI;
