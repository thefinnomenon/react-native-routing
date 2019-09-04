import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default DrawerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Click this text or swipe in from the left to toggle the drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
};

DrawerScreen.navigationOptions = {
  drawerLabel: "Home"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
