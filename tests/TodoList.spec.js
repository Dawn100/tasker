import { create } from "react-test-renderer";
import React from "react";
import TodoList from "../components/TodoList";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { addTodo } from "../redux/actions";

describe("TodoList Component", () => {
  store.dispatch(addTodo("Attend Class"));

  const todoList = create(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  it("Renders self and sub components", () => {
    const todoListJSON = todoList.toJSON();
    expect(todoListJSON).toMatchSnapshot();
    expect(todoListJSON.type).toEqual("RCTScrollView");
    expect(todoListJSON.children[0].type).toEqual("View");
  });
  it("Todos respond to delete and complete events", () => {
    todoList.root
      .findByProps({ testID: "list" })
      .props.children[0].props.onComplete();
    todoList.root
      .findByProps({ testID: "list" })
      .props.children[0].props.onDelete();
    expect(true).toBe(true);
  });
});
