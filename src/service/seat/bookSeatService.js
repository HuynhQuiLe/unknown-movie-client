import axios from "axios";
import { SEAT_BASE_URL } from "../configService";

const bookSeatAPI = (seatMap, maSuatChieu) => {
  console.log(seatMap);
  return axios.post(`${SEAT_BASE_URL}/${maSuatChieu}`, { seatMap });
};

export default bookSeatAPI;
