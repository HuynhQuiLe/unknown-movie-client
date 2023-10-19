import { LOGOUT } from "../../constant/user/userConstants";

export const logout = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
