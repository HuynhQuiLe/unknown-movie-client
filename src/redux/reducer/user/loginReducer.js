import { userLocalStorage } from "../../../service/localService";
import { GET_USER_BY_ID_SUCCESS } from "../../constant/user/getUserByIDConstants";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../constant/user/userConstants";

const initialState = {
  isLoading: false,
  user: userLocalStorage.get() || null,
  error: null,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      //set localStorage
      userLocalStorage.set(payload.user);
      return { ...state, user: payload.user, isLoading: false };

    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: payload };
    case GET_USER_BY_ID_SUCCESS:
      userLocalStorage.set(payload);
      return { ...state, user: payload, isLoading: false };

    default:
      return { ...state };
  }
};
