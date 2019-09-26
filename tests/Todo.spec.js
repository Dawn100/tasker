import { create } from "react-test-renderer";
import React from "react";
import Todo from "../components/Todo";
import { mount } from "enzyme";

describe("Todo", () => {
  const testTodo = {
    id: 0,
    todo: "Todo 0",
    completed: false
  };
  const todo = create(<Todo todo={testTodo} />);
  it("should render self and subcomponents", () => {
    const todoJSON = todo.toJSON();
    expect(todoJSON).toMatchSnapshot();
    console.log(todoJSON);

    expect(todoJSON.type).toEqual("View");

    expect(todoJSON.children[0].children[0].type).toEqual("Text");
    expect(todoJSON.children[0].children[0].children[0]).toEqual("Todo 0");

    expect(todoJSON.children[0].children[1].type).toEqual("Text");
    expect(todoJSON.children[0].children[1].children[0]).toEqual(
      "Is complete? ",
      "false"
    );

    expect(todoJSON.children[0].children[2].type).toEqual("Text");
    expect(todoJSON.children[0].children[2].children[0]).toEqual("0");
  });
  it("it  has right state", () => {
    const todoInstance = todo.getInstance();
    // console.log(todoInstance);
  });
});
