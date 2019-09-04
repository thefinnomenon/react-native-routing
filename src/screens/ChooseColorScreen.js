import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default ChooseColorScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Red"
        onPress={() => navigation.navigate("Color", { color: "red" })}
      />
      <Button
        title="Blue"
        onPress={() => navigation.navigate("Color", { color: "blue" })}
      />
    </View>
  );
};

ChooseColorScreen.navigationOptions = screenProps => ({
  title: "Choose Color"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
