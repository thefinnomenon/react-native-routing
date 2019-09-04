import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import ChooseColorScreen from "../screens/ChooseColorScreen";
import ColorScreen from "../screens/ColorScreen";

export default ColorStackNavigator = createStackNavigator({
  ChooseColor: ChooseColorScreen,
  Color: ColorScreen
});
