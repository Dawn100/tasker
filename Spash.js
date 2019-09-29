import React, { Component } from "react";
import { View, Image, StatusBar } from "react-native";
import { Text, Container } from "native-base";

class Splash extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {};

    this.interval = setInterval(() => {
      this.main();
    }, 4000);
  }

  main = () => {
    clearInterval(this.interval);
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#038C65",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <StatusBar backgroundColor={"#038C65"} />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/icon.png")}
        />
        <Text style={{ padding: 40, color: "#f8f8f8", fontSize: 30 }}>
          The Tasker App.
        </Text>
      </View>
    );
  }
}

export default Splash;
