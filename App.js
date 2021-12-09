import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// Util imports
import { theme } from "./src/utils/theme/";
import { ThemeProvider } from "styled-components/native";

// Page imports
import { Login } from "./src/pages/Login";
import { Homepage } from "./src/pages/Homepage";
import { MapPage } from "./src/pages/MapPage";
import { ProfilePage } from "./src/pages/ProfilePage";
import { Settings } from "./src/pages/Settings";
// Nav Imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

// Font imports
import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

// Styled components

const NavBarContainer = styled(NavigationContainer)`
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });
  const [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
  });
  // Login checker
  const [loggedIn, setLoggedIn] = useState(true);

  if (!robotoLoaded || !ralewayLoaded) {
    return null;
  }

  return (
    <ThemeProvider
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      theme={theme}
    >
      {loggedIn ? (
        <NavBarContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName = "";

                if (route.name === "Homepage") {
                  iconName = "md-home-outline";
                } else if (route.name === "Maps") {
                  iconName = "md-map";
                } else if (route.name === "Profile") {
                  iconName = "md-person-circle-outline";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Homepage" component={Homepage} />
            <Tab.Screen name="Maps" component={MapPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavBarContainer>
      ) : (
        <Login login={setLoggedIn} />
      )}
    </ThemeProvider>
  );
}
