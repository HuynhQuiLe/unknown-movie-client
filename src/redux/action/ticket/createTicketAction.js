import createTicketAPI from "../../../service/ticket/createTicketService";

export const createTicket = (ticket) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await createTicketAPI(ticket);
      //   dispatch({ type: GET_ALL_THEATERS_SUCCESS, payload: data.theaters });
    } catch (error) {
      console.log(error);
    }
  };
};
