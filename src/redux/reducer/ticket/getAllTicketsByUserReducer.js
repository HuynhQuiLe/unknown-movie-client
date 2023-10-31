import {
  GET_ALL_TICKETS_BY_USER_FAILURE,
  GET_ALL_TICKETS_BY_USER_REQUEST,
  GET_ALL_TICKETS_BY_USER_SUCCESS,
} from "../../constant/ticket/getAllTicketsByUserConstants";

const initialState = {
  isLoading: false,
  tickets: null,
  error: null,
};

export const getAllTicketsByUserReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_TICKETS_BY_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_ALL_TICKETS_BY_USER_SUCCESS:
      return { ...state, isLoading: false, tickets: payload, error: null };

    case GET_ALL_TICKETS_BY_USER_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
