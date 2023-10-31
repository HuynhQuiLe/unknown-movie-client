import { message } from "antd";
import adjustTinhAnhAPI from "../../../service/tinhAnh/adjustTinhAnhService";
import { ADJUST_TINH_ANH } from "../../constant/tinhAnh/adjustTinhAnhConstants";
import { getUser } from "../user/getUserByID";
import { userLocalStorage } from "../../../service/localService";

export const adjustTinhAnh = (tinhAnh) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await adjustTinhAnhAPI(tinhAnh);
      message.info(data.message);
      dispatch(getUser(userLocalStorage.get()._id));
    } catch (error) {
      console.log(error);
    }
  };
};
