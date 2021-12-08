import React, { useState } from "react";
import { Colors } from "./src/utils/Colors";
import { StyleSheet, View } from "react-native";
import { Login } from "./src/pages/Login";
import { Homepage } from "./src/pages/Homepage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <View style={styles.container}>
      {loggedIn ? <Homepage /> : <Login login={setLoggedIn} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
