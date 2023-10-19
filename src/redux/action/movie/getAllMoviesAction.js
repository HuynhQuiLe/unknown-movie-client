import { getAllMoviesAPI } from "../../../service/movie/movieService";
import {
  GET_ALL_MOVIES_FAILURE,
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
} from "../../constant/movie/movieConstants";

export const getAllMovies = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_MOVIES_REQUEST });
    try {
      const { data } = await getAllMoviesAPI();
      dispatch({
        type: GET_ALL_MOVIES_SUCCESS,
        // payload: data.content,
        payload: data.movies,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_MOVIES_FAILURE });
    }
  };
};
