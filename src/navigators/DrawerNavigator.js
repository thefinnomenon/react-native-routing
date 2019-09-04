import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import DrawerScreen from "../screens/DrawerScreen";
import OtherScreen from "../screens/OtherScreen";

export default DrawerNavigator = createDrawerNavigator({
  Default: DrawerScreen,
  Other: OtherScreen
});
