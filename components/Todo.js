import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ProgressBarAndroid
} from "react-native";
import { Card, Button, Icon } from "native-base";
import { styles } from "../styles";
import Progress from "./Progress";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusIcon: this.props.todo.completed ? styles.done : styles.waiting,
      progress: 0
    };
  }

  render() {
    return (
      <Card
        style={{
          backgroundColor: "#fff",
          justifyContent: "space-between",
          borderRadius: 10,
          width: "90%",
          borderRadius: 10,
          padding: 10
        }}
        noShadow
      >
        <TouchableHighlight
          style={{ paddingVertical: 20 }}
          underlayColor={"#f5f5f5"}
          onPress={() => {
            this.props.detail();
          }}
        >
          <Text
            textBreakStrategy={"balanced"}
            testID={"name"}
            style={{
              fontSize: 20,
              color: "#666666",
              paddingVertical: 5,
              textAlign: "center"
            }}
          >
            {this.props.todo.todo}
          </Text>
        </TouchableHighlight>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Icon
            name="md-close"
            onPress={this.props.onDelete}
            style={{
              color: "#ff0030",
              fontSize: 20
            }}
          />

          <Icon
            name="md-checkmark-circle"
            onPress={() => this.props.onComplete()}
            style={{
              fontSize: 20,
              color: this.props.todo.completed ? "#018374" : "#bbbbbb"
            }}
          />
        </View>
      </Card>
    );
  }
}
export default Todo;
