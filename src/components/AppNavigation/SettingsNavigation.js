import React from "react";
import { Settings } from "../../pages/Settings";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { CameraPopUp } from "../../pages/Camera";

const SettingsStack = createStackNavigator();

export const Settings = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Camera" component={CameraPopUp} />
    </SettingsStack.Navigator>
  );
};
