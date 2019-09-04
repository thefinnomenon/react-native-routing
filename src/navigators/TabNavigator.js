import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../screens/HomeScreen";
import ColorStackNavigator from "./ColorStackNavigator";
import DrawerNavigator from "./DrawerNavigator";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Color: ColorStackNavigator,
  Drawer: DrawerNavigator
});

export default createAppContainer(TabNavigator);
