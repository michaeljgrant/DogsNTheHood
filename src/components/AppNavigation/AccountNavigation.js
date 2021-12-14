import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { LoginContext } from "../../service/LoginContext";
// Page imports
import { Login } from "../../pages/Login";
import { RegisterUser } from "../../pages/RegisterUser";
import { Account } from "../../pages/Account";
const Stack = createStackNavigator();

export const AccountNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={Account} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegisterUser} />
    </Stack.Navigator>
  );
};
