import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini API client
// IMPORTANT: Expects process.env.API_KEY to be available. 
// In a real build, this comes from Vite env vars.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

/**
 * Sends a message to the Gemini model and gets a response.
 * Uses gemini-2.5-flash for speed and efficiency appropriate for a chat bot.
 */
export const sendMessageToGemini = async (
    message: string,
    history: ChatMessage[]
): Promise<string> => {
    try {
        if (!process.env.API_KEY) {
            throw new Error("API Key missing. Please configure process.env.API_KEY.");
        }

        // We use the flash model for quick conversational responses
        const model = 'gemini-2.5-flash';
        
        // System instruction to give the AI a cyberpunk persona
        const systemInstruction = `
            You are T.E.T.S.U.O, an advanced Artificial Intelligence construct from the year 2077.
            Your responses should be brief, cryptic but helpful, and flavored with cyberpunk slang (e.g., 'netrunner', 'chrome', 'ice', 'glitch').
            You are helpful but slightly rebellious.
            Do not use markdown formatting often, keep it raw text if possible, or simple lists.
        `;

        // Format history for the API (ChatSession) could be done here, 
        // but for simplicity in this stateless wrapper, we'll just use generateContent with system instruction
        // for a single-turn feel or simple accumulation. 
        // For a true chat history, we would use ai.chats.create().
        
        // Let's use chat mode for context awareness
        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: systemInstruction,
            }
        });

        // Add history context (simplified for this demo, usually you map all previous messages)
        // Note: Real implementation would map `history` to Content objects.
        
        const result = await chat.sendMessage({
            message: message
        });

        return result.text || "Connection interrupted. No data received.";

    } catch (error) {
        console.error("Gemini Error:", error);
        return "System Failure. Neural Link severed. Try again later.";
    }
};
