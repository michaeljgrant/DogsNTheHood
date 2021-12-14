import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LoginContext } from "../../service/LoginContext";
import { AccountNavigation } from "./AccountNavigation";
// Page imports
import { Homepage } from "../../pages/Homepage";
import { MapPage } from "../../pages/MapPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { Settings } from "../../pages/Settings";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Homepage: "md-home-outline",
  Maps: "md-map",
  Profile: "md-person-outline",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarActiveTintColor: "#ff4500",
    tabBarInactiveTintColor: "blue",
  };
};

export const AppNavigator = () => {
  const { isAuthenticated } = useContext(LoginContext);
  return isAuthenticated ? (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Homepage" component={Homepage} />
        <Tab.Screen name="Maps" component={MapPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AccountNavigation />
    </NavigationContainer>
  );
};
