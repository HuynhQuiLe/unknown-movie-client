import axios from "axios";
import { MOVIES_BASE_URL, config } from "../configService";

export const getAllMoviesAPI = () => {
  return axios.get(MOVIES_BASE_URL);
};

export const getMovieDetailsAPI = (id) => {
  return axios.get(`${MOVIES_BASE_URL}/${id}`, config);
};
