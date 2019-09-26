import { create } from "react-test-renderer";
import React from "react";
import Todo from "../components/Todo";
import { TouchableOpacity, Button } from "react-native";
import { styles } from "../styles";

describe("Todo", () => {
  const testTodos = [
    {
      id: 0,
      todo: "Todo 0",
      completed: false
    }
  ];
  const todo = create(
    <Todo
      onComplete={() => {
        testTodos[0].completed = true;
      }}
      onDelete={() => {}}
      todo={testTodos[0]}
    />
  );
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
    expect(todoTouchableOpacity.props.style).toStrictEqual(styles.waiting);

    todoTouchableOpacity.props.onPress();

    const todoRerendered = create(
      <Todo
        onComplete={() => {
          testTodo.completed = true;
        }}
        onDelete={() => {
          return "Deleted";
        }}
        todo={testTodos[0]}
      />
    );
    const todoTouchableOpacity_r = todoRerendered.root.findByType(
      TouchableOpacity
    );
    expect(todoTouchableOpacity_r.props.style).toStrictEqual(styles.done);
    const todoDeleteButton = todoRerendered.root.findByType(Button);
    expect(todoDeleteButton.props.onPress()).toBe("Deleted");
  });
});
