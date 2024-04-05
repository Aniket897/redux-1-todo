import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionsType";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      return [...state, action.payload];
    case DELETE_TODO:
      return [...state.filter((todo) => todo.id !== action.payload.id)];
    case UPDATE_TODO:
      return [
        ...state.map((todo) => {
          return todo.id == action.payload.id
            ? action.payload.updatedTodo
            : todo;
        }),
      ];
    default:
      return state;
  }
};
