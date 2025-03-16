import { GEMINI_API_KEY } from "@env";
import * as FileSystem from "expo-file-system";

class GeminiService {
    constructor() {
        this.apiKey = GEMINI_API_KEY;
        this.baseUrl = "https://generativelanguage.googleapis.com/v1beta";
        this.model = "gemini-2.0-flash-exp-image-generation";
    }

    async convertSketchToArt(imageUri, style = "Anime") {
        try {
            // Convert image to base64
            const base64Image = await this.imageToBase64(imageUri);

            // Prepare the request body
            const requestBody = {
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                inline_data: {
                                    mime_type: "image/jpeg",
                                    data: base64Image,
                                },
                            },
                            {
                                text: `Convert this sketch into ${style} style art`,
                            },
                        ],
                    },
                ],
                generation_config: {
                    temperature: 1,
                    top_p: 0.95,
                    top_k: 40,
                    max_output_tokens: 8192,
                    response_modalities: ["text", "image"],
                    responseMimeType: "text/plain",
                },
            };

            // Make the API request
            const response = await fetch(
                `${this.baseUrl}/models/${this.model}:generateContent?key=${this.apiKey}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `API Error: ${errorData.error?.message || "Unknown error"}`
                );
            }

            const data = await response.json();

            // Extract the image data from the response
            const inlineData = data.candidates[0].content.parts[0].inlineData;

            if (!inlineData) {
                throw new Error("No image data returned from API");
            }

            // Save the base64 image to a temporary file
            const tempImagePath = `${
                FileSystem.cacheDirectory
            }generated_art_${Date.now()}.png`;
            await FileSystem.writeAsStringAsync(
                tempImagePath,
                inlineData.data,
                { encoding: FileSystem.EncodingType.Base64 }
            );

            return { success: true, imageUri: tempImagePath };
        } catch (error) {
            console.error("Error converting sketch to art:", error);
            return { success: false, error: error.message };
        }
    }

    async imageToBase64(uri) {
        try {
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            return base64;
        } catch (error) {
            console.error("Error converting image to base64:", error);
            throw error;
        }
    }
}

export default new GeminiService();
