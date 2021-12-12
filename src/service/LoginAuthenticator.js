import React, { useState } from "react";
import firebase from "firebase/compat/app";

export const LoginAuthenticator = (email, password) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  }, []);
};
