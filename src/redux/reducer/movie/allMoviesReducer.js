import { GET_ALL_CAROUSELS_FAILURE } from "../../constant/carousel/carouselConstants";
import {
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
} from "../../constant/movie/movieConstants";

const initialState = {
  isLoading: false,
  movies: null,
  error: null,
};

export const allMoviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES_REQUEST:
      return { ...state, isLoading: true };

    case GET_ALL_MOVIES_SUCCESS:
      return { ...state, movies: payload, isLoading: false };
    case GET_ALL_CAROUSELS_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
