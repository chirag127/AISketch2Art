import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.header}>
                <Text style={styles.title}>AISketch2Art</Text>
                <Text style={styles.subtitle}>
                    Transform your sketches into amazing art with AI
                </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/sketch-to-art.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>How it works:</Text>
                <View style={styles.stepContainer}>
                    <View style={styles.step}>
                        <Text style={styles.stepNumber}>1</Text>
                        <Text style={styles.stepText}>
                            Draw your sketch on the canvas
                        </Text>
                    </View>
                    <View style={styles.step}>
                        <Text style={styles.stepNumber}>2</Text>
                        <Text style={styles.stepText}>Choose an art style</Text>
                    </View>
                    <View style={styles.step}>
                        <Text style={styles.stepNumber}>3</Text>
                        <Text style={styles.stepText}>
                            Let AI transform your sketch
                        </Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Canvas")}
            >
                <Text style={styles.buttonText}>Start Drawing</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#6200ee",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    image: {
        width: "90%",
        height: 200,
        borderRadius: 10,
        backgroundColor: "#e0e0e0",
    },
    infoContainer: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        elevation: 2,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#333",
    },
    stepContainer: {
        marginTop: 10,
    },
    step: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    stepNumber: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#6200ee",
        color: "#fff",
        textAlign: "center",
        lineHeight: 30,
        marginRight: 15,
        fontWeight: "bold",
    },
    stepText: {
        fontSize: 16,
        color: "#333",
    },
    button: {
        backgroundColor: "#6200ee",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginHorizontal: 20,
        marginBottom: 30,
        alignItems: "center",
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default HomeScreen;
