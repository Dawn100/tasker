import React, { Component } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import Todo from "./Todo";
import { connect } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        testID={"list"}
        contentContainerStyle={{ alignItems: "center", flex: 1 }}
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {this.props.todos.length === 0 ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/icong.png")}
            />
          </View>
        ) : (
          this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              onComplete={() => {
                this.props.onComplete(todo.id);
              }}
              detail={() => {
                this.props.onItemSelected(todo);
              }}
              onDelete={() => {
                this.props.onDelete(todo.id);
              }}
              todo={todo}
            />
          ))
        )}
        <View style={{ height: 40 }} />
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
