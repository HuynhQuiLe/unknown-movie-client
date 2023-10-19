import getAllCommentsByMaPhimAPI from "../../../service/comment/getAllCommentsByMaPhimService";
import {
  GET_ALL_COMMENTS_BY_MA_PHIM_FAILURE,
  GET_ALL_COMMENTS_BY_MA_PHIM_REQUEST,
  GET_ALL_COMMENTS_BY_MA_PHIM_SUCCESS,
} from "../../constant/comment/getAllCommentsByMaPhimConstants";

export const getAllCommentsByMaPhim = (maPhim) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_COMMENTS_BY_MA_PHIM_REQUEST });

    try {
      const { data } = await getAllCommentsByMaPhimAPI(maPhim);
      dispatch({
        type: GET_ALL_COMMENTS_BY_MA_PHIM_SUCCESS,
        payload: data.comments,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_COMMENTS_BY_MA_PHIM_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
