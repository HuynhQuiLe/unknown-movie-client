import {
  GET_ALL_CAROUSELS_FAILURE,
  GET_ALL_CAROUSELS_REQUEST,
  GET_ALL_CAROUSELS_SUCCESS,
} from "../../constant/carousel/carouselConstants";

const initialState = {
  carousels: [
    {
      hinhAnh: "https://routine.vn/media/catalog/product/c/h/cheo_20_5_9.png",
    },
  ],
  isLoading: false,
  error: null,
};

export const carouselReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CAROUSELS_REQUEST:
      return { ...state, isLoading: true };

    case GET_ALL_CAROUSELS_SUCCESS:
      return { ...state, isLoading: false, carousels: payload };

    case GET_ALL_CAROUSELS_FAILURE:
      return { ...state, isLoading: false, error: payload.message };

    default:
      return { ...state };
  }
};
