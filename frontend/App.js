import React from "react";
import { LogBox } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

// Ignore specific warnings
LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
]);

export default function App() {
    return <AppNavigator />;
}
