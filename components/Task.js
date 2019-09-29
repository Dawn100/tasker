import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import Progress from "./Progress";

class Task extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
  }

  render() {
    const todo = this.props.navigation.getParam("todo");
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#dadada"
        }}
      >
        <StatusBar backgroundColor={"#dadada"} />
        <Progress todo={todo} />
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: "80%",
            paddingVertical: 20,
            borderBottomColor: "#aaa",
            borderBottomWidth: 1
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "#999" }}>Start</Text>
            <Text
              style={{ fontSize: 18, color: "#038C65", fontWeight: "bold" }}
            >
              {todo.start}h
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "#999" }}>Stop</Text>
            <Text
              style={{ fontSize: 18, color: "#038C65", fontWeight: "bold" }}
            >
              {todo.stop}h
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#aaa"
          }}
        >
          {todo.todo}
        </Text>
      </View>
    );
  }
}

export default Task;
