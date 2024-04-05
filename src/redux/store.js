import { legacy_createStore, combineReducers } from "redux";
import { reducer as todoReducer } from "./todo/reducer";
import { reducer as themeReducer } from "./theme/reducer";
const reducers = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
});

export const store = legacy_createStore(reducers);
