import axios from "axios";
import { COMMENT_BASE_URL } from "../configService";

const getAllCommentsByMaPhimAPI = (maPhim) => {
  return axios.get(`${COMMENT_BASE_URL}/${maPhim}`);
};

export default getAllCommentsByMaPhimAPI;
