import React, { Component } from "react";
import { ScrollView } from "react-native";
import Todo from "./Todo";
import { connect } from "react-redux";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        {this.props.todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ScrollView>
    );
  }
}
const mapStateToProps = storeState => {
  return {
    todos: storeState.todos
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
