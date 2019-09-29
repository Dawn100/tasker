import React, { Component } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  TimePickerAndroid
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Fab, Icon, Button, DatePicker, Text } from "native-base";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      start: "",
      stop: ""
    };
  }

  pickTime = async typeoftime => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      });

      if (action !== TimePickerAndroid.dismissedAction) {
        if (typeoftime === "start") {
          this.setState({ start: "" + hour + ":" + minute });
        } else {
          this.setState({ stop: "" + hour + ":" + minute });
        }
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  };
  render() {
    return (
      <KeyboardAvoidingView testID={"form"} behavior={"height"}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20
          }}
        >
          <View
            style={{
              width: "85%",
              backgroundColor: "#ffffff",
              borderColor: "#555555",
              bottom: 5,
              borderRadius: 30,
              borderWidth: 0.1,
              paddingVertical: 2,
              paddingHorizontal: 20,
              flexDirection: "row"
            }}
          >
            {this.state.start !== "" ? (
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{ color: "#ccd", fontSize: 10 }}
                  onPress={() => this.pickTime("start")}
                >
                  start
                </Text>
                <Text
                  style={{ color: "teal", fontSize: 12 }}
                  onPress={() => this.pickTime("start")}
                >
                  {this.state.start}h
                </Text>
              </View>
            ) : (
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{ color: "#ccd", fontSize: 12 }}
                  onPress={() => this.pickTime("start")}
                >
                  start
                </Text>
                <Icon
                  style={{
                    color: "#ccc"
                  }}
                  onPress={() => this.pickTime("start")}
                  name="md-time"
                />
              </View>
            )}

            <TextInput
              testID={"textInput"}
              placeholder="Add a Task..."
              style={{
                fontSize: 18,
                color: "#666666",
                width: "80%",
                paddingLeft: 15,
                marginTop:10
                }}
              multiline
              value={this.state.todo}
              onChangeText={todo => {
                this.setState({ todo });
              }}
            />
            {this.state.start !== "" ? (
              this.state.stop !== "" ? (
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{ color: "#ccd", fontSize: 10 }}
                    onPress={() => this.pickTime("stop")}
                  >
                    stop
                  </Text>
                  <Text
                    style={{ color: "teal", fontSize: 12 }}
                    onPress={() => this.pickTime("stop")}
                  >
                    {this.state.stop}h
                  </Text>
                </View>
              ) : (
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{ color: "#ccd", fontSize: 12 }}
                    onPress={() => this.pickTime("stop")}
                  >
                    stop
                  </Text>
                  <Icon
                    style={{
                      alignSelf: "center",
                      color: "#ccc"
                    }}
                    onPress={() => this.pickTime("stop")}
                    name="md-stopwatch"
                  />
                </View>
              )
            ) : null}
          </View>
          <Button
            style={{
              backgroundColor:
                this.state.todo === "" ||
                this.state.start === "" ||
                this.state.stop === ""
                  ? "#fff"
                  : "#067c23",
              height: Dimensions.get("screen").width * 0.15,
              width: Dimensions.get("screen").width * 0.15,
              margin: Dimensions.get("screen").width * 0.01,
              justifyContent: "center",
              alignItems: "center",
              bottom: 5
            }}
            testID="addButton"
            disabled={
              this.state.todo === "" ||
              this.state.start === "" ||
              this.state.stop === ""
                ? true
                : false
            }
            onPress={() => this.props.onAdd(this.state)}
            rounded
          >
            <Icon
              style={{
                color:
                  this.state.todo === "" ||
                  this.state.start === "" ||
                  this.state.stop === ""
                    ? "#067c23"
                    : "#fff",
                alignSelf: "center"
              }}
              name="md-send"
            />
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
