import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(`${process.env.GENAI_API_KEY}`);

export const genAiGenerateText = async (input: string): Promise<string> => {
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(input);
    return result.response.text();
  } catch (error) {
    console.error(`Error completing input:${error}`);
    return "";
  }
};
