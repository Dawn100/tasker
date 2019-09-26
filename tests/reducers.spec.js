import { reducer } from "../redux/reducers";
import { addTodo, deleteTodo, completeTodo } from "../redux/actions";

it("Should return Initial State", () => {
  const returnedState = reducer(undefined, {});
  expect(returnedState).toEqual({ todos: [] });
});

it("Should handle ADD_TODO action", () => {
  const returnedState = reducer(undefined, addTodo("Todo 1"));

  expect(returnedState).toEqual({
    todos: [
      {
        id: 0,
        completed: false,
        todo: "Todo 1"
      }
    ]
  });

  const nextState = reducer(returnedState, addTodo("Todo 2"));

  expect(nextState).toEqual({
    todos: [
      {
        todo: "Todo 2",
        completed: false,
        id: 1
      },
      ...returnedState.todos
    ]
  });
});

it("Should handle DELETE_TODO action", () => {
  const bye = {
    id: 0,
    todo: "Todo 0",
    completed: false
  };
  const initialTodos = [
    {
      id: 0,
      todo: "Todo 0",
      completed: false
    },
    {
      id: 1,
      todo: "Todo 1",
      completed: false
    }
  ];

  const newState = reducer({ todos: initialTodos }, deleteTodo(bye.id));
  expect(newState.todos).toEqual(expect.not.arrayContaining([bye]));
});

it("Should handle COMPLETE_TODO action", () => {
  const toBeCompleted = {
    id: 0,
    todo: "Todo 0",
    completed: false
  };
  const initialTodos = [
    toBeCompleted,
    {
      id: 1,
      todo: "Todo 1",
      completed: false
    }
  ];

  const newState = reducer(
    { todos: initialTodos },
    completeTodo(toBeCompleted.id)
  );

  expect(newState.todos[0].completed).toBe(true);
});
