import {
  GET_ALL_COMMENTS_BY_MA_PHIM_FAILURE,
  GET_ALL_COMMENTS_BY_MA_PHIM_REQUEST,
  GET_ALL_COMMENTS_BY_MA_PHIM_SUCCESS,
} from "../../constant/comment/getAllCommentsByMaPhimConstants";

const initialState = {
  isLoading: false,
  comments: null,
  error: null,
};

export const getAllCommentsByMaPhimReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_COMMENTS_BY_MA_PHIM_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_COMMENTS_BY_MA_PHIM_SUCCESS:
      return { ...state, isLoading: true, comments: payload, error: null };

    case GET_ALL_COMMENTS_BY_MA_PHIM_FAILURE:
      return { ...state, isLoading: true, error: payload };

    default:
      return { ...state };
  }
};
