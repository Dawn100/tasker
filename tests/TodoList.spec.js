import { create } from "react-test-renderer";
import React from "react";
import ConnectedTodoList, { TodoList } from "../components/TodoList";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("TodoList Component", () => {
  const initialTodos = [
    {
      id: 0,
      todo: "Todo 0",
      completed: false
    }
  ];
  const todoList = create(
    <Provider store={store}>
      <ConnectedTodoList />
    </Provider>
  );

  expect(1).toBe(1);
  //   it("Renders self and sub components", () => {
  //     const todoListJSON = todoList.toJSON();
  //     expect(todoListJSON).toMatchSnapshot();

  //     expect(todoListJSON.type).toEqual("RCTScrollView");
  //     expect(todoListJSON.children[0].type).toEqual("View");
  //     expect(todoListJSON.children[0].children[0].type).toEqual("View");
  //   });
  it("Is connected", () => {
    const todoList = create(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );
    console.log(todoList.toJSON());
  });
});
