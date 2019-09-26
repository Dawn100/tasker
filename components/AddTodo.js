import React, { Component } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Fab, Icon, Button, DatePicker } from "native-base";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }
  render() {
    return (
      <KeyboardAvoidingView testID={"form"} behavior={"height"}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            paddingVertical: 3
          }}
        >
          <TextInput
            testID={"textInput"}
            placeholder="Add a Task..."
            style={{
              width: "80%",
              backgroundColor: "#ffffff",
              borderColor: "#555555",
              fontSize: 18,
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 30,
              color: "#008090",
              borderWidth: 0.2
            }}
            multiline
            value={this.state.todo}
            onChangeText={todo => {
              this.setState({ todo });
            }}
          />
          <Button
            style={{
              backgroundColor: this.state.todo === "" ? "#fff" : "#008080",
              height: Dimensions.get("screen").width * 0.15,
              width: Dimensions.get("screen").width * 0.15,
              margin: Dimensions.get("screen").width * 0.01,
              justifyContent: "center",
              alignItems: "center"
            }}
            testID="addButton"
            disabled={this.state.todo === "" ? true : false}
            onPress={() => this.props.onAdd(this.state.todo)}
            rounded
          >
            <Icon
              style={{
                color: this.state.todo === "" ? "#008080" : "#fff",
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
