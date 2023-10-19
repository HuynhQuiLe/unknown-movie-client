import {
  GET_SEAT_LAYOUT_BY_MSC_FAILURE,
  GET_SEAT_LAYOUT_BY_MSC_REQUEST,
  GET_SEAT_LAYOUT_BY_MSC_SUCCESS,
} from "../../constant/seat/getLayoutGheByMaSuatChieuConstants";

const initialState = {
  isLoading: false,
  layoutGheByMaSuatChieu: null,
  error: null,
};

export const getLayoutGheByMaSuatChieuReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_SEAT_LAYOUT_BY_MSC_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_SEAT_LAYOUT_BY_MSC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        layoutGheByMaSuatChieu: payload,
        error: null,
      };
    case GET_SEAT_LAYOUT_BY_MSC_FAILURE:
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
};
