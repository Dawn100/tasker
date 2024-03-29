import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./actions";

const initialTodos = [
  {
    id: 0,
    todo: "Todo 0",
    start: "16:00",
    stop: "16:30",
    completed: false
  },
  {
    id: 1,
    todo: "Todo 1",
    start: "17:05",
    stop: "17:30",
    completed: true
  }
];

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todo: action.payload.todo,
          start: action.payload.start,
          stop: action.payload.stop,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ];
    case DELETE_TODO:
      state.map((todo, index) => {
        if (todo.id === action.payload.id) {
          state.splice(index, 1);
        }
      });
      return [...state];

    case COMPLETE_TODO:
      state.map((todo, index) => {
        if (todo.id === action.payload.id) {
          todo.completed = true;
        }
      });
      return [...state];

    default:
      return state;
  }
};

export const reducer = combineReducers({
  todos: todosReducer
});
