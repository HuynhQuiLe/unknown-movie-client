import { message } from "antd";
import { userLocalStorage } from "../../../service/localService";
import { LOGOUT } from "../../constant/user/userConstants";

const initialState = {};

export const logoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT:
      userLocalStorage.remove();
      message.warning("Đăng xuất thành công.");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      return { ...state };

    default:
      return { ...state };
  }
};
