import {
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
} from "../../constant/movie/movieConstants";

const initialState = {
  isLoading: false,
  movie: null,
  error: null,
};

export const movieDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_MOVIE_DETAILS_REQUEST:
      return { ...state, isLoading: true };

    case GET_MOVIE_DETAILS_SUCCESS:
      return { ...state, movie: payload, isLoading: false };
    case GET_MOVIE_DETAILS_FAILURE:
      return { ...state, isLoading: false, error: payload };
    default:
      return { ...state };
  }
};
