import createTicketAPI from "../../../service/ticket/createTicketService";
import getAllTicketsByUserAPI from "../../../service/ticket/getAllTicketsByUserService";
import {
  GET_ALL_TICKETS_BY_USER_FAILURE,
  GET_ALL_TICKETS_BY_USER_REQUEST,
  GET_ALL_TICKETS_BY_USER_SUCCESS,
} from "../../constant/ticket/getAllTicketsByUserConstants";

export const getAllTicketsByUser = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_ALL_TICKETS_BY_USER_REQUEST });
    try {
      const { data } = await getAllTicketsByUserAPI(id);
      console.log(data.tickets);
      dispatch({
        type: GET_ALL_TICKETS_BY_USER_SUCCESS,
        payload: data.tickets,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_TICKETS_BY_USER_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
};
