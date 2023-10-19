import { message } from "antd";
import loginAPI from "../../../service/user/login";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../constant/user/userConstants";

export const login = (user) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await loginAPI(user);
      message.success(data.message);
      data.user.duyTriDangNhap = user.duyTriDangNhap;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
    }
  };
};
