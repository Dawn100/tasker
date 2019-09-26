import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { styles } from "./styles";
import { Container, Header, Title, Left, Right, Body } from "native-base";
import * as Font from "expo-font";
import { StatusBar } from "react-native";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    //Load the font
    await Font.loadAsync({
      Roboto_medium: require("./assets/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
      <Provider store={store}>
        <Container style={styles.app} testID={"root"}>
          <Header style={{ backgroundColor: "#018374", height: 60 }}>
            <StatusBar backgroundColor={"#018374f0"} />
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 1 }}>
              <Title style={{ color: "#fff" }}>Todo List</Title>
            </Body>
            <Right style={{ flex: 1 }} />
          </Header>
          <TodoList />
          <AddTodo testID={"form"} />
        </Container>
      </Provider>
    );
  }
}
export default MainScreen;
