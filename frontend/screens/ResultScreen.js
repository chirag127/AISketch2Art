import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    Share,
    ScrollView,
} from "react-native";
import * as FileSystem from "expo-file-system";
import GeminiService from "../services/GeminiService";

const ResultScreen = ({ route, navigation }) => {
    const { imageUri, style } = route.params;
    const [generatedImageUri, setGeneratedImageUri] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        convertSketchToArt();
    }, []);

    const convertSketchToArt = async () => {
        try {
            setIsLoading(true);
            setError(null);

            // Call the Gemini API service to convert the sketch
            const result = await GeminiService.convertSketchToArt(
                imageUri,
                style
            );

            if (result.success) {
                setGeneratedImageUri(result.imageUri);
            } else {
                setError(
                    result.error || "Failed to generate art. Please try again."
                );
            }
        } catch (error) {
            console.error("Error in convertSketchToArt:", error);
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const shareImage = async () => {
        try {
            if (!generatedImageUri) {
                Alert.alert("Error", "No image to share");
                return;
            }

            await Share.share({
                url: generatedImageUri,
                message: `Check out this amazing AI-generated ${style} art from my sketch using AISketch2Art!`,
            });
        } catch (error) {
            console.error("Error sharing image:", error);
            Alert.alert("Error", "Failed to share image");
        }
    };

    const tryAgain = () => {
        navigation.goBack();
    };

    const saveImage = async () => {
        try {
            if (!generatedImageUri) {
                Alert.alert("Error", "No image to save");
                return;
            }

            // In a real app, you would save to the device's photo library
            // For this example, we'll just show a success message
            Alert.alert("Success", "Image saved to your gallery!");
        } catch (error) {
            console.error("Error saving image:", error);
            Alert.alert("Error", "Failed to save image");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Your AI-Generated Art</Text>

                <View style={styles.imagesContainer}>
                    <View style={styles.imageWrapper}>
                        <Text style={styles.imageLabel}>Your Sketch</Text>
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.imageWrapper}>
                        <Text style={styles.imageLabel}>{style} Style</Text>
                        {isLoading ? (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator
                                    size="large"
                                    color="#6200ee"
                                />
                                <Text style={styles.loadingText}>
                                    Generating your art...
                                </Text>
                                <Text style={styles.loadingSubtext}>
                                    This may take a moment
                                </Text>
                            </View>
                        ) : error ? (
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>{error}</Text>
                                <TouchableOpacity
                                    style={styles.retryButton}
                                    onPress={convertSketchToArt}
                                >
                                    <Text style={styles.retryButtonText}>
                                        Retry
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Image
                                source={{ uri: generatedImageUri }}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        )}
                    </View>
                </View>

                {!isLoading && !error && generatedImageUri && (
                    <View style={styles.actionButtons}>
                        <TouchableOpacity
                            style={[styles.button, styles.shareButton]}
                            onPress={shareImage}
                        >
                            <Text style={styles.buttonText}>Share</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.saveButton]}
                            onPress={saveImage}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <TouchableOpacity
                    style={[styles.button, styles.tryAgainButton]}
                    onPress={tryAgain}
                >
                    <Text style={styles.buttonText}>
                        {error ? "Try Again" : "Create Another"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },
    imagesContainer: {
        marginBottom: 20,
    },
    imageWrapper: {
        marginBottom: 20,
    },
    imageLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#666",
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        backgroundColor: "#e0e0e0",
    },
    loadingContainer: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        backgroundColor: "#e0e0e0",
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#666",
    },
    loadingSubtext: {
        fontSize: 14,
        color: "#999",
        marginTop: 5,
    },
    errorContainer: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        backgroundColor: "#ffebee",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    errorText: {
        color: "#d32f2f",
        textAlign: "center",
        marginBottom: 15,
    },
    retryButton: {
        backgroundColor: "#d32f2f",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    retryButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    actionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    button: {
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    shareButton: {
        backgroundColor: "#2196f3",
        flex: 1,
        marginRight: 5,
    },
    saveButton: {
        backgroundColor: "#4caf50",
        flex: 1,
        marginLeft: 5,
    },
    tryAgainButton: {
        backgroundColor: "#6200ee",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ResultScreen;
