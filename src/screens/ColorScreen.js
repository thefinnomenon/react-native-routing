import React from "react";
import { View } from "react-native";

export default ColorScreen = ({ navigation }) => {
  const color = navigation.getParam("color", "white");

  return <View style={{ flex: 1, backgroundColor: color }} />;
};

ColorScreen.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam("color", "White")
});
