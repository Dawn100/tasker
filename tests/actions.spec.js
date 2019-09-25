import { addTodo, deleteTodo, ADD_TODO, DELETE_TODO } from "../redux/actions";

test("Test Add Action Creators", () => {
  const addAction = addTodo("Attend Class");

  expect(addAction).toStrictEqual({
    type: ADD_TODO,
    payload: { todo: "Attend Class" }
  });
});

test("Test Delete Action Creator", () => {
  const deleteAction = deleteTodo(1);
  expect(deleteAction).toStrictEqual({
    type: DELETE_TODO,
    payload: { id: 1 }
  });
});
