import React, { Component } from "react";
import { ScrollView } from "react-native";
import Todo from "./Todo";
import { connect } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scroll = null;
  }

  render() {
    return (
      <ScrollView
        testID={"list"}
        contentContainerStyle={{ alignItems: "center" }}
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {this.props.todos.map((todo, index) => (
          <Todo
            key={index}
            onComplete={() => {
              this.props.onComplete(todo.id);
            }}
            onDelete={() => {
              this.props.onDelete(todo.id);
            }}
            todo={todo}
          />
        ))}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onComplete: id => {
      dispatch(completeTodo(id));
    },
    onDelete: id => {
      dispatch(deleteTodo(id));
    }
  };
};

const mapStateToProps = storeState => {
  return {
    todos: storeState.todos
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
