import axios from "axios";
import { TINH_ANH_BASE_URL } from "../configService";
import { userLocalStorage } from "../localService";

const adjustTinhAnhAPI = (tinhAnh) => {
  const { _id } = userLocalStorage.get();
  return axios.put(`${TINH_ANH_BASE_URL}/${_id}`, { tinhAnh });
};

export default adjustTinhAnhAPI;
