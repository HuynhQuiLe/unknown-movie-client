import getMoviesByTheaterAPI from "../../../service/theater/getMoviesByTheaterService";
import {
  GET_MOVIES_BY_THEATER_FAILURE,
  GET_MOVIES_BY_THEATER_REQUEST,
  GET_MOVIES_BY_THEATER_SUCCESS,
} from "../../constant/theater/getMoviesByTheaterConstants";

export const getMovieByTheater = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_MOVIES_BY_THEATER_REQUEST });
    try {
      const { data } = await getMoviesByTheaterAPI();
      dispatch({ type: GET_MOVIES_BY_THEATER_SUCCESS, payload: data.list });
    } catch (error) {
      dispatch({ type: GET_MOVIES_BY_THEATER_FAILURE });
    }
  };
};
