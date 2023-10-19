import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../../constant/user/userConstants";

const initialState = {
  isLoading: false,
  error: null,
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case REGISTER_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
