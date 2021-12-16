import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
// Util imports
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/utils/theme";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { LoginContextProvider } from "./src/service/LoginContext";

// Nav Import
import { AppNavigator } from "./src/components/AppNavigation/AppNavigator";

// Font imports
import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFV4WJOlqpkuIKaRX0_-1Rg04j6ZGljA4",
  authDomain: "dogsnthehood.firebaseapp.com",
  projectId: "dogsnthehood",
  storageBucket: "dogsnthehood.appspot.com",
  messagingSenderId: "521099451334",
  appId: "1:521099451334:web:5525485c00a481617ff0c7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });
  const [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
  });

  if (!robotoLoaded || !ralewayLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoginContextProvider>
          <AppNavigator />
        </LoginContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
