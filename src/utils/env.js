// import { Platform } from "react-native";

const liveHost = "https://us-central1-meals-to-go-cd149.cloudfunctions.net";
// const localHost = "http://127.0.0.1:5001/meals-to-go-cd149/us-central1";

// export const isAndroid = Platform.OS === "android";
// export const isDevelopment = process.env.NODE_ENV === "development";
// export const isMock = false;

// export const host = !isDevelopment || isAndroid ? liveHost : localHost;

// Can't use the above code because it'll always be in development mode. Therefore, let's stick to using the live links at all times.

export const host = liveHost;
