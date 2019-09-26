import { create, act } from "react-test-renderer";
import React from "react";
import App from "../App";

describe("App", function() {
  const app = create(<App />);
  it("Renders self", function() {
    expect(app.toJSON()).toMatchSnapshot();
    expect(app.toJSON().type).toEqual("View");
    expect(app.toJSON().props.testID).toEqual("root");
  });

  describe("TodoList", function() {
    const list = app.toJSON().children[0];

    it("Renders self", function() {
      expect(list.type).toEqual("RCTScrollView");
      expect(list.props.testID).toEqual("list");
    });
    it("Renders empty todo list", function() {
      expect(list.children[0].children).toBeNull();
    });
  });
  describe("AddTodo", function() {
    const form = app.toJSON().children[1];

    it("Renders self", function() {
      expect(form.type).toEqual("View");
      expect(form.props.testID).toEqual("form");
    });

    it("Renders TextInput", function() {
      expect(form.children[0].type).toEqual("TextInput");
      expect(form.children[0].props.testID).toEqual("textInput");
    });
    it("Renders Add Button", function() {
      expect(form.children[1].type).toEqual("View");
      expect(form.children[1].props.testID).toEqual("addButton");
      expect(form.children[1].props.accessibilityRole).toEqual("button");
    });
  });
});

describe("Application", function() {
  const app = create(<App />);
  const list = app.root.findByProps({ testID: "list" });
  const textInput = app.root.findByProps({ testID: "textInput" });
  const addButton = app.root.findByProps({ testID: "addButton" });
  it("Adds new todo tasks", () => {
    act(async () => textInput.props.onChangeText("Task z")).then(
      () => {
        expect(textInput.props.value).toEqual("Task z");
        act(async () => addButton.props.onPress()).then(
          () => {
            expect(list.props.children[0].props.todo.todo).toEqual("Task z");
          },
          () => {}
        );
      },
      () => {}
    );
  });
});
