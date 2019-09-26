import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.todo.completed ? styles.done : styles.waiting
    };
  }

  complete = () => {
    this.setState({ completed: true });
  };
  render() {
    return (
      <TouchableOpacity style={this.state.style} onPress={this.complete}>
        <View testID={"root"} style={{ backgroundColor: "white" }}>
          <Text testID={"name"}>{this.props.todo.todo}</Text>
          <Text testID={"status"}>
            Is complete? {this.props.todo.completed + ""}
          </Text>
          <Text testID={"id"}>{this.props.todo.id}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  waiting: {
    color: "#0f0f0f",
    backgroundColor: "#ccc"
  },
  done: {
    color: "#f0f0f0",
    backgroundColor: "#008080"
  }
});
export default Todo;
