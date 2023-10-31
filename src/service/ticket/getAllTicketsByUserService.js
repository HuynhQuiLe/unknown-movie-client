import axios from "axios";
import { TICKET_BASE_URL } from "../configService";

const getAllTicketsByUserAPI = (id) => {
  return axios.get(`${TICKET_BASE_URL}/${id}`);
};

export default getAllTicketsByUserAPI;
