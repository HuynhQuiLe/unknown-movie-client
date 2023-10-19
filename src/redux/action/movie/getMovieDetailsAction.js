import { getMovieDetailsAPI } from "../../../service/movie/movieService";
import {
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
} from "../../constant/movie/movieConstants";
import { setPhim } from "../booking/bookingAction";

export const getMovieDetails = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_MOVIE_DETAILS_REQUEST,
    });
    try {
      const { data } = await getMovieDetailsAPI(id);

      dispatch({
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload: data.movie,
      });

      dispatch(
        setPhim({ maPhim: data.movie.maPhim, tenPhim: data.movie.tenPhim })
      );
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_MOVIE_DETAILS_FAILURE,
      });
    }
  };
};
