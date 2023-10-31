import axios from "axios";
import { TICKET_BASE_URL } from "../configService";

const createTicketAPI = (ticket) => {
  return axios.post(TICKET_BASE_URL, ticket);
};

export default createTicketAPI;
