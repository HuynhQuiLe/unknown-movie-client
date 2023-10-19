import { SHOW_HOME_PAGE } from "../../constant/effect/effectConstants";

const initialState = {
  isShowHomePage: false,
};

export const effectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_HOME_PAGE:
      return { ...state, isShowHomePage: true };

    default:
      return { ...state };
  }
};
