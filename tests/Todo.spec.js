import { create } from "react-test-renderer";
import React from "react";
import Todo from "../components/Todo";
import { mount } from "enzyme";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";

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
  it("it  has right state and responds to events", () => {
    const todoTouchableOpacity = todo.root.findByType(TouchableOpacity);
    // console.log(todoTouchableOpacity);
    expect(todoTouchableOpacity.props.style).toStrictEqual(styles.waiting);
    todoTouchableOpacity.props.onPress();
    expect(todoTouchableOpacity.props.style).toStrictEqual(styles.done);
  });
});
