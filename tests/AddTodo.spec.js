import React from "react";
import { Provider } from "react-redux";

import AddTodo from "../components/AddTodo";
import { create } from "react-test-renderer";
import { store } from "../redux/store";

describe("AddTodo Component", function() {
  it("Renders self and children", () => {
    const add = create(
      <Provider store={store}>
        <AddTodo onAdd={() => {}} />
      </Provider>
    );
    expect(add).toMatchSnapshot();
    add.root.findByProps({ testID: "addButton" }).props.onPress();
  });
});
