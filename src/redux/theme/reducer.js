import { TOGGLE_THEME } from "./actionTypes";

const initialState = "light";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state == "light" ? "dark" : "light";
    default:
      return state;
  }
};
