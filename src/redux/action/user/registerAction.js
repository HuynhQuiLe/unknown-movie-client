import { message } from "antd";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../../constant/user/userConstants";
import registerAPI from "../../../service/user/register";

export const register = (user) => {
  return async (dispatch, getState) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await registerAPI(user);
      message.success(data.message);
      dispatch({
        type: REGISTER_SUCCESS,
      });
      return true;
    } catch (error) {
      message.error(error.response.data.message);
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response.data.message,
      });
      return false;
    }
  };
};
