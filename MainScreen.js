import React, { Component } from "react";
import { Provider } from "react-redux";
import { Container, Header, Title, Left, Right, Body } from "native-base";
import * as Font from "expo-font";
import { StatusBar, Image, AsyncStorage, AppState } from "react-native";
import { createStore } from "redux";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import { styles } from "./styles";
import { loadState, saveStore } from "./redux/persist";
import { reducer } from "./redux/reducers";

class MainScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
    this.store = null;
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto_medium: require("./assets/Roboto_medium.ttf")
    });

    const persistedState = await loadState();
    if (persistedState !== undefined) {
      const today = new Date().getDay();
      const last = new Date(persistedState.time).getDay();

      if (today === last) {
        this.store = createStore(reducer, persistedState.todoStore);
      } else {
        this.store = createStore(reducer);
      }
    } else {
      this.store = createStore(reducer);
    }

    this.store.subscribe(() => {
      saveStore(this.store.getState());
    });

    this.setState({ isReady: true });
  }

  startTask = todo => {
    this.props.navigation.navigate("Task", { todo: todo });
  };
  render() {
    if (!this.state.isReady) {
      return null;
    }

    return (
      <Provider store={this.store}>
        <Container style={styles.app} testID={"root"}>
          <Header style={{ backgroundColor: "#038C65f2", height: 60 }}>
            <StatusBar backgroundColor={"#038C65ff"} />
            <Left
              style={{
                flex: 1
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("./assets/icon.png")}
              />
            </Left>
            <Body style={{ flex: 1 }}>
              <Title style={{ color: "#fff" }}>Tasks List</Title>
            </Body>
            <Right style={{ flex: 1 }} />
          </Header>
          <TodoList onItemSelected={this.startTask} />
          <AddTodo testID={"form"} />
        </Container>
      </Provider>
    );
  }
}
export default MainScreen;
