import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
