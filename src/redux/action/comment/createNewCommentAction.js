import { message } from "antd";
import {
  CREATE_NEW_COMMENT_FAILURE,
  CREATE_NEW_COMMENT_REQUEST,
  CREATE_NEW_COMMENT_SUCCESS,
} from "../../constant/comment/createNewCommentConstants";
import createNewCommentAPI from "../../../service/comment/createNewCommentService";
import { getAllCommentsByMaPhim } from "./getAllCommentsByMaPhimAction";

export const createNewComment = (comment) => {
  return async (dispatch, getState) => {
    dispatch({ type: CREATE_NEW_COMMENT_REQUEST });
    try {
      const { data } = await createNewCommentAPI(comment);
      dispatch({ type: CREATE_NEW_COMMENT_SUCCESS });
      message.success(data.message);
      dispatch(getAllCommentsByMaPhim(comment.maPhim));
      return true;
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: CREATE_NEW_COMMENT_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
