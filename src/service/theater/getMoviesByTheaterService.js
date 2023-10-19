import axios from "axios";
import {
  SCHEDULE_IN_TOTAL_BASE_URL,
  THEATER_BASE_URL1,
  config,
} from "../configService";

// const getMoviesByTheaterAPI = () => {
//   return axios.get(
//     `${THEATER_BASE_URL1}/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
//     config
//   );
// };

const getMoviesByTheaterAPI = () => {
  return axios.get(SCHEDULE_IN_TOTAL_BASE_URL);
};

export default getMoviesByTheaterAPI;
