import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View testID={"root"}>
          <TodoList />
          <AddTodo testID={"forma"} />
        </View>
      </Provider>
    );
  }
}
