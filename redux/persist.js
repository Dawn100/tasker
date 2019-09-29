import { AsyncStorage } from "react-native";

export const loadState = async () => {
  try {
    const taskerStore = await AsyncStorage.getItem("TASKERTODOS");
    if (taskerStore !== null) {
      return JSON.parse(taskerStore);
    }

    console.log("load state returned errr-> " + error);
    return undefined;
  } catch (error) {
    console.log("load state error " + error);
    return undefined;
  }
};

export const saveStore = async store => {
  try {
    let storingValue = JSON.stringify({
      todoStore: store,
      time: new Date()
    });
    await AsyncStorage.setItem("TASKERTODOS", storingValue);
  } catch (err) {
    console.log("Save store error" + err);
  }
};
