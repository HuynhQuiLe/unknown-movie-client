import { moviesByTheaterLocalStorage } from "../../../service/localService";
import {
  GET_MOVIES_BY_THEATER_FAILURE,
  GET_MOVIES_BY_THEATER_REQUEST,
  GET_MOVIES_BY_THEATER_SUCCESS,
} from "../../constant/theater/getMoviesByTheaterConstants";

const initialState = {
  isLoading: false,
  moviesByTheater: moviesByTheaterLocalStorage.get("moviesByTheater") || null,
  error: null,
};

export const getMoviesByTheaterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_MOVIES_BY_THEATER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_MOVIES_BY_THEATER_SUCCESS:
      moviesByTheaterLocalStorage.set(payload);
      return {
        ...state,
        isLoading: false,
        moviesByTheater: payload,
        error: null,
      };

    case GET_MOVIES_BY_THEATER_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
