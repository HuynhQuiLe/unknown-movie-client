import {
  CREATE_NEW_COMMENT_FAILURE,
  CREATE_NEW_COMMENT_REQUEST,
  CREATE_NEW_COMMENT_SUCCESS,
} from "../../constant/comment/createNewCommentConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const createNewCommentReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_COMMENT_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CREATE_NEW_COMMENT_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case CREATE_NEW_COMMENT_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
