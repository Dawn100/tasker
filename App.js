import MainScreen from "./MainScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Splash from "./Spash";
import Task from "./components/Task";

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
  Main: { screen: MainScreen },
  Task: { screen: Task }
});

export default createAppContainer(AppNavigator);
