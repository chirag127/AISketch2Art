import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import CanvasScreen from "../screens/CanvasScreen";
import ResultScreen from "../screens/ResultScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#6200ee",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "AISketch2Art" }}
                />
                <Stack.Screen
                    name="Canvas"
                    component={CanvasScreen}
                    options={{ title: "Draw Your Sketch" }}
                />
                <Stack.Screen
                    name="Result"
                    component={ResultScreen}
                    options={{ title: "Your AI Art" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
