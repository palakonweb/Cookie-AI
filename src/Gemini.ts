
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export const runGemini = async (userPrompt:string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (err) {
    console.error("Gemini Error:", err);
    throw err;
  }
};
