import MainScreen from "./MainScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const AppNavigator = createSwitchNavigator({
  Main: { screen: MainScreen }
});

export default createAppContainer(AppNavigator);
