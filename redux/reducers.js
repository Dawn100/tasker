import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO } from "./actions";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          todo: action.payload.todo,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        },
        ...state
      ];
    case DELETE_TODO:
      state.map((todo, index) => {
        if (todo.id === action.payload.id) {
          state.splice(index, 1);
        }
      });
      return state;

    default:
      return state;
  }
};

export const reducer = combineReducers({
  todos: todosReducer
});
