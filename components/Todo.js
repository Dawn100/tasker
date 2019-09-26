import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { styles } from "../styles";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.todo.completed ? styles.done : styles.waiting
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={this.state.style}
        onPress={this.props.onComplete}
      >
        <View testID={"root"} style={{ backgroundColor: "white" }}>
          <Text testID={"name"}>{this.props.todo.todo}</Text>
          <Text testID={"status"}>
            Is complete? {this.props.todo.completed + ""}
          </Text>
          <Text testID={"id"}>{this.props.todo.id}</Text>
          <Button title="Delete" onPress={this.props.onDelete} />
        </View>
      </TouchableOpacity>
    );
  }
}
export default Todo;
