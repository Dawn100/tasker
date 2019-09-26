import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../styles";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.todo.completed ? styles.done : styles.waiting
    };
  }

  complete = () => {
    this.setState({
      style: this.state.style === styles.done ? styles.waiting : styles.done
    });
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

export default Todo;
