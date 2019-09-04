import React from "react";
import { useScreens } from "react-native-screens";
useScreens();
import TabNavigator from "./src/navigators/TabNavigator";

export default function App() {
  return <TabNavigator />;
}
