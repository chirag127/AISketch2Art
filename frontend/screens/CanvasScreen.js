import React, { useState, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import * as FileSystem from "expo-file-system";
import ViewShot from "react-native-view-shot";

const { width, height } = Dimensions.get("window");
const CANVAS_PADDING = 20;
const CANVAS_SIZE = width - CANVAS_PADDING * 2;

const CanvasScreen = ({ navigation }) => {
    const [paths, setPaths] = useState([]);
    const [currentPath, setCurrentPath] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("Anime");
    const [isLoading, setIsLoading] = useState(false);
    const viewShotRef = useRef();

    const artStyles = [
        "Anime",
        "Watercolor",
        "Oil Painting",
        "Pixel Art",
        "Comic Book",
    ];

    const handleTouchStart = (event) => {
        const { locationX, locationY } = event.nativeEvent;
        const newPath = `M ${locationX} ${locationY}`;
        setCurrentPath(newPath);
    };

    const handleTouchMove = (event) => {
        if (currentPath) {
            const { locationX, locationY } = event.nativeEvent;
            const newPath = `${currentPath} L ${locationX} ${locationY}`;
            setCurrentPath(newPath);
        }
    };

    const handleTouchEnd = () => {
        if (currentPath) {
            setPaths([...paths, currentPath]);
            setCurrentPath("");
        }
    };

    const clearCanvas = () => {
        setPaths([]);
        setCurrentPath("");
    };

    const captureCanvas = async () => {
        if (paths.length === 0) {
            Alert.alert(
                "Empty Canvas",
                "Please draw something before converting."
            );
            return;
        }

        try {
            setIsLoading(true);

            // Capture the canvas as an image
            const uri = await viewShotRef.current.capture();

            // Navigate to the result screen with the captured image URI and selected style
            navigation.navigate("Result", {
                imageUri: uri,
                style: selectedStyle,
            });
        } catch (error) {
            console.error("Error capturing canvas:", error);
            Alert.alert(
                "Error",
                "Failed to capture your drawing. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.styleSelector}>
                <Text style={styles.sectionTitle}>Select Art Style:</Text>
                <View style={styles.styleOptions}>
                    {artStyles.map((style) => (
                        <TouchableOpacity
                            key={style}
                            style={[
                                styles.styleButton,
                                selectedStyle === style &&
                                    styles.selectedStyleButton,
                            ]}
                            onPress={() => setSelectedStyle(style)}
                        >
                            <Text
                                style={[
                                    styles.styleButtonText,
                                    selectedStyle === style &&
                                        styles.selectedStyleButtonText,
                                ]}
                            >
                                {style}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <Text style={styles.sectionTitle}>Draw Your Sketch:</Text>

            <ViewShot
                ref={viewShotRef}
                options={{ format: "jpg", quality: 0.9 }}
                style={styles.canvasContainer}
            >
                <View
                    style={styles.canvas}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <Svg height="100%" width="100%">
                        {paths.map((path, index) => (
                            <Path
                                key={index}
                                d={path}
                                stroke="black"
                                strokeWidth={5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        ))}
                        {currentPath ? (
                            <Path
                                d={currentPath}
                                stroke="black"
                                strokeWidth={5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        ) : null}
                    </Svg>
                </View>
            </ViewShot>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.clearButton]}
                    onPress={clearCanvas}
                >
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.convertButton]}
                    onPress={captureCanvas}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Convert to Art</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: CANVAS_PADDING,
        backgroundColor: "#f5f5f5",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    styleSelector: {
        marginBottom: 20,
    },
    styleOptions: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    styleButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: "#e0e0e0",
        marginRight: 10,
        marginBottom: 10,
    },
    selectedStyleButton: {
        backgroundColor: "#6200ee",
    },
    styleButtonText: {
        color: "#333",
    },
    selectedStyleButtonText: {
        color: "#fff",
    },
    canvasContainer: {
        width: CANVAS_SIZE,
        height: CANVAS_SIZE,
        alignSelf: "center",
    },
    canvas: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        overflow: "hidden",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    button: {
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginHorizontal: 5,
    },
    clearButton: {
        backgroundColor: "#f44336",
    },
    convertButton: {
        backgroundColor: "#6200ee",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default CanvasScreen;
