import React, { Component } from "react";
import { Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0, _isMounted: false };
    this.counterId = setInterval(this.calculateProgress, 10);
    this.start =
      parseInt(this.props.todo.start.split(":")[0]) * 60 * 60 +
      parseInt(this.props.todo.start.split(":")[1]) * 60;

    this.stop =
      parseInt(this.props.todo.stop.split(":")[0]) * 60 * 60 +
      parseInt(this.props.todo.stop.split(":")[1]) * 60;
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  calculateProgress = () => {
    const now = new Date();
    const current =
      now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();

    const elapsed = current - this.start;

    const duration = this.stop - this.start;

    var progress = 0;
    if (elapsed >= 0 && elapsed < duration) {
      progress = elapsed / duration;
      this.setState({
        progress: progress
      });
    } else {
      this.setState({
        progress: 1
      });
    }
    if (progress >= 1) {
      clearInterval(this.counterId);
    }
  };
  render() {
    return (
      <ProgressCircle
        percent={this.state.progress * 100}
        radius={100}
        borderWidth={32}
        color={"#038C65"}
        shadowColor="#bfbeb3"
        bgColor="#dadada"
      >
        <Text style={{ fontSize: 30, color: "#999" }}>
          {(this.state.progress * 100).toFixed()}%
        </Text>
      </ProgressCircle>
    );
  }
}

export default Progress;
