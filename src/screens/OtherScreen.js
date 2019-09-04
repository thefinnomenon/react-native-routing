import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default OtherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>I am another screen!</Text>
    </View>
  );
};

navigationOptions = {
  drawerLabel: "Other"
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
