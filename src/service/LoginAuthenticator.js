import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const LoginAuthenticator = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const RegisterAuthenticator = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const LogoutAuthenticator = () => firebase.auth().signOut();
