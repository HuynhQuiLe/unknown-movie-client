import axios from "axios";
import { USER_BASE_URL } from "../configService";

const registerAPI = (user) => {
  return axios.post(`${USER_BASE_URL}/register`, user);
};

export default registerAPI;
