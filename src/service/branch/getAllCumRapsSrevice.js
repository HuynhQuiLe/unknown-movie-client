import axios from "axios";
import { BRANCH_BASE_URL } from "../configService";

const getAllCumRapsAPI = () => {
  return axios(`${BRANCH_BASE_URL}`);
};

export default getAllCumRapsAPI;
