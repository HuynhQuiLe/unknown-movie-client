import axios from "axios";
import { COMMENT_BASE_URL } from "../configService";

const createNewCommentAPI = (comment) => {
  return axios.post(`${COMMENT_BASE_URL}/${comment.maPhim}`, comment);
};

export default createNewCommentAPI;
