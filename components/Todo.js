import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Button, Icon } from "native-base";
import { styles } from "../styles";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusIcon: this.props.todo.completed ? styles.done : styles.waiting
    };
  }

  render() {
    return (
      <Card noShadow style={styles.todo}>
        <View
          testID={"todo"}
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <View style={{ padding: 20, flex: 10 }}>
            <Text
              textBreakStrategy={"balanced"}
              testID={"name"}
              style={{ fontSize: 18, color: "#666666" }}
            >
              {this.props.todo.todo}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 5,
              flex: 1
            }}
          >
            <Icon
              name="md-checkmark-circle"
              onPress={() => this.props.onComplete()}
              style={{
                fontSize: 20,
                color: this.props.todo.completed ? "#018374" : "#bbbbbb"
              }}
            />
            <Icon
              name="md-close"
              onPress={this.props.onDelete}
              style={{
                color: "#ff0030",
                fontSize: 20
              }}
            />
          </View>
        </View>
      </Card>
    );
  }
}
export default Todo;
