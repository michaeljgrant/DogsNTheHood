import { Platform } from "react-native";

const liveHost = "";
const localHost = "http://localhost:8080/dogznthehood/aus-east";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
