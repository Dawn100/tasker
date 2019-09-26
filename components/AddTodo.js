import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }
  render() {
    return (
      <View testID={"form"}>
        <TextInput
          testID={"textInput"}
          placeholder="Add a Task..."
          value={this.state.todo}
          onChangeText={todo => {
            this.setState({ todo });
          }}
        />
        <Button
          testID="addButton"
          onPress={() => this.props.onAdd(this.state.todo)}
          title="Add"
        />
      </View>
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
